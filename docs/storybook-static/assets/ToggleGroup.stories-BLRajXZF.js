import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as c}from"./index-Br2IOmUs.js";import{t as ve,c as xe}from"./bundle-mjs-BNe0Xlio.js";import{c as Te}from"./index-BYe2eu78.js";import{u as fe}from"./useStableCallback-CgA2ffE5.js";import{u as Ge}from"./useControlled-BhWCjR1C.js";import{u as he}from"./useRenderElement-DBf0zvZM.js";import{C as je}from"./CompositeRoot-CQnPxTmm.js";import{u as Ie}from"./ToolbarRootContext-Dqmc35tY.js";import{a as be,T as ze,B as u,I as g,U as d}from"./Toggle-DfcgMOuu.js";import{c as S}from"./createLucideIcon-0w86QR-M.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./empty-BwNtW-GQ.js";import"./CompositeList-qs3wigw5.js";import"./useIsoLayoutEffect-B3i3ZXBb.js";import"./useCompositeListItem-2W6IGSyp.js";import"./isElementDisabled-CwHw_lZC.js";import"./composite-CCzA221R.js";import"./floating-ui.utils.dom-BR__G8pa.js";import"./composite-RvPlRQ7I.js";import"./floating-ui.utils-CkpHT9gb.js";import"./event-D_tFMKDJ.js";import"./detectBrowser-Cp-v3zjv.js";import"./constants-CRqqCNE_.js";import"./useButton-D8OkA_9h.js";import"./DirectionContext-DcsIbjZ7.js";import"./useBaseUiId-Ds3dA0Bv.js";import"./CompositeItem-c4Ai6C13.js";import"./useCompositeItem-CP5UoIb3.js";import"./createBaseUIEventDetails-BfRHIGKf.js";/**
 * @license lucide-react v0.550.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ye=[["path",{d:"M21 5H3",key:"1fi0y6"}],["path",{d:"M17 12H7",key:"16if0g"}],["path",{d:"M19 19H5",key:"vjpgq2"}]],le=S("text-align-center",ye);/**
 * @license lucide-react v0.550.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ne=[["path",{d:"M21 5H3",key:"1fi0y6"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M21 19H7",key:"4cu937"}]],ae=S("text-align-end",Ne);/**
 * @license lucide-react v0.550.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Me=[["path",{d:"M21 5H3",key:"1fi0y6"}],["path",{d:"M15 12H3",key:"6jk70r"}],["path",{d:"M17 19H3",key:"z6ezky"}]],ne=S("text-align-start",Me);let ke=(function(t){return t.disabled="data-disabled",t.orientation="data-orientation",t.multiple="data-multiple",t})({});const U={multiple(t){return t?{[ke.multiple]:""}:null}},Se=c.forwardRef(function(s,n){const{defaultValue:l,disabled:p=!1,loopFocus:a=!0,onValueChange:m,orientation:x="horizontal",multiple:N=!1,value:M,className:ue,render:ge,...C}=s,v=Ie(),de=c.useMemo(()=>{if(M===void 0)return l??[]},[M,l]),T=((v==null?void 0:v.disabled)??!1)||p,[f,pe]=Ge({controlled:M,default:de,name:"ToggleGroup",state:"value"}),w=fe((k,A,B)=>{let i;if(N?(i=f.slice(),A?i.push(k):i.splice(f.indexOf(k),1)):i=A?[k]:[],Array.isArray(i)){if(m==null||m(i,B),B.isCanceled)return;pe(i)}}),V=c.useMemo(()=>({disabled:T,multiple:N,orientation:x}),[T,x,N]),ce=c.useMemo(()=>({disabled:T,orientation:x,setGroupValue:w,value:f}),[T,x,w,f]),_={role:"group"},me=he("div",s,{enabled:!!v,state:V,ref:n,props:[_,C],stateAttributesMapping:U});return e.jsx(be.Provider,{value:ce,children:v?me:e.jsx(je,{render:ge,className:ue,state:V,refs:[n],props:[_,C],stateAttributesMapping:U,loopFocus:a})})});function se(...t){return ve(xe(t))}var Ce=Te("hover:text-foreground aria-pressed:bg-muted focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive gap-1 rounded-md text-sm font-medium transition-[color,box-shadow] [&_svg:not([class*='size-'])]:size-4 group/toggle hover:bg-muted inline-flex items-center justify-center whitespace-nowrap outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",{variants:{variant:{default:"bg-transparent",outline:"border-input hover:bg-muted border bg-transparent shadow-xs"},size:{default:"h-9 min-w-9 px-2",sm:"h-8 min-w-8 px-1.5",lg:"h-10 min-w-10 px-2.5"}},defaultVariants:{variant:"default",size:"default"}}),ie=c.createContext({size:"default",variant:"default",spacing:0,orientation:"horizontal"});function o({className:t,variant:s,size:n,spacing:l=0,orientation:p="horizontal",children:a,...m}){return e.jsx(Se,{"data-slot":"toggle-group","data-variant":s,"data-size":n,"data-spacing":l,"data-orientation":p,style:{"--gap":l},className:se("rounded-md data-[spacing=0]:data-[variant=outline]:shadow-xs group/toggle-group flex w-fit flex-row items-center gap-[--spacing(var(--gap))] data-vertical:flex-col data-vertical:items-stretch",t),...m,children:e.jsx(ie.Provider,{value:{variant:s,size:n,spacing:l,orientation:p},children:a})})}function r({className:t,children:s,variant:n="default",size:l="default",...p}){const a=c.use(ie);return e.jsx(ze,{"data-slot":"toggle-group-item","data-variant":a.variant||n,"data-size":a.size||l,"data-spacing":a.spacing,className:se("data-[state=on]:bg-muted group-data-[spacing=0]/toggle-group:rounded-none group-data-[spacing=0]/toggle-group:px-2 group-data-[spacing=0]/toggle-group:shadow-none group-data-horizontal/toggle-group:data-[spacing=0]:first:rounded-l-md group-data-vertical/toggle-group:data-[spacing=0]:first:rounded-t-md group-data-horizontal/toggle-group:data-[spacing=0]:last:rounded-r-md group-data-vertical/toggle-group:data-[spacing=0]:last:rounded-b-md shrink-0 focus:z-10 focus-visible:z-10 group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:border-l-0 group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:border-t-0 group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-l group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-t",Ce({variant:a.variant||n,size:a.size||l}),t),...p,children:s})}const sr={title:"Utilities/Toggle Group",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{type:{control:"select",options:["single","multiple"]},variant:{control:"select",options:["default","outline"]},size:{control:"select",options:["default","sm","lg"]}}},G={render:()=>e.jsxs(o,{type:"single",children:[e.jsx(r,{value:"bold",children:e.jsx(u,{})}),e.jsx(r,{value:"italic",children:e.jsx(g,{})}),e.jsx(r,{value:"underline",children:e.jsx(d,{})})]})},h={render:()=>e.jsxs(o,{type:"single",defaultValue:"center",children:[e.jsx(r,{value:"left",children:e.jsx(ne,{})}),e.jsx(r,{value:"center",children:e.jsx(le,{})}),e.jsx(r,{value:"right",children:e.jsx(ae,{})})]})},j={render:()=>e.jsxs(o,{type:"multiple",defaultValue:["bold"],children:[e.jsx(r,{value:"bold",children:e.jsx(u,{})}),e.jsx(r,{value:"italic",children:e.jsx(g,{})}),e.jsx(r,{value:"underline",children:e.jsx(d,{})})]})},I={render:()=>e.jsxs(o,{type:"single",variant:"outline",children:[e.jsx(r,{value:"bold",children:e.jsx(u,{})}),e.jsx(r,{value:"italic",children:e.jsx(g,{})}),e.jsx(r,{value:"underline",children:e.jsx(d,{})})]})},b={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs(o,{type:"single",size:"sm",children:[e.jsx(r,{value:"bold",children:e.jsx(u,{className:"size-3"})}),e.jsx(r,{value:"italic",children:e.jsx(g,{className:"size-3"})}),e.jsx(r,{value:"underline",children:e.jsx(d,{className:"size-3"})})]}),e.jsxs(o,{type:"single",size:"default",children:[e.jsx(r,{value:"bold",children:e.jsx(u,{})}),e.jsx(r,{value:"italic",children:e.jsx(g,{})}),e.jsx(r,{value:"underline",children:e.jsx(d,{})})]}),e.jsxs(o,{type:"single",size:"lg",children:[e.jsx(r,{value:"bold",children:e.jsx(u,{className:"size-5"})}),e.jsx(r,{value:"italic",children:e.jsx(g,{className:"size-5"})}),e.jsx(r,{value:"underline",children:e.jsx(d,{className:"size-5"})})]})]})},z={render:()=>e.jsxs(o,{type:"single",children:[e.jsxs(r,{value:"left",children:[e.jsx(ne,{className:"mr-2"}),"Left"]}),e.jsxs(r,{value:"center",children:[e.jsx(le,{className:"mr-2"}),"Center"]}),e.jsxs(r,{value:"right",children:[e.jsx(ae,{className:"mr-2"}),"Right"]})]})},y={render:()=>e.jsxs(o,{type:"single",disabled:!0,children:[e.jsx(r,{value:"bold",children:e.jsx(u,{})}),e.jsx(r,{value:"italic",children:e.jsx(g,{})}),e.jsx(r,{value:"underline",children:e.jsx(d,{})})]})};var H,R,E;G.parameters={...G.parameters,docs:{...(H=G.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <ToggleGroup type="single">
      <ToggleGroupItem value="bold">
        <Bold />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic">
        <Italic />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline">
        <Underline />
      </ToggleGroupItem>
    </ToggleGroup>
}`,...(E=(R=G.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};var L,P,O;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <ToggleGroup type="single" defaultValue="center">
      <ToggleGroupItem value="left">
        <AlignLeft />
      </ToggleGroupItem>
      <ToggleGroupItem value="center">
        <AlignCenter />
      </ToggleGroupItem>
      <ToggleGroupItem value="right">
        <AlignRight />
      </ToggleGroupItem>
    </ToggleGroup>
}`,...(O=(P=h.parameters)==null?void 0:P.docs)==null?void 0:O.source}}};var $,W,q;j.parameters={...j.parameters,docs:{...($=j.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <ToggleGroup type="multiple" defaultValue={["bold"]}>
      <ToggleGroupItem value="bold">
        <Bold />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic">
        <Italic />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline">
        <Underline />
      </ToggleGroupItem>
    </ToggleGroup>
}`,...(q=(W=j.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};var D,F,J;I.parameters={...I.parameters,docs:{...(D=I.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <ToggleGroup type="single" variant="outline">
      <ToggleGroupItem value="bold">
        <Bold />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic">
        <Italic />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline">
        <Underline />
      </ToggleGroupItem>
    </ToggleGroup>
}`,...(J=(F=I.parameters)==null?void 0:F.docs)==null?void 0:J.source}}};var K,Q,X;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <ToggleGroup type="single" size="sm">
        <ToggleGroupItem value="bold">
          <Bold className="size-3" />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic">
          <Italic className="size-3" />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline">
          <Underline className="size-3" />
        </ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup type="single" size="default">
        <ToggleGroupItem value="bold">
          <Bold />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic">
          <Italic />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline">
          <Underline />
        </ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup type="single" size="lg">
        <ToggleGroupItem value="bold">
          <Bold className="size-5" />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic">
          <Italic className="size-5" />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline">
          <Underline className="size-5" />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
}`,...(X=(Q=b.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,ee;z.parameters={...z.parameters,docs:{...(Y=z.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <ToggleGroup type="single">
      <ToggleGroupItem value="left">
        <AlignLeft className="mr-2" />
        Left
      </ToggleGroupItem>
      <ToggleGroupItem value="center">
        <AlignCenter className="mr-2" />
        Center
      </ToggleGroupItem>
      <ToggleGroupItem value="right">
        <AlignRight className="mr-2" />
        Right
      </ToggleGroupItem>
    </ToggleGroup>
}`,...(ee=(Z=z.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var re,te,oe;y.parameters={...y.parameters,docs:{...(re=y.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => <ToggleGroup type="single" disabled>
      <ToggleGroupItem value="bold">
        <Bold />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic">
        <Italic />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline">
        <Underline />
      </ToggleGroupItem>
    </ToggleGroup>
}`,...(oe=(te=y.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};const ir=["Default","Single","Multiple","Outline","Sizes","WithText","Disabled"];export{G as Default,y as Disabled,j as Multiple,I as Outline,h as Single,b as Sizes,z as WithText,ir as __namedExportsOrder,sr as default};
