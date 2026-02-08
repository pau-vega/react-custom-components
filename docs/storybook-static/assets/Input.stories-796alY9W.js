import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{I as r}from"./input-D7tkER31.js";import"./bundle-mjs-BNe0Xlio.js";import"./index-Br2IOmUs.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useStableCallback-CgA2ffE5.js";import"./empty-BwNtW-GQ.js";import"./useControlled-BhWCjR1C.js";import"./useIsoLayoutEffect-B3i3ZXBb.js";import"./LabelableContext-DhTQYAer.js";import"./index-B1jiiJTD.js";import"./index-CGqftQ-p.js";import"./useLabelableId-BJBp94oK.js";import"./floating-ui.utils.dom-BR__G8pa.js";import"./useBaseUiId-Ds3dA0Bv.js";import"./useRenderElement-DBf0zvZM.js";import"./createBaseUIEventDetails-BfRHIGKf.js";const U={title:"Forms/Input",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{type:{control:"select",options:["text","email","password","number","tel","url"]},disabled:{control:"boolean"}}},t={args:{placeholder:"Enter text...",type:"text"}},a={render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-80",children:[e.jsx(r,{type:"text",placeholder:"Text input"}),e.jsx(r,{type:"email",placeholder:"Email input"}),e.jsx(r,{type:"password",placeholder:"Password input"}),e.jsx(r,{type:"number",placeholder:"Number input"}),e.jsx(r,{type:"tel",placeholder:"Phone input"}),e.jsx(r,{type:"url",placeholder:"URL input"})]})},p={render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-80",children:[e.jsx(r,{placeholder:"Normal"}),e.jsx(r,{placeholder:"Disabled",disabled:!0}),e.jsx(r,{placeholder:"With value",defaultValue:"Hello World"})]})},l={render:()=>e.jsx("div",{className:"w-80",children:e.jsx(r,{type:"file"})})};var o,s,n;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    placeholder: "Enter text...",
    type: "text"
  }
}`,...(n=(s=t.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var d,c,i;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 w-80">
      <Input type="text" placeholder="Text input" />
      <Input type="email" placeholder="Email input" />
      <Input type="password" placeholder="Password input" />
      <Input type="number" placeholder="Number input" />
      <Input type="tel" placeholder="Phone input" />
      <Input type="url" placeholder="URL input" />
    </div>
}`,...(i=(c=a.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var m,u,x;p.parameters={...p.parameters,docs:{...(m=p.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 w-80">
      <Input placeholder="Normal" />
      <Input placeholder="Disabled" disabled />
      <Input placeholder="With value" defaultValue="Hello World" />
    </div>
}`,...(x=(u=p.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var h,y,f;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div className="w-80">
      <Input type="file" />
    </div>
}`,...(f=(y=l.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};const V=["Default","Types","States","File"];export{t as Default,l as File,p as States,a as Types,V as __namedExportsOrder,U as default};
