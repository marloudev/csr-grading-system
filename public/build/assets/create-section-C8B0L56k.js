import{r,u as f,j as a,s as h}from"./app-DqLO6WLM.js";import{s as D,g as N}from"./student-thunk-DyEMtGwt.js";import{S as k,A as E}from"./Snackbar-DJ9wipXw.js";import{B as g}from"./Modal-Buj6LnNl.js";import{D as F}from"./Drawer-B9i-QPoD.js";import{B}from"./Box-xzeSFh7Z.js";import{T as n}from"./TextField-zKY09GZP.js";import{F as j,I as v,S as b}from"./Select-Dik9msEI.js";import{M as C}from"./MenuItem-TgodGIn0.js";import{C as I}from"./CircularProgress-Cy2FuxZb.js";import"./DefaultPropsProvider-CW9wJ-R5.js";import"./useSlot-Du5hecGB.js";import"./resolveComponentProps-DEYusJzi.js";import"./ButtonBase-CRjdZvwO.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./createSvgIcon-DRzFP9So.js";import"./Paper-DjHxwgn8.js";import"./useTheme-DueBu9wY.js";import"./IconButton-C1kS4wY8.js";import"./useSlotProps-DZYQoCO8.js";import"./ownerWindow-6z4QwRpV.js";import"./Grow-DmBXeudD.js";import"./utils-C2R9WuZ7.js";import"./index-BuhgrjH2.js";import"./Slide-DueBHYWd.js";import"./debounce-Be36O1Ab.js";import"./extendSxProp-DvSE7fh3.js";import"./useId-CqRfRFw4.js";import"./InputBase-DjS8Tk0X.js";import"./isHostComponent-DVu5iVWx.js";import"./index-DDvdkFKA.js";import"./Popover-rB7ozUoO.js";import"./react-is.production.min-DUDD-a5e.js";import"./useControlled-D_1jndth.js";import"./listItemTextClasses-BpTnhAoq.js";function fe(){const[w,m]=r.useState(!1),[d,o]=r.useState(!1),[s,i]=r.useState({}),[e,u]=r.useState({}),[y,p]=r.useState(!1),{departments:S}=f(t=>t.department),{courses:_}=f(t=>t.courses),c=t=>()=>{m(t)};async function T(t){o(!0);const l=await h.dispatch(D({...s,user_type:3}));l.status==200?(await h.dispatch(N()),p(!0),u({}),o(!1)):(o(!1),u(l.response.data.errors))}const x=(t,l)=>{l!=="clickaway"&&(p(!1),m(!1))};return a.jsxs("div",{children:[a.jsx(k,{open:y,anchorOrigin:{vertical:"top",horizontal:"center"},autoHideDuration:3e3,onClose:x,children:a.jsx(E,{onClose:x,severity:"success",variant:"filled",sx:{width:"100%"},children:"Successfully Created!"})}),a.jsx(g,{variant:"contained",onClick:c(!0),children:"Create student"}),a.jsx(F,{anchor:"right",open:w,onClose:c(!1),children:a.jsx(B,{className:"w-[500px] h-full flex",role:"presentation",children:a.jsxs("div",{className:"pt-20 px-3 w-full flex flex-col items-center justify-between pb-5",children:[a.jsxs("div",{className:"flex flex-col gap-3  w-full",children:[a.jsx("div",{className:"text-2xl font-black",children:"Create student"}),a.jsx(n,{onChange:t=>i({...s,[t.target.name]:t.target.value}),error:!!(e!=null&&e.user_id),helperText:(e==null?void 0:e.user_id)??"",name:"user_id",type:"text",id:"outlined-basic",label:"Employee ID",variant:"outlined"}),a.jsx(n,{onChange:t=>i({...s,[t.target.name]:t.target.value}),error:!!(e!=null&&e.fname),helperText:(e==null?void 0:e.fname)??"",name:"fname",type:"text",id:"outlined-basic",label:"First Name",variant:"outlined"}),a.jsx(n,{onChange:t=>i({...s,[t.target.name]:t.target.value}),error:!!(e!=null&&e.lname),helperText:(e==null?void 0:e.lname)??"",name:"lname",type:"text",id:"outlined-basic",label:"Last Name",variant:"outlined"}),a.jsx(n,{onChange:t=>i({...s,[t.target.name]:t.target.value}),error:!!(e!=null&&e.email),helperText:(e==null?void 0:e.email)??"",name:"email",type:"email",id:"outlined-basic",label:"Email",variant:"outlined"}),a.jsx(n,{onChange:t=>i({...s,[t.target.name]:t.target.value}),error:!!(e!=null&&e.password),helperText:(e==null?void 0:e.password)??"",name:"password",type:"password",id:"outlined-basic",label:"Password",variant:"outlined"}),a.jsxs(j,{fullWidth:!0,children:[a.jsx(v,{id:"demo-simple-select-label",children:"Department"}),a.jsx(b,{id:"demo-simple-select",name:"department_id",label:"Department",onChange:t=>i({...s,[t.target.name]:t.target.value}),children:S.data.map((t,l)=>a.jsx(C,{value:t.id,children:t.name},l))})]}),a.jsxs(j,{fullWidth:!0,children:[a.jsx(v,{id:"demo-simple-select-label",children:"Course"}),a.jsx(b,{id:"demo-simple-select",name:"course_id",label:"Course",value:s.course_id,onChange:t=>i({...s,[t.target.name]:t.target.value}),children:_.data.map((t,l)=>a.jsx(C,{value:t.id,children:t.name},l))})]}),a.jsx(n,{onChange:t=>i({...s,[t.target.name]:t.target.value}),error:!!(e!=null&&e.dob),helperText:(e==null?void 0:e.dob)??"",name:"dob",type:"date",id:"outlined-basic",variant:"outlined"}),a.jsx(n,{onChange:t=>i({...s,[t.target.name]:t.target.value}),error:!!(e!=null&&e.address),helperText:(e==null?void 0:e.address)??"",name:"address",id:"outlined-basic",label:"Address",variant:"outlined"})]}),a.jsx(g,{onClick:T,disabled:d,variant:"contained",className:" w-full",children:d?a.jsx(I,{size:24,color:"inherit"}):"Submit"})]})})})]})}export{fe as default};