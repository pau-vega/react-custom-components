import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as t}from"./button-BPsk-mQ5.js";import{c as H}from"./createLucideIcon-0w86QR-M.js";import"./index-BYe2eu78.js";import"./bundle-mjs-BNe0Xlio.js";import"./Button-BfmJxKsd.js";import"./index-Br2IOmUs.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useButton-D8OkA_9h.js";import"./floating-ui.utils.dom-BR__G8pa.js";import"./useStableCallback-CgA2ffE5.js";import"./empty-BwNtW-GQ.js";import"./useIsoLayoutEffect-B3i3ZXBb.js";import"./useRenderElement-DBf0zvZM.js";/**
 * @license lucide-react v0.550.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],n=H("heart",I),q={title:"Forms/Button",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","outline","secondary","ghost","destructive","link"]},size:{control:"select",options:["default","xs","sm","lg","icon","icon-xs","icon-sm","icon-lg"]},disabled:{control:"boolean"}}},r={args:{children:"Button",variant:"default",size:"default"}},a={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(t,{variant:"default",children:"Default"}),e.jsx(t,{variant:"outline",children:"Outline"}),e.jsx(t,{variant:"secondary",children:"Secondary"}),e.jsx(t,{variant:"ghost",children:"Ghost"}),e.jsx(t,{variant:"destructive",children:"Destructive"}),e.jsx(t,{variant:"link",children:"Link"})]})},s={render:()=>e.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[e.jsx(t,{size:"xs",children:"Extra Small"}),e.jsx(t,{size:"sm",children:"Small"}),e.jsx(t,{size:"default",children:"Default"}),e.jsx(t,{size:"lg",children:"Large"})]})},o={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsxs(t,{children:[e.jsx(n,{}),"With Icon"]}),e.jsxs(t,{variant:"outline",children:[e.jsx(n,{}),"Outline"]})]})},i={render:()=>e.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[e.jsx(t,{size:"icon-xs",children:e.jsx(n,{})}),e.jsx(t,{size:"icon-sm",children:e.jsx(n,{})}),e.jsx(t,{size:"icon",children:e.jsx(n,{})}),e.jsx(t,{size:"icon-lg",children:e.jsx(n,{})})]})},c={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(t,{children:"Normal"}),e.jsx(t,{disabled:!0,children:"Disabled"})]})};var l,d,u;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: "Button",
    variant: "default",
    size: "default"
  }
}`,...(u=(d=r.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var m,p,x;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-4">
      <Button variant="default">Default</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="link">Link</Button>
    </div>
}`,...(x=(p=a.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var B,f,v;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-4">
      <Button size="xs">Extra Small</Button>
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
    </div>
}`,...(v=(f=s.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var h,g,j;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-4">
      <Button>
        <Heart />
        With Icon
      </Button>
      <Button variant="outline">
        <Heart />
        Outline
      </Button>
    </div>
}`,...(j=(g=o.parameters)==null?void 0:g.docs)==null?void 0:j.source}}};var z,S,N;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-4">
      <Button size="icon-xs">
        <Heart />
      </Button>
      <Button size="icon-sm">
        <Heart />
      </Button>
      <Button size="icon">
        <Heart />
      </Button>
      <Button size="icon-lg">
        <Heart />
      </Button>
    </div>
}`,...(N=(S=i.parameters)==null?void 0:S.docs)==null?void 0:N.source}}};var w,y,D;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-4">
      <Button>Normal</Button>
      <Button disabled>Disabled</Button>
    </div>
}`,...(D=(y=c.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};const C=["Default","Variants","Sizes","WithIcon","IconOnly","States"];export{r as Default,i as IconOnly,s as Sizes,c as States,a as Variants,o as WithIcon,C as __namedExportsOrder,q as default};
