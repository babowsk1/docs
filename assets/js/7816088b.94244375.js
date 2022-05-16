"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[217],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),h=l(n),p=o,m=h["".concat(c,".").concat(p)]||h[p]||u[p]||r;return n?a.createElement(m,s(s({ref:t},d),{},{components:n})):a.createElement(m,s({ref:t},d))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<r;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5309:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),s=["components"],i={title:"Basics",description:"Introduction to understand the basic terminology and concepts"},c="Basics of Everscale Blockchain",l={unversionedId:"arch/basics",id:"arch/basics",title:"Basics",description:"Introduction to understand the basic terminology and concepts",source:"@site/../../src/arch/10-basics.md",sourceDirName:"arch",slug:"/arch/basics",permalink:"/arch/basics",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/arch/10-basics.md",tags:[],version:"current",lastUpdatedAt:1652677713,formattedLastUpdatedAt:"5/16/2022",sidebarPosition:10,frontMatter:{title:"Basics",description:"Introduction to understand the basic terminology and concepts"},sidebar:"tutorialSidebar",previous:{title:"Pseudo-code",permalink:"/arch/pseudo-code"},next:{title:"Managing gas",permalink:"/arch/managing-gas"}},d={},u=[{value:"Blockchain structure",id:"blockchain-structure",level:2},{value:"Account (contract)",id:"account-contract",level:2},{value:"About deploy",id:"about-deploy",level:3},{value:"About address",id:"about-address",level:3},{value:"About money transfer",id:"about-money-transfer",level:3},{value:"About commissions",id:"about-commissions",level:3},{value:"About get methods",id:"about-get-methods",level:3},{value:"Message",id:"message",level:2},{value:"Transaction",id:"transaction",level:2},{value:"BOC (Bag of cells)",id:"boc-bag-of-cells",level:2},{value:"TVM",id:"tvm",level:2},{value:"Transaction Executor",id:"transaction-executor",level:2}],h={toc:u};function p(e){var t=e.components,n=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"basics-of-everscale-blockchain"},"Basics of Everscale Blockchain"),(0,r.kt)("p",null,"Read this short introduction to understand the basic terminology and concepts of Everscale"),(0,r.kt)("h2",{id:"blockchain-structure"},"Blockchain structure"),(0,r.kt)("p",null,"At the moment blockchain consists of 2 ",(0,r.kt)("inlineCode",{parentName:"p"},"workchains"),". One of them (",(0,r.kt)("inlineCode",{parentName:"p"},"-1"),"), so-called ",(0,r.kt)("inlineCode",{parentName:"p"},"masterchain"),", is needed for service contracts and validator contracts, another one (",(0,r.kt)("inlineCode",{parentName:"p"},"0"),") is for simple users. In the future, it is possible to add more simple workchains (",(0,r.kt)("inlineCode",{parentName:"p"},"1"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"2"),", etc) to the blockchain."),(0,r.kt)("p",null,"In turn, ",(0,r.kt)("inlineCode",{parentName:"p"},"workchain")," is splitted into shards (so-called shardchains). When the load is low there are 16 shards, when it increases shards split and when decreases they merge."),(0,r.kt)("p",null,"Blockchain is validated by validators. Part of them validate masterchain, others are splitted into groups and validate shardchains. Periodically global set of validators changes with elections. Within one election cycle shardchain validators rotate as well."),(0,r.kt)("h2",{id:"account-contract"},"Account (contract)"),(0,r.kt)("p",null,"Account (contract) is identified by its full address consisting of ",(0,r.kt)("inlineCode",{parentName:"p"},"workchain")," and ID. Full information about Account is stored in its state.  Account can have some balance, a place for its ",(0,r.kt)("inlineCode",{parentName:"p"},"code"),", place for its ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," and many other fields."),(0,r.kt)("p",null,"It can have 1 owner, many owners and no owners at all."),(0,r.kt)("p",null,"Account ID is calculated during deploy from its initial code and data."),(0,r.kt)("h3",{id:"about-deploy"},"About deploy"),(0,r.kt)("p",null,"Deploy \u2014 placing ",(0,r.kt)("inlineCode",{parentName:"p"},"code")," of the account into blockchain."),(0,r.kt)("p",null,"You can not deploy  account's ",(0,r.kt)("inlineCode",{parentName:"p"},"code"),"  if its balance is empty because deploy is paid out of that money. This is why any deploy operation must begin with sponsoring the account with some tokens."),(0,r.kt)("p",null,"Because account's ID is unequivocally calculated from ",(0,r.kt)("inlineCode",{parentName:"p"},"code")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"data"),", this calculation can be done before actual deploy."),(0,r.kt)("h3",{id:"about-address"},"About address"),(0,r.kt)("p",null,"Address is calculated from initial contract's code and data, that is attached to the deploy message."),(0,r.kt)("p",null,"When contract performs ",(0,r.kt)("inlineCode",{parentName:"p"},"SETCODE")," operation, its address does not change."),(0,r.kt)("p",null,"To calculate the contract address, you need to know its code and its initial data (public key of the owner is also stored in data)."),(0,r.kt)("h3",{id:"about-money-transfer"},"About money transfer"),(0,r.kt)("p",null,"Money can be transferred from one account to another only by execution of the account's code. Do not transfer money to the addresses where you can not deploy code because they will stay there forever."),(0,r.kt)("h3",{id:"about-commissions"},"About commissions"),(0,r.kt)("p",null,"There are several types of fees for operations with contracts."),(0,r.kt)("p",null,"For example, commission for storage, for execution, for message delivery."),(0,r.kt)("p",null,"Read more about them here ",(0,r.kt)("a",{parentName:"p",href:"/arch/fee-calculation"},"Fee calculation details"),"."),(0,r.kt)("h3",{id:"about-get-methods"},"About get methods"),(0,r.kt)("p",null,"Get method is a method of the contract which doesn't change contract state, thus can be executed locally on the client's machine for free."),(0,r.kt)("p",null,"What shard my account is in right now?\nAccount shard is defined by the first bits of its address and the current list of shards."),(0,r.kt)("p",null,"Encode hex shard prefix to binary format, discard the most right 1. You just got the shard mask. Put this mask on top of account address, if the bits are equal \u2014 the account is in this shard."),(0,r.kt)("p",null,"Account can change its shard depending on the load of the network. So before calculating account's shard check the current list of shards."),(0,r.kt)("h2",{id:"message"},"Message"),(0,r.kt)("p",null,"All interactions in Free TON are performed via messages."),(0,r.kt)("p",null,"External inbound messages help deploy and call contracts from outside."),(0,r.kt)("p",null,"Internal messages allow contracts to communicate with each other."),(0,r.kt)("p",null,"External outbound messages are the events the contracts produce for the outside world. Use them to implement some off-chain logic \u2014 subscribe for these messages and perform some off-chain actions whenever you receive them."),(0,r.kt)("p",null,"For example, simple value transfer can be initiated with an external inbound message (by a human or some service) or with internal message from another contract. This message will produce a transaction (read below) and an internal message with value transfer."),(0,r.kt)("h2",{id:"transaction"},"Transaction"),(0,r.kt)("p",null,"Transaction is the result of contract execution."),(0,r.kt)("p",null,"In general transaction is generated with one incoming message (external or internal) and can generate several outcoming messages (external or internal) as a result."),(0,r.kt)("p",null,"Transaction can be successful or aborted."),(0,r.kt)("p",null,"For example, simple value transfer consists of 2 transactions \u2014 Sender's transaction which generated  an internal message with value transfer, and Recipient's transaction where it received the message with value and updated its balance."),(0,r.kt)("h2",{id:"boc-bag-of-cells"},"BOC (Bag of cells)"),(0,r.kt)("p",null,"Is a universal format for data packaging in Free TON. Every object \u2014 account, transaction, message, block are stored in blockchain database as bocs. By the way, boc of the block includes bocs of all messages and transactions that were executed in this block inside of it."),(0,r.kt)("h2",{id:"tvm"},"TVM"),(0,r.kt)("p",null,"Ton Virtual Machine. Turing complete virtual machine for contract code execution. It works with data represented in boc format. TVM itself does not calculate any commissions and can be used on client side for running get methods of the contracts. TVM is used for debot engine execution on client side as well."),(0,r.kt)("p",null,"Also, TVM is used on validators together with higher level protocols, such as Transaction Executor, to additionally calculate commissions and perform other necessary checks"),(0,r.kt)("h2",{id:"transaction-executor"},"Transaction Executor"),(0,r.kt)("p",null,"Take results of TVM, calculate fees, checks balance and other things. Used by validators to validate blocks. Can also be used on the client side to debug contract execution."))}p.isMDXComponent=!0}}]);