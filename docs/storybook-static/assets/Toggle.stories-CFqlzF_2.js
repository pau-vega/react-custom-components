import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as V}from"./index-BYe2eu78.js";import{t as O,c as k}from"./bundle-mjs-BNe0Xlio.js";import{T as E,B as r,I as c,U as _}from"./Toggle-DfcgMOuu.js";import"./createLucideIcon-0w86QR-M.js";import"./index-Br2IOmUs.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useStableCallback-CgA2ffE5.js";import"./empty-BwNtW-GQ.js";import"./useControlled-BhWCjR1C.js";import"./useBaseUiId-Ds3dA0Bv.js";import"./useRenderElement-DBf0zvZM.js";import"./useButton-D8OkA_9h.js";import"./floating-ui.utils.dom-BR__G8pa.js";import"./useIsoLayoutEffect-B3i3ZXBb.js";import"./CompositeItem-c4Ai6C13.js";import"./useCompositeItem-CP5UoIb3.js";import"./useCompositeListItem-2W6IGSyp.js";import"./createBaseUIEventDetails-BfRHIGKf.js";function W(...d){return O(k(d))}var M=V("hover:text-foreground aria-pressed:bg-muted focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive gap-1 rounded-md text-sm font-medium transition-[color,box-shadow] [&_svg:not([class*='size-'])]:size-4 group/toggle hover:bg-muted inline-flex items-center justify-center whitespace-nowrap outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",{variants:{variant:{default:"bg-transparent",outline:"border-input hover:bg-muted border bg-transparent shadow-xs"},size:{default:"h-9 min-w-9 px-2",sm:"h-8 min-w-8 px-1.5",lg:"h-10 min-w-10 px-2.5"}},defaultVariants:{variant:"default",size:"default"}});function s({className:d,variant:y="default",size:D="default",...P}){return e.jsx(E,{"data-slot":"toggle",className:W(M({variant:y,size:D,className:d})),...P})}const ne={title:"Utilities/Toggle",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","outline"]},size:{control:"select",options:["default","sm","lg"]}}},a={args:{children:e.jsx(r,{})}},n={render:()=>e.jsxs("div",{className:"flex gap-2",children:[e.jsx(s,{variant:"default",children:e.jsx(r,{})}),e.jsx(s,{variant:"outline",children:e.jsx(c,{})})]})},i={render:()=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(s,{size:"sm",children:e.jsx(r,{className:"size-3"})}),e.jsx(s,{size:"default",children:e.jsx(r,{})}),e.jsx(s,{size:"lg",children:e.jsx(r,{className:"size-5"})})]})},t={render:()=>e.jsxs("div",{className:"flex gap-2",children:[e.jsxs(s,{children:[e.jsx(r,{className:"mr-2"}),"Bold"]}),e.jsxs(s,{children:[e.jsx(c,{className:"mr-2"}),"Italic"]}),e.jsxs(s,{children:[e.jsx(_,{className:"mr-2"}),"Underline"]})]})},o={render:()=>e.jsxs("div",{className:"flex gap-2",children:[e.jsx(s,{children:"Normal"}),e.jsx(s,{defaultPressed:!0,children:"Pressed"}),e.jsx(s,{disabled:!0,children:"Disabled"})]})},l={render:()=>e.jsxs("div",{className:"flex gap-2",children:[e.jsx(s,{variant:"outline",children:e.jsx(r,{})}),e.jsx(s,{variant:"outline",children:e.jsx(c,{})}),e.jsx(s,{variant:"outline",children:e.jsx(_,{})})]})};var g,m,p;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: <Bold />
  }
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,x,v;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div className="flex gap-2">
      <Toggle variant="default">
        <Bold />
      </Toggle>
      <Toggle variant="outline">
        <Italic />
      </Toggle>
    </div>
}`,...(v=(x=n.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var f,j,T;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-2">
      <Toggle size="sm">
        <Bold className="size-3" />
      </Toggle>
      <Toggle size="default">
        <Bold />
      </Toggle>
      <Toggle size="lg">
        <Bold className="size-5" />
      </Toggle>
    </div>
}`,...(T=(j=i.parameters)==null?void 0:j.docs)==null?void 0:T.source}}};var h,N,b;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div className="flex gap-2">
      <Toggle>
        <Bold className="mr-2" />
        Bold
      </Toggle>
      <Toggle>
        <Italic className="mr-2" />
        Italic
      </Toggle>
      <Toggle>
        <Underline className="mr-2" />
        Underline
      </Toggle>
    </div>
}`,...(b=(N=t.parameters)==null?void 0:N.docs)==null?void 0:b.source}}};var z,B,S;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div className="flex gap-2">
      <Toggle>Normal</Toggle>
      <Toggle defaultPressed>Pressed</Toggle>
      <Toggle disabled>Disabled</Toggle>
    </div>
}`,...(S=(B=o.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var w,I,U;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div className="flex gap-2">
      <Toggle variant="outline">
        <Bold />
      </Toggle>
      <Toggle variant="outline">
        <Italic />
      </Toggle>
      <Toggle variant="outline">
        <Underline />
      </Toggle>
    </div>
}`,...(U=(I=l.parameters)==null?void 0:I.docs)==null?void 0:U.source}}};const ie=["Default","Variants","Sizes","WithText","States","Outline"];export{a as Default,l as Outline,i as Sizes,o as States,n as Variants,t as WithText,ie as __namedExportsOrder,ne as default};
