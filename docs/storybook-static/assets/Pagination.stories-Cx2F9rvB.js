import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{t as y,c as z}from"./bundle-mjs-BNe0Xlio.js";import{c as N}from"./index-BYe2eu78.js";import{C}from"./chevron-left-DUq30FUb.js";import{C as _}from"./chevron-right-IHdqfX8r.js";import{c as E}from"./createLucideIcon-0w86QR-M.js";import{B as w}from"./Button-BfmJxKsd.js";import"./index-Br2IOmUs.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useButton-D8OkA_9h.js";import"./floating-ui.utils.dom-BR__G8pa.js";import"./useStableCallback-CgA2ffE5.js";import"./empty-BwNtW-GQ.js";import"./useIsoLayoutEffect-B3i3ZXBb.js";import"./useRenderElement-DBf0zvZM.js";/**
 * @license lucide-react v0.550.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]],B=E("ellipsis",A);function o(...a){return y(z(a))}var D=N("focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 rounded-md border border-transparent bg-clip-padding text-sm font-medium focus-visible:ring-3 aria-invalid:ring-3 [&_svg:not([class*='size-'])]:size-4 inline-flex items-center justify-center whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none group/button select-none",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/80",outline:"border-border bg-background hover:bg-muted hover:text-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 aria-expanded:bg-muted aria-expanded:text-foreground shadow-xs",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",ghost:"hover:bg-muted hover:text-foreground dark:hover:bg-muted/50 aria-expanded:bg-muted aria-expanded:text-foreground",destructive:"bg-destructive/10 hover:bg-destructive/20 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/20 text-destructive focus-visible:border-destructive/40 dark:hover:bg-destructive/30",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 gap-1.5 px-2.5 in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",xs:"h-6 gap-1 rounded-[min(var(--radius-md),8px)] px-2 text-xs in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",sm:"h-8 gap-1 rounded-[min(var(--radius-md),10px)] px-2.5 in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5",lg:"h-10 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",icon:"size-9","icon-xs":"size-6 rounded-[min(var(--radius-md),8px)] in-data-[slot=button-group]:rounded-md [&_svg:not([class*='size-'])]:size-3","icon-sm":"size-8 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-md","icon-lg":"size-10"}},defaultVariants:{variant:"default",size:"default"}});function S({className:a,variant:e="default",size:r="default",...g}){return n.jsx(w,{"data-slot":"button",className:o(D({variant:e,size:r,className:a})),...g})}function l({className:a,...e}){return n.jsx("nav",{role:"navigation","aria-label":"pagination","data-slot":"pagination",className:o("mx-auto flex w-full justify-center",a),...e})}function u({className:a,...e}){return n.jsx("ul",{"data-slot":"pagination-content",className:o("gap-1 flex items-center",a),...e})}function i({...a}){return n.jsx("li",{"data-slot":"pagination-item",...a})}function t({className:a,isActive:e,size:r="icon",...g}){return n.jsx(S,{variant:e?"outline":"ghost",size:r,className:o(a),nativeButton:!1,render:n.jsx("a",{"aria-current":e?"page":void 0,"data-slot":"pagination-link","data-active":e,...g})})}function m({className:a,text:e="Previous",...r}){return n.jsxs(t,{"aria-label":"Go to previous page",size:"default",className:o("pl-2!",a),...r,children:[n.jsx(C,{"data-icon":"inline-start"}),n.jsx("span",{className:"hidden sm:block",children:e})]})}function h({className:a,text:e="Next",...r}){return n.jsxs(t,{"aria-label":"Go to next page",size:"default",className:o("pr-2!",a),...r,children:[n.jsx("span",{className:"hidden sm:block",children:e}),n.jsx(_,{"data-icon":"inline-end"})]})}function x({className:a,...e}){return n.jsxs("span",{"aria-hidden":!0,"data-slot":"pagination-ellipsis",className:o("size-9 [&_svg:not([class*='size-'])]:size-4 flex items-center justify-center",a),...e,children:[n.jsx(B,{}),n.jsx("span",{className:"sr-only",children:"More pages"})]})}const X={title:"Navigation/Pagination",component:l,parameters:{layout:"centered"},tags:["autodocs"]},s={render:()=>n.jsx(l,{children:n.jsxs(u,{children:[n.jsx(i,{children:n.jsx(m,{href:"#"})}),n.jsx(i,{children:n.jsx(t,{href:"#",children:"1"})}),n.jsx(i,{children:n.jsx(t,{href:"#",isActive:!0,children:"2"})}),n.jsx(i,{children:n.jsx(t,{href:"#",children:"3"})}),n.jsx(i,{children:n.jsx(h,{href:"#"})})]})})},d={render:()=>n.jsx(l,{children:n.jsxs(u,{children:[n.jsx(i,{children:n.jsx(m,{href:"#"})}),n.jsx(i,{children:n.jsx(t,{href:"#",children:"1"})}),n.jsx(i,{children:n.jsx(x,{})}),n.jsx(i,{children:n.jsx(t,{href:"#",children:"5"})}),n.jsx(i,{children:n.jsx(t,{href:"#",isActive:!0,children:"6"})}),n.jsx(i,{children:n.jsx(t,{href:"#",children:"7"})}),n.jsx(i,{children:n.jsx(x,{})}),n.jsx(i,{children:n.jsx(t,{href:"#",children:"20"})}),n.jsx(i,{children:n.jsx(h,{href:"#"})})]})})},c={render:()=>n.jsx(l,{children:n.jsxs(u,{children:[n.jsx(i,{children:n.jsx(m,{href:"#","aria-disabled":!0})}),n.jsx(i,{children:n.jsx(t,{href:"#",isActive:!0,children:"1"})}),n.jsx(i,{children:n.jsx(t,{href:"#",children:"2"})}),n.jsx(i,{children:n.jsx(t,{href:"#",children:"3"})}),n.jsx(i,{children:n.jsx(h,{href:"#"})})]})})};var p,P,f;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
}`,...(f=(P=s.parameters)==null?void 0:P.docs)==null?void 0:f.source}}};var v,j,b;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">5</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            6
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">7</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">20</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
}`,...(b=(j=d.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};var k,I,L;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" aria-disabled />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
}`,...(L=(I=c.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};const Y=["Default","WithEllipsis","Disabled"];export{s as Default,c as Disabled,d as WithEllipsis,Y as __namedExportsOrder,X as default};
