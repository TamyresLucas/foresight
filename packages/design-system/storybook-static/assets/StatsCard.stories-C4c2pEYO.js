import{j as e}from"./jsx-runtime-BYYWji4R.js";import{C as u,B as de,a as ue,U as m,M as pe,F as me,T as ge}from"./icons-BJRAOfCp.js";import{S as a}from"./StatsCard-B4jp94VU.js";const be={title:"ShadCn/Dashboard UI/Cards/Stats Cards",component:a,parameters:{layout:"padded",docs:{description:{component:'\n**StatsCard** is the primary KPI/metric card used in survey dashboards. It supports multiple display modes depending on what data needs to be surfaced.\n\n### Props overview\n\n| Prop | Type | Description |\n|------|------|-------------|\n| `title` | `string` | Card label (e.g. "Quota", "Completed") |\n| `value` | `string` | Main displayed value |\n| `trend` | `{ value: number; type: "positive" \\| "negative" \\| "neutral" }` | Percentage change badge. Non-neutral trends also show an `ArrowUpRight` action button |\n| `comparison` | `ReactNode \\| string` | Supporting text below the value (e.g. "+200 since last month") |\n| `items` | `StatsListItem[]` | Renders a colored-dot list (e.g. Quota Strata breakdown) |\n| `metrics` | `StatsMetric[]` | Renders a 2-column grid of label/value pairs (e.g. Distribution Status) |\n| `progress` | `StatsProgress[]` | Renders a stacked segmented progress bar (e.g. survey response categories) |\n\n### SemanticColor tokens\n\nUsed on `items[].color` and `progress[].color`:\n\n| Token | Visual | Use case |\n|-------|--------|----------|\n| `success` | Green | Completed, positive outcomes |\n| `secondary` | Teal / mint | Drop Outs, neutral secondary |\n| `primary` | Brand blue | Quota met / primary category |\n| `warning` | Amber | Half-closed, at-risk |\n| `destructive` | Red | — |\n| `muted` | Grey | Subdued data |\n| `chart4` | Purple | Quota Met/Closed |\n| `chart8` | Grey | Screened out |\n| `negative` | Red | Interrupted / errors |\n\n### Arrow button\n\nAn `ArrowUpRight` circular outline button is automatically rendered in the card header **only when** `trend.type` is `"positive"` or `"negative"`. It does not appear on neutral-trend or trendless cards.\n\n### List item badges\n\nEach item in the `items` array can carry a `badge` string and `badgeVariant` to communicate status inline next to the label:\n\n| Status | Variant |\n|--------|---------|\n| Open | `secondary` |\n| Closed | `success` |\n| Half-closed | `warning` |\n                '}}},argTypes:{trend:{control:"object",description:"Trend indicator showing change percentage and direction"}}},t={args:{title:"Total Responses",value:"122,380",trend:{value:15.1,type:"positive"},comparison:e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"font-semibold text-success",children:"+16,458"}),e.jsx("span",{className:"text-muted-foreground",children:" since last month"})]}),icon:e.jsx(de,{})}},n={args:{title:"Total Responses",value:"122,380",trend:{value:15.1,type:"positive"},comparison:e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"font-semibold text-success",children:"+16,458"}),e.jsx("span",{className:"text-muted-foreground",children:" since last month"})]}),learnMore:!0}},s={args:{title:"Abandonment Rate",value:"1.9M",trend:{value:2,type:"negative"},comparison:e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"font-semibold text-destructive",children:"-0.1M"}),e.jsx("span",{className:"text-muted-foreground",children:" since last month"})]}),icon:e.jsx(ge,{})}},r={args:{title:"Active Surveys",value:"48,210",comparison:e.jsx("span",{className:"text-muted-foreground",children:"last synced Mar 20, 2026"}),icon:e.jsx(me,{})}},o={args:{title:"Total Visitors",subtitle:"Jan - Jun 2024",headerStats:[{label:"Desktop",value:"24,828"},{label:"Mobile",value:"25,010"}]}},i={args:{title:"Quota Strata",icon:e.jsx(m,{}),items:[{label:"Women",value:"320/500",color:"primary",badge:"Open",badgeVariant:"secondary"},{label:"Men",value:"200/200",color:"success",badge:"Closed",badgeVariant:"success"},{label:"Ethnicity",value:"80/150",color:"warning",badge:"Half-closed",badgeVariant:"warning"},{label:"Age Group",value:"45/100",color:"primary",badge:"Open",badgeVariant:"secondary"}]}},l={args:{title:"Quota Strata",icon:e.jsx(m,{}),itemsLayout:"grid",items:[{label:"Women",value:"320/500",color:"primary",badge:"Open",badgeVariant:"secondary"},{label:"Men",value:"200/200",color:"success",badge:"Closed",badgeVariant:"success"},{label:"Ethnicity",value:"80/150",color:"warning",badge:"Half-closed",badgeVariant:"warning"},{label:"Age Group",value:"45/100",color:"primary",badge:"Open",badgeVariant:"secondary"}]}},c={args:{title:"Distribution Status",icon:e.jsx(pe,{}),metrics:[{label:"Total Invitations",value:"19"},{label:"Total Sent",value:"6,857"},{label:"Total Undelivered",value:"478"},{label:"Participation Rate",value:"1.46%"},{label:"Undelivered Rate",value:"6.97%"}]}},d={args:{title:"Total responses",value:"5,300",comparison:"5,300 / 8,833 responses",icon:e.jsx(u,{}),progress:[{label:"Completed",percentage:60,color:"primary"}]}},p={parameters:{layout:"fullscreen"},render:()=>e.jsxs("div",{className:"space-y-4 p-6",children:[e.jsx("h2",{className:"mb-6 text-2xl font-bold",children:"Dashboard Stats Cards"}),e.jsxs("div",{className:"grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4",children:[e.jsx(a,{title:"Total responses",value:"5,300",comparison:"5,300 / 8,833 responses",icon:e.jsx(u,{}),progress:[{label:"Completed",percentage:60,color:"primary"}]}),e.jsx(a,{title:"Response Rate",value:"34.2%",trend:{value:4.8,type:"positive"},icon:e.jsx(de,{})}),e.jsx(a,{title:"Completion Rate",value:"71.5%",trend:{value:3.2,type:"negative"},icon:e.jsx(u,{})}),e.jsx(a,{title:"Avg Completion Time",value:"4m 32s",icon:e.jsx(ue,{})})]}),e.jsxs("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-2",children:[e.jsx(a,{title:"Quota Strata",icon:e.jsx(m,{}),itemsLayout:"grid",items:[{label:"Women",value:"320/500",color:"primary",badge:"Open",badgeVariant:"secondary"},{label:"Men",value:"200/200",color:"success",badge:"Closed",badgeVariant:"success"},{label:"Ethnicity",value:"80/150",color:"warning",badge:"Half-closed",badgeVariant:"warning"},{label:"Age Group",value:"45/100",color:"primary",badge:"Open",badgeVariant:"secondary"}]}),e.jsx(a,{title:"Distribution Status",icon:e.jsx(pe,{}),metrics:[{label:"Total Invitations",value:"19"},{label:"Total Sent",value:"6,857"},{label:"Total Undelivered",value:"478"},{label:"Participation Rate",value:"1.46%"},{label:"Undelivered Rate",value:"6.97%"}]})]})]})};var g,b,v,h,y;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    title: "Total Responses",
    value: "122,380",
    trend: {
      value: 15.1,
      type: "positive"
    },
    comparison: <><span className="font-semibold text-success">+16,458</span><span className="text-muted-foreground"> since last month</span></>,
    icon: <BarChart3 />
  }
}`,...(v=(b=t.parameters)==null?void 0:b.docs)==null?void 0:v.source},description:{story:`Basic stats card showing a value with a positive trend indicator.
Ideal for metrics showing growth, like "Total Responses" or "Active Users".`,...(y=(h=t.parameters)==null?void 0:h.docs)==null?void 0:y.description}}};var S,x,C,w,f;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    title: "Total Responses",
    value: "122,380",
    trend: {
      value: 15.1,
      type: "positive"
    },
    comparison: <><span className="font-semibold text-success">+16,458</span><span className="text-muted-foreground"> since last month</span></>,
    learnMore: true
  }
}`,...(C=(x=n.parameters)==null?void 0:x.docs)==null?void 0:C.source},description:{story:`Stats card with the "Learn more" ArrowUpRight button in the top-right corner.
All other variants show a contextual icon instead.`,...(f=(w=n.parameters)==null?void 0:w.docs)==null?void 0:f.description}}};var T,j,R,M,V;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    title: "Abandonment Rate",
    value: "1.9M",
    trend: {
      value: 2,
      type: "negative"
    },
    comparison: <><span className="font-semibold text-destructive">-0.1M</span><span className="text-muted-foreground"> since last month</span></>,
    icon: <TrendingDown />
  }
}`,...(R=(j=s.parameters)==null?void 0:j.docs)==null?void 0:R.source},description:{story:`Stats card showing a negative trend.
Use for metrics where a decrease is notable, like "Abandonment Rate".`,...(V=(M=s.parameters)==null?void 0:M.docs)==null?void 0:V.description}}};var A,N,U,W,k;r.parameters={...r.parameters,docs:{...(A=r.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    title: "Active Surveys",
    value: "48,210",
    comparison: <span className="text-muted-foreground">last synced Mar 20, 2026</span>,
    icon: <FileText />
  }
}`,...(U=(N=r.parameters)==null?void 0:N.docs)==null?void 0:U.source},description:{story:`Default stats card with a value and comparison text, but no trend badge.
Use when directional change isn't relevant or available.`,...(k=(W=r.parameters)==null?void 0:W.docs)==null?void 0:k.description}}};var D,O,L,P,I;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    title: "Total Visitors",
    subtitle: "Jan - Jun 2024",
    headerStats: [{
      label: "Desktop",
      value: "24,828"
    }, {
      label: "Mobile",
      value: "25,010"
    }]
  }
}`,...(L=(O=o.parameters)==null?void 0:O.docs)==null?void 0:L.source},description:{story:`Compact multi-metric card: instead of one big value in the body,
two or more labeled stats appear inline in the header (right-aligned).
Mirrors the "Bar Chart - Interactive" header pattern from shadcn charts.`,...(I=(P=o.parameters)==null?void 0:P.docs)==null?void 0:I.description}}};var Q,G,B,E,H;i.parameters={...i.parameters,docs:{...(Q=i.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    title: "Quota Strata",
    icon: <Users />,
    items: [{
      label: "Women",
      value: "320/500",
      color: "primary",
      badge: "Open",
      badgeVariant: "secondary"
    }, {
      label: "Men",
      value: "200/200",
      color: "success",
      badge: "Closed",
      badgeVariant: "success"
    }, {
      label: "Ethnicity",
      value: "80/150",
      color: "warning",
      badge: "Half-closed",
      badgeVariant: "warning"
    }, {
      label: "Age Group",
      value: "45/100",
      color: "primary",
      badge: "Open",
      badgeVariant: "secondary"
    }]
  }
}`,...(B=(G=i.parameters)==null?void 0:G.docs)==null?void 0:B.source},description:{story:'Stats card displaying a Quota Strata breakdown. Each item shows a color-coded dot,\na label (demographic group), a completed/goal value (e.g. "320/500"), and an inline\nstatus badge. Badge variants map to quota status: `secondary` = Open, `success` = Closed,\n`warning` = Half-closed. The `chart4` color token (purple) is used for the Age Group stratum.',...(H=(E=i.parameters)==null?void 0:E.docs)==null?void 0:H.description}}};var F,_,J,q,z;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    title: "Quota Strata",
    icon: <Users />,
    itemsLayout: "grid",
    items: [{
      label: "Women",
      value: "320/500",
      color: "primary",
      badge: "Open",
      badgeVariant: "secondary"
    }, {
      label: "Men",
      value: "200/200",
      color: "success",
      badge: "Closed",
      badgeVariant: "success"
    }, {
      label: "Ethnicity",
      value: "80/150",
      color: "warning",
      badge: "Half-closed",
      badgeVariant: "warning"
    }, {
      label: "Age Group",
      value: "45/100",
      color: "primary",
      badge: "Open",
      badgeVariant: "secondary"
    }]
  }
}`,...(J=(_=l.parameters)==null?void 0:_.docs)==null?void 0:J.source},description:{story:`Same Quota Strata data as WithList, rendered as a 2-column grid.
Each cell shows the label + status badge on top and the value (number) below.`,...(z=(q=l.parameters)==null?void 0:q.docs)==null?void 0:z.description}}};var K,X,Y,Z,$;c.parameters={...c.parameters,docs:{...(K=c.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    title: "Distribution Status",
    icon: <Mail />,
    metrics: [{
      label: "Total Invitations",
      value: "19"
    }, {
      label: "Total Sent",
      value: "6,857"
    }, {
      label: "Total Undelivered",
      value: "478"
    }, {
      label: "Participation Rate",
      value: "1.46%"
    }, {
      label: "Undelivered Rate",
      value: "6.97%"
    }]
  }
}`,...(Y=(X=c.parameters)==null?void 0:X.docs)==null?void 0:Y.source},description:{story:`Stats card displaying email distribution summary metrics in a 2-column grid.
Used for the "Distribution Status" panel — shows invitation funnel data:
total invitations sent, delivered, undelivered, and computed rates.
No trend or progress bar — data is purely informational.`,...($=(Z=c.parameters)==null?void 0:Z.docs)==null?void 0:$.description}}};var ee,ae,te,ne,se;d.parameters={...d.parameters,docs:{...(ee=d.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    title: "Total responses",
    value: "5,300",
    comparison: "5,300 / 8,833 responses",
    icon: <CheckCircle />,
    progress: [{
      label: "Completed",
      percentage: 60,
      color: "primary"
    }]
  }
}`,...(te=(ae=d.parameters)==null?void 0:ae.docs)==null?void 0:te.source},description:{story:"Stats card showing total completed responses with a stacked progress bar breaking\ndown response disposition categories. Semantic chart color tokens are used:\n- `success` (green) → Completed\n- `chart4` (purple) → Quota Met/Closed\n- `chart8` (grey) → Screened out\n- `negative` (red) → Interrupted\n- `secondary` (teal) → Drop Outs\n\nA positive trend shows the TrendBadge and the ArrowUpRight action button.",...(se=(ne=d.parameters)==null?void 0:ne.docs)==null?void 0:se.description}}};var re,oe,ie,le,ce;p.parameters={...p.parameters,docs:{...(re=p.parameters)==null?void 0:re.docs,source:{originalSource:`{
  parameters: {
    layout: "fullscreen"
  },
  render: () => <div className="space-y-4 p-6">
            <h2 className="mb-6 text-2xl font-bold">Dashboard Stats Cards</h2>
            <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                <StatsCard title="Total responses" value="5,300" comparison="5,300 / 8,833 responses" icon={<CheckCircle />} progress={[{
        label: "Completed",
        percentage: 60,
        color: "primary"
      }]} />
                <StatsCard title="Response Rate" value="34.2%" trend={{
        value: 4.8,
        type: "positive"
      }} icon={<BarChart3 />} />
                <StatsCard title="Completion Rate" value="71.5%" trend={{
        value: 3.2,
        type: "negative"
      }} icon={<CheckCircle />} />
                <StatsCard title="Avg Completion Time" value="4m 32s" icon={<Clock />} />
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <StatsCard title="Quota Strata" icon={<Users />} itemsLayout="grid" items={[{
        label: "Women",
        value: "320/500",
        color: "primary",
        badge: "Open",
        badgeVariant: "secondary"
      }, {
        label: "Men",
        value: "200/200",
        color: "success",
        badge: "Closed",
        badgeVariant: "success"
      }, {
        label: "Ethnicity",
        value: "80/150",
        color: "warning",
        badge: "Half-closed",
        badgeVariant: "warning"
      }, {
        label: "Age Group",
        value: "45/100",
        color: "primary",
        badge: "Open",
        badgeVariant: "secondary"
      }]} />
                <StatsCard title="Distribution Status" icon={<Mail />} metrics={[{
        label: "Total Invitations",
        value: "19"
      }, {
        label: "Total Sent",
        value: "6,857"
      }, {
        label: "Total Undelivered",
        value: "478"
      }, {
        label: "Participation Rate",
        value: "1.46%"
      }, {
        label: "Undelivered Rate",
        value: "6.97%"
      }]} />
            </div>
        </div>
}`,...(ie=(oe=p.parameters)==null?void 0:oe.docs)==null?void 0:ie.source},description:{story:`Showcase of all StatsCard variants in a responsive grid.
Demonstrates how cards look together in a dashboard layout.`,...(ce=(le=p.parameters)==null?void 0:le.docs)==null?void 0:ce.description}}};const ve=["SimpleWithPositiveTrend","LearnMore","SimpleWithNegativeTrend","Default","WithHeaderStats","WithList","WithListGrid","WithMultipleMetrics","WithProgressBar","AllVariations"],xe=Object.freeze(Object.defineProperty({__proto__:null,AllVariations:p,Default:r,LearnMore:n,SimpleWithNegativeTrend:s,SimpleWithPositiveTrend:t,WithHeaderStats:o,WithList:i,WithListGrid:l,WithMultipleMetrics:c,WithProgressBar:d,__namedExportsOrder:ve,default:be},Symbol.toStringTag,{value:"Module"}));export{p as A,r as D,n as L,xe as S,o as W,t as a,s as b,i as c,c as d,d as e};
