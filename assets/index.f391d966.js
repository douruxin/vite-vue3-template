import{d as e,r as t,p as o,a as n,o as a,c as r,b as s,t as c,F as d,w as u,e as i,f as l,g as m,h as p,i as v,j as h,k as f,O as g}from"./vendor.8025813c.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(o){const n=new URL(e,location),a=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((o,r)=>{const s=new URL(e,n);if(self[t].moduleMap[s])return o(self[t].moduleMap[s]);const c=new Blob([`import * as m from '${s}';`,`${t}.moduleMap['${s}']=m;`],{type:"text/javascript"}),d=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(c),onerror(){r(new Error(`Failed to import: ${e}`)),a(d)},onload(){o(self[t].moduleMap[s]),a(d)}});document.head.appendChild(d)})),self[t].moduleMap={}}}("assets/");var _=e({name:"HelloWorld",props:{msg:{type:String,required:!0}},setup:()=>({count:t(0)})});const b=u();o("data-v-7c6dc259");const k=i('<p data-v-7c6dc259> Recommended IDE setup: <a href="https://code.visualstudio.com/" target="_blank" data-v-7c6dc259>VSCode</a> + <a href="https://marketplace.visualstudio.com/items?itemName=octref.vetur" target="_blank" data-v-7c6dc259> Vetur </a> or <a href="https://github.com/johnsoncodehk/volar" target="_blank" data-v-7c6dc259>Volar</a> (if using <code data-v-7c6dc259>&lt;script setup&gt;</code>) </p><p data-v-7c6dc259>See <code data-v-7c6dc259>README.md</code> for more information.</p><p data-v-7c6dc259><a href="https://vitejs.dev/guide/features.html" target="_blank" data-v-7c6dc259> Vite Docs </a> | <a href="https://v3.vuejs.org/" target="_blank" data-v-7c6dc259>Vue 3 Docs</a></p>',3),E=s("p",null,[l(" Edit "),s("code",null,"components/HelloWorld.vue"),l(" to test hot module replacement. ")],-1);n();const V=b(((e,t,o,n,u,i)=>(a(),r(d,null,[s("h1",null,c(e.msg),1),k,s("button",{onClick:t[1]||(t[1]=t=>e.count++)},"count is: "+c(e.count),1),E],64))));_.render=V,_.__scopeId="data-v-7c6dc259";var j=e({name:"App",components:{HelloWorld:_}});let L;j.render=function(e,t,o,n,s,c){const d=m("router-view");return a(),r(d)};const w={},x={name:"Home"},R={class:"home"};x.render=function(e,t,o,n,s,c){return a(),r("div",R,"Home Vue")};const y={name:"Vuex"},H={class:"vuex"};y.render=function(e,t,o,n,s,c){return a(),r("div",H,"Vuex Vue")};const M=[{path:"/",name:"Home",component:x},{path:"/vuex",name:"Vuex",component:y},{path:"/axios",name:"Axios",component:()=>function(e,t){if(!t)return e();if(void 0===L){const e=document.createElement("link").relList;L=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in w)return;w[e]=!0;const t=e.endsWith(".css"),o=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${o}`))return;const n=document.createElement("link");return n.rel=t?"stylesheet":L,t||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),t?new Promise(((e,t)=>{n.addEventListener("load",e),n.addEventListener("error",t)})):void 0}))).then((()=>e()))}((()=>__import__("./axios.6208fe00.js")),["./assets/axios.6208fe00.js","./assets/vendor.8025813c.js"])}],O=p({history:v(),routes:M}),U={count:0},$=h({state:()=>U,mutations:{increment(e){e.count++}},actions:{increment(e){e.commit("increment")}},getters:{double:e=>2*e.count}});f(j).use(O).use($).use(g).mount("#app");
