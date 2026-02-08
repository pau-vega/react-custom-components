import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as i}from"./index-Br2IOmUs.js";import{u as pe}from"./useStableCallback-CgA2ffE5.js";import{u as z}from"./useRenderElement-DBf0zvZM.js";import{c as ce,u as me,C as ue,a as Z,t as be,b as xe}from"./useCollapsiblePanel-DrgT6Iia.js";import{t as ee,a as he}from"./useTransitionStatus-H-zITwNf.js";import{u as fe}from"./useButton-D8OkA_9h.js";import{u as B}from"./useIsoLayoutEffect-B3i3ZXBb.js";import{B as S}from"./button-BPsk-mQ5.js";import{c as Ce}from"./createLucideIcon-0w86QR-M.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./empty-BwNtW-GQ.js";import"./useControlled-BhWCjR1C.js";import"./useBaseUiId-Ds3dA0Bv.js";import"./createBaseUIEventDetails-BfRHIGKf.js";import"./useOnMount-J4hPCZ9b.js";import"./useAnimationFrame-BGZzLPhQ.js";import"./index-B1jiiJTD.js";import"./index-CGqftQ-p.js";import"./floating-ui.utils.dom-BR__G8pa.js";import"./index-BYe2eu78.js";import"./bundle-mjs-BNe0Xlio.js";import"./Button-BfmJxKsd.js";/**
 * @license lucide-react v0.550.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ne=[["path",{d:"m7 15 5 5 5-5",key:"1hf1tw"}],["path",{d:"m7 9 5-5 5 5",key:"sgt6xg"}]],T=Ce("chevrons-up-down",Ne),se={...ce,...ee},ve=i.forwardRef(function(n,r){const{render:f,className:d,defaultOpen:p=!1,disabled:C=!1,onOpenChange:l,open:N,...m}=n,c=pe(l),s=me({open:N,defaultOpen:p,onOpenChange:c,disabled:C}),a=i.useMemo(()=>({open:s.open,disabled:s.disabled,transitionStatus:s.transitionStatus}),[s.open,s.disabled,s.transitionStatus]),u=i.useMemo(()=>({...s,onOpenChange:c,state:a}),[s,c,a]),o=z("div",n,{state:a,ref:r,props:m,stateAttributesMapping:se});return e.jsx(ue.Provider,{value:u,children:o})}),ge={...be,...ee},je=i.forwardRef(function(n,r){const{panelId:f,open:d,handleTrigger:p,state:C,disabled:l}=Z(),{className:N,disabled:m=l,id:c,render:s,nativeButton:a=!0,...u}=n,{getButtonProps:o,buttonRef:R}=fe({disabled:m,focusableWhenDisabled:!0,native:a}),b=i.useMemo(()=>({"aria-controls":d?f:void 0,"aria-expanded":d,onClick:p}),[f,d,p]);return z("button",n,{state:C,ref:[r,R],props:[b,u,o],stateAttributesMapping:ge})});let W=(function(t){return t.collapsiblePanelHeight="--collapsible-panel-height",t.collapsiblePanelWidth="--collapsible-panel-width",t})({});const ye=i.forwardRef(function(n,r){const{className:f,hiddenUntilFound:d,keepMounted:p,render:C,id:l,...N}=n,{abortControllerRef:m,animationTypeRef:c,height:s,mounted:a,onOpenChange:u,open:o,panelId:R,panelRef:b,runOnceAnimationsFinish:k,setDimensions:U,setHiddenUntilFound:E,setKeepMounted:F,setMounted:te,setPanelIdState:M,setOpen:ne,setVisible:ae,state:I,transitionDimensionRef:le,visible:oe,width:P,transitionStatus:A}=Z(),v=d??!1,x=p??!1;B(()=>{if(l)return M(l),()=>{M(void 0)}},[l,M]),B(()=>{E(v)},[E,v]),B(()=>{F(x)},[F,x]);const{props:ie}=xe({abortControllerRef:m,animationTypeRef:c,externalRef:r,height:s,hiddenUntilFound:v,id:R,keepMounted:x,mounted:a,onOpenChange:u,open:o,panelRef:b,runOnceAnimationsFinish:k,setDimensions:U,setMounted:te,setOpen:ne,setVisible:ae,transitionDimensionRef:le,visible:oe,width:P});he({open:o&&A==="idle",ref:b,onComplete(){o&&U({height:void 0,width:void 0})}});const re=i.useMemo(()=>({...I,transitionStatus:A}),[I,A]),de=z("div",n,{state:re,ref:[r,b],props:[ie,{style:{[W.collapsiblePanelHeight]:s===void 0?"auto":`${s}px`,[W.collapsiblePanelWidth]:P===void 0?"auto":`${P}px`}},N],stateAttributesMapping:se});return x||v||!x&&a?de:null});function h({...t}){return e.jsx(ve,{"data-slot":"collapsible",...t})}function D({...t}){return e.jsx(je,{"data-slot":"collapsible-trigger",...t})}function O({...t}){return e.jsx(ye,{"data-slot":"collapsible-content",...t})}const qe={title:"Layout/Collapsible",component:h,parameters:{layout:"centered"},tags:["autodocs"]},g={render:()=>e.jsxs(h,{className:"w-96 space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between space-x-4",children:[e.jsx("h4",{className:"text-sm font-semibold",children:"@peduarte starred 3 repositories"}),e.jsx(D,{asChild:!0,children:e.jsxs(S,{variant:"ghost",size:"sm",children:[e.jsx(T,{className:"size-4"}),e.jsx("span",{className:"sr-only",children:"Toggle"})]})})]}),e.jsx("div",{className:"rounded-md border px-4 py-2 text-sm",children:"@radix-ui/primitives"}),e.jsxs(O,{className:"space-y-2",children:[e.jsx("div",{className:"rounded-md border px-4 py-2 text-sm",children:"@radix-ui/colors"}),e.jsx("div",{className:"rounded-md border px-4 py-2 text-sm",children:"@stitches/react"})]})]})},j={render:()=>e.jsxs(h,{className:"w-96",children:[e.jsx(D,{asChild:!0,children:e.jsxs(S,{variant:"outline",className:"w-full justify-between",children:["Show more",e.jsx(T,{className:"size-4"})]})}),e.jsxs(O,{className:"mt-2 space-y-2",children:[e.jsx("div",{className:"rounded-md border p-4",children:e.jsx("p",{className:"text-sm",children:"Additional content 1"})}),e.jsx("div",{className:"rounded-md border p-4",children:e.jsx("p",{className:"text-sm",children:"Additional content 2"})}),e.jsx("div",{className:"rounded-md border p-4",children:e.jsx("p",{className:"text-sm",children:"Additional content 3"})})]})]})},y={render:()=>e.jsxs(h,{defaultOpen:!0,className:"w-96 space-y-2",children:[e.jsx(D,{asChild:!0,children:e.jsxs(S,{variant:"outline",className:"w-full justify-between",children:["Details (Open by default)",e.jsx(T,{className:"size-4"})]})}),e.jsx(O,{className:"space-y-2",children:e.jsx("div",{className:"rounded-md border p-4",children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"This collapsible is open by default. Click the button above to collapse it."})})})]})},w={render:()=>e.jsxs(h,{className:"w-96 rounded-lg border",children:[e.jsxs("div",{className:"flex items-center justify-between p-4",children:[e.jsx("h3",{className:"font-semibold",children:"Project Details"}),e.jsx(D,{asChild:!0,children:e.jsx(S,{variant:"ghost",size:"sm",children:e.jsx(T,{className:"size-4"})})})]}),e.jsx(O,{children:e.jsxs("div",{className:"border-t p-4 space-y-2",children:[e.jsxs("div",{className:"flex justify-between text-sm",children:[e.jsx("span",{className:"text-muted-foreground",children:"Status"}),e.jsx("span",{children:"Active"})]}),e.jsxs("div",{className:"flex justify-between text-sm",children:[e.jsx("span",{className:"text-muted-foreground",children:"Created"}),e.jsx("span",{children:"Jan 1, 2024"})]}),e.jsxs("div",{className:"flex justify-between text-sm",children:[e.jsx("span",{className:"text-muted-foreground",children:"Team"}),e.jsx("span",{children:"5 members"})]})]})})]})};var _,H,L;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <Collapsible className="w-96 space-y-2">
      <div className="flex items-center justify-between space-x-4">
        <h4 className="text-sm font-semibold">@peduarte starred 3 repositories</h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm">
            <ChevronsUpDown className="size-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="rounded-md border px-4 py-2 text-sm">@radix-ui/primitives</div>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-2 text-sm">@radix-ui/colors</div>
        <div className="rounded-md border px-4 py-2 text-sm">@stitches/react</div>
      </CollapsibleContent>
    </Collapsible>
}`,...(L=(H=g.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var $,J,K;j.parameters={...j.parameters,docs:{...($=j.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <Collapsible className="w-96">
      <CollapsibleTrigger asChild>
        <Button variant="outline" className="w-full justify-between">
          Show more
          <ChevronsUpDown className="size-4" />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="mt-2 space-y-2">
        <div className="rounded-md border p-4">
          <p className="text-sm">Additional content 1</p>
        </div>
        <div className="rounded-md border p-4">
          <p className="text-sm">Additional content 2</p>
        </div>
        <div className="rounded-md border p-4">
          <p className="text-sm">Additional content 3</p>
        </div>
      </CollapsibleContent>
    </Collapsible>
}`,...(K=(J=j.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var V,q,G;y.parameters={...y.parameters,docs:{...(V=y.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <Collapsible defaultOpen className="w-96 space-y-2">
      <CollapsibleTrigger asChild>
        <Button variant="outline" className="w-full justify-between">
          Details (Open by default)
          <ChevronsUpDown className="size-4" />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border p-4">
          <p className="text-sm text-muted-foreground">
            This collapsible is open by default. Click the button above to collapse it.
          </p>
        </div>
      </CollapsibleContent>
    </Collapsible>
}`,...(G=(q=y.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var Q,X,Y;w.parameters={...w.parameters,docs:{...(Q=w.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <Collapsible className="w-96 rounded-lg border">
      <div className="flex items-center justify-between p-4">
        <h3 className="font-semibold">Project Details</h3>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm">
            <ChevronsUpDown className="size-4" />
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent>
        <div className="border-t p-4 space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Status</span>
            <span>Active</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Created</span>
            <span>Jan 1, 2024</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Team</span>
            <span>5 members</span>
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
}`,...(Y=(X=w.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const Ge=["Default","Simple","DefaultOpen","WithContent"];export{g as Default,y as DefaultOpen,j as Simple,w as WithContent,Ge as __namedExportsOrder,qe as default};
