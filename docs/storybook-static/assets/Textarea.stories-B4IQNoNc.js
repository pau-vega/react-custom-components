import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{T as a}from"./textarea-JpHCOXce.js";import"./bundle-mjs-BNe0Xlio.js";const N={title:"Forms/Textarea",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{disabled:{control:"boolean"}}},r={args:{placeholder:"Type your message here..."},render:g=>e.jsx(a,{className:"w-80",...g})},s={render:()=>e.jsx(a,{className:"w-80",defaultValue:"This is a textarea with some default content that spans multiple lines."})},o={render:()=>e.jsx(a,{className:"w-80",placeholder:"This textarea is disabled",disabled:!0})},t={render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-80",children:[e.jsx(a,{rows:3,placeholder:"3 rows"}),e.jsx(a,{rows:5,placeholder:"5 rows"}),e.jsx(a,{rows:10,placeholder:"10 rows"})]})};var l,c,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    placeholder: "Type your message here..."
  },
  render: args => <Textarea className="w-80" {...args} />
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var n,p,i;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => <Textarea className="w-80" defaultValue="This is a textarea with some default content that spans multiple lines." />
}`,...(i=(p=s.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};var m,u,x;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <Textarea className="w-80" placeholder="This textarea is disabled" disabled />
}`,...(x=(u=o.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var h,w,T;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 w-80">
      <Textarea rows={3} placeholder="3 rows" />
      <Textarea rows={5} placeholder="5 rows" />
      <Textarea rows={10} placeholder="10 rows" />
    </div>
}`,...(T=(w=t.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};const y=["Default","WithValue","Disabled","WithRows"];export{r as Default,o as Disabled,t as WithRows,s as WithValue,y as __namedExportsOrder,N as default};
