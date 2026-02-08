import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as we}from"./index-BYe2eu78.js";import{t as ye,c as Me}from"./bundle-mjs-BNe0Xlio.js";import{r as n}from"./index-Br2IOmUs.js";import{u as Pe}from"./useControlled-BhWCjR1C.js";import{u as K}from"./useIsoLayoutEffect-B3i3ZXBb.js";import{u as G}from"./useStableCallback-CgA2ffE5.js";import{u as q}from"./useRenderElement-DBf0zvZM.js";import{C as De}from"./CompositeList-qs3wigw5.js";import{u as Re}from"./DirectionContext-DcsIbjZ7.js";import{f as Te,a as Ae}from"./empty-BwNtW-GQ.js";import{A as Ee,C as Ie}from"./CompositeRoot-CQnPxTmm.js";import{o as Z}from"./owner-CQsS7OFZ.js";import{u as Ce}from"./useBaseUiId-Ds3dA0Bv.js";import{u as ke}from"./useCompositeItem-CP5UoIb3.js";import{c as ee,n as te}from"./createBaseUIEventDetails-BfRHIGKf.js";import{u as Le}from"./useButton-D8OkA_9h.js";import{b as Se,d as Ve}from"./element-vmEcGomw.js";import{u as ze}from"./useCompositeListItem-2W6IGSyp.js";import{C as ae,a as ne,b as se,c as re,d as oe}from"./card-CSzPRPCt.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./isElementDisabled-CwHw_lZC.js";import"./composite-CCzA221R.js";import"./floating-ui.utils.dom-BR__G8pa.js";import"./composite-RvPlRQ7I.js";import"./floating-ui.utils-CkpHT9gb.js";import"./event-D_tFMKDJ.js";import"./detectBrowser-Cp-v3zjv.js";import"./constants-CRqqCNE_.js";const je=n.createContext(void 0);function J(){const t=n.useContext(je);if(t===void 0)throw new Error(Te(64));return t}let Be=(function(t){return t.activationDirection="data-activation-direction",t.orientation="data-orientation",t})({});const Q={tabActivationDirection:t=>({[Be.activationDirection]:t})},He=n.forwardRef(function(r,c){const{className:C,defaultValue:a=0,onValueChange:u,orientation:o="horizontal",render:v,value:m,...g}=r,h=Re(),j=Object.hasOwn(r,"defaultValue"),P=n.useRef([]),[y,b]=n.useState(()=>new Map),[f,x]=Pe({controlled:m,default:a,name:"Tabs",state:"value"}),D=m!==void 0,[l,R]=n.useState(()=>new Map),[A,E]=n.useState("none"),N=G((s,d)=>{u==null||u(s,d),!d.isCanceled&&(x(s),E(d.activationDirection))}),p=G((s,d)=>{b(i=>{if(i.get(s)===d)return i;const T=new Map(i);return T.set(s,d),T})}),I=G((s,d)=>{b(i=>{if(!i.has(s)||i.get(s)!==d)return i;const T=new Map(i);return T.delete(s),T})}),L=n.useCallback(s=>y.get(s),[y]),z=n.useCallback(s=>{for(const d of l.values())if(s===(d==null?void 0:d.value))return d==null?void 0:d.id},[l]),B=n.useCallback(s=>{if(s===void 0)return null;for(const[d,i]of l.entries())if(i!=null&&s===(i.value??i.index))return d;return null},[l]),S=n.useMemo(()=>({direction:h,getTabElementBySelectedValue:B,getTabIdByPanelValue:z,getTabPanelIdByValue:L,onValueChange:N,orientation:o,registerMountedTabPanel:p,setTabMap:R,unregisterMountedTabPanel:I,tabActivationDirection:A,value:f}),[h,B,z,L,N,o,p,R,I,A,f]),k=n.useMemo(()=>{for(const s of l.values())if(s!=null&&s.value===f)return s},[l,f]),H=n.useMemo(()=>{for(const s of l.values())if(s!=null&&!s.disabled)return s.value},[l]);K(()=>{if(D||l.size===0)return;const s=k==null?void 0:k.disabled,d=k==null&&f!==null;if(j&&s&&f===a||!s&&!d)return;const T=H??null;f!==T&&(x(T),E("none"))},[a,H,j,D,k,E,x,l,f]);const $=q("div",r,{state:{orientation:o,tabActivationDirection:A},ref:c,props:g,stateAttributesMapping:Q});return e.jsx(je.Provider,{value:S,children:e.jsx(De,{elementsRef:P,children:$})})}),Ne=n.createContext(void 0);function Oe(){const t=n.useContext(Ne);if(t===void 0)throw new Error(Te(65));return t}const _e=n.forwardRef(function(r,c){const{className:C,disabled:a=!1,render:u,value:o,id:v,nativeButton:m=!0,...g}=r,{value:h,getTabPanelIdByValue:j,orientation:P}=J(),{activateOnFocus:y,highlightedTabIndex:b,onTabActivation:f,setHighlightedTabIndex:x,tabsListElement:D}=Oe(),l=Ce(v),R=n.useMemo(()=>({disabled:a,id:l,value:o}),[a,l,o]),{compositeProps:A,compositeRef:E,index:N}=ke({metadata:R}),p=o===h,I=n.useRef(!1);K(()=>{if(I.current){I.current=!1;return}if(!(p&&N>-1&&b!==N))return;const i=D;if(i!=null){const T=Se(Z(i));if(T&&Ve(i,T))return}a||x(N)},[p,N,b,x,a,D]);const{getButtonProps:L,buttonRef:z}=Le({disabled:a,native:m,focusableWhenDisabled:!0}),B=j(o),S=n.useRef(!1),k=n.useRef(!1);function H(i){p||a||f(o,ee(te,i.nativeEvent,void 0,{activationDirection:"none"}))}function X(i){p||(N>-1&&!a&&x(N),!a&&y&&(!S.current||S.current&&k.current)&&f(o,ee(te,i.nativeEvent,void 0,{activationDirection:"none"})))}function $(i){if(p||a)return;S.current=!0;function T(){S.current=!1,k.current=!1}(!i.button||i.button===0)&&(k.current=!0,Z(i.currentTarget).addEventListener("pointerup",T,{once:!0}))}const s=n.useMemo(()=>({disabled:a,active:p,orientation:P}),[a,p,P]);return q("button",r,{state:s,ref:[c,z,E],props:[A,{role:"tab","aria-controls":B,"aria-selected":p,id:l,onClick:H,onFocus:X,onPointerDown:$,[Ee]:p?"":void 0,onKeyDownCapture(){I.current=!0}},g,L]})});let Fe=(function(t){return t.index="data-index",t.activationDirection="data-activation-direction",t.orientation="data-orientation",t.hidden="data-hidden",t})({});const We=n.forwardRef(function(r,c){const{className:C,value:a,render:u,keepMounted:o=!1,...v}=r,{value:m,getTabIdByPanelValue:g,orientation:h,tabActivationDirection:j,registerMountedTabPanel:P,unregisterMountedTabPanel:y}=J(),b=Ce(),f=n.useMemo(()=>({id:b,value:a}),[b,a]),{ref:x,index:D}=ze({metadata:f}),l=a!==m,R=g(a),A=n.useMemo(()=>({hidden:l,orientation:h,tabActivationDirection:j}),[l,h,j]),E=q("div",r,{state:A,ref:[c,x],props:[{"aria-labelledby":R,hidden:l,id:b??void 0,role:"tabpanel",tabIndex:l?-1:0,[Fe.index]:D},v],stateAttributesMapping:Q});return K(()=>{if(!(l&&!o)&&b!=null)return P(a,b),()=>{y(a,b)}},[l,o,a,b,P,y]),!l||o?E:null}),Ge=n.forwardRef(function(r,c){const{activateOnFocus:C=!1,className:a,loopFocus:u=!0,render:o,...v}=r,{getTabElementBySelectedValue:m,onValueChange:g,orientation:h,value:j,setTabMap:P,tabActivationDirection:y}=J(),[b,f]=n.useState(0),[x,D]=n.useState(null),l=Ke(j,h,x,m),R=G((p,I)=>{if(p!==j){const L=l(p);I.activationDirection=L,g(p,I)}}),A=n.useMemo(()=>({orientation:h,tabActivationDirection:y}),[h,y]),E={"aria-orientation":h==="vertical"?"vertical":void 0,role:"tablist"},N=n.useMemo(()=>({activateOnFocus:C,highlightedTabIndex:b,onTabActivation:R,setHighlightedTabIndex:f,tabsListElement:x,value:j}),[C,b,R,f,x,j]);return e.jsx(Ne.Provider,{value:N,children:e.jsx(Ie,{render:o,className:a,state:A,refs:[c,D],props:[E,v],stateAttributesMapping:Q,highlightedIndex:b,enableHomeAndEndKeys:!0,loopFocus:u,orientation:h,onHighlightedIndexChange:f,onMapChange:P,disabledIndices:Ae})})});function ie(t,r){const{left:c,top:C}=t.getBoundingClientRect(),{left:a,top:u}=r.getBoundingClientRect(),o=c-a,v=C-u;return{left:o,top:v}}function Ke(t,r,c,C){const[a,u]=n.useState(null);return K(()=>{if(t==null||c==null){u(null);return}const o=C(t);if(o==null){u(null);return}const{left:v,top:m}=ie(o,c);u(r==="horizontal"?v:m)},[r,C,c,t]),n.useCallback(o=>{if(o===t)return"none";if(o==null)return u(null),"none";if(o!=null&&c!=null){const v=C(o);if(v!=null){const{left:m,top:g}=ie(v,c);if(a==null)return u(r==="horizontal"?m:g),"none";if(r==="horizontal"){if(m<a)return u(m),"left";if(m>a)return u(m),"right"}else{if(g<a)return u(g),"up";if(g>a)return u(g),"down"}}}return"none"},[C,r,a,c,t])}function U(...t){return ye(Me(t))}function V({className:t,orientation:r="horizontal",...c}){return e.jsx(He,{"data-slot":"tabs","data-orientation":r,className:U("gap-2 group/tabs flex data-horizontal:flex-col",t),...c})}var Ue=we("rounded-lg p-[3px] group-data-horizontal/tabs:h-9 data-[variant=line]:rounded-none group/tabs-list text-muted-foreground inline-flex w-fit items-center justify-center group-data-vertical/tabs:h-fit group-data-vertical/tabs:flex-col",{variants:{variant:{default:"bg-muted",line:"gap-1 bg-transparent"}},defaultVariants:{variant:"default"}});function Y({className:t,variant:r="default",...c}){return e.jsx(Ge,{"data-slot":"tabs-list","data-variant":r,className:U(Ue({variant:r}),t),...c})}function w({className:t,...r}){return e.jsx(_e,{"data-slot":"tabs-trigger",className:U("gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none [&_svg:not([class*='size-'])]:size-4 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring text-foreground/60 hover:text-foreground dark:text-muted-foreground dark:hover:text-foreground relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center whitespace-nowrap transition-all group-data-vertical/tabs:w-full group-data-vertical/tabs:justify-start focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0","group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-active:bg-transparent dark:group-data-[variant=line]/tabs-list:data-active:border-transparent dark:group-data-[variant=line]/tabs-list:data-active:bg-transparent","data-active:bg-background dark:data-active:text-foreground dark:data-active:border-input dark:data-active:bg-input/30 data-active:text-foreground","after:bg-foreground after:absolute after:opacity-0 after:transition-opacity group-data-horizontal/tabs:after:inset-x-0 group-data-horizontal/tabs:after:bottom-[-5px] group-data-horizontal/tabs:after:h-0.5 group-data-vertical/tabs:after:inset-y-0 group-data-vertical/tabs:after:-right-1 group-data-vertical/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:data-active:after:opacity-100",t),...r})}function M({className:t,...r}){return e.jsx(We,{"data-slot":"tabs-content",className:U("text-sm flex-1 outline-none",t),...r})}const Nt={title:"Navigation/Tabs",component:V,parameters:{layout:"centered"},tags:["autodocs"]},O={render:()=>e.jsxs(V,{defaultValue:"tab1",className:"w-96",children:[e.jsxs(Y,{children:[e.jsx(w,{value:"tab1",children:"Account"}),e.jsx(w,{value:"tab2",children:"Password"})]}),e.jsx(M,{value:"tab1",children:e.jsx("p",{className:"text-sm",children:"Make changes to your account here."})}),e.jsx(M,{value:"tab2",children:e.jsx("p",{className:"text-sm",children:"Change your password here."})})]})},_={render:()=>e.jsxs(V,{defaultValue:"account",className:"w-[400px]",children:[e.jsxs(Y,{className:"grid w-full grid-cols-2",children:[e.jsx(w,{value:"account",children:"Account"}),e.jsx(w,{value:"password",children:"Password"})]}),e.jsx(M,{value:"account",children:e.jsxs(ae,{children:[e.jsxs(ne,{children:[e.jsx(se,{children:"Account"}),e.jsx(re,{children:"Make changes to your account here. Click save when you're done."})]}),e.jsx(oe,{className:"space-y-2",children:e.jsx("p",{className:"text-sm",children:"Account settings content goes here."})})]})}),e.jsx(M,{value:"password",children:e.jsxs(ae,{children:[e.jsxs(ne,{children:[e.jsx(se,{children:"Password"}),e.jsx(re,{children:"Change your password here. After saving, you'll be logged out."})]}),e.jsx(oe,{className:"space-y-2",children:e.jsx("p",{className:"text-sm",children:"Password settings content goes here."})})]})})]})},F={render:()=>e.jsxs(V,{defaultValue:"overview",className:"w-[500px]",children:[e.jsxs(Y,{children:[e.jsx(w,{value:"overview",children:"Overview"}),e.jsx(w,{value:"analytics",children:"Analytics"}),e.jsx(w,{value:"reports",children:"Reports"}),e.jsx(w,{value:"notifications",children:"Notifications"})]}),e.jsx(M,{value:"overview",children:e.jsxs("div",{className:"p-4 border rounded-md",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Overview"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Dashboard overview content."})]})}),e.jsx(M,{value:"analytics",children:e.jsxs("div",{className:"p-4 border rounded-md",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Analytics"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Analytics data and charts."})]})}),e.jsx(M,{value:"reports",children:e.jsxs("div",{className:"p-4 border rounded-md",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Reports"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Generated reports and exports."})]})}),e.jsx(M,{value:"notifications",children:e.jsxs("div",{className:"p-4 border rounded-md",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Notifications"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Notification preferences."})]})})]})},W={render:()=>e.jsxs(V,{defaultValue:"tab1",className:"w-96",children:[e.jsxs(Y,{children:[e.jsx(w,{value:"tab1",children:"Enabled"}),e.jsx(w,{value:"tab2",disabled:!0,children:"Disabled"}),e.jsx(w,{value:"tab3",children:"Enabled"})]}),e.jsx(M,{value:"tab1",children:e.jsx("p",{className:"text-sm",children:"First tab content."})}),e.jsx(M,{value:"tab3",children:e.jsx("p",{className:"text-sm",children:"Third tab content."})})]})};var le,ce,de;O.parameters={...O.parameters,docs:{...(le=O.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="tab1" className="w-96">
      <TabsList>
        <TabsTrigger value="tab1">Account</TabsTrigger>
        <TabsTrigger value="tab2">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <p className="text-sm">Make changes to your account here.</p>
      </TabsContent>
      <TabsContent value="tab2">
        <p className="text-sm">Change your password here.</p>
      </TabsContent>
    </Tabs>
}`,...(de=(ce=O.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var ue,be,fe;_.parameters={..._.parameters,docs:{...(ue=_.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>Make changes to your account here. Click save when you're done.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-sm">Account settings content goes here.</p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>Change your password here. After saving, you'll be logged out.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-sm">Password settings content goes here.</p>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
}`,...(fe=(be=_.parameters)==null?void 0:be.docs)==null?void 0:fe.source}}};var me,pe,ve;F.parameters={...F.parameters,docs:{...(me=F.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="overview" className="w-[500px]">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="reports">Reports</TabsTrigger>
        <TabsTrigger value="notifications">Notifications</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <div className="p-4 border rounded-md">
          <h3 className="font-semibold mb-2">Overview</h3>
          <p className="text-sm text-muted-foreground">Dashboard overview content.</p>
        </div>
      </TabsContent>
      <TabsContent value="analytics">
        <div className="p-4 border rounded-md">
          <h3 className="font-semibold mb-2">Analytics</h3>
          <p className="text-sm text-muted-foreground">Analytics data and charts.</p>
        </div>
      </TabsContent>
      <TabsContent value="reports">
        <div className="p-4 border rounded-md">
          <h3 className="font-semibold mb-2">Reports</h3>
          <p className="text-sm text-muted-foreground">Generated reports and exports.</p>
        </div>
      </TabsContent>
      <TabsContent value="notifications">
        <div className="p-4 border rounded-md">
          <h3 className="font-semibold mb-2">Notifications</h3>
          <p className="text-sm text-muted-foreground">Notification preferences.</p>
        </div>
      </TabsContent>
    </Tabs>
}`,...(ve=(pe=F.parameters)==null?void 0:pe.docs)==null?void 0:ve.source}}};var ge,he,xe;W.parameters={...W.parameters,docs:{...(ge=W.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="tab1" className="w-96">
      <TabsList>
        <TabsTrigger value="tab1">Enabled</TabsTrigger>
        <TabsTrigger value="tab2" disabled>
          Disabled
        </TabsTrigger>
        <TabsTrigger value="tab3">Enabled</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <p className="text-sm">First tab content.</p>
      </TabsContent>
      <TabsContent value="tab3">
        <p className="text-sm">Third tab content.</p>
      </TabsContent>
    </Tabs>
}`,...(xe=(he=W.parameters)==null?void 0:he.docs)==null?void 0:xe.source}}};const wt=["Default","WithCards","Multiple","Disabled"];export{O as Default,W as Disabled,F as Multiple,_ as WithCards,wt as __namedExportsOrder,Nt as default};
