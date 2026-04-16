import{j as e}from"./jsx-runtime-BYYWji4R.js";import{useMDXComponents as o}from"./index-DUy19JZU.js";import{M as a,C as n,a as d}from"./index-Dyj6b7a7.js";import{S as c,a as t,b as h,L as l,D as p,W as m,c as x,d as j,e as g,A as u}from"./StatsCard.stories-C4c2pEYO.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-DpZIyxQp.js";import"./index-BIandHEk.js";import"./index-Drr-0Uuw.js";import"./index-Bhelpi4i.js";import"./icons-BJRAOfCp.js";import"./icon-CPjmVJEk.js";import"./utils-CDN07tui.js";import"./StatsCard-B4jp94VU.js";import"./index-C2vczdB5.js";import"./card-gwaID0c4.js";import"./badge-CDZW3nus.js";import"./button-D_2cT0Yd.js";import"./index-CyBucMil.js";import"./index-Bew1Yeam.js";import"./TrendBadge-C8ekqNSh.js";function s(r){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",...o(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:c}),`
`,e.jsx(i.h1,{id:"hero-cards",children:"Hero Cards"}),`
`,e.jsx(i.p,{children:"Statistics cards for displaying metrics and KPIs in dashboards."}),`
`,e.jsx(i.h2,{id:"import",children:"Import"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`import { StatsCard } from "@voxco/design-system/blocks/dashboard"
`})}),`
`,e.jsx(i.h2,{id:"voxco-use-cases",children:"Voxco Use Cases"}),`
`,e.jsx(i.p,{children:`| Scenario | Recommended Variant |
|----------|---------------------|
| Results Dashboard | SimpleWithPositiveTrend |
| Abandonment Rate | SimpleWithNegativeTrend |
| Active Surveys | Default |
| Status Distribution | WithList |
| Multiple Analytics | WithMultipleMetrics |
| Response Goal | WithProgressBar |
| Explore / Navigate | LearnMore |`}),`
`,e.jsx(i.hr,{}),`
`,e.jsx(i.h2,{id:"variants",children:"Variants"}),`
`,e.jsx(i.h3,{id:"simple-card-with-positive-trend",children:"Simple Card with Positive Trend"}),`
`,e.jsx(i.p,{children:"Ideal for metrics showing growth."}),`
`,e.jsx(n,{of:t}),`
`,e.jsx(d,{of:t}),`
`,e.jsx(i.h3,{id:"card-with-negative-trend",children:"Card with Negative Trend"}),`
`,e.jsx(i.p,{children:"For metrics showing decline (e.g., abandonment rate)."}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(i.h3,{id:"learn-more",children:"Learn More"}),`
`,e.jsx(i.p,{children:"Card with a navigation button in the top-right corner."}),`
`,e.jsx(n,{of:l}),`
`,e.jsx(i.h3,{id:"card-without-trend",children:"Card without Trend"}),`
`,e.jsx(i.p,{children:"For counters and totals without directional indicator."}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(i.h3,{id:"card-with-header-stats",children:"Card with Header Stats"}),`
`,e.jsx(i.p,{children:"Compact multi-metric header with labeled values on the right."}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(i.h3,{id:"card-with-item-list",children:"Card with Item List"}),`
`,e.jsx(i.p,{children:"Item distribution with percentages and values."}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(i.h3,{id:"card-with-multiple-metrics",children:"Card with Multiple Metrics"}),`
`,e.jsx(i.p,{children:"Grid of related metrics."}),`
`,e.jsx(n,{of:j}),`
`,e.jsx(i.h3,{id:"card-with-progress-bar",children:"Card with Progress Bar"}),`
`,e.jsx(i.p,{children:"Goal with visual segment distribution."}),`
`,e.jsx(n,{of:g}),`
`,e.jsx(i.hr,{}),`
`,e.jsx(i.h2,{id:"complete-showcase",children:"Complete Showcase"}),`
`,e.jsx(i.p,{children:"All variants in a responsive dashboard grid."}),`
`,e.jsx(n,{of:u}),`
`,e.jsx(i.hr,{}),`
`,e.jsx(i.h2,{id:"api",children:"API"}),`
`,e.jsx(i.h3,{id:"props",children:"Props"}),`
`,e.jsxs(i.p,{children:[`| Prop | Type | Description |
|------|------|-------------|
| `,e.jsx(i.code,{children:"title"})," | ",e.jsx(i.code,{children:"string"}),` | Title displayed at the top of the card |
| `,e.jsx(i.code,{children:"value"})," | ",e.jsx(i.code,{children:"string \\| number"}),` | Main highlighted value |
| `,e.jsx(i.code,{children:"trend"})," | ",e.jsx(i.code,{children:"{ value: number, type: 'positive' \\| 'negative' \\| 'neutral' }"}),` | Trend indicator |
| `,e.jsx(i.code,{children:"comparison"})," | ",e.jsx(i.code,{children:"string"}),` | Comparison text (e.g., "vs. last month") |
| `,e.jsx(i.code,{children:"subtitle"})," | ",e.jsx(i.code,{children:"string"}),` | Subtitle or additional description |
| `,e.jsx(i.code,{children:"icon"})," | ",e.jsx(i.code,{children:"React.ReactNode"}),` | Outlined icon shown in the top-right corner |
| `,e.jsx(i.code,{children:"learnMore"})," | ",e.jsx(i.code,{children:"boolean"}),` | Shows the arrow navigation button instead of an icon |
| `,e.jsx(i.code,{children:"items"})," | ",e.jsx(i.code,{children:"StatsListItem[]"}),` | List of items for list variant |
| `,e.jsx(i.code,{children:"metrics"})," | ",e.jsx(i.code,{children:"StatsMetric[]"}),` | Metrics grid for multi-metric variant |
| `,e.jsx(i.code,{children:"progress"})," | ",e.jsx(i.code,{children:"StatsProgressItem[]"}),` | Progress segments for bar variant |
| `,e.jsx(i.code,{children:"className"})," | ",e.jsx(i.code,{children:"string"})," | Additional CSS classes |"]}),`
`,e.jsx(i.h3,{id:"types",children:"Types"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`type TrendType = "positive" | "negative" | "neutral"

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
`})})]})}function H(r={}){const{wrapper:i}={...o(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(s,{...r})}):s(r)}export{H as default};
