"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[5526],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),f=o,m=p["".concat(c,".").concat(f)]||p[f]||h[f]||r;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4199:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return h}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],s={title:"Transaction execution",description:"Phases of transaction execution",sidebar_position:5},c="Phases of transaction execution",l={unversionedId:"develop/smart-contract/learn/phases-of-transaction-execution",id:"develop/smart-contract/learn/phases-of-transaction-execution",title:"Transaction execution",description:"Phases of transaction execution",source:"@site/../../src/develop/smart-contract/learn/15-phases-of-transaction-execution.md",sourceDirName:"develop/smart-contract/learn",slug:"/develop/smart-contract/learn/phases-of-transaction-execution",permalink:"/develop/smart-contract/learn/phases-of-transaction-execution",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/develop/smart-contract/learn/15-phases-of-transaction-execution.md",tags:[],version:"current",lastUpdatedAt:1654185688,formattedLastUpdatedAt:"6/2/2022",sidebarPosition:5,frontMatter:{title:"Transaction execution",description:"Phases of transaction execution",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Magic and overheads",permalink:"/develop/smart-contract/learn/solidity-compiler-overheads"},next:{title:"Carefully value",permalink:"/develop/smart-contract/learn/carefully-working-with-value"}},u={},h=[],p={toc:h};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"phases-of-transaction-execution"},"Phases of transaction execution"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Storage phase \u2014 First, money is withdrawn for storing the contract data in the blockchain, and at this stage the contract can be frozen if it does not have enough money to pay for storage.\nCredit phase - the account balance is increased from the value sent in the message."),(0,r.kt)("li",{parentName:"ol"},"Computation phase \u2014 execution of the transaction. If there is an error in this phase, then we go from here to phase 5 if we have the bounce: true flag. The subtle point here is that the creation of outgoing messages and computing are separated. If your transaction tries to create outgoing messages, then it simply adds the intentions to create outgoing messages into a special register. This does not check that you have enough money to attach value to all these messages. So, if you have 1 ever on your account and you are trying to create two messages, each of which wants to send 0.8 ever, then the computation phase will succeed, the tvm exit code will be 0 and the success: true. That is, the transaction will not fail at the moment when you do not have enough value to apply, it will only fail if you run out of money to pay for gas."),(0,r.kt)("li",{parentName:"ol"},"Action phase \u2014 in this phase, the outgoing messages are created that were put in a special register in phase 3. And if you do not have enough money to pay for outgoing messages, the transaction will be rolled back and go to phase 5 (if the flag is on). In this situation, you will have the computation - success: true, action - success: false, abort: true. There is also a special flag when creating a message, which says that this message should be ignored if there is not enough money to create it."),(0,r.kt)("li",{parentName:"ol"},"Bounce phase \u2014 if the bounce: true flag was set for the incoming message, then in this phase a back message is created (if there is enough money left to pay for the message), which will call the onBounce utility function. Any remaining value will be attached to the message.")),(0,r.kt)("p",null,"See more details in ",(0,r.kt)("a",{parentName:"p",href:"/arch/executor#transaction-executor-message-processing-general-scheme"},"Transaction executor")))}f.isMDXComponent=!0}}]);