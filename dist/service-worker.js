if(!self.define){let e,u={};const s=(s,r)=>(s=new URL(s+".js",r).href,u[s]||new Promise((u=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=u,document.head.appendChild(e)}else e=s,importScripts(s),u()})).then((()=>{let e=u[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(r,l)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(u[i])return;let n={};const o=e=>s(e,i),v={module:{uri:i},exports:n,require:o};u[i]=Promise.all(r.map((e=>v[e]||o(e)))).then((e=>(l(...e),n)))}}define(["./workbox-db5fc017"],(function(e){"use strict";e.setCacheNameDetails({prefix:"portfolio-vue"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/resume-vue/404.html",revision:"324b40e6e46bb2c728740909b145b9ff"},{url:"/resume-vue/css/132.14fecba7.css",revision:null},{url:"/resume-vue/css/261.d68a31b6.css",revision:null},{url:"/resume-vue/css/440.c8057878.css",revision:null},{url:"/resume-vue/css/815.dbe7fcdf.css",revision:null},{url:"/resume-vue/css/825.d9bbae0a.css",revision:null},{url:"/resume-vue/css/852.f72d360e.css",revision:null},{url:"/resume-vue/css/955.aba054dc.css",revision:null},{url:"/resume-vue/css/app.30dc9879.css",revision:null},{url:"/resume-vue/css/chunk-vendors.04f45360.css",revision:null},{url:"/resume-vue/fonts/materialdesignicons-webfont.1dab7af5.woff",revision:null},{url:"/resume-vue/fonts/materialdesignicons-webfont.2474c2c1.woff2",revision:null},{url:"/resume-vue/fonts/materialdesignicons-webfont.a1c852b2.eot",revision:null},{url:"/resume-vue/fonts/materialdesignicons-webfont.b33ccf64.ttf",revision:null},{url:"/resume-vue/img/Frontend_Developer(React)_Diploma.0d42daeb.png",revision:null},{url:"/resume-vue/img/Git_basic.07443aa9.png",revision:null},{url:"/resume-vue/img/HTML5&CSS3_Advanced.20f9cde4.png",revision:null},{url:"/resume-vue/img/HTML5&CSS3_Starter.9242bd2f.png",revision:null},{url:"/resume-vue/img/JavaScript_Essential.57604c5e.png",revision:null},{url:"/resume-vue/img/JavaScript_starter.e64cbaac.png",revision:null},{url:"/resume-vue/img/React_Essential.5d6504c0.png",revision:null},{url:"/resume-vue/img/olga-budytska-1.40e57159.jpg",revision:null},{url:"/resume-vue/img/olga-budytska-2.0d33e2d8.jpg",revision:null},{url:"/resume-vue/img/olga-budytska.04a2bcb4.jpg",revision:null},{url:"/resume-vue/img/poster-1.1ef2ee3d.jpg",revision:null},{url:"/resume-vue/img/poster-2.f243fccc.jpg",revision:null},{url:"/resume-vue/img/poster-3.37f4ccc3.jpg",revision:null},{url:"/resume-vue/img/poster-4.ef044f63.jpg",revision:null},{url:"/resume-vue/img/poster-5.8a094f4f.jpg",revision:null},{url:"/resume-vue/img/poster-6.40c5edaf.jpg",revision:null},{url:"/resume-vue/img/poster-7.0c335691.jpg",revision:null},{url:"/resume-vue/img/poster-8.2d4380c9.jpg",revision:null},{url:"/resume-vue/img/poster-9.cb74d2f7.jpg",revision:null},{url:"/resume-vue/img/puppy-3.d7e9a159.jpg",revision:null},{url:"/resume-vue/img/resume.b765331d.png",revision:null},{url:"/resume-vue/img/sew-1-1.ce420cb8.jpg",revision:null},{url:"/resume-vue/img/sew-4-1.578b6707.jpg",revision:null},{url:"/resume-vue/img/sport-1.7635fa94.jpg",revision:null},{url:"/resume-vue/index.html",revision:"7940e91616d394f164691e92115571b9"},{url:"/resume-vue/js/132.cac87b36.js",revision:null},{url:"/resume-vue/js/167.9ff25cea.js",revision:null},{url:"/resume-vue/js/261.16aea473.js",revision:null},{url:"/resume-vue/js/440.34377b36.js",revision:null},{url:"/resume-vue/js/815.11fe191d.js",revision:null},{url:"/resume-vue/js/825.ab0a050c.js",revision:null},{url:"/resume-vue/js/852.6ecd5407.js",revision:null},{url:"/resume-vue/js/955.4f4ff580.js",revision:null},{url:"/resume-vue/js/app.8b1df1f0.js",revision:null},{url:"/resume-vue/js/chunk-vendors.bb586ace.js",revision:null},{url:"/resume-vue/manifest.json",revision:"cd94e0936cfe1a0e01fb3f6323c97bad"},{url:"/resume-vue/robots.txt",revision:"735ab4f94fbcd57074377afca324c813"}],{})}));
//# sourceMappingURL=service-worker.js.map
