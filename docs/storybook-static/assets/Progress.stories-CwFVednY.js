import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{t as X,c as Y}from"./bundle-mjs-BNe0Xlio.js";import{r as l}from"./index-Br2IOmUs.js";import{u as Z}from"./useValueAsRef-uCcb0GiG.js";import{f as M,v as ee}from"./valueToPercent-CmxdyyhM.js";import{u as b}from"./useRenderElement-DBf0zvZM.js";import{f as se}from"./empty-BwNtW-GQ.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useIsoLayoutEffect-B3i3ZXBb.js";const B=l.createContext(void 0);function G(){const s=l.useContext(B);if(s===void 0)throw new Error(se(51));return s}let y=(function(s){return s.complete="data-complete",s.indeterminate="data-indeterminate",s.progressing="data-progressing",s})({});const P={status(s){return s==="progressing"?{[y.progressing]:""}:s==="complete"?{[y.complete]:""}:s==="indeterminate"?{[y.indeterminate]:""}:null}};function re(s,r,n){return s==null?"":n?M(s,r,n):M(s/100,r,{style:"percent"})}function ae(s,r){return r==null?"indeterminate progress":s||`${r}%`}const te=l.forwardRef(function(r,n){const{format:c,getAriaValueText:j=ae,locale:d,max:i=100,min:o=0,value:t,render:R,className:u,...N}=r,[V,I]=l.useState(),H=Z(c);let m="indeterminate";Number.isFinite(t)&&(m=t===i?"complete":"progressing");const h=re(t,d,H.current),w=l.useMemo(()=>({status:m}),[m]),J={"aria-labelledby":V,"aria-valuemax":i,"aria-valuemin":o,"aria-valuenow":t??void 0,"aria-valuetext":j(h,t),role:"progressbar"},K=l.useMemo(()=>({formattedValue:h,max:i,min:o,setLabelId:I,state:w,status:m,value:t}),[h,i,o,I,w,m,t]),Q=b("div",r,{state:w,ref:n,props:[J,N],stateAttributesMapping:P});return e.jsx(B.Provider,{value:K,children:Q})}),ne=l.forwardRef(function(r,n){const{render:c,className:j,...d}=r,{state:i}=G();return b("div",r,{state:i,ref:n,props:d,stateAttributesMapping:P})}),le=l.forwardRef(function(r,n){const{render:c,className:j,...d}=r,{max:i,min:o,value:t,state:R}=G(),u=Number.isFinite(t)&&t!==null?ee(t,o,i):null,N=l.useCallback(()=>u==null?{}:{insetInlineStart:0,height:"inherit",width:`${u}%`},[u]);return b("div",r,{state:R,ref:n,props:[{style:N()},d],stateAttributesMapping:P})});function S(...s){return X(Y(s))}function a({className:s,children:r,value:n,...c}){return e.jsxs(te,{value:n,"data-slot":"progress",className:S("flex flex-wrap gap-3",s),...c,children:[r,e.jsx(ie,{children:e.jsx(oe,{})})]})}function ie({className:s,...r}){return e.jsx(ne,{className:S("bg-muted h-1.5 rounded-full relative flex w-full items-center overflow-x-hidden",s),"data-slot":"progress-track",...r})}function oe({className:s,...r}){return e.jsx(le,{"data-slot":"progress-indicator",className:S("bg-primary h-full transition-all",s),...r})}const je={title:"Feedback/Progress",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{value:{control:{type:"range",min:0,max:100,step:1}}}},p={args:{value:50},render:s=>e.jsx("div",{className:"w-96",children:e.jsx(a,{...s})})},x={render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-96",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"flex justify-between text-sm",children:e.jsx("span",{children:"0%"})}),e.jsx(a,{value:0})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"flex justify-between text-sm",children:e.jsx("span",{children:"25%"})}),e.jsx(a,{value:25})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"flex justify-between text-sm",children:e.jsx("span",{children:"50%"})}),e.jsx(a,{value:50})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"flex justify-between text-sm",children:e.jsx("span",{children:"75%"})}),e.jsx(a,{value:75})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"flex justify-between text-sm",children:e.jsx("span",{children:"100%"})}),e.jsx(a,{value:100})]})]})},f={render:()=>e.jsxs("div",{className:"w-96 space-y-2",children:[e.jsxs("div",{className:"flex justify-between text-sm",children:[e.jsx("span",{className:"text-muted-foreground",children:"Uploading file..."}),e.jsx("span",{className:"font-medium",children:"67%"})]}),e.jsx(a,{value:67})]})},v={render:()=>e.jsx("div",{className:"w-96",children:e.jsx(a,{})})},g={render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-96",children:[e.jsx(a,{value:50,className:"h-1"}),e.jsx(a,{value:50,className:"h-2"}),e.jsx(a,{value:50,className:"h-3"}),e.jsx(a,{value:50,className:"h-4"})]})};var T,k,E;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    value: 50
  },
  render: args => <div className="w-96">
      <Progress {...args} />
    </div>
}`,...(E=(k=p.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var A,C,$;x.parameters={...x.parameters,docs:{...(A=x.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 w-96">
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>0%</span>
        </div>
        <Progress value={0} />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>25%</span>
        </div>
        <Progress value={25} />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>50%</span>
        </div>
        <Progress value={50} />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>75%</span>
        </div>
        <Progress value={75} />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>100%</span>
        </div>
        <Progress value={100} />
      </div>
    </div>
}`,...($=(C=x.parameters)==null?void 0:C.docs)==null?void 0:$.source}}};var F,L,z;f.parameters={...f.parameters,docs:{...(F=f.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div className="w-96 space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-muted-foreground">Uploading file...</span>
        <span className="font-medium">67%</span>
      </div>
      <Progress value={67} />
    </div>
}`,...(z=(L=f.parameters)==null?void 0:L.docs)==null?void 0:z.source}}};var O,U,W;v.parameters={...v.parameters,docs:{...(O=v.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <div className="w-96">
      <Progress />
    </div>
}`,...(W=(U=v.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var _,D,q;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 w-96">
      <Progress value={50} className="h-1" />
      <Progress value={50} className="h-2" />
      <Progress value={50} className="h-3" />
      <Progress value={50} className="h-4" />
    </div>
}`,...(q=(D=g.parameters)==null?void 0:D.docs)==null?void 0:q.source}}};const Ne=["Default","Values","WithLabel","Indeterminate","Sizes"];export{p as Default,v as Indeterminate,g as Sizes,x as Values,f as WithLabel,Ne as __namedExportsOrder,je as default};
