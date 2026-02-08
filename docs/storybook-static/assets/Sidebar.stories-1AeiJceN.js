import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as u}from"./index-Br2IOmUs.js";import{c as $}from"./index-BYe2eu78.js";import{t as Q,c as Z}from"./bundle-mjs-BNe0Xlio.js";import{D as ee,X as te}from"./DialogRoot-D9HhI5ZK.js";import{B as ae}from"./Button-BfmJxKsd.js";import{u as U}from"./useRender-ChWxr-mw.js";import{m as V}from"./useRenderElement-DBf0zvZM.js";import{c as ne,d as ie,e as re,f as de,g as se,h as oe}from"./DialogTitle-CV3S6r-W.js";import{T as le,a as ue,b as ce,c as pe,d as be,e as me}from"./TooltipArrow-C2T1N_KA.js";import{c as ge}from"./createLucideIcon-0w86QR-M.js";import{I as C}from"./inbox-BgpILhzA.js";import{U as X,S as G}from"./user-CeDLiFHB.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./empty-BwNtW-GQ.js";import"./useButton-D8OkA_9h.js";import"./floating-ui.utils.dom-BR__G8pa.js";import"./useStableCallback-CgA2ffE5.js";import"./useIsoLayoutEffect-B3i3ZXBb.js";import"./popupStateMapping-B2J1S55N.js";import"./index-B1jiiJTD.js";import"./index-CGqftQ-p.js";import"./useBaseUiId-Ds3dA0Bv.js";import"./detectBrowser-Cp-v3zjv.js";import"./visuallyHidden-BwafneL2.js";import"./createBaseUIEventDetails-BfRHIGKf.js";import"./useInteractions-DLoJm_bm.js";import"./useTimeout-DEENwbcq.js";import"./useOnMount-J4hPCZ9b.js";import"./event-D_tFMKDJ.js";import"./element-vmEcGomw.js";import"./constants-CRqqCNE_.js";import"./useTransitionStatus-H-zITwNf.js";import"./useAnimationFrame-BGZzLPhQ.js";import"./composite-CCzA221R.js";import"./InternalBackdrop-IVVNL8k2.js";import"./useValueAsRef-uCcb0GiG.js";import"./useOpenInteractionType-DABt_JZJ.js";import"./owner-CQsS7OFZ.js";import"./inertValue-Cg075CKc.js";import"./useSyncedFloatingRootContext-BHS4UzMP.js";import"./getEmptyRootContext-DHQYzQq2.js";import"./useRole-BXNmVtjw.js";import"./useFocus-Dd2F9aQQ.js";import"./safePolygon-B1_E0Dln.js";import"./useHoverReferenceInteraction-BCD5gqBx.js";import"./FloatingPortalLite-Boq3ScPJ.js";import"./getDisabledMountTransitionStyles-xn1qLHjW.js";import"./floating-ui.utils-CkpHT9gb.js";import"./DirectionContext-DcsIbjZ7.js";import"./useFloatingRootContext-Czq2kyX1.js";/**
 * @license lucide-react v0.550.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const he=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],z=ge("house",he);var k=768;function xe(){const[t,a]=u.useState(void 0);return u.useEffect(()=>{const n=window.matchMedia(`(max-width: ${k-1}px)`),r=()=>{a(window.innerWidth<k)};return n.addEventListener("change",r),a(window.innerWidth<k),()=>n.removeEventListener("change",r)},[]),!!t}function i(...t){return Q(Z(t))}var fe=$("focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 rounded-md border border-transparent bg-clip-padding text-sm font-medium focus-visible:ring-3 aria-invalid:ring-3 [&_svg:not([class*='size-'])]:size-4 inline-flex items-center justify-center whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none group/button select-none",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/80",outline:"border-border bg-background hover:bg-muted hover:text-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 aria-expanded:bg-muted aria-expanded:text-foreground shadow-xs",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",ghost:"hover:bg-muted hover:text-foreground dark:hover:bg-muted/50 aria-expanded:bg-muted aria-expanded:text-foreground",destructive:"bg-destructive/10 hover:bg-destructive/20 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/20 text-destructive focus-visible:border-destructive/40 dark:hover:bg-destructive/30",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 gap-1.5 px-2.5 in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",xs:"h-6 gap-1 rounded-[min(var(--radius-md),8px)] px-2 text-xs in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",sm:"h-8 gap-1 rounded-[min(var(--radius-md),10px)] px-2.5 in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5",lg:"h-10 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",icon:"size-9","icon-xs":"size-6 rounded-[min(var(--radius-md),8px)] in-data-[slot=button-group]:rounded-md [&_svg:not([class*='size-'])]:size-3","icon-sm":"size-8 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-md","icon-lg":"size-10"}},defaultVariants:{variant:"default",size:"default"}});function ve({className:t,variant:a="default",size:n="default",...r}){return e.jsx(ae,{"data-slot":"button",className:i(fe({variant:a,size:n,className:t})),...r})}function Se({...t}){return e.jsx(ee,{"data-slot":"sheet",...t})}function je({...t}){return e.jsx(se,{"data-slot":"sheet-portal",...t})}function Me({className:t,...a}){return e.jsx(oe,{"data-slot":"sheet-overlay",className:i("data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 bg-black/10 duration-100 data-ending-style:opacity-0 data-starting-style:opacity-0 supports-backdrop-filter:backdrop-blur-xs fixed inset-0 z-50",t),...a})}function we({className:t,children:a,side:n="right",showCloseButton:r=!0,...d}){return e.jsxs(je,{children:[e.jsx(Me,{}),e.jsxs(ne,{"data-slot":"sheet-content","data-side":n,className:i("bg-background data-open:animate-in data-closed:animate-out data-[side=right]:data-closed:slide-out-to-right-10 data-[side=right]:data-open:slide-in-from-right-10 data-[side=left]:data-closed:slide-out-to-left-10 data-[side=left]:data-open:slide-in-from-left-10 data-[side=top]:data-closed:slide-out-to-top-10 data-[side=top]:data-open:slide-in-from-top-10 data-closed:fade-out-0 data-open:fade-in-0 data-[side=bottom]:data-closed:slide-out-to-bottom-10 data-[side=bottom]:data-open:slide-in-from-bottom-10 fixed z-50 flex flex-col gap-4 bg-clip-padding text-sm shadow-lg transition duration-200 ease-in-out data-[side=bottom]:inset-x-0 data-[side=bottom]:bottom-0 data-[side=bottom]:h-auto data-[side=bottom]:border-t data-[side=left]:inset-y-0 data-[side=left]:left-0 data-[side=left]:h-full data-[side=left]:w-3/4 data-[side=left]:border-r data-[side=right]:inset-y-0 data-[side=right]:right-0 data-[side=right]:h-full data-[side=right]:w-3/4 data-[side=right]:border-l data-[side=top]:inset-x-0 data-[side=top]:top-0 data-[side=top]:h-auto data-[side=top]:border-b data-[side=left]:sm:max-w-sm data-[side=right]:sm:max-w-sm",t),...d,children:[a,r&&e.jsxs(ie,{"data-slot":"sheet-close",render:e.jsx(ve,{variant:"ghost",className:"absolute top-4 right-4",size:"icon-sm"}),children:[e.jsx(te,{}),e.jsx("span",{className:"sr-only",children:"Close"})]})]})]})}function Ie({className:t,...a}){return e.jsx("div",{"data-slot":"sheet-header",className:i("gap-1.5 p-4 flex flex-col",t),...a})}function ye({className:t,...a}){return e.jsx(re,{"data-slot":"sheet-title",className:i("text-foreground font-medium",t),...a})}function Be({className:t,...a}){return e.jsx(de,{"data-slot":"sheet-description",className:i("text-muted-foreground text-sm",t),...a})}function Ne({...t}){return e.jsx(le,{"data-slot":"tooltip",...t})}function _e({...t}){return e.jsx(me,{"data-slot":"tooltip-trigger",...t})}function ke({className:t,side:a="top",sideOffset:n=4,align:r="center",alignOffset:d=0,children:g,...c}){return e.jsx(ue,{children:e.jsx(ce,{align:r,alignOffset:d,side:a,sideOffset:n,className:"isolate z-50",children:e.jsxs(pe,{"data-slot":"tooltip-content",className:i("data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-[state=delayed-open]:animate-in data-[state=delayed-open]:fade-in-0 data-[state=delayed-open]:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 rounded-md px-3 py-1.5 text-xs data-[side=inline-start]:slide-in-from-right-2 data-[side=inline-end]:slide-in-from-left-2 bg-foreground text-background z-50 w-fit max-w-xs origin-(--transform-origin)",t),...c,children:[g,e.jsx(be,{className:"size-2.5 translate-y-[calc(-50%-2px)] rotate-45 rounded-[2px] data-[side=inline-end]:top-1/2! data-[side=inline-end]:-left-1 data-[side=inline-end]:-translate-y-1/2 data-[side=inline-start]:top-1/2! data-[side=inline-start]:-right-1 data-[side=inline-start]:-translate-y-1/2 bg-foreground fill-foreground z-50 data-[side=bottom]:top-1 data-[side=left]:top-1/2! data-[side=left]:-right-1 data-[side=left]:-translate-y-1/2 data-[side=right]:top-1/2! data-[side=right]:-left-1 data-[side=right]:-translate-y-1/2 data-[side=top]:-bottom-2.5"})]})})})}var Ce="sidebar_state",Ge=3600*24*7,ze="16rem",De="18rem",Ee="3rem",Te="b",q=u.createContext(null);function Y(){const t=u.use(q);if(!t)throw new Error("useSidebar must be used within a SidebarProvider.");return t}function Ae({defaultOpen:t=!0,open:a,onOpenChange:n,className:r,style:d,children:g,...c}){const b=xe(),[h,p]=u.useState(!1),[_,F]=u.useState(t),x=a??_,f=u.useCallback(l=>{const m=typeof l=="function"?l(x):l;n?n(m):F(m),document.cookie=`${Ce}=${m}; path=/; max-age=${Ge}`},[n,x]),v=u.useCallback(()=>b?p(l=>!l):f(l=>!l),[b,f,p]);u.useEffect(()=>{const l=m=>{m.key===Te&&(m.metaKey||m.ctrlKey)&&(m.preventDefault(),v())};return window.addEventListener("keydown",l),()=>window.removeEventListener("keydown",l)},[v]);const E=x?"expanded":"collapsed",J=u.useMemo(()=>({state:E,open:x,setOpen:f,isMobile:b,openMobile:h,setOpenMobile:p,toggleSidebar:v}),[E,x,f,b,h,p,v]);return e.jsx(q.Provider,{value:J,children:e.jsx("div",{"data-slot":"sidebar-wrapper",style:{"--sidebar-width":ze,"--sidebar-width-icon":Ee,...d},className:i("group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full",r),...c,children:g})})}function N({side:t="left",variant:a="sidebar",collapsible:n="offcanvas",className:r,children:d,dir:g,...c}){const{isMobile:b,state:h,openMobile:p,setOpenMobile:_}=Y();return n==="none"?e.jsx("div",{"data-slot":"sidebar",className:i("bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col",r),...c,children:d}):b?e.jsx(Se,{open:p,onOpenChange:_,...c,children:e.jsxs(we,{dir:g,"data-sidebar":"sidebar","data-slot":"sidebar","data-mobile":"true",className:"bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden",style:{"--sidebar-width":De},side:t,children:[e.jsxs(Ie,{className:"sr-only",children:[e.jsx(ye,{children:"Sidebar"}),e.jsx(Be,{children:"Displays the mobile sidebar."})]}),e.jsx("div",{className:"flex h-full w-full flex-col",children:d})]})}):e.jsxs("div",{className:"group peer text-sidebar-foreground hidden md:block","data-state":h,"data-collapsible":h==="collapsed"?n:"","data-variant":a,"data-side":t,"data-slot":"sidebar",children:[e.jsx("div",{"data-slot":"sidebar-gap",className:i("transition-[width] duration-200 ease-linear relative w-(--sidebar-width) bg-transparent","group-data-[collapsible=offcanvas]:w-0","group-data-[side=right]:rotate-180",a==="floating"||a==="inset"?"group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]":"group-data-[collapsible=icon]:w-(--sidebar-width-icon)")}),e.jsx("div",{"data-slot":"sidebar-container","data-side":t,className:i("fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear data-[side=left]:left-0 data-[side=left]:group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)] data-[side=right]:right-0 data-[side=right]:group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)] md:flex",a==="floating"||a==="inset"?"p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]":"group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",r),...c,children:e.jsx("div",{"data-sidebar":"sidebar","data-slot":"sidebar-inner",className:"bg-sidebar group-data-[variant=floating]:ring-sidebar-border group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:shadow-sm group-data-[variant=floating]:ring-1 flex size-full flex-col",children:d})})]})}function D({className:t,...a}){return e.jsx("div",{"data-slot":"sidebar-content","data-sidebar":"content",className:i("no-scrollbar gap-2 flex min-h-0 flex-1 flex-col overflow-auto group-data-[collapsible=icon]:overflow-hidden",t),...a})}function w({className:t,...a}){return e.jsx("div",{"data-slot":"sidebar-group","data-sidebar":"group",className:i("p-2 relative flex w-full min-w-0 flex-col",t),...a})}function I({className:t,render:a,...n}){return U({defaultTagName:"div",props:V({className:i("text-sidebar-foreground/70 ring-sidebar-ring h-8 rounded-md px-2 text-xs font-medium transition-[margin,opacity] duration-200 ease-linear group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0 focus-visible:ring-2 [&>svg]:size-4 flex shrink-0 items-center outline-hidden [&>svg]:shrink-0",t)},n),render:a,state:{slot:"sidebar-group-label",sidebar:"group-label"}})}function y({className:t,...a}){return e.jsx("div",{"data-slot":"sidebar-group-content","data-sidebar":"group-content",className:i("text-sm w-full",t),...a})}function B({className:t,...a}){return e.jsx("ul",{"data-slot":"sidebar-menu","data-sidebar":"menu",className:i("gap-1 flex w-full min-w-0 flex-col",t),...a})}function s({className:t,...a}){return e.jsx("li",{"data-slot":"sidebar-menu-item","data-sidebar":"menu-item",className:i("group/menu-item relative",t),...a})}var He=$("ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground gap-2 rounded-md p-2 text-left text-sm transition-[width,height,padding] group-has-data-[sidebar=menu-action]/menu-item:pr-8 group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! focus-visible:ring-2 data-active:font-medium peer/menu-button flex w-full items-center overflow-hidden outline-hidden group/menu-button disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",outline:"bg-background hover:bg-sidebar-accent hover:text-sidebar-accent-foreground shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]"},size:{default:"h-8 text-sm",sm:"h-7 text-xs",lg:"h-12 text-sm group-data-[collapsible=icon]:p-0!"}},defaultVariants:{variant:"default",size:"default"}});function o({render:t,isActive:a=!1,variant:n="default",size:r="default",tooltip:d,className:g,...c}){const{isMobile:b,state:h}=Y(),p=U({defaultTagName:"button",props:V({className:i(He({variant:n,size:r}),g)},c),render:d?_e:t,state:{slot:"sidebar-menu-button",sidebar:"menu-button",size:r,active:a}});return d?(typeof d=="string"&&(d={children:d}),e.jsxs(Ne,{children:[p,e.jsx(ke,{side:"right",align:"center",hidden:h!=="collapsed"||b,...d})]})):p}const Tt={title:"Navigation/Sidebar",component:N,parameters:{layout:"fullscreen"},tags:["autodocs"],decorators:[t=>e.jsx(Ae,{children:e.jsx(t,{})})]},S={render:()=>e.jsx(N,{children:e.jsx(D,{children:e.jsxs(w,{children:[e.jsx(I,{children:"Application"}),e.jsx(y,{children:e.jsxs(B,{children:[e.jsx(s,{children:e.jsxs(o,{children:[e.jsx(z,{}),e.jsx("span",{children:"Home"})]})}),e.jsx(s,{children:e.jsxs(o,{children:[e.jsx(C,{}),e.jsx("span",{children:"Inbox"})]})}),e.jsx(s,{children:e.jsxs(o,{children:[e.jsx(X,{}),e.jsx("span",{children:"Profile"})]})}),e.jsx(s,{children:e.jsxs(o,{children:[e.jsx(G,{}),e.jsx("span",{children:"Settings"})]})})]})})]})})})},j={render:()=>e.jsx(N,{children:e.jsxs(D,{children:[e.jsxs(w,{children:[e.jsx(I,{children:"Main"}),e.jsx(y,{children:e.jsxs(B,{children:[e.jsx(s,{children:e.jsxs(o,{children:[e.jsx(z,{}),e.jsx("span",{children:"Home"})]})}),e.jsx(s,{children:e.jsxs(o,{children:[e.jsx(C,{}),e.jsx("span",{children:"Inbox"})]})})]})})]}),e.jsxs(w,{children:[e.jsx(I,{children:"Account"}),e.jsx(y,{children:e.jsxs(B,{children:[e.jsx(s,{children:e.jsxs(o,{children:[e.jsx(X,{}),e.jsx("span",{children:"Profile"})]})}),e.jsx(s,{children:e.jsxs(o,{children:[e.jsx(G,{}),e.jsx("span",{children:"Settings"})]})})]})})]})]})})},M={render:()=>e.jsx(N,{children:e.jsx(D,{children:e.jsxs(w,{children:[e.jsx(I,{children:"Navigation"}),e.jsx(y,{children:e.jsxs(B,{children:[e.jsx(s,{children:e.jsxs(o,{isActive:!0,children:[e.jsx(z,{}),e.jsx("span",{children:"Home"})]})}),e.jsx(s,{children:e.jsxs(o,{children:[e.jsx(C,{}),e.jsx("span",{children:"Inbox"})]})}),e.jsx(s,{children:e.jsxs(o,{children:[e.jsx(G,{}),e.jsx("span",{children:"Settings"})]})})]})})]})})})};var T,A,H;S.parameters={...S.parameters,docs:{...(T=S.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Home />
                  <span>Home</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Inbox />
                  <span>Inbox</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <User />
                  <span>Profile</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Settings />
                  <span>Settings</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
}`,...(H=(A=S.parameters)==null?void 0:A.docs)==null?void 0:H.source}}};var L,O,P;j.parameters={...j.parameters,docs:{...(L=j.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Home />
                  <span>Home</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Inbox />
                  <span>Inbox</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Account</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <User />
                  <span>Profile</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Settings />
                  <span>Settings</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
}`,...(P=(O=j.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var R,W,K;M.parameters={...M.parameters,docs:{...(R=M.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton isActive>
                  <Home />
                  <span>Home</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Inbox />
                  <span>Inbox</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Settings />
                  <span>Settings</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
}`,...(K=(W=M.parameters)==null?void 0:W.docs)==null?void 0:K.source}}};const At=["Default","WithMultipleGroups","WithActiveItem"];export{S as Default,M as WithActiveItem,j as WithMultipleGroups,At as __namedExportsOrder,Tt as default};
