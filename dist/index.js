!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports["webpack-test-project-rita"]=t(require("react")):e["webpack-test-project-rita"]=t(e.react)}(this,(e=>(()=>{"use strict";var t={859:(e,t,r)=>{r.r(t),r.d(t,{button:()=>n,buttonClicked:()=>o,input:()=>a,inputGroup:()=>c,subContainer:()=>u});var n="Pml5sXIV3JY7Fk0j2moQ",o="se121GPF8yRHLQO682JQ",a="bVjSDdULbN_Vws_oMc1w",c="mYk1rbr_JBYiFN7rxbng",u="cNVDPca708zGWYY1BVzG"},155:t=>{t.exports=e}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var a=r[e]={exports:{}};return t[e](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};n.r(o),n.d(o,{default:()=>l});var a=n(155),c=n.n(a);const u=n(859);const l=function(e){var t=e.message,r=e.isClicked,n=e.handleButtonClick,o=(0,a.useState)(""),l=o[0],i=o[1],s=(0,a.useState)(""),p=s[0],d=s[1];return c().createElement("div",{className:u.subContainer},c().createElement("p",null," Welcome ",t),c().createElement("div",{className:u.inputGroup},c().createElement("input",{type:"text",placeholder:"First Name",value:l,onChange:function(e){return i(e.target.value)},className:u.input}),c().createElement("input",{type:"text",placeholder:"Last Name",value:p,onChange:function(e){return d(e.target.value)},className:u.input})),c().createElement("button",{className:"".concat(u.button," ").concat(r?u.buttonClicked:""),onClick:n},r?"Clicked!":"Click Me"))};return o})()));