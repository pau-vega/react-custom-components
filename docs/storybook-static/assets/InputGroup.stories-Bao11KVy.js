import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{t as b,c as I}from"./bundle-mjs-BNe0Xlio.js";import{I as t}from"./input-D7tkER31.js";import{S as i}from"./search-CVIPYjYE.js";import{M as j}from"./mail-ByIE_us_.js";import"./index-Br2IOmUs.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useStableCallback-CgA2ffE5.js";import"./empty-BwNtW-GQ.js";import"./useControlled-BhWCjR1C.js";import"./useIsoLayoutEffect-B3i3ZXBb.js";import"./LabelableContext-DhTQYAer.js";import"./index-B1jiiJTD.js";import"./index-CGqftQ-p.js";import"./useLabelableId-BJBp94oK.js";import"./floating-ui.utils.dom-BR__G8pa.js";import"./useBaseUiId-Ds3dA0Bv.js";import"./useRenderElement-DBf0zvZM.js";import"./createBaseUIEventDetails-BfRHIGKf.js";import"./createLucideIcon-0w86QR-M.js";function v(...s){return b(I(s))}function a({className:s,...f}){return r.jsx("div",{"data-slot":"input-group",role:"group",className:v("border-input dark:bg-input/30 has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50 has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-[[data-slot][aria-invalid=true]]:border-destructive dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40 h-9 rounded-md border shadow-xs transition-[color,box-shadow] in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-3 has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-end]]:[&>input]:pt-3 has-[>[data-align=block-start]]:[&>input]:pb-3 has-[>[data-align=inline-end]]:[&>input]:pr-1.5 has-[>[data-align=inline-start]]:[&>input]:pl-1.5 group/input-group relative flex w-full min-w-0 items-center outline-none has-[>textarea]:h-auto",s),...f})}const H={title:"Forms/Input Group",component:a,parameters:{layout:"centered"},tags:["autodocs"]},e={render:()=>r.jsxs(a,{className:"w-80",children:[r.jsx(i,{}),r.jsx(t,{placeholder:"Search..."})]})},o={render:()=>r.jsxs("div",{className:"flex flex-col gap-4 w-80",children:[r.jsxs(a,{children:[r.jsx(i,{}),r.jsx(t,{placeholder:"Search with icon..."})]}),r.jsxs(a,{children:[r.jsx(j,{}),r.jsx(t,{type:"email",placeholder:"Email with icon..."})]})]})},n={render:()=>r.jsxs("div",{className:"flex flex-col gap-4 w-80",children:[r.jsxs(a,{children:[r.jsx(i,{}),r.jsx(t,{placeholder:"With start icon"})]}),r.jsxs(a,{children:[r.jsx(t,{placeholder:"With end icon"}),r.jsx(i,{})]})]})};var l,p,c;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <InputGroup className="w-80">
      <Search />
      <Input placeholder="Search..." />
    </InputGroup>
}`,...(c=(p=e.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var d,u,h;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 w-80">
      <InputGroup>
        <Search />
        <Input placeholder="Search with icon..." />
      </InputGroup>
      <InputGroup>
        <Mail />
        <Input type="email" placeholder="Email with icon..." />
      </InputGroup>
    </div>
}`,...(h=(u=o.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var m,x,g;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 w-80">
      <InputGroup>
        <Search />
        <Input placeholder="With start icon" />
      </InputGroup>
      <InputGroup>
        <Input placeholder="With end icon" />
        <Search />
      </InputGroup>
    </div>
}`,...(g=(x=n.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};const J=["Default","WithIcon","Variants"];export{e as Default,n as Variants,o as WithIcon,J as __namedExportsOrder,H as default};
