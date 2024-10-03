import{r as l,u as b,j as t,s as g}from"./app-BKxzFGBx.js";import{s as _,g as I}from"./subject-thunk-B6wNtbKs.js";import{S as D,A as B}from"./Snackbar-Cs15jELz.js";import{B as v}from"./Modal-Ds47GXu0.js";import{D as F}from"./Drawer-BBwhfQuz.js";import{B as T}from"./Box-OGsKWREe.js";import{T as C}from"./TextField-CbzqqnJl.js";import{F as m,I as c,S as d}from"./Select-BQcN9112.js";import{M as o}from"./MenuItem-C_j8r1d2.js";import{C as E}from"./CircularProgress-sbhAYwQn.js";import"./DefaultPropsProvider-BdS6nueG.js";import"./useSlot-C_GmNxEW.js";import"./resolveComponentProps-TLKj9-Es.js";import"./ButtonBase-ZZHDPnUv.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./createSvgIcon-DNHAV2hH.js";import"./Paper-CF4dgFF6.js";import"./useTheme-DJv7-wFq.js";import"./IconButton-CAGCXe_x.js";import"./useSlotProps-9HqtNA5l.js";import"./ownerWindow-6z4QwRpV.js";import"./Grow-CaVqfK8Z.js";import"./utils-DyhK9jud.js";import"./index-Rw4S4E8l.js";import"./Slide-CgOVApEN.js";import"./debounce-Be36O1Ab.js";import"./extendSxProp-CK8_dlsf.js";import"./useId-COYo1B_Z.js";import"./InputBase-4hWtwl0Z.js";import"./isHostComponent-DVu5iVWx.js";import"./index-C0tahnqc.js";import"./Popover-CP8qj5SC.js";import"./react-is.production.min-DUDD-a5e.js";import"./useControlled-BII1iCiW.js";import"./listItemTextClasses-BcLjaIrk.js";function he(){const[w,u]=l.useState(!1),[p,n]=l.useState(!1),[r,i]=l.useState({semester:"1st Semester"}),[s,x]=l.useState({}),[y,h]=l.useState(!1),{sections:k}=b(e=>e.sections),{instructors:f}=b(e=>e.instructors),j=e=>()=>{u(e)};async function N(e){n(!0);const a=await g.dispatch(_(r));a.status==200?(await g.dispatch(I()),h(!0),x({}),n(!1)):(n(!1),x(a.response.data.errors))}const S=(e,a)=>{a!=="clickaway"&&(h(!1),u(!1))};return console.log("instructors",f),t.jsxs("div",{children:[t.jsx(D,{open:y,anchorOrigin:{vertical:"top",horizontal:"center"},autoHideDuration:3e3,onClose:S,children:t.jsx(B,{onClose:S,severity:"success",variant:"filled",sx:{width:"100%"},children:"Successfully Created!"})}),t.jsx(v,{variant:"contained",onClick:j(!0),children:"Create Subject"}),t.jsx(F,{anchor:"right",open:w,onClose:j(!1),children:t.jsx(T,{className:"w-[500px] h-full flex",role:"presentation",children:t.jsxs("div",{className:"pt-20 px-3 w-full flex flex-col items-center justify-between pb-5",children:[t.jsxs("div",{className:"flex flex-col gap-3  w-full",children:[t.jsx("div",{className:"text-2xl font-black",children:"Create subject"}),t.jsx(C,{onChange:e=>i({...r,[e.target.name]:e.target.value}),error:!!(s!=null&&s.name),helperText:(s==null?void 0:s.name)??"",name:"name",type:"text",id:"outlined-basic",label:"Name of Subject",variant:"outlined"}),t.jsx(C,{onChange:e=>i({...r,[e.target.name]:e.target.value}),error:!!(s!=null&&s.code),helperText:(s==null?void 0:s.code)??"",name:"code",type:"text",id:"outlined-basic",label:"Subject Code",variant:"outlined"}),t.jsxs(m,{fullWidth:!0,children:[t.jsx(c,{id:"demo-simple-select-label",children:"Semester"}),t.jsxs(d,{id:"demo-simple-select",name:"semester",label:"Semester",value:"1st Semester",onChange:e=>i({...r,[e.target.name]:e.target.value}),children:[t.jsx(o,{value:"1st Semester",children:"1st Semester"}),t.jsx(o,{value:"2nd Semester",children:"2nd Semester"}),t.jsx(o,{value:"Summer",children:"Summer"})]})]}),t.jsxs(m,{fullWidth:!0,children:[t.jsx(c,{id:"demo-simple-select-label",children:"Instructor"}),t.jsx(d,{id:"demo-simple-select",name:"instructor_id",label:"Instructor",onChange:e=>i({...r,[e.target.name]:e.target.value}),children:f.data.map((e,a)=>t.jsxs(o,{value:e.user_id,children:[e.fname," ",e.lname]}))})]}),t.jsxs(m,{fullWidth:!0,children:[t.jsx(c,{id:"demo-simple-select-label",children:"Section"}),t.jsx(d,{labelId:"demo-simple-select-label",id:"demo-simple-select",name:"section_id",label:"Section",onChange:e=>i({...r,[e.target.name]:e.target.value}),children:k.data.map((e,a)=>t.jsx(o,{value:e.id,children:e.name},a))})]})]}),t.jsx(v,{onClick:N,disabled:p,variant:"contained",className:" w-full",children:p?t.jsx(E,{size:24,color:"inherit"}):"Submit"})]})})})]})}export{he as default};