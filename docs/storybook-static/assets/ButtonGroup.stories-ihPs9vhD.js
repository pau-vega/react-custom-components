import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{c as f}from"./index-BYe2eu78.js";import{t as j,c as g}from"./bundle-mjs-BNe0Xlio.js";import{B as n}from"./button-BPsk-mQ5.js";import"./Button-BfmJxKsd.js";import"./index-Br2IOmUs.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useButton-D8OkA_9h.js";import"./floating-ui.utils.dom-BR__G8pa.js";import"./useStableCallback-CgA2ffE5.js";import"./empty-BwNtW-GQ.js";import"./useIsoLayoutEffect-B3i3ZXBb.js";import"./useRenderElement-DBf0zvZM.js";function G(...i){return j(g(i))}var S=f("has-[>[data-slot=button-group]]:gap-2 has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-r-md flex w-fit items-stretch *:focus-visible:z-10 *:focus-visible:relative [&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit [&>input]:flex-1",{variants:{orientation:{horizontal:"[&>[data-slot]:not(:has(~[data-slot]))]:rounded-r-md! [&>[data-slot]~[data-slot]]:rounded-l-none [&>[data-slot]~[data-slot]]:border-l-0 *:data-slot:rounded-r-none",vertical:"[&>[data-slot]:not(:has(~[data-slot]))]:rounded-b-md! flex-col [&>[data-slot]~[data-slot]]:rounded-t-none [&>[data-slot]~[data-slot]]:border-t-0 *:data-slot:rounded-b-none"}},defaultVariants:{orientation:"horizontal"}});function a({className:i,orientation:s,...h}){return t.jsx("div",{role:"group","data-slot":"button-group","data-orientation":s,className:G(S({orientation:s}),i),...h})}const F={title:"Forms/Button Group",component:a,parameters:{layout:"centered"},tags:["autodocs"]},o={render:()=>t.jsxs(a,{children:[t.jsx(n,{variant:"outline",children:"Left"}),t.jsx(n,{variant:"outline",children:"Middle"}),t.jsx(n,{variant:"outline",children:"Right"})]})},e={render:()=>t.jsxs("div",{className:"flex flex-col gap-4",children:[t.jsxs(a,{children:[t.jsx(n,{children:"Default"}),t.jsx(n,{children:"Default"}),t.jsx(n,{children:"Default"})]}),t.jsxs(a,{children:[t.jsx(n,{variant:"outline",children:"Outline"}),t.jsx(n,{variant:"outline",children:"Outline"}),t.jsx(n,{variant:"outline",children:"Outline"})]}),t.jsxs(a,{children:[t.jsx(n,{variant:"secondary",children:"Secondary"}),t.jsx(n,{variant:"secondary",children:"Secondary"}),t.jsx(n,{variant:"secondary",children:"Secondary"})]})]})},r={render:()=>t.jsxs("div",{className:"flex flex-col gap-4",children:[t.jsxs(a,{children:[t.jsx(n,{variant:"outline",size:"xs",children:"Extra Small"}),t.jsx(n,{variant:"outline",size:"xs",children:"Extra Small"})]}),t.jsxs(a,{children:[t.jsx(n,{variant:"outline",size:"sm",children:"Small"}),t.jsx(n,{variant:"outline",size:"sm",children:"Small"})]}),t.jsxs(a,{children:[t.jsx(n,{variant:"outline",children:"Default"}),t.jsx(n,{variant:"outline",children:"Default"})]}),t.jsxs(a,{children:[t.jsx(n,{variant:"outline",size:"lg",children:"Large"}),t.jsx(n,{variant:"outline",size:"lg",children:"Large"})]})]})};var l,u,d;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <ButtonGroup>
      <Button variant="outline">Left</Button>
      <Button variant="outline">Middle</Button>
      <Button variant="outline">Right</Button>
    </ButtonGroup>
}`,...(d=(u=o.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var c,B,p;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <ButtonGroup>
        <Button>Default</Button>
        <Button>Default</Button>
        <Button>Default</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline">Outline</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="outline">Outline</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="secondary">Secondary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="secondary">Secondary</Button>
      </ButtonGroup>
    </div>
}`,...(p=(B=e.parameters)==null?void 0:B.docs)==null?void 0:p.source}}};var m,x,v;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <ButtonGroup>
        <Button variant="outline" size="xs">
          Extra Small
        </Button>
        <Button variant="outline" size="xs">
          Extra Small
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline" size="sm">
          Small
        </Button>
        <Button variant="outline" size="sm">
          Small
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline">Default</Button>
        <Button variant="outline">Default</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline" size="lg">
          Large
        </Button>
        <Button variant="outline" size="lg">
          Large
        </Button>
      </ButtonGroup>
    </div>
}`,...(v=(x=r.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};const k=["Default","Variants","Sizes"];export{o as Default,r as Sizes,e as Variants,k as __namedExportsOrder,F as default};
