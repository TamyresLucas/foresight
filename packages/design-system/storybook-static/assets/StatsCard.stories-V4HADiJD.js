import{j as e}from"./jsx-runtime-BYYWji4R.js";import{C as B,a as W,c as M,b as Q,d as H}from"./card-CGuI07T9.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./utils-CDN07tui.js";import"./index-C2vczdB5.js";const s=({title:U,value:V,description:m,icon:x,trend:t,className:E})=>e.jsxs(B,{className:E,children:[e.jsxs(W,{className:"flex flex-row items-center justify-between space-y-0 pb-2",children:[e.jsx(M,{className:"text-sm font-medium",children:U}),x&&e.jsx("div",{className:"h-4 w-4 text-muted-foreground",children:x})]}),e.jsxs(H,{children:[e.jsx("div",{className:"text-2xl font-bold",children:V}),(m||t)&&e.jsxs("div",{className:"flex items-center gap-1 text-xs text-muted-foreground",children:[t&&e.jsxs("span",{className:t.isPositive?"text-green-600":"text-red-600",children:[t.isPositive?"↑":"↓"," ",Math.abs(t.value),"%"]}),m&&e.jsx("span",{children:m})]})]})]}),v=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"h-4 w-4",children:[e.jsx("path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}),e.jsx("circle",{cx:"9",cy:"7",r:"4"}),e.jsx("path",{d:"M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"})]}),a=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"h-4 w-4",children:[e.jsx("path",{d:"M3 3v18h18"}),e.jsx("path",{d:"m19 9-5 5-4-4-3 3"})]}),_=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"h-4 w-4",children:[e.jsx("rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}),e.jsx("path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"})]}),O=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"h-4 w-4",children:[e.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),e.jsx("path",{d:"m9 11 3 3L22 4"})]}),Y={title:"Components/Data Display/StatsCard",component:s,parameters:{layout:"centered"},tags:["autodocs"]},r={args:{title:"Total Responses",value:"2,350",description:"from last month"}},n={args:{title:"Total Responses",value:"2,350",description:"from last month",icon:e.jsx(v,{})}},i={args:{title:"Response Rate",value:"72.5%",trend:{value:12.5,isPositive:!0},description:"from last month",icon:e.jsx(a,{})}},l={args:{title:"Bounce Rate",value:"24.3%",trend:{value:4.2,isPositive:!1},description:"from last month",icon:e.jsx(a,{})}},o={args:{title:"Survey Dashboard",value:"0"},render:()=>e.jsxs("div",{className:"grid gap-4 grid-cols-2 lg:grid-cols-4 w-full max-w-4xl",children:[e.jsx(s,{title:"Total Surveys",value:"24",description:"+2 this week",icon:e.jsx(_,{})}),e.jsx(s,{title:"Total Responses",value:"12,543",trend:{value:18.2,isPositive:!0},description:"from last month",icon:e.jsx(v,{})}),e.jsx(s,{title:"Avg. Completion Rate",value:"87.3%",trend:{value:5.4,isPositive:!0},description:"from last month",icon:e.jsx(O,{})}),e.jsx(s,{title:"Avg. Response Time",value:"4m 23s",trend:{value:8.1,isPositive:!1},description:"slower than last month",icon:e.jsx(a,{})})]})},d={args:{title:"Survey Overview",value:"0"},render:()=>e.jsxs("div",{className:"w-full max-w-4xl space-y-6",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"text-2xl font-bold",children:"Customer Satisfaction Survey"}),e.jsx("p",{className:"text-muted-foreground",children:"Results overview for Q4 2025"})]}),e.jsxs("div",{className:"grid gap-4 grid-cols-2 lg:grid-cols-4",children:[e.jsx(s,{title:"Total Responses",value:"1,234",trend:{value:23,isPositive:!0},description:"vs last quarter",icon:e.jsx(v,{})}),e.jsx(s,{title:"Completion Rate",value:"92%",trend:{value:4,isPositive:!0},description:"vs last quarter",icon:e.jsx(O,{})}),e.jsx(s,{title:"Avg. Score",value:"4.2/5",trend:{value:.3,isPositive:!0},description:"vs last quarter",icon:e.jsx(a,{})}),e.jsx(s,{title:"NPS Score",value:"+45",trend:{value:12,isPositive:!0},description:"vs last quarter",icon:e.jsx(a,{})})]}),e.jsxs(B,{children:[e.jsxs(W,{children:[e.jsx(M,{children:"Response Distribution"}),e.jsx(Q,{children:"Breakdown by satisfaction level"})]}),e.jsx(H,{children:e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"w-24 text-sm",children:"Very Satisfied"}),e.jsx("div",{className:"flex-1 h-4 bg-muted rounded-full overflow-hidden",children:e.jsx("div",{className:"h-full bg-green-500 rounded-full",style:{width:"45%"}})}),e.jsx("span",{className:"w-12 text-sm text-right",children:"45%"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"w-24 text-sm",children:"Satisfied"}),e.jsx("div",{className:"flex-1 h-4 bg-muted rounded-full overflow-hidden",children:e.jsx("div",{className:"h-full bg-green-400 rounded-full",style:{width:"32%"}})}),e.jsx("span",{className:"w-12 text-sm text-right",children:"32%"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"w-24 text-sm",children:"Neutral"}),e.jsx("div",{className:"flex-1 h-4 bg-muted rounded-full overflow-hidden",children:e.jsx("div",{className:"h-full bg-yellow-400 rounded-full",style:{width:"15%"}})}),e.jsx("span",{className:"w-12 text-sm text-right",children:"15%"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"w-24 text-sm",children:"Dissatisfied"}),e.jsx("div",{className:"flex-1 h-4 bg-muted rounded-full overflow-hidden",children:e.jsx("div",{className:"h-full bg-red-400 rounded-full",style:{width:"8%"}})}),e.jsx("span",{className:"w-12 text-sm text-right",children:"8%"})]})]})})]})]})},c={render:()=>e.jsxs("div",{className:"flex gap-6 w-full max-w-2xl",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-3xl font-bold text-primary",children:"24"}),e.jsx("div",{className:"text-sm text-muted-foreground",children:"Active Surveys"})]}),e.jsx("div",{className:"w-px bg-border"}),e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-3xl font-bold text-primary",children:"12.5k"}),e.jsx("div",{className:"text-sm text-muted-foreground",children:"Total Responses"})]}),e.jsx("div",{className:"w-px bg-border"}),e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-3xl font-bold text-green-600",children:"87%"}),e.jsx("div",{className:"text-sm text-muted-foreground",children:"Completion Rate"})]}),e.jsx("div",{className:"w-px bg-border"}),e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-3xl font-bold text-primary",children:"4.2"}),e.jsx("div",{className:"text-sm text-muted-foreground",children:"Avg. Rating"})]})]})};var u,p,h;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    title: "Total Responses",
    value: "2,350",
    description: "from last month"
  }
}`,...(h=(p=r.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var g,f,N;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    title: "Total Responses",
    value: "2,350",
    description: "from last month",
    icon: <UsersIcon />
  }
}`,...(N=(f=n.parameters)==null?void 0:f.docs)==null?void 0:N.source}}};var j,w,C;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    title: "Response Rate",
    value: "72.5%",
    trend: {
      value: 12.5,
      isPositive: true
    },
    description: "from last month",
    icon: <ChartIcon />
  }
}`,...(C=(w=i.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var b,y,S;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    title: "Bounce Rate",
    value: "24.3%",
    trend: {
      value: 4.2,
      isPositive: false
    },
    description: "from last month",
    icon: <ChartIcon />
  }
}`,...(S=(y=l.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var R,k,P;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    title: "Survey Dashboard",
    value: "0"
  },
  render: () => <div className="grid gap-4 grid-cols-2 lg:grid-cols-4 w-full max-w-4xl">
      <StatsCard title="Total Surveys" value="24" description="+2 this week" icon={<ClipboardIcon />} />
      <StatsCard title="Total Responses" value="12,543" trend={{
      value: 18.2,
      isPositive: true
    }} description="from last month" icon={<UsersIcon />} />
      <StatsCard title="Avg. Completion Rate" value="87.3%" trend={{
      value: 5.4,
      isPositive: true
    }} description="from last month" icon={<CheckCircleIcon />} />
      <StatsCard title="Avg. Response Time" value="4m 23s" trend={{
      value: 8.1,
      isPositive: false
    }} description="slower than last month" icon={<ChartIcon />} />
    </div>
}`,...(P=(k=o.parameters)==null?void 0:k.docs)==null?void 0:P.source}}};var T,I,D;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    title: "Survey Overview",
    value: "0"
  },
  render: () => <div className="w-full max-w-4xl space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Customer Satisfaction Survey</h2>
        <p className="text-muted-foreground">Results overview for Q4 2025</p>
      </div>
      <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
        <StatsCard title="Total Responses" value="1,234" trend={{
        value: 23,
        isPositive: true
      }} description="vs last quarter" icon={<UsersIcon />} />
        <StatsCard title="Completion Rate" value="92%" trend={{
        value: 4,
        isPositive: true
      }} description="vs last quarter" icon={<CheckCircleIcon />} />
        <StatsCard title="Avg. Score" value="4.2/5" trend={{
        value: 0.3,
        isPositive: true
      }} description="vs last quarter" icon={<ChartIcon />} />
        <StatsCard title="NPS Score" value="+45" trend={{
        value: 12,
        isPositive: true
      }} description="vs last quarter" icon={<ChartIcon />} />
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Response Distribution</CardTitle>
          <CardDescription>Breakdown by satisfaction level</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-24 text-sm">Very Satisfied</span>
              <div className="flex-1 h-4 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-green-500 rounded-full" style={{
                width: "45%"
              }} />
              </div>
              <span className="w-12 text-sm text-right">45%</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-24 text-sm">Satisfied</span>
              <div className="flex-1 h-4 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-green-400 rounded-full" style={{
                width: "32%"
              }} />
              </div>
              <span className="w-12 text-sm text-right">32%</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-24 text-sm">Neutral</span>
              <div className="flex-1 h-4 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-yellow-400 rounded-full" style={{
                width: "15%"
              }} />
              </div>
              <span className="w-12 text-sm text-right">15%</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-24 text-sm">Dissatisfied</span>
              <div className="flex-1 h-4 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-red-400 rounded-full" style={{
                width: "8%"
              }} />
              </div>
              <span className="w-12 text-sm text-right">8%</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
}`,...(D=(I=d.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};var A,L,q;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div className="flex gap-6 w-full max-w-2xl">
      <div className="text-center">
        <div className="text-3xl font-bold text-primary">24</div>
        <div className="text-sm text-muted-foreground">Active Surveys</div>
      </div>
      <div className="w-px bg-border" />
      <div className="text-center">
        <div className="text-3xl font-bold text-primary">12.5k</div>
        <div className="text-sm text-muted-foreground">Total Responses</div>
      </div>
      <div className="w-px bg-border" />
      <div className="text-center">
        <div className="text-3xl font-bold text-green-600">87%</div>
        <div className="text-sm text-muted-foreground">Completion Rate</div>
      </div>
      <div className="w-px bg-border" />
      <div className="text-center">
        <div className="text-3xl font-bold text-primary">4.2</div>
        <div className="text-sm text-muted-foreground">Avg. Rating</div>
      </div>
    </div>
}`,...(q=(L=c.parameters)==null?void 0:L.docs)==null?void 0:q.source}}};const Z=["Default","WithIcon","WithTrend","NegativeTrend","SurveyDashboard","SurveyResultsOverview","CompactStats"];export{c as CompactStats,r as Default,l as NegativeTrend,o as SurveyDashboard,d as SurveyResultsOverview,n as WithIcon,i as WithTrend,Z as __namedExportsOrder,Y as default};
