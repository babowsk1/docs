"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[6578],{3905:function(e,n,r){r.d(n,{Zo:function(){return c},kt:function(){return u}});var t=r(7294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=t.createContext({}),d=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},c=function(e){var n=d(e.components);return t.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),g=d(r),u=i,m=g["".concat(l,".").concat(u)]||g[u]||p[u]||a;return r?t.createElement(m,s(s({ref:n},c),{},{components:r})):t.createElement(m,s({ref:n},c))}));function u(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=r.length,s=new Array(a);s[0]=g;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var d=2;d<a;d++)s[d]=r[d];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}g.displayName="MDXCreateElement"},7302:function(e,n,r){r.r(n),r.d(n,{assets:function(){return c},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return p}});var t=r(7462),i=r(3366),a=(r(7294),r(3905)),s=["components"],o={},l="Signer Tool",d={unversionedId:"develop/sdk-tools/everdev/command-line-interface/signer-tool",id:"develop/sdk-tools/everdev/command-line-interface/signer-tool",title:"Signer Tool",description:"Signer registry is a centralized place where you can store your development keys.",source:"@site/../../src/develop/sdk-tools/everdev/command-line-interface/signer-tool.md",sourceDirName:"develop/sdk-tools/everdev/command-line-interface",slug:"/develop/sdk-tools/everdev/command-line-interface/signer-tool",permalink:"/develop/sdk-tools/everdev/command-line-interface/signer-tool",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/develop/sdk-tools/everdev/command-line-interface/signer-tool.md",tags:[],version:"current",lastUpdatedAt:1654073435,formattedLastUpdatedAt:"6/1/2022",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SDK",permalink:"/develop/sdk-tools/everdev/command-line-interface/sdk"},next:{title:"Solidity",permalink:"/develop/sdk-tools/everdev/command-line-interface/solidity"}},c={},p=[{value:"Add a signer with randomly generated keys",id:"add-a-signer-with-randomly-generated-keys",level:2},{value:"Add a signer with specific keys",id:"add-a-signer-with-specific-keys",level:2},{value:"List registered signers",id:"list-registered-signers",level:2},{value:"Get signer details",id:"get-signer-details",level:2},{value:"Set default signer",id:"set-default-signer",level:2},{value:"Delete a signer",id:"delete-a-signer",level:2}],g={toc:p};function u(e){var n=e.components,r=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,t.Z)({},g,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"signer-tool"},"Signer Tool"),(0,a.kt)("p",null,"Signer registry is a centralized place where you can store your development keys."),(0,a.kt)("p",null,"Each signer in registry has an unique user defined name. All everdev commands\nthat require signing or encryption refer to the signer by name."),(0,a.kt)("p",null,"You can mark one of the signers as a default.\nIt can be used in signing commands without providing signer option."),(0,a.kt)("p",null,"Signer repository management in everdev is accessible through the ",(0,a.kt)("inlineCode",{parentName:"p"},"signer")," tool."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," If you need to generate an unsigned message, you may use the option ",(0,a.kt)("inlineCode",{parentName:"p"},"--signer none")," in any relevant commands in other controllers. Omitting the signer option altogether always means using the default signer."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," Keys in the repository are stored unencrypted."),(0,a.kt)("h2",{id:"add-a-signer-with-randomly-generated-keys"},"Add a signer with randomly generated keys"),(0,a.kt)("p",null,"This command adds a signer with randomly generated keys."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"everdev signer generate signer_name\n")),(0,a.kt)("p",null,"See other available generation options with help command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"everdev signer generate -h\nEverDev Version: 0.5.0\nUse: everdev signer generate name [options]\nArgs:\n    name  Signer name\nOptions:\n    --help, -h        Show command usage\n    --mnemonic, -m    Use mnemonic phrase\n    --dictionary, -d  Mnemonic dictionary\n                      0  TON\n                      1  English\n                      2  Chinese Simplified\n                      3  Chinese Traditional\n                      4  French\n                      5  Italian\n                      6  Japanese\n                      7  Korean\n                      8  Spanish\n    --words, -w       Number of mnemonic words\n    --force, -f       Overwrite signer if already exists\n")),(0,a.kt)("h2",{id:"add-a-signer-with-specific-keys"},"Add a signer with specific keys"),(0,a.kt)("p",null,"This command adds a signer with previously generated (e.g. with tonos-cli) keys."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"everdev signer add signer_name signer_secret_key_or_seed_phrase_in_quotes\n")),(0,a.kt)("p",null,"See other available signer addition options with help command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"everdev signer add -h\nEverDev Version: 0.5.0\nUse: everdev signer add name secret [options]\nArgs:\n    name    Signer name\n    secret  Secret key or seed phrase\nOptions:\n    --help, -h        Show command usage\n    --dictionary, -d  Mnemonic dictionary\n                      0  TON\n                      1  English\n                      2  Chinese Simplified\n                      3  Chinese Traditional\n                      4  French\n                      5  Italian\n                      6  Japanese\n                      7  Korean\n                      8  Spanish\n    --force, -f       Overwrite signer if already exists\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," By default the dictionary is set to english, which allows using seed phrases generated by other TONOS tools, such as tonos-cli."),(0,a.kt)("h2",{id:"list-registered-signers"},"List registered signers"),(0,a.kt)("p",null,"This command lists all registered signers with their public keys."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"everdev signer list\n")),(0,a.kt)("p",null,"Result:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ everdev signer list\n\nSigner           Public Key\n---------------  ----------------------------------------------------------------\nsign1 (Default)  cffd3a2f1d241807b2205220a7d6df980e67a3cc7c47eba2766cdc1bbddfc0e3\nsign2            0fc4e781720d80f76257db333c6b6934090562418652cf30352878c87707aa94\n")),(0,a.kt)("h2",{id:"get-signer-details"},"Get signer details"),(0,a.kt)("p",null,"This command lists all information (including secret data) for a specified signer."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"everdev signer info signer_name\n")),(0,a.kt)("p",null,"Result:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'$ everdev signer info sign2\n{\n    "name": "sign2",\n    "description": "",\n    "keys": {\n        "public": "760d69964d038997d891fca0a0407c2ffefb701e7cb2f9ff0a87fbbf1e8098f2",\n        "secret": "72571b5a9392e6bb215b460ca3c0545c34d790e185f66f5b2e7564329ffea86c"\n    }\n}\n')),(0,a.kt)("h2",{id:"set-default-signer"},"Set default signer"),(0,a.kt)("p",null,"This command sets a previously added signer as default (initially the first added signer is used by default)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"everdev signer default signer_name\n")),(0,a.kt)("h2",{id:"delete-a-signer"},"Delete a signer"),(0,a.kt)("p",null,"This command deletes a previously added signer from signer registry."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"everdev signer delete signer_name\n")))}u.isMDXComponent=!0}}]);