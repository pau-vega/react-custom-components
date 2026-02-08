import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as a}from"./button-BPsk-mQ5.js";import{r as j}from"./index-Br2IOmUs.js";import{D as N,u as D}from"./DirectionContext-DcsIbjZ7.js";import"./index-BYe2eu78.js";import"./bundle-mjs-BNe0Xlio.js";import"./Button-BfmJxKsd.js";import"./useButton-D8OkA_9h.js";import"./floating-ui.utils.dom-BR__G8pa.js";import"./useStableCallback-CgA2ffE5.js";import"./empty-BwNtW-GQ.js";import"./useIsoLayoutEffect-B3i3ZXBb.js";import"./useRenderElement-DBf0zvZM.js";import"./_commonjsHelpers-Cpj98o6Y.js";const n=function(t){const{direction:d="ltr"}=t,g=j.useMemo(()=>({direction:d}),[d]);return e.jsx(N.Provider,{value:g,children:t.children})},V={title:"Layout/Direction",component:n,parameters:{layout:"centered"},tags:["autodocs"]};function b(){const{dir:r,setDirection:t}=D();return e.jsxs("div",{className:"space-y-4 w-96",dir:r,children:[e.jsx("div",{className:"flex items-center justify-between rounded-lg border p-4",children:e.jsxs("span",{className:"text-sm",children:["Current direction: ",r]})}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(a,{onClick:()=>t("ltr"),variant:r==="ltr"?"default":"outline",children:"LTR"}),e.jsx(a,{onClick:()=>t("rtl"),variant:r==="rtl"?"default":"outline",children:"RTL"})]}),e.jsx("div",{className:"rounded-lg border p-4",children:e.jsx("p",{className:"text-sm",children:"This is a demonstration of the Direction component. The text direction changes based on the selected option."})})]})}const s={render:()=>e.jsx(n,{children:e.jsx(b,{})})},i={render:()=>e.jsx(n,{dir:"ltr",children:e.jsx("div",{className:"w-96 space-y-4",dir:"ltr",children:e.jsxs("div",{className:"rounded-lg border p-4",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Left to Right"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"This content is displayed in left-to-right direction, which is the default for most languages."})]})})})},o={render:()=>e.jsx(n,{dir:"rtl",children:e.jsx("div",{className:"w-96 space-y-4",dir:"rtl",children:e.jsxs("div",{className:"rounded-lg border p-4",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Right to Left"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"هذا المحتوى معروض في اتجاه من اليمين إلى اليسار، وهو الافتراضي للغات مثل العربية والعبرية."})]})})})};var c,l,m;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <DirectionProvider>
      <DirectionDemo />
    </DirectionProvider>
}`,...(m=(l=s.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var p,u,h;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <DirectionProvider dir="ltr">
      <div className="w-96 space-y-4" dir="ltr">
        <div className="rounded-lg border p-4">
          <h3 className="font-semibold mb-2">Left to Right</h3>
          <p className="text-sm text-muted-foreground">
            This content is displayed in left-to-right direction, which is the default for most languages.
          </p>
        </div>
      </div>
    </DirectionProvider>
}`,...(h=(u=i.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var x,f,v;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <DirectionProvider dir="rtl">
      <div className="w-96 space-y-4" dir="rtl">
        <div className="rounded-lg border p-4">
          <h3 className="font-semibold mb-2">Right to Left</h3>
          <p className="text-sm text-muted-foreground">
            هذا المحتوى معروض في اتجاه من اليمين إلى اليسار، وهو الافتراضي للغات مثل العربية والعبرية.
          </p>
        </div>
      </div>
    </DirectionProvider>
}`,...(v=(f=o.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const q=["Default","LTR","RTL"];export{s as Default,i as LTR,o as RTL,q as __namedExportsOrder,V as default};
