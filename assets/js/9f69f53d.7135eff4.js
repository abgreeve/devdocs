"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[1718],{3905:function(e,t,o){o.d(t,{Zo:function(){return d},kt:function(){return m}});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(o),m=n,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return o?r.createElement(f,a(a({ref:t},d),{},{components:o})):r.createElement(f,a({ref:t},d))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var c=2;c<i;c++)a[c]=o[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}p.displayName="MDXCreateElement"},7486:function(e,t,o){o.r(t),o.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=o(7462),n=o(3366),i=(o(7294),o(3905)),a=["components"],l={title:"Denial of service",sidebar_position:11,tags:["Coding guidelines","Policies","Security"]},s=void 0,c={unversionedId:"development/policies/security/dos",id:"development/policies/security/dos",title:"Denial of service",description:"This page forms part of the Moodle security guidelines.",source:"@site/general/development/policies/security/dos.md",sourceDirName:"development/policies/security",slug:"/development/policies/security/dos",permalink:"/devdocs/general/development/policies/security/dos",editUrl:"https://github.com/moodle/devdocs/edit/main/general/development/policies/security/dos.md",tags:[{label:"Coding guidelines",permalink:"/devdocs/general/tags/coding-guidelines"},{label:"Policies",permalink:"/devdocs/general/tags/policies"},{label:"Security",permalink:"/devdocs/general/tags/security"}],version:"current",lastUpdatedBy:"Eloy Lafuente",lastUpdatedAt:1652786227,formattedLastUpdatedAt:"17/05/2022",sidebarPosition:11,frontMatter:{title:"Denial of service",sidebar_position:11,tags:["Coding guidelines","Policies","Security"]},sidebar:"policies",previous:{title:"Session fixation",permalink:"/devdocs/general/development/policies/security/session-fixation"},next:{title:"Brute-forcing login",permalink:"/devdocs/general/development/policies/security/bruteforcing-login"}},d={},u=[{value:"What is the danger?",id:"what-is-the-danger",level:2},{value:"How Moodle avoids this problem",id:"how-moodle-avoids-this-problem",level:2},{value:"What you need to do in your code",id:"what-you-need-to-do-in-your-code",level:2},{value:"What you need to do as an administrator",id:"what-you-need-to-do-as-an-administrator",level:2},{value:"See also",id:"see-also",level:2}],p={toc:u};function m(e){var t=e.components,o=(0,n.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This page forms part of the ",(0,i.kt)("a",{parentName:"p",href:"../security"},"Moodle security guidelines"),"."))),(0,i.kt)("h2",{id:"what-is-the-danger"},"What is the danger?"),(0,i.kt)("p",null,"A malicious user tries to overload your server, so it crashes or becomes very slow for legitimate users."),(0,i.kt)("p",null,"Or there may be some other way that they can make it impossible for legitimate users to use your site. For example, by using a cross-site scripting vulnerability to include the JavaScript ",(0,i.kt)("inlineCode",{parentName:"p"},"window.close()")," in a forum post."),(0,i.kt)("h2",{id:"how-moodle-avoids-this-problem"},"How Moodle avoids this problem"),(0,i.kt)("p",null,"This is a very difficult type of attack to defend against, if the attacker is determined."),(0,i.kt)("p",null,"However, most of the really expensive operations in Moodle (for example completing a quiz) are only available to authenticated users, so by logging all requests from authenticated users,Moodle helps administrators identify culprits."),(0,i.kt)("h2",{id:"what-you-need-to-do-in-your-code"},"What you need to do in your code"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"There is very little you can do from PHP code."),(0,i.kt)("li",{parentName:"ul"},"However, every page access should be logged. This will help investigate who is to blame, if a problem arises. Call ",(0,i.kt)("inlineCode",{parentName:"li"},"add_to_log")," from your scripts."),(0,i.kt)("li",{parentName:"ul"},"Follow general performance good practice, so your code does not consume more resources than necessary.")),(0,i.kt)("h2",{id:"what-you-need-to-do-as-an-administrator"},"What you need to do as an administrator"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"There are various tools you can use (for example, firewalls, proxies) to try to limit the number of requests coming into your server. If you have a problem, look into them, but there is not space space for a detailed description here."),(0,i.kt)("li",{parentName:"ul"},"Know how to use the logs to investigate problems."),(0,i.kt)("li",{parentName:"ul"},"Monitor performance on your servers, so you know what normal load looks like, and that you have enough hardware to cope with normal fluctuations in load.")),(0,i.kt)("h2",{id:"see-also"},"See also"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../security"},"Security")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Coding"},"Coding")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://owasp.org/www-community/attacks/Denial_of_Service"},"Denial of service in OWASP"))))}m.isMDXComponent=!0}}]);