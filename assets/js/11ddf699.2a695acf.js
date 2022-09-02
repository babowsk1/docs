"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[248],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(n),f=r,k=p["".concat(c,".").concat(f)]||p[f]||d[f]||i;return n?a.createElement(k,l(l({ref:t},u),{},{components:n})):a.createElement(k,l({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3543:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return d}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),l=["components"],o={title:"1. Fungible token",sidebar_position:1,slug:"/standard/TIP-3.1"},c="Fungible Token Interface (TIP-3.1)",s={unversionedId:"standard/TIP-3/1",id:"standard/TIP-3/1",title:"1. Fungible token",description:"Requires: TIP-6.1",source:"@site/../../src/standard/TIP-3/1.md",sourceDirName:"standard/TIP-3",slug:"/standard/TIP-3.1",permalink:"/standard/TIP-3.1",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/standard/TIP-3/1.md",tags:[],version:"current",lastUpdatedAt:1662135486,formattedLastUpdatedAt:"Sep 2, 2022",sidebarPosition:1,frontMatter:{title:"1. Fungible token",sidebar_position:1,slug:"/standard/TIP-3.1"},sidebar:"tutorialSidebar",previous:{title:"Core description",permalink:"/standard/TIP-3"},next:{title:"Core description",permalink:"/standard/TIP-4"}},u={},d=[{value:"Abstract",id:"abstract",level:2},{value:"Motivation",id:"motivation",level:2},{value:"Specification",id:"specification",level:2},{value:"Notes",id:"notes",level:3},{value:"Token root",id:"token-root",level:3},{value:"Name",id:"name",level:4},{value:"Symbol",id:"symbol",level:4},{value:"Decimals",id:"decimals",level:4},{value:"Total supply",id:"total-supply",level:4},{value:"Token wallet code",id:"token-wallet-code",level:4},{value:"Accept tokens burn",id:"accept-tokens-burn",level:4},{value:"Standard interface detection",id:"standard-interface-detection",level:4},{value:"Token wallet",id:"token-wallet",level:3},{value:"Root",id:"root",level:4},{value:"Balance",id:"balance",level:4},{value:"Wallet code",id:"wallet-code",level:4},{value:"Accept tokens transfer",id:"accept-tokens-transfer",level:4},{value:"Accept tokens mint",id:"accept-tokens-mint",level:4},{value:"On-bounce behaviour",id:"on-bounce-behaviour",level:4},{value:"Handle <code>acceptTransfer</code> bounce",id:"handle-accepttransfer-bounce",level:5},{value:"Handle <code>acceptBurn</code> bounce",id:"handle-acceptburn-bounce",level:5},{value:"Standard interface detection",id:"standard-interface-detection-1",level:4}],p={toc:d};function f(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"fungible-token-interface-tip-31"},"Fungible Token Interface (TIP-3.1)"),(0,i.kt)("p",null,"Requires: ",(0,i.kt)("a",{parentName:"p",href:"/standard/TIP-6.1"},"TIP-6.1")),(0,i.kt)("h2",{id:"abstract"},"Abstract"),(0,i.kt)("p",null,"The following standard allows for the implementation of a standard API for tokens within smart contracts. General information about token is stored in the token root contract. Each token holder has its own instance of token wallet contract. Token transfers SHOULD be implemented in P2P fashion, between sender and receiver token wallets."),(0,i.kt)("h2",{id:"motivation"},"Motivation"),(0,i.kt)("p",null,"A standard interface allows any tokens on Everscale to be re-used by other applications: from wallets to decentralized exchanges."),(0,i.kt)("h2",{id:"specification"},"Specification"),(0,i.kt)("p",null,"The keywords \u201cMUST\u201d, \u201cMUST NOT\u201d, \u201cREQUIRED\u201d, \u201cSHALL\u201d, \u201cSHALL NOT\u201d, \u201cSHOULD\u201d, \u201cSHOULD NOT\u201d, \u201cRECOMMENDED\u201d, \u201cMAY\u201d, and \u201cOPTIONAL\u201d in this document are to be interpreted as described in RFC 2119."),(0,i.kt)("h3",{id:"notes"},"Notes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We choose Standard Interface Detection to expose the interfaces that a TIP3 smart contract supports."),(0,i.kt)("li",{parentName:"ul"},"This standard does not define the external methods to initiate transfer, mint or burn tokens.\nThough it defines the methods, which MUST be called on a recipient token wallet or token root during these operations."),(0,i.kt)("li",{parentName:"ul"},"The rules for a token wallet ownership MUST be defined in a child standards."),(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("inlineCode",{parentName:"li"},"-1")," offset is added to some function IDs derivations, so the preimage of the hash cannot be known, further reducing the chances of a possible collisions.")),(0,i.kt)("h3",{id:"token-root"},"Token root"),(0,i.kt)("h4",{id:"name"},"Name"),(0,i.kt)("p",null,'Returns the name of the token - e.g. "MyToken".'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function name() public view responsible returns (string);\n")),(0,i.kt)("h4",{id:"symbol"},"Symbol"),(0,i.kt)("p",null,"Returns the symbol of the token. E.g. \u201cHIX\u201d."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function symbol() public view responsible returns (string);\n")),(0,i.kt)("h4",{id:"decimals"},"Decimals"),(0,i.kt)("p",null,"Returns the number of decimals the token uses - e.g. 8, means to divide the token amount by 100000000 to get its user representation."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function decimals() public view responsible returns (uint8);\n")),(0,i.kt)("h4",{id:"total-supply"},"Total supply"),(0,i.kt)("p",null,"Returns the total token supply."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function totalSupply() public view responsible returns (uint128);\n")),(0,i.kt)("h4",{id:"token-wallet-code"},"Token wallet code"),(0,i.kt)("p",null,"Returns the token wallet code."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function walletCode() public view responsible returns (TvmCell);\n")),(0,i.kt)("h4",{id:"accept-tokens-burn"},"Accept tokens burn"),(0,i.kt)("p",null,"Does not have a standard signature, but has a standard function ID ",(0,i.kt)("inlineCode",{parentName:"p"},"0x192B51B1")," obtained as ",(0,i.kt)("inlineCode",{parentName:"p"},"tvm.functionId('acceptBurn(uint128)') - 1"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"uint128 _value")," parameter MUST be first. The function name and the rest of the parameters are not fixed by this standard and can be reinvented for each substandard."),(0,i.kt)("p",null,"Decreases token total supply by ",(0,i.kt)("inlineCode",{parentName:"p"},"_value"),". The contract MUST check that the sender is a correct token wallet. Before sending this message, caller token wallet MUST decrease its own balance by ",(0,i.kt)("inlineCode",{parentName:"p"},"_value"),". If the mint can't be accepted (e.g. invalid sender), this message MUST be bounced."),(0,i.kt)("p",null,"Any function from the following snippet is a valid example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"interface TIP3AcceptBurn {\n    function acceptBurn(uint128 _value) functionID(0x192B51B1) public;\n    function acceptBurn2(uint128 _value, uint256 _publicKey, address _owner) functionID(0x192B51B1) public;\n    function acceptBurn3(uint128 _value, TvmCell _meta) functionID(0x192B51B1) public;\n}\n")),(0,i.kt)("h4",{id:"standard-interface-detection"},"Standard interface detection"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"interface TIP3TokenRoot {\n    function acceptBurn(uint128 _value) functionID(0x192B51B1) public view responsible;\n    \n    function name() public view responsible returns (string);\n    function symbol() public view responsible returns (string);\n    function decimals() public view responsible returns (uint8);\n    function totalSupply() public view responsible returns (uint128);\n    function walletCode() public view responsible returns (TvmCell);\n}\n")),(0,i.kt)("p",null,"The token root interface ID is ",(0,i.kt)("inlineCode",{parentName:"p"},"0x4371D8ED"),"."),(0,i.kt)("h3",{id:"token-wallet"},"Token wallet"),(0,i.kt)("h4",{id:"root"},"Root"),(0,i.kt)("p",null,"Returns the token root address."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function root() public view responsible returns (address);\n")),(0,i.kt)("h4",{id:"balance"},"Balance"),(0,i.kt)("p",null,"Returns the token wallet balance."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function balance() public view responsible returns (uint128);\n")),(0,i.kt)("h4",{id:"wallet-code"},"Wallet code"),(0,i.kt)("p",null,"Returns the token wallet code."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function walletCode() public view responsible returns (TvmCell);\n")),(0,i.kt)("h4",{id:"accept-tokens-transfer"},"Accept tokens transfer"),(0,i.kt)("p",null,"Does not have a standard signature, but has a standard function ID ",(0,i.kt)("inlineCode",{parentName:"p"},"0x67A0B95F")," obtained as ",(0,i.kt)("inlineCode",{parentName:"p"},"tvm.functionId('acceptTransfer(uint128)') - 1"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"uint128 _value")," parameter MUST be first. The function name and the rest of the parameters are not fixed by this standard and can be reinvented for each substandard."),(0,i.kt)("p",null,"Increases token wallet balance by ",(0,i.kt)("inlineCode",{parentName:"p"},"_value"),". The contract MUST check that the sender is a correct token wallet. Before sending this message, caller token wallet MUST decrease its own balance by ",(0,i.kt)("inlineCode",{parentName:"p"},"_value"),". If the transfer can't be accepted (e.g. invalid sender), this message MUST be bounced."),(0,i.kt)("p",null,"Any function from the following snippet is a valid example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"interface TIP3AcceptTransfer {\n    function acceptTransfer(uint128 _value) functionID(0x67A0B95F) external;\n    function acceptTransfer2(uint128 _value, uint256 _publicKey, address _owner) functionID(0x67A0B95F) external;\n    function acceptTransfer3(uint128 _value, TvmCell _meta) functionID(0x67A0B95F) external;\n}\n")),(0,i.kt)("h4",{id:"accept-tokens-mint"},"Accept tokens mint"),(0,i.kt)("p",null,"Does not have a standard signature, but has a standard function ID ",(0,i.kt)("inlineCode",{parentName:"p"},"0x4384F298")," obtained as ",(0,i.kt)("inlineCode",{parentName:"p"},"tvm.functionId('acceptMint(uint128)') - 1"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"uint128 _value")," parameter MUST be first. The function name and the rest of the parameters are not fixed by this standard and can be reinvented for each substandard."),(0,i.kt)("p",null,"Increases token wallet balance by ",(0,i.kt)("inlineCode",{parentName:"p"},"_value"),". The contract MUST check that the sender is a correct token root. Before sending this message, token root MUST increase the total supply by ",(0,i.kt)("inlineCode",{parentName:"p"},"_value"),". If the mint can't be accepted (e.g. invalid sender), this message MUST be bounced."),(0,i.kt)("p",null,"Any function from the following snippet is a valid example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"interface TIP3AcceptMint {\n    function acceptMint(uint128 _value) functionID(0x4384F298) external;\n    function acceptMint2(uint128 _value, uint256 _publicKey, address _owner) functionID(0x4384F298) external;\n    function acceptMint3(uint128 _value, TvmCell _meta) functionID(0x4384F298) external;\n}\n")),(0,i.kt)("h4",{id:"on-bounce-behaviour"},"On-bounce behaviour"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"acceptTransfer")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"acceptBurn")," methods can be bounced, e.g. receiver token wallet has a different code or burning disabled. The token wallet behaviour in these cases should be implemented according to the following rules."),(0,i.kt)("h5",{id:"handle-accepttransfer-bounce"},"Handle ",(0,i.kt)("inlineCode",{parentName:"h5"},"acceptTransfer")," bounce"),(0,i.kt)("p",null,"Increases token wallet balance according to the value, specified in the bounce body."),(0,i.kt)("h5",{id:"handle-acceptburn-bounce"},"Handle ",(0,i.kt)("inlineCode",{parentName:"h5"},"acceptBurn")," bounce"),(0,i.kt)("p",null,"Increases token wallet balance according to the value, specified in the bounce body."),(0,i.kt)("h4",{id:"standard-interface-detection-1"},"Standard interface detection"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"interface TIP3TokenWallet {\n    function acceptTransfer(uint128 _value) functionID(0x67A0B95F) external;\n    function acceptMint(uint128 _value) functionID(0x4384F298) external;\n    \n    function root() public view responsible returns (address);\n    function balance() public view responsible returns (uint128);\n    function walletCode() public view responsible returns (TvmCell);\n}\n")),(0,i.kt)("p",null,"The token wallet interface ID is ",(0,i.kt)("inlineCode",{parentName:"p"},"0x4F479FA3"),"."))}f.isMDXComponent=!0}}]);