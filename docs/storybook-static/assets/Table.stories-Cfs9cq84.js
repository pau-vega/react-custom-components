import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{t as w,c as H}from"./bundle-mjs-BNe0Xlio.js";import{B as b}from"./badge-CsZhnkVL.js";import"./index-BYe2eu78.js";import"./useRender-ChWxr-mw.js";import"./useRenderElement-DBf0zvZM.js";import"./empty-BwNtW-GQ.js";import"./index-Br2IOmUs.js";import"./_commonjsHelpers-Cpj98o6Y.js";function r(...a){return w(H(a))}function c({className:a,...n}){return e.jsx("div",{"data-slot":"table-container",className:"relative w-full overflow-x-auto",children:e.jsx("table",{"data-slot":"table",className:r("w-full caption-bottom text-sm",a),...n})})}function m({className:a,...n}){return e.jsx("thead",{"data-slot":"table-header",className:r("[&_tr]:border-b",a),...n})}function T({className:a,...n}){return e.jsx("tbody",{"data-slot":"table-body",className:r("[&_tr:last-child]:border-0",a),...n})}function s({className:a,...n}){return e.jsx("tr",{"data-slot":"table-row",className:r("hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",a),...n})}function t({className:a,...n}){return e.jsx("th",{"data-slot":"table-head",className:r("text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0",a),...n})}function l({className:a,...n}){return e.jsx("td",{"data-slot":"table-cell",className:r("p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0",a),...n})}function R({className:a,...n}){return e.jsx("caption",{"data-slot":"table-caption",className:r("text-muted-foreground mt-4 text-sm",a),...n})}const V={title:"Data Display/Table",component:c,parameters:{layout:"centered"},tags:["autodocs"]},v=[{invoice:"INV001",status:"Paid",method:"Credit Card",amount:"$250.00"},{invoice:"INV002",status:"Pending",method:"PayPal",amount:"$150.00"},{invoice:"INV003",status:"Unpaid",method:"Bank Transfer",amount:"$350.00"},{invoice:"INV004",status:"Paid",method:"Credit Card",amount:"$450.00"},{invoice:"INV005",status:"Paid",method:"PayPal",amount:"$550.00"}],o={render:()=>e.jsxs(c,{children:[e.jsx(R,{children:"A list of your recent invoices."}),e.jsx(m,{children:e.jsxs(s,{children:[e.jsx(t,{children:"Invoice"}),e.jsx(t,{children:"Status"}),e.jsx(t,{children:"Method"}),e.jsx(t,{className:"text-right",children:"Amount"})]})}),e.jsx(T,{children:v.map(a=>e.jsxs(s,{children:[e.jsx(l,{className:"font-medium",children:a.invoice}),e.jsx(l,{children:a.status}),e.jsx(l,{children:a.method}),e.jsx(l,{className:"text-right",children:a.amount})]},a.invoice))})]})},d={render:()=>e.jsxs(c,{children:[e.jsx(m,{children:e.jsxs(s,{children:[e.jsx(t,{children:"Order"}),e.jsx(t,{children:"Status"}),e.jsx(t,{className:"text-right",children:"Total"})]})}),e.jsxs(T,{children:[e.jsxs(s,{children:[e.jsx(l,{className:"font-medium",children:"ORD001"}),e.jsx(l,{children:e.jsx(b,{children:"Completed"})}),e.jsx(l,{className:"text-right",children:"$500.00"})]}),e.jsxs(s,{children:[e.jsx(l,{className:"font-medium",children:"ORD002"}),e.jsx(l,{children:e.jsx(b,{variant:"secondary",children:"Processing"})}),e.jsx(l,{className:"text-right",children:"$300.00"})]}),e.jsxs(s,{children:[e.jsx(l,{className:"font-medium",children:"ORD003"}),e.jsx(l,{children:e.jsx(b,{variant:"destructive",children:"Cancelled"})}),e.jsx(l,{className:"text-right",children:"$200.00"})]})]})]})},i={render:()=>e.jsxs(c,{children:[e.jsx(m,{children:e.jsxs(s,{children:[e.jsx(t,{children:"Name"}),e.jsx(t,{children:"Email"}),e.jsx(t,{children:"Role"})]})}),e.jsxs(T,{children:[e.jsxs(s,{children:[e.jsx(l,{children:"John Doe"}),e.jsx(l,{children:"john@example.com"}),e.jsx(l,{children:"Admin"})]}),e.jsxs(s,{children:[e.jsx(l,{children:"Jane Smith"}),e.jsx(l,{children:"jane@example.com"}),e.jsx(l,{children:"User"})]})]})]})};var h,x,u;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map(invoice => <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.status}</TableCell>
            <TableCell>{invoice.method}</TableCell>
            <TableCell className="text-right">{invoice.amount}</TableCell>
          </TableRow>)}
      </TableBody>
    </Table>
}`,...(u=(x=o.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};var j,p,C;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Order</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Total</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">ORD001</TableCell>
          <TableCell>
            <Badge>Completed</Badge>
          </TableCell>
          <TableCell className="text-right">$500.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">ORD002</TableCell>
          <TableCell>
            <Badge variant="secondary">Processing</Badge>
          </TableCell>
          <TableCell className="text-right">$300.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">ORD003</TableCell>
          <TableCell>
            <Badge variant="destructive">Cancelled</Badge>
          </TableCell>
          <TableCell className="text-right">$200.00</TableCell>
        </TableRow>
      </TableBody>
    </Table>
}`,...(C=(p=d.parameters)==null?void 0:p.docs)==null?void 0:C.source}}};var g,N,f;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>John Doe</TableCell>
          <TableCell>john@example.com</TableCell>
          <TableCell>Admin</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Jane Smith</TableCell>
          <TableCell>jane@example.com</TableCell>
          <TableCell>User</TableCell>
        </TableRow>
      </TableBody>
    </Table>
}`,...(f=(N=i.parameters)==null?void 0:N.docs)==null?void 0:f.source}}};const k=["Default","WithBadges","Simple"];export{o as Default,i as Simple,d as WithBadges,k as __namedExportsOrder,V as default};
