var Se=Object.defineProperty;var we=(t,e,n)=>e in t?Se(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var se=(t,e,n)=>we(t,typeof e!="symbol"?e+"":e,n);import{r as l,R as H,j as N}from"./app-CxSiEuh0.js";import{_ as De,c as E,a as ue,s as Q,u as ce,g as Le,b as je}from"./DefaultPropsProvider-u4dMbbrm.js";import{c as ke,_ as ve,d as Ne,T as re,k as Z,e as $e,u as ae,b as _}from"./TransitionGroupContext-Ag3s-__A.js";function le(t){try{return t.matches(":focus-visible")}catch{}return!1}class G{constructor(){se(this,"mountEffect",()=>{this.shouldMount&&!this.didMount&&this.ref.current!==null&&(this.didMount=!0,this.mounted.resolve())});this.ref={current:null},this.mounted=null,this.didMount=!1,this.shouldMount=!1,this.setShouldMount=null}static create(){return new G}static use(){const e=ke(G.create).current,[n,a]=l.useState(!1);return e.shouldMount=n,e.setShouldMount=a,l.useEffect(e.mountEffect,[n]),e}mount(){return this.mounted||(this.mounted=Ie(),this.shouldMount=!0,this.setShouldMount(this.shouldMount)),this.mounted}start(...e){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.start(...e)})}stop(...e){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.stop(...e)})}pulsate(...e){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.pulsate(...e)})}}function Fe(){return G.use()}function Ie(){let t,e;const n=new Promise((a,o)=>{t=a,e=o});return n.resolve=t,n.reject=e,n}function Ue(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function ee(t,e){var n=function(i){return e&&l.isValidElement(i)?e(i):i},a=Object.create(null);return t&&l.Children.map(t,function(o){return o}).forEach(function(o){a[o.key]=n(o)}),a}function ze(t,e){t=t||{},e=e||{};function n(f){return f in e?e[f]:t[f]}var a=Object.create(null),o=[];for(var i in t)i in e?o.length&&(a[i]=o,o=[]):o.push(i);var s,p={};for(var u in e){if(a[u])for(s=0;s<a[u].length;s++){var d=a[u][s];p[a[u][s]]=n(d)}p[u]=n(u)}for(s=0;s<o.length;s++)p[o[s]]=n(o[s]);return p}function v(t,e,n){return n[e]!=null?n[e]:t.props[e]}function Oe(t,e){return ee(t.children,function(n){return l.cloneElement(n,{onExited:e.bind(null,n),in:!0,appear:v(n,"appear",t),enter:v(n,"enter",t),exit:v(n,"exit",t)})})}function Ae(t,e,n){var a=ee(t.children),o=ze(e,a);return Object.keys(o).forEach(function(i){var s=o[i];if(l.isValidElement(s)){var p=i in e,u=i in a,d=e[i],f=l.isValidElement(d)&&!d.props.in;u&&(!p||f)?o[i]=l.cloneElement(s,{onExited:n.bind(null,s),in:!0,exit:v(s,"exit",t),enter:v(s,"enter",t)}):!u&&p&&!f?o[i]=l.cloneElement(s,{in:!1}):u&&p&&l.isValidElement(d)&&(o[i]=l.cloneElement(s,{onExited:n.bind(null,s),in:d.props.in,exit:v(s,"exit",t),enter:v(s,"enter",t)}))}}),o}var Xe=Object.values||function(t){return Object.keys(t).map(function(e){return t[e]})},Ye={component:"div",childFactory:function(e){return e}},te=function(t){ve(e,t);function e(a,o){var i;i=t.call(this,a,o)||this;var s=i.handleExited.bind(Ue(i));return i.state={contextValue:{isMounting:!0},handleExited:s,firstRender:!0},i}var n=e.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},e.getDerivedStateFromProps=function(o,i){var s=i.children,p=i.handleExited,u=i.firstRender;return{children:u?Oe(o,p):Ae(o,s,p),firstRender:!1}},n.handleExited=function(o,i){var s=ee(this.props.children);o.key in s||(o.props.onExited&&o.props.onExited(i),this.mounted&&this.setState(function(p){var u=De({},p.children);return delete u[o.key],{children:u}}))},n.render=function(){var o=this.props,i=o.component,s=o.childFactory,p=Ne(o,["component","childFactory"]),u=this.state.contextValue,d=Xe(this.state.children).map(s);return delete p.appear,delete p.enter,delete p.exit,i===null?H.createElement(re.Provider,{value:u},d):H.createElement(re.Provider,{value:u},H.createElement(i,p,d))},e}(H.Component);te.propTypes={};te.defaultProps=Ye;function Ke(t){const{className:e,classes:n,pulsate:a=!1,rippleX:o,rippleY:i,rippleSize:s,in:p,onExited:u,timeout:d}=t,[f,M]=l.useState(!1),g=E(e,n.ripple,n.rippleVisible,a&&n.ripplePulsate),V={width:s,height:s,top:-(s/2)+i,left:-(s/2)+o},h=E(n.child,f&&n.childLeaving,a&&n.childPulsate);return!p&&!f&&M(!0),l.useEffect(()=>{if(!p&&u!=null){const D=setTimeout(u,d);return()=>{clearTimeout(D)}}},[u,p,d]),N.jsx("span",{className:g,style:V,children:N.jsx("span",{className:h})})}const m=ue("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),J=550,We=80,He=Z`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,_e=Z`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,Ge=Z`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,qe=Q("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),Je=Q(Ke,{name:"MuiTouchRipple",slot:"Ripple"})`
  opacity: 0;
  position: absolute;

  &.${m.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${He};
    animation-duration: ${J}ms;
    animation-timing-function: ${({theme:t})=>t.transitions.easing.easeInOut};
  }

  &.${m.ripplePulsate} {
    animation-duration: ${({theme:t})=>t.transitions.duration.shorter}ms;
  }

  & .${m.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${m.childLeaving} {
    opacity: 0;
    animation-name: ${_e};
    animation-duration: ${J}ms;
    animation-timing-function: ${({theme:t})=>t.transitions.easing.easeInOut};
  }

  & .${m.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${Ge};
    animation-duration: 2500ms;
    animation-timing-function: ${({theme:t})=>t.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,Qe=l.forwardRef(function(e,n){const a=ce({props:e,name:"MuiTouchRipple"}),{center:o=!1,classes:i={},className:s,...p}=a,[u,d]=l.useState([]),f=l.useRef(0),M=l.useRef(null);l.useEffect(()=>{M.current&&(M.current(),M.current=null)},[u]);const g=l.useRef(!1),V=$e(),h=l.useRef(null),D=l.useRef(null),x=l.useCallback(c=>{const{pulsate:R,rippleX:b,rippleY:I,rippleSize:L,cb:U}=c;d(y=>[...y,N.jsx(Je,{classes:{ripple:E(i.ripple,m.ripple),rippleVisible:E(i.rippleVisible,m.rippleVisible),ripplePulsate:E(i.ripplePulsate,m.ripplePulsate),child:E(i.child,m.child),childLeaving:E(i.childLeaving,m.childLeaving),childPulsate:E(i.childPulsate,m.childPulsate)},timeout:J,pulsate:R,rippleX:b,rippleY:I,rippleSize:L},f.current)]),f.current+=1,M.current=U},[i]),$=l.useCallback((c={},R={},b=()=>{})=>{const{pulsate:I=!1,center:L=o||R.pulsate,fakeElement:U=!1}=R;if((c==null?void 0:c.type)==="mousedown"&&g.current){g.current=!1;return}(c==null?void 0:c.type)==="touchstart"&&(g.current=!0);const y=U?null:D.current,B=y?y.getBoundingClientRect():{width:0,height:0,left:0,top:0};let S,C,w;if(L||c===void 0||c.clientX===0&&c.clientY===0||!c.clientX&&!c.touches)S=Math.round(B.width/2),C=Math.round(B.height/2);else{const{clientX:z,clientY:j}=c.touches&&c.touches.length>0?c.touches[0]:c;S=Math.round(z-B.left),C=Math.round(j-B.top)}if(L)w=Math.sqrt((2*B.width**2+B.height**2)/3),w%2===0&&(w+=1);else{const z=Math.max(Math.abs((y?y.clientWidth:0)-S),S)*2+2,j=Math.max(Math.abs((y?y.clientHeight:0)-C),C)*2+2;w=Math.sqrt(z**2+j**2)}c!=null&&c.touches?h.current===null&&(h.current=()=>{x({pulsate:I,rippleX:S,rippleY:C,rippleSize:w,cb:b})},V.start(We,()=>{h.current&&(h.current(),h.current=null)})):x({pulsate:I,rippleX:S,rippleY:C,rippleSize:w,cb:b})},[o,x,V]),Y=l.useCallback(()=>{$({},{pulsate:!0})},[$]),F=l.useCallback((c,R)=>{if(V.clear(),(c==null?void 0:c.type)==="touchend"&&h.current){h.current(),h.current=null,V.start(0,()=>{F(c,R)});return}h.current=null,d(b=>b.length>0?b.slice(1):b),M.current=R},[V]);return l.useImperativeHandle(n,()=>({pulsate:Y,start:$,stop:F}),[Y,$,F]),N.jsx(qe,{className:E(m.root,i.root,s),ref:D,...p,children:N.jsx(te,{component:null,exit:!0,children:u})})});function Ze(t){return Le("MuiButtonBase",t)}const et=ue("MuiButtonBase",["root","disabled","focusVisible"]),tt=t=>{const{disabled:e,focusVisible:n,focusVisibleClassName:a,classes:o}=t,s=je({root:["root",e&&"disabled",n&&"focusVisible"]},Ze,o);return n&&a&&(s.root+=` ${a}`),s},nt=Q("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(t,e)=>e.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${et.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),lt=l.forwardRef(function(e,n){const a=ce({props:e,name:"MuiButtonBase"}),{action:o,centerRipple:i=!1,children:s,className:p,component:u="button",disabled:d=!1,disableRipple:f=!1,disableTouchRipple:M=!1,focusRipple:g=!1,focusVisibleClassName:V,LinkComponent:h="a",onBlur:D,onClick:x,onContextMenu:$,onDragLeave:Y,onFocus:F,onFocusVisible:c,onKeyDown:R,onKeyUp:b,onMouseDown:I,onMouseLeave:L,onMouseUp:U,onTouchEnd:y,onTouchMove:B,onTouchStart:S,tabIndex:C=0,TouchRippleProps:w,touchRippleRef:z,type:j,...O}=a,A=l.useRef(null),T=Fe(),pe=ae(T.ref,z),[k,K]=l.useState(!1);d&&k&&K(!1),l.useImperativeHandle(o,()=>({focusVisible:()=>{K(!0),A.current.focus()}}),[]);const de=T.shouldMount&&!f&&!d;l.useEffect(()=>{k&&g&&!f&&T.pulsate()},[f,g,k,T]);function P(r,oe,Be=M){return _(ie=>(oe&&oe(ie),Be||T[r](ie),!0))}const fe=P("start",I),he=P("stop",$),me=P("stop",Y),ge=P("stop",U),be=P("stop",r=>{k&&r.preventDefault(),L&&L(r)}),Me=P("start",S),Re=P("stop",y),ye=P("stop",B),Ee=P("stop",r=>{le(r.target)||K(!1),D&&D(r)},!1),xe=_(r=>{A.current||(A.current=r.currentTarget),le(r.target)&&(K(!0),c&&c(r)),F&&F(r)}),q=()=>{const r=A.current;return u&&u!=="button"&&!(r.tagName==="A"&&r.href)},Ce=_(r=>{g&&!r.repeat&&k&&r.key===" "&&T.stop(r,()=>{T.start(r)}),r.target===r.currentTarget&&q()&&r.key===" "&&r.preventDefault(),R&&R(r),r.target===r.currentTarget&&q()&&r.key==="Enter"&&!d&&(r.preventDefault(),x&&x(r))}),Te=_(r=>{g&&r.key===" "&&k&&!r.defaultPrevented&&T.stop(r,()=>{T.pulsate(r)}),b&&b(r),x&&r.target===r.currentTarget&&q()&&r.key===" "&&!r.defaultPrevented&&x(r)});let W=u;W==="button"&&(O.href||O.to)&&(W=h);const X={};W==="button"?(X.type=j===void 0?"button":j,X.disabled=d):(!O.href&&!O.to&&(X.role="button"),d&&(X["aria-disabled"]=d));const Pe=ae(n,A),ne={...a,centerRipple:i,component:u,disabled:d,disableRipple:f,disableTouchRipple:M,focusRipple:g,tabIndex:C,focusVisible:k},Ve=tt(ne);return N.jsxs(nt,{as:W,className:E(Ve.root,p),ownerState:ne,onBlur:Ee,onClick:x,onContextMenu:he,onFocus:xe,onKeyDown:Ce,onKeyUp:Te,onMouseDown:fe,onMouseLeave:be,onMouseUp:ge,onDragLeave:me,onTouchEnd:Re,onTouchMove:ye,onTouchStart:Me,ref:Pe,tabIndex:d?-1:C,type:j,...X,...O,children:[s,de?N.jsx(Qe,{ref:pe,center:i,...w}):null]})});export{lt as B,le as i};
