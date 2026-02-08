import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{t as L,c as M}from"./bundle-mjs-BNe0Xlio.js";import{f as R,F as I,T as D,e as H,a as S,b as _,c as k,d as A}from"./TooltipArrow-C2T1N_KA.js";import{r as g}from"./index-Br2IOmUs.js";import{B as e}from"./button-BPsk-mQ5.js";import{c as E}from"./createLucideIcon-0w86QR-M.js";import"./useIsoLayoutEffect-B3i3ZXBb.js";import"./createBaseUIEventDetails-BfRHIGKf.js";import"./empty-BwNtW-GQ.js";import"./index-B1jiiJTD.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-CGqftQ-p.js";import"./useSyncedFloatingRootContext-BHS4UzMP.js";import"./useStableCallback-CgA2ffE5.js";import"./useTransitionStatus-H-zITwNf.js";import"./useAnimationFrame-BGZzLPhQ.js";import"./useOnMount-J4hPCZ9b.js";import"./getEmptyRootContext-DHQYzQq2.js";import"./useInteractions-DLoJm_bm.js";import"./floating-ui.utils.dom-BR__G8pa.js";import"./useTimeout-DEENwbcq.js";import"./useBaseUiId-Ds3dA0Bv.js";import"./event-D_tFMKDJ.js";import"./detectBrowser-Cp-v3zjv.js";import"./element-vmEcGomw.js";import"./constants-CRqqCNE_.js";import"./useFocus-Dd2F9aQQ.js";import"./popupStateMapping-B2J1S55N.js";import"./visuallyHidden-BwafneL2.js";import"./useRenderElement-DBf0zvZM.js";import"./safePolygon-B1_E0Dln.js";import"./useValueAsRef-uCcb0GiG.js";import"./useHoverReferenceInteraction-BCD5gqBx.js";import"./FloatingPortalLite-Boq3ScPJ.js";import"./getDisabledMountTransitionStyles-xn1qLHjW.js";import"./floating-ui.utils-CkpHT9gb.js";import"./owner-CQsS7OFZ.js";import"./DirectionContext-DcsIbjZ7.js";import"./useFloatingRootContext-Czq2kyX1.js";import"./index-BYe2eu78.js";import"./Button-BfmJxKsd.js";import"./useButton-D8OkA_9h.js";/**
 * @license lucide-react v0.550.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],O=E("plus",F),V=function(a){const{delay:s,closeDelay:l,timeout:u=400}=a,T=g.useMemo(()=>({delay:s,closeDelay:l}),[s,l]),h=g.useMemo(()=>({open:s,close:l}),[s,l]);return t.jsx(R.Provider,{value:T,children:t.jsx(I,{delay:h,timeoutMs:u,children:a.children})})};function W(...o){return L(M(o))}function $({delay:o=0,...a}){return t.jsx(V,{"data-slot":"tooltip-provider",delay:o,...a})}function i({...o}){return t.jsx(D,{"data-slot":"tooltip",...o})}function n({...o}){return t.jsx(H,{"data-slot":"tooltip-trigger",...o})}function r({className:o,side:a="top",sideOffset:s=4,align:l="center",alignOffset:u=0,children:T,...h}){return t.jsx(S,{children:t.jsx(_,{align:l,alignOffset:u,side:a,sideOffset:s,className:"isolate z-50",children:t.jsxs(k,{"data-slot":"tooltip-content",className:W("data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-[state=delayed-open]:animate-in data-[state=delayed-open]:fade-in-0 data-[state=delayed-open]:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 rounded-md px-3 py-1.5 text-xs data-[side=inline-start]:slide-in-from-right-2 data-[side=inline-end]:slide-in-from-left-2 bg-foreground text-background z-50 w-fit max-w-xs origin-(--transform-origin)",o),...h,children:[T,t.jsx(A,{className:"size-2.5 translate-y-[calc(-50%-2px)] rotate-45 rounded-[2px] data-[side=inline-end]:top-1/2! data-[side=inline-end]:-left-1 data-[side=inline-end]:-translate-y-1/2 data-[side=inline-start]:top-1/2! data-[side=inline-start]:-right-1 data-[side=inline-start]:-translate-y-1/2 bg-foreground fill-foreground z-50 data-[side=bottom]:top-1 data-[side=left]:top-1/2! data-[side=left]:-right-1 data-[side=left]:-translate-y-1/2 data-[side=right]:top-1/2! data-[side=right]:-left-1 data-[side=right]:-translate-y-1/2 data-[side=top]:-bottom-2.5"})]})})})}const Dt={title:"Overlays/Tooltip",component:i,parameters:{layout:"centered"},tags:["autodocs"],decorators:[o=>t.jsx($,{children:t.jsx(o,{})})]},d={render:()=>t.jsxs(i,{children:[t.jsx(n,{asChild:!0,children:t.jsx(e,{variant:"outline",children:"Hover me"})}),t.jsx(r,{children:t.jsx("p",{children:"This is a tooltip"})})]})},p={render:()=>t.jsxs("div",{className:"flex gap-4",children:[t.jsxs(i,{children:[t.jsx(n,{asChild:!0,children:t.jsx(e,{variant:"outline",children:"Top"})}),t.jsx(r,{side:"top",children:"Top tooltip"})]}),t.jsxs(i,{children:[t.jsx(n,{asChild:!0,children:t.jsx(e,{variant:"outline",children:"Bottom"})}),t.jsx(r,{side:"bottom",children:"Bottom tooltip"})]}),t.jsxs(i,{children:[t.jsx(n,{asChild:!0,children:t.jsx(e,{variant:"outline",children:"Left"})}),t.jsx(r,{side:"left",children:"Left tooltip"})]}),t.jsxs(i,{children:[t.jsx(n,{asChild:!0,children:t.jsx(e,{variant:"outline",children:"Right"})}),t.jsx(r,{side:"right",children:"Right tooltip"})]})]})},c={render:()=>t.jsxs(i,{children:[t.jsx(n,{asChild:!0,children:t.jsx(e,{size:"icon",children:t.jsx(O,{})})}),t.jsx(r,{children:t.jsx("p",{children:"Add new item"})})]})},m={render:()=>t.jsxs(i,{children:[t.jsx(n,{asChild:!0,children:t.jsx(e,{variant:"outline",children:"Hover for info"})}),t.jsx(r,{className:"max-w-xs",children:t.jsx("p",{children:"This is a longer tooltip with more detailed information. It can span multiple lines to provide additional context."})})]})};var x,f,j;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover me</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>This is a tooltip</p>
      </TooltipContent>
    </Tooltip>
}`,...(j=(f=d.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var C,v,B;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Top</Button>
        </TooltipTrigger>
        <TooltipContent side="top">Top tooltip</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Bottom</Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">Bottom tooltip</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Left</Button>
        </TooltipTrigger>
        <TooltipContent side="left">Left tooltip</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Right</Button>
        </TooltipTrigger>
        <TooltipContent side="right">Right tooltip</TooltipContent>
      </Tooltip>
    </div>
}`,...(B=(v=p.parameters)==null?void 0:v.docs)==null?void 0:B.source}}};var y,P,b;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <Tooltip>
      <TooltipTrigger asChild>
        <Button size="icon">
          <Plus />
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Add new item</p>
      </TooltipContent>
    </Tooltip>
}`,...(b=(P=c.parameters)==null?void 0:P.docs)==null?void 0:b.source}}};var w,z,N;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover for info</Button>
      </TooltipTrigger>
      <TooltipContent className="max-w-xs">
        <p>
          This is a longer tooltip with more detailed information. It can span multiple lines to provide additional
          context.
        </p>
      </TooltipContent>
    </Tooltip>
}`,...(N=(z=m.parameters)==null?void 0:z.docs)==null?void 0:N.source}}};const Ht=["Default","Placements","WithIcon","LongContent"];export{d as Default,m as LongContent,p as Placements,c as WithIcon,Ht as __namedExportsOrder,Dt as default};
