!function(){"use strict";var e,t={542:function(e,t,n){var o=n(519),r=n(549);!function(){if(null==document.querySelector("[data-loading]"))return;if(!JSON.parse(document.body.getAttribute("data-loading")))return;setTimeout((()=>{e()}),5e3),window.addEventListener("load",(()=>{e()}));const e=()=>{document.body.setAttribute("data-loading",!1),setTimeout((()=>{const e=document.querySelector(".js-loading");e&&e.remove()}),1e4)}}(),function(){const e=navigator.userAgent.toLowerCase();/iphone|ipad|ipod|android/.test(e)&&document.body.classList.add("is-device-sp")}(),function(){o.os.registerPlugin(r.u);const e=document.body,t="is-headerFix",n=document.querySelector(".js-fixHeaderTrigger");r.u.create({trigger:n,start:"top top",onEnter:()=>{e.classList.add(t)},onLeaveBack:()=>{e.classList.remove(t)}})}(),function(){function e(){let e=JSON.parse(document.body.getAttribute("data-menu-open"));document.body.setAttribute("data-menu-open",!e)}document.querySelectorAll(".js-toggleMenu").forEach((t=>{t.addEventListener("click",e)}))}(),document.querySelectorAll("[data-talk-text]").forEach((e=>{const t=e.getAttribute("data-talk-text"),n=document.createElement("div");n.classList.add("c-talk__flow"),e.appendChild(n),function(e,t){for(let n=0;n<4;n++){const n=document.createElement("p");e.appendChild(n);for(let e=0;e<4;e++){const e=document.createElement("span");e.textContent=t,n.appendChild(e)}}}(n,t)}))}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var a=n[e]={exports:{}};return t[e](a,a.exports,o),a.exports}o.m=t,e=[],o.O=function(t,n,r,a){if(!n){var i=1/0;for(s=0;s<e.length;s++){n=e[s][0],r=e[s][1],a=e[s][2];for(var u=!0,c=0;c<n.length;c++)(!1&a||i>=a)&&Object.keys(o.O).every((function(e){return o.O[e](n[c])}))?n.splice(c--,1):(u=!1,a<i&&(i=a));if(u){e.splice(s--,1);var d=r();void 0!==d&&(t=d)}}return t}a=a||0;for(var s=e.length;s>0&&e[s-1][2]>a;s--)e[s]=e[s-1];e[s]=[n,r,a]},o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={76:0};o.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,a,i=n[0],u=n[1],c=n[2],d=0;if(i.some((function(t){return 0!==e[t]}))){for(r in u)o.o(u,r)&&(o.m[r]=u[r]);if(c)var s=c(o)}for(t&&t(n);d<i.length;d++)a=i[d],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(s)},n=self.webpackChunkbase=self.webpackChunkbase||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var r=o.O(void 0,[121],(function(){return o(542)}));r=o.O(r)}();