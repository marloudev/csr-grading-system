import{u as m,j as s,y as u}from"./app-BX_MbBCE.js";import{P as l}from"./Pagination-DgWyqijT.js";import"./DefaultPropsProvider-DNQyY7TH.js";import"./useControlled-CQesw5Ne.js";import"./index-QseRsG1u.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./createSvgIcon-DsSdJk3K.js";import"./useSlot-CLbpkNHK.js";import"./resolveComponentProps-Ctxa67Yh.js";import"./ButtonBase-HlmoPRVP.js";function Q(){const{instructors:a}=m(t=>t.instructors);console.log("instructors",a);const o=window.location.pathname,i=o+window.location.search,e=((t,r)=>new URLSearchParams(t.split("?")[1]).get(r))(i,"page"),c=e?parseInt(e,10):1;function p(t,r){const n=o+"?page="+r;u.visit(n)}return s.jsx("div",{className:"flex w-full items-center justify-end",children:s.jsx(l,{onChange:p,count:a.last_page,defaultPage:c,color:"primary",shape:"rounded"})})}export{Q as default};