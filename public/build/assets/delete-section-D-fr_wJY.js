import{r,j as t,s as a}from"./app-BKxzFGBx.js";import{d as f,g as h}from"./student-thunk-C82AdGxd.js";import{S as x,A as j}from"./Snackbar-Cs15jELz.js";import{B as l,M as y}from"./Modal-Ds47GXu0.js";import{D as b}from"./Delete-C7EEKS2x.js";import{B as g}from"./Box-OGsKWREe.js";import{T as n}from"./Typography-Bxtiza71.js";import{C as v}from"./CircularProgress-sbhAYwQn.js";import"./DefaultPropsProvider-BdS6nueG.js";import"./useSlot-C_GmNxEW.js";import"./resolveComponentProps-TLKj9-Es.js";import"./ButtonBase-ZZHDPnUv.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./createSvgIcon-DNHAV2hH.js";import"./Paper-CF4dgFF6.js";import"./useTheme-DJv7-wFq.js";import"./IconButton-CAGCXe_x.js";import"./useSlotProps-9HqtNA5l.js";import"./ownerWindow-6z4QwRpV.js";import"./Grow-CaVqfK8Z.js";import"./utils-DyhK9jud.js";import"./extendSxProp-CK8_dlsf.js";import"./index-C0tahnqc.js";const w={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};function V({data:d}){const[c,s]=r.useState(!1),e=()=>s(!1),[m,p]=r.useState(!1),[i,o]=r.useState(!1);async function u(C){o(!0),(await a.dispatch(f(d.id))).status==200&&(await a.dispatch(h()),p(!0)),o(!1)}return t.jsxs("div",{children:[t.jsx(x,{open:m,anchorOrigin:{vertical:"top",horizontal:"center"},autoHideDuration:3e3,onClose:e,children:t.jsx(j,{onClose:e,severity:"success",variant:"filled",sx:{width:"100%"},children:"Successfully Deleted!"})}),t.jsx(l,{size:"small",variant:"contained",color:"error",onClick:()=>s(!0),children:t.jsx(b,{})}),t.jsx(y,{open:c,onClose:e,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:t.jsxs(g,{sx:w,children:[t.jsx(n,{id:"modal-modal-title",variant:"h6",component:"h2",children:"Delete student"}),t.jsx(n,{id:"modal-modal-description",sx:{mt:2},children:"Are you sure you want to delete?"}),t.jsx("div",{className:"flex w-full pt-5 items-center justify-end",children:t.jsx(l,{color:"error",onClick:u,disabled:i,variant:"contained",className:" w-full",children:i?t.jsx(v,{size:24,color:"inherit"}):"Delete"})})]})})]})}export{V as default};