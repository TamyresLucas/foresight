import{j as e}from"./jsx-runtime-BYYWji4R.js";import{useMDXComponents as a}from"./index-DUy19JZU.js";import{M as d,C as i,a as o}from"./index-C1ICjkCv.js";import{S as c,a as s,b as l,M as h,L as p,N as m,W as x,c as j,d as u,A as g}from"./StatsCard.stories-CHPSrH4Y.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-BqRoLnwK.js";import"./index-Drr-0Uuw.js";import"./index-Bhelpi4i.js";import"./index-DrFu-skq.js";import"./StatsCard-Chl6nQap.js";import"./index-C2vczdB5.js";import"./utils-CDN07tui.js";import"./card-CGuI07T9.js";import"./badge-Do6ps_sj.js";import"./icons-BrjYTXf4.js";function t(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",...a(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:c}),`
`,e.jsx(n.h1,{id:"stats-cards",children:"Stats Cards"}),`
`,e.jsx(n.p,{children:"Statistics cards for displaying metrics and KPIs in dashboards."}),`
`,e.jsx(n.h2,{id:"import",children:"Import"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { StatsCard } from "@voxco/design-system/blocks/dashboard"
`})}),`
`,e.jsx(n.h2,{id:"voxco-use-cases",children:"Voxco Use Cases"}),`
`,e.jsx(n.p,{children:`| Scenario | Recommended Variant |
|----------|---------------------|
| Results Dashboard | SimpleWithPositiveTrend |
| Abandonment Rate | SimpleWithNegativeTrend |
| Revenue/Billing | MonetaryValue |
| Active Surveys | LargeNumber |
| Status Distribution | WithList |
| Multiple Analytics | WithMultipleMetrics |
| Response Goal | WithProgressBar |`}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"variants",children:"Variants"}),`
`,e.jsx(n.h3,{id:"1-simple-card-with-positive-trend",children:"1. Simple Card with Positive Trend"}),`
`,e.jsx(n.p,{children:"Ideal for metrics showing growth."}),`
`,e.jsx(i,{of:s}),`
`,e.jsx(o,{of:s}),`
`,e.jsx(n.h3,{id:"2-card-with-negative-trend",children:"2. Card with Negative Trend"}),`
`,e.jsx(n.p,{children:"For metrics showing decline (e.g., abandonment rate)."}),`
`,e.jsx(i,{of:l}),`
`,e.jsx(n.h3,{id:"3-card-with-monetary-value",children:"3. Card with Monetary Value"}),`
`,e.jsx(n.p,{children:"For displaying revenue or financial values."}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(n.h3,{id:"4-card-with-large-number",children:"4. Card with Large Number"}),`
`,e.jsx(n.p,{children:"For counters and totals."}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(n.h3,{id:"5-card-with-neutral-trend",children:"5. Card with Neutral Trend"}),`
`,e.jsx(n.p,{children:"For stable metrics with no variation."}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(n.h3,{id:"6-card-with-item-list",children:"6. Card with Item List"}),`
`,e.jsx(n.p,{children:"Item distribution with percentages and values."}),`
`,e.jsx(i,{of:x}),`
`,e.jsx(n.h3,{id:"7-card-with-multiple-metrics",children:"7. Card with Multiple Metrics"}),`
`,e.jsx(n.p,{children:"Grid of related metrics."}),`
`,e.jsx(i,{of:j}),`
`,e.jsx(n.h3,{id:"8-card-with-progress-bar",children:"8. Card with Progress Bar"}),`
`,e.jsx(n.p,{children:"Goal with visual segment distribution."}),`
`,e.jsx(i,{of:u}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"complete-showcase",children:"Complete Showcase"}),`
`,e.jsx(n.p,{children:"All variants in a responsive dashboard grid."}),`
`,e.jsx(i,{of:g}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"api",children:"API"}),`
`,e.jsx(n.h3,{id:"props",children:"Props"}),`
`,e.jsxs(n.p,{children:[`| Prop | Type | Description |
|------|------|-------------|
| `,e.jsx(n.code,{children:"title"})," | ",e.jsx(n.code,{children:"string"}),` | Title displayed at the top of the card |
| `,e.jsx(n.code,{children:"value"})," | ",e.jsx(n.code,{children:"string \\| number"}),` | Main highlighted value |
| `,e.jsx(n.code,{children:"trend"})," | ",e.jsx(n.code,{children:"{ value: number, type: 'positive' \\| 'negative' \\| 'neutral' }"}),` | Trend indicator |
| `,e.jsx(n.code,{children:"comparison"})," | ",e.jsx(n.code,{children:"string"}),` | Comparison text (e.g., "vs. last month") |
| `,e.jsx(n.code,{children:"subtitle"})," | ",e.jsx(n.code,{children:"string"}),` | Subtitle or additional description |
| `,e.jsx(n.code,{children:"items"})," | ",e.jsx(n.code,{children:"StatsListItem[]"}),` | List of items for list variant |
| `,e.jsx(n.code,{children:"metrics"})," | ",e.jsx(n.code,{children:"StatsMetric[]"}),` | Metrics grid for multi-metric variant |
| `,e.jsx(n.code,{children:"progress"})," | ",e.jsx(n.code,{children:"StatsProgressItem[]"}),` | Progress segments for bar variant |
| `,e.jsx(n.code,{children:"className"})," | ",e.jsx(n.code,{children:"string"})," | Additional CSS classes |"]}),`
`,e.jsx(n.h3,{id:"types",children:"Types"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`type TrendType = "positive" | "negative" | "neutral"

interface StatsListItem {
  label: string
  value: string
  amount?: string
  color?: string
}

interface StatsMetric {
  label: string
  value: string
}

interface StatsProgressItem {
  label: string
  percentage: number
  color?: "primary" | "secondary" | "success" | "warning" | "destructive"
}
`})})]})}function D(r={}){const{wrapper:n}={...a(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(t,{...r})}):t(r)}export{D as default};
