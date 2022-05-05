"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[8567],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(r),d=n,m=h["".concat(l,".").concat(d)]||h[d]||p[d]||i;return r?a.createElement(m,o(o({ref:t},u),{},{components:r})):a.createElement(m,o({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},4651:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var a=r(3117),n=r(102),i=(r(7294),r(3905)),o=["components"],s={},l="TVM",c={unversionedId:"learn/tvm",id:"learn/tvm",title:"TVM",description:"- Table of contents",source:"@site/../../src/learn/tvm.md",sourceDirName:"learn",slug:"/learn/tvm",permalink:"/learn/tvm",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/learn/tvm.md",tags:[],version:"current",lastUpdatedAt:1651786024,formattedLastUpdatedAt:"5/5/2022",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Terminology",permalink:"/learn/terminology"},next:{title:"Welcome",permalink:"/learn/welcome"}},u={},p=[{value:"About TVM",id:"about-tvm",level:2},{value:"Peculiarities of TVM.",id:"peculiarities-of-tvm",level:2},{value:"TVM Cells",id:"tvm-cells",level:2},{value:"Additionally",id:"additionally",level:2}],h={toc:p};function d(e){var t=e.components,r=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"tvm"},"TVM"),(0,i.kt)("h1",{id:"table-of-contents"},"Table of contents"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#table-of-contents"},"Table of contents")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#about-tvm"},"About TVM")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#peculiarities-of-tvm"},"Peculiarities of TVM")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#tvm-cells"},"TVM Cells")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#additionally"},"Additionally"))),(0,i.kt)("h2",{id:"about-tvm"},"About TVM"),(0,i.kt)("p",null,"The TVM , is the virtual machine used to execute smart-contract code in the masterchain and in the basic workchain. Other workchains may use other virtual machines alongside or instead of the TVM. Here we list some of its features. "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"TVM represents all data as a collection of (TVM) cells. Each cell contains up to 128 data bytes and up to 4 references to other cells. As a consequence of the \u201ceverything is a bag of cells\u201d philosophy, this enables TVM to work with all data related to the Everscale Blockchain, including blocks and blockchain global state if necessary. "),(0,i.kt)("li",{parentName:"ul"},"TVM can work with values of arbitrary algebraic data types, represented as trees or directed acyclic graphs of TVM cells. However, it is agnostic towards the existence of algebraic data types; it just works with cells. "),(0,i.kt)("li",{parentName:"ul"},"TVM has built-in support for hashmaps."),(0,i.kt)("li",{parentName:"ul"},"TVM is a stack machine. Its stack keeps either 64-bit integers or cell references. "),(0,i.kt)("li",{parentName:"ul"},"64-bit, 128-bit and 256-bit arithmetic is supported. All n-bit arithmetic operations come in three flavors: for unsigned integers, for signed integers and for integers modulo 2^n (no automatic overflow checks in the latter case). "),(0,i.kt)("li",{parentName:"ul"},"TVM has unsigned and signed integer conversion from n-bit to m-bit, for all 0 \u2264 m, n \u2264 256, with overflow checks. "),(0,i.kt)("li",{parentName:"ul"},"All arithmetic operations perform overflow checks by default, greatly simplifying the development of smart contracts. "),(0,i.kt)("li",{parentName:"ul"},"TVM has \u201cmultiply-then-shift\u201d and \u201cshift-then-divide\u201d arithmetic operations with intermediate values computed in a larger integer type; this simplifies implementing fixed-point arithmetic. "),(0,i.kt)("li",{parentName:"ul"},"TVM offers support for bit strings and byte strings. "),(0,i.kt)("li",{parentName:"ul"},"Support for 256-bit Elliptic Curve Cryptography (ECC) for some predefined curves, including Curve25519, is present. "),(0,i.kt)("li",{parentName:"ul"},"Support for Weil pairings on some elliptic curves, useful for fast implementation of zk-SNARKs, is also present. "),(0,i.kt)("li",{parentName:"ul"},"Support for popular hash functions, including sha256, is present. "),(0,i.kt)("li",{parentName:"ul"},"TVM can work with Merkle proofs."),(0,i.kt)("li",{parentName:"ul"},"TVM offers support for \u201clarge\u201d or \u201cglobal\u201d smart contracts. Such smart contracts must be aware of sharding. Usual (local) smart contracts can be sharding-agnostic. "),(0,i.kt)("li",{parentName:"ul"},"TVM supports closures. "),(0,i.kt)("li",{parentName:"ul"},"A \u201cspineless tagless G-machine\u201d can be easily implemented inside TVM. ")),(0,i.kt)("p",null,"Several high-level languages can be designed for TVM, in addition to the \u201cTVM assembly\u201d. All these languages will have static types and will support algebraic data types. We envision the following possibilities: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A Java-like imperative language, with each smart contract resembling a separate class. "),(0,i.kt)("li",{parentName:"ul"},"A lazy functional language (think of Haskell). "),(0,i.kt)("li",{parentName:"ul"},"An eager functional language (think of ML). ")),(0,i.kt)("h2",{id:"peculiarities-of-tvm"},"Peculiarities of TVM."),(0,i.kt)("p",null,"The TVM, used to run smart contracts in the masterchain and Workchain Zero, is considerably different from customary designs inspired by the EVM (Ethereum Virtual Machine): it works not just with 256-bit integers, but actually with (almost) arbitrary \u201crecords\u201d, \u201cstructures\u201d, or \u201csum-product types\u201d, making it more suitable to execute code written in high-level (especially functional) languages. Essentially, TVM uses tagged data types, not unlike those used in implementations of Prolog or Erlang. \\"),(0,i.kt)("p",null,"One might imagine first that the state of a TVM smart contract is not just a hashmap 2^256 \u2192 2^256, or Hashmap(256, 2^256), but (as a first step) Hashmap(256, X), where X is a type with several constructors, enabling it to store, apart from 256-bit integers, other data structures, including other hashmaps Hashmap(256, X) in particular. This would mean that a cell of TVM (persistent or temporary) storage\u2014or a variable or an element of an array in a TVM smart-contract code\u2014may contain not only an integer, but a whole new hashmap. Of course, this would mean that a cell contains not just 256 bits, but also, say, an 8-bit tag, describing how these 256 bits should be interpreted. "),(0,i.kt)("p",null,"In fact, values do not need to be precisely 256-bit. The value format used by TVM consists of a sequence of raw bytes and references to other structures, mixed in arbitrary order, with some descriptor bytes inserted in suitable locations to be able to distinguish pointers from raw data (e.g., strings or integers);"),(0,i.kt)("p",null,"This raw value format may be used to implement arbitrary sum-product algebraic types. In this case, the value would contain a raw byte first, describing the \u201cconstructor\u201d being used (from the perspective of a high-level language), and then other \u201cfields\u201d or \u201cconstructor arguments\u201d, consisting of raw bytes and references to other structures depending on the constructor chosen. However, TVM does not know anything about the correspondence between constructors and their arguments; the mixture of bytes and references is explicitly described by certain descriptor bytes.* "),(0,i.kt)("p",null,"The Merkle tree hashing is extended to arbitrary such structures: to compute the hash of such a structure, all references are recursively replaced by hashes of objects referred to, and then the hash of the resulting byte string (descriptor bytes included) is computed. "),(0,i.kt)("p",null,"In this way, the Merkle tree hashing for hashmaps, described in 2.3.8, is just a special case of hashing for arbitrary (dependent) algebraic data types, applied to type Hashmap(n, X) with two constructors.**"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"*These two descriptor bytes, present in any TVM cell, describe only the total number of references and the total number of raw bytes; references are kept together either before or after all raw bytes. ")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"**Actually, Leaf and Node are constructors of an auxiliary type, HashmapAux(n, X). Type Hashmap(n, X) has constructors Root and EmptyRoot, with Root containing a value of type HashmapAux(n, X).")),(0,i.kt)("h2",{id:"tvm-cells"},"TVM Cells"),(0,i.kt)("p",null,"Ultimately, the TVM keeps all data in a collection of (TVM) cells. Each cell contains two descriptor bytes first, indicating how many bytes of raw data are present in this cell (up to 128) and how many references to other cells are present (up to four). Then these raw data bytes and references follow. Each cell is referenced exactly once, so we might have included in each cell a reference to its \u201cparent\u201d (the only cell referencing this one). However, this reference need not be explicit. "),(0,i.kt)("p",null,"In this way, the persistent data storage cells of a Everscale smart contract are organized into a tree,* with a reference to the root of this tree kept in the smart-contract description. If necessary, a Merkle tree hash of this entire persistent storage is recursively computed, starting from the leaves and then simply replacing all references in a cell with the recursively computed hashes of the referenced cells, and subsequently computing the hash of the byte string thus obtained."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"*Logically; the \u201cbag of cells\u201d representation described in 2.5.5 identifies all duplicate cells, transforming this tree into a directed acyclic graph (dag) when serialized.")),(0,i.kt)("h2",{id:"additionally"},"Additionally"),(0,i.kt)("p",null,"You can learn more about TVM and how it works from several sources:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://zeroheight.com/86757ecb2/p/822e19-2-ton-blockchain/t/01c684"},"Legacy TON Whitepaper")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://docs.ton.dev/86757ecb2/p/23c378-introduction"},"TVM Whitepaper")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://tonlabs.notion.site/tonlabs/TVM-Extended-Instructions-f22fb9a10bec4f8cadd9757e7d6df51d"},"TVM Extended Instructions"))))}d.isMDXComponent=!0}}]);