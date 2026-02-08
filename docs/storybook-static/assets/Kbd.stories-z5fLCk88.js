import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{t as y,c as S}from"./bundle-mjs-BNe0Xlio.js";function P(...c){return y(S(c))}function s({className:c,...C}){return e.jsx("kbd",{"data-slot":"kbd",className:P("bg-muted text-muted-foreground in-data-[slot=tooltip-content]:bg-background/20 in-data-[slot=tooltip-content]:text-background dark:in-data-[slot=tooltip-content]:bg-background/10 h-5 w-fit min-w-5 gap-1 rounded-sm px-1 font-sans text-xs font-medium [&_svg:not([class*='size-'])]:size-3 pointer-events-none inline-flex items-center justify-center select-none",c),...C})}const E={title:"Data Display/Kbd",component:s,parameters:{layout:"centered"},tags:["autodocs"]},n={args:{children:"Ctrl"}},t={render:()=>e.jsxs("div",{className:"flex gap-2",children:[e.jsx(s,{children:"Ctrl"}),e.jsx(s,{children:"Alt"}),e.jsx(s,{children:"Shift"}),e.jsx(s,{children:"Enter"})]})},a={render:()=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(s,{children:"Ctrl"}),e.jsx("span",{children:"+"}),e.jsx(s,{children:"C"}),e.jsx("span",{className:"ml-2 text-sm text-muted-foreground",children:"Copy"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(s,{children:"Ctrl"}),e.jsx("span",{children:"+"}),e.jsx(s,{children:"V"}),e.jsx("span",{className:"ml-2 text-sm text-muted-foreground",children:"Paste"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(s,{children:"Ctrl"}),e.jsx("span",{children:"+"}),e.jsx(s,{children:"Shift"}),e.jsx("span",{children:"+"}),e.jsx(s,{children:"P"}),e.jsx("span",{className:"ml-2 text-sm text-muted-foreground",children:"Command Palette"})]})]})},r={render:()=>e.jsxs("div",{className:"max-w-md space-y-2",children:[e.jsxs("p",{className:"text-sm",children:["Press ",e.jsx(s,{children:"Ctrl"})," + ",e.jsx(s,{children:"K"})," to open the command palette."]}),e.jsxs("p",{className:"text-sm",children:["Use ",e.jsx(s,{children:"↑"})," and ",e.jsx(s,{children:"↓"})," to navigate."]}),e.jsxs("p",{className:"text-sm",children:["Press ",e.jsx(s,{children:"Enter"})," to select."]})]})},d={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(s,{children:"⌘"}),e.jsx(s,{children:"⇧"}),e.jsx(s,{children:"⌥"}),e.jsx(s,{children:"⌃"}),e.jsx(s,{children:"↑"}),e.jsx(s,{children:"↓"}),e.jsx(s,{children:"←"}),e.jsx(s,{children:"→"}),e.jsx(s,{children:"⏎"}),e.jsx(s,{children:"⌫"}),e.jsx(s,{children:"⇥"})]})};var l,i,o;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: "Ctrl"
  }
}`,...(o=(i=n.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};var m,x,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div className="flex gap-2">
      <Kbd>Ctrl</Kbd>
      <Kbd>Alt</Kbd>
      <Kbd>Shift</Kbd>
      <Kbd>Enter</Kbd>
    </div>
}`,...(p=(x=t.parameters)==null?void 0:x.docs)==null?void 0:p.source}}};var b,K,h;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <Kbd>Ctrl</Kbd>
        <span>+</span>
        <Kbd>C</Kbd>
        <span className="ml-2 text-sm text-muted-foreground">Copy</span>
      </div>
      <div className="flex items-center gap-2">
        <Kbd>Ctrl</Kbd>
        <span>+</span>
        <Kbd>V</Kbd>
        <span className="ml-2 text-sm text-muted-foreground">Paste</span>
      </div>
      <div className="flex items-center gap-2">
        <Kbd>Ctrl</Kbd>
        <span>+</span>
        <Kbd>Shift</Kbd>
        <span>+</span>
        <Kbd>P</Kbd>
        <span className="ml-2 text-sm text-muted-foreground">Command Palette</span>
      </div>
    </div>
}`,...(h=(K=a.parameters)==null?void 0:K.docs)==null?void 0:h.source}}};var j,u,g;r.parameters={...r.parameters,docs:{...(j=r.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div className="max-w-md space-y-2">
      <p className="text-sm">
        Press <Kbd>Ctrl</Kbd> + <Kbd>K</Kbd> to open the command palette.
      </p>
      <p className="text-sm">
        Use <Kbd>↑</Kbd> and <Kbd>↓</Kbd> to navigate.
      </p>
      <p className="text-sm">
        Press <Kbd>Enter</Kbd> to select.
      </p>
    </div>
}`,...(g=(u=r.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var f,N,v;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-2">
      <Kbd>⌘</Kbd>
      <Kbd>⇧</Kbd>
      <Kbd>⌥</Kbd>
      <Kbd>⌃</Kbd>
      <Kbd>↑</Kbd>
      <Kbd>↓</Kbd>
      <Kbd>←</Kbd>
      <Kbd>→</Kbd>
      <Kbd>⏎</Kbd>
      <Kbd>⌫</Kbd>
      <Kbd>⇥</Kbd>
    </div>
}`,...(v=(N=d.parameters)==null?void 0:N.docs)==null?void 0:v.source}}};const D=["Default","SingleKeys","KeyCombinations","InText","SpecialKeys"];export{n as Default,r as InText,a as KeyCombinations,t as SingleKeys,d as SpecialKeys,D as __namedExportsOrder,E as default};
