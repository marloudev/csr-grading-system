import{r as a,u as p,j as t,c as A,s as S}from"./app-Sx_bOJu9.js";import{s as E,a as N}from"./enrollment-thunk-BVn2cUFG.js";import{a as D}from"./academic-year-D4oKGBxk.js";import{S as F,A as I}from"./Snackbar-DUsX7kdp.js";import{B as b}from"./Modal-pYuP7s9E.js";import{P as B}from"./PersonAdd-PZpaJ9Bo.js";import{D as W}from"./Drawer-ibEQRRTs.js";import{B as z}from"./Box-CFn20A6Z.js";import{T as P}from"./TextField-BMLBjt7Q.js";import{F as m,I as c,S as d}from"./Select-B4YETf7h.js";import{M as o}from"./MenuItem-Bq7CkbLQ.js";import{C as T}from"./CircularProgress-BJ-vVnVE.js";import"./DefaultPropsProvider-mLM_-agO.js";import"./useSlot-CuoNm3jO.js";import"./resolveComponentProps-CbuNjO-V.js";import"./ButtonBase-oDnS5RsJ.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./createSvgIcon-Cp-M9F86.js";import"./Paper-DLcSMfrN.js";import"./useTheme-C51DcwID.js";import"./IconButton-BYnPmo0C.js";import"./useSlotProps-Cj9z0wcq.js";import"./ownerWindow-6z4QwRpV.js";import"./Grow-CZxWyfw7.js";import"./utils-BBLcv1qi.js";import"./index-DBIuVB12.js";import"./Slide-BUghgOvp.js";import"./debounce-Be36O1Ab.js";import"./extendSxProp-BSHUjdNx.js";import"./useId-DmGPsPvD.js";import"./InputBase-BUiU490S.js";import"./isHostComponent-DVu5iVWx.js";import"./index-B9U8gEFH.js";import"./Popover-1aNAYeZT.js";import"./react-is.production.min-DUDD-a5e.js";import"./useControlled-8N6k1L0C.js";import"./listItemTextClasses-nzR0d2_2.js";function be({data:r}){const[C,h]=a.useState(!1),[x,u]=a.useState(!1),[l,f]=a.useState({}),[_,j]=a.useState(!1);p(e=>e.department);const{courses:y}=p(e=>e.courses),{sections:w}=p(e=>e.sections),[n,i]=a.useState({});a.useEffect(()=>{i({...r,semester:"1st Semester"})},[]);const v=e=>()=>{h(e)};async function k(e){u(!0);const s=await S.dispatch(E({...r,user_type:3}));s.status==200?(await S.dispatch(N()),j(!0),f({}),u(!1)):(u(!1),f(s.response.data.errors))}const g=(e,s)=>{s!=="clickaway"&&(j(!1),h(!1))};return t.jsxs("div",{children:[t.jsx(F,{open:_,anchorOrigin:{vertical:"top",horizontal:"center"},autoHideDuration:3e3,onClose:g,children:t.jsx(I,{onClose:g,severity:"success",variant:"filled",sx:{width:"100%"},children:"Successfully Created!"})}),t.jsx(b,{size:"small",variant:"contained",color:"warning",onClick:v(!0),children:t.jsx(B,{})}),t.jsx(W,{anchor:"right",open:C,onClose:v(!1),children:t.jsx(z,{className:"w-[500px] h-full flex",role:"presentation",children:t.jsxs("div",{className:"pt-20 px-3 w-full flex flex-col items-center justify-between pb-5",children:[t.jsxs("div",{className:"flex flex-col gap-3  w-full",children:[t.jsx("div",{className:"text-2xl font-black",children:"Add Enrollment"}),t.jsx(P,{onChange:e=>i({...r,[e.target.name]:e.target.value}),error:!!(l!=null&&l.user_id),helperText:(l==null?void 0:l.user_id)??"",value:n.user_id,name:"user_id",type:"text",id:"outlined-basic",label:"Employee ID",variant:"outlined",disabled:!0}),t.jsxs(m,{fullWidth:!0,children:[t.jsx(c,{id:"demo-simple-select-label",children:"Academic Year"}),t.jsx(d,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:A(),name:"academic_year",label:"Academic Year",onChange:e=>i({...r,[e.target.name]:e.target.value}),children:D().map((e,s)=>t.jsx(o,{value:e,children:e},s))})]}),t.jsxs(m,{fullWidth:!0,children:[t.jsx(c,{id:"demo-simple-select-label",children:"Course"}),t.jsx(d,{id:"demo-simple-select",name:"course_id",label:"Course",value:n.course_id,onChange:e=>i({...r,[e.target.name]:e.target.value}),children:y.data.map((e,s)=>t.jsx(o,{value:e.id,children:e.name},s))})]}),t.jsxs(m,{fullWidth:!0,children:[t.jsx(c,{id:"demo-simple-select-label",children:"Semester"}),t.jsxs(d,{id:"demo-simple-select",name:"semester",label:"Semester",value:n.semester,onChange:e=>i({...r,[e.target.name]:e.target.value}),children:[t.jsx(o,{value:"1st Semester",children:"1st Semester"}),t.jsx(o,{value:"2nd Semester",children:"2nd Semester"}),t.jsx(o,{value:"Summer",children:"Summer"})]})]}),t.jsxs(m,{fullWidth:!0,children:[t.jsx(c,{id:"demo-simple-select-label",children:"Sections"}),t.jsx(d,{id:"demo-simple-select",name:"section_id",label:"Course",value:n.section_id,onChange:e=>i({...r,[e.target.name]:e.target.value}),children:w.data.map((e,s)=>t.jsx(o,{value:e.id,children:e.name},s))})]})]}),t.jsx(b,{onClick:k,disabled:x,variant:"contained",className:" w-full",children:x?t.jsx(T,{size:24,color:"inherit"}):"Submit"})]})})})]})}export{be as default};