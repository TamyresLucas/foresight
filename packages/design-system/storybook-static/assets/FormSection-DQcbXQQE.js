import{j as i}from"./jsx-runtime-BYYWji4R.js";import{useMDXComponents as s}from"./index-DUy19JZU.js";import{M as t,C as r}from"./index-C1ICjkCv.js";import{F as c,T as d,M as l,S as h,a as m}from"./FormSection.stories-DQYA8phm.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-BqRoLnwK.js";import"./index-Drr-0Uuw.js";import"./index-Bhelpi4i.js";import"./index-DrFu-skq.js";import"./FormSection-BRNuu9ZB.js";import"./utils-CDN07tui.js";import"./separator-DyOGEPWK.js";import"./index-C59fdHCL.js";import"./index-CyBucMil.js";import"./index-Bew1Yeam.js";import"./button-u6FMGbIq.js";import"./index-C2vczdB5.js";import"./input-BN6GNswh.js";import"./label-DYOVXtut.js";import"./textarea-Dl5EIwPU.js";import"./select-CeCqWMGF.js";import"./index-BdQq_4o_.js";import"./index-DW48STyt.js";import"./index-BpI74HIb.js";import"./index-CWz5EflU.js";import"./index-CZKF78Oq.js";import"./index-guOESLwJ.js";import"./index-kkVLZR_L.js";import"./index-CDv6ZuJx.js";import"./tslib.es6-BUas5LQb.js";import"./index-CaubhJIw.js";import"./index-CafsI6Qv.js";import"./index-DTBqWj02.js";import"./index-Jh3OPyOv.js";import"./index-BntbZM61.js";import"./index-B0ATiKj9.js";import"./index-sY83p_TZ.js";import"./index-C4f8hYez.js";import"./icons-BrjYTXf4.js";import"./checkbox-DWcrSu7J.js";import"./index-B2NcgzwI.js";function o(n){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...s(),...n.components};return i.jsxs(i.Fragment,{children:[i.jsx(t,{of:c}),`
`,i.jsx(e.h1,{id:"formsection",children:"FormSection"}),`
`,i.jsx(e.p,{children:"A comprehensive set of components for structuring forms with consistent layouts, spacing, and visual hierarchy."}),`
`,i.jsx(e.h2,{id:"overview",children:"Overview"}),`
`,i.jsx(e.p,{children:"The FormSection family includes:"}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:"FormSection"}),": Main container for grouping related form fields"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:"FormFieldGrid"}),": Responsive grid layout for form fields"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:"FormActions"}),": Consistent button placement for form submissions"]}),`
`]}),`
`,i.jsx(e.h2,{id:"use-cases-in-voxco",children:"Use Cases in Voxco"}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:"Survey Settings"}),": Organize survey configuration options"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:"Question Editor"}),": Structure question properties and settings"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:"User Profile"}),": Group personal information fields"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:"Export Configuration"}),": Organize export options"]}),`
`]}),`
`,i.jsx(e.hr,{}),`
`,i.jsx(e.h2,{id:"variants",children:"Variants"}),`
`,i.jsx(e.h3,{id:"two-column-layout",children:"Two-Column Layout"}),`
`,i.jsx(e.p,{children:"Organize fields in a responsive two-column grid."}),`
`,i.jsx(r,{of:d}),`
`,i.jsx(e.h3,{id:"multi-section-form",children:"Multi-Section Form"}),`
`,i.jsx(e.p,{children:"Multiple sections with titles and descriptions."}),`
`,i.jsx(r,{of:l}),`
`,i.jsx(e.h3,{id:"settings-form",children:"Settings Form"}),`
`,i.jsx(e.p,{children:"Compact settings with toggles and selects."}),`
`,i.jsx(r,{of:h}),`
`,i.jsx(e.h3,{id:"field-grid-example",children:"Field Grid Example"}),`
`,i.jsx(e.p,{children:"Using FormFieldGrid for responsive layouts."}),`
`,i.jsx(r,{of:m}),`
`,i.jsx(e.hr,{}),`
`,i.jsx(e.h2,{id:"api-reference",children:"API Reference"}),`
`,i.jsx(e.h3,{id:"formsection-props",children:"FormSection Props"}),`
`,i.jsxs(e.p,{children:[`| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `,i.jsx(e.code,{children:"title"})," | ",i.jsx(e.code,{children:"string"}),` | - | Section title |
| `,i.jsx(e.code,{children:"description"})," | ",i.jsx(e.code,{children:"string"}),` | - | Section description |
| `,i.jsx(e.code,{children:"columns"})," | ",i.jsx(e.code,{children:"1 \\| 2"})," | ",i.jsx(e.code,{children:"1"}),` | Number of columns for fields |
| `,i.jsx(e.code,{children:"showSeparator"})," | ",i.jsx(e.code,{children:"boolean"})," | ",i.jsx(e.code,{children:"false"}),` | Show separator after section |
| `,i.jsx(e.code,{children:"children"})," | ",i.jsx(e.code,{children:"ReactNode"}),` | Required | Form fields content |
| `,i.jsx(e.code,{children:"className"})," | ",i.jsx(e.code,{children:"string"})," | - | Additional CSS classes |"]}),`
`,i.jsx(e.h3,{id:"formfieldgrid-props",children:"FormFieldGrid Props"}),`
`,i.jsxs(e.p,{children:[`| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `,i.jsx(e.code,{children:"columns"})," | ",i.jsx(e.code,{children:"1 \\| 2 \\| 3 \\| 4"})," | ",i.jsx(e.code,{children:"2"}),` | Number of grid columns |
| `,i.jsx(e.code,{children:"gap"})," | ",i.jsx(e.code,{children:'"sm" \\| "md" \\| "lg"'})," | ",i.jsx(e.code,{children:'"md"'}),` | Gap between fields |
| `,i.jsx(e.code,{children:"children"})," | ",i.jsx(e.code,{children:"ReactNode"}),` | Required | Form fields |
| `,i.jsx(e.code,{children:"className"})," | ",i.jsx(e.code,{children:"string"})," | - | Additional CSS classes |"]}),`
`,i.jsx(e.h3,{id:"formactions-props",children:"FormActions Props"}),`
`,i.jsxs(e.p,{children:[`| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `,i.jsx(e.code,{children:"align"})," | ",i.jsx(e.code,{children:'"left" \\| "right" \\| "between"'})," | ",i.jsx(e.code,{children:'"right"'}),` | Button alignment |
| `,i.jsx(e.code,{children:"children"})," | ",i.jsx(e.code,{children:"ReactNode"}),` | Required | Action buttons |
| `,i.jsx(e.code,{children:"className"})," | ",i.jsx(e.code,{children:"string"})," | - | Additional CSS classes |"]}),`
`,i.jsx(e.h3,{id:"best-practices",children:"Best Practices"}),`
`,i.jsxs(e.ol,{children:[`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:"Group related fields"})," - Use FormSection to visually group related inputs"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:"Use consistent column layouts"})," - Stick to 1 or 2 columns for most forms"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:"Add descriptions"})," - Help users understand each section's purpose"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:"Right-align actions"})," - Primary actions should be on the right"]}),`
`]})]})}function ii(n={}){const{wrapper:e}={...s(),...n.components};return e?i.jsx(e,{...n,children:i.jsx(o,{...n})}):o(n)}export{ii as default};
