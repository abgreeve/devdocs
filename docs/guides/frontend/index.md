---
title: Frontend Development
tags:
  - react
  - javascript
  - moodle
---
## Overview

Moodle now supports modern frontend development using **ECMAScript modules (ESM)**, **React**, and **TypeScript**.

These technologies enable component-based UI development while remaining compatible with Moodle's existing frontend systems.

This document describes the recommended approach for implementing frontend functionality in Moodle, ensuring consistency, maintainability, and compatibility with the theming system.

## Mechanics: Building Frontend Features

### Frontend Source Structure

Frontend source code should be located within:

```console
├── component
│       └── js
│            └── esm
│                 └── src
```

- Source code is written in **TypeScript**
- Code is compiled into browser-ready JavaScript
- Compiled files should not be edited directly

### Rendering React Components from Templates

React components are rendered using the **React template helper**. See the [Mustache Helper docs](./javascript/react/reactautoinit) for more details.

```mustache
{{#react}}
{
    "component": "@moodle/lms/mod_book/viewer",
    "props": {
        "title": "{{title}}",
        "chapter": "{{chapter}}"
    },
    "id": "book-viewer",
    "class": "book-viewer-wrapper"
}
<p>Loading…</p>
{{/react}}
```

This:

- inserts a container element
- registers the component for automatic initialisation

Templates **determine where the component appears**, while React defines the UI.

### Auto initialisation

When the page loads:

1. Moodle finds components registered by the React helper
2. The corresponding ESM module is loaded
3. The module's **default export** is treated as a React component. Moodle automatically renders this component into the container created by the template helper. The component receives the props defined in the template.

The default function mounts the React component. This is covered in more detail on the [Mustache helper and Autoinit](./javascript/react/reactautoinit) page.

### Component contract

React modules should export a **default React component**.

In practice, this means exporting a function that returns JSX:

```TypeScript
type Props = {
    title: string;
};

export default function Viewer({title}: Props) {
    return <h1>{title}</h1>;
}
```

Core components follow this pattern consistently, and developers are strongly encouraged to do the same.

While other patterns may work, using a React component ensures consistency, maintainability, and compatibility with Moodle's frontend architecture.

### Passing Props

Templates should pass only the minimal data required to initialise the component.

In most cases, this means passing identifiers (such as IDs) or simple configuration values, rather than full data objects.

<ValidExample>

```JSON
{
    "courseid": 42
}
```

```TypeScript
type Props = {
    courseid: number;
};
```

Component:

``` TypeScript
useEffect(() => {
    fetchCourse(courseid).then(setCourse);
}, [courseid]);
```

</ValidExample>

<InvalidExample>

```JSON
{
    "course": {
        "id": 42,
        "fullname": "Physics 101",
        "teachers": [...],
        "activities": [...]
    }
}
```

</InvalidExample>

Why this is bad

- Duplicates backend logic in PHP
- Couples template structure to component internals
- Bloats page payload
- Makes reuse harder

:::info

If the data can be fetched by the component, it should not be passed via props.

:::

:::warning

In some cases, small amounts of preloaded data may be passed to avoid unnecessary requests. This should be limited and carefully considered.

:::

### Using Moodle APIs

React components can import existing Moodle JavaScript APIs.

Developers should reuse existing APIs rather than duplicating functionality.

### Styling and Theming

Components must remain compatible with Moodle's theming system.

- Avoid hard-coded colours, spacing, and typography
- Use design tokens or design system components where available
- Avoid inline styles that prevent theme overrides
- Provide stable class names for theming

### Initialising Frontend Behaviour

Historically, templates used the `{{#js}}` helper:

```mustache
{{#js}}
require(['core/module'], function(module) {
    module.init();
});
{{/js}}
```

This pattern remains supported but is **discouraged for new React-based components**.

Developers should prefer the **React template helper** for new UI.

The `{{#js}}` helper may still be used for:

- enhancing existing Mustache-rendered markup
- working with legacy components

## Design Philosophy

### Templates Provide Placement, Not Structure

Historically:

`PHP → Template → UI`

Now:

`Template → React component → UI`

Templates define **where a component appears**.

React components define **how the UI is structured**.

### Minimal Server Context

Previously, PHP assembled large template contexts.

Now, the server should provide only **minimal props**.

```
Server → minimal props
        ↓
React initialises
        ↓
Component fetches data
```

Components retrieve additional data asynchronously.

### Components are Self Contained

React components should encapsulate:

- UI structure
- state
- user interaction
- data fetching

This improves maintainability and reuse.

### Maintainability and Consistency

Frontend code should prioritise:

- small, composable components
- reuse of existing APIs and design system elements
- predictable markup for theming
- separation of concerns between server and client

### Transition from Legacy Patterns

| Historical approach              | Modern approach                    |
|----------------------------------|------------------------------------|
| PHP builds full template context | PHP provides minimal props         |
| Mustache renders UI              | React renders UI                   |
| JavaScript enhances templates    | Components manage UI and behaviour |

### Relationship to Reactive UI System

Moodle previously introduced a custom reactive UI system to support dynamic interfaces (link to other page.

With the adoption of React, new reactive UI development should use **React-based components** instead.

The reactive system remains supported for existing code but should not be used for new features.
