import{j as e}from"./jsx-runtime-BYYWji4R.js";import{r as x}from"./index-ClcD9ViR.js";import{c as oe}from"./index-C2vczdB5.js";import{c as f}from"./utils-CDN07tui.js";import{B as t}from"./button-DY4UnA7S.js";import{S as de}from"./scroll-area-Rj3XeIs5.js";import{S as l}from"./separator-t5dMxVEz.js";import{af as ie,ag as ce,ah as ue,P as D,u as $,s as ee,F as ae,ai as me,aj as pe,q as he,f as xe,c as fe,ak as ve,al as be}from"./icons-BXU3tp_f.js";import{S as w}from"./StatsCard-YHmsQrzI.js";import{I as ge}from"./input-D4wTwlKS.js";import{B as S}from"./badge-CDZW3nus.js";const Ne=oe("flex h-screen bg-background",{variants:{variant:{"left-sidebar":"flex-row","right-sidebar":"flex-row-reverse","full-width":"flex-col"}},defaultVariants:{variant:"left-sidebar"}}),ye={sm:{expanded:"w-56",collapsed:"w-16"},md:{expanded:"w-64",collapsed:"w-16"},lg:{expanded:"w-72",collapsed:"w-20"}},N=x.forwardRef(({children:a,width:r="md",collapsed:s=!1,onCollapsedChange:n,showCollapseButton:v=!0,className:i},b)=>{const j=ye[r];return e.jsxs("aside",{ref:b,role:"navigation","aria-label":"Main navigation",className:f("flex h-full flex-col bg-card transition-all duration-300",s?j.collapsed:j.expanded,i),children:[e.jsx(de,{className:"flex-1",children:e.jsx("div",{className:f("p-4",s&&"px-2"),children:a})}),v&&n&&e.jsxs(e.Fragment,{children:[e.jsx(l,{}),e.jsx("div",{className:"p-2",children:e.jsxs(t,{variant:"ghost",size:"sm",className:"w-full justify-center",onClick:()=>n(!s),children:[s?e.jsx(ie,{className:"h-4 w-4"}):e.jsx(ce,{className:"h-4 w-4"}),!s&&e.jsx("span",{className:"ml-2",children:"Collapse"})]})})]})]})});N.displayName="DashboardSidebar";const o=x.forwardRef(({title:a,subtitle:r,actions:s,onMenuClick:n,showMenuToggle:v=!1,className:i},b)=>e.jsxs("header",{ref:b,className:f("flex h-14 items-center justify-between border-b bg-card px-4 lg:px-6",i),children:[e.jsxs("div",{className:"flex items-center gap-4",children:[v&&e.jsxs(t,{variant:"ghost",size:"icon",className:"lg:hidden",onClick:n,children:[e.jsx(ue,{className:"h-5 w-5"}),e.jsx("span",{className:"sr-only",children:"Toggle menu"})]}),e.jsxs("div",{children:[a&&e.jsx("h1",{className:"text-lg font-semibold",children:a}),r&&e.jsx("div",{className:"text-sm text-muted-foreground",children:r})]})]}),s&&e.jsx("div",{className:"flex items-center gap-2",children:s})]}));o.displayName="DashboardHeader";const y=x.forwardRef(({children:a,padded:r=!0,className:s},n)=>e.jsx("main",{ref:n,className:f("flex-1 overflow-auto",r&&"p-4 lg:p-6",s),children:a}));y.displayName="DashboardContent";const d=x.forwardRef(({variant:a="left-sidebar",sidebar:r,header:s,children:n,sidebarWidth:v="md",collapsible:i=!1,defaultCollapsed:b=!1,className:j},se)=>{const[re,te]=x.useState(b),ne=a!=="full-width"&&r,le=a==="right-sidebar"?"border-l border-r-0":"border-r";return e.jsxs("div",{ref:se,className:f(Ne({variant:a}),j),children:[ne&&e.jsx(N,{width:v,collapsed:i?re:!1,onCollapsedChange:i?te:void 0,showCollapseButton:i,className:le,children:r}),e.jsxs("div",{className:"flex flex-1 flex-col overflow-hidden",children:[s,e.jsx(y,{children:n})]})]})});d.displayName="DashboardLayout";try{d.displayName="DashboardLayout",d.__docgenInfo={description:`DashboardLayout - Flexible page layout for dashboard interfaces

Variants:
- **left-sidebar**: Navigation on left, content on right
- **right-sidebar**: Content on left, filters/details on right
- **full-width**: No sidebar, content spans full width`,displayName:"DashboardLayout",props:{variant:{defaultValue:{value:"left-sidebar"},description:"Layout variant",name:"variant",required:!1,type:{name:"enum",value:[{value:'"left-sidebar"'},{value:'"right-sidebar"'},{value:'"full-width"'}]}},sidebar:{defaultValue:null,description:"Sidebar content (ignored for full-width)",name:"sidebar",required:!1,type:{name:"ReactNode"}},header:{defaultValue:null,description:"Optional header content",name:"header",required:!1,type:{name:"ReactNode"}},children:{defaultValue:null,description:"Main content",name:"children",required:!0,type:{name:"ReactNode"}},sidebarWidth:{defaultValue:{value:"md"},description:"Sidebar width preset",name:"sidebarWidth",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"lg"'},{value:'"md"'}]}},collapsible:{defaultValue:{value:"false"},description:"Allow sidebar to collapse",name:"collapsible",required:!1,type:{name:"boolean"}},defaultCollapsed:{defaultValue:{value:"false"},description:"Default collapsed state",name:"defaultCollapsed",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Additional CSS classes",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{N.displayName="DashboardSidebar",N.__docgenInfo={description:"",displayName:"DashboardSidebar",props:{children:{defaultValue:null,description:"Sidebar content",name:"children",required:!0,type:{name:"ReactNode"}},width:{defaultValue:{value:"md"},description:"Width preset",name:"width",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"lg"'},{value:'"md"'}]}},collapsed:{defaultValue:{value:"false"},description:"Whether sidebar is collapsed",name:"collapsed",required:!1,type:{name:"boolean"}},onCollapsedChange:{defaultValue:null,description:"Callback when collapse state changes",name:"onCollapsedChange",required:!1,type:{name:"((collapsed: boolean) => void)"}},showCollapseButton:{defaultValue:{value:"true"},description:"Show collapse toggle button",name:"showCollapseButton",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Additional CSS classes",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{o.displayName="DashboardHeader",o.__docgenInfo={description:"",displayName:"DashboardHeader",props:{title:{defaultValue:null,description:"Page title",name:"title",required:!1,type:{name:"string"}},subtitle:{defaultValue:null,description:"Breadcrumb or subtitle",name:"subtitle",required:!1,type:{name:"ReactNode"}},actions:{defaultValue:null,description:"Actions on the right side",name:"actions",required:!1,type:{name:"ReactNode"}},onMenuClick:{defaultValue:null,description:"Toggle button for mobile sidebar",name:"onMenuClick",required:!1,type:{name:"(() => void)"}},showMenuToggle:{defaultValue:{value:"false"},description:"Show menu toggle (for mobile)",name:"showMenuToggle",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Additional CSS classes",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{y.displayName="DashboardContent",y.__docgenInfo={description:"",displayName:"DashboardContent",props:{children:{defaultValue:null,description:"Content",name:"children",required:!0,type:{name:"ReactNode"}},padded:{defaultValue:{value:"true"},description:"Add padding",name:"padded",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Additional CSS classes",name:"className",required:!1,type:{name:"string"}}}}}catch{}const je={title:"Blocks/Dashboard UI/Page Layouts",component:d,parameters:{layout:"fullscreen"}};function g({icon:a,label:r,active:s,collapsed:n}){return e.jsxs("button",{className:f("flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",s?"bg-primary text-primary-foreground":"text-muted-foreground hover:bg-muted hover:text-foreground"),children:[e.jsx(a,{className:"h-4 w-4 shrink-0"}),!n&&e.jsx("span",{children:r})]})}function B({collapsed:a=!1}){return e.jsxs("div",{className:"space-y-1",children:[e.jsx(g,{icon:me,label:"Dashboard",active:!0,collapsed:a}),e.jsx(g,{icon:ae,label:"Surveys",collapsed:a}),e.jsx(g,{icon:pe,label:"Analytics",collapsed:a}),e.jsx(g,{icon:he,label:"Respondents",collapsed:a}),e.jsx(l,{className:"my-4"}),e.jsx(g,{icon:xe,label:"Settings",collapsed:a})]})}function we(){return e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"font-medium",children:"Filters"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{className:"text-sm text-muted-foreground",children:"Date Range"}),e.jsxs(t,{variant:"outline",className:"w-full justify-between",children:[e.jsxs("span",{className:"flex items-center gap-2",children:[e.jsx(fe,{className:"h-4 w-4"}),"Last 30 days"]}),e.jsx(ve,{className:"h-4 w-4"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{className:"text-sm text-muted-foreground",children:"Status"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(S,{variant:"default",children:"Active"}),e.jsx(S,{variant:"outline",children:"Draft"}),e.jsx(S,{variant:"outline",children:"Completed"})]})]}),e.jsx(l,{}),e.jsxs(t,{variant:"ghost",className:"w-full",children:[e.jsx(be,{className:"mr-2 h-4 w-4"}),"Clear Filters"]})]})}function C(){return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"grid gap-4 md:grid-cols-2 lg:grid-cols-4",children:[e.jsx(w,{title:"Total Responses",value:"12,380",trend:{value:15.1,type:"positive"},comparison:"vs. last month"}),e.jsx(w,{title:"Active Surveys",value:"24",trend:{value:3,type:"positive"},comparison:"vs. last month"}),e.jsx(w,{title:"Completion Rate",value:"78.5%",trend:{value:2.1,type:"positive"},comparison:"vs. last month"}),e.jsx(w,{title:"Avg. Response Time",value:"4m 32s",trend:{value:.5,type:"negative"},comparison:"vs. last month"})]}),e.jsxs("div",{className:"rounded-lg border bg-card p-6",children:[e.jsx("h3",{className:"mb-4 text-lg font-medium",children:"Recent Surveys"}),e.jsx("div",{className:"space-y-4",children:[1,2,3].map(a=>e.jsxs("div",{className:"flex items-center justify-between rounded-lg border p-4",children:[e.jsxs("div",{children:[e.jsxs("p",{className:"font-medium",children:["Customer Satisfaction Q",a]}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:[100+a*50," responses"]})]}),e.jsx(S,{variant:a===1?"default":"secondary",children:a===1?"Active":"Draft"})]},a))})]})]})}const c={render:()=>e.jsx(d,{variant:"left-sidebar",sidebar:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-2 px-2",children:[e.jsx("div",{className:"h-8 w-8 rounded-lg bg-primary"}),e.jsx("span",{className:"font-semibold",children:"Voxco"})]}),e.jsx(l,{}),e.jsx(B,{})]}),header:e.jsx(o,{title:"Dashboard",subtitle:"Overview of your surveys",actions:e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"ghost",size:"icon",children:e.jsx($,{className:"h-4 w-4"})}),e.jsx(t,{variant:"ghost",size:"icon",children:e.jsx(ee,{className:"h-4 w-4"})}),e.jsxs(t,{children:[e.jsx(D,{className:"mr-2 h-4 w-4"}),"New Survey"]})]})}),children:e.jsx(C,{})})},u={render:()=>e.jsx(d,{variant:"right-sidebar",sidebarWidth:"sm",sidebar:e.jsx(we,{}),header:e.jsx(o,{title:"Analytics",subtitle:"Survey performance metrics",actions:e.jsx(t,{variant:"outline",children:"Export Report"})}),children:e.jsx(C,{})})},m={render:()=>e.jsx(d,{variant:"full-width",header:e.jsx(o,{title:"Survey Builder",subtitle:"Create and edit your survey",actions:e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"outline",children:"Preview"}),e.jsx(t,{children:"Publish"})]})}),children:e.jsx("div",{className:"mx-auto max-w-4xl",children:e.jsxs("div",{className:"rounded-lg border bg-card p-6",children:[e.jsx("h2",{className:"mb-4 text-xl font-semibold",children:"Survey Content"}),e.jsx("p",{className:"text-muted-foreground",children:"Full-width layouts are ideal for content-focused pages where you need maximum horizontal space."}),e.jsx("div",{className:"mt-6 space-y-4",children:e.jsx("div",{className:"rounded-lg border-2 border-dashed p-8 text-center",children:e.jsx("p",{className:"text-muted-foreground",children:"Drop questions here or click to add"})})})]})})})},p={render:function(){const[r,s]=x.useState(!1);return e.jsxs("div",{className:"flex h-screen bg-background",children:[e.jsx(N,{width:"md",collapsed:r,onCollapsedChange:s,showCollapseButton:!0,children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-2 px-2",children:[e.jsx("div",{className:"h-8 w-8 shrink-0 rounded-lg bg-primary"}),!r&&e.jsx("span",{className:"font-semibold",children:"Voxco"})]}),e.jsx(l,{}),e.jsx(B,{collapsed:r})]})}),e.jsxs("div",{className:"flex flex-1 flex-col overflow-hidden",children:[e.jsx(o,{title:"Dashboard",actions:e.jsxs(t,{children:[e.jsx(D,{className:"mr-2 h-4 w-4"}),"New Survey"]})}),e.jsx(y,{children:e.jsx(C,{})})]})]})}},h={render:()=>e.jsx(d,{variant:"left-sidebar",collapsible:!0,sidebar:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-2 px-2",children:[e.jsx("div",{className:"h-8 w-8 rounded-lg bg-primary"}),e.jsx("span",{className:"font-bold text-lg",children:"Voxco"})]}),e.jsx(l,{}),e.jsx("div",{className:"px-2",children:e.jsx(ge,{placeholder:"Search...",className:"h-8"})}),e.jsx(B,{}),e.jsx(l,{}),e.jsxs("div",{className:"px-2",children:[e.jsx("p",{className:"mb-2 text-xs font-medium uppercase text-muted-foreground",children:"Recent Surveys"}),e.jsx("div",{className:"space-y-1",children:["Customer NPS","Product Feedback","Exit Survey"].map(a=>e.jsxs("button",{className:"flex w-full items-center gap-2 rounded px-2 py-1.5 text-sm text-muted-foreground hover:bg-muted hover:text-foreground",children:[e.jsx(ae,{className:"h-3.5 w-3.5"}),a]},a))})]})]}),header:e.jsx(o,{title:"Survey Dashboard",actions:e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"ghost",size:"icon",children:e.jsx($,{className:"h-4 w-4"})}),e.jsxs(t,{variant:"ghost",size:"icon",className:"relative",children:[e.jsx(ee,{className:"h-4 w-4"}),e.jsx("span",{className:"absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-destructive"})]}),e.jsx(l,{orientation:"vertical",className:"h-6"}),e.jsxs(t,{children:[e.jsx(D,{className:"mr-2 h-4 w-4"}),"Create Survey"]})]})}),children:e.jsx(C,{})})};var _,V,L,R,q;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <DashboardLayout variant="left-sidebar" sidebar={<div className="space-y-4">
                    <div className="flex items-center gap-2 px-2">
                        <div className="h-8 w-8 rounded-lg bg-primary" />
                        <span className="font-semibold">Voxco</span>
                    </div>
                    <Separator />
                    <SidebarNav />
                </div>} header={<DashboardHeader title="Dashboard" subtitle="Overview of your surveys" actions={<>
                            <Button variant="ghost" size="icon">
                                <Search className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                                <Bell className="h-4 w-4" />
                            </Button>
                            <Button>
                                <Plus className="mr-2 h-4 w-4" />
                                New Survey
                            </Button>
                        </>} />}>
            <DashboardGridContent />
        </DashboardLayout>
}`,...(L=(V=c.parameters)==null?void 0:V.docs)==null?void 0:L.source},description:{story:`Standard dashboard layout with navigation on the left.
Most common pattern for admin dashboards.`,...(q=(R=c.parameters)==null?void 0:R.docs)==null?void 0:q.description}}};var F,k,P,A,z;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <DashboardLayout variant="right-sidebar" sidebarWidth="sm" sidebar={<FilterPanel />} header={<DashboardHeader title="Analytics" subtitle="Survey performance metrics" actions={<Button variant="outline">
                            Export Report
                        </Button>} />}>
            <DashboardGridContent />
        </DashboardLayout>
}`,...(P=(k=u.parameters)==null?void 0:k.docs)==null?void 0:P.source},description:{story:`Layout with filters/details panel on the right.
Useful for dashboards with filter controls or detail views.`,...(z=(A=u.parameters)==null?void 0:A.docs)==null?void 0:z.description}}};var H,I,T,E,M;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <DashboardLayout variant="full-width" header={<DashboardHeader title="Survey Builder" subtitle="Create and edit your survey" actions={<>
                            <Button variant="outline">Preview</Button>
                            <Button>Publish</Button>
                        </>} />}>
            <div className="mx-auto max-w-4xl">
                <div className="rounded-lg border bg-card p-6">
                    <h2 className="mb-4 text-xl font-semibold">Survey Content</h2>
                    <p className="text-muted-foreground">
                        Full-width layouts are ideal for content-focused pages
                        where you need maximum horizontal space.
                    </p>
                    <div className="mt-6 space-y-4">
                        <div className="rounded-lg border-2 border-dashed p-8 text-center">
                            <p className="text-muted-foreground">
                                Drop questions here or click to add
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
}`,...(T=(I=m.parameters)==null?void 0:I.docs)==null?void 0:T.source},description:{story:`Layout without any sidebar.
Good for focused content views or smaller screens.`,...(M=(E=m.parameters)==null?void 0:E.docs)==null?void 0:M.description}}};var W,G,O,U,Q;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: function Render() {
    const [collapsed, setCollapsed] = useState(false);
    return <div className="flex h-screen bg-background">
                <DashboardSidebar width="md" collapsed={collapsed} onCollapsedChange={setCollapsed} showCollapseButton>
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 px-2">
                            <div className="h-8 w-8 shrink-0 rounded-lg bg-primary" />
                            {!collapsed && <span className="font-semibold">Voxco</span>}
                        </div>
                        <Separator />
                        <SidebarNav collapsed={collapsed} />
                    </div>
                </DashboardSidebar>
                <div className="flex flex-1 flex-col overflow-hidden">
                    <DashboardHeader title="Dashboard" actions={<Button>
                                <Plus className="mr-2 h-4 w-4" />
                                New Survey
                            </Button>} />
                    <DashboardContent>
                        <DashboardGridContent />
                    </DashboardContent>
                </div>
            </div>;
  }
}`,...(O=(G=p.parameters)==null?void 0:G.docs)==null?void 0:O.source},description:{story:`Sidebar that can be collapsed to save space.
Toggle using the collapse button at the bottom.`,...(Q=(U=p.parameters)==null?void 0:U.docs)==null?void 0:Q.description}}};var J,K,X,Y,Z;h.parameters={...h.parameters,docs:{...(J=h.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <DashboardLayout variant="left-sidebar" collapsible sidebar={<div className="space-y-4">
                    <div className="flex items-center gap-2 px-2">
                        <div className="h-8 w-8 rounded-lg bg-primary" />
                        <span className="font-bold text-lg">Voxco</span>
                    </div>
                    <Separator />
                    <div className="px-2">
                        <Input placeholder="Search..." className="h-8" />
                    </div>
                    <SidebarNav />
                    <Separator />
                    <div className="px-2">
                        <p className="mb-2 text-xs font-medium uppercase text-muted-foreground">
                            Recent Surveys
                        </p>
                        <div className="space-y-1">
                            {["Customer NPS", "Product Feedback", "Exit Survey"].map(name => <button key={name} className="flex w-full items-center gap-2 rounded px-2 py-1.5 text-sm text-muted-foreground hover:bg-muted hover:text-foreground">
                                        <FileText className="h-3.5 w-3.5" />
                                        {name}
                                    </button>)}
                        </div>
                    </div>
                </div>} header={<DashboardHeader title="Survey Dashboard" actions={<>
                            <Button variant="ghost" size="icon">
                                <Search className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon" className="relative">
                                <Bell className="h-4 w-4" />
                                <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-destructive" />
                            </Button>
                            <Separator orientation="vertical" className="h-6" />
                            <Button>
                                <Plus className="mr-2 h-4 w-4" />
                                Create Survey
                            </Button>
                        </>} />}>
            <DashboardGridContent />
        </DashboardLayout>
}`,...(X=(K=h.parameters)==null?void 0:K.docs)==null?void 0:X.source},description:{story:`Complete Voxco survey dashboard example.
Shows a realistic implementation with all components.`,...(Z=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:Z.description}}};const Se=["LeftSidebarLayout","RightSidebarLayout","FullWidthLayout","CollapsibleSidebar","SurveyDashboardExample"],Ae=Object.freeze(Object.defineProperty({__proto__:null,CollapsibleSidebar:p,FullWidthLayout:m,LeftSidebarLayout:c,RightSidebarLayout:u,SurveyDashboardExample:h,__namedExportsOrder:Se,default:je},Symbol.toStringTag,{value:"Module"}));export{p as C,Ae as D,m as F,c as L,u as R,h as S};
