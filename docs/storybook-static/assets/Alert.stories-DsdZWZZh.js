import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as C}from"./index-BYe2eu78.js";import{t as I,c as E}from"./bundle-mjs-BNe0Xlio.js";import{c as p}from"./createLucideIcon-0w86QR-M.js";import{I as b}from"./info-DDAsfSpc.js";import"./index-Br2IOmUs.js";import"./_commonjsHelpers-Cpj98o6Y.js";/**
 * @license lucide-react v0.550.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],m=p("circle-alert",P);/**
 * @license lucide-react v0.550.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],V=p("circle-check-big",q);/**
 * @license lucide-react v0.550.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],Y=p("circle-x",W);function u(...t){return I(E(t))}var F=C("grid gap-0.5 rounded-lg border px-4 py-3 text-left text-sm has-data-[slot=alert-action]:relative has-data-[slot=alert-action]:pr-18 has-[>svg]:grid-cols-[auto_1fr] has-[>svg]:gap-x-2.5 *:[svg]:row-span-2 *:[svg]:translate-y-0.5 *:[svg]:text-current *:[svg:not([class*='size-'])]:size-4 w-full relative group/alert",{variants:{variant:{default:"bg-card text-card-foreground",destructive:"text-destructive bg-card *:data-[slot=alert-description]:text-destructive/90 *:[svg]:text-current"}},defaultVariants:{variant:"default"}});function r({className:t,variant:a,...S}){return e.jsx("div",{"data-slot":"alert",role:"alert",className:u(F({variant:a}),t),...S})}function i({className:t,...a}){return e.jsx("div",{"data-slot":"alert-title",className:u("font-medium group-has-[>svg]/alert:col-start-2 [&_a]:hover:text-foreground [&_a]:underline [&_a]:underline-offset-3",t),...a})}function s({className:t,...a}){return e.jsx("div",{"data-slot":"alert-description",className:u("text-muted-foreground text-sm text-balance md:text-pretty [&_p:not(:last-child)]:mb-4 [&_a]:hover:text-foreground [&_a]:underline [&_a]:underline-offset-3",t),...a})}const G={title:"Feedback/Alert",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","destructive"]}}},n={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(i,{children:"Alert Title"}),e.jsx(s,{children:"This is an alert description providing more context."})]})},render:t=>e.jsx("div",{className:"w-96",children:e.jsx(r,{...t})})},l={render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-96",children:[e.jsxs(r,{children:[e.jsx(b,{className:"size-4"}),e.jsx(i,{children:"Default Alert"}),e.jsx(s,{children:"This is a default alert with an info icon."})]}),e.jsxs(r,{variant:"destructive",children:[e.jsx(m,{className:"size-4"}),e.jsx(i,{children:"Error"}),e.jsx(s,{children:"Something went wrong. Please try again."})]})]})},c={render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-96",children:[e.jsxs(r,{children:[e.jsx(b,{className:"size-4"}),e.jsx(i,{children:"Information"}),e.jsx(s,{children:"This is an informational message."})]}),e.jsxs(r,{children:[e.jsx(V,{className:"size-4"}),e.jsx(i,{children:"Success"}),e.jsx(s,{children:"Your changes have been saved successfully."})]}),e.jsxs(r,{variant:"destructive",children:[e.jsx(Y,{className:"size-4"}),e.jsx(i,{children:"Error"}),e.jsx(s,{children:"There was an error processing your request."})]}),e.jsxs(r,{children:[e.jsx(m,{className:"size-4"}),e.jsx(i,{children:"Warning"}),e.jsx(s,{children:"Please review your input before proceeding."})]})]})},o={render:()=>e.jsx("div",{className:"w-96",children:e.jsx(r,{children:e.jsx(s,{children:"This is a simple alert without a title."})})})},d={render:()=>e.jsx("div",{className:"w-96",children:e.jsxs(r,{variant:"destructive",children:[e.jsx(m,{className:"size-4"}),e.jsx(i,{children:"Error"}),e.jsx(s,{children:"Your session has expired. Please log in again."})]})})};var x,h,A;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: <>
        <AlertTitle>Alert Title</AlertTitle>
        <AlertDescription>This is an alert description providing more context.</AlertDescription>
      </>
  },
  render: args => <div className="w-96">
      <Alert {...args} />
    </div>
}`,...(A=(h=n.parameters)==null?void 0:h.docs)==null?void 0:A.source}}};var g,v,f;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 w-96">
      <Alert>
        <Info className="size-4" />
        <AlertTitle>Default Alert</AlertTitle>
        <AlertDescription>This is a default alert with an info icon.</AlertDescription>
      </Alert>
      <Alert variant="destructive">
        <AlertCircle className="size-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>Something went wrong. Please try again.</AlertDescription>
      </Alert>
    </div>
}`,...(f=(v=l.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var j,y,N;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 w-96">
      <Alert>
        <Info className="size-4" />
        <AlertTitle>Information</AlertTitle>
        <AlertDescription>This is an informational message.</AlertDescription>
      </Alert>
      <Alert>
        <CheckCircle className="size-4" />
        <AlertTitle>Success</AlertTitle>
        <AlertDescription>Your changes have been saved successfully.</AlertDescription>
      </Alert>
      <Alert variant="destructive">
        <XCircle className="size-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>There was an error processing your request.</AlertDescription>
      </Alert>
      <Alert>
        <AlertCircle className="size-4" />
        <AlertTitle>Warning</AlertTitle>
        <AlertDescription>Please review your input before proceeding.</AlertDescription>
      </Alert>
    </div>
}`,...(N=(y=c.parameters)==null?void 0:y.docs)==null?void 0:N.source}}};var T,w,D;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div className="w-96">
      <Alert>
        <AlertDescription>This is a simple alert without a title.</AlertDescription>
      </Alert>
    </div>
}`,...(D=(w=o.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var z,_,k;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div className="w-96">
      <Alert variant="destructive">
        <AlertCircle className="size-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>Your session has expired. Please log in again.</AlertDescription>
      </Alert>
    </div>
}`,...(k=(_=d.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};const H=["Default","Variants","WithIcons","SimpleAlert","Destructive"];export{n as Default,d as Destructive,o as SimpleAlert,l as Variants,c as WithIcons,H as __namedExportsOrder,G as default};
