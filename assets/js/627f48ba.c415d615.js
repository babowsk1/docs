"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[8752],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5673:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={title:"Pseudo-code",description:"The pseudo-code language we use to define the behavior"},s="Pseudo-code Semantics",c={unversionedId:"arch/pseudo-code",id:"arch/pseudo-code",title:"Pseudo-code",description:"The pseudo-code language we use to define the behavior",source:"@site/../../src/arch/00-pseudo-code.md",sourceDirName:"arch",slug:"/arch/pseudo-code",permalink:"/arch/pseudo-code",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/arch/00-pseudo-code.md",tags:[],version:"current",lastUpdatedAt:1654073435,formattedLastUpdatedAt:"6/1/2022",sidebarPosition:0,frontMatter:{title:"Pseudo-code",description:"The pseudo-code language we use to define the behavior"},sidebar:"tutorialSidebar",previous:{title:"Ever OS",permalink:"/arch/ever-os"},next:{title:"Basics",permalink:"/arch/basics"}},u={},p=[],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"pseudo-code-semantics"},"Pseudo-code Semantics"),(0,o.kt)("p",null,"A few words about the pseudo-code language we use to define the behavior of the Architecture parts."),(0,o.kt)("p",null,"The language used is Python-like, with nearly intuitive semantics."),(0,o.kt)("p",null,"We would like to highlight the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"For basic values like ",(0,o.kt)("inlineCode",{parentName:"li"},"Ints")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"Bools"),", the assignment operator copies the value."),(0,o.kt)("li",{parentName:"ul"},"For complex data types (objects), the assignment operator copies a reference to the object instead of creating a new instance."),(0,o.kt)("li",{parentName:"ul"},"The call ",(0,o.kt)("inlineCode",{parentName:"li"},"obj.clone()")," creates a deep copy of the object ",(0,o.kt)("inlineCode",{parentName:"li"},"obj"),"."),(0,o.kt)("li",{parentName:"ul"},"The input arguments are passed by reference, so, mutating them within the function would mutate them for the caller also."),(0,o.kt)("li",{parentName:"ul"},"Sometimes, the default value is irrelevant and not specified explicitly. Default values for structure fields are:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"0")," for ",(0,o.kt)("inlineCode",{parentName:"li"},"Ints")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"False")," for ",(0,o.kt)("inlineCode",{parentName:"li"},"Bools")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"None")," for ",(0,o.kt)("inlineCode",{parentName:"li"},"Option")),(0,o.kt)("li",{parentName:"ul"},"For ",(0,o.kt)("inlineCode",{parentName:"li"},"Enum")," types, the default value is the first item in the enumeration."))),(0,o.kt)("li",{parentName:"ul"},"In few places, we use idiomatic ",(0,o.kt)("inlineCode",{parentName:"li"},"Python")," values swap: ",(0,o.kt)("inlineCode",{parentName:"li"},"a, b = b, a")," This construct exchanges the values of ",(0,o.kt)("inlineCode",{parentName:"li"},"a")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"b"),"."),(0,o.kt)("li",{parentName:"ul"},"The object method syntax is used in few places, for example: ",(0,o.kt)("inlineCode",{parentName:"li"},"obj.method(p1, p2,...) = method(obj, p1, p2,...)"),"."),(0,o.kt)("li",{parentName:"ul"},"Types and namespaces begin with uppercase letter, for example: ",(0,o.kt)("inlineCode",{parentName:"li"},"TransactionExecutor.TrExecutorError()")," denotes the object ",(0,o.kt)("inlineCode",{parentName:"li"},"TrExecutorError")," residing in the namespace ",(0,o.kt)("inlineCode",{parentName:"li"},"TransactionExecutor")),(0,o.kt)("li",{parentName:"ul"},"We use ",(0,o.kt)("strong",{parentName:"li"},"is")," operator to do type test. For example, to test that message is internal, we use the following construct:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"if in_msg.header is IntMsgInfo:\nreturn ExecuteInternalMessage(in_msg, ...)\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We omit details of some global objects, and just assume they exist. For example, the virtual machine is created using some abstract ",(0,o.kt)("em",{parentName:"li"},"TVM")," object. The same goes for system error enumerations. It is done this way not to overload the pseudo-code with easily recoverable details.")))}m.isMDXComponent=!0}}]);