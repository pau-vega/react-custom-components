import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as a}from"./badge-CsZhnkVL.js";import"./index-BYe2eu78.js";import"./bundle-mjs-BNe0Xlio.js";import"./useRender-ChWxr-mw.js";import"./useRenderElement-DBf0zvZM.js";import"./empty-BwNtW-GQ.js";import"./index-Br2IOmUs.js";import"./_commonjsHelpers-Cpj98o6Y.js";const b={title:"Data Display/Badge",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","secondary","destructive","outline"]}}},s={args:{children:"Badge",variant:"default"}},r={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(a,{variant:"default",children:"Default"}),e.jsx(a,{variant:"secondary",children:"Secondary"}),e.jsx(a,{variant:"destructive",children:"Destructive"}),e.jsx(a,{variant:"outline",children:"Outline"})]})},n={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx(a,{children:"New"}),e.jsx(a,{variant:"secondary",children:"Updated"}),e.jsx(a,{variant:"destructive",children:"Deleted"})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(a,{children:"Active"}),e.jsx(a,{variant:"secondary",children:"Pending"}),e.jsx(a,{variant:"outline",children:"Inactive"})]})]})},t={render:()=>e.jsxs("div",{className:"flex gap-4",children:[e.jsx(a,{children:"99+"}),e.jsx(a,{variant:"secondary",children:"12"}),e.jsx(a,{variant:"destructive",children:"5"}),e.jsx(a,{variant:"outline",children:"1"})]})},d={render:()=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-sm",children:"Status:"}),e.jsx(a,{children:"Active"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-sm",children:"Priority:"}),e.jsx(a,{variant:"destructive",children:"High"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-sm",children:"Category:"}),e.jsx(a,{variant:"secondary",children:"Feature"})]})]})};var i,c,l;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    children: "Badge",
    variant: "default"
  }
}`,...(l=(c=s.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var o,m,v;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-4">
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
}`,...(v=(m=r.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};var g,p,x;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        <Badge>New</Badge>
        <Badge variant="secondary">Updated</Badge>
        <Badge variant="destructive">Deleted</Badge>
      </div>
      <div className="flex gap-2">
        <Badge>Active</Badge>
        <Badge variant="secondary">Pending</Badge>
        <Badge variant="outline">Inactive</Badge>
      </div>
    </div>
}`,...(x=(p=n.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var u,B,f;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4">
      <Badge>99+</Badge>
      <Badge variant="secondary">12</Badge>
      <Badge variant="destructive">5</Badge>
      <Badge variant="outline">1</Badge>
    </div>
}`,...(f=(B=t.parameters)==null?void 0:B.docs)==null?void 0:f.source}}};var h,j,N;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <span className="text-sm">Status:</span>
        <Badge>Active</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm">Priority:</span>
        <Badge variant="destructive">High</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm">Category:</span>
        <Badge variant="secondary">Feature</Badge>
      </div>
    </div>
}`,...(N=(j=d.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};const E=["Default","Variants","States","WithNumbers","InContext"];export{s as Default,d as InContext,n as States,r as Variants,t as WithNumbers,E as __namedExportsOrder,b as default};
