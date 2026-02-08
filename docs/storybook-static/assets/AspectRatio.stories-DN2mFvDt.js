import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{t as j,c as v}from"./bundle-mjs-BNe0Xlio.js";function N(...n){return j(v(n))}function t({ratio:n,className:f,...h}){return e.jsx("div",{"data-slot":"aspect-ratio",style:{"--ratio":n},className:N("relative aspect-(--ratio)",f),...h})}const R={title:"Layout/Aspect Ratio",component:t,parameters:{layout:"centered"},tags:["autodocs"]},s={render:()=>e.jsx("div",{className:"w-96",children:e.jsx(t,{ratio:16/9,children:e.jsx("div",{className:"flex h-full items-center justify-center rounded-md bg-muted",children:e.jsx("span",{className:"text-sm text-muted-foreground",children:"16:9 Aspect Ratio"})})})})},a={render:()=>e.jsxs("div",{className:"space-y-4 w-96",children:[e.jsxs("div",{children:[e.jsx("p",{className:"mb-2 text-sm font-medium",children:"1:1 (Square)"}),e.jsx(t,{ratio:1/1,children:e.jsx("div",{className:"flex h-full items-center justify-center rounded-md bg-muted",children:e.jsx("span",{className:"text-sm text-muted-foreground",children:"1:1"})})})]}),e.jsxs("div",{children:[e.jsx("p",{className:"mb-2 text-sm font-medium",children:"16:9 (Widescreen)"}),e.jsx(t,{ratio:16/9,children:e.jsx("div",{className:"flex h-full items-center justify-center rounded-md bg-muted",children:e.jsx("span",{className:"text-sm text-muted-foreground",children:"16:9"})})})]}),e.jsxs("div",{children:[e.jsx("p",{className:"mb-2 text-sm font-medium",children:"4:3 (Standard)"}),e.jsx(t,{ratio:4/3,children:e.jsx("div",{className:"flex h-full items-center justify-center rounded-md bg-muted",children:e.jsx("span",{className:"text-sm text-muted-foreground",children:"4:3"})})})]})]})},r={render:()=>e.jsx("div",{className:"w-96",children:e.jsx(t,{ratio:16/9,className:"bg-muted overflow-hidden rounded-md",children:e.jsx("div",{className:"flex h-full items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600",children:e.jsx("span",{className:"text-white text-lg font-semibold",children:"Image Placeholder"})})})})};var d,i,m;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div className="w-96">
      <AspectRatio ratio={16 / 9}>
        <div className="flex h-full items-center justify-center rounded-md bg-muted">
          <span className="text-sm text-muted-foreground">16:9 Aspect Ratio</span>
        </div>
      </AspectRatio>
    </div>
}`,...(m=(i=s.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var c,o,l;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 w-96">
      <div>
        <p className="mb-2 text-sm font-medium">1:1 (Square)</p>
        <AspectRatio ratio={1 / 1}>
          <div className="flex h-full items-center justify-center rounded-md bg-muted">
            <span className="text-sm text-muted-foreground">1:1</span>
          </div>
        </AspectRatio>
      </div>
      <div>
        <p className="mb-2 text-sm font-medium">16:9 (Widescreen)</p>
        <AspectRatio ratio={16 / 9}>
          <div className="flex h-full items-center justify-center rounded-md bg-muted">
            <span className="text-sm text-muted-foreground">16:9</span>
          </div>
        </AspectRatio>
      </div>
      <div>
        <p className="mb-2 text-sm font-medium">4:3 (Standard)</p>
        <AspectRatio ratio={4 / 3}>
          <div className="flex h-full items-center justify-center rounded-md bg-muted">
            <span className="text-sm text-muted-foreground">4:3</span>
          </div>
        </AspectRatio>
      </div>
    </div>
}`,...(l=(o=a.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};var u,x,p;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div className="w-96">
      <AspectRatio ratio={16 / 9} className="bg-muted overflow-hidden rounded-md">
        <div className="flex h-full items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
          <span className="text-white text-lg font-semibold">Image Placeholder</span>
        </div>
      </AspectRatio>
    </div>
}`,...(p=(x=r.parameters)==null?void 0:x.docs)==null?void 0:p.source}}};const y=["Default","Ratios","WithImage"];export{s as Default,a as Ratios,r as WithImage,y as __namedExportsOrder,R as default};
