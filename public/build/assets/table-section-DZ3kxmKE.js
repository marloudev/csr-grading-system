import{u as h,j as t,h as c,y as j}from"./app-BX_MbBCE.js";import u from"./update-section-rsLOqiV-.js";import b from"./delete-section-CheC1c-q.js";import{T as f,a as T,b as S,c as d,d as o,e as y}from"./TableRow-CrYq6UaL.js";import{P as Y}from"./Paper-CQnIlVcQ.js";import{B as C}from"./Modal-Dl5T9eBG.js";import{V as D}from"./Visibility-BrwhyYTJ.js";import"./enrollment-thunk-CV7Wonrz.js";import"./academic-year-FtyrbWPX.js";import"./Snackbar-DRLdUxw8.js";import"./DefaultPropsProvider-DNQyY7TH.js";import"./useSlot-CLbpkNHK.js";import"./resolveComponentProps-Ctxa67Yh.js";import"./ButtonBase-HlmoPRVP.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./createSvgIcon-DsSdJk3K.js";import"./IconButton-Dt8v3Yhe.js";import"./useTheme-CLuwMYhu.js";import"./useSlotProps-D7iM8rD8.js";import"./ownerWindow-6z4QwRpV.js";import"./Grow-D-nJzyoj.js";import"./utils-Bu-v38X3.js";import"./Edit-C6tfKwiw.js";import"./Drawer-DLH6_bFD.js";import"./index-QseRsG1u.js";import"./Slide-Mv2tXMn-.js";import"./debounce-Be36O1Ab.js";import"./Box-4IWlpwzn.js";import"./extendSxProp-DDxhhc19.js";import"./TextField-BVbxHzzk.js";import"./Select-DzTLNo_5.js";import"./InputBase-URC8wes5.js";import"./isHostComponent-DVu5iVWx.js";import"./index-B-G9468S.js";import"./Popover-DAEiIx5l.js";import"./react-is.production.min-DUDD-a5e.js";import"./useControlled-CQesw5Ne.js";import"./useId-C3Six0EZ.js";import"./MenuItem-Dtq7Z6oQ.js";import"./listItemTextClasses-B38WeSal.js";import"./Autocomplete-CxHMoeLn.js";import"./ListSubheader-CegsDEdq.js";import"./CircularProgress-CoHGCRKE.js";import"./Delete-BdSo2Yhj.js";import"./Typography-CwPVTKza.js";function ui(){const{enrollments:m}=h(i=>i.enrollments);return t.jsx(f,{component:Y,children:t.jsxs(T,{sx:{minWidth:650},"aria-label":"simple table",children:[t.jsx(S,{children:t.jsxs(d,{children:[t.jsx(o,{children:"Student ID"}),t.jsx(o,{children:"Firstname"}),t.jsx(o,{children:"Lastname"}),t.jsx(o,{children:"Semester"}),t.jsx(o,{children:"Section"}),t.jsx(o,{children:"Course"}),t.jsx(o,{children:"Year"}),t.jsx(o,{children:"Action"})]})}),t.jsx(y,{children:m==null?void 0:m.data.map((i,s)=>{var r,n,a,l,p,e;const x=c((r=i==null?void 0:i.user)==null?void 0:r.dob,"YYYY-MM-DD");return c().diff(x,"years"),console.log("res",i),t.jsxs(d,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[t.jsx(o,{component:"th",scope:"row",children:(n=i==null?void 0:i.user)==null?void 0:n.user_id}),t.jsx(o,{children:(a=i==null?void 0:i.user)==null?void 0:a.fname}),t.jsx(o,{children:(l=i==null?void 0:i.user)==null?void 0:l.lname}),t.jsx(o,{children:i==null?void 0:i.semester}),t.jsx(o,{children:((p=i==null?void 0:i.section)==null?void 0:p.name)??""}),t.jsx(o,{children:((e=i==null?void 0:i.course)==null?void 0:e.name)??""}),t.jsx(o,{children:(i==null?void 0:i.year)??""}),t.jsx(o,{children:t.jsxs("div",{className:"flex gap-2",children:[t.jsx(u,{data:i}),t.jsx(b,{data:i}),t.jsx(C,{onClick:()=>j.visit(`/administrator/students/enrollment/${i.id}`),size:"small",variant:"contained",color:"success",children:t.jsx(D,{})})]})})]},s)})})]})})}export{ui as default};