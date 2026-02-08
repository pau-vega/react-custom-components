import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{t as je,c as Te}from"./bundle-mjs-BNe0Xlio.js";import{C as Re}from"./chevron-down-B5IqHC-Q.js";import{C as we}from"./chevron-up-Ps1SdQdB.js";import{r}from"./index-Br2IOmUs.js";import{u as Me}from"./useControlled-BhWCjR1C.js";import{u as z}from"./useStableCallback-CgA2ffE5.js";import{C as ke}from"./CompositeList-qs3wigw5.js";import{u as Se}from"./DirectionContext-DcsIbjZ7.js";import{f as me,b as Pe}from"./empty-BwNtW-GQ.js";import{u as U}from"./useRenderElement-DBf0zvZM.js";import{c as Oe,n as Ne}from"./createBaseUIEventDetails-BfRHIGKf.js";import{u as X}from"./useBaseUiId-Ds3dA0Bv.js";import{c as Ee,u as De,C as Fe,a as ge,t as He,b as Ve}from"./useCollapsiblePanel-DrgT6Iia.js";import{u as We}from"./useCompositeListItem-2W6IGSyp.js";import{t as Ue,a as Ye}from"./useTransitionStatus-H-zITwNf.js";import{i as Z}from"./isElementDisabled-CwHw_lZC.js";import{u as K}from"./useIsoLayoutEffect-B3i3ZXBb.js";import{b as fe,e as he,c as Ae,d as xe,H as _e,E as qe}from"./composite-CCzA221R.js";import{u as Le}from"./useButton-D8OkA_9h.js";import{s as Be}from"./event-D_tFMKDJ.js";import"./createLucideIcon-0w86QR-M.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useOnMount-J4hPCZ9b.js";import"./useAnimationFrame-BGZzLPhQ.js";import"./index-B1jiiJTD.js";import"./index-CGqftQ-p.js";import"./floating-ui.utils.dom-BR__G8pa.js";import"./detectBrowser-Cp-v3zjv.js";const be=r.createContext(void 0);function Q(){const o=r.useContext(be);if(o===void 0)throw new Error(me(10));return o}const Ke={value:()=>null},$e=r.forwardRef(function(t,c){const{render:S,className:b,disabled:i=!1,hiddenUntilFound:v,keepMounted:E,loopFocus:D=!0,onValueChange:F,multiple:R=!1,orientation:y="vertical",value:P,defaultValue:w,...O}=t,g=Se(),M=r.useMemo(()=>{if(P===void 0)return w??[]},[P,w]),C=z(F),l=r.useRef([]),[a,u]=Me({controlled:P,default:M,name:"Accordion",state:"value"}),n=z((j,H)=>{const d=Oe(Ne);if(R)if(H){const s=a.slice();if(s.push(j),C(s,d),d.isCanceled)return;u(s)}else{const s=a.filter(p=>p!==j);if(C(s,d),d.isCanceled)return;u(s)}else{const s=a[0]===j?[]:[j];if(C(s,d),d.isCanceled)return;u(s)}}),I=r.useMemo(()=>({value:a,disabled:i,orientation:y}),[a,i,y]),N=r.useMemo(()=>({accordionItemRefs:l,direction:g,disabled:i,handleValueChange:n,hiddenUntilFound:v??!1,keepMounted:E??!1,loopFocus:D,orientation:y,state:I,value:a}),[g,i,n,v,E,D,y,I,a]),k=U("div",t,{state:I,ref:c,props:[{dir:g,role:"region"},O],stateAttributesMapping:Ke});return e.jsx(be.Provider,{value:N,children:e.jsx(ke,{elementsRef:l,children:k})})}),ve=r.createContext(void 0);function G(){const o=r.useContext(ve);if(o===void 0)throw new Error(me(9));return o}let ze=(function(o){return o.index="data-index",o.disabled="data-disabled",o.open="data-open",o})({});const J={...Ee,index:o=>Number.isInteger(o)?{[ze.index]:String(o)}:null,...Ue,value:()=>null},Qe=r.forwardRef(function(t,c){const{className:S,disabled:b=!1,onOpenChange:i,render:v,value:E,...D}=t,{ref:F,index:R}=We(),y=Pe(c,F),{disabled:P,handleValueChange:w,state:O,value:g}=Q(),M=X(),C=E??M,l=b||P,a=r.useMemo(()=>{if(!g)return!1;for(let p=0;p<g.length;p+=1)if(g[p]===C)return!0;return!1},[g,C]),u=z((p,T)=>{i==null||i(p,T),!T.isCanceled&&w(C,p)}),n=De({open:a,onOpenChange:u,disabled:l}),I=r.useMemo(()=>({open:n.open,disabled:n.disabled,hidden:!n.mounted,transitionStatus:n.transitionStatus}),[n.open,n.disabled,n.mounted,n.transitionStatus]),N=r.useMemo(()=>({...n,onOpenChange:u,state:I}),[n,I,u]),k=r.useMemo(()=>({...O,index:R,disabled:l,open:a}),[l,R,a,O]),[j,H]=r.useState(X()),d=r.useMemo(()=>({open:a,state:k,setTriggerId:H,triggerId:j}),[a,k,H,j]),s=U("div",t,{state:k,ref:y,props:D,stateAttributesMapping:J});return e.jsx(Fe.Provider,{value:N,children:e.jsx(ve.Provider,{value:d,children:s})})}),Ge=r.forwardRef(function(t,c){const{render:S,className:b,...i}=t,{state:v}=G();return U("h3",t,{state:v,ref:c,props:i,stateAttributesMapping:J})}),Je=new Set([fe,he,Ae,xe,_e,qe]);function Xe(o){const{current:t}=o,c=[];for(let S=0;S<t.length;S+=1){const b=t[S];if(!Z(b)){const i=b==null?void 0:b.querySelector('[type="button"], [role="button"]');i&&!Z(i)&&c.push(i)}}return c}const Ze=r.forwardRef(function(t,c){const{disabled:S,className:b,id:i,render:v,nativeButton:E=!0,...D}=t,{panelId:F,open:R,handleTrigger:y,disabled:P}=ge(),w=S??P,{getButtonProps:O,buttonRef:g}=Le({disabled:w,focusableWhenDisabled:!0,native:E}),{accordionItemRefs:M,direction:C,loopFocus:l,orientation:a}=Q(),u=C==="rtl",n=a==="horizontal",{state:I,setTriggerId:N,triggerId:k}=G();K(()=>(i&&N(i),()=>{N(void 0)}),[i,N]);const j=r.useMemo(()=>({"aria-controls":R?F:void 0,"aria-expanded":R,id:k,onClick:y,onKeyDown(d){if(!Je.has(d.key))return;Be(d);const s=Xe(M),T=s.length-1;let m=-1;const f=s.indexOf(d.target);function W(){l?m=f+1>T?0:f+1:m=Math.min(f+1,T)}function V(){l?m=f===0?T:f-1:m=f-1}switch(d.key){case fe:n||W();break;case he:n||V();break;case Ae:n&&(u?V():W());break;case xe:n&&(u?W():V());break;case"Home":m=0;break;case"End":m=T;break}m>-1&&s[m].focus()}}),[M,y,k,n,u,l,R,F]);return U("button",t,{state:I,ref:[c,g],props:[j,D,O],stateAttributesMapping:He})});let ee=(function(o){return o.accordionPanelHeight="--accordion-panel-height",o.accordionPanelWidth="--accordion-panel-width",o})({});const eo=r.forwardRef(function(t,c){const{className:S,hiddenUntilFound:b,keepMounted:i,id:v,render:E,...D}=t,{hiddenUntilFound:F,keepMounted:R}=Q(),{abortControllerRef:y,animationTypeRef:P,height:w,mounted:O,onOpenChange:g,open:M,panelId:C,panelRef:l,runOnceAnimationsFinish:a,setDimensions:u,setHiddenUntilFound:n,setKeepMounted:I,setMounted:N,setOpen:k,setVisible:j,transitionDimensionRef:H,visible:d,width:s,setPanelIdState:p,transitionStatus:T}=ge(),m=b??F,f=i??R;K(()=>{if(v)return p(v),()=>{p(void 0)}},[v,p]),K(()=>{n(m)},[n,m]),K(()=>{I(f)},[I,f]),Ye({open:M&&T==="idle",ref:l,onComplete(){M&&u({width:void 0,height:void 0})}});const{props:W}=Ve({abortControllerRef:y,animationTypeRef:P,externalRef:c,height:w,hiddenUntilFound:m,id:v??C,keepMounted:f,mounted:O,onOpenChange:g,open:M,panelRef:l,runOnceAnimationsFinish:a,setDimensions:u,setMounted:N,setOpen:k,setVisible:j,transitionDimensionRef:H,visible:d,width:s}),{state:V,triggerId:ye}=G(),Ce=r.useMemo(()=>({...V,transitionStatus:T}),[V,T]),Ie=U("div",t,{state:Ce,ref:[c,l],props:[W,{"aria-labelledby":ye,role:"region",style:{[ee.accordionPanelHeight]:w===void 0?"auto":`${w}px`,[ee.accordionPanelWidth]:s===void 0?"auto":`${s}px`}},D],stateAttributesMapping:J});return f||m||!f&&O?Ie:null});function $(...o){return je(Te(o))}function Y({className:o,...t}){return e.jsx($e,{"data-slot":"accordion",className:$("flex w-full flex-col",o),...t})}function h({className:o,...t}){return e.jsx(Qe,{"data-slot":"accordion-item",className:$("not-last:border-b",o),...t})}function A({className:o,children:t,...c}){return e.jsx(Ge,{className:"flex",children:e.jsxs(Ze,{"data-slot":"accordion-trigger",className:$("focus-visible:ring-ring/50 focus-visible:border-ring focus-visible:after:border-ring **:data-[slot=accordion-trigger-icon]:text-muted-foreground rounded-md py-4 text-left text-sm font-medium hover:underline focus-visible:ring-3 **:data-[slot=accordion-trigger-icon]:ml-auto **:data-[slot=accordion-trigger-icon]:size-4 group/accordion-trigger relative flex flex-1 items-start justify-between border border-transparent transition-all outline-none disabled:pointer-events-none disabled:opacity-50",o),...c,children:[t,e.jsx(Re,{"data-slot":"accordion-trigger-icon",className:"pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:hidden"}),e.jsx(we,{"data-slot":"accordion-trigger-icon",className:"pointer-events-none hidden shrink-0 group-aria-expanded/accordion-trigger:inline"})]})})}function x({className:o,children:t,...c}){return e.jsx(eo,{"data-slot":"accordion-content",className:"data-open:animate-accordion-down data-closed:animate-accordion-up text-sm overflow-hidden",...c,children:e.jsx("div",{className:$("pt-0 pb-4 [&_a]:hover:text-foreground h-(--accordion-panel-height) data-ending-style:h-0 data-starting-style:h-0 [&_a]:underline [&_a]:underline-offset-3 [&_p:not(:last-child)]:mb-4",o),children:t})})}const Oo={title:"Layout/Accordion",component:Y,parameters:{layout:"centered"},tags:["autodocs"]},_={render:()=>e.jsxs(Y,{type:"single",collapsible:!0,className:"w-96",children:[e.jsxs(h,{value:"item-1",children:[e.jsx(A,{children:"Is it accessible?"}),e.jsx(x,{children:"Yes. It adheres to the WAI-ARIA design pattern."})]}),e.jsxs(h,{value:"item-2",children:[e.jsx(A,{children:"Is it styled?"}),e.jsx(x,{children:"Yes. It comes with default styles that matches the other components aesthetic."})]}),e.jsxs(h,{value:"item-3",children:[e.jsx(A,{children:"Is it animated?"}),e.jsx(x,{children:"Yes. It's animated by default, but you can disable it if you prefer."})]})]})},q={render:()=>e.jsxs(Y,{type:"multiple",className:"w-96",children:[e.jsxs(h,{value:"item-1",children:[e.jsx(A,{children:"Section 1"}),e.jsx(x,{children:"Content for section 1. Multiple sections can be open at the same time."})]}),e.jsxs(h,{value:"item-2",children:[e.jsx(A,{children:"Section 2"}),e.jsx(x,{children:"Content for section 2. Try opening multiple sections simultaneously."})]}),e.jsxs(h,{value:"item-3",children:[e.jsx(A,{children:"Section 3"}),e.jsx(x,{children:"Content for section 3. This accordion allows multiple open items."})]})]})},L={render:()=>e.jsxs(Y,{type:"single",collapsible:!0,defaultValue:"item-1",className:"w-96",children:[e.jsxs(h,{value:"item-1",children:[e.jsx(A,{children:"Already Open"}),e.jsx(x,{children:"This section is open by default."})]}),e.jsxs(h,{value:"item-2",children:[e.jsx(A,{children:"Closed"}),e.jsx(x,{children:"This section starts closed."})]})]})},B={render:()=>e.jsxs(Y,{type:"single",collapsible:!0,className:"w-[500px]",children:[e.jsxs(h,{value:"faq-1",children:[e.jsx(A,{children:"What is your return policy?"}),e.jsx(x,{children:"We offer a 30-day return policy for all unused items in their original packaging. Please contact our support team to initiate a return."})]}),e.jsxs(h,{value:"faq-2",children:[e.jsx(A,{children:"How long does shipping take?"}),e.jsx(x,{children:"Standard shipping typically takes 5-7 business days. Express shipping options are available at checkout for 2-3 day delivery."})]}),e.jsxs(h,{value:"faq-3",children:[e.jsx(A,{children:"Do you ship internationally?"}),e.jsx(x,{children:"Yes, we ship to most countries worldwide. International shipping times and costs vary by location."})]}),e.jsxs(h,{value:"faq-4",children:[e.jsx(A,{children:"How can I track my order?"}),e.jsx(x,{children:"Once your order ships, you'll receive a tracking number via email. You can use this to monitor your shipment's progress."})]})]})};var oe,te,ne;_.parameters={..._.parameters,docs:{...(oe=_.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => <Accordion type="single" collapsible className="w-96">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other components aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It's animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
}`,...(ne=(te=_.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var re,ie,se;q.parameters={...q.parameters,docs:{...(re=q.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => <Accordion type="multiple" className="w-96">
      <AccordionItem value="item-1">
        <AccordionTrigger>Section 1</AccordionTrigger>
        <AccordionContent>
          Content for section 1. Multiple sections can be open at the same time.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Section 2</AccordionTrigger>
        <AccordionContent>
          Content for section 2. Try opening multiple sections simultaneously.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Section 3</AccordionTrigger>
        <AccordionContent>
          Content for section 3. This accordion allows multiple open items.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
}`,...(se=(ie=q.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};var ce,ae,de;L.parameters={...L.parameters,docs:{...(ce=L.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: () => <Accordion type="single" collapsible defaultValue="item-1" className="w-96">
      <AccordionItem value="item-1">
        <AccordionTrigger>Already Open</AccordionTrigger>
        <AccordionContent>
          This section is open by default.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Closed</AccordionTrigger>
        <AccordionContent>
          This section starts closed.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
}`,...(de=(ae=L.parameters)==null?void 0:ae.docs)==null?void 0:de.source}}};var le,ue,pe;B.parameters={...B.parameters,docs:{...(le=B.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => <Accordion type="single" collapsible className="w-[500px]">
      <AccordionItem value="faq-1">
        <AccordionTrigger>What is your return policy?</AccordionTrigger>
        <AccordionContent>
          We offer a 30-day return policy for all unused items in their original packaging. Please contact our support
          team to initiate a return.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="faq-2">
        <AccordionTrigger>How long does shipping take?</AccordionTrigger>
        <AccordionContent>
          Standard shipping typically takes 5-7 business days. Express shipping options are available at checkout for
          2-3 day delivery.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="faq-3">
        <AccordionTrigger>Do you ship internationally?</AccordionTrigger>
        <AccordionContent>
          Yes, we ship to most countries worldwide. International shipping times and costs vary by location.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="faq-4">
        <AccordionTrigger>How can I track my order?</AccordionTrigger>
        <AccordionContent>
          Once your order ships, you'll receive a tracking number via email. You can use this to monitor your shipment's
          progress.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
}`,...(pe=(ue=B.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};const No=["Default","Multiple","DefaultOpen","FAQ"];export{_ as Default,L as DefaultOpen,B as FAQ,q as Multiple,No as __namedExportsOrder,Oo as default};
