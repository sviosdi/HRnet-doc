"use strict";(self.webpackChunkHRnet_doc=self.webpackChunkHRnet_doc||[]).push([[776],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,k=m["".concat(p,".").concat(d)]||m[d]||u[d]||l;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4928:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:2},i="Select",o={unversionedId:"sl-base/Select",id:"sl-base/Select",title:"Select",description:"Le composant Select",source:"@site/docs/sl-base/Select.md",sourceDirName:"sl-base",slug:"/sl-base/Select",permalink:"/HRnet-doc/docs/sl-base/Select",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Popup",permalink:"/HRnet-doc/docs/sl-base/Popup"},next:{title:"Le composant DataTable",permalink:"/HRnet-doc/docs/category/le-composant-datatable"}},p={},s=[{value:"Le composant <code>Select</code>",id:"le-composant-select",level:2},{value:"Les props.",id:"les-props",level:3}],c={toc:s},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"select"},"Select"),(0,r.kt)("h2",{id:"le-composant-select"},"Le composant ",(0,r.kt)("inlineCode",{parentName:"h2"},"Select")),(0,r.kt)("h3",{id:"les-props"},"Les props."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"options"),(0,r.kt)("em",{parentName:"li"},"obligatoire")," :",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"un tableau de cha\xeenes servant \xe0 la fois de label et de valeur ",'["labelAsValue", "....", ....]'),(0,r.kt)("li",{parentName:"ul"},"un tableau de tableaux de la forme : [ [",(0,r.kt)("em",{parentName:"li"},'"label"'),", ",(0,r.kt)("em",{parentName:"li"},'"valeur"'),", ","[",(0,r.kt)("em",{parentName:"li"},"svg"),"]","], ","[...]",", ....] - ic\xf4ne ",(0,r.kt)("em",{parentName:"li"},"svg")," facultative."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"selected")," ",(0,r.kt)("em",{parentName:"li"},"optionnel")," (0 par d\xe9faut) :",(0,r.kt)("br",null)," id. de la valeur s\xe9lectionn\xe9e \xe0 l'initialisation. Si \"2\" (ou {2}) : la troisi\xe8me option est s\xe9lectionn\xe9e \xe0 l'initialisation ","[0 est la premi\xe8re]"," -"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"onSelect")," ",(0,r.kt)("em",{parentName:"li"},"optionnel")," : ",(0,r.kt)("br",null),"une fonction de param\xe8tres (",(0,r.kt)("em",{parentName:"li"},'"valeur"'),", ",(0,r.kt)("em",{parentName:"li"},"id"),") appel\xe9e lors de la s\xe9lection d'une option"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"id")," ",(0,r.kt)("em",{parentName:"li"},"optionnels")," : ",(0,r.kt)("br",null),"ajout\xe9s au ",(0,r.kt)("inlineCode",{parentName:"li"},"div")," englobant (wrappper) de classe ",(0,r.kt)("em",{parentName:"li"},".sl-select-00"),". ",(0,r.kt)("inlineCode",{parentName:"li"},"name")," devient ",(0,r.kt)("inlineCode",{parentName:"li"},"data-name")," pour le ",(0,r.kt)("inlineCode",{parentName:"li"},"div"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"li"},"name")," : utile si le ",(0,r.kt)("inlineCode",{parentName:"li"},"Select")," est ajout\xe9 \xe0 un formulaire, car il permet alors d'ajouter aux donn\xe9es r\xe9cup\xe9r\xe9es par le formulaire\nla valeur s\xe9lectionn\xe9e. (dans l'objet ",(0,r.kt)("inlineCode",{parentName:"li"},"formData")," pass\xe9 en param\xe8tre \xe0 ",(0,r.kt)("inlineCode",{parentName:"li"},"onSubmit()")," du formulaire)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"className")," ",(0,r.kt)("em",{parentName:"li"},"optionnel")," : ",(0,r.kt)("br",null)," ajout\xe9 \xe0 la classe ",(0,r.kt)("em",{parentName:"li"},".sl-select-00")," si pr\xe9sent"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"height")," ",(0,r.kt)("em",{parentName:"li"},"optionnel"),":",(0,r.kt)("br",null)," la hauteur de l'ent\xeate du ",(0,r.kt)("inlineCode",{parentName:"li"},"Select"),". '26px' par d\xe9faut.")))}u.isMDXComponent=!0}}]);