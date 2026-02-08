import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{L as o}from"./label-DGf5SUOA.js";import{I as g}from"./input-D7tkER31.js";import{C as j}from"./checkbox-C9bDjxCw.js";import"./bundle-mjs-BNe0Xlio.js";import"./index-Br2IOmUs.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useStableCallback-CgA2ffE5.js";import"./empty-BwNtW-GQ.js";import"./useControlled-BhWCjR1C.js";import"./useIsoLayoutEffect-B3i3ZXBb.js";import"./LabelableContext-DhTQYAer.js";import"./index-B1jiiJTD.js";import"./index-CGqftQ-p.js";import"./useLabelableId-BJBp94oK.js";import"./floating-ui.utils.dom-BR__G8pa.js";import"./useBaseUiId-Ds3dA0Bv.js";import"./useRenderElement-DBf0zvZM.js";import"./createBaseUIEventDetails-BfRHIGKf.js";import"./check-CGhur1t1.js";import"./createLucideIcon-0w86QR-M.js";import"./visuallyHidden-BwafneL2.js";import"./useButton-D8OkA_9h.js";import"./FieldItemContext-8VNZ7Au0.js";import"./useValueChanged-Daifgw_Z.js";import"./useTransitionStatus-H-zITwNf.js";import"./useAnimationFrame-BGZzLPhQ.js";import"./useOnMount-J4hPCZ9b.js";const T={title:"Forms/Label",component:o,parameters:{layout:"centered"},tags:["autodocs"]},r={args:{children:"Label",htmlFor:"input"}},t={render:()=>e.jsxs("div",{className:"flex flex-col gap-2 w-80",children:[e.jsx(o,{htmlFor:"email",children:"Email"}),e.jsx(g,{id:"email",type:"email",placeholder:"you@example.com"})]})},a={render:()=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(j,{id:"terms"}),e.jsx(o,{htmlFor:"terms",children:"Accept terms and conditions"})]})},s={render:()=>e.jsxs("div",{className:"flex flex-col gap-2 w-80",children:[e.jsxs(o,{htmlFor:"username",children:["Username ",e.jsx("span",{className:"text-destructive",children:"*"})]}),e.jsx(g,{id:"username",type:"text",placeholder:"Enter your username",required:!0})]})};var m,i,n;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: "Label",
    htmlFor: "input"
  }
}`,...(n=(i=r.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};var p,l,c;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-2 w-80">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="you@example.com" />
    </div>
}`,...(c=(l=t.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var d,u,x;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
}`,...(x=(u=a.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var h,f,b;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-2 w-80">
      <Label htmlFor="username">
        Username <span className="text-destructive">*</span>
      </Label>
      <Input id="username" type="text" placeholder="Enter your username" required />
    </div>
}`,...(b=(f=s.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const V=["Default","WithInput","WithCheckbox","Required"];export{r as Default,s as Required,a as WithCheckbox,t as WithInput,V as __namedExportsOrder,T as default};
