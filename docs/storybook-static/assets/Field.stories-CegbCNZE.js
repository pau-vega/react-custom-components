import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./index-Br2IOmUs.js";import{c as L}from"./index-BYe2eu78.js";import{t as N,c as k}from"./bundle-mjs-BNe0Xlio.js";import{I as d}from"./input-D7tkER31.js";import{T as W}from"./textarea-JpHCOXce.js";import{C as E}from"./checkbox-C9bDjxCw.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useStableCallback-CgA2ffE5.js";import"./empty-BwNtW-GQ.js";import"./useControlled-BhWCjR1C.js";import"./useIsoLayoutEffect-B3i3ZXBb.js";import"./LabelableContext-DhTQYAer.js";import"./index-B1jiiJTD.js";import"./index-CGqftQ-p.js";import"./useLabelableId-BJBp94oK.js";import"./floating-ui.utils.dom-BR__G8pa.js";import"./useBaseUiId-Ds3dA0Bv.js";import"./useRenderElement-DBf0zvZM.js";import"./createBaseUIEventDetails-BfRHIGKf.js";import"./check-CGhur1t1.js";import"./createLucideIcon-0w86QR-M.js";import"./visuallyHidden-BwafneL2.js";import"./useButton-D8OkA_9h.js";import"./FieldItemContext-8VNZ7Au0.js";import"./useValueChanged-Daifgw_Z.js";import"./useTransitionStatus-H-zITwNf.js";import"./useAnimationFrame-BGZzLPhQ.js";import"./useOnMount-J4hPCZ9b.js";function T(...l){return N(k(l))}var q=L("data-[invalid=true]:text-destructive gap-3 group/field flex w-full",{variants:{orientation:{vertical:"flex-col *:w-full [&>.sr-only]:w-auto",horizontal:"flex-row items-center *:data-[slot=field-label]:flex-auto has-[>[data-slot=field-content]]:items-start has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",responsive:"flex-col *:w-full [&>.sr-only]:w-auto @md/field-group:flex-row @md/field-group:items-center @md/field-group:*:w-auto @md/field-group:*:data-[slot=field-label]:flex-auto @md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px"}},defaultVariants:{orientation:"vertical"}});function r({className:l,orientation:n="vertical",...D}){return e.jsx("div",{role:"group","data-slot":"field","data-orientation":n,className:T(q({orientation:n}),l),...D})}const de={title:"Forms/Field",component:r.Root,parameters:{layout:"centered"},tags:["autodocs"]},t={render:()=>e.jsxs(r.Root,{className:"w-80",children:[e.jsx(r.Label,{children:"Email"}),e.jsx(d,{type:"email",placeholder:"you@example.com"}),e.jsx(r.Description,{children:"We'll never share your email."})]})},a={render:()=>e.jsxs(r.Root,{className:"w-80",invalid:!0,children:[e.jsx(r.Label,{children:"Username"}),e.jsx(d,{type:"text",defaultValue:"ab","aria-invalid":!0}),e.jsx(r.Error,{children:"Username must be at least 3 characters."})]})},o={render:()=>e.jsxs(r.Root,{className:"w-80",children:[e.jsx(r.Label,{children:"Bio"}),e.jsx(W,{placeholder:"Tell us about yourself"}),e.jsx(r.Description,{children:"Write a short bio about yourself."})]})},i={render:()=>e.jsxs(r.Root,{children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(E,{id:"marketing"}),e.jsx(r.Label,{htmlFor:"marketing",children:"Marketing emails"})]}),e.jsx(r.Description,{children:"Receive emails about new products and features."})]})},s={render:()=>e.jsxs(r.Root,{className:"w-80",required:!0,children:[e.jsxs(r.Label,{children:["Full Name ",e.jsx("span",{className:"text-destructive",children:"*"})]}),e.jsx(d,{type:"text",placeholder:"John Doe",required:!0}),e.jsx(r.Description,{children:"This field is required."})]})};var c,m,p;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <Field.Root className="w-80">
      <Field.Label>Email</Field.Label>
      <Input type="email" placeholder="you@example.com" />
      <Field.Description>We'll never share your email.</Field.Description>
    </Field.Root>
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,x,h;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <Field.Root className="w-80" invalid>
      <Field.Label>Username</Field.Label>
      <Input type="text" defaultValue="ab" aria-invalid />
      <Field.Error>Username must be at least 3 characters.</Field.Error>
    </Field.Root>
}`,...(h=(x=a.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var f,F,b;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <Field.Root className="w-80">
      <Field.Label>Bio</Field.Label>
      <Textarea placeholder="Tell us about yourself" />
      <Field.Description>Write a short bio about yourself.</Field.Description>
    </Field.Root>
}`,...(b=(F=o.parameters)==null?void 0:F.docs)==null?void 0:b.source}}};var j,g,v;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <Field.Root>
      <div className="flex items-center gap-2">
        <Checkbox id="marketing" />
        <Field.Label htmlFor="marketing">Marketing emails</Field.Label>
      </div>
      <Field.Description>Receive emails about new products and features.</Field.Description>
    </Field.Root>
}`,...(v=(g=i.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var R,w,y;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <Field.Root className="w-80" required>
      <Field.Label>
        Full Name <span className="text-destructive">*</span>
      </Field.Label>
      <Input type="text" placeholder="John Doe" required />
      <Field.Description>This field is required.</Field.Description>
    </Field.Root>
}`,...(y=(w=s.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};const ne=["Default","WithError","WithTextarea","WithCheckbox","Required"];export{t as Default,s as Required,i as WithCheckbox,a as WithError,o as WithTextarea,ne as __namedExportsOrder,de as default};
