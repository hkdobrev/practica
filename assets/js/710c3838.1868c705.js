"use strict";(self.webpackChunkpractica_docs=self.webpackChunkpractica_docs||[]).push([[819],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),s=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),h=r,m=d["".concat(u,".").concat(h)]||d[h]||p[h]||i;return n?o.createElement(m,a(a({ref:t},c),{},{components:n})):o.createElement(m,a({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7955:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a=["components"],l={sidebar_position:1,sidebar_label:"Short guide"},u="Contributing to Practica.js - The short guide",s={unversionedId:"contribution/contribution-short-guide",id:"contribution/contribution-short-guide",title:"Contributing to Practica.js - The short guide",description:"You belong with us",source:"@site/docs/contribution/contribution-short-guide.md",sourceDirName:"contribution",slug:"/contribution/contribution-short-guide",permalink:"/contribution/contribution-short-guide",editUrl:"https://github.com/practicajs/practica/tree/main/docs/docs/contribution/contribution-short-guide.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Short guide"},sidebar:"tutorialSidebar",previous:{title:"Features and practices",permalink:"/features"},next:{title:"Long guide",permalink:"/contribution/contribution-long-guide"}},c={},p=[{value:"You belong with us",id:"you-belong-with-us",level:2},{value:"2 things to consider",id:"2-things-to-consider",level:2},{value:"The main internals tiers (in a nutshell)",id:"the-main-internals-tiers-in-a-nutshell",level:2},{value:"Option 1 - External or configuration change",id:"option-1---external-or-configuration-change",level:3},{value:"Option 2 - The code generator",id:"option-2---the-code-generator",level:3},{value:"Option 3 - The code templates",id:"option-3---the-code-templates",level:3},{value:"Workflow",id:"workflow",level:2},{value:"Development machine setup",id:"development-machine-setup",level:2}],d={toc:p};function h(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"contributing-to-practicajs---the-short-guide"},"Contributing to Practica.js - The short guide"),(0,i.kt)("h2",{id:"you-belong-with-us"},"You belong with us"),(0,i.kt)("p",null,"We are in an ever-going quest for better software practices. If you reached down to this page, you probably belong with us \ud83d\udc9c. "),(0,i.kt)("p",null,"Note: This is a shortened guide that suits those are willing to quickly contribute. Once you deepen your relations with Practica.js - It's a good idea to read the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/practicajs/practica/blob/main/CONTRIBUTING.md"},"full guide")),(0,i.kt)("h2",{id:"2-things-to-consider"},"2 things to consider"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Our philosophy is all about minimalism and simplicity - We strive to write less code, rely on existing and reputable libraries, stick to Node/JS standards and avoid adding our own abstractions"),(0,i.kt)("li",{parentName:"ul"},"Popular vendors only - Each technology and vendor that we introduce must super popular and reliable. For example, a library must one of the top 5 most starred and downloaded in its category. . See ",(0,i.kt)("a",{parentName:"li",href:"/contribution/vendor-pick-guidelines"},"full vendor choose instructions here"))),(0,i.kt)("h2",{id:"the-main-internals-tiers-in-a-nutshell"},"The main internals tiers (in a nutshell)"),(0,i.kt)("p",null,"For a quick start, you don't necessarily need to understand the entire codebase. Typically, your contribution will fall under one of these three categories:"),(0,i.kt)("h3",{id:"option-1---external-or-configuration-change"},"Option 1 - External or configuration change"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"High-level changes")),(0,i.kt)("p",null,"If you simply mean to edit things beyond the code - There is no need to delve into the internals. For example, when changing documentation, CI/bots, and alike - One can simply perform the task without delving into the code"),(0,i.kt)("h3",{id:"option-2---the-code-generator"},"Option 2 - The code generator"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Code and CLI to get the user preferences and copy the right code to her computer")),(0,i.kt)("p",null,"Here you will find CLI, UI, and logic to generate the right code. We run our own custom code to go through the code-template folder and filter out parts/files based on the user preferences. For example, should she ask NOT to get a GitHub Actions file - The generator will remove this file from the output"),(0,i.kt)("p",null,"How to work with it?"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"If all you need is to alter the logic, you may just code in the ~/code-generator/generation-logic folder and run the tests (located in the same folder)"),(0,i.kt)("li",{parentName:"ol"},"If you wish to modify the CLI UI, then you'll need to build the code before running (because there is no way to run TypeScript in CLI). Open two terminals: ")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Open one terminal to compile the code:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm run build:watch\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Open second terminal to run the CLI UI:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm run start:cli\n")),(0,i.kt)("h3",{id:"option-3---the-code-templates"},"Option 3 - The code templates"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"The output of our program: An example Microservice and libraries")),(0,i.kt)("p",null,"Here you will the generated code that we will selectively copy to the user's computer which is located under {root}/src/code-templates. It's preferable to work on this code outside the main repository in some side folder. To achieve this, simply generate the code using the CLI, code, run the tests, then finally copy to the main repository"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Install dependencies")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"nvm use && npm i\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Build the code")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm run build\n")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Bind the CLI command to our code")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cd .dist && npm link\n")),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Generate the code to your preferred working folder")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cd {some folder like $HOME}\ncreate-node-app immediate --install-dependencies\n")),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Now you can work on the generated code. Later on, once your tests pass and you're happy - copy the changes back to ~/practica/src/code-templates")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Run the tests while you code"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"#From the folder where you generated the code to. You might need to 'git init'\ncd default-app-name/services/order-service\nnpm run test:dev\n")),(0,i.kt)("h2",{id:"workflow"},"Workflow"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Idea - Claim an existing issue or open a new one"),(0,i.kt)("li",{parentName:"ol"},"Optional: Design - If you're doing something that is not straightforward, share your high-level approach to this within the issue"),(0,i.kt)("li",{parentName:"ol"},"PR - Once you're done, run the tests locally then PR to main. Ensure all checks pass. If you introduced a new feature - Update the docs")),(0,i.kt)("h2",{id:"development-machine-setup"},"Development machine setup"),(0,i.kt)("p",null,"\u2705 Ensure Node, Docker and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nvm-sh/nvm#installing-and-updating"},"NVM")," are installed"),(0,i.kt)("p",null,"\u2705 Configure GitHub and npm 2FA!"),(0,i.kt)("p",null,"\u2705 Close the repo if you are a maintainer, or fork it if have no collaborators permissions"),(0,i.kt)("p",null,"\u2705 With your terminal, ensure the right Node version is installed:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"nvm use\n")),(0,i.kt)("p",null,"\u2705 Install dependencies:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm i\n")),(0,i.kt)("p",null,"\u2705 Ensure all tests pass:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm t\n")),(0,i.kt)("p",null,"\u2705 You can safely start now: Code, run the test and vice versa"))}h.isMDXComponent=!0}}]);