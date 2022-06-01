"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[3082],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return v}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=d(n),v=o,k=p["".concat(s,".").concat(v)]||p[v]||u[v]||a;return n?r.createElement(k,l(l({ref:t},c),{},{components:n})):r.createElement(k,l({ref:t},c))}));function v(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var d=2;d<a;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},494:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return v},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),l=["components"],i={},s="Network Tool",d={unversionedId:"develop/sdk-tools/everdev/command-line-interface/network-tool",id:"develop/sdk-tools/everdev/command-line-interface/network-tool",title:"Network Tool",description:"Network tool is a convenient way to organize all of your network configurations in one place.",source:"@site/../../src/develop/sdk-tools/everdev/command-line-interface/network-tool.md",sourceDirName:"develop/sdk-tools/everdev/command-line-interface",slug:"/develop/sdk-tools/everdev/command-line-interface/network-tool",permalink:"/develop/sdk-tools/everdev/command-line-interface/network-tool",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/develop/sdk-tools/everdev/command-line-interface/network-tool.md",tags:[],version:"current",lastUpdatedAt:1654073435,formattedLastUpdatedAt:"6/1/2022",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Evernode SE",permalink:"/develop/sdk-tools/everdev/command-line-interface/evernode-platform-startup-edition-se"},next:{title:"SDK",permalink:"/develop/sdk-tools/everdev/command-line-interface/sdk"}},c={},u=[{value:"Add a network",id:"add-a-network",level:2},{value:"Set a giver for a network",id:"set-a-giver-for-a-network",level:2},{value:"List registered networks",id:"list-registered-networks",level:2},{value:"Set default network",id:"set-default-network",level:2},{value:"Delete a network",id:"delete-a-network",level:2}],p={toc:u};function v(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"network-tool"},"Network Tool"),(0,a.kt)("p",null,"Network tool is a convenient way to organize all of your network configurations in one place."),(0,a.kt)("p",null,"You can register several blockchains (networks) under short names and then use these names as a target blockchain when working with contracts."),(0,a.kt)("p",null,"You can mark one of the networks as a default. It can be used in network commands without providing net name."),(0,a.kt)("h2",{id:"add-a-network"},"Add a network"),(0,a.kt)("p",null,"This command adds a network to the everdev registry."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"everdev network add network_name network_endpoints\n")),(0,a.kt)("p",null,"See other available network addition options with help command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ everdev network add -h\nEverDev Version: 0.5.0\nUse: everdev network add name endpoints [options]\nArgs:\n    name\n    endpoints  Comma separated endpoints\nOptions:\n    --help, -h   Show command usage\n    --force, -f  Overwrite key if already exists\n")),(0,a.kt)("p",null,"Example with ",(0,a.kt)("a",{parentName:"p",href:"https://docs.everos.dev/ever-sdk/reference/ever-os-api/networks"},"mainnet endpoints"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"everdev network add main eri01.main.everos.dev,gra01.main.everos.dev,gra02.main.everos.dev,lim01.main.everos.dev,rbx01.main.everos.dev\n")),(0,a.kt)("h2",{id:"set-a-giver-for-a-network"},"Set a giver for a network"),(0,a.kt)("p",null,"This command sets a giver account for a network. Giver will be used to top up your account balances on the network, including during deployment."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"everdev network giver network_name giver_address\n")),(0,a.kt)("p",null,"See other available network addition options with help command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ everdev network giver -h\nEverDev Version: 0.5.0\nUse: everdev network giver name address [options]\nArgs:\n    name     Network name\n    address  Giver address\nOptions:\n    --help, -h    Show command usage\n    --signer, -s  Signer to be used with giver\n    --value, -v   Deploying account initial balance in nanotokens\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," The default signer and the initial balance value of 10 tokens will be used, unless otherwise specified through options. Also note, that some contracts may require a higher initial balance for successful deployment. DePool contract, for instance, requires a minimun of 21 tokens."),(0,a.kt)("p",null,"Only one giver can be set for a network. Setting another one will overwrite the current giver. To view the current giver settings for all networks, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"everdev network list")," command (for details see the section ",(0,a.kt)("a",{parentName:"p",href:"/develop/sdk-tools/everdev/command-line-interface/network-tool#list-registered-networks"},"below"),")."),(0,a.kt)("h2",{id:"list-registered-networks"},"List registered networks"),(0,a.kt)("p",null,"This command lists all registered networks, their public endpoints, and their giver addresses, if any."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"everdev network list\n")),(0,a.kt)("p",null,"Result:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ everdev network list\nNetwork        Endpoints                                        Giver\n-------------  -----------------------------------------------  ------------------------------------------------------------------\nse             http://localhost                                 0:b5e9240fc2d2f1ff8cbb1d1dee7fb7cae155e5f6320e585fcc685698994a19a5\ndev (Default)  eri01.net.everos.dev, rbx01.net.everos.dev, gra01.net.everos.dev 0:255a3ad9dfa8aa4f3481856aafc7d79f47d50205190bd56147138740e9b177f3\n")),(0,a.kt)("h2",{id:"set-default-network"},"Set default network"),(0,a.kt)("p",null,"This command sets a previously added network as default (initially the mainnet is used by default)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"everdev network default network_name\n")),(0,a.kt)("h2",{id:"delete-a-network"},"Delete a network"),(0,a.kt)("p",null,"This command deletes a network from everdev registry."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"everdev network delete network_name\n")))}v.isMDXComponent=!0}}]);