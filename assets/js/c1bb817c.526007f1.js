"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[4314],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},v={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),d=o,m=u["".concat(s,".").concat(d)]||u[d]||v[d]||a;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6978:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return v}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],l={sidebar_position:0},s="Overview",c={unversionedId:"develop/api-tools/everdev/overview",id:"develop/api-tools/everdev/overview",title:"Overview",description:"Everscale Development Environment",source:"@site/../../src/develop/api-tools/everdev/overview.md",sourceDirName:"develop/api-tools/everdev",slug:"/develop/api-tools/everdev/overview",permalink:"/develop/api-tools/everdev/overview",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/develop/api-tools/everdev/overview.md",tags:[],version:"current",lastUpdatedAt:1655485310,formattedLastUpdatedAt:"6/17/2022",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"EverDev",permalink:"/api-tools/everdev"},next:{title:"Guides",permalink:"/everdev/guides"}},p={},v=[{value:"Quick Start",id:"quick-start",level:2},{value:"What is EverDev?",id:"what-is-everdev",level:2},{value:"Use-cases",id:"use-cases",level:3}],u={toc:v};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"overview"},"Overview"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Everscale Development Environment")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/everdev"},"NPM package")),(0,a.kt)("h2",{id:"quick-start"},(0,a.kt)("a",{parentName:"h2",href:"/develop/api-tools/everdev/guides/quick-start"},"Quick Start")),(0,a.kt)("h2",{id:"what-is-everdev"},"What is EverDev?"),(0,a.kt)("p",null,"EverDev is a Node.js package with CLI interface that allows to perform the following use-cases from the single interface for Developer:"),(0,a.kt)("h3",{id:"use-cases"},"Use-cases"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Easily manage all the core ",(0,a.kt)("a",{parentName:"li",href:"/arch/ever-os"},"Ever OS Developer Tools")),(0,a.kt)("li",{parentName:"ul"},"Configure networks (including Local Blockchain, Developer Network, Everscale (main) network): add, configure giver;"),(0,a.kt)("li",{parentName:"ul"},"Manage keys: add, remove"),(0,a.kt)("li",{parentName:"ul"},"Work with Everscale blockchain from CLI")),(0,a.kt)("p",null,"Also, this project serves as a backend for ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/everdev-vscode"},"EverDev VS Code extension"),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"}," The documentation in Everscale repository is a community effort. Therefore, everyone can contribute with proposals for new topics, suggest new content elements, participate in editing, and provide ideas that will be of great help for network development.\nPlease be informed that our documentation can be ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/everscale-org/docs/issues"},"edited via GitHub"),".",(0,a.kt)("br",{parentName:"p"}),"\n","Also please make sure to consult our rules and rewards policy via ",(0,a.kt)("a",{parentName:"p",href:"https://docs.everscale.network/contribute/hot-streams/documentations"},"this link"),".",(0,a.kt)("br",{parentName:"p"}),"\n","Feel free to join ",(0,a.kt)("a",{parentName:"p",href:"https://t.me/+C2IpQXWZtCwxYzEy"},"Everscale Documentation Development Telegram chat")," and ",(0,a.kt)("a",{parentName:"p",href:"https://t.me/+Vca1Gs6uPzIyNWVi"},"Everscale Developers Onboarding Telegram chat"),"!")))}d.isMDXComponent=!0}}]);