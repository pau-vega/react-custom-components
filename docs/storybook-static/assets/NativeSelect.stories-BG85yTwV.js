import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{t as N,c as S}from"./bundle-mjs-BNe0Xlio.js";import{C as w}from"./chevron-down-B5IqHC-Q.js";import"./createLucideIcon-0w86QR-M.js";import"./index-Br2IOmUs.js";import"./_commonjsHelpers-Cpj98o6Y.js";function O(...i){return N(S(i))}function a({className:i,size:l="default",...f}){return e.jsxs("div",{className:O("group/native-select relative w-fit has-[select:disabled]:opacity-50",i),"data-slot":"native-select-wrapper","data-size":l,children:[e.jsx("select",{"data-slot":"native-select","data-size":l,className:"border-input placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 dark:hover:bg-input/50 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 h-9 w-full min-w-0 appearance-none rounded-md border bg-transparent py-1 pr-8 pl-2.5 text-sm shadow-xs transition-[color,box-shadow] select-none focus-visible:ring-3 aria-invalid:ring-3 data-[size=sm]:h-8 outline-none disabled:pointer-events-none disabled:cursor-not-allowed",...f}),e.jsx(w,{className:"text-muted-foreground top-1/2 right-2.5 size-4 -translate-y-1/2 pointer-events-none absolute select-none","aria-hidden":"true","data-slot":"native-select-icon"})]})}const C={title:"Forms/Native Select",component:a,parameters:{layout:"centered"},tags:["autodocs"]},o={render:()=>e.jsxs(a,{className:"w-48",children:[e.jsx("option",{value:"",children:"Select a fruit"}),e.jsx("option",{value:"apple",children:"Apple"}),e.jsx("option",{value:"banana",children:"Banana"}),e.jsx("option",{value:"orange",children:"Orange"}),e.jsx("option",{value:"grape",children:"Grape"})]})},n={render:()=>e.jsxs(a,{className:"w-48",children:[e.jsx("option",{value:"",children:"Select a food"}),e.jsxs("optgroup",{label:"Fruits",children:[e.jsx("option",{value:"apple",children:"Apple"}),e.jsx("option",{value:"banana",children:"Banana"}),e.jsx("option",{value:"orange",children:"Orange"})]}),e.jsxs("optgroup",{label:"Vegetables",children:[e.jsx("option",{value:"carrot",children:"Carrot"}),e.jsx("option",{value:"broccoli",children:"Broccoli"}),e.jsx("option",{value:"spinach",children:"Spinach"})]})]})},t={render:()=>e.jsxs(a,{className:"w-48",defaultValue:"banana",children:[e.jsx("option",{value:"apple",children:"Apple"}),e.jsx("option",{value:"banana",children:"Banana"}),e.jsx("option",{value:"orange",children:"Orange"})]})},r={render:()=>e.jsxs(a,{className:"w-48",disabled:!0,children:[e.jsx("option",{value:"",children:"Disabled select"}),e.jsx("option",{value:"1",children:"Option 1"}),e.jsx("option",{value:"2",children:"Option 2"})]})};var s,p,c;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => <NativeSelect className="w-48">
      <option value="">Select a fruit</option>
      <option value="apple">Apple</option>
      <option value="banana">Banana</option>
      <option value="orange">Orange</option>
      <option value="grape">Grape</option>
    </NativeSelect>
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var d,u,v;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <NativeSelect className="w-48">
      <option value="">Select a food</option>
      <optgroup label="Fruits">
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
        <option value="orange">Orange</option>
      </optgroup>
      <optgroup label="Vegetables">
        <option value="carrot">Carrot</option>
        <option value="broccoli">Broccoli</option>
        <option value="spinach">Spinach</option>
      </optgroup>
    </NativeSelect>
}`,...(v=(u=n.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};var m,g,h;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <NativeSelect className="w-48" defaultValue="banana">
      <option value="apple">Apple</option>
      <option value="banana">Banana</option>
      <option value="orange">Orange</option>
    </NativeSelect>
}`,...(h=(g=t.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var b,x,j;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <NativeSelect className="w-48" disabled>
      <option value="">Disabled select</option>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
    </NativeSelect>
}`,...(j=(x=r.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};const G=["Default","WithGroups","WithDefaultValue","Disabled"];export{o as Default,r as Disabled,t as WithDefaultValue,n as WithGroups,G as __namedExportsOrder,C as default};
