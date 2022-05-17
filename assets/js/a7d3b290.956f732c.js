"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[5173],{3905:function(e,t,o){o.d(t,{Zo:function(){return c},kt:function(){return m}});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(o),m=r,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||l;return o?n.createElement(f,a(a({ref:t},c),{},{components:o})):n.createElement(f,a({ref:t},c))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=o.length,a=new Array(l);a[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var d=2;d<l;d++)a[d]=o[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},4575:function(e,t,o){o.r(t),o.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return p}});var n=o(7462),r=o(3366),l=(o(7294),o(3905)),a=["components"],i={title:"Development tools",tags:["tools","coding style","workflow"]},s=void 0,d={unversionedId:"development/tools/index",id:"development/tools/index",title:"Development tools",description:"A range of tools are available to make your life as a Moodle developer easier, and your development faster. These range from editor and IDE integrations, to linting tools which helps your code meet Moodle's Coding style, to build tools essential to the build process.",source:"@site/general/development/tools/index.md",sourceDirName:"development/tools",slug:"/development/tools/",permalink:"/devdocs/general/development/tools/",editUrl:"https://github.com/moodle/devdocs/edit/main/general/development/tools/index.md",tags:[{label:"tools",permalink:"/devdocs/general/tags/tools"},{label:"coding style",permalink:"/devdocs/general/tags/coding-style"},{label:"workflow",permalink:"/devdocs/general/tags/workflow"}],version:"current",lastUpdatedBy:"Eloy Lafuente",lastUpdatedAt:1652786227,formattedLastUpdatedAt:"17/05/2022",frontMatter:{title:"Development tools",tags:["tools","coding style","workflow"]},sidebar:"tools",next:{title:"Moodle Development Kit",permalink:"/devdocs/general/development/tools/mdk"}},c={},p=[{value:"PHP",id:"php",level:2},{value:"JavaScript and CSS",id:"javascript-and-css",level:2},{value:"Development workflow",id:"development-workflow",level:2}],u={toc:p};function m(e){var t=e.components,o=(0,r.Z)(e,a);return(0,l.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"A range of tools are available to make your life as a Moodle developer easier, and your development faster. These range from editor and IDE integrations, to linting tools which helps your code meet Moodle's ",(0,l.kt)("a",{parentName:"p",href:"/devdocs/general/development/policies/codingstyle/"},"Coding style"),", to build tools essential to the build process."),(0,l.kt)("p",null,"These tools are discussed and summarised here."),(0,l.kt)("h2",{id:"php"},"PHP"),(0,l.kt)("p",null,"Moodle's primary development language is PHP, and all code should pass basic PHP linting checks as a minimum, however all new PHP code must also meet the Moodle ",(0,l.kt)("a",{parentName:"p",href:"/devdocs/general/development/policies/codingstyle/"},"Coding style rules"),". To make this task easier tools such as the ",(0,l.kt)("a",{parentName:"p",href:"/devdocs/general/development/tools/phpcs"},"PHPCodeSniffer")," are available."),(0,l.kt)("h2",{id:"javascript-and-css"},"JavaScript and CSS"),(0,l.kt)("p",null,"Moodle's JavaScript development relies upon a set of build tools written in JavaScript, and controlled using a task runner called ",(0,l.kt)("inlineCode",{parentName:"p"},"grunt"),". In addition to building JavaScript files, grunt also controls building of theme CSS from SCSS, and stylistic linting checks of CSS."),(0,l.kt)("p",null,"See the ",(0,l.kt)("a",{parentName:"p",href:"/devdocs/general/development/tools/nodejs"},"NodeJS and Grunt")," for more information on these build tools."),(0,l.kt)("h2",{id:"development-workflow"},"Development workflow"),(0,l.kt)("p",null,"Along with language-specific tools, several tools have been created to make your day-to-date life as a developer easier. Perhaps the most widely used of these amongst those regularly contributing to the core Moodle project is the ",(0,l.kt)("a",{parentName:"p",href:"/devdocs/general/development/tools/mdk"},"Moodle Development Kit"),", or MDK as it is typically known."))}m.isMDXComponent=!0}}]);