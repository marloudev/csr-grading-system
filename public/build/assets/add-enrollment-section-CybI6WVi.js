import{r as o,u as d,c as k,j as t,s as g}from"./app-CxSiEuh0.js";import{a as I}from"./academic-year-scJFXSBe.js";import{s as N}from"./enrollment-thunk-BtGTy7SR.js";import{g as D}from"./student-thunk-CO_lsNYu.js";import{S as F,A as W}from"./Snackbar-CdB-VzzB.js";import{B as b}from"./Button-CZ5Pv9Z_.js";import{P as B}from"./PersonAdd-Bxeqy3BM.js";import{D as O}from"./Drawer-ClLB2RHL.js";import{B as T}from"./Box-DhfnufkO.js";import{T as S}from"./TextField-BqCibR7K.js";import{F as n,I as m,S as c}from"./Select-eeUI5IEE.js";import{M as a}from"./MenuItem-DEts--BP.js";import{A as z}from"./Autocomplete-DKsv8O0j.js";import{C as P}from"./CircularProgress-9DzvPpl2.js";import"./DefaultPropsProvider-u4dMbbrm.js";import"./useSlot-BtG2wqx4.js";import"./resolveComponentProps-DL3teynR.js";import"./TransitionGroupContext-Ag3s-__A.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./createSvgIcon-D6bWpeAd.js";import"./Paper-DvaH0Svk.js";import"./useTheme-BcsGi_1D.js";import"./IconButton-Cv0mr99G.js";import"./ButtonBase-CcJZVDWO.js";import"./useSlotProps-CcehoDPQ.js";import"./Modal-DVY8ByRB.js";import"./ownerWindow-CO8Ksk3k.js";import"./utils-DpS0ORYq.js";import"./Grow-Doya-6fb.js";import"./index-F-pXNyUe.js";import"./Slide-BSGAUrkr.js";import"./debounce-Be36O1Ab.js";import"./extendSxProp-B0Mpqpb2.js";import"./useId-0GBAqNEW.js";import"./InputBase-C1hPBamu.js";import"./isHostComponent-DVu5iVWx.js";import"./index-lFpRPvCY.js";import"./Popover-CkqTCObb.js";import"./react-is.production.min-DUDD-a5e.js";import"./useControlled-KZPzS6sX.js";import"./listItemTextClasses-DrYV45W2.js";import"./ListSubheader-BprWCA4x.js";function Ee({data:C}){const[_,p]=o.useState(!1),[h,u]=o.useState(!1),[i,x]=o.useState({}),[y,f]=o.useState(!1);d(e=>e.department);const{courses:w}=d(e=>e.courses),{sections:Y}=d(e=>e.sections),[s,l]=o.useState({}),{subjects:A}=d(e=>e.subjects);o.useEffect(()=>{l({...C,academic_year:k(),semester:"1st Semester"})},[]);const j=e=>()=>{p(e)};console.log("formsss",s);async function E(e){u(!0);const r=await g.dispatch(N(s));r.status==200?(await g.dispatch(D()),f(!0),x({}),u(!1)):(u(!1),x(r.response.data.errors))}const v=(e,r)=>{r!=="clickaway"&&(f(!1),p(!1))};return t.jsxs("div",{children:[t.jsx(F,{open:y,anchorOrigin:{vertical:"top",horizontal:"center"},autoHideDuration:3e3,onClose:v,children:t.jsx(W,{onClose:v,severity:"success",variant:"filled",sx:{width:"100%"},children:"Successfully Created!"})}),t.jsx(b,{size:"small",variant:"contained",color:"warning",onClick:j(!0),children:t.jsx(B,{})}),t.jsx(O,{anchor:"right",open:_,onClose:j(!1),children:t.jsx(T,{className:"w-[500px] h-full flex",role:"presentation",children:t.jsxs("div",{className:"pt-20 px-3 w-full flex flex-col items-center justify-between pb-5",children:[t.jsxs("div",{className:"flex flex-col gap-3  w-full",children:[t.jsx("div",{className:"text-2xl font-black",children:"Add Enrollment"}),t.jsx(S,{onChange:e=>l({...s,[e.target.name]:e.target.value}),error:!!(i!=null&&i.user_id),helperText:(i==null?void 0:i.user_id)??"",value:s.user_id,name:"user_id",type:"text",id:"outlined-basic",label:"Employee ID",variant:"outlined",disabled:!0}),t.jsxs(n,{fullWidth:!0,children:[t.jsx(m,{id:"demo-simple-select-label",children:"Academic Year"}),t.jsx(c,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:s.academic_year,name:"academic_year",label:"Academic Year",onChange:e=>l({...s,[e.target.name]:e.target.value}),children:I().map((e,r)=>t.jsx(a,{value:e,children:e},r))})]}),t.jsxs(n,{fullWidth:!0,children:[t.jsx(m,{id:"demo-simple-select-label",children:"Course"}),t.jsx(c,{id:"demo-simple-select",name:"course_id",label:"Course",value:s.course_id,onChange:e=>l({...s,[e.target.name]:e.target.value}),children:w.data.map((e,r)=>t.jsx(a,{value:e.id,children:e.name},r))})]}),t.jsxs(n,{fullWidth:!0,children:[t.jsx(m,{id:"demo-simple-select-label",children:"Semester"}),t.jsxs(c,{id:"demo-simple-select",name:"semester",label:"Semester",value:s.semester,onChange:e=>l({...s,[e.target.name]:e.target.value}),children:[t.jsx(a,{value:"1st Semester",children:"1st Semester"}),t.jsx(a,{value:"2nd Semester",children:"2nd Semester"}),t.jsx(a,{value:"Summer",children:"Summer"})]})]}),t.jsxs(n,{fullWidth:!0,children:[t.jsx(m,{id:"demo-simple-select-label",children:"Year"}),t.jsxs(c,{id:"demo-simple-select",name:"year",label:"year",value:s.year,onChange:e=>l({...s,[e.target.name]:e.target.value}),children:[t.jsx(a,{value:"1st Year",children:"1st Year"}),t.jsx(a,{value:"2nd Year",children:"2nd Year"}),t.jsx(a,{value:"3rd Year",children:"3rd Year"}),t.jsx(a,{value:"4th Year",children:"4th Year"})]})]}),t.jsxs(n,{fullWidth:!0,children:[t.jsx(m,{id:"demo-simple-select-label",children:"Sections"}),t.jsx(c,{id:"demo-simple-select",name:"section_id",label:"Course",value:s.section_id,onChange:e=>l({...s,[e.target.name]:e.target.value}),children:Y.data.map((e,r)=>t.jsx(a,{value:e.id,children:e.name},r))})]}),t.jsx(z,{id:"multiple-limit-tags",multiple:!0,name:"subjects",options:A.data.map(e=>({label:e.name,value:e.code,code:e.code,id:e.id})),filterSelectedOptions:!0,isOptionEqualToValue:(e,r)=>e.value===r.value,renderInput:e=>t.jsx(S,{...e,label:"Subjects"}),onChange:(e,r)=>l({...s,subject_codes:r})})]}),t.jsx(b,{onClick:E,disabled:h,variant:"contained",className:" w-full",children:h?t.jsx(P,{size:24,color:"inherit"}):"Submit"})]})})})]})}export{Ee as default};