import{a as d,S as m,i as a}from"./assets/vendor-tnUJPedx.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const p="36675717-03e407770521c85c00994a8a5",y="https://pixabay.com/api/";async function g(o){try{return(await d.get(y,{params:{key:p,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}catch(t){return console.error("Error fetching images:",t),[]}}function h(o){const t=document.querySelector(".gallery");t.innerHTML=o.map(({webformatURL:i,largeImageURL:e,tags:r,likes:n,views:l,comments:u,downloads:f})=>`
    <a href="${e}" class="gallery-item">
      <img src="${i}" alt="${r}" />
      <div class="info">
        <p>Likes ${n}</p>
        <p>Views ${l}</p>
        <p>Comments ${u}</p>
        <p>Downloads ${f}</p>
      </div>
    </a>`).join(""),new m(".gallery a").refresh()}const L=document.querySelector("#search-form"),b=document.querySelector(".gallery"),c=document.querySelector(".loader");L.addEventListener("submit",async o=>{o.preventDefault();const t=o.target.elements.searchQuery.value.trim();if(!t){a.warning({title:"Warning",message:"Please enter a search query!"});return}b.innerHTML="",c.style.display="block";const s=await g(t);if(c.style.display="none",s.length===0){a.error({title:"Error",message:"Sorry, no images found. Try again!"});return}h(s)});
//# sourceMappingURL=index.js.map
