import{j as e}from"./jsx-runtime-BYYWji4R.js";import{r as b}from"./index-ClcD9ViR.js";import{c as H}from"./index-DW48STyt.js";import{c as we}from"./index-CWz5EflU.js";import{R as Le,I as ke,c as ue}from"./index-CGGLQkrZ.js";import{P as Se}from"./index-B2NcgzwI.js";import{P as M}from"./index-C59fdHCL.js";import{u as _e}from"./index-CZKF78Oq.js";import{u as Ve}from"./index-B0ATiKj9.js";import{u as Ae}from"./index-CaubhJIw.js";import{c as z}from"./utils-CDN07tui.js";import{C as p,a as g,b as x,c as C,d as v,e as F}from"./card-DKkmviRM.js";import{L as y}from"./label-D3XcEZ0Y.js";import{I as w}from"./input-D4wTwlKS.js";import{B as R}from"./button-DY4UnA7S.js";import{B as Be}from"./badge-CDZW3nus.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BpI74HIb.js";import"./index-Bew1Yeam.js";import"./index-CyBucMil.js";import"./index-kkVLZR_L.js";import"./index-CafsI6Qv.js";import"./index-Drr-0Uuw.js";import"./index-C2vczdB5.js";var I="Tabs",[De]=we(I,[ue]),me=ue(),[Me,P]=De(I),pe=b.forwardRef((s,t)=>{const{__scopeTabs:n,value:o,onValueChange:l,defaultValue:h,orientation:i="horizontal",dir:f,activationMode:j="automatic",...N}=s,c=_e(f),[d,T]=Ve({prop:o,onChange:l,defaultProp:h??"",caller:I});return e.jsx(Me,{scope:n,baseId:Ae(),value:d,onValueChange:T,orientation:i,dir:c,activationMode:j,children:e.jsx(M.div,{dir:c,"data-orientation":i,...N,ref:t})})});pe.displayName=I;var ge="TabsList",xe=b.forwardRef((s,t)=>{const{__scopeTabs:n,loop:o=!0,...l}=s,h=P(ge,n),i=me(n);return e.jsx(Le,{asChild:!0,...i,orientation:h.orientation,dir:h.dir,loop:o,children:e.jsx(M.div,{role:"tablist","aria-orientation":h.orientation,...l,ref:t})})});xe.displayName=ge;var ve="TabsTrigger",he=b.forwardRef((s,t)=>{const{__scopeTabs:n,value:o,disabled:l=!1,...h}=s,i=P(ve,n),f=me(n),j=Te(i.baseId,o),N=Ce(i.baseId,o),c=o===i.value;return e.jsx(ke,{asChild:!0,...f,focusable:!l,active:c,children:e.jsx(M.button,{type:"button",role:"tab","aria-selected":c,"aria-controls":N,"data-state":c?"active":"inactive","data-disabled":l?"":void 0,disabled:l,id:j,...h,ref:t,onMouseDown:H(s.onMouseDown,d=>{!l&&d.button===0&&d.ctrlKey===!1?i.onValueChange(o):d.preventDefault()}),onKeyDown:H(s.onKeyDown,d=>{[" ","Enter"].includes(d.key)&&i.onValueChange(o)}),onFocus:H(s.onFocus,()=>{const d=i.activationMode!=="manual";!c&&!l&&d&&i.onValueChange(o)})})})});he.displayName=ve;var be="TabsContent",fe=b.forwardRef((s,t)=>{const{__scopeTabs:n,value:o,forceMount:l,children:h,...i}=s,f=P(be,n),j=Te(f.baseId,o),N=Ce(f.baseId,o),c=o===f.value,d=b.useRef(c);return b.useEffect(()=>{const T=requestAnimationFrame(()=>d.current=!1);return()=>cancelAnimationFrame(T)},[]),e.jsx(Se,{present:l||c,children:({present:T})=>e.jsx(M.div,{"data-state":c?"active":"inactive","data-orientation":f.orientation,role:"tabpanel","aria-labelledby":j,hidden:!T,id:N,tabIndex:0,...i,ref:t,style:{...s.style,animationDuration:d.current?"0s":void 0},children:T&&h})})});fe.displayName=be;function Te(s,t){return`${s}-trigger-${t}`}function Ce(s,t){return`${s}-content-${t}`}var Ie=pe,je=xe,Ne=he,ye=fe;const u=Ie,m=b.forwardRef(({className:s,...t},n)=>e.jsx(je,{ref:n,className:z("inline-flex h-10 items-center justify-center rounded-md bg-primary/10 p-1 text-muted-foreground border border-border-subtle shadow-sm",s),...t}));m.displayName=je.displayName;const a=b.forwardRef(({className:s,...t},n)=>e.jsx(Ne,{ref:n,className:z("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:hover:text-accent-foreground data-[state=active]:shadow-sm data-[state=active]:border-b-0",s),...t}));a.displayName=Ne.displayName;const r=b.forwardRef(({className:s,...t},n)=>e.jsx(ye,{ref:n,className:z("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",s),...t}));r.displayName=ye.displayName;try{u.displayName="Tabs",u.__docgenInfo={description:"",displayName:"Tabs",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{m.displayName="TabsList",m.__docgenInfo={description:"",displayName:"TabsList",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{a.displayName="TabsTrigger",a.__docgenInfo={description:"",displayName:"TabsTrigger",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{r.displayName="TabsContent",r.__docgenInfo={description:"",displayName:"TabsContent",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const oa={title:"Components/Navigation/Tabs",component:u,parameters:{layout:"centered"},tags:["autodocs"]},L={render:()=>e.jsxs(u,{defaultValue:"account",className:"w-[400px]",children:[e.jsxs(m,{className:"grid w-full grid-cols-2",children:[e.jsx(a,{value:"account",children:"Account"}),e.jsx(a,{value:"password",children:"Password"})]}),e.jsx(r,{value:"account",children:e.jsxs(p,{children:[e.jsxs(g,{children:[e.jsx(x,{children:"Account"}),e.jsx(C,{children:"Make changes to your account here. Click save when you're done."})]}),e.jsxs(v,{className:"space-y-2",children:[e.jsxs("div",{className:"space-y-1",children:[e.jsx(y,{htmlFor:"name",children:"Name"}),e.jsx(w,{id:"name",defaultValue:"Pedro Duarte"})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsx(y,{htmlFor:"username",children:"Username"}),e.jsx(w,{id:"username",defaultValue:"@peduarte"})]})]}),e.jsx(F,{children:e.jsx(R,{children:"Save changes"})})]})}),e.jsx(r,{value:"password",children:e.jsxs(p,{children:[e.jsxs(g,{children:[e.jsx(x,{children:"Password"}),e.jsx(C,{children:"Change your password here. After saving, you'll be logged out."})]}),e.jsxs(v,{className:"space-y-2",children:[e.jsxs("div",{className:"space-y-1",children:[e.jsx(y,{htmlFor:"current",children:"Current password"}),e.jsx(w,{id:"current",type:"password"})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsx(y,{htmlFor:"new",children:"New password"}),e.jsx(w,{id:"new",type:"password"})]})]}),e.jsx(F,{children:e.jsx(R,{children:"Save password"})})]})})]})},k={render:()=>e.jsxs(u,{defaultValue:"overview",className:"w-[400px]",children:[e.jsxs(m,{children:[e.jsx(a,{value:"overview",children:"Overview"}),e.jsx(a,{value:"analytics",children:"Analytics"}),e.jsx(a,{value:"reports",children:"Reports"}),e.jsx(a,{value:"notifications",children:"Notifications"})]}),e.jsx(r,{value:"overview",className:"p-4",children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"Overview content goes here."})}),e.jsx(r,{value:"analytics",className:"p-4",children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"Analytics content goes here."})}),e.jsx(r,{value:"reports",className:"p-4",children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"Reports content goes here."})}),e.jsx(r,{value:"notifications",className:"p-4",children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"Notifications content goes here."})})]})},S={render:()=>e.jsxs(u,{defaultValue:"music",className:"w-[400px]",children:[e.jsxs(m,{className:"grid w-full grid-cols-3",children:[e.jsxs(a,{value:"music",className:"flex items-center gap-2",children:[e.jsx("svg",{className:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"})}),"Music"]}),e.jsxs(a,{value:"podcasts",className:"flex items-center gap-2",children:[e.jsx("svg",{className:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"})}),"Podcasts"]}),e.jsxs(a,{value:"live",className:"flex items-center gap-2",children:[e.jsx("svg",{className:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z"})}),"Live"]})]}),e.jsx(r,{value:"music",className:"p-4",children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"Your music library."})}),e.jsx(r,{value:"podcasts",className:"p-4",children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"Your podcast subscriptions."})}),e.jsx(r,{value:"live",className:"p-4",children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"Live radio stations."})})]})},_={render:()=>e.jsxs(u,{defaultValue:"all",className:"w-[400px]",children:[e.jsxs(m,{children:[e.jsx(a,{value:"all",children:"All"}),e.jsxs(a,{value:"unread",className:"flex items-center gap-2",children:["Unread",e.jsx(Be,{variant:"destructive",className:"h-5 px-1.5 text-xs",children:"12"})]}),e.jsx(a,{value:"archived",children:"Archived"})]}),e.jsx(r,{value:"all",className:"p-4",children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"All messages."})}),e.jsx(r,{value:"unread",className:"p-4",children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"12 unread messages."})}),e.jsx(r,{value:"archived",className:"p-4",children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"Archived messages."})})]})},V={render:()=>e.jsxs(u,{defaultValue:"active",className:"w-[400px]",children:[e.jsxs(m,{children:[e.jsx(a,{value:"active",children:"Active"}),e.jsx(a,{value:"draft",children:"Draft"}),e.jsx(a,{value:"archived",disabled:!0,children:"Archived"})]}),e.jsx(r,{value:"active",className:"p-4",children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"Active surveys."})}),e.jsx(r,{value:"draft",className:"p-4",children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"Draft surveys."})})]})},A={render:()=>e.jsx("div",{className:"flex gap-4 w-[500px]",children:e.jsxs(u,{defaultValue:"general",orientation:"vertical",className:"flex gap-4 w-full",children:[e.jsxs(m,{className:"flex flex-col h-auto bg-transparent",children:[e.jsx(a,{value:"general",className:"w-full justify-start rounded-none border-r-2 border-transparent data-[state=active]:text-primary data-[state=active]:border-primary data-[state=active]:bg-transparent shadow-none",children:"General"}),e.jsx(a,{value:"security",className:"w-full justify-start rounded-none border-r-2 border-transparent data-[state=active]:text-primary data-[state=active]:border-primary data-[state=active]:bg-transparent shadow-none",children:"Security"}),e.jsx(a,{value:"notifications",className:"w-full justify-start rounded-none border-r-2 border-transparent data-[state=active]:text-primary data-[state=active]:border-primary data-[state=active]:bg-transparent shadow-none",children:"Notifications"}),e.jsx(a,{value:"billing",className:"w-full justify-start rounded-none border-r-2 border-transparent data-[state=active]:text-primary data-[state=active]:border-primary data-[state=active]:bg-transparent shadow-none",children:"Billing"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx(r,{value:"general",children:e.jsxs(p,{children:[e.jsx(g,{children:e.jsx(x,{children:"General Settings"})}),e.jsx(v,{children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"Configure general settings here."})})]})}),e.jsx(r,{value:"security",children:e.jsxs(p,{children:[e.jsx(g,{children:e.jsx(x,{children:"Security Settings"})}),e.jsx(v,{children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"Configure security settings here."})})]})}),e.jsx(r,{value:"notifications",children:e.jsxs(p,{children:[e.jsx(g,{children:e.jsx(x,{children:"Notification Preferences"})}),e.jsx(v,{children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"Configure notification settings here."})})]})}),e.jsx(r,{value:"billing",children:e.jsxs(p,{children:[e.jsx(g,{children:e.jsx(x,{children:"Billing Information"})}),e.jsx(v,{children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"Manage billing information here."})})]})})]})]})})},B={render:()=>e.jsxs(u,{defaultValue:"build",className:"w-[500px]",children:[e.jsxs(m,{className:"grid w-full grid-cols-4",children:[e.jsxs(a,{value:"build",className:"flex items-center gap-2",children:[e.jsx("svg",{className:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"})}),"Build"]}),e.jsxs(a,{value:"logic",className:"flex items-center gap-2",children:[e.jsx("svg",{className:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 10V3L4 14h7v7l9-11h-7z"})}),"Logic"]}),e.jsxs(a,{value:"distribute",className:"flex items-center gap-2",children:[e.jsx("svg",{className:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"})}),"Distribute"]}),e.jsxs(a,{value:"analyze",className:"flex items-center gap-2",children:[e.jsx("svg",{className:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"})}),"Analyze"]})]}),e.jsx(r,{value:"build",children:e.jsxs(p,{children:[e.jsxs(g,{children:[e.jsx(x,{children:"Survey Builder"}),e.jsx(C,{children:"Add and configure questions for your survey."})]}),e.jsx(v,{children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"Drag and drop questions to build your survey."})})]})}),e.jsx(r,{value:"logic",children:e.jsxs(p,{children:[e.jsxs(g,{children:[e.jsx(x,{children:"Survey Logic"}),e.jsx(C,{children:"Configure skip logic and branching rules."})]}),e.jsx(v,{children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"Set up conditional paths based on responses."})})]})}),e.jsx(r,{value:"distribute",children:e.jsxs(p,{children:[e.jsxs(g,{children:[e.jsx(x,{children:"Distribution"}),e.jsx(C,{children:"Share your survey with respondents."})]}),e.jsx(v,{children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"Choose how to distribute your survey."})})]})}),e.jsx(r,{value:"analyze",children:e.jsxs(p,{children:[e.jsxs(g,{children:[e.jsx(x,{children:"Analysis"}),e.jsx(C,{children:"View and analyze survey responses."})]}),e.jsx(v,{children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"Explore charts and insights from your data."})})]})})]})},D={render:()=>e.jsxs(u,{defaultValue:"profile",className:"w-[400px]",children:[e.jsxs(m,{className:"bg-transparent border-b border-primary/20 rounded-none w-full justify-start gap-4 p-0",children:[e.jsx(a,{value:"profile",className:"rounded-none border-b-2 border-transparent hover:text-primary data-[state=active]:text-primary data-[state=active]:border-primary data-[state=active]:bg-transparent shadow-none",children:"Profile"}),e.jsx(a,{value:"settings",className:"rounded-none border-b-2 border-transparent hover:text-primary data-[state=active]:text-primary data-[state=active]:border-primary data-[state=active]:bg-transparent shadow-none",children:"Settings"}),e.jsx(a,{value:"team",className:"rounded-none border-b-2 border-transparent hover:text-primary data-[state=active]:text-primary data-[state=active]:border-primary data-[state=active]:bg-transparent shadow-none",children:"Team"})]}),e.jsx(r,{value:"profile",className:"pt-4",children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"Profile content."})}),e.jsx(r,{value:"settings",className:"pt-4",children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"Settings content."})}),e.jsx(r,{value:"team",className:"pt-4",children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"Team content."})})]})};var W,E,G;L.parameters={...L.parameters,docs:{...(W=L.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="Pedro Duarte" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue="@peduarte" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
}`,...(G=(E=L.parameters)==null?void 0:E.docs)==null?void 0:G.source}}};var q,$,O;k.parameters={...k.parameters,docs:{...(q=k.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="overview" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="reports">Reports</TabsTrigger>
        <TabsTrigger value="notifications">Notifications</TabsTrigger>
      </TabsList>
      <TabsContent value="overview" className="p-4">
        <p className="text-sm text-muted-foreground">
          Overview content goes here.
        </p>
      </TabsContent>
      <TabsContent value="analytics" className="p-4">
        <p className="text-sm text-muted-foreground">
          Analytics content goes here.
        </p>
      </TabsContent>
      <TabsContent value="reports" className="p-4">
        <p className="text-sm text-muted-foreground">
          Reports content goes here.
        </p>
      </TabsContent>
      <TabsContent value="notifications" className="p-4">
        <p className="text-sm text-muted-foreground">
          Notifications content goes here.
        </p>
      </TabsContent>
    </Tabs>
}`,...(O=($=k.parameters)==null?void 0:$.docs)==null?void 0:O.source}}};var U,Y,K;S.parameters={...S.parameters,docs:{...(U=S.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="music" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="music" className="flex items-center gap-2">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
          </svg>
          Music
        </TabsTrigger>
        <TabsTrigger value="podcasts" className="flex items-center gap-2">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
          </svg>
          Podcasts
        </TabsTrigger>
        <TabsTrigger value="live" className="flex items-center gap-2">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z" />
          </svg>
          Live
        </TabsTrigger>
      </TabsList>
      <TabsContent value="music" className="p-4">
        <p className="text-sm text-muted-foreground">Your music library.</p>
      </TabsContent>
      <TabsContent value="podcasts" className="p-4">
        <p className="text-sm text-muted-foreground">
          Your podcast subscriptions.
        </p>
      </TabsContent>
      <TabsContent value="live" className="p-4">
        <p className="text-sm text-muted-foreground">Live radio stations.</p>
      </TabsContent>
    </Tabs>
}`,...(K=(Y=S.parameters)==null?void 0:Y.docs)==null?void 0:K.source}}};var J,Q,X;_.parameters={..._.parameters,docs:{...(J=_.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="all" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="all">All</TabsTrigger>
        <TabsTrigger value="unread" className="flex items-center gap-2">
          Unread
          <Badge variant="destructive" className="h-5 px-1.5 text-xs">
            12
          </Badge>
        </TabsTrigger>
        <TabsTrigger value="archived">Archived</TabsTrigger>
      </TabsList>
      <TabsContent value="all" className="p-4">
        <p className="text-sm text-muted-foreground">All messages.</p>
      </TabsContent>
      <TabsContent value="unread" className="p-4">
        <p className="text-sm text-muted-foreground">12 unread messages.</p>
      </TabsContent>
      <TabsContent value="archived" className="p-4">
        <p className="text-sm text-muted-foreground">Archived messages.</p>
      </TabsContent>
    </Tabs>
}`,...(X=(Q=_.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,ee,ae;V.parameters={...V.parameters,docs:{...(Z=V.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="active" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="active">Active</TabsTrigger>
        <TabsTrigger value="draft">Draft</TabsTrigger>
        <TabsTrigger value="archived" disabled>
          Archived
        </TabsTrigger>
      </TabsList>
      <TabsContent value="active" className="p-4">
        <p className="text-sm text-muted-foreground">Active surveys.</p>
      </TabsContent>
      <TabsContent value="draft" className="p-4">
        <p className="text-sm text-muted-foreground">Draft surveys.</p>
      </TabsContent>
    </Tabs>
}`,...(ae=(ee=V.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var re,se,te;A.parameters={...A.parameters,docs:{...(re=A.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4 w-[500px]">
      <Tabs defaultValue="general" orientation="vertical" className="flex gap-4 w-full">
        <TabsList className="flex flex-col h-auto bg-transparent">
          <TabsTrigger value="general" className="w-full justify-start rounded-none border-r-2 border-transparent data-[state=active]:text-primary data-[state=active]:border-primary data-[state=active]:bg-transparent shadow-none">
            General
          </TabsTrigger>
          <TabsTrigger value="security" className="w-full justify-start rounded-none border-r-2 border-transparent data-[state=active]:text-primary data-[state=active]:border-primary data-[state=active]:bg-transparent shadow-none">
            Security
          </TabsTrigger>
          <TabsTrigger value="notifications" className="w-full justify-start rounded-none border-r-2 border-transparent data-[state=active]:text-primary data-[state=active]:border-primary data-[state=active]:bg-transparent shadow-none">
            Notifications
          </TabsTrigger>
          <TabsTrigger value="billing" className="w-full justify-start rounded-none border-r-2 border-transparent data-[state=active]:text-primary data-[state=active]:border-primary data-[state=active]:bg-transparent shadow-none">
            Billing
          </TabsTrigger>
        </TabsList>
        <div className="flex-1">
          <TabsContent value="general">
            <Card>
              <CardHeader>
                <CardTitle>General Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Configure general settings here.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="security">
            <Card>
              <CardHeader>
                <CardTitle>Security Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Configure security settings here.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Configure notification settings here.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="billing">
            <Card>
              <CardHeader>
                <CardTitle>Billing Information</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Manage billing information here.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </div>
      </Tabs>
    </div>
}`,...(te=(se=A.parameters)==null?void 0:se.docs)==null?void 0:te.source}}};var ne,oe,ie;B.parameters={...B.parameters,docs:{...(ne=B.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="build" className="w-[500px]">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="build" className="flex items-center gap-2">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
          Build
        </TabsTrigger>
        <TabsTrigger value="logic" className="flex items-center gap-2">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Logic
        </TabsTrigger>
        <TabsTrigger value="distribute" className="flex items-center gap-2">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
          </svg>
          Distribute
        </TabsTrigger>
        <TabsTrigger value="analyze" className="flex items-center gap-2">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          Analyze
        </TabsTrigger>
      </TabsList>
      <TabsContent value="build">
        <Card>
          <CardHeader>
            <CardTitle>Survey Builder</CardTitle>
            <CardDescription>
              Add and configure questions for your survey.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Drag and drop questions to build your survey.
            </p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="logic">
        <Card>
          <CardHeader>
            <CardTitle>Survey Logic</CardTitle>
            <CardDescription>
              Configure skip logic and branching rules.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Set up conditional paths based on responses.
            </p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="distribute">
        <Card>
          <CardHeader>
            <CardTitle>Distribution</CardTitle>
            <CardDescription>
              Share your survey with respondents.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Choose how to distribute your survey.
            </p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="analyze">
        <Card>
          <CardHeader>
            <CardTitle>Analysis</CardTitle>
            <CardDescription>
              View and analyze survey responses.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Explore charts and insights from your data.
            </p>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
}`,...(ie=(oe=B.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var de,le,ce;D.parameters={...D.parameters,docs:{...(de=D.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="profile" className="w-[400px]">
      <TabsList className="bg-transparent border-b border-primary/20 rounded-none w-full justify-start gap-4 p-0">
        <TabsTrigger value="profile" className="rounded-none border-b-2 border-transparent hover:text-primary data-[state=active]:text-primary data-[state=active]:border-primary data-[state=active]:bg-transparent shadow-none">
          Profile
        </TabsTrigger>
        <TabsTrigger value="settings" className="rounded-none border-b-2 border-transparent hover:text-primary data-[state=active]:text-primary data-[state=active]:border-primary data-[state=active]:bg-transparent shadow-none">
          Settings
        </TabsTrigger>
        <TabsTrigger value="team" className="rounded-none border-b-2 border-transparent hover:text-primary data-[state=active]:text-primary data-[state=active]:border-primary data-[state=active]:bg-transparent shadow-none">
          Team
        </TabsTrigger>
      </TabsList>
      <TabsContent value="profile" className="pt-4">
        <p className="text-sm text-muted-foreground">Profile content.</p>
      </TabsContent>
      <TabsContent value="settings" className="pt-4">
        <p className="text-sm text-muted-foreground">Settings content.</p>
      </TabsContent>
      <TabsContent value="team" className="pt-4">
        <p className="text-sm text-muted-foreground">Team content.</p>
      </TabsContent>
    </Tabs>
}`,...(ce=(le=D.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};const ia=["Default","Simple","WithIcons","WithBadge","DisabledTab","VerticalTabs","SurveyTabs","UnderlineStyle"];export{L as Default,V as DisabledTab,k as Simple,B as SurveyTabs,D as UnderlineStyle,A as VerticalTabs,_ as WithBadge,S as WithIcons,ia as __namedExportsOrder,oa as default};
