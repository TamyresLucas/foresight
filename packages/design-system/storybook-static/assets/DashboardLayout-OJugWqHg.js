import{j as e}from"./jsx-runtime-BYYWji4R.js";import{useMDXComponents as r}from"./index-DUy19JZU.js";import{M as o,C as d}from"./index-Dyj6b7a7.js";import{D as l,L as a,R as c,F as t,C as h,S as x}from"./DashboardLayout.stories-CqrKekmV.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-DpZIyxQp.js";import"./index-BIandHEk.js";import"./index-Drr-0Uuw.js";import"./index-Bhelpi4i.js";import"./index-C2vczdB5.js";import"./utils-CDN07tui.js";import"./button-D_2cT0Yd.js";import"./index-CyBucMil.js";import"./index-Bew1Yeam.js";import"./scroll-area-Rj3XeIs5.js";import"./index-C59fdHCL.js";import"./index-B2NcgzwI.js";import"./index-CafsI6Qv.js";import"./index-CWz5EflU.js";import"./index-kkVLZR_L.js";import"./index-CZKF78Oq.js";import"./index-BdQq_4o_.js";import"./index-DW48STyt.js";import"./separator-t5dMxVEz.js";import"./icons-BJRAOfCp.js";import"./icon-CPjmVJEk.js";import"./StatsCard-B4jp94VU.js";import"./card-gwaID0c4.js";import"./badge-CDZW3nus.js";import"./TrendBadge-C8ekqNSh.js";import"./input-CgUhi0Pz.js";function s(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:l}),`
`,e.jsx(n.h1,{id:"dashboardlayout",children:"DashboardLayout"}),`
`,e.jsx(n.p,{children:"A flexible page layout system for building dashboard interfaces with consistent structure and navigation patterns."}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(n.p,{children:"The DashboardLayout family includes:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"DashboardLayout"}),": Main layout wrapper with sidebar and content areas"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"DashboardSidebar"}),": Collapsible navigation panel"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"DashboardHeader"}),": Top bar with title and actions"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"DashboardContent"}),": Scrollable main content area"]}),`
`]}),`
`,e.jsx(n.h2,{id:"use-cases-in-voxco",children:"Use Cases in Voxco"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Survey Dashboard"}),": Main survey management interface"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Analytics View"}),": Data visualization with filters"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Settings Pages"}),": Configuration with navigation"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Report Builder"}),": Full-width editing interface"]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"layout-variants",children:"Layout Variants"}),`
`,e.jsx(n.h3,{id:"left-sidebar",children:"Left Sidebar"}),`
`,e.jsx(n.p,{children:"Standard dashboard layout with navigation on the left. Most common pattern for admin interfaces."}),`
`,e.jsx(d,{of:a}),`
`,e.jsx(n.h3,{id:"right-sidebar",children:"Right Sidebar"}),`
`,e.jsx(n.p,{children:"Layout with filters or details panel on the right. Useful for data-heavy views."}),`
`,e.jsx(d,{of:c}),`
`,e.jsx(n.h3,{id:"full-width",children:"Full Width"}),`
`,e.jsx(n.p,{children:"No sidebar layout for focused content views or builders."}),`
`,e.jsx(d,{of:t}),`
`,e.jsx(n.h3,{id:"collapsible-sidebar",children:"Collapsible Sidebar"}),`
`,e.jsx(n.p,{children:"Sidebar that can be collapsed to maximize content area."}),`
`,e.jsx(d,{of:h}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"complete-example",children:"Complete Example"}),`
`,e.jsx(n.h3,{id:"survey-dashboard",children:"Survey Dashboard"}),`
`,e.jsx(n.p,{children:"A complete implementation showing all components working together."}),`
`,e.jsx(d,{of:x}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"api-reference",children:"API Reference"}),`
`,e.jsx(n.h3,{id:"dashboardlayout-props",children:"DashboardLayout Props"}),`
`,e.jsxs(n.p,{children:[`| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `,e.jsx(n.code,{children:"variant"})," | ",e.jsx(n.code,{children:'"left-sidebar" \\| "right-sidebar" \\| "full-width"'})," | ",e.jsx(n.code,{children:'"left-sidebar"'}),` | Layout variant |
| `,e.jsx(n.code,{children:"sidebar"})," | ",e.jsx(n.code,{children:"ReactNode"}),` | - | Sidebar content (ignored for full-width) |
| `,e.jsx(n.code,{children:"header"})," | ",e.jsx(n.code,{children:"ReactNode"}),` | - | Header content |
| `,e.jsx(n.code,{children:"children"})," | ",e.jsx(n.code,{children:"ReactNode"}),` | Required | Main content |
| `,e.jsx(n.code,{children:"sidebarWidth"})," | ",e.jsx(n.code,{children:'"sm" \\| "md" \\| "lg"'})," | ",e.jsx(n.code,{children:'"md"'}),` | Sidebar width preset |
| `,e.jsx(n.code,{children:"collapsible"})," | ",e.jsx(n.code,{children:"boolean"})," | ",e.jsx(n.code,{children:"false"}),` | Allow sidebar to collapse |
| `,e.jsx(n.code,{children:"defaultCollapsed"})," | ",e.jsx(n.code,{children:"boolean"})," | ",e.jsx(n.code,{children:"false"}),` | Default collapsed state |
| `,e.jsx(n.code,{children:"className"})," | ",e.jsx(n.code,{children:"string"})," | - | Additional CSS classes |"]}),`
`,e.jsx(n.h3,{id:"dashboardsidebar-props",children:"DashboardSidebar Props"}),`
`,e.jsxs(n.p,{children:[`| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `,e.jsx(n.code,{children:"children"})," | ",e.jsx(n.code,{children:"ReactNode"}),` | Required | Sidebar content |
| `,e.jsx(n.code,{children:"width"})," | ",e.jsx(n.code,{children:'"sm" \\| "md" \\| "lg"'})," | ",e.jsx(n.code,{children:'"md"'}),` | Width preset |
| `,e.jsx(n.code,{children:"collapsed"})," | ",e.jsx(n.code,{children:"boolean"})," | ",e.jsx(n.code,{children:"false"}),` | Whether sidebar is collapsed |
| `,e.jsx(n.code,{children:"onCollapsedChange"})," | ",e.jsx(n.code,{children:"(collapsed: boolean) => void"}),` | - | Collapse state callback |
| `,e.jsx(n.code,{children:"showCollapseButton"})," | ",e.jsx(n.code,{children:"boolean"})," | ",e.jsx(n.code,{children:"true"}),` | Show collapse toggle |
| `,e.jsx(n.code,{children:"className"})," | ",e.jsx(n.code,{children:"string"})," | - | Additional CSS classes |"]}),`
`,e.jsx(n.h3,{id:"dashboardheader-props",children:"DashboardHeader Props"}),`
`,e.jsxs(n.p,{children:[`| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `,e.jsx(n.code,{children:"title"})," | ",e.jsx(n.code,{children:"string"}),` | - | Page title |
| `,e.jsx(n.code,{children:"subtitle"})," | ",e.jsx(n.code,{children:"ReactNode"}),` | - | Breadcrumb or subtitle |
| `,e.jsx(n.code,{children:"actions"})," | ",e.jsx(n.code,{children:"ReactNode"}),` | - | Actions on the right side |
| `,e.jsx(n.code,{children:"onMenuClick"})," | ",e.jsx(n.code,{children:"() => void"}),` | - | Mobile menu toggle callback |
| `,e.jsx(n.code,{children:"showMenuToggle"})," | ",e.jsx(n.code,{children:"boolean"})," | ",e.jsx(n.code,{children:"false"}),` | Show mobile menu button |
| `,e.jsx(n.code,{children:"className"})," | ",e.jsx(n.code,{children:"string"})," | - | Additional CSS classes |"]}),`
`,e.jsx(n.h3,{id:"dashboardcontent-props",children:"DashboardContent Props"}),`
`,e.jsxs(n.p,{children:[`| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `,e.jsx(n.code,{children:"children"})," | ",e.jsx(n.code,{children:"ReactNode"}),` | Required | Content |
| `,e.jsx(n.code,{children:"padded"})," | ",e.jsx(n.code,{children:"boolean"})," | ",e.jsx(n.code,{children:"true"}),` | Add padding |
| `,e.jsx(n.code,{children:"className"})," | ",e.jsx(n.code,{children:"string"})," | - | Additional CSS classes |"]}),`
`,e.jsx(n.h3,{id:"sidebar-width-presets",children:"Sidebar Width Presets"}),`
`,e.jsxs(n.p,{children:[`| Size | Expanded | Collapsed |
|------|----------|-----------|
| `,e.jsx(n.code,{children:"sm"}),` | 224px (w-56) | 64px (w-16) |
| `,e.jsx(n.code,{children:"md"}),` | 256px (w-64) | 64px (w-16) |
| `,e.jsx(n.code,{children:"lg"})," | 288px (w-72) | 80px (w-20) |"]}),`
`,e.jsx(n.h3,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Sidebar uses ",e.jsx(n.code,{children:'role="navigation"'})," with descriptive ",e.jsx(n.code,{children:"aria-label"})]}),`
`,e.jsx(n.li,{children:"Menu toggle button has screen reader text"}),`
`,e.jsxs(n.li,{children:["Content area uses semantic ",e.jsx(n.code,{children:"<main>"})," element"]}),`
`,e.jsxs(n.li,{children:["Header uses semantic ",e.jsx(n.code,{children:"<header>"})," element"]}),`
`]})]})}function I(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{I as default};
