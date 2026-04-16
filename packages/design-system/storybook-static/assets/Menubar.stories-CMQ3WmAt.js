import{j as e}from"./jsx-runtime-BYYWji4R.js";import{r as u}from"./index-ClcD9ViR.js";import{c as Qe}from"./index-BpI74HIb.js";import{u as Xe}from"./index-CZKF78Oq.js";import{c as C}from"./index-DW48STyt.js";import{u as Je}from"./index-Bew1Yeam.js";import{c as Ye}from"./index-CWz5EflU.js";import{u as L}from"./index-CaubhJIw.js";import{R as er,A as rr,P as nr,C as ar,I as tr,b as or,S as sr,d as ur,e as ir,a as dr,h as cr,g as lr,f as br,c as pr,G as mr,L as Mr,i as hr}from"./index-CqCTsHsz.js";import{R as xr,I as gr,c as Me}from"./index-CGGLQkrZ.js";import{P as he}from"./index-C59fdHCL.js";import{u as xe}from"./index-B0ATiKj9.js";import{J as fr,a1 as Ir,j as jr}from"./icons-BJRAOfCp.js";import{c as v}from"./utils-CDN07tui.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-CyBucMil.js";import"./index-CafsI6Qv.js";import"./index-guOESLwJ.js";import"./index-kkVLZR_L.js";import"./index-CDv6ZuJx.js";import"./tslib.es6-BUas5LQb.js";import"./index-DTBqWj02.js";import"./index-Drr-0Uuw.js";import"./index-Jh3OPyOv.js";import"./index-BntbZM61.js";import"./index-B2NcgzwI.js";import"./icon-CPjmVJEk.js";var E="Menubar",[U,Sr,yr]=Qe(E),[ge]=Ye(E,[yr,Me]),m=pr(),fe=Me(),[_r,z]=ge(E),Ie=u.forwardRef((r,t)=>{const{__scopeMenubar:n,value:o,onValueChange:s,defaultValue:I,loop:M=!0,dir:b,...i}=r,j=Xe(b),c=fe(n),[y,h]=xe({prop:o,onChange:s,defaultProp:I??"",caller:E}),[_,p]=u.useState(null);return e.jsx(_r,{scope:n,value:y,onMenuOpen:u.useCallback(S=>{h(S),p(S)},[h]),onMenuClose:u.useCallback(()=>h(""),[h]),onMenuToggle:u.useCallback(S=>{h(Z=>Z?"":S),p(S)},[h]),dir:j,loop:M,children:e.jsx(U.Provider,{scope:n,children:e.jsx(U.Slot,{scope:n,children:e.jsx(xr,{asChild:!0,...c,orientation:"horizontal",loop:M,dir:j,currentTabStopId:_,onCurrentTabStopIdChange:p,children:e.jsx(he.div,{role:"menubar",...i,ref:t})})})})})});Ie.displayName=E;var H="MenubarMenu",[vr,je]=ge(H),Se=r=>{const{__scopeMenubar:t,value:n,...o}=r,s=L(),I=n||s||"LEGACY_REACT_AUTO_VALUE",M=z(H,t),b=m(t),i=u.useRef(null),j=u.useRef(!1),c=M.value===I;return u.useEffect(()=>{c||(j.current=!1)},[c]),e.jsx(vr,{scope:t,value:I,triggerId:L(),triggerRef:i,contentId:L(),wasKeyboardTriggerOpenRef:j,children:e.jsx(er,{...b,open:c,onOpenChange:y=>{y||M.onMenuClose()},modal:!1,dir:M.dir,...o})})};Se.displayName=H;var $="MenubarTrigger",ye=u.forwardRef((r,t)=>{const{__scopeMenubar:n,disabled:o=!1,...s}=r,I=fe(n),M=m(n),b=z($,n),i=je($,n),j=u.useRef(null),c=Je(t,j,i.triggerRef),[y,h]=u.useState(!1),_=b.value===i.value;return e.jsx(U.ItemSlot,{scope:n,value:i.value,disabled:o,children:e.jsx(gr,{asChild:!0,...I,focusable:!o,tabStopId:i.value,children:e.jsx(rr,{asChild:!0,...M,children:e.jsx(he.button,{type:"button",role:"menuitem",id:i.triggerId,"aria-haspopup":"menu","aria-expanded":_,"aria-controls":_?i.contentId:void 0,"data-highlighted":y?"":void 0,"data-state":_?"open":"closed","data-disabled":o?"":void 0,disabled:o,...s,ref:c,onPointerDown:C(r.onPointerDown,p=>{!o&&p.button===0&&p.ctrlKey===!1&&(b.onMenuOpen(i.value),_||p.preventDefault())}),onPointerEnter:C(r.onPointerEnter,()=>{var S;!!b.value&&!_&&(b.onMenuOpen(i.value),(S=j.current)==null||S.focus())}),onKeyDown:C(r.onKeyDown,p=>{o||(["Enter"," "].includes(p.key)&&b.onMenuToggle(i.value),p.key==="ArrowDown"&&b.onMenuOpen(i.value),["Enter"," ","ArrowDown"].includes(p.key)&&(i.wasKeyboardTriggerOpenRef.current=!0,p.preventDefault()))}),onFocus:C(r.onFocus,()=>h(!0)),onBlur:C(r.onBlur,()=>h(!1))})})})})});ye.displayName=$;var Cr="MenubarPortal",_e=r=>{const{__scopeMenubar:t,...n}=r,o=m(t);return e.jsx(nr,{...o,...n})};_e.displayName=Cr;var q="MenubarContent",ve=u.forwardRef((r,t)=>{const{__scopeMenubar:n,align:o="start",...s}=r,I=m(n),M=z(q,n),b=je(q,n),i=Sr(n),j=u.useRef(!1);return e.jsx(ar,{id:b.contentId,"aria-labelledby":b.triggerId,"data-radix-menubar-content":"",...I,...s,ref:t,align:o,onCloseAutoFocus:C(r.onCloseAutoFocus,c=>{var h;!!!M.value&&!j.current&&((h=b.triggerRef.current)==null||h.focus()),j.current=!1,c.preventDefault()}),onFocusOutside:C(r.onFocusOutside,c=>{const y=c.target;i().some(_=>{var p;return(p=_.ref.current)==null?void 0:p.contains(y)})&&c.preventDefault()}),onInteractOutside:C(r.onInteractOutside,()=>{j.current=!0}),onEntryFocus:c=>{b.wasKeyboardTriggerOpenRef.current||c.preventDefault()},onKeyDown:C(r.onKeyDown,c=>{if(["ArrowRight","ArrowLeft"].includes(c.key)){const y=c.target,h=y.hasAttribute("data-radix-menubar-subtrigger"),_=y.closest("[data-radix-menubar-content]")!==c.currentTarget,S=(M.dir==="rtl"?"ArrowRight":"ArrowLeft")===c.key;if(!S&&h||_&&S)return;let T=i().filter(B=>!B.disabled).map(B=>B.value);S&&T.reverse();const Q=T.indexOf(b.value);T=M.loop?Gr(T,Q+1):T.slice(Q+1);const[X]=T;X&&M.onMenuOpen(X)}},{checkForDefaultPrevented:!1}),style:{...r.style,"--radix-menubar-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-menubar-content-available-width":"var(--radix-popper-available-width)","--radix-menubar-content-available-height":"var(--radix-popper-available-height)","--radix-menubar-trigger-width":"var(--radix-popper-anchor-width)","--radix-menubar-trigger-height":"var(--radix-popper-anchor-height)"}})});ve.displayName=q;var Nr="MenubarGroup",Ce=u.forwardRef((r,t)=>{const{__scopeMenubar:n,...o}=r,s=m(n);return e.jsx(mr,{...s,...o,ref:t})});Ce.displayName=Nr;var wr="MenubarLabel",Ne=u.forwardRef((r,t)=>{const{__scopeMenubar:n,...o}=r,s=m(n);return e.jsx(Mr,{...s,...o,ref:t})});Ne.displayName=wr;var Rr="MenubarItem",we=u.forwardRef((r,t)=>{const{__scopeMenubar:n,...o}=r,s=m(n);return e.jsx(tr,{...s,...o,ref:t})});we.displayName=Rr;var Tr="MenubarCheckboxItem",Re=u.forwardRef((r,t)=>{const{__scopeMenubar:n,...o}=r,s=m(n);return e.jsx(br,{...s,...o,ref:t})});Re.displayName=Tr;var Pr="MenubarRadioGroup",Te=u.forwardRef((r,t)=>{const{__scopeMenubar:n,...o}=r,s=m(n);return e.jsx(dr,{...s,...o,ref:t})});Te.displayName=Pr;var kr="MenubarRadioItem",Pe=u.forwardRef((r,t)=>{const{__scopeMenubar:n,...o}=r,s=m(n);return e.jsx(cr,{...s,...o,ref:t})});Pe.displayName=kr;var Ar="MenubarItemIndicator",ke=u.forwardRef((r,t)=>{const{__scopeMenubar:n,...o}=r,s=m(n);return e.jsx(lr,{...s,...o,ref:t})});ke.displayName=Ar;var Er="MenubarSeparator",Ae=u.forwardRef((r,t)=>{const{__scopeMenubar:n,...o}=r,s=m(n);return e.jsx(or,{...s,...o,ref:t})});Ae.displayName=Er;var Or="MenubarArrow",Fr=u.forwardRef((r,t)=>{const{__scopeMenubar:n,...o}=r,s=m(n);return e.jsx(hr,{...s,...o,ref:t})});Fr.displayName=Or;var Ee="MenubarSub",Oe=r=>{const{__scopeMenubar:t,children:n,open:o,onOpenChange:s,defaultOpen:I}=r,M=m(t),[b,i]=xe({prop:o,defaultProp:I??!1,onChange:s,caller:Ee});return e.jsx(sr,{...M,open:b,onOpenChange:i,children:n})};Oe.displayName=Ee;var Dr="MenubarSubTrigger",Fe=u.forwardRef((r,t)=>{const{__scopeMenubar:n,...o}=r,s=m(n);return e.jsx(ur,{"data-radix-menubar-subtrigger":"",...s,...o,ref:t})});Fe.displayName=Dr;var Vr="MenubarSubContent",De=u.forwardRef((r,t)=>{const{__scopeMenubar:n,...o}=r,s=m(n);return e.jsx(ir,{...s,"data-radix-menubar-content":"",...o,ref:t,style:{...r.style,"--radix-menubar-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-menubar-content-available-width":"var(--radix-popper-available-width)","--radix-menubar-content-available-height":"var(--radix-popper-available-height)","--radix-menubar-trigger-width":"var(--radix-popper-anchor-width)","--radix-menubar-trigger-height":"var(--radix-popper-anchor-height)"}})});De.displayName=Vr;function Gr(r,t){return r.map((n,o)=>r[(t+o)%r.length])}var Ve=Ie,Br=Se,Ge=ye,Be=_e,Le=ve,Lr=Ce,Ue=Ne,$e=we,qe=Re,Ur=Te,Ke=Pe,We=ke,ze=Ae,$r=Oe,He=Fe,Ze=De;function f({...r}){return e.jsx(Br,{...r})}function J({...r}){return e.jsx(Lr,{...r})}function Y({...r}){return e.jsx(Be,{...r})}function K({...r}){return e.jsx(Ur,{...r})}function k({...r}){return e.jsx($r,{"data-slot":"menubar-sub",...r})}const N=u.forwardRef(({className:r,...t},n)=>e.jsx(Ve,{ref:n,className:v("flex h-10 items-center space-x-1 rounded-md border border-border-subtle bg-transparent p-1",r),...t}));N.displayName=Ve.displayName;const x=u.forwardRef(({className:r,...t},n)=>e.jsx(Ge,{ref:n,className:v("flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-primary/10 data-[state=open]:bg-primary/10",r),...t}));x.displayName=Ge.displayName;const w=u.forwardRef(({className:r,inset:t,children:n,...o},s)=>e.jsxs(He,{ref:s,className:v("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-primary/10 data-[state=open]:bg-primary/10",t&&"pl-8",r),...o,children:[n,e.jsx(fr,{className:"ml-auto h-4 w-4"})]}));w.displayName=He.displayName;const R=u.forwardRef(({className:r,...t},n)=>e.jsx(Ze,{ref:n,className:v("z-50 min-w-[8rem] overflow-hidden rounded-md border border-border-subtle bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-menubar-content-transform-origin]",r),...t}));R.displayName=Ze.displayName;const g=u.forwardRef(({className:r,align:t="start",alignOffset:n=-4,sideOffset:o=8,...s},I)=>e.jsx(Be,{children:e.jsx(Le,{ref:I,align:t,alignOffset:n,sideOffset:o,className:v("z-50 min-w-[12rem] overflow-hidden rounded-md border border-border-subtle bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-menubar-content-transform-origin]",r),...s})}));g.displayName=Le.displayName;const a=u.forwardRef(({className:r,inset:t,...n},o)=>e.jsx($e,{ref:o,className:v("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-primary/10 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[disabled]:text-primary/40",t&&"pl-8",r),...n}));a.displayName=$e.displayName;const A=u.forwardRef(({className:r,children:t,checked:n,...o},s)=>e.jsxs(qe,{ref:s,className:v("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-primary/10 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:rounded-none data-[state=checked]:border-b data-[state=checked]:border-primary-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[disabled]:text-primary/40",r),checked:n,...o,children:[e.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:e.jsx(We,{children:e.jsx(jr,{className:"h-4 w-4"})})}),t]}));A.displayName=qe.displayName;const P=u.forwardRef(({className:r,children:t,...n},o)=>e.jsxs(Ke,{ref:o,className:v("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-primary/10 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:rounded-none data-[state=checked]:border-b data-[state=checked]:border-primary-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[disabled]:text-primary/40",r),...n,children:[e.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:e.jsx(We,{children:e.jsx(Ir,{className:"h-2 w-2"})})}),t]}));P.displayName=Ke.displayName;const W=u.forwardRef(({className:r,inset:t,...n},o)=>e.jsx(Ue,{ref:o,className:v("px-2 py-1.5 text-sm font-semibold",t&&"pl-8",r),...n}));W.displayName=Ue.displayName;const d=u.forwardRef(({className:r,...t},n)=>e.jsx(ze,{ref:n,className:v("-mx-1 my-1 h-px bg-primary/20",r),...t}));d.displayName=ze.displayName;const l=({className:r,...t})=>e.jsx("span",{className:v("ml-auto text-xs tracking-widest text-muted-foreground",r),...t});l.displayname="MenubarShortcut";try{N.displayName="Menubar",N.__docgenInfo={description:"",displayName:"Menubar",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{f.displayName="MenubarMenu",f.__docgenInfo={description:"",displayName:"MenubarMenu",props:{__scopeMenubar:{defaultValue:null,description:"",name:"__scopeMenubar",required:!1,type:{name:"Scope"}}}}}catch{}try{x.displayName="MenubarTrigger",x.__docgenInfo={description:"",displayName:"MenubarTrigger",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{g.displayName="MenubarContent",g.__docgenInfo={description:"",displayName:"MenubarContent",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{a.displayName="MenubarItem",a.__docgenInfo={description:"",displayName:"MenubarItem",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}},inset:{defaultValue:null,description:"",name:"inset",required:!1,type:{name:"boolean"}}}}}catch{}try{d.displayName="MenubarSeparator",d.__docgenInfo={description:"",displayName:"MenubarSeparator",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{W.displayName="MenubarLabel",W.__docgenInfo={description:"",displayName:"MenubarLabel",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}},inset:{defaultValue:null,description:"",name:"inset",required:!1,type:{name:"boolean"}}}}}catch{}try{A.displayName="MenubarCheckboxItem",A.__docgenInfo={description:"",displayName:"MenubarCheckboxItem",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{K.displayName="MenubarRadioGroup",K.__docgenInfo={description:"",displayName:"MenubarRadioGroup",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{P.displayName="MenubarRadioItem",P.__docgenInfo={description:"",displayName:"MenubarRadioItem",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{Y.displayName="MenubarPortal",Y.__docgenInfo={description:"",displayName:"MenubarPortal",props:{}}}catch{}try{R.displayName="MenubarSubContent",R.__docgenInfo={description:"",displayName:"MenubarSubContent",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{w.displayName="MenubarSubTrigger",w.__docgenInfo={description:"",displayName:"MenubarSubTrigger",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}},inset:{defaultValue:null,description:"",name:"inset",required:!1,type:{name:"boolean"}}}}}catch{}try{J.displayName="MenubarGroup",J.__docgenInfo={description:"",displayName:"MenubarGroup",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{k.displayName="MenubarSub",k.__docgenInfo={description:"",displayName:"MenubarSub",props:{}}}catch{}try{l.displayName="MenubarShortcut",l.__docgenInfo={description:"",displayName:"MenubarShortcut",props:{}}}catch{}const fn={title:"ShadCn/Overlay/Menubar",component:N,parameters:{layout:"centered"},tags:["autodocs"]},O={render:()=>e.jsxs(N,{children:[e.jsxs(f,{children:[e.jsx(x,{children:"File"}),e.jsxs(g,{children:[e.jsxs(a,{children:["New Tab ",e.jsx(l,{children:"⌘T"})]}),e.jsxs(a,{children:["New Window ",e.jsx(l,{children:"⌘N"})]}),e.jsx(a,{disabled:!0,children:"New Incognito Window"}),e.jsx(d,{}),e.jsxs(k,{children:[e.jsx(w,{children:"Share"}),e.jsxs(R,{children:[e.jsx(a,{children:"Email link"}),e.jsx(a,{children:"Messages"}),e.jsx(a,{children:"Notes"})]})]}),e.jsx(d,{}),e.jsxs(a,{children:["Print... ",e.jsx(l,{children:"⌘P"})]})]})]}),e.jsxs(f,{children:[e.jsx(x,{children:"Edit"}),e.jsxs(g,{children:[e.jsxs(a,{children:["Undo ",e.jsx(l,{children:"⌘Z"})]}),e.jsxs(a,{children:["Redo ",e.jsx(l,{children:"⇧⌘Z"})]}),e.jsx(d,{}),e.jsxs(k,{children:[e.jsx(w,{children:"Find"}),e.jsxs(R,{children:[e.jsx(a,{children:"Search the web"}),e.jsx(d,{}),e.jsx(a,{children:"Find..."}),e.jsx(a,{children:"Find Next"}),e.jsx(a,{children:"Find Previous"})]})]}),e.jsx(d,{}),e.jsx(a,{children:"Cut"}),e.jsx(a,{children:"Copy"}),e.jsx(a,{children:"Paste"})]})]})]})},F={render:()=>{const[r,t]=u.useState(!0),[n,o]=u.useState(!1);return e.jsx(N,{children:e.jsxs(f,{children:[e.jsx(x,{children:"View"}),e.jsxs(g,{children:[e.jsx(A,{checked:r,onCheckedChange:t,children:"Always Show Bookmarks Bar"}),e.jsx(A,{checked:n,onCheckedChange:o,children:"Always Show Full URLs"}),e.jsx(d,{}),e.jsxs(a,{children:["Reload ",e.jsx(l,{children:"⌘R"})]}),e.jsxs(a,{disabled:!0,children:["Force Reload ",e.jsx(l,{children:"⇧⌘R"})]}),e.jsx(d,{}),e.jsx(a,{children:"Toggle Fullscreen"}),e.jsx(d,{}),e.jsx(a,{children:"Hide Sidebar"})]})]})})}},D={render:()=>{const[r,t]=u.useState("benoit");return e.jsx(N,{children:e.jsxs(f,{children:[e.jsx(x,{children:"Profiles"}),e.jsxs(g,{children:[e.jsxs(K,{value:r,onValueChange:t,children:[e.jsx(P,{value:"andy",children:"Andy"}),e.jsx(P,{value:"benoit",children:"Benoit"}),e.jsx(P,{value:"luis",children:"Luis"})]}),e.jsx(d,{}),e.jsx(a,{children:"Edit..."}),e.jsx(d,{}),e.jsx(a,{children:"Add Profile..."})]})]})})}},V={render:()=>e.jsxs(N,{className:"w-full max-w-2xl",children:[e.jsxs(f,{children:[e.jsx(x,{children:"Survey"}),e.jsxs(g,{children:[e.jsxs(a,{children:["New Survey ",e.jsx(l,{children:"⌘N"})]}),e.jsxs(a,{children:["Open Survey ",e.jsx(l,{children:"⌘O"})]}),e.jsxs(a,{children:["Save ",e.jsx(l,{children:"⌘S"})]}),e.jsx(a,{children:"Save As..."}),e.jsx(d,{}),e.jsxs(k,{children:[e.jsx(w,{children:"Export"}),e.jsxs(R,{children:[e.jsx(a,{children:"PDF"}),e.jsx(a,{children:"Word Document"}),e.jsx(a,{children:"Print Preview"})]})]}),e.jsx(d,{}),e.jsx(a,{children:"Settings"})]})]}),e.jsxs(f,{children:[e.jsx(x,{children:"Edit"}),e.jsxs(g,{children:[e.jsxs(a,{children:["Undo ",e.jsx(l,{children:"⌘Z"})]}),e.jsxs(a,{children:["Redo ",e.jsx(l,{children:"⇧⌘Z"})]}),e.jsx(d,{}),e.jsxs(a,{children:["Cut ",e.jsx(l,{children:"⌘X"})]}),e.jsxs(a,{children:["Copy ",e.jsx(l,{children:"⌘C"})]}),e.jsxs(a,{children:["Paste ",e.jsx(l,{children:"⌘V"})]}),e.jsx(d,{}),e.jsx(a,{children:"Select All"})]})]}),e.jsxs(f,{children:[e.jsx(x,{children:"Insert"}),e.jsxs(g,{children:[e.jsxs(k,{children:[e.jsx(w,{children:"Question"}),e.jsxs(R,{children:[e.jsx(a,{children:"Multiple Choice"}),e.jsx(a,{children:"Text Input"}),e.jsx(a,{children:"Rating Scale"}),e.jsx(a,{children:"Matrix"}),e.jsx(a,{children:"Date/Time"})]})]}),e.jsx(a,{children:"Page Break"}),e.jsx(a,{children:"Section Header"}),e.jsx(d,{}),e.jsx(a,{children:"Image"}),e.jsx(a,{children:"Video"})]})]}),e.jsxs(f,{children:[e.jsx(x,{children:"Logic"}),e.jsxs(g,{children:[e.jsx(a,{children:"Skip Logic"}),e.jsx(a,{children:"Display Logic"}),e.jsx(a,{children:"Piping"}),e.jsx(d,{}),e.jsx(a,{children:"Randomization"}),e.jsx(a,{children:"Quotas"})]})]}),e.jsxs(f,{children:[e.jsx(x,{children:"Preview"}),e.jsxs(g,{children:[e.jsxs(a,{children:["Desktop Preview ",e.jsx(l,{children:"⌘P"})]}),e.jsx(a,{children:"Mobile Preview"}),e.jsx(a,{children:"Tablet Preview"}),e.jsx(d,{}),e.jsx(a,{children:"Test Survey"})]})]})]})},G={render:()=>e.jsxs(N,{children:[e.jsxs(f,{children:[e.jsx(x,{children:"File"}),e.jsxs(g,{children:[e.jsx(a,{children:"New"}),e.jsx(a,{children:"Open"}),e.jsx(a,{children:"Save"})]})]}),e.jsxs(f,{children:[e.jsx(x,{children:"Edit"}),e.jsxs(g,{children:[e.jsx(a,{children:"Undo"}),e.jsx(a,{children:"Redo"})]})]}),e.jsxs(f,{children:[e.jsx(x,{children:"Help"}),e.jsxs(g,{children:[e.jsx(a,{children:"Documentation"}),e.jsx(a,{children:"About"})]})]})]})};var ee,re,ne;O.parameters={...O.parameters,docs:{...(ee=O.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <Menubar>
            <MenubarMenu>
                <MenubarTrigger>File</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>
                        New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>
                        New Window <MenubarShortcut>⌘N</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem disabled>New Incognito Window</MenubarItem>
                    <MenubarSeparator />
                    <MenubarSub>
                        <MenubarSubTrigger>Share</MenubarSubTrigger>
                        <MenubarSubContent>
                            <MenubarItem>Email link</MenubarItem>
                            <MenubarItem>Messages</MenubarItem>
                            <MenubarItem>Notes</MenubarItem>
                        </MenubarSubContent>
                    </MenubarSub>
                    <MenubarSeparator />
                    <MenubarItem>
                        Print... <MenubarShortcut>⌘P</MenubarShortcut>
                    </MenubarItem>
                </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger>Edit</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>
                        Undo <MenubarShortcut>⌘Z</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>
                        Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
                    </MenubarItem>
                    <MenubarSeparator />
                    <MenubarSub>
                        <MenubarSubTrigger>Find</MenubarSubTrigger>
                        <MenubarSubContent>
                            <MenubarItem>Search the web</MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem>Find...</MenubarItem>
                            <MenubarItem>Find Next</MenubarItem>
                            <MenubarItem>Find Previous</MenubarItem>
                        </MenubarSubContent>
                    </MenubarSub>
                    <MenubarSeparator />
                    <MenubarItem>Cut</MenubarItem>
                    <MenubarItem>Copy</MenubarItem>
                    <MenubarItem>Paste</MenubarItem>
                </MenubarContent>
            </MenubarMenu>
        </Menubar>
}`,...(ne=(re=O.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var ae,te,oe;F.parameters={...F.parameters,docs:{...(ae=F.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => {
    const [showBookmarks, setShowBookmarks] = React.useState(true);
    const [showFullUrls, setShowFullUrls] = React.useState(false);
    return <Menubar>
                <MenubarMenu>
                    <MenubarTrigger>View</MenubarTrigger>
                    <MenubarContent>
                        <MenubarCheckboxItem checked={showBookmarks} onCheckedChange={setShowBookmarks}>
                            Always Show Bookmarks Bar
                        </MenubarCheckboxItem>
                        <MenubarCheckboxItem checked={showFullUrls} onCheckedChange={setShowFullUrls}>
                            Always Show Full URLs
                        </MenubarCheckboxItem>
                        <MenubarSeparator />
                        <MenubarItem>
                            Reload <MenubarShortcut>⌘R</MenubarShortcut>
                        </MenubarItem>
                        <MenubarItem disabled>
                            Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
                        </MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>Toggle Fullscreen</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>Hide Sidebar</MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
            </Menubar>;
  }
}`,...(oe=(te=F.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var se,ue,ie;D.parameters={...D.parameters,docs:{...(se=D.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => {
    const [profile, setProfile] = React.useState("benoit");
    return <Menubar>
                <MenubarMenu>
                    <MenubarTrigger>Profiles</MenubarTrigger>
                    <MenubarContent>
                        <MenubarRadioGroup value={profile} onValueChange={setProfile}>
                            <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
                            <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
                            <MenubarRadioItem value="luis">Luis</MenubarRadioItem>
                        </MenubarRadioGroup>
                        <MenubarSeparator />
                        <MenubarItem>Edit...</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>Add Profile...</MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
            </Menubar>;
  }
}`,...(ie=(ue=D.parameters)==null?void 0:ue.docs)==null?void 0:ie.source}}};var de,ce,le;V.parameters={...V.parameters,docs:{...(de=V.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: () => <Menubar className="w-full max-w-2xl">
            <MenubarMenu>
                <MenubarTrigger>Survey</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>
                        New Survey <MenubarShortcut>⌘N</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>
                        Open Survey <MenubarShortcut>⌘O</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>
                        Save <MenubarShortcut>⌘S</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>Save As...</MenubarItem>
                    <MenubarSeparator />
                    <MenubarSub>
                        <MenubarSubTrigger>Export</MenubarSubTrigger>
                        <MenubarSubContent>
                            <MenubarItem>PDF</MenubarItem>
                            <MenubarItem>Word Document</MenubarItem>
                            <MenubarItem>Print Preview</MenubarItem>
                        </MenubarSubContent>
                    </MenubarSub>
                    <MenubarSeparator />
                    <MenubarItem>Settings</MenubarItem>
                </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger>Edit</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>
                        Undo <MenubarShortcut>⌘Z</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>
                        Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
                    </MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>
                        Cut <MenubarShortcut>⌘X</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>
                        Copy <MenubarShortcut>⌘C</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>
                        Paste <MenubarShortcut>⌘V</MenubarShortcut>
                    </MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Select All</MenubarItem>
                </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger>Insert</MenubarTrigger>
                <MenubarContent>
                    <MenubarSub>
                        <MenubarSubTrigger>Question</MenubarSubTrigger>
                        <MenubarSubContent>
                            <MenubarItem>Multiple Choice</MenubarItem>
                            <MenubarItem>Text Input</MenubarItem>
                            <MenubarItem>Rating Scale</MenubarItem>
                            <MenubarItem>Matrix</MenubarItem>
                            <MenubarItem>Date/Time</MenubarItem>
                        </MenubarSubContent>
                    </MenubarSub>
                    <MenubarItem>Page Break</MenubarItem>
                    <MenubarItem>Section Header</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Image</MenubarItem>
                    <MenubarItem>Video</MenubarItem>
                </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger>Logic</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>Skip Logic</MenubarItem>
                    <MenubarItem>Display Logic</MenubarItem>
                    <MenubarItem>Piping</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Randomization</MenubarItem>
                    <MenubarItem>Quotas</MenubarItem>
                </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger>Preview</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>
                        Desktop Preview <MenubarShortcut>⌘P</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>Mobile Preview</MenubarItem>
                    <MenubarItem>Tablet Preview</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Test Survey</MenubarItem>
                </MenubarContent>
            </MenubarMenu>
        </Menubar>
}`,...(le=(ce=V.parameters)==null?void 0:ce.docs)==null?void 0:le.source}}};var be,pe,me;G.parameters={...G.parameters,docs:{...(be=G.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: () => <Menubar>
            <MenubarMenu>
                <MenubarTrigger>File</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>New</MenubarItem>
                    <MenubarItem>Open</MenubarItem>
                    <MenubarItem>Save</MenubarItem>
                </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger>Edit</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>Undo</MenubarItem>
                    <MenubarItem>Redo</MenubarItem>
                </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger>Help</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>Documentation</MenubarItem>
                    <MenubarItem>About</MenubarItem>
                </MenubarContent>
            </MenubarMenu>
        </Menubar>
}`,...(me=(pe=G.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};const In=["Default","WithViewOptions","WithProfiles","SurveyBuilderMenubar","Simple"];export{O as Default,G as Simple,V as SurveyBuilderMenubar,D as WithProfiles,F as WithViewOptions,In as __namedExportsOrder,fn as default};
