"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[5542],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8458:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return d}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),o=["components"],c={title:"v2.3",slug:"concept/arch/abi/2.3"},l="Everscale Smart Contracts ABI 2.3 Specification",s={unversionedId:"concept/arch/abi/2.3",id:"concept/arch/abi/2.3",title:"v2.3",description:"ABI 2.3 introduces the new method to calculate external inbound message body signature. It is aimed to fix the below described problem in ABI v2.2.",source:"@site/../../src/concept/arch/abi/2.3.md",sourceDirName:"concept/arch/abi",slug:"/concept/arch/abi/concept/arch/abi/2.3",permalink:"/concept/arch/abi/concept/arch/abi/2.3",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/concept/arch/abi/2.3.md",tags:[],version:"current",lastUpdatedAt:1665362588,formattedLastUpdatedAt:"Oct 10, 2022",frontMatter:{title:"v2.3",slug:"concept/arch/abi/2.3"},sidebar:"tutorialSidebar",previous:{title:"v2.2",permalink:"/concept/arch/abi/concept/arch/abi/2.2"},next:{title:"Standards",permalink:"/concept/standard"}},p={},d=[{value:"Problem",id:"problem",level:2},{value:"Modified Signing Algorithm",id:"modified-signing-algorithm",level:2}],u={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"everscale-smart-contracts-abi-23-specification"},"Everscale Smart Contracts ABI 2.3 Specification"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"ABI 2.3")," introduces the new method to calculate external inbound message body signature. It is aimed to fix the below described problem in ",(0,i.kt)("a",{parentName:"p",href:"/concept/arch/abi/concept/arch/abi/2.2"},"ABI v2.2"),".",(0,i.kt)("br",{parentName:"p"}),"\n","Big thanks to Everscale community member ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mnill"},"https://github.com/mnill")," Ilia Kirichek who found these problems."),(0,i.kt)("h2",{id:"problem"},"Problem"),(0,i.kt)("p",null,"External messages may have a signature. Signatures are dependent only on message body (without signature flag and signature itself). Signatures aren\u2019t dependent on ",(0,i.kt)("inlineCode",{parentName:"p"},"dest")," address, and it may cause a problem. Let's consider the following situation:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"User has 2 contracts that contain the same public key and public function with same signature"),(0,i.kt)("li",{parentName:"ol"},"User sends message to the first contract"),(0,i.kt)("li",{parentName:"ol"},"Then hacker can create a message and send it to the second contract, and it may be successful.")),(0,i.kt)("p",null,"To solve the problem signature must be dependent on the destination address."),(0,i.kt)("h2",{id:"modified-signing-algorithm"},"Modified Signing Algorithm"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"ABI serialization generates bag of cells containing header parameters, function ID and function parameters.\n591 free bits are reserved in the root cell for destination address (the maximum size of internal address)."),(0,i.kt)("li",{parentName:"ol"},"The root cell data is prepended with actual destination address data without padding to maximum size."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("em",{parentName:"li"},"Representation hash")," of the bag is signed using the ",(0,i.kt)("em",{parentName:"li"},"Ed25519")," algorithm."),(0,i.kt)("li",{parentName:"ol"},"Address data is removed from the root cell and replaced with bit ",(0,i.kt)("inlineCode",{parentName:"li"},"1")," followed by 512 bits of the signature.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This functionality is supported staring with ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/TON-Solidity-Compiler/blob/master/Changelog_TON.md#0640-2022-08-18"},"0.64.0")," version of the Solidity compiler.")))}m.isMDXComponent=!0}}]);