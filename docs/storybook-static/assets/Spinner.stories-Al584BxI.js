import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{t as b,c as L}from"./bundle-mjs-BNe0Xlio.js";import{L as w}from"./loader-circle-CLhF3bQ6.js";import"./createLucideIcon-0w86QR-M.js";import"./index-Br2IOmUs.js";import"./_commonjsHelpers-Cpj98o6Y.js";function C(...i){return b(L(i))}function s({className:i,...y}){return e.jsx(w,{role:"status","aria-label":"Loading",className:C("size-4 animate-spin",i),...y})}const W={title:"Feedback/Spinner",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"]}}},r={args:{size:"md"}},t={render:()=>e.jsxs("div",{className:"flex items-center gap-8",children:[e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(s,{size:"sm"}),e.jsx("span",{className:"text-xs text-muted-foreground",children:"Small"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(s,{size:"md"}),e.jsx("span",{className:"text-xs text-muted-foreground",children:"Medium"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(s,{size:"lg"}),e.jsx("span",{className:"text-xs text-muted-foreground",children:"Large"})]})]})},n={render:()=>e.jsxs("div",{className:"flex flex-col items-center gap-4",children:[e.jsx(s,{}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Loading..."})]})},a={render:()=>e.jsxs("button",{className:"inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground",children:[e.jsx(s,{size:"sm"}),"Loading"]})},o={render:()=>e.jsx("div",{className:"flex h-48 w-96 items-center justify-center border rounded-md",children:e.jsx(s,{})})};var m,c,d;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    size: "md"
  }
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var l,x,p;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-8">
      <div className="flex flex-col items-center gap-2">
        <Spinner size="sm" />
        <span className="text-xs text-muted-foreground">Small</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner size="md" />
        <span className="text-xs text-muted-foreground">Medium</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner size="lg" />
        <span className="text-xs text-muted-foreground">Large</span>
      </div>
    </div>
}`,...(p=(x=t.parameters)==null?void 0:x.docs)==null?void 0:p.source}}};var u,f,g;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col items-center gap-4">
      <Spinner />
      <p className="text-sm text-muted-foreground">Loading...</p>
    </div>
}`,...(g=(f=n.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var N,j,v;a.parameters={...a.parameters,docs:{...(N=a.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <button className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">
      <Spinner size="sm" />
      Loading
    </button>
}`,...(v=(j=a.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};var S,h,z;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div className="flex h-48 w-96 items-center justify-center border rounded-md">
      <Spinner />
    </div>
}`,...(z=(h=o.parameters)==null?void 0:h.docs)==null?void 0:z.source}}};const _=["Default","Sizes","WithText","InButton","Centered"];export{o as Centered,r as Default,a as InButton,t as Sizes,n as WithText,_ as __namedExportsOrder,W as default};
