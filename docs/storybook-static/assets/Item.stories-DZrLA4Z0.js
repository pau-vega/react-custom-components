import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as k}from"./index-BYe2eu78.js";import{t as L,c as V}from"./bundle-mjs-BNe0Xlio.js";import{u as _}from"./useRender-ChWxr-mw.js";import{m as O}from"./useRenderElement-DBf0zvZM.js";import{U as a,S as t}from"./user-CeDLiFHB.js";import{M as d}from"./mail-ByIE_us_.js";import{c as A}from"./createLucideIcon-0w86QR-M.js";import"./empty-BwNtW-GQ.js";import"./index-Br2IOmUs.js";import"./_commonjsHelpers-Cpj98o6Y.js";/**
 * @license lucide-react v0.550.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],E=A("log-out",C);function H(...o){return L(V(o))}var R=k("[a]:hover:bg-muted rounded-md border text-sm w-full group/item focus-visible:border-ring focus-visible:ring-ring/50 flex items-center flex-wrap outline-none transition-colors duration-100 focus-visible:ring-[3px] [a]:transition-colors",{variants:{variant:{default:"border-transparent",outline:"border-border",muted:"bg-muted/50 border-transparent"},size:{default:"gap-3.5 px-4 py-3.5",sm:"gap-2.5 px-3 py-2.5",xs:"gap-2 px-2.5 py-2 in-data-[slot=dropdown-menu-content]:p-0"}},defaultVariants:{variant:"default",size:"default"}});function s({className:o,variant:l="default",size:u="default",render:D,...U}){return _({defaultTagName:"div",props:O({className:H(R({variant:l,size:u,className:o}))},U),render:D,state:{slot:"item",variant:l,size:u}})}const Y={title:"Utilities/Item",component:s,parameters:{layout:"centered"},tags:["autodocs"]},r={render:()=>e.jsxs("div",{className:"w-64 space-y-1",children:[e.jsxs(s,{children:[e.jsx(a,{className:"mr-2"}),"Profile"]}),e.jsxs(s,{children:[e.jsx(d,{className:"mr-2"}),"Messages"]}),e.jsxs(s,{children:[e.jsx(t,{className:"mr-2"}),"Settings"]})]})},n={render:()=>e.jsxs("div",{className:"w-64 space-y-1",children:[e.jsxs(s,{"data-active":!0,children:[e.jsx(a,{className:"mr-2"}),"Profile"]}),e.jsxs(s,{children:[e.jsx(d,{className:"mr-2"}),"Messages"]}),e.jsxs(s,{children:[e.jsx(t,{className:"mr-2"}),"Settings"]})]})},i={render:()=>e.jsxs("div",{className:"w-64 space-y-1",children:[e.jsxs(s,{children:[e.jsx(a,{className:"mr-2"}),"Profile"]}),e.jsxs(s,{disabled:!0,children:[e.jsx(d,{className:"mr-2"}),"Messages (Disabled)"]}),e.jsxs(s,{children:[e.jsx(t,{className:"mr-2"}),"Settings"]})]})},m={render:()=>e.jsxs("div",{className:"w-80 space-y-1",children:[e.jsx(s,{children:e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx(a,{className:"mt-1"}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium",children:"Profile"}),e.jsx("div",{className:"text-xs text-muted-foreground",children:"View and edit your profile information"})]})]})}),e.jsx(s,{children:e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx(d,{className:"mt-1"}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium",children:"Messages"}),e.jsx("div",{className:"text-xs text-muted-foreground",children:"Check your inbox and sent messages"})]})]})}),e.jsx(s,{children:e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx(t,{className:"mt-1"}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium",children:"Settings"}),e.jsx("div",{className:"text-xs text-muted-foreground",children:"Manage your account preferences"})]})]})})]})},c={render:()=>e.jsxs("div",{className:"w-64 space-y-1",children:[e.jsxs(s,{children:[e.jsx(a,{className:"mr-2"}),"Profile"]}),e.jsxs(s,{children:[e.jsx(t,{className:"mr-2"}),"Settings"]}),e.jsxs(s,{className:"text-destructive focus:text-destructive",children:[e.jsx(E,{className:"mr-2"}),"Logout"]})]})};var x,p,v;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div className="w-64 space-y-1">
      <Item>
        <User className="mr-2" />
        Profile
      </Item>
      <Item>
        <Mail className="mr-2" />
        Messages
      </Item>
      <Item>
        <Settings className="mr-2" />
        Settings
      </Item>
    </div>
}`,...(v=(p=r.parameters)==null?void 0:p.docs)==null?void 0:v.source}}};var f,g,N;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div className="w-64 space-y-1">
      <Item data-active>
        <User className="mr-2" />
        Profile
      </Item>
      <Item>
        <Mail className="mr-2" />
        Messages
      </Item>
      <Item>
        <Settings className="mr-2" />
        Settings
      </Item>
    </div>
}`,...(N=(g=n.parameters)==null?void 0:g.docs)==null?void 0:N.source}}};var j,h,I;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div className="w-64 space-y-1">
      <Item>
        <User className="mr-2" />
        Profile
      </Item>
      <Item disabled>
        <Mail className="mr-2" />
        Messages (Disabled)
      </Item>
      <Item>
        <Settings className="mr-2" />
        Settings
      </Item>
    </div>
}`,...(I=(h=i.parameters)==null?void 0:h.docs)==null?void 0:I.source}}};var y,S,b;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div className="w-80 space-y-1">
      <Item>
        <div className="flex items-start gap-3">
          <User className="mt-1" />
          <div>
            <div className="font-medium">Profile</div>
            <div className="text-xs text-muted-foreground">View and edit your profile information</div>
          </div>
        </div>
      </Item>
      <Item>
        <div className="flex items-start gap-3">
          <Mail className="mt-1" />
          <div>
            <div className="font-medium">Messages</div>
            <div className="text-xs text-muted-foreground">Check your inbox and sent messages</div>
          </div>
        </div>
      </Item>
      <Item>
        <div className="flex items-start gap-3">
          <Settings className="mt-1" />
          <div>
            <div className="font-medium">Settings</div>
            <div className="text-xs text-muted-foreground">Manage your account preferences</div>
          </div>
        </div>
      </Item>
    </div>
}`,...(b=(S=m.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var M,w,P;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div className="w-64 space-y-1">
      <Item>
        <User className="mr-2" />
        Profile
      </Item>
      <Item>
        <Settings className="mr-2" />
        Settings
      </Item>
      <Item className="text-destructive focus:text-destructive">
        <LogOut className="mr-2" />
        Logout
      </Item>
    </div>
}`,...(P=(w=c.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};const Z=["Default","Active","Disabled","WithDescription","Destructive"];export{n as Active,r as Default,c as Destructive,i as Disabled,m as WithDescription,Z as __namedExportsOrder,Y as default};
