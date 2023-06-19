(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>A});var a=t(537),r=t.n(a),o=t(645),i=t.n(o)()(r());i.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;700&display=swap);"]),i.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Alice&display=swap);"]),i.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Style+Script&display=swap);"]),i.push([n.id,"* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nhtml, body {\n  height: 100vh;\n  width: 100vw;\n  background-color: #fcf9ed;\n  overflow-x: hidden;\n}\n\n#content {\n  height: 100%;\n  width: 100%;\n  \n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  \n  font-family: 'Alice', serif;\n}\n\nbutton {\n  appearance: none;\n  border: 2px solid transparent;\n  background-color: transparent;\n  font-family: 'Playfair Display', serif;\n  cursor: pointer;\n}\n\nheader {\n  width: 100%;\n  \n  display: grid;\n  place-items: center;\n  padding: 10px 0 0 0;\n}\n\nheader h1, header h3 {\n  text-align: center;\n  font-family: 'Playfair Display', serif;\n}\n\nheader h3 {\n  font-family: 'Style Script', cursive;\n  position: relative;\n  top: -10px;\n  right: -25px;\n  margin: 0 0 -30px 0;\n}\n\nnav {\n  width: 100%;\n  display: grid;\n  place-items: center;\n  padding: 20px;\n  font-family: 'Playfair Display', serif;\n}\n\nnav a {\n  font-size: 1rem;\n  text-decoration: none;\n  color: black\n}\n\nnav a:hover {\n  border-bottom: 2px solid black;\n  font-weight: bold;\n}\n\n#content:has(#home) > nav a#nav-home,\n#content:has(#menu) > nav a#nav-menu,\n#content:has(#contact) > nav a#nav-contact {\n  border-bottom: 2px solid black;\n  font-weight: bold;\n}\n\nmain {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  flex: 1;\n  overflow-anchor: none;\n}\n\n.wrapper {\n  width: max(70vw, 300px);\n  height: 100%;\n  animation: fade 400ms ease-in-out;\n}\n\n#home {\n  width: max(90vw, 300px);\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  \n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  border-radius: 20px;;\n}\n\n#home p {\n  color: white;\n  font-size: 3rem;\n  text-shadow: black 0 0 20px;\n  text-align: center;\n}\n\n#home button {\n  background-color: white;\n  padding: 15px;\n  border-radius: 35px;\n  font-weight: bold;\n  font-size: 1.6rem;\n  transition: all 200ms ease-in-out;\n}\n\n#home button:hover {\n  background-color: black;\n  color: white;\n}\n\nfooter {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n\n  margin: auto 0 0 0;\n  padding: 40px;\n}\n\nfooter a {\n  display: grid;\n  place-items: center;\n}\n\nfooter img {\n  height: 1.4rem;\n  width: auto;\n}\n\nfooter img:hover {\n  height: 1.4rem;\n  width: auto;\n  scale: 1.2;\n}\n\n.logo {\n  width: 5rem;\n  height: auto;\n}\n\nnav ul {\n  width: max(300px, 10vw);\n  display: flex;\n}\n\nli {\n  list-style-type: none;\n}\n\nnav li {\n  flex: 1;\n  text-align: center;\n}\n\n#menu {\n  height: 100%;\n  /* width: max(50vw, 300px); */\n  \n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  grid-auto-rows: minmax(300px, 1fr);\n  gap: 30px;\n  place-content: center;\n}\n\n#contact {\n  height: 100%;\n  width: max(70vw, 300px);\n\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  grid-auto-rows: minmax(300px, 1fr);\n  gap: 30px;\n  place-content: center;\n}\n\n.card {\n  display: flex;\n  flex-direction: column;\n\n  border-radius: 20px;\n  box-shadow: 4px 4px 4px 2px gray;\n\n  font-size: 1.2rem;\n}\n\n.card img {\n  width: 100%;\n  height: 70%;\n  object-fit: cover;\n\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n}\n\n.card .description {\n  background-color: white;\n  flex: 1;\n  \n  margin: -20px 0 0 0;\n  padding: 10px;\n\n  border-radius: 20px;\n  transition: all 200ms ease-in-out;\n}\n\n.card:hover .description {\n  background-color: black;  \n  color: white;\n}\n\n.card h2 {\n  font-family: 'Playfair Display', serif;\n  font-size: 2.4rem;\n}\n\n@keyframes fade {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}","",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAIA;EACE,sBAAsB;EACtB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,WAAW;;EAEX,aAAa;EACb,sBAAsB;EACtB,mBAAmB;;EAEnB,2BAA2B;AAC7B;;AAEA;EACE,gBAAgB;EAChB,6BAA6B;EAC7B,6BAA6B;EAC7B,sCAAsC;EACtC,eAAe;AACjB;;AAEA;EACE,WAAW;;EAEX,aAAa;EACb,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,sCAAsC;AACxC;;AAEA;EACE,oCAAoC;EACpC,kBAAkB;EAClB,UAAU;EACV,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,aAAa;EACb,sCAAsC;AACxC;;AAEA;EACE,eAAe;EACf,qBAAqB;EACrB;AACF;;AAEA;EACE,8BAA8B;EAC9B,iBAAiB;AACnB;;AAEA;;;EAGE,8BAA8B;EAC9B,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,OAAO;EACP,qBAAqB;AACvB;;AAEA;EACE,uBAAuB;EACvB,YAAY;EACZ,iCAAiC;AACnC;;AAEA;EACE,uBAAuB;;EAEvB,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;;EAET,4BAA4B;EAC5B,sBAAsB;EACtB,2BAA2B;EAC3B,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,2BAA2B;EAC3B,kBAAkB;AACpB;;AAEA;EACE,uBAAuB;EACvB,aAAa;EACb,mBAAmB;EACnB,iBAAiB;EACjB,iBAAiB;EACjB,iCAAiC;AACnC;;AAEA;EACE,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,QAAQ;;EAER,kBAAkB;EAClB,aAAa;AACf;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,WAAW;AACb;;AAEA;EACE,cAAc;EACd,WAAW;EACX,UAAU;AACZ;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,uBAAuB;EACvB,aAAa;AACf;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,OAAO;EACP,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,6BAA6B;;EAE7B,aAAa;EACb,2DAA2D;EAC3D,kCAAkC;EAClC,SAAS;EACT,qBAAqB;AACvB;;AAEA;EACE,YAAY;EACZ,uBAAuB;;EAEvB,aAAa;EACb,2DAA2D;EAC3D,kCAAkC;EAClC,SAAS;EACT,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,sBAAsB;;EAEtB,mBAAmB;EACnB,gCAAgC;;EAEhC,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,WAAW;EACX,iBAAiB;;EAEjB,4BAA4B;EAC5B,6BAA6B;AAC/B;;AAEA;EACE,uBAAuB;EACvB,OAAO;;EAEP,mBAAmB;EACnB,aAAa;;EAEb,mBAAmB;EACnB,iCAAiC;AACnC;;AAEA;EACE,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,sCAAsC;EACtC,iBAAiB;AACnB;;AAEA;EACE;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;AACF",sourcesContent:["@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;700&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Alice&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Style+Script&display=swap');\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nhtml, body {\n  height: 100vh;\n  width: 100vw;\n  background-color: #fcf9ed;\n  overflow-x: hidden;\n}\n\n#content {\n  height: 100%;\n  width: 100%;\n  \n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  \n  font-family: 'Alice', serif;\n}\n\nbutton {\n  appearance: none;\n  border: 2px solid transparent;\n  background-color: transparent;\n  font-family: 'Playfair Display', serif;\n  cursor: pointer;\n}\n\nheader {\n  width: 100%;\n  \n  display: grid;\n  place-items: center;\n  padding: 10px 0 0 0;\n}\n\nheader h1, header h3 {\n  text-align: center;\n  font-family: 'Playfair Display', serif;\n}\n\nheader h3 {\n  font-family: 'Style Script', cursive;\n  position: relative;\n  top: -10px;\n  right: -25px;\n  margin: 0 0 -30px 0;\n}\n\nnav {\n  width: 100%;\n  display: grid;\n  place-items: center;\n  padding: 20px;\n  font-family: 'Playfair Display', serif;\n}\n\nnav a {\n  font-size: 1rem;\n  text-decoration: none;\n  color: black\n}\n\nnav a:hover {\n  border-bottom: 2px solid black;\n  font-weight: bold;\n}\n\n#content:has(#home) > nav a#nav-home,\n#content:has(#menu) > nav a#nav-menu,\n#content:has(#contact) > nav a#nav-contact {\n  border-bottom: 2px solid black;\n  font-weight: bold;\n}\n\nmain {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  flex: 1;\n  overflow-anchor: none;\n}\n\n.wrapper {\n  width: max(70vw, 300px);\n  height: 100%;\n  animation: fade 400ms ease-in-out;\n}\n\n#home {\n  width: max(90vw, 300px);\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  \n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  border-radius: 20px;;\n}\n\n#home p {\n  color: white;\n  font-size: 3rem;\n  text-shadow: black 0 0 20px;\n  text-align: center;\n}\n\n#home button {\n  background-color: white;\n  padding: 15px;\n  border-radius: 35px;\n  font-weight: bold;\n  font-size: 1.6rem;\n  transition: all 200ms ease-in-out;\n}\n\n#home button:hover {\n  background-color: black;\n  color: white;\n}\n\nfooter {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n\n  margin: auto 0 0 0;\n  padding: 40px;\n}\n\nfooter a {\n  display: grid;\n  place-items: center;\n}\n\nfooter img {\n  height: 1.4rem;\n  width: auto;\n}\n\nfooter img:hover {\n  height: 1.4rem;\n  width: auto;\n  scale: 1.2;\n}\n\n.logo {\n  width: 5rem;\n  height: auto;\n}\n\nnav ul {\n  width: max(300px, 10vw);\n  display: flex;\n}\n\nli {\n  list-style-type: none;\n}\n\nnav li {\n  flex: 1;\n  text-align: center;\n}\n\n#menu {\n  height: 100%;\n  /* width: max(50vw, 300px); */\n  \n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  grid-auto-rows: minmax(300px, 1fr);\n  gap: 30px;\n  place-content: center;\n}\n\n#contact {\n  height: 100%;\n  width: max(70vw, 300px);\n\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  grid-auto-rows: minmax(300px, 1fr);\n  gap: 30px;\n  place-content: center;\n}\n\n.card {\n  display: flex;\n  flex-direction: column;\n\n  border-radius: 20px;\n  box-shadow: 4px 4px 4px 2px gray;\n\n  font-size: 1.2rem;\n}\n\n.card img {\n  width: 100%;\n  height: 70%;\n  object-fit: cover;\n\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n}\n\n.card .description {\n  background-color: white;\n  flex: 1;\n  \n  margin: -20px 0 0 0;\n  padding: 10px;\n\n  border-radius: 20px;\n  transition: all 200ms ease-in-out;\n}\n\n.card:hover .description {\n  background-color: black;  \n  color: white;\n}\n\n.card h2 {\n  font-family: 'Playfair Display', serif;\n  font-size: 2.4rem;\n}\n\n@keyframes fade {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}"],sourceRoot:""}]);const A=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",a=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),a&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),a&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,a,r,o){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(a)for(var A=0;A<this.length;A++){var c=this[A][0];null!=c&&(i[c]=!0)}for(var d=0;d<n.length;d++){var s=[].concat(n[d]);a&&i[s[0]]||(void 0!==o&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=o),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),r&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=r):s[4]="".concat(r)),e.push(s))}},e}},537:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var a=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),o="/*# ".concat(r," */");return[e].concat([o]).join("\n")}return[e].join("\n")}},379:n=>{var e=[];function t(n){for(var t=-1,a=0;a<e.length;a++)if(e[a].identifier===n){t=a;break}return t}function a(n,a){for(var o={},i=[],A=0;A<n.length;A++){var c=n[A],d=a.base?c[0]+a.base:c[0],s=o[d]||0,l="".concat(d," ").concat(s);o[d]=s+1;var p=t(l),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var u=r(m,a);a.byIndex=A,e.splice(A,0,{identifier:l,updater:u,references:1})}i.push(l)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var o=a(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<o.length;i++){var A=t(o[i]);e[A].references--}for(var c=a(n,r),d=0;d<o.length;d++){var s=t(o[d]);0===e[s].references&&(e[s].updater(),e.splice(s,1))}o=c}}},569:n=>{var e={};n.exports=function(n,t){var a=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,r&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(a,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(a){var r=e[a];if(void 0!==r)return r.exports;var o=e[a]={id:a,exports:{}};return n[a](o,o.exports,t),o.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var a in e)t.o(e,a)&&!t.o(n,a)&&Object.defineProperty(n,a,{enumerable:!0,get:e[a]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var a=e.getElementsByTagName("script");if(a.length)for(var r=a.length-1;r>-1&&!n;)n=a[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),a=t(795),r=t.n(a),o=t(569),i=t.n(o),A=t(565),c=t.n(A),d=t(216),s=t.n(d),l=t(589),p=t.n(l),m=t(426),u={};u.styleTagTransform=p(),u.setAttributes=c(),u.insert=i().bind(null,"head"),u.domAPI=r(),u.insertStyleElement=s(),e()(m.Z,u),m.Z&&m.Z.locals&&m.Z.locals;const f=t.p+"75b09f721061b4f48d95.png",h=t.p+"b739d1af4b0b6be3de14.jpg",E=t.p+"4cd4432e494498249a81.jpg",C=t.p+"c16dc388dba590d830fe.jpg",g=t.p+"604b5f4c3a3d9d4647c0.jpg",B=[{name:"nasi goreng",desc:"Rice freshly fried with sweet soy sauce and served with toppings and sides of your choice.",img:h},{name:"gado gado",desc:"An assortment of vegetables mixed with fried peanut sauce. Usually dubbed as the Indonesian salad.",img:E},{name:"rendang",desc:"The pinnacle of Indonesian cuisine -- selected beef slow-cooked to perfection and sauced in rendang paste.",img:C},{name:"nasi kuning",desc:"Fragrant yellow rice made with coconut milk and turmeric and served with a variety of sides.",img:g}];const x=[{name:"Brandon Waluyo",role:"Head Chef",phone:"123-456-789",email:"totallynotfake@email.com",img:t.p+"9052a6b223685ef5f73b.jpeg"},{name:"Sean Yuwono",role:"Lead Manager",phone:"012-345-678",email:"totallynotfake@email.com",img:t.p+"e583aea26b552232287e.jpeg"},{name:"Rose Amalia",role:"Waiter",phone:"234-567-890",email:"totallynotfake@email.com",img:t.p+"51db5ce20232321aad96.jpeg"}];const v=t.p+"550985caaa8859d4b95f.svg";function b(n){const e=document.querySelector("main");return e.querySelector(".wrapper").remove(),e.appendChild(n),n}document.body.appendChild(function(){const n=document.createElement("div");n.setAttribute("id","content");const e=function(){const n=document.createElement("header"),e=new Image;e.src=f,e.classList.add("logo"),e.alt="Racetha Restaurant's logo";const t=document.createElement("h1"),a=document.createElement("h3");return t.innerText="Racetha",a.innerText="Restaurant",n.appendChild(e),n.appendChild(t),n.appendChild(a),n}(),t=function(){const n=document.createElement("nav"),e=document.createElement("ul");for(let n=0;n<3;n++){const n=document.createElement("li"),t=document.createElement("a");n.appendChild(t),e.appendChild(n)}return n.appendChild(e),n.querySelectorAll("a").forEach(((n,e)=>{switch(e){case 0:n.innerText="Home",n.id="nav-home",n.href="#home";break;case 1:n.innerText="Menu",n.id="nav-menu",n.href="#menu";break;case 2:n.innerText="Contact",n.id="nav-contact",n.href="#contact"}})),n}(),a=document.createElement("main"),r=function(){const n=document.createElement("footer"),e=document.createElement("p");e.innerText="Created by Thoriq Farras 2023";const t=document.createElement("img");t.src=v;const a=document.createElement("a");return a.href="https://github.com/thoriqfarras",a.target="_blank",a.appendChild(t),n.appendChild(e),n.appendChild(a),n}(),o=function(){const n=document.createElement("div");n.classList.add("wrapper"),n.style.backgroundImage=`url(${h})`,n.id="home";const e=document.createElement("p");e.innerText="Authentic Indonesian Cuisine";const t=document.createElement("button");return t.innerText="View Menu",t.setAttribute("id","view-menu"),n.appendChild(e),n.appendChild(t),n}(),i=function(){const n=document.createElement("div");return n.classList.add("wrapper"),n.id="menu",B.forEach((e=>{n.append(function(n){const e=document.createElement("div");e.classList.add("card");const t=document.createElement("div");t.classList.add("description");const a=new Image;a.src=n.img,a.alt=`a picture of ${n.name}`;const r=document.createElement("h2");r.innerText=n.name;const o=document.createElement("p");return o.innerText=n.desc,t.appendChild(r),t.appendChild(o),e.appendChild(a),e.appendChild(t),e}(e))})),n}(),A=function(){const n=document.createElement("div");return n.classList.add("wrapper"),n.id="contact",x.forEach((e=>{n.append(function(n){const e=document.createElement("div");e.classList.add("card");const t=document.createElement("div");t.classList.add("description");const a=new Image;a.src=n.img,a.alt=`a portrait of ${n.name}`;const r=document.createElement("h2");r.innerText=n.name;const o=document.createElement("ul"),i=document.createElement("li");i.innerText=n.role;const A=document.createElement("li");A.innerText=`Phone: ${n.phone}`;const c=document.createElement("li");return c.innerText=`Email: ${n.email}`,t.appendChild(r),o.appendChild(i),o.appendChild(A),o.appendChild(c),t.appendChild(o),e.appendChild(a),e.appendChild(t),e}(e))})),n}();let c=o;return n.appendChild(e),n.appendChild(t),n.appendChild(a),a.appendChild(c),n.appendChild(r),t.querySelectorAll("a").forEach((n=>{n.addEventListener("click",(e=>{e.preventDefault(),"Home"===n.innerText&&c!=o?c=b(o):"Menu"===n.innerText&&c!=i?c=b(i):"Contact"===n.innerText&&c!=A&&(c=b(A))}))})),a.addEventListener("click",(n=>{n.target===a.querySelector("#view-menu")&&(c=b(i))})),n}())})()})();
//# sourceMappingURL=app.js.map