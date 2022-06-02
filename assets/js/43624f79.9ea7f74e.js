"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[8968],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return m}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),m=o,v=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return t?n.createElement(v,i(i({ref:r},p),{},{components:t})):n.createElement(v,i({ref:r},p))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9196:function(e,r,t){t.r(r),t.d(r,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var n=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],s={sidebar_position:9},l="DeBrowser",c={unversionedId:"develop/api-tools/everdev/command-line-interface/debrowser",id:"develop/api-tools/everdev/command-line-interface/debrowser",title:"DeBrowser",description:"The ExtraTON DeBot Browser.",source:"@site/../../src/develop/api-tools/everdev/command-line-interface/debrowser.md",sourceDirName:"develop/api-tools/everdev/command-line-interface",slug:"/develop/api-tools/everdev/command-line-interface/debrowser",permalink:"/develop/api-tools/everdev/command-line-interface/debrowser",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/develop/api-tools/everdev/command-line-interface/debrowser.md",tags:[],version:"current",lastUpdatedAt:1654185688,formattedLastUpdatedAt:"6/2/2022",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Contract Management",permalink:"/develop/api-tools/everdev/command-line-interface/contract-management"},next:{title:"Evernode Dapp Server",permalink:"/develop/api-tools/everdev/evernode-ds"}},p={},d=[{value:"Version",id:"version",level:2},{value:"Interfaces",id:"interfaces",level:2},{value:"Start",id:"start",level:2},{value:"Stop",id:"stop",level:2}],u={toc:d};function m(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"debrowser"},"DeBrowser"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/extraton/debrowser/"},"The ExtraTON DeBot Browser"),"."),(0,a.kt)("h2",{id:"version"},"Version"),(0,a.kt)("p",null,"This command shows the list of available versions."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"everdev debrowser version\n\nAvailable Versions: 1.1.0, 1.2.0, 1.2.1, 1.3.1\n")),(0,a.kt)("h2",{id:"interfaces"},"Interfaces"),(0,a.kt)("p",null,"This command shows the list of implemented interfaces."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"everdev debrowser interfaces\n\nRealised interfaces:\n - Address Input\n - Amount Input\n - Confirm Input\n - Menu\n - Network\n - Number Input\n - QR Code\n - Signing Box Input\n - Terminal\n - User Info\n")),(0,a.kt)("h2",{id:"start"},"Start"),(0,a.kt)("p",null,"This command downloads image and starts DeBrowser container (Docker must be launched)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"everdev debrowser start 1.3.1\n")),(0,a.kt)("h2",{id:"stop"},"Stop"),(0,a.kt)("p",null,"This command stops DeBrowser container."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"everdev debrowser stop\n")))}m.isMDXComponent=!0}}]);