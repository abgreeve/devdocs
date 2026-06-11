---
title: CLI commands
tags:
  - CLI
  - Console
  - Symfony
description: Writing structured CLI commands for Moodle using the Symfony Console component
---

<Since version="5.3" issueNumber="MDL-85847" />

Moodle 5.3 introduces an additional CLI framework built on the [Symfony Console](https://symfony.com/doc/current/components/console.html) component, accessible through the new `bin/moodle` entry point.

This is an **additive** mechanism. It operates alongside Moodle's existing `admin/cli/*.php` scripts and does not replace them. The two approaches are independent and suit different installation contexts.

:::info[Composer dependencies required]

The `bin/moodle` entry point and all Symfony Console commands depend on Composer-managed dependencies (the `vendor/` directory). Moodle does not currently require a Composer-managed installation, so `bin/moodle` is only available on installations where Composer dependencies have been installed.

Existing `admin/cli/*.php` scripts have no such requirement and continue to work on every Moodle installation, regardless of whether Composer dependencies are present. This is the primary reason existing scripts have not been rewritten as Symfony Console commands — doing so would break sites that do not use Composer.

:::

## Existing CLI scripts {/* #existing-cli-scripts */}

Scripts under `admin/cli/` continue to be the appropriate choice when:

- A command must work on all Moodle installations, including those without Composer dependencies.
- You are maintaining or extending an existing `admin/cli/` script.

There is no current plan to migrate existing `admin/cli/` scripts to the Symfony Console framework.

## Entry point {/* #entry-point */}

All Symfony Console commands are invoked through the `bin/moodle` script from the Moodle root.

:::note

`bin/moodle` requires Composer dependencies to be installed. If the `vendor/` directory is absent, the entry point will not work.

:::

```bash
php bin/moodle <command> [options] [arguments]
```

For example:

```bash
# Run Moodle cron.
php bin/moodle admin:cron

# List all registered commands.
php bin/moodle list

# Show help for a command.
php bin/moodle help admin:purge-caches
```

## Command discovery {/* #command-discovery */}

Commands are discovered automatically. The framework scans every installed component for classes in the `\command` namespace (that is, classes matching `<component>\command\<classname>`) that extend `Symfony\Component\Console\Command\Command`.

Discovery is currently limited to **core components**. Plugin-provided commands are not yet supported.

## Creating a command {/* #creating-a-command */}

:::note

Command discovery is currently limited to **core components**. If you are developing a plugin, note that plugin-provided commands are not yet supported.

:::

### File location {/* #file-location */}

Place command classes under:

```
<component root>/classes/command/<classname>.php
```

For example, a `greet` command in `core_admin` lives at:

```
admin/classes/command/greet.php
```

### Declaring the command {/* #declaring-the-command */}

Use Symfony's `#[AsCommand]` PHP attribute to declare the command name, description, and optional aliases:

```php title="admin/classes/command/greet.php"
namespace core_admin\command;

use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

/**
 * A simple greeting command.
 *
 * @package    core_admin
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */
#[AsCommand(
    name: 'admin:greet',
    description: 'Print a greeting message',
)]
class greet extends Command {

    #[\Override]
    protected function configure(): void {
        $this->addArgument('name', InputArgument::OPTIONAL, 'Who to greet', 'World');
    }

    #[\Override]
    protected function execute(InputInterface $input, OutputInterface $output): int {
        $name = $input->getArgument('name');
        $output->writeln("<info>Hello, {$name}!</info>");
        return Command::SUCCESS;
    }
}
```

Run it with:

```bash
php bin/moodle admin:greet
# Hello, World!

php bin/moodle admin:greet Moodle
# Hello, Moodle!
```

### Naming conventions {/* #naming-conventions */}

Command names **must** start with a prefix derived from the component name. The prefix is formed by replacing underscores in the component's non-`core` part with colons:

| Component | Required prefix |
|-----------|-----------------|
| `core_admin` | `admin:` |
| `core_course` | `course:` |
| `mod_forum` | `forum:` |

<ValidExample title="Valid command names">

- `admin:cron` (component `core_admin`)
- `admin:purge-caches` (component `core_admin`)
- `admin:greet` (component `core_admin`)

</ValidExample>

<InvalidExample title="Invalid command names">

- `cron` — missing component prefix (unless registered as an alias)
- `core_admin:greet` — underscores must be replaced with colons in the prefix

</InvalidExample>

The framework enforces the prefix at runtime and throws a `\LogicException` if the name does not match the expected component prefix.

### Aliases {/* #aliases */}

Aliases provide shorter or alternative names for a command. They are declared in the `aliases` property of `#[AsCommand]`:

```php
#[AsCommand(
    name: 'admin:purge-caches',
    description: 'Purge Moodle caches without confirmation',
    aliases: ['purge-caches', 'core:purge-caches'],
)]
```

Aliases are not subject to the component prefix requirement.

## Global options {/* #global-options */}

All commands automatically support the following global options:

| Option | Description |
|--------|-------------|
| `--showsql` | Print every SQL query to the console before it is executed |
| `--showdebugging` | Enable `DEBUG_DEVELOPER` level output during command execution |

```bash
php bin/moodle admin:cron --showsql --showdebugging
```

## Testing commands {/* #testing-commands */}

### Using `get_testable_command` {/* #using-get-testable-command */}

`advanced_testcase` provides a `get_testable_command(string $commandname)` helper that returns a `Symfony\Component\Console\Tester\CommandTester`. This is the recommended approach when your command is registered with the application:

```php title="admin/tests/command/greet_test.php"
namespace core_admin\command;

/**
 * Tests for the greet command.
 *
 * @package    core_admin
 * @category   test
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */
#[\PHPUnit\Framework\Attributes\CoversClass(greet::class)]
final class greet_test extends \advanced_testcase {

    public function test_default_greeting(): void {
        $tester = $this->get_testable_command('admin:greet');
        $tester->execute([]);

        $tester->assertCommandIsSuccessful();
        $this->assertStringContainsString('Hello, World!', $tester->getDisplay());
    }

    public function test_named_greeting(): void {
        $tester = $this->get_testable_command('admin:greet');
        $tester->execute(['name' => 'Moodle']);

        $tester->assertCommandIsSuccessful();
        $this->assertStringContainsString('Hello, Moodle!', $tester->getDisplay());
    }
}
```

### Using `CommandTester` directly {/* #using-commandtester-directly */}

When a command has complex dependencies you want to mock, instantiate the command and wrap it in `CommandTester` yourself:

```php
use Symfony\Component\Console\Tester\CommandTester;

public function test_with_mock(): void {
    $mockdep = $this->createMock(\some\dependency::class);
    // ... configure mock ...

    $tester = new CommandTester(new greet($mockdep));
    $tester->execute(['name' => 'Moodle']);

    $tester->assertCommandIsSuccessful();
}
```

## See also {/* #see-also */}

- [Dependency Injection](../di/index.md)
- [Symfony Console documentation](https://symfony.com/doc/current/components/console.html)
