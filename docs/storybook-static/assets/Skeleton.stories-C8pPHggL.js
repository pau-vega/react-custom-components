import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{t as z,c as C}from"./bundle-mjs-BNe0Xlio.js";function D(...a){return z(C(a))}function s({className:a,...l}){return e.jsx("div",{"data-slot":"skeleton",className:D("bg-muted rounded-md animate-pulse",a),...l})}const T={title:"Feedback/Skeleton",component:s,parameters:{layout:"centered"},tags:["autodocs"]},r={render:()=>e.jsx(s,{className:"h-12 w-64"})},c={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(s,{className:"h-4 w-64"}),e.jsx(s,{className:"h-4 w-48"}),e.jsx(s,{className:"h-4 w-56"})]})},n={render:()=>e.jsxs("div",{className:"flex flex-col gap-3 w-80",children:[e.jsx(s,{className:"h-32 w-full rounded-lg"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(s,{className:"h-4 w-3/4"}),e.jsx(s,{className:"h-4 w-1/2"})]})]})},m={render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(s,{className:"size-12 rounded-full"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(s,{className:"h-4 w-48"}),e.jsx(s,{className:"h-4 w-32"})]})]})},o={render:()=>e.jsx("div",{className:"flex flex-col gap-3 w-96",children:Array.from({length:5}).map((a,l)=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(s,{className:"size-10 rounded-md"}),e.jsxs("div",{className:"flex-1 space-y-2",children:[e.jsx(s,{className:"h-4 w-3/4"}),e.jsx(s,{className:"h-3 w-1/2"})]})]},l))})},d={render:()=>e.jsxs("div",{className:"flex flex-col gap-2 w-full",children:[e.jsxs("div",{className:"flex gap-4",children:[e.jsx(s,{className:"h-8 flex-1"}),e.jsx(s,{className:"h-8 flex-1"}),e.jsx(s,{className:"h-8 flex-1"})]}),Array.from({length:4}).map((a,l)=>e.jsxs("div",{className:"flex gap-4",children:[e.jsx(s,{className:"h-6 flex-1"}),e.jsx(s,{className:"h-6 flex-1"}),e.jsx(s,{className:"h-6 flex-1"})]},l))]})};var t,i,x;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => <Skeleton className="h-12 w-64" />
}`,...(x=(i=r.parameters)==null?void 0:i.docs)==null?void 0:x.source}}};var N,p,f;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <Skeleton className="h-4 w-64" />
      <Skeleton className="h-4 w-48" />
      <Skeleton className="h-4 w-56" />
    </div>
}`,...(f=(p=c.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var h,u,v;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-3 w-80">
      <Skeleton className="h-32 w-full rounded-lg" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
      </div>
    </div>
}`,...(v=(u=n.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};var j,g,w;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <Skeleton className="size-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-48" />
        <Skeleton className="h-4 w-32" />
      </div>
    </div>
}`,...(w=(g=m.parameters)==null?void 0:g.docs)==null?void 0:w.source}}};var S,k,y;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-3 w-96">
      {Array.from({
      length: 5
    }).map((_, i) => <div key={i} className="flex items-center gap-4">
          <Skeleton className="size-10 rounded-md" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-3 w-1/2" />
          </div>
        </div>)}
    </div>
}`,...(y=(k=o.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var A,_,b;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-2 w-full">
      <div className="flex gap-4">
        <Skeleton className="h-8 flex-1" />
        <Skeleton className="h-8 flex-1" />
        <Skeleton className="h-8 flex-1" />
      </div>
      {Array.from({
      length: 4
    }).map((_, i) => <div key={i} className="flex gap-4">
          <Skeleton className="h-6 flex-1" />
          <Skeleton className="h-6 flex-1" />
          <Skeleton className="h-6 flex-1" />
        </div>)}
    </div>
}`,...(b=(_=d.parameters)==null?void 0:_.docs)==null?void 0:b.source}}};const F=["Default","Shapes","Card","Avatar","List","Table"];export{m as Avatar,n as Card,r as Default,o as List,c as Shapes,d as Table,F as __namedExportsOrder,T as default};
