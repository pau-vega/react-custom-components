import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{t as S,c as P}from"./bundle-mjs-BNe0Xlio.js";import{C as b}from"./chevron-right-IHdqfX8r.js";import{u as N}from"./useRender-ChWxr-mw.js";import{m as C}from"./useRenderElement-DBf0zvZM.js";import"./createLucideIcon-0w86QR-M.js";import"./index-Br2IOmUs.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./empty-BwNtW-GQ.js";function t(...e){return S(P(e))}function o({className:e,...a}){return r.jsx("nav",{"aria-label":"breadcrumb","data-slot":"breadcrumb",className:t(e),...a})}function l({className:e,...a}){return r.jsx("ol",{"data-slot":"breadcrumb-list",className:t("text-muted-foreground gap-1.5 text-sm sm:gap-2.5 flex flex-wrap items-center wrap-break-word",e),...a})}function c({className:e,...a}){return r.jsx("li",{"data-slot":"breadcrumb-item",className:t("gap-1.5 inline-flex items-center",e),...a})}function n({className:e,render:a,...i}){return N({defaultTagName:"a",props:C({className:t("hover:text-foreground transition-colors",e)},i),render:a,state:{slot:"breadcrumb-link"}})}function B({className:e,...a}){return r.jsx("span",{"data-slot":"breadcrumb-page",role:"link","aria-disabled":"true","aria-current":"page",className:t("text-foreground font-normal",e),...a})}function s({children:e,className:a,...i}){return r.jsx("li",{"data-slot":"breadcrumb-separator",role:"presentation","aria-hidden":"true",className:t("[&>svg]:size-3.5",a),...i,children:e??r.jsx(b,{})})}const _={title:"Navigation/Breadcrumb",component:o,parameters:{layout:"centered"},tags:["autodocs"]},m={render:()=>r.jsx(o,{children:r.jsxs(l,{children:[r.jsx(c,{children:r.jsx(n,{href:"/",children:"Home"})}),r.jsx(s,{}),r.jsx(c,{children:r.jsx(n,{href:"/docs",children:"Docs"})}),r.jsx(s,{}),r.jsx(c,{children:r.jsx(B,{children:"Breadcrumb"})})]})})},d={render:()=>r.jsx(o,{children:r.jsxs(l,{children:[r.jsx(c,{children:r.jsx(n,{href:"/",children:"Home"})}),r.jsx(s,{children:r.jsx(b,{className:"size-4"})}),r.jsx(c,{children:r.jsx(n,{href:"/products",children:"Products"})}),r.jsx(s,{children:r.jsx(b,{className:"size-4"})}),r.jsx(c,{children:r.jsx(B,{children:"Category"})})]})})},u={render:()=>r.jsx(o,{children:r.jsxs(l,{children:[r.jsx(c,{children:r.jsx(n,{href:"/",children:"Home"})}),r.jsx(s,{}),r.jsx(c,{children:r.jsx(n,{href:"/products",children:"Products"})}),r.jsx(s,{}),r.jsx(c,{children:r.jsx(n,{href:"/products/electronics",children:"Electronics"})}),r.jsx(s,{}),r.jsx(c,{children:r.jsx(n,{href:"/products/electronics/computers",children:"Computers"})}),r.jsx(s,{}),r.jsx(c,{children:r.jsx(B,{children:"Laptops"})})]})})};var p,h,x;m.parameters={...m.parameters,docs:{...(p=m.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
}`,...(x=(h=m.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var j,f,g;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <ChevronRight className="size-4" />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink href="/products">Products</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <ChevronRight className="size-4" />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage>Category</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
}`,...(g=(f=d.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var L,I,k;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/products">Products</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/products/electronics">Electronics</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/products/electronics/computers">Computers</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Laptops</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
}`,...(k=(I=u.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};const M=["Default","WithCustomSeparator","LongPath"];export{m as Default,u as LongPath,d as WithCustomSeparator,M as __namedExportsOrder,_ as default};
