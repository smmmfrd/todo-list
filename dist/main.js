(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(81),o=n.n(r),a=n(645),c=n.n(a)()(o());c.push([e.id,":root{\n    --nav-bgc: #DDD;\n}\n\n*{\n    margin: 0;\n}\n\nhtml, body{\n    height: 100%;\n}\n\nbody{\n    background-color: #BEEEEF;\n}\n\n#content{\n    height: 100%;\n    display: grid;\n    grid-template-columns: 30% 1fr;\n}\n\n#nav{\n    background-color: var(--nav-bgc);\n    height: 100%;\n}\n\n#task-creator{\n    background-color: aquamarine;\n}\n\n.modal{\n    margin: 4rem auto;\n}\n\n#task-display{\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(225px, 1fr));\n    gap: 1rem;\n}\n\n.card{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    background-color: #EEE;\n    border: 1px solid #EEE;\n    border-radius: 15px;\n    padding: 1rem;\n    font-size: 1.1rem;\n}\n\n.card > input[type='checkbox']{\n    /* pointer-events: none; */\n    height: 1rem;\n    width: 1rem;\n}",""]);const i=c},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var d=this[i][0];null!=d&&(c[d]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);r&&c[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),t.push(s))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},c=[],i=0;i<e.length;i++){var d=e[i],l=r.base?d[0]+r.base:d[0],s=a[l]||0,p="".concat(l," ").concat(s);a[l]=s+1;var u=n(p),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var h=o(m,r);r.byIndex=i,t.splice(i,0,{identifier:p,updater:h,references:1})}c.push(p)}return c}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=n(a[c]);t[i].references--}for(var d=r(e,o),l=0;l<a.length;l++){var s=n(a[l]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}a=d}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=[];const t=(e,t)=>({title:e,description:t,completed:!1});function r(){localStorage.setItem("today",JSON.stringify(e))}var o;function a(e){let t=document.createElement("div"),n=document.createElement("label");n.setAttribute("for",e),n.innerHTML=`${e.toUpperCase()}: `,t.appendChild(n);let r=document.createElement("input");return r.type="text",r.id=e,r.classList.add("input"),t.appendChild(r),t}function c(){for(var t=document.querySelector("#task-display");t.firstChild;)t.removeChild(t.firstChild);e.forEach((e=>{!function(e,t){let n=document.createElement("div");n.classList.add("card"),n.textContent=`${e.title}`,n.addEventListener("click",(()=>{o.display(e)}));let a=document.createElement("input");a.type="checkbox",a.checked=e.completed,a.onclick=t=>{e.completed=!e.completed,r(),t.stopPropagation()},n.appendChild(a),t.appendChild(n)}(e,t)})),r()}null===localStorage.getItem("today")?(e.push(t("Brush Teeth","Scrub those teefers clean.")),e.push(t("Apply Deodorant","You're and adult.")),e.push(t("Morning Sudoku","Get that brain started.")),e.push(t("Work Out","Yea, I work out.")),r()):e=JSON.parse(localStorage.getItem("today"));var i=n(379),d=n.n(i),l=n(795),s=n.n(l),p=n(569),u=n.n(p),m=n(565),h=n.n(m),f=n(216),v=n.n(f),y=n(589),E=n.n(y),g=n(426),C={};C.styleTagTransform=E(),C.setAttributes=h(),C.insert=u().bind(null,"head"),C.domAPI=s(),C.insertStyleElement=v(),d()(g.Z,C),g.Z&&g.Z.locals&&g.Z.locals,document.querySelector("#content"),function(){let n=document.createElement("div");n.id="nav",content.appendChild(n);let r=function(){let n=document.createElement("dialog");n.classList.add("modal");let r=document.createElement("button");r.addEventListener("click",(()=>n.close())),r.textContent="close",n.appendChild(r);let o=document.createElement("p"),i=a("name"),d=a("description");o.appendChild(i),o.appendChild(d),n.appendChild(o);let l=document.createElement("button");return l.addEventListener("click",(()=>{var r,o;r=i.querySelector(".input").value,o=d.querySelector(".input").value,e.push(t(r,o)),c(),n.close()})),l.textContent="Add",n.appendChild(l),n}();content.appendChild(r),o=function(){let e,t=document.createElement("dialog");t.classList.add("modal"),t.id="task-modal";let n=document.createElement("button");n.addEventListener("click",(()=>t.close())),n.textContent="close",t.appendChild(n);let r=document.createElement("h1");t.appendChild(r);let o=document.createElement("p");t.appendChild(o);let a=document.createElement("button");a.addEventListener("click",(()=>{e.completed=!e.completed,i(e),c()})),t.appendChild(a);const i=n=>{t.open||t.showModal(),r.textContent=`${n.title}`,o.textContent=`${n.description}`,e=n,a.textContent=n.completed?"MARK UNCOMPLETED":"MARK COMPLETED"};return{modal:t,display:i}}(),content.appendChild(o.modal);let i=document.createElement("div");i.id="project-content";let d=document.createElement("div");d.id="task-creator";let l=document.createElement("button");l.addEventListener("click",(()=>{[...r.getElementsByClassName("input")].forEach((e=>e.value="")),r.showModal()})),l.textContent="Add Task",d.appendChild(l),i.appendChild(d);let s=document.createElement("div");s.id="task-display",i.appendChild(s),content.appendChild(i),c()}()})()})();