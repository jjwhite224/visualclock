import{A as h,G as m}from"./vendor.e238bf30.js";const p=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&c(d)}).observe(document,{childList:!0,subtree:!0});function f(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=f(e);fetch(e.href,r)}};p();const o=new h({backgroundColor:9326393});document.body.appendChild(o.view);document.body.style.margin="0";o.renderer.view.style.position="absolute";o.renderer.view.style.display="block";o.renderer.resize(window.innerWidth,window.innerHeight);const t=new m;o.stage.addChild(t);var l=window.innerWidth,a=window.innerHeight;const s=new Date;var u=s.getHours();s.getSeconds();var g=s.getMinutes();for(let n=0;n<u;n++)t.beginFill(14178382),t.drawCircle(Math.round(Math.random()*l),Math.round(Math.random()*a),100),t.endFill();for(let n=0;n<g;n++)t.beginFill(8436153),t.drawCircle(Math.round(Math.random()*l),Math.round(Math.random()*a),50),t.endFill();for(let n=0;n<u;n++)t.beginFill(16302218),t.drawCircle(Math.round(Math.random()*l),Math.round(Math.random()*a),25),t.endFill();
