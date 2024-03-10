import{a as g,S as y,i as p}from"./assets/vendor-b42c18af.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();const S="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEYSURBVHgBrZZRDoIwDIYrwfDqTeQo3ohxEr0BXsW77GXFOFdkYcC6DuFPCJB1/7fCWgBgZEzfIPY256BYzqfkzE8nUNbCE+DzgqSKK8W6OVBV5xYk+ZUbgw/IFMVKmfxtng3ZYy5CjjBnISlzrXUtGcZiZpDxolsGIWItvTi/OK0xAuk7GhsBRjEGioNMmffMXKNEAAeRzENACYJc8QxF5IuJNBZhS2PSfBGwhNB9rjmpgHxZ5jqprAyC3jT0mi29RwSE5v6xhO9EhAjblN0tqS38G59t02ShKeCzU2Kh+SDE9z0GAUGxGPKaLS4F2aqVudcRENb8CIhovgeSMl/VwdQWbOPOl5yPvivs25b2MWjKJOu3hTX+AgZ5PpvL0NSkAAAAAElFTkSuQmCC";async function b(i,t,a){g.defaults.baseURL="https://pixabay.com/api/";const o={params:{key:"42601887-7c2d316803b73c9107fd5176e",image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:a,page:t,q:`${i}`}};return(await g.get("",o)).data}function w(i){return i.map(t=>`<li class="gallery-item">
          <div class="gallery-image-tumb">
            <a class="gallery-link" href="${t.largeImageURL}">
                <img class="gallery-image" src="${t.webformatURL}" alt="${t.tags}" height="152" />
            </a>
          </div>
            <ul class="image-info">
              <li class="image-info-item">
                <h4 class="image-info-item-title">Likes</h4>
                <p class="image-info-item-text">${t.likes}</p>
              </li>
              <li class="image-info-item">
                <h4 class="image-info-item-title">Views</h4>
                <p class="image-info-item-text">${t.views}</p>
              </li>
              <li class="image-info-item">
                <h4 class="image-info-item-title">Comments</h4>
                <p class="image-info-item-text">${t.comments}</p>
              </li>
              <li class="image-info-item">
                <h4 class="image-info-item-title">Downloads</h4>
                <p class="image-info-item-text">${t.downloads}</p>
              </li>
            </ul>
        </li>`).join("")}const f=document.querySelector(".form"),m=document.querySelector(".gallery"),n=document.querySelector("#load-more-btn"),u=document.querySelector(".loader"),x=new y(".gallery a",{captionsData:"alt",captionDelay:250});let c,d=15,r;function h(i){p.error({iconUrl:S,message:i,maxWidth:"432px",position:"topRight",messageSize:16,backgroundColor:"#ef4040",titleColor:"#FFFFFF",messageColor:"#FFFFFF",theme:"dark"})}async function A(i){if(n.style.display="none",i){u.style.display="grid";let t;try{const a=await b(i,r,d),o=a.hits;if(t=Math.ceil(a.totalHits/d),o.length){const e=await w(o);m.insertAdjacentHTML("beforeend",e),r!=1&&E(),x.refresh()}else h("Sorry, there are no images matching your search query. Please try again!")}catch(a){h(`${a}`)}finally{u.style.display="none",r<t&&(n.style.display="block"),r===t&&p.info({message:"We're sorry, but you've reached the end of search results.",maxWidth:"432px",position:"topRight",messageSize:16})}}}function E(){const i=m.firstElementChild.getBoundingClientRect().height*2;window.scrollBy({top:i,behavior:"smooth"})}f.addEventListener("submit",i=>{i.preventDefault(),c=i.target.elements.search.value.trim(),f.reset(),m.innerHTML=null,r=1,A(c)});n.addEventListener("click",()=>{r+=1,A(c)});
//# sourceMappingURL=commonHelpers.js.map
