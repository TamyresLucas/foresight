import{j as e}from"./jsx-runtime-BYYWji4R.js";import{r as C}from"./index-ClcD9ViR.js";import{R as ee,T as te,C as U,P as se,a as X,b as J,D as K,O as Y}from"./index-CtOrc1W9.js";import{c as ae}from"./index-C2vczdB5.js";import{X as ne}from"./icons-BrjYTXf4.js";import{c as u}from"./utils-CDN07tui.js";import{B as t}from"./button-u6FMGbIq.js";import{I as s}from"./input-BN6GNswh.js";import{L as l}from"./label-DYOVXtut.js";import{S as B}from"./separator-DyOGEPWK.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DW48STyt.js";import"./index-Bew1Yeam.js";import"./index-CWz5EflU.js";import"./index-CaubhJIw.js";import"./index-CafsI6Qv.js";import"./index-B0ATiKj9.js";import"./index-guOESLwJ.js";import"./index-C59fdHCL.js";import"./index-Drr-0Uuw.js";import"./index-CyBucMil.js";import"./index-kkVLZR_L.js";import"./index-CDv6ZuJx.js";import"./tslib.es6-BUas5LQb.js";import"./index-BntbZM61.js";import"./index-B2NcgzwI.js";const d=ee,c=te,p=U,re=se,b=C.forwardRef(({className:i,...o},m)=>e.jsx(Y,{className:u("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",i),...o,ref:m}));b.displayName=Y.displayName;const ie=ae("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",{variants:{side:{top:"inset-x-0 top-0 border-b border-primary/20 data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",bottom:"inset-x-0 bottom-0 border-t border-primary/20 data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",left:"inset-y-0 left-0 h-full w-3/4 border-r border-primary/20 data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",right:"inset-y-0 right-0 h-full w-3/4  border-l border-primary/20 data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"}},defaultVariants:{side:"right"}}),a=C.forwardRef(({side:i="right",className:o,children:m,...Z},$)=>e.jsxs(re,{children:[e.jsx(b,{}),e.jsxs(X,{ref:$,className:u(ie({side:i}),o),...Z,children:[m,e.jsxs(U,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",children:[e.jsx(ne,{className:"h-4 w-4"}),e.jsx("span",{className:"sr-only",children:"Close"})]})]})]}));a.displayName=X.displayName;const n=({className:i,...o})=>e.jsx("div",{className:u("flex flex-col space-y-2 text-center sm:text-left",i),...o});n.displayName="SheetHeader";const x=({className:i,...o})=>e.jsx("div",{className:u("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",i),...o});x.displayName="SheetFooter";const r=C.forwardRef(({className:i,...o},m)=>e.jsx(J,{ref:m,className:u("text-lg font-semibold text-foreground",i),...o}));r.displayName=J.displayName;const h=C.forwardRef(({className:i,...o},m)=>e.jsx(K,{ref:m,className:u("text-sm text-muted-foreground",i),...o}));h.displayName=K.displayName;b.__docgenInfo={description:"",methods:[]};a.__docgenInfo={description:"",methods:[],props:{side:{defaultValue:{value:'"right"',computed:!1},required:!1}},composes:["VariantProps"]};n.__docgenInfo={description:"",methods:[],displayName:"SheetHeader"};x.__docgenInfo={description:"",methods:[],displayName:"SheetFooter"};r.__docgenInfo={description:"",methods:[]};h.__docgenInfo={description:"",methods:[]};const Ve={title:"Components/Overlay/Sheet",component:d,parameters:{layout:"centered"},tags:["autodocs"]},S={render:()=>e.jsxs(d,{children:[e.jsx(c,{asChild:!0,children:e.jsx(t,{variant:"outline",children:"Open Sheet"})}),e.jsxs(a,{children:[e.jsxs(n,{children:[e.jsx(r,{children:"Edit profile"}),e.jsx(h,{children:"Make changes to your profile here. Click save when you're done."})]}),e.jsxs("div",{className:"grid gap-4 py-4",children:[e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx(l,{htmlFor:"name",className:"text-right",children:"Name"}),e.jsx(s,{id:"name",defaultValue:"Pedro Duarte",className:"col-span-3"})]}),e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx(l,{htmlFor:"username",className:"text-right",children:"Username"}),e.jsx(s,{id:"username",defaultValue:"@peduarte",className:"col-span-3"})]})]}),e.jsx(x,{children:e.jsx(p,{asChild:!0,children:e.jsx(t,{type:"submit",children:"Save changes"})})})]})]})},g={render:()=>e.jsxs(d,{children:[e.jsx(c,{asChild:!0,children:e.jsx(t,{variant:"outline",children:"Open Left"})}),e.jsxs(a,{side:"left",children:[e.jsxs(n,{children:[e.jsx(r,{children:"Navigation"}),e.jsx(h,{children:"Access your workspace and settings."})]}),e.jsxs("div",{className:"py-4 space-y-4",children:[e.jsxs(t,{variant:"ghost",className:"w-full justify-start",children:[e.jsx("svg",{className:"mr-2 h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"})}),"Dashboard"]}),e.jsxs(t,{variant:"ghost",className:"w-full justify-start",children:[e.jsx("svg",{className:"mr-2 h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})}),"Surveys"]}),e.jsxs(t,{variant:"ghost",className:"w-full justify-start",children:[e.jsxs("svg",{className:"mr-2 h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:[e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}),e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})]}),"Settings"]})]})]})]})},j={render:()=>e.jsxs(d,{children:[e.jsx(c,{asChild:!0,children:e.jsx(t,{variant:"outline",children:"Open Top"})}),e.jsxs(a,{side:"top",className:"h-[300px]",children:[e.jsxs(n,{children:[e.jsx(r,{children:"Search"}),e.jsx(h,{children:"Search for surveys, questions, or responses."})]}),e.jsx("div",{className:"py-4",children:e.jsx(s,{placeholder:"Type to search...",className:"w-full"})})]})]})},v={render:()=>e.jsxs(d,{children:[e.jsx(c,{asChild:!0,children:e.jsx(t,{variant:"outline",children:"Open Bottom"})}),e.jsxs(a,{side:"bottom",className:"h-[300px]",children:[e.jsxs(n,{children:[e.jsx(r,{children:"Quick Actions"}),e.jsx(h,{children:"Choose an action to perform."})]}),e.jsxs("div",{className:"grid grid-cols-3 gap-4 py-4 max-w-md mx-auto",children:[e.jsxs(t,{variant:"outline",className:"flex flex-col h-20",children:[e.jsx("span",{className:"text-2xl mb-1",children:"📝"}),e.jsx("span",{className:"text-xs",children:"New Survey"})]}),e.jsxs(t,{variant:"outline",className:"flex flex-col h-20",children:[e.jsx("span",{className:"text-2xl mb-1",children:"📊"}),e.jsx("span",{className:"text-xs",children:"Analytics"})]}),e.jsxs(t,{variant:"outline",className:"flex flex-col h-20",children:[e.jsx("span",{className:"text-2xl mb-1",children:"👥"}),e.jsx("span",{className:"text-xs",children:"Share"})]})]})]})]})},f={render:()=>e.jsxs("div",{className:"flex gap-4",children:[e.jsxs(d,{children:[e.jsx(c,{asChild:!0,children:e.jsx(t,{variant:"outline",children:"Left"})}),e.jsx(a,{side:"left",children:e.jsx(n,{children:e.jsx(r,{children:"Left Sheet"})})})]}),e.jsxs(d,{children:[e.jsx(c,{asChild:!0,children:e.jsx(t,{variant:"outline",children:"Right"})}),e.jsx(a,{side:"right",children:e.jsx(n,{children:e.jsx(r,{children:"Right Sheet"})})})]}),e.jsxs(d,{children:[e.jsx(c,{asChild:!0,children:e.jsx(t,{variant:"outline",children:"Top"})}),e.jsx(a,{side:"top",children:e.jsx(n,{children:e.jsx(r,{children:"Top Sheet"})})})]}),e.jsxs(d,{children:[e.jsx(c,{asChild:!0,children:e.jsx(t,{variant:"outline",children:"Bottom"})}),e.jsx(a,{side:"bottom",children:e.jsx(n,{children:e.jsx(r,{children:"Bottom Sheet"})})})]})]})},N={render:()=>e.jsxs(d,{children:[e.jsx(c,{asChild:!0,children:e.jsxs(t,{variant:"outline",children:[e.jsxs("svg",{className:"mr-2 h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:[e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}),e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})]}),"Survey Settings"]})}),e.jsxs(a,{className:"w-[400px] sm:w-[540px]",children:[e.jsxs(n,{children:[e.jsx(r,{children:"Survey Settings"}),e.jsx(h,{children:"Configure your survey preferences and distribution options."})]}),e.jsxs("div",{className:"py-6 space-y-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("h4",{className:"text-sm font-medium",children:"General"}),e.jsxs("div",{className:"grid gap-3",children:[e.jsxs("div",{className:"grid gap-2",children:[e.jsx(l,{htmlFor:"survey-title",children:"Survey Title"}),e.jsx(s,{id:"survey-title",defaultValue:"Customer Satisfaction Survey"})]}),e.jsxs("div",{className:"grid gap-2",children:[e.jsx(l,{htmlFor:"description",children:"Description"}),e.jsx(s,{id:"description",placeholder:"Optional description..."})]})]})]}),e.jsx(B,{}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h4",{className:"text-sm font-medium",children:"Responses"}),e.jsxs("div",{className:"grid gap-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(l,{htmlFor:"anonymous",children:"Anonymous responses"}),e.jsx("input",{type:"checkbox",id:"anonymous",defaultChecked:!0,className:"h-4 w-4"})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(l,{htmlFor:"multiple",children:"Allow multiple responses"}),e.jsx("input",{type:"checkbox",id:"multiple",className:"h-4 w-4"})]})]})]}),e.jsx(B,{}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h4",{className:"text-sm font-medium",children:"Schedule"}),e.jsxs("div",{className:"grid gap-3",children:[e.jsxs("div",{className:"grid gap-2",children:[e.jsx(l,{htmlFor:"start-date",children:"Start Date"}),e.jsx(s,{id:"start-date",type:"date"})]}),e.jsxs("div",{className:"grid gap-2",children:[e.jsx(l,{htmlFor:"end-date",children:"End Date"}),e.jsx(s,{id:"end-date",type:"date"})]})]})]})]}),e.jsxs(x,{children:[e.jsx(p,{asChild:!0,children:e.jsx(t,{variant:"ghost",children:"Cancel"})}),e.jsx(p,{asChild:!0,children:e.jsx(t,{children:"Save Settings"})})]})]})]})},y={render:()=>e.jsxs(d,{children:[e.jsx(c,{asChild:!0,children:e.jsx(t,{children:"Edit Question"})}),e.jsxs(a,{className:"w-[400px] sm:w-[540px]",children:[e.jsxs(n,{children:[e.jsx(r,{children:"Edit Question"}),e.jsx(h,{children:"Configure question settings and validation."})]}),e.jsxs("div",{className:"py-6 space-y-6",children:[e.jsxs("div",{className:"grid gap-3",children:[e.jsx(l,{htmlFor:"question-text",children:"Question Text"}),e.jsx(s,{id:"question-text",defaultValue:"How satisfied are you with our service?"})]}),e.jsxs("div",{className:"grid gap-3",children:[e.jsx(l,{children:"Question Type"}),e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsxs(t,{variant:"outline",className:"justify-start",children:[e.jsx("span",{className:"mr-2",children:"📝"})," Text"]}),e.jsxs(t,{variant:"outline",className:"justify-start border-primary",children:[e.jsx("span",{className:"mr-2",children:"☑️"})," Multiple Choice"]}),e.jsxs(t,{variant:"outline",className:"justify-start",children:[e.jsx("span",{className:"mr-2",children:"⭐"})," Rating"]}),e.jsxs(t,{variant:"outline",className:"justify-start",children:[e.jsx("span",{className:"mr-2",children:"📊"})," Matrix"]})]})]}),e.jsxs("div",{className:"grid gap-3",children:[e.jsx(l,{children:"Options"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(s,{defaultValue:"Very Satisfied"}),e.jsx(s,{defaultValue:"Satisfied"}),e.jsx(s,{defaultValue:"Neutral"}),e.jsx(s,{defaultValue:"Dissatisfied"}),e.jsx(t,{variant:"ghost",size:"sm",className:"w-full",children:"+ Add Option"})]})]})]}),e.jsxs(x,{children:[e.jsx(p,{asChild:!0,children:e.jsx(t,{variant:"ghost",children:"Cancel"})}),e.jsx(p,{asChild:!0,children:e.jsx(t,{children:"Save Question"})})]})]})]})};var w,T,k;S.parameters={...S.parameters,docs:{...(w=S.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline">Open Sheet</Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Edit profile</SheetTitle>
                    <SheetDescription>
                        Make changes to your profile here. Click save when you're done.
                    </SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Name
                        </Label>
                        <Input id="name" defaultValue="Pedro Duarte" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            Username
                        </Label>
                        <Input id="username" defaultValue="@peduarte" className="col-span-3" />
                    </div>
                </div>
                <SheetFooter>
                    <SheetClose asChild>
                        <Button type="submit">Save changes</Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
}`,...(k=(T=S.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var L,D,F;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline">Open Left</Button>
            </SheetTrigger>
            <SheetContent side="left">
                <SheetHeader>
                    <SheetTitle>Navigation</SheetTitle>
                    <SheetDescription>
                        Access your workspace and settings.
                    </SheetDescription>
                </SheetHeader>
                <div className="py-4 space-y-4">
                    <Button variant="ghost" className="w-full justify-start">
                        <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        Dashboard
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                        <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Surveys
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                        <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        Settings
                    </Button>
                </div>
            </SheetContent>
        </Sheet>
}`,...(F=(D=g.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var H,V,I;j.parameters={...j.parameters,docs:{...(H=j.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline">Open Top</Button>
            </SheetTrigger>
            <SheetContent side="top" className="h-[300px]">
                <SheetHeader>
                    <SheetTitle>Search</SheetTitle>
                    <SheetDescription>
                        Search for surveys, questions, or responses.
                    </SheetDescription>
                </SheetHeader>
                <div className="py-4">
                    <Input placeholder="Type to search..." className="w-full" />
                </div>
            </SheetContent>
        </Sheet>
}`,...(I=(V=j.parameters)==null?void 0:V.docs)==null?void 0:I.source}}};var M,O,R;v.parameters={...v.parameters,docs:{...(M=v.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline">Open Bottom</Button>
            </SheetTrigger>
            <SheetContent side="bottom" className="h-[300px]">
                <SheetHeader>
                    <SheetTitle>Quick Actions</SheetTitle>
                    <SheetDescription>
                        Choose an action to perform.
                    </SheetDescription>
                </SheetHeader>
                <div className="grid grid-cols-3 gap-4 py-4 max-w-md mx-auto">
                    <Button variant="outline" className="flex flex-col h-20">
                        <span className="text-2xl mb-1">📝</span>
                        <span className="text-xs">New Survey</span>
                    </Button>
                    <Button variant="outline" className="flex flex-col h-20">
                        <span className="text-2xl mb-1">📊</span>
                        <span className="text-xs">Analytics</span>
                    </Button>
                    <Button variant="outline" className="flex flex-col h-20">
                        <span className="text-2xl mb-1">👥</span>
                        <span className="text-xs">Share</span>
                    </Button>
                </div>
            </SheetContent>
        </Sheet>
}`,...(R=(O=v.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var z,A,Q;f.parameters={...f.parameters,docs:{...(z=f.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4">
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline">Left</Button>
                </SheetTrigger>
                <SheetContent side="left">
                    <SheetHeader>
                        <SheetTitle>Left Sheet</SheetTitle>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline">Right</Button>
                </SheetTrigger>
                <SheetContent side="right">
                    <SheetHeader>
                        <SheetTitle>Right Sheet</SheetTitle>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline">Top</Button>
                </SheetTrigger>
                <SheetContent side="top">
                    <SheetHeader>
                        <SheetTitle>Top Sheet</SheetTitle>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline">Bottom</Button>
                </SheetTrigger>
                <SheetContent side="bottom">
                    <SheetHeader>
                        <SheetTitle>Bottom Sheet</SheetTitle>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </div>
}`,...(Q=(A=f.parameters)==null?void 0:A.docs)==null?void 0:Q.source}}};var _,E,W;N.parameters={...N.parameters,docs:{...(_=N.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline">
                    <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Survey Settings
                </Button>
            </SheetTrigger>
            <SheetContent className="w-[400px] sm:w-[540px]">
                <SheetHeader>
                    <SheetTitle>Survey Settings</SheetTitle>
                    <SheetDescription>
                        Configure your survey preferences and distribution options.
                    </SheetDescription>
                </SheetHeader>
                <div className="py-6 space-y-6">
                    <div className="space-y-4">
                        <h4 className="text-sm font-medium">General</h4>
                        <div className="grid gap-3">
                            <div className="grid gap-2">
                                <Label htmlFor="survey-title">Survey Title</Label>
                                <Input id="survey-title" defaultValue="Customer Satisfaction Survey" />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="description">Description</Label>
                                <Input id="description" placeholder="Optional description..." />
                            </div>
                        </div>
                    </div>
                    <Separator />
                    <div className="space-y-4">
                        <h4 className="text-sm font-medium">Responses</h4>
                        <div className="grid gap-3">
                            <div className="flex items-center justify-between">
                                <Label htmlFor="anonymous">Anonymous responses</Label>
                                <input type="checkbox" id="anonymous" defaultChecked className="h-4 w-4" />
                            </div>
                            <div className="flex items-center justify-between">
                                <Label htmlFor="multiple">Allow multiple responses</Label>
                                <input type="checkbox" id="multiple" className="h-4 w-4" />
                            </div>
                        </div>
                    </div>
                    <Separator />
                    <div className="space-y-4">
                        <h4 className="text-sm font-medium">Schedule</h4>
                        <div className="grid gap-3">
                            <div className="grid gap-2">
                                <Label htmlFor="start-date">Start Date</Label>
                                <Input id="start-date" type="date" />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="end-date">End Date</Label>
                                <Input id="end-date" type="date" />
                            </div>
                        </div>
                    </div>
                </div>
                <SheetFooter>
                    <SheetClose asChild>
                        <Button variant="ghost">Cancel</Button>
                    </SheetClose>
                    <SheetClose asChild>
                        <Button>Save Settings</Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
}`,...(W=(E=N.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};var P,q,G;y.parameters={...y.parameters,docs:{...(P=y.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <Sheet>
            <SheetTrigger asChild>
                <Button>Edit Question</Button>
            </SheetTrigger>
            <SheetContent className="w-[400px] sm:w-[540px]">
                <SheetHeader>
                    <SheetTitle>Edit Question</SheetTitle>
                    <SheetDescription>
                        Configure question settings and validation.
                    </SheetDescription>
                </SheetHeader>
                <div className="py-6 space-y-6">
                    <div className="grid gap-3">
                        <Label htmlFor="question-text">Question Text</Label>
                        <Input id="question-text" defaultValue="How satisfied are you with our service?" />
                    </div>
                    <div className="grid gap-3">
                        <Label>Question Type</Label>
                        <div className="grid grid-cols-2 gap-2">
                            <Button variant="outline" className="justify-start">
                                <span className="mr-2">📝</span> Text
                            </Button>
                            <Button variant="outline" className="justify-start border-primary">
                                <span className="mr-2">☑️</span> Multiple Choice
                            </Button>
                            <Button variant="outline" className="justify-start">
                                <span className="mr-2">⭐</span> Rating
                            </Button>
                            <Button variant="outline" className="justify-start">
                                <span className="mr-2">📊</span> Matrix
                            </Button>
                        </div>
                    </div>
                    <div className="grid gap-3">
                        <Label>Options</Label>
                        <div className="space-y-2">
                            <Input defaultValue="Very Satisfied" />
                            <Input defaultValue="Satisfied" />
                            <Input defaultValue="Neutral" />
                            <Input defaultValue="Dissatisfied" />
                            <Button variant="ghost" size="sm" className="w-full">
                                + Add Option
                            </Button>
                        </div>
                    </div>
                </div>
                <SheetFooter>
                    <SheetClose asChild>
                        <Button variant="ghost">Cancel</Button>
                    </SheetClose>
                    <SheetClose asChild>
                        <Button>Save Question</Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
}`,...(G=(q=y.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};const Ie=["Default","Left","Top","Bottom","AllSides","SurveySettingsPanel","QuestionEditorPanel"];export{f as AllSides,v as Bottom,S as Default,g as Left,y as QuestionEditorPanel,N as SurveySettingsPanel,j as Top,Ie as __namedExportsOrder,Ve as default};
