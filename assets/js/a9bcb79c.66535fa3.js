"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[3990],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=o,v=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(v,i(i({ref:t},p),{},{components:r})):n.createElement(v,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},517:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],l={title:"C++ Compiler",sidebar_position:0},c="C++",s={unversionedId:"develop/api-tools/everdev/command-line-interface/c",id:"develop/api-tools/everdev/command-line-interface/c",title:"C++ Compiler",description:"Create your first contract",source:"@site/../../src/develop/api-tools/everdev/command-line-interface/c.md",sourceDirName:"develop/api-tools/everdev/command-line-interface",slug:"/develop/api-tools/everdev/command-line-interface/c",permalink:"/develop/api-tools/everdev/command-line-interface/c",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/develop/api-tools/everdev/command-line-interface/c.md",tags:[],version:"current",lastUpdatedAt:1654185688,formattedLastUpdatedAt:"6/2/2022",sidebarPosition:0,frontMatter:{title:"C++ Compiler",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Command Line Interface",permalink:"/everdev/command-line-interface"},next:{title:"Solidity compiler",permalink:"/develop/api-tools/everdev/command-line-interface/solidity"}},p={},d=[{value:"Create your first contract",id:"create-your-first-contract",level:2},{value:"Compile",id:"compile",level:2},{value:"Version",id:"version",level:2},{value:"Update",id:"update",level:2},{value:"Set",id:"set",level:2}],u={toc:d};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"c"},"C++"),(0,a.kt)("h2",{id:"create-your-first-contract"},"Create your first contract"),(0,a.kt)("p",null,"This command creates a basic C++ contract with comments that you can observe and compile."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"everdev clang create Contract\n")),(0,a.kt)("h2",{id:"compile"},"Compile"),(0,a.kt)("p",null,"This command compiles and links a selected C++ contract. After successful compilation you get .abi.json and .tvc files that you can later ",(0,a.kt)("a",{parentName:"p",href:"https://docs.everos.dev/ever-sdk/guides/work_with_contracts/add_contract_to_your_app"},"use in your DApps to deploy and run contract methods"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"everdev clang compile Contract.cpp\n")),(0,a.kt)("h2",{id:"version"},"Version"),(0,a.kt)("p",null,"This command shows the currently installed C++ compiler version."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"everdev clang version\n")),(0,a.kt)("h2",{id:"update"},"Update"),(0,a.kt)("p",null,"This command updates the compiler to the latest version."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"everdev clang update\n")),(0,a.kt)("p",null,"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"--force")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"-f")," option to force reinstall, if the compiler is already up to date."),(0,a.kt)("h2",{id:"set"},"Set"),(0,a.kt)("p",null,"This command sets the compiler version and downloads it if needed."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"everdev clang set --compiler 7.0.0\n")),(0,a.kt)("p",null,"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"--force")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"-f")," option to force reinstall, if the current version is the same as the requested version."))}m.isMDXComponent=!0}}]);