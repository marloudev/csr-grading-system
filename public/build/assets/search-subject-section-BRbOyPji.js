import{r as l,j as e,y as h}from"./app-CxSiEuh0.js";import{a as m}from"./academic-year-scJFXSBe.js";import{F as c,I as n,S as p}from"./Select-eeUI5IEE.js";import{M as s}from"./MenuItem-DEts--BP.js";import{B as x}from"./Button-CZ5Pv9Z_.js";import{P as S}from"./PersonSearch-DlqcXX2n.js";import"./DefaultPropsProvider-u4dMbbrm.js";import"./InputBase-C1hPBamu.js";import"./isHostComponent-DVu5iVWx.js";import"./index-lFpRPvCY.js";import"./useTheme-BcsGi_1D.js";import"./TransitionGroupContext-Ag3s-__A.js";import"./extendSxProp-B0Mpqpb2.js";import"./ownerWindow-CO8Ksk3k.js";import"./debounce-Be36O1Ab.js";import"./Popover-CkqTCObb.js";import"./useSlot-BtG2wqx4.js";import"./resolveComponentProps-DL3teynR.js";import"./Modal-DVY8ByRB.js";import"./utils-DpS0ORYq.js";import"./Paper-DvaH0Svk.js";import"./Grow-Doya-6fb.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./react-is.production.min-DUDD-a5e.js";import"./index-F-pXNyUe.js";import"./useSlotProps-CcehoDPQ.js";import"./useControlled-KZPzS6sX.js";import"./useId-0GBAqNEW.js";import"./createSvgIcon-D6bWpeAd.js";import"./ButtonBase-CcJZVDWO.js";import"./listItemTextClasses-DrYV45W2.js";function O(){const[t,i]=l.useState({});console.log("academic_year()",m()),l.useEffect(()=>{const r=window.location.search,a=new URLSearchParams(r),u={academic_year:a.get("academic_year")??m()[m().length-1],semester:a.get("semester")??"1st Semester"};i(u)},[]);function o(r){i({...t,[r.target.name]:r.target.value})}function d(r){h.visit(`?academic_year=${t.academic_year}&semester=${t.semester}`)}return e.jsxs("div",{className:"flex gap-3",children:[e.jsxs(c,{fullWidth:!0,children:[e.jsx(n,{id:"demo-simple-select-label",children:"Academic Year"}),e.jsx(p,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:t.academic_year??"",name:"academic_year",label:"Academic Year",onChange:o,children:m().map((r,a)=>e.jsx(s,{value:r,children:r},a))})]}),e.jsxs(c,{fullWidth:!0,children:[e.jsx(n,{id:"demo-simple-select-label",children:"Semester"}),e.jsxs(p,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:t.semester??"",name:"semester",label:"Semester",onChange:o,children:[e.jsx(s,{value:"1st Semester",children:"1st Semester"}),e.jsx(s,{value:"2nd Semester",children:"2nd Semester"}),e.jsx(s,{value:"Summer",children:"Summer"})]})]}),e.jsxs(x,{onClick:d,variant:"contained",className:"w-1/2",children:[e.jsx(S,{}),"Search"]})]})}export{O as default};