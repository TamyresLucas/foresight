import{j as e}from"./jsx-runtime-BYYWji4R.js";import{S as a}from"./StatsCard-Chl6nQap.js";const te={title:"Blocks/Dashboard UI/Stats Cards",component:a,parameters:{layout:"padded"},argTypes:{trend:{control:"object",description:"Trend indicator showing change percentage and direction"}}},t={args:{title:"Total Responses",value:"122,380",trend:{value:15.1,type:"positive"},comparison:"vs. last month 105,922"}},s={args:{title:"Abandonment Rate",value:"1.9M",trend:{value:2,type:"negative"},comparison:"vs. last month 2.0M"}},r={args:{title:"Survey Revenue",value:"$98.1M",trend:{value:.4,type:"positive"},comparison:"vs. last month $97.8M"}},n={args:{title:"Active Surveys",value:"48,210",trend:{value:3.7,type:"positive"},comparison:"vs. last month 46,480"}},o={args:{title:"Conversion Rate",value:"24.5%",trend:{value:0,type:"neutral"},comparison:"No change since last month"}},l={args:{title:"Survey Status",items:[{label:"Qualified",value:"24%",amount:"$267,800",color:"success"},{label:"Proposal",value:"18%",amount:"$192,400",color:"primary"},{label:"Negotiation",value:"12%",amount:"$129,600",color:"warning"},{label:"Closed Won",value:"8%",amount:"$87,200",color:"secondary"}]}},i={args:{title:"Website Analytics",subtitle:"Total conversion rate: 28.5%",metrics:[{label:"Direct",value:"432"},{label:"Organic",value:"216"},{label:"Sessions",value:"29%"},{label:"Page Views",value:"2.3K"},{label:"Leads",value:"1.6K"},{label:"Conversions",value:"8%"}]}},c={args:{title:"Response Goal",value:"$42.5k",subtitle:"+20.1% from last month",progress:[{label:"Orders",percentage:62.2,color:"success"},{label:"Visits",percentage:25.5,color:"primary"},{label:"Other",percentage:12.3,color:"secondary"}]}},u={parameters:{layout:"fullscreen"},render:()=>e.jsxs("div",{className:"p-6",children:[e.jsx("h2",{className:"mb-6 text-2xl font-bold",children:"Dashboard Stats Cards"}),e.jsxs("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",children:[e.jsx(a,{title:"Total Responses",value:"122,380",trend:{value:15.1,type:"positive"},comparison:"vs. last month 105,922"}),e.jsx(a,{title:"Abandonment Rate",value:"1.9M",trend:{value:2,type:"negative"},comparison:"vs. last month 2.0M"}),e.jsx(a,{title:"Survey Revenue",value:"$98.1M",trend:{value:.4,type:"positive"},comparison:"vs. last month $97.8M"}),e.jsx(a,{title:"Active Surveys",value:"48,210",trend:{value:3.7,type:"positive"},comparison:"vs. last month 46,480"}),e.jsx(a,{title:"Survey Status",items:[{label:"Qualified",value:"24%",amount:"$267,800",color:"success"},{label:"Proposal",value:"18%",amount:"$192,400",color:"primary"},{label:"Negotiation",value:"12%",amount:"$129,600",color:"warning"}]}),e.jsx(a,{title:"Website Analytics",subtitle:"Total conversion rate: 28.5%",metrics:[{label:"Direct",value:"432"},{label:"Organic",value:"216"},{label:"Sessions",value:"29%"},{label:"Page Views",value:"2.3K"}]}),e.jsx(a,{title:"Response Goal",value:"$42.5k",subtitle:"+20.1% from last month",progress:[{label:"Orders",percentage:62.2,color:"success"},{label:"Visits",percentage:25.5,color:"primary"}]}),e.jsx(a,{title:"Conversion Rate",value:"24.5%",trend:{value:0,type:"neutral"},comparison:"No change since last month"})]})]})};var d,p,m,v,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    title: "Total Responses",
    value: "122,380",
    trend: {
      value: 15.1,
      type: "positive"
    },
    comparison: "vs. last month 105,922"
  }
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source},description:{story:`Basic stats card showing a value with a positive trend indicator.
Ideal for metrics showing growth, like "Total Responses" or "Active Users".`,...(g=(v=t.parameters)==null?void 0:v.docs)==null?void 0:g.description}}};var b,y,h,S,f;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    title: "Abandonment Rate",
    value: "1.9M",
    trend: {
      value: 2,
      type: "negative"
    },
    comparison: "vs. last month 2.0M"
  }
}`,...(h=(y=s.parameters)==null?void 0:y.docs)==null?void 0:h.source},description:{story:`Stats card showing a negative trend.
Use for metrics where a decrease is notable, like "Abandonment Rate".`,...(f=(S=s.parameters)==null?void 0:S.docs)==null?void 0:f.description}}};var $,w,M,R,C;r.parameters={...r.parameters,docs:{...($=r.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    title: "Survey Revenue",
    value: "$98.1M",
    trend: {
      value: 0.4,
      type: "positive"
    },
    comparison: "vs. last month $97.8M"
  }
}`,...(M=(w=r.parameters)==null?void 0:w.docs)==null?void 0:M.source},description:{story:`Stats card for displaying monetary/currency values.
Includes currency formatting in the value.`,...(C=(R=r.parameters)==null?void 0:R.docs)==null?void 0:C.description}}};var x,N,T,A,W;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    title: "Active Surveys",
    value: "48,210",
    trend: {
      value: 3.7,
      type: "positive"
    },
    comparison: "vs. last month 46,480"
  }
}`,...(T=(N=n.parameters)==null?void 0:N.docs)==null?void 0:T.source},description:{story:`Stats card for large counters/totals.
Great for "Active Surveys", "Total Users", etc.`,...(W=(A=n.parameters)==null?void 0:A.docs)==null?void 0:W.description}}};var j,P,O,V,k;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    title: "Conversion Rate",
    value: "24.5%",
    trend: {
      value: 0,
      type: "neutral"
    },
    comparison: "No change since last month"
  }
}`,...(O=(P=o.parameters)==null?void 0:P.docs)==null?void 0:O.source},description:{story:`Stats card showing a neutral/unchanged trend.
For metrics that are stable.`,...(k=(V=o.parameters)==null?void 0:V.docs)==null?void 0:k.description}}};var D,G,L,K,_;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    title: "Survey Status",
    items: [{
      label: "Qualified",
      value: "24%",
      amount: "$267,800",
      color: "success"
    }, {
      label: "Proposal",
      value: "18%",
      amount: "$192,400",
      color: "primary"
    }, {
      label: "Negotiation",
      value: "12%",
      amount: "$129,600",
      color: "warning"
    }, {
      label: "Closed Won",
      value: "8%",
      amount: "$87,200",
      color: "secondary"
    }]
  }
}`,...(L=(G=l.parameters)==null?void 0:G.docs)==null?void 0:L.source},description:{story:`Stats card with a list of items showing distribution.
Perfect for "Survey Status" or "Category Breakdown".`,...(_=(K=l.parameters)==null?void 0:K.docs)==null?void 0:_.description}}};var B,Q,I,U,E;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    title: "Website Analytics",
    subtitle: "Total conversion rate: 28.5%",
    metrics: [{
      label: "Direct",
      value: "432"
    }, {
      label: "Organic",
      value: "216"
    }, {
      label: "Sessions",
      value: "29%"
    }, {
      label: "Page Views",
      value: "2.3K"
    }, {
      label: "Leads",
      value: "1.6K"
    }, {
      label: "Conversions",
      value: "8%"
    }]
  }
}`,...(I=(Q=i.parameters)==null?void 0:Q.docs)==null?void 0:I.source},description:{story:`Stats card with a grid of multiple metrics.
Ideal for "Website Analytics" or "Performance Overview".`,...(E=(U=i.parameters)==null?void 0:U.docs)==null?void 0:E.description}}};var z,F,q,H,J;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    title: "Response Goal",
    value: "$42.5k",
    subtitle: "+20.1% from last month",
    progress: [{
      label: "Orders",
      percentage: 62.2,
      color: "success"
    }, {
      label: "Visits",
      percentage: 25.5,
      color: "primary"
    }, {
      label: "Other",
      percentage: 12.3,
      color: "secondary"
    }]
  }
}`,...(q=(F=c.parameters)==null?void 0:F.docs)==null?void 0:q.source},description:{story:`Stats card with stacked progress bar showing distribution.
Great for "Goal Tracking" or "Response Quota".`,...(J=(H=c.parameters)==null?void 0:H.docs)==null?void 0:J.description}}};var X,Y,Z,ee,ae;u.parameters={...u.parameters,docs:{...(X=u.parameters)==null?void 0:X.docs,source:{originalSource:`{
  parameters: {
    layout: "fullscreen"
  },
  render: () => <div className="p-6">
            <h2 className="mb-6 text-2xl font-bold">Dashboard Stats Cards</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <StatsCard title="Total Responses" value="122,380" trend={{
        value: 15.1,
        type: "positive"
      }} comparison="vs. last month 105,922" />
                <StatsCard title="Abandonment Rate" value="1.9M" trend={{
        value: 2,
        type: "negative"
      }} comparison="vs. last month 2.0M" />
                <StatsCard title="Survey Revenue" value="$98.1M" trend={{
        value: 0.4,
        type: "positive"
      }} comparison="vs. last month $97.8M" />
                <StatsCard title="Active Surveys" value="48,210" trend={{
        value: 3.7,
        type: "positive"
      }} comparison="vs. last month 46,480" />
                <StatsCard title="Survey Status" items={[{
        label: "Qualified",
        value: "24%",
        amount: "$267,800",
        color: "success"
      }, {
        label: "Proposal",
        value: "18%",
        amount: "$192,400",
        color: "primary"
      }, {
        label: "Negotiation",
        value: "12%",
        amount: "$129,600",
        color: "warning"
      }]} />
                <StatsCard title="Website Analytics" subtitle="Total conversion rate: 28.5%" metrics={[{
        label: "Direct",
        value: "432"
      }, {
        label: "Organic",
        value: "216"
      }, {
        label: "Sessions",
        value: "29%"
      }, {
        label: "Page Views",
        value: "2.3K"
      }]} />
                <StatsCard title="Response Goal" value="$42.5k" subtitle="+20.1% from last month" progress={[{
        label: "Orders",
        percentage: 62.2,
        color: "success"
      }, {
        label: "Visits",
        percentage: 25.5,
        color: "primary"
      }]} />
                <StatsCard title="Conversion Rate" value="24.5%" trend={{
        value: 0,
        type: "neutral"
      }} comparison="No change since last month" />
            </div>
        </div>
}`,...(Z=(Y=u.parameters)==null?void 0:Y.docs)==null?void 0:Z.source},description:{story:`Showcase of all StatsCard variants in a responsive grid.
Demonstrates how cards look together in a dashboard layout.`,...(ae=(ee=u.parameters)==null?void 0:ee.docs)==null?void 0:ae.description}}};const se=["SimpleWithPositiveTrend","SimpleWithNegativeTrend","MonetaryValue","LargeNumber","NeutralTrend","WithList","WithMultipleMetrics","WithProgressBar","AllVariations"],oe=Object.freeze(Object.defineProperty({__proto__:null,AllVariations:u,LargeNumber:n,MonetaryValue:r,NeutralTrend:o,SimpleWithNegativeTrend:s,SimpleWithPositiveTrend:t,WithList:l,WithMultipleMetrics:i,WithProgressBar:c,__namedExportsOrder:se,default:te},Symbol.toStringTag,{value:"Module"}));export{u as A,n as L,r as M,o as N,oe as S,l as W,t as a,s as b,i as c,c as d};
