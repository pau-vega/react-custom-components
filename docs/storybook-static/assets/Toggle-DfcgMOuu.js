import{c as u}from"./createLucideIcon-0w86QR-M.js";import{r}from"./index-Br2IOmUs.js";import{u as N}from"./useStableCallback-CgA2ffE5.js";import{u as R}from"./useControlled-BhWCjR1C.js";import{u as w}from"./useBaseUiId-Ds3dA0Bv.js";import{u as G}from"./useRenderElement-DBf0zvZM.js";import{f as U}from"./empty-BwNtW-GQ.js";import{u as S}from"./useButton-D8OkA_9h.js";import{C as V}from"./CompositeItem-c4Ai6C13.js";import{c as $,n as H}from"./createBaseUIEventDetails-BfRHIGKf.js";import{j as L}from"./jsx-runtime-D_zvdyIk.js";/**
 * @license lucide-react v0.550.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=[["path",{d:"M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8",key:"mg9rjx"}]],ae=u("bold",O);/**
 * @license lucide-react v0.550.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=[["line",{x1:"19",x2:"10",y1:"4",y2:"4",key:"15jd3p"}],["line",{x1:"14",x2:"5",y1:"20",y2:"20",key:"bu0au3"}],["line",{x1:"15",x2:"9",y1:"4",y2:"20",key:"uljnxc"}]],re=u("italic",q);/**
 * @license lucide-react v0.550.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=[["path",{d:"M6 4v6a6 6 0 0 0 12 0V4",key:"9kb039"}],["line",{x1:"4",x2:"20",y1:"20",y2:"20",key:"nun2al"}]],ie=u("underline",z),A=r.createContext(void 0);function D(f=!0){const s=r.useContext(A);if(s===void 0&&!f)throw new Error(U(7));return s}const de=r.forwardRef(function(s,x){const{className:b,defaultPressed:v=!1,disabled:k=!1,form:F,onPressedChange:i,pressed:P,render:g,type:J,value:h,nativeButton:E=!0,...j}=s,d=w(h||void 0),e=D(),l=(e==null?void 0:e.value)??[],B=e?void 0:v,c=(k||(e==null?void 0:e.disabled))??!1,[n,T]=R({controlled:e?(l==null?void 0:l.indexOf(d))>-1:P,default:B,name:"Toggle",state:"pressed"}),_=N((a,t)=>{var o;d&&((o=e==null?void 0:e.setGroupValue)==null||o.call(e,d,a,t)),i==null||i(a,t)}),{getButtonProps:C,buttonRef:I}=S({disabled:c,native:E}),m=r.useMemo(()=>({disabled:c,pressed:n}),[c,n]),p=[I,x],y=[{"aria-pressed":n,onClick(a){const t=!n,o=$(H,a.nativeEvent);_(t,o),!o.isCanceled&&T(t)}},j,C],M=G("button",s,{enabled:!e,state:m,ref:p,props:y});return e?L.jsx(V,{tag:"button",render:g,className:b,state:m,refs:p,props:y}):M});export{ae as B,re as I,de as T,ie as U,A as a};
