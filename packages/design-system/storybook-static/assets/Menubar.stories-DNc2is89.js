import{j as e}from"./jsx-runtime-BYYWji4R.js";import{r as u}from"./index-ClcD9ViR.js";import{c as ze}from"./index-BpI74HIb.js";import{u as He}from"./index-CZKF78Oq.js";import{c as C}from"./index-DW48STyt.js";import{u as Ze}from"./index-Bew1Yeam.js";import{c as qe}from"./index-CWz5EflU.js";import{u as U}from"./index-CaubhJIw.js";import{R as Qe,A as Xe,P as Ye,C as Je,I as er,b as rr,S as nr,d as ar,e as tr,a as or,h as sr,g as ur,f as ir,c as dr,G as cr,L as lr,i as br}from"./index-CqCTsHsz.js";import{R as mr,I as Mr,c as le}from"./index-CGGLQkrZ.js";import{P as be}from"./index-C59fdHCL.js";import{u as me}from"./index-B0ATiKj9.js";import{x as pr,$ as hr,b as xr}from"./icons-BrjYTXf4.js";import{c as w}from"./utils-CDN07tui.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-CyBucMil.js";import"./index-CafsI6Qv.js";import"./index-guOESLwJ.js";import"./index-kkVLZR_L.js";import"./index-CDv6ZuJx.js";import"./tslib.es6-BUas5LQb.js";import"./index-DTBqWj02.js";import"./index-Drr-0Uuw.js";import"./index-Jh3OPyOv.js";import"./index-BntbZM61.js";import"./index-B2NcgzwI.js";var A="Menubar",[V,fr,gr]=ze(A),[Me]=qe(A,[gr,le]),M=dr(),pe=le(),[Ir,W]=Me(A),he=u.forwardRef((r,a)=>{const{__scopeMenubar:n,value:o,onValueChange:s,defaultValue:I,loop:p=!0,dir:l,...i}=r,j=He(l),d=pe(n),[v,h]=me({prop:o,onChange:s,defaultProp:I??"",caller:A}),[y,m]=u.useState(null);return e.jsx(Ir,{scope:n,value:v,onMenuOpen:u.useCallback(S=>{h(S),m(S)},[h]),onMenuClose:u.useCallback(()=>h(""),[h]),onMenuToggle:u.useCallback(S=>{h(H=>H?"":S),m(S)},[h]),dir:j,loop:p,children:e.jsx(V.Provider,{scope:n,children:e.jsx(V.Slot,{scope:n,children:e.jsx(mr,{asChild:!0,...d,orientation:"horizontal",loop:p,dir:j,currentTabStopId:y,onCurrentTabStopIdChange:m,children:e.jsx(be.div,{role:"menubar",...i,ref:a})})})})})});he.displayName=A;var z="MenubarMenu",[jr,xe]=Me(z),fe=r=>{const{__scopeMenubar:a,value:n,...o}=r,s=U(),I=n||s||"LEGACY_REACT_AUTO_VALUE",p=W(z,a),l=M(a),i=u.useRef(null),j=u.useRef(!1),d=p.value===I;return u.useEffect(()=>{d||(j.current=!1)},[d]),e.jsx(jr,{scope:a,value:I,triggerId:U(),triggerRef:i,contentId:U(),wasKeyboardTriggerOpenRef:j,children:e.jsx(Qe,{...l,open:d,onOpenChange:v=>{v||p.onMenuClose()},modal:!1,dir:p.dir,...o})})};fe.displayName=z;var $="MenubarTrigger",ge=u.forwardRef((r,a)=>{const{__scopeMenubar:n,disabled:o=!1,...s}=r,I=pe(n),p=M(n),l=W($,n),i=xe($,n),j=u.useRef(null),d=Ze(a,j,i.triggerRef),[v,h]=u.useState(!1),y=l.value===i.value;return e.jsx(V.ItemSlot,{scope:n,value:i.value,disabled:o,children:e.jsx(Mr,{asChild:!0,...I,focusable:!o,tabStopId:i.value,children:e.jsx(Xe,{asChild:!0,...p,children:e.jsx(be.button,{type:"button",role:"menuitem",id:i.triggerId,"aria-haspopup":"menu","aria-expanded":y,"aria-controls":y?i.contentId:void 0,"data-highlighted":v?"":void 0,"data-state":y?"open":"closed","data-disabled":o?"":void 0,disabled:o,...s,ref:d,onPointerDown:C(r.onPointerDown,m=>{!o&&m.button===0&&m.ctrlKey===!1&&(l.onMenuOpen(i.value),y||m.preventDefault())}),onPointerEnter:C(r.onPointerEnter,()=>{var S;!!l.value&&!y&&(l.onMenuOpen(i.value),(S=j.current)==null||S.focus())}),onKeyDown:C(r.onKeyDown,m=>{o||(["Enter"," "].includes(m.key)&&l.onMenuToggle(i.value),m.key==="ArrowDown"&&l.onMenuOpen(i.value),["Enter"," ","ArrowDown"].includes(m.key)&&(i.wasKeyboardTriggerOpenRef.current=!0,m.preventDefault()))}),onFocus:C(r.onFocus,()=>h(!0)),onBlur:C(r.onBlur,()=>h(!1))})})})})});ge.displayName=$;var Sr="MenubarPortal",Ie=r=>{const{__scopeMenubar:a,...n}=r,o=M(a);return e.jsx(Ye,{...o,...n})};Ie.displayName=Sr;var K="MenubarContent",je=u.forwardRef((r,a)=>{const{__scopeMenubar:n,align:o="start",...s}=r,I=M(n),p=W(K,n),l=xe(K,n),i=fr(n),j=u.useRef(!1);return e.jsx(Je,{id:l.contentId,"aria-labelledby":l.triggerId,"data-radix-menubar-content":"",...I,...s,ref:a,align:o,onCloseAutoFocus:C(r.onCloseAutoFocus,d=>{var h;!!!p.value&&!j.current&&((h=l.triggerRef.current)==null||h.focus()),j.current=!1,d.preventDefault()}),onFocusOutside:C(r.onFocusOutside,d=>{const v=d.target;i().some(y=>{var m;return(m=y.ref.current)==null?void 0:m.contains(v)})&&d.preventDefault()}),onInteractOutside:C(r.onInteractOutside,()=>{j.current=!0}),onEntryFocus:d=>{l.wasKeyboardTriggerOpenRef.current||d.preventDefault()},onKeyDown:C(r.onKeyDown,d=>{if(["ArrowRight","ArrowLeft"].includes(d.key)){const v=d.target,h=v.hasAttribute("data-radix-menubar-subtrigger"),y=v.closest("[data-radix-menubar-content]")!==d.currentTarget,S=(p.dir==="rtl"?"ArrowRight":"ArrowLeft")===d.key;if(!S&&h||y&&S)return;let N=i().filter(L=>!L.disabled).map(L=>L.value);S&&N.reverse();const Z=N.indexOf(l.value);N=p.loop?Fr(N,Z+1):N.slice(Z+1);const[q]=N;q&&p.onMenuOpen(q)}},{checkForDefaultPrevented:!1}),style:{...r.style,"--radix-menubar-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-menubar-content-available-width":"var(--radix-popper-available-width)","--radix-menubar-content-available-height":"var(--radix-popper-available-height)","--radix-menubar-trigger-width":"var(--radix-popper-anchor-width)","--radix-menubar-trigger-height":"var(--radix-popper-anchor-height)"}})});je.displayName=K;var vr="MenubarGroup",yr=u.forwardRef((r,a)=>{const{__scopeMenubar:n,...o}=r,s=M(n);return e.jsx(cr,{...s,...o,ref:a})});yr.displayName=vr;var wr="MenubarLabel",Se=u.forwardRef((r,a)=>{const{__scopeMenubar:n,...o}=r,s=M(n);return e.jsx(lr,{...s,...o,ref:a})});Se.displayName=wr;var Cr="MenubarItem",ve=u.forwardRef((r,a)=>{const{__scopeMenubar:n,...o}=r,s=M(n);return e.jsx(er,{...s,...o,ref:a})});ve.displayName=Cr;var Rr="MenubarCheckboxItem",ye=u.forwardRef((r,a)=>{const{__scopeMenubar:n,...o}=r,s=M(n);return e.jsx(ir,{...s,...o,ref:a})});ye.displayName=Rr;var Nr="MenubarRadioGroup",we=u.forwardRef((r,a)=>{const{__scopeMenubar:n,...o}=r,s=M(n);return e.jsx(or,{...s,...o,ref:a})});we.displayName=Nr;var _r="MenubarRadioItem",Ce=u.forwardRef((r,a)=>{const{__scopeMenubar:n,...o}=r,s=M(n);return e.jsx(sr,{...s,...o,ref:a})});Ce.displayName=_r;var Tr="MenubarItemIndicator",Re=u.forwardRef((r,a)=>{const{__scopeMenubar:n,...o}=r,s=M(n);return e.jsx(ur,{...s,...o,ref:a})});Re.displayName=Tr;var Pr="MenubarSeparator",Ne=u.forwardRef((r,a)=>{const{__scopeMenubar:n,...o}=r,s=M(n);return e.jsx(rr,{...s,...o,ref:a})});Ne.displayName=Pr;var kr="MenubarArrow",Ar=u.forwardRef((r,a)=>{const{__scopeMenubar:n,...o}=r,s=M(n);return e.jsx(br,{...s,...o,ref:a})});Ar.displayName=kr;var _e="MenubarSub",Te=r=>{const{__scopeMenubar:a,children:n,open:o,onOpenChange:s,defaultOpen:I}=r,p=M(a),[l,i]=me({prop:o,defaultProp:I??!1,onChange:s,caller:_e});return e.jsx(nr,{...p,open:l,onOpenChange:i,children:n})};Te.displayName=_e;var Er="MenubarSubTrigger",Pe=u.forwardRef((r,a)=>{const{__scopeMenubar:n,...o}=r,s=M(n);return e.jsx(ar,{"data-radix-menubar-subtrigger":"",...s,...o,ref:a})});Pe.displayName=Er;var Or="MenubarSubContent",ke=u.forwardRef((r,a)=>{const{__scopeMenubar:n,...o}=r,s=M(n);return e.jsx(tr,{...s,"data-radix-menubar-content":"",...o,ref:a,style:{...r.style,"--radix-menubar-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-menubar-content-available-width":"var(--radix-popper-available-width)","--radix-menubar-content-available-height":"var(--radix-popper-available-height)","--radix-menubar-trigger-width":"var(--radix-popper-anchor-width)","--radix-menubar-trigger-height":"var(--radix-popper-anchor-height)"}})});ke.displayName=Or;function Fr(r,a){return r.map((n,o)=>r[(a+o)%r.length])}var Ae=he,Dr=fe,Ee=ge,Br=Ie,Oe=je,Fe=Se,De=ve,Be=ye,Gr=we,Ge=Ce,Le=Re,Ue=Ne,Lr=Te,Ve=Pe,$e=ke;function g({...r}){return e.jsx(Dr,{...r})}function Ke({...r}){return e.jsx(Gr,{...r})}function k({...r}){return e.jsx(Lr,{"data-slot":"menubar-sub",...r})}const R=u.forwardRef(({className:r,...a},n)=>e.jsx(Ae,{ref:n,className:w("flex h-10 items-center space-x-1 rounded-md border border-primary/20 bg-transparent p-1",r),...a}));R.displayName=Ae.displayName;const x=u.forwardRef(({className:r,...a},n)=>e.jsx(Ee,{ref:n,className:w("flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-primary/10 data-[state=open]:bg-primary/10",r),...a}));x.displayName=Ee.displayName;const _=u.forwardRef(({className:r,inset:a,children:n,...o},s)=>e.jsxs(Ve,{ref:s,className:w("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-primary/10 data-[state=open]:bg-primary/10",a&&"pl-8",r),...o,children:[n,e.jsx(pr,{className:"ml-auto h-4 w-4"})]}));_.displayName=Ve.displayName;const T=u.forwardRef(({className:r,...a},n)=>e.jsx($e,{ref:n,className:w("z-50 min-w-[8rem] overflow-hidden rounded-md border border-primary/20 bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-menubar-content-transform-origin]",r),...a}));T.displayName=$e.displayName;const f=u.forwardRef(({className:r,align:a="start",alignOffset:n=-4,sideOffset:o=8,...s},I)=>e.jsx(Br,{children:e.jsx(Oe,{ref:I,align:a,alignOffset:n,sideOffset:o,className:w("z-50 min-w-[12rem] overflow-hidden rounded-md border border-primary/20 bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-menubar-content-transform-origin]",r),...s})}));f.displayName=Oe.displayName;const t=u.forwardRef(({className:r,inset:a,...n},o)=>e.jsx(De,{ref:o,className:w("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-primary/10 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[disabled]:text-primary/40",a&&"pl-8",r),...n}));t.displayName=De.displayName;const G=u.forwardRef(({className:r,children:a,checked:n,...o},s)=>e.jsxs(Be,{ref:s,className:w("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-primary/10 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:rounded-none data-[state=checked]:border-b data-[state=checked]:border-primary-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[disabled]:text-primary/40",r),checked:n,...o,children:[e.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:e.jsx(Le,{children:e.jsx(xr,{className:"h-4 w-4"})})}),a]}));G.displayName=Be.displayName;const P=u.forwardRef(({className:r,children:a,...n},o)=>e.jsxs(Ge,{ref:o,className:w("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-primary/10 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:rounded-none data-[state=checked]:border-b data-[state=checked]:border-primary-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[disabled]:text-primary/40",r),...n,children:[e.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:e.jsx(Le,{children:e.jsx(hr,{className:"h-2 w-2"})})}),a]}));P.displayName=Ge.displayName;const We=u.forwardRef(({className:r,inset:a,...n},o)=>e.jsx(Fe,{ref:o,className:w("px-2 py-1.5 text-sm font-semibold",a&&"pl-8",r),...n}));We.displayName=Fe.displayName;const c=u.forwardRef(({className:r,...a},n)=>e.jsx(Ue,{ref:n,className:w("-mx-1 my-1 h-px bg-primary/20",r),...a}));c.displayName=Ue.displayName;const b=({className:r,...a})=>e.jsx("span",{className:w("ml-auto text-xs tracking-widest text-muted-foreground",r),...a});b.displayname="MenubarShortcut";R.__docgenInfo={description:"",methods:[]};g.__docgenInfo={description:"",methods:[],displayName:"MenubarMenu"};x.__docgenInfo={description:"",methods:[]};f.__docgenInfo={description:"",methods:[],props:{align:{defaultValue:{value:'"start"',computed:!1},required:!1},alignOffset:{defaultValue:{value:"-4",computed:!1},required:!1},sideOffset:{defaultValue:{value:"8",computed:!1},required:!1}}};t.__docgenInfo={description:"",methods:[],props:{inset:{required:!1,tsType:{name:"boolean"},description:""}}};c.__docgenInfo={description:"",methods:[]};We.__docgenInfo={description:"",methods:[],props:{inset:{required:!1,tsType:{name:"boolean"},description:""}}};G.__docgenInfo={description:"",methods:[]};Ke.__docgenInfo={description:"",methods:[],displayName:"MenubarRadioGroup"};P.__docgenInfo={description:"",methods:[]};T.__docgenInfo={description:"",methods:[]};_.__docgenInfo={description:"",methods:[],props:{inset:{required:!1,tsType:{name:"boolean"},description:""}}};k.__docgenInfo={description:"",methods:[],displayName:"MenubarSub"};b.__docgenInfo={description:"",methods:[],displayName:"MenubarShortcut"};const pn={title:"Components/Overlay/Menubar",component:R,parameters:{layout:"centered"},tags:["autodocs"]},E={render:()=>e.jsxs(R,{children:[e.jsxs(g,{children:[e.jsx(x,{children:"File"}),e.jsxs(f,{children:[e.jsxs(t,{children:["New Tab ",e.jsx(b,{children:"⌘T"})]}),e.jsxs(t,{children:["New Window ",e.jsx(b,{children:"⌘N"})]}),e.jsx(t,{disabled:!0,children:"New Incognito Window"}),e.jsx(c,{}),e.jsxs(k,{children:[e.jsx(_,{children:"Share"}),e.jsxs(T,{children:[e.jsx(t,{children:"Email link"}),e.jsx(t,{children:"Messages"}),e.jsx(t,{children:"Notes"})]})]}),e.jsx(c,{}),e.jsxs(t,{children:["Print... ",e.jsx(b,{children:"⌘P"})]})]})]}),e.jsxs(g,{children:[e.jsx(x,{children:"Edit"}),e.jsxs(f,{children:[e.jsxs(t,{children:["Undo ",e.jsx(b,{children:"⌘Z"})]}),e.jsxs(t,{children:["Redo ",e.jsx(b,{children:"⇧⌘Z"})]}),e.jsx(c,{}),e.jsxs(k,{children:[e.jsx(_,{children:"Find"}),e.jsxs(T,{children:[e.jsx(t,{children:"Search the web"}),e.jsx(c,{}),e.jsx(t,{children:"Find..."}),e.jsx(t,{children:"Find Next"}),e.jsx(t,{children:"Find Previous"})]})]}),e.jsx(c,{}),e.jsx(t,{children:"Cut"}),e.jsx(t,{children:"Copy"}),e.jsx(t,{children:"Paste"})]})]})]})},O={render:()=>{const[r,a]=u.useState(!0),[n,o]=u.useState(!1);return e.jsx(R,{children:e.jsxs(g,{children:[e.jsx(x,{children:"View"}),e.jsxs(f,{children:[e.jsx(G,{checked:r,onCheckedChange:a,children:"Always Show Bookmarks Bar"}),e.jsx(G,{checked:n,onCheckedChange:o,children:"Always Show Full URLs"}),e.jsx(c,{}),e.jsxs(t,{children:["Reload ",e.jsx(b,{children:"⌘R"})]}),e.jsxs(t,{disabled:!0,children:["Force Reload ",e.jsx(b,{children:"⇧⌘R"})]}),e.jsx(c,{}),e.jsx(t,{children:"Toggle Fullscreen"}),e.jsx(c,{}),e.jsx(t,{children:"Hide Sidebar"})]})]})})}},F={render:()=>{const[r,a]=u.useState("benoit");return e.jsx(R,{children:e.jsxs(g,{children:[e.jsx(x,{children:"Profiles"}),e.jsxs(f,{children:[e.jsxs(Ke,{value:r,onValueChange:a,children:[e.jsx(P,{value:"andy",children:"Andy"}),e.jsx(P,{value:"benoit",children:"Benoit"}),e.jsx(P,{value:"luis",children:"Luis"})]}),e.jsx(c,{}),e.jsx(t,{children:"Edit..."}),e.jsx(c,{}),e.jsx(t,{children:"Add Profile..."})]})]})})}},D={render:()=>e.jsxs(R,{className:"w-full max-w-2xl",children:[e.jsxs(g,{children:[e.jsx(x,{children:"Survey"}),e.jsxs(f,{children:[e.jsxs(t,{children:["New Survey ",e.jsx(b,{children:"⌘N"})]}),e.jsxs(t,{children:["Open Survey ",e.jsx(b,{children:"⌘O"})]}),e.jsxs(t,{children:["Save ",e.jsx(b,{children:"⌘S"})]}),e.jsx(t,{children:"Save As..."}),e.jsx(c,{}),e.jsxs(k,{children:[e.jsx(_,{children:"Export"}),e.jsxs(T,{children:[e.jsx(t,{children:"PDF"}),e.jsx(t,{children:"Word Document"}),e.jsx(t,{children:"Print Preview"})]})]}),e.jsx(c,{}),e.jsx(t,{children:"Settings"})]})]}),e.jsxs(g,{children:[e.jsx(x,{children:"Edit"}),e.jsxs(f,{children:[e.jsxs(t,{children:["Undo ",e.jsx(b,{children:"⌘Z"})]}),e.jsxs(t,{children:["Redo ",e.jsx(b,{children:"⇧⌘Z"})]}),e.jsx(c,{}),e.jsxs(t,{children:["Cut ",e.jsx(b,{children:"⌘X"})]}),e.jsxs(t,{children:["Copy ",e.jsx(b,{children:"⌘C"})]}),e.jsxs(t,{children:["Paste ",e.jsx(b,{children:"⌘V"})]}),e.jsx(c,{}),e.jsx(t,{children:"Select All"})]})]}),e.jsxs(g,{children:[e.jsx(x,{children:"Insert"}),e.jsxs(f,{children:[e.jsxs(k,{children:[e.jsx(_,{children:"Question"}),e.jsxs(T,{children:[e.jsx(t,{children:"Multiple Choice"}),e.jsx(t,{children:"Text Input"}),e.jsx(t,{children:"Rating Scale"}),e.jsx(t,{children:"Matrix"}),e.jsx(t,{children:"Date/Time"})]})]}),e.jsx(t,{children:"Page Break"}),e.jsx(t,{children:"Section Header"}),e.jsx(c,{}),e.jsx(t,{children:"Image"}),e.jsx(t,{children:"Video"})]})]}),e.jsxs(g,{children:[e.jsx(x,{children:"Logic"}),e.jsxs(f,{children:[e.jsx(t,{children:"Skip Logic"}),e.jsx(t,{children:"Display Logic"}),e.jsx(t,{children:"Piping"}),e.jsx(c,{}),e.jsx(t,{children:"Randomization"}),e.jsx(t,{children:"Quotas"})]})]}),e.jsxs(g,{children:[e.jsx(x,{children:"Preview"}),e.jsxs(f,{children:[e.jsxs(t,{children:["Desktop Preview ",e.jsx(b,{children:"⌘P"})]}),e.jsx(t,{children:"Mobile Preview"}),e.jsx(t,{children:"Tablet Preview"}),e.jsx(c,{}),e.jsx(t,{children:"Test Survey"})]})]})]})},B={render:()=>e.jsxs(R,{children:[e.jsxs(g,{children:[e.jsx(x,{children:"File"}),e.jsxs(f,{children:[e.jsx(t,{children:"New"}),e.jsx(t,{children:"Open"}),e.jsx(t,{children:"Save"})]})]}),e.jsxs(g,{children:[e.jsx(x,{children:"Edit"}),e.jsxs(f,{children:[e.jsx(t,{children:"Undo"}),e.jsx(t,{children:"Redo"})]})]}),e.jsxs(g,{children:[e.jsx(x,{children:"Help"}),e.jsxs(f,{children:[e.jsx(t,{children:"Documentation"}),e.jsx(t,{children:"About"})]})]})]})};var Q,X,Y;E.parameters={...E.parameters,docs:{...(Q=E.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(Y=(X=E.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var J,ee,re;O.parameters={...O.parameters,docs:{...(J=O.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(re=(ee=O.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ne,ae,te;F.parameters={...F.parameters,docs:{...(ne=F.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(te=(ae=F.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var oe,se,ue;D.parameters={...D.parameters,docs:{...(oe=D.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(ue=(se=D.parameters)==null?void 0:se.docs)==null?void 0:ue.source}}};var ie,de,ce;B.parameters={...B.parameters,docs:{...(ie=B.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(ce=(de=B.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};const hn=["Default","WithViewOptions","WithProfiles","SurveyBuilderMenubar","Simple"];export{E as Default,B as Simple,D as SurveyBuilderMenubar,F as WithProfiles,O as WithViewOptions,hn as __namedExportsOrder,pn as default};
