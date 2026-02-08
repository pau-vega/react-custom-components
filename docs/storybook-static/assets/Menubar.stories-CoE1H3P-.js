import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{t as K,c as Q}from"./bundle-mjs-BNe0Xlio.js";import{r as c}from"./index-Br2IOmUs.js";import{u as X}from"./InternalBackdrop-IVVNL8k2.js";import{o as Y,n as Z,e as ee,f as ne,h as te,i as re,M as ae,a as oe,b as se,c as ie,d as ue,g as de,j as ce,k as me}from"./MenuSubmenuTrigger-m52R3Z1z.js";import{u as le}from"./useOpenInteractionType-DABt_JZJ.js";import{C as pe}from"./CompositeRoot-CQnPxTmm.js";import{u as be}from"./useBaseUiId-Ds3dA0Bv.js";import{h as Me,e as ge,a as xe,i as fe}from"./useInteractions-DLoJm_bm.js";import{C as O}from"./check-CGhur1t1.js";import{C as F}from"./chevron-right-IHdqfX8r.js";import{M as he}from"./MenuTrigger-CQPl6RYM.js";import{S as je}from"./Separator-CArUP5TU.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./popupStateMapping-B2J1S55N.js";import"./index-B1jiiJTD.js";import"./index-CGqftQ-p.js";import"./floating-ui.utils.dom-BR__G8pa.js";import"./useIsoLayoutEffect-B3i3ZXBb.js";import"./useStableCallback-CgA2ffE5.js";import"./empty-BwNtW-GQ.js";import"./detectBrowser-Cp-v3zjv.js";import"./visuallyHidden-BwafneL2.js";import"./createBaseUIEventDetails-BfRHIGKf.js";import"./useRenderElement-DBf0zvZM.js";import"./element-vmEcGomw.js";import"./constants-CRqqCNE_.js";import"./useTransitionStatus-H-zITwNf.js";import"./useAnimationFrame-BGZzLPhQ.js";import"./useOnMount-J4hPCZ9b.js";import"./useValueAsRef-uCcb0GiG.js";import"./useTimeout-DEENwbcq.js";import"./event-D_tFMKDJ.js";import"./owner-CQsS7OFZ.js";import"./useControlled-BhWCjR1C.js";import"./useCompositeListItem-2W6IGSyp.js";import"./ToolbarRootContext-Dqmc35tY.js";import"./composite-CCzA221R.js";import"./getDisabledMountTransitionStyles-xn1qLHjW.js";import"./floating-ui.utils-CkpHT9gb.js";import"./DirectionContext-DcsIbjZ7.js";import"./useFloatingRootContext-Czq2kyX1.js";import"./useHoverReferenceInteraction-BCD5gqBx.js";import"./safePolygon-B1_E0Dln.js";import"./inertValue-Cg075CKc.js";import"./CompositeList-qs3wigw5.js";import"./useSyncedFloatingRootContext-BHS4UzMP.js";import"./getEmptyRootContext-DHQYzQq2.js";import"./useRole-BXNmVtjw.js";import"./useListNavigation-B0MKivMs.js";import"./composite-RvPlRQ7I.js";import"./useTypeahead-D1TfG5s2.js";import"./useButton-D8OkA_9h.js";import"./useClick-TS9p-E59.js";import"./isElementDisabled-CwHw_lZC.js";import"./createLucideIcon-0w86QR-M.js";import"./getPseudoElementBounds-L0mGlMFL.js";import"./CompositeItem-c4Ai6C13.js";import"./useCompositeItem-CP5UoIb3.js";import"./useFocus-Dd2F9aQQ.js";const ve={hasSubmenuOpen(n){return{"data-has-submenu-open":n?"true":"false"}}},Ie=c.forwardRef(function(t,a){const{orientation:r="horizontal",loopFocus:i=!0,render:u,className:G,modal:M=!0,disabled:S=!1,id:A,...H}=t,[j,C]=c.useState(null),[d,U]=c.useState(!1),{openMethod:V,triggerProps:B,reset:T}=le(d);c.useEffect(()=>{d||T()},[d,T]),X(M&&d&&V!=="touch",j);const v=be(A),$=c.useMemo(()=>({orientation:r,modal:M,hasSubmenuOpen:d}),[r,M,d]),L=c.useRef(null),q=c.useRef(!1),J=c.useMemo(()=>({contentElement:j,setContentElement:C,setHasSubmenuOpen:U,hasSubmenuOpen:d,modal:M,disabled:S,orientation:r,allowMouseUpTriggerRef:q,rootId:v}),[j,d,M,S,r,v]);return e.jsx(Y.Provider,{value:J,children:e.jsx(Me,{children:e.jsx(we,{children:e.jsx(pe,{render:u,className:G,state:$,stateAttributesMapping:ve,refs:[a,C,L],props:[{role:"menubar",id:v},B,H],orientation:r,loopFocus:i,highlightItemOnHover:d})})})})});function we(n){const t=ge(),{events:a}=xe(),r=Z();return c.useEffect(()=>{function i(u){!u.nodeId||u.parentNodeId!==t||(u.open?r.hasSubmenuOpen||r.setHasSubmenuOpen(!0):u.reason!=="sibling-open"&&u.reason!=="list-navigation"&&r.setHasSubmenuOpen(!1))}return a.on("menuopenchange",i),()=>{a.off("menuopenchange",i)}},[a,t,r]),e.jsx(fe,{id:t,children:n.children})}function s(...n){return K(Q(n))}function Se({...n}){return e.jsx(ae,{"data-slot":"dropdown-menu",...n})}function Ce({...n}){return e.jsx(he,{"data-slot":"dropdown-menu-trigger",...n})}function W({align:n="start",alignOffset:t=0,side:a="bottom",sideOffset:r=4,className:i,...u}){return e.jsx(oe,{children:e.jsx(se,{className:"isolate z-50 outline-none",align:n,alignOffset:t,side:a,sideOffset:r,children:e.jsx(ie,{"data-slot":"dropdown-menu-content",className:s("data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ring-foreground/10 bg-popover text-popover-foreground min-w-32 rounded-md p-1 shadow-md ring-1 duration-100 data-[side=inline-start]:slide-in-from-right-2 data-[side=inline-end]:slide-in-from-left-2 z-50 max-h-(--available-height) w-(--anchor-width) origin-(--transform-origin) overflow-x-hidden overflow-y-auto outline-none data-closed:overflow-hidden",i),...u})})})}function Te({className:n,inset:t,variant:a="default",...r}){return e.jsx(ue,{"data-slot":"dropdown-menu-item","data-inset":t,"data-variant":a,className:s("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:text-destructive not-data-[variant=destructive]:focus:**:text-accent-foreground gap-2 rounded-sm px-2 py-1.5 text-sm data-inset:pl-8 [&_svg:not([class*='size-'])]:size-4 group/dropdown-menu-item relative flex cursor-default items-center outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",n),...r})}function Ne({...n}){return e.jsx(ce,{"data-slot":"dropdown-menu-sub",...n})}function Re({className:n,inset:t,children:a,...r}){return e.jsxs(me,{"data-slot":"dropdown-menu-sub-trigger","data-inset":t,className:s("focus:bg-accent focus:text-accent-foreground data-open:bg-accent data-open:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground gap-2 rounded-sm px-2 py-1.5 text-sm data-inset:pl-8 [&_svg:not([class*='size-'])]:size-4 data-popup-open:bg-accent data-popup-open:text-accent-foreground flex cursor-default items-center outline-hidden select-none [&_svg]:pointer-events-none [&_svg]:shrink-0",n),...r,children:[a,e.jsx(F,{className:"ml-auto"})]})}function ke({align:n="start",alignOffset:t=-3,side:a="right",sideOffset:r=0,className:i,...u}){return e.jsx(W,{"data-slot":"dropdown-menu-sub-content",className:s("data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ring-foreground/10 bg-popover text-popover-foreground min-w-[96px] rounded-md p-1 shadow-lg ring-1 duration-100 w-auto",i),align:n,alignOffset:t,side:a,sideOffset:r,...u})}function ze({...n}){return e.jsx(de,{"data-slot":"dropdown-menu-radio-group",...n})}function ye({className:n,...t}){return e.jsx(je,{"data-slot":"dropdown-menu-separator",className:s("bg-border -mx-1 my-1 h-px",n),...t})}function h({className:n,...t}){return e.jsx(Ie,{"data-slot":"menubar",className:s("bg-background h-9 gap-1 rounded-md border p-1 shadow-xs flex items-center",n),...t})}function l({...n}){return e.jsx(Se,{"data-slot":"menubar-menu",...n})}function p({className:n,...t}){return e.jsx(Ce,{"data-slot":"menubar-trigger",className:s("hover:bg-muted aria-expanded:bg-muted rounded-sm px-2 py-1 text-sm font-medium flex items-center outline-hidden select-none",n),...t})}function b({className:n,align:t="start",alignOffset:a=-4,sideOffset:r=8,...i}){return e.jsx(W,{"data-slot":"menubar-content",align:t,alignOffset:a,sideOffset:r,className:s("bg-popover text-popover-foreground data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ring-foreground/10 min-w-36 rounded-md p-1 shadow-md ring-1 duration-100 data-[side=inline-start]:slide-in-from-right-2 data-[side=inline-end]:slide-in-from-left-2",n),...i})}function o({className:n,inset:t,variant:a="default",...r}){return e.jsx(Te,{"data-slot":"menubar-item","data-inset":t,"data-variant":a,className:s("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:text-destructive! not-data-[variant=destructive]:focus:**:text-accent-foreground gap-2 rounded-sm px-2 py-1.5 text-sm data-disabled:opacity-50 data-inset:pl-8 [&_svg:not([class*='size-'])]:size-4 group/menubar-item",n),...r})}function w({className:n,children:t,checked:a,inset:r,...i}){return e.jsxs(ee,{"data-slot":"menubar-checkbox-item","data-inset":r,className:s("focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground gap-2 rounded-md py-1.5 pr-2 pl-8 text-sm data-inset:pl-8 relative flex cursor-default items-center outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",n),checked:a,...i,children:[e.jsx("span",{className:"left-2 size-4 [&_svg:not([class*='size-'])]:size-4 pointer-events-none absolute flex items-center justify-center",children:e.jsx(ne,{children:e.jsx(O,{})})}),t]})}function _e({...n}){return e.jsx(ze,{"data-slot":"menubar-radio-group",...n})}function I({className:n,children:t,inset:a,...r}){return e.jsxs(te,{"data-slot":"menubar-radio-item","data-inset":a,className:s("focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground gap-2 rounded-md py-1.5 pr-2 pl-8 text-sm data-disabled:opacity-50 data-inset:pl-8 [&_svg:not([class*='size-'])]:size-4 relative flex cursor-default items-center outline-hidden select-none data-disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0",n),...r,children:[e.jsx("span",{className:"left-2 size-4 [&_svg:not([class*='size-'])]:size-4 pointer-events-none absolute flex items-center justify-center",children:e.jsx(re,{children:e.jsx(O,{})})}),t]})}function m({className:n,...t}){return e.jsx(ye,{"data-slot":"menubar-separator",className:s("bg-border -mx-1 my-1 h-px",n),...t})}function Ee({...n}){return e.jsx(Ne,{"data-slot":"menubar-sub",...n})}function Pe({className:n,inset:t,...a}){return e.jsx(Re,{"data-slot":"menubar-sub-trigger","data-inset":t,className:s("focus:bg-accent focus:text-accent-foreground data-open:bg-accent data-open:text-accent-foreground gap-2 rounded-sm px-2 py-1.5 text-sm data-inset:pl-8 [&_svg:not([class*='size-'])]:size-4",n),...a})}function De({className:n,...t}){return e.jsx(ke,{"data-slot":"menubar-sub-content",className:s("bg-popover text-popover-foreground data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ring-foreground/10 min-w-32 rounded-md p-1 shadow-lg ring-1 duration-100",n),...t})}const Vn={title:"Overlays/Menubar",component:h,parameters:{layout:"centered"},tags:["autodocs"]},g={render:()=>e.jsxs(h,{children:[e.jsxs(l,{children:[e.jsx(p,{children:"File"}),e.jsxs(b,{children:[e.jsx(o,{children:"New Tab"}),e.jsx(o,{children:"New Window"}),e.jsx(m,{}),e.jsx(o,{children:"Share"}),e.jsx(m,{}),e.jsx(o,{children:"Print"})]})]}),e.jsxs(l,{children:[e.jsx(p,{children:"Edit"}),e.jsxs(b,{children:[e.jsx(o,{children:"Undo"}),e.jsx(o,{children:"Redo"}),e.jsx(m,{}),e.jsx(o,{children:"Cut"}),e.jsx(o,{children:"Copy"}),e.jsx(o,{children:"Paste"})]})]}),e.jsxs(l,{children:[e.jsx(p,{children:"View"}),e.jsxs(b,{children:[e.jsx(w,{checked:!0,children:"Show Toolbar"}),e.jsx(w,{children:"Show Sidebar"}),e.jsx(m,{}),e.jsx(o,{children:"Full Screen"})]})]})]})},x={render:()=>e.jsxs(h,{children:[e.jsxs(l,{children:[e.jsx(p,{children:"File"}),e.jsxs(b,{children:[e.jsx(o,{children:"New Tab"}),e.jsx(o,{children:"New Window"}),e.jsx(m,{}),e.jsxs(Ee,{children:[e.jsxs(Pe,{children:["Share",e.jsx(F,{className:"ml-auto"})]}),e.jsxs(De,{children:[e.jsx(o,{children:"Email link"}),e.jsx(o,{children:"Messages"}),e.jsx(o,{children:"Notes"})]})]}),e.jsx(m,{}),e.jsx(o,{children:"Print"})]})]}),e.jsxs(l,{children:[e.jsx(p,{children:"Edit"}),e.jsxs(b,{children:[e.jsx(o,{children:"Undo"}),e.jsx(o,{children:"Redo"})]})]})]})},f={render:()=>e.jsxs(h,{children:[e.jsxs(l,{children:[e.jsx(p,{children:"View"}),e.jsxs(b,{children:[e.jsxs(_e,{value:"side",children:[e.jsx(I,{value:"top",children:"Top"}),e.jsx(I,{value:"side",children:"Side"}),e.jsx(I,{value:"bottom",children:"Bottom"})]}),e.jsx(m,{}),e.jsx(w,{checked:!0,children:"Always Show Toolbar"})]})]}),e.jsxs(l,{children:[e.jsx(p,{children:"Help"}),e.jsxs(b,{children:[e.jsx(o,{children:"Documentation"}),e.jsx(o,{children:"Support"}),e.jsx(m,{}),e.jsx(o,{children:"About"})]})]})]})};var N,R,k;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>New Tab</MenubarItem>
          <MenubarItem>New Window</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Share</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Print</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Undo</MenubarItem>
          <MenubarItem>Redo</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Cut</MenubarItem>
          <MenubarItem>Copy</MenubarItem>
          <MenubarItem>Paste</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem checked>Show Toolbar</MenubarCheckboxItem>
          <MenubarCheckboxItem>Show Sidebar</MenubarCheckboxItem>
          <MenubarSeparator />
          <MenubarItem>Full Screen</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
}`,...(k=(R=g.parameters)==null?void 0:R.docs)==null?void 0:k.source}}};var z,y,_;x.parameters={...x.parameters,docs:{...(z=x.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>New Tab</MenubarItem>
          <MenubarItem>New Window</MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>
              Share
              <ChevronRight className="ml-auto" />
            </MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Email link</MenubarItem>
              <MenubarItem>Messages</MenubarItem>
              <MenubarItem>Notes</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>Print</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Undo</MenubarItem>
          <MenubarItem>Redo</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
}`,...(_=(y=x.parameters)==null?void 0:y.docs)==null?void 0:_.source}}};var E,P,D;f.parameters={...f.parameters,docs:{...(E=f.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <Menubar>
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarRadioGroup value="side">
            <MenubarRadioItem value="top">Top</MenubarRadioItem>
            <MenubarRadioItem value="side">Side</MenubarRadioItem>
            <MenubarRadioItem value="bottom">Bottom</MenubarRadioItem>
          </MenubarRadioGroup>
          <MenubarSeparator />
          <MenubarCheckboxItem checked>Always Show Toolbar</MenubarCheckboxItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Help</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Documentation</MenubarItem>
          <MenubarItem>Support</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>About</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
}`,...(D=(P=f.parameters)==null?void 0:P.docs)==null?void 0:D.source}}};const Bn=["Default","WithSubmenu","WithRadioGroup"];export{g as Default,f as WithRadioGroup,x as WithSubmenu,Bn as __namedExportsOrder,Vn as default};
