import{j as e}from"./jsx-runtime-BYYWji4R.js";import{useMDXComponents as t}from"./index-DUy19JZU.js";import{M as d,C as o}from"./index-Bl_Sc0A5.js";import{C as l,D as r,I as s,W as a}from"./ConfirmDialog.stories-B8AXJN5y.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-Ae4nIkFJ.js";import"./index-BIandHEk.js";import"./index-Drr-0Uuw.js";import"./index-Bhelpi4i.js";import"./utils-CDN07tui.js";import"./alert-dialog-BhKOmTg-.js";import"./index-CWz5EflU.js";import"./index-Bew1Yeam.js";import"./index-CtOrc1W9.js";import"./index-DW48STyt.js";import"./index-CaubhJIw.js";import"./index-CafsI6Qv.js";import"./index-B0ATiKj9.js";import"./index-guOESLwJ.js";import"./index-C59fdHCL.js";import"./index-CyBucMil.js";import"./index-kkVLZR_L.js";import"./index-CDv6ZuJx.js";import"./tslib.es6-BUas5LQb.js";import"./index-BntbZM61.js";import"./index-B2NcgzwI.js";import"./button-DY4UnA7S.js";import"./index-C2vczdB5.js";import"./dialog-DDbrjtmT.js";import"./icons-BXU3tp_f.js";import"./icon-CPjmVJEk.js";import"./input-D4wTwlKS.js";import"./label-D3XcEZ0Y.js";function c(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...t(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:l}),`
`,e.jsx(n.h1,{id:"confirmdialog",children:"ConfirmDialog"}),`
`,e.jsx(n.p,{children:"A versatile dialog component for confirmation actions, informational messages, and form-based interactions."}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"ConfirmDialog"})," wraps shadcn/ui's ",e.jsx(n.code,{children:"AlertDialog"})," and ",e.jsx(n.code,{children:"Dialog"})," primitives to provide a consistent pattern for modal interactions. It automatically selects the appropriate underlying component based on the ",e.jsx(n.code,{children:"type"})," prop:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Destructive"}),": Uses ",e.jsx(n.code,{children:"AlertDialog"})," for better accessibility with dangerous actions"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Informational/Default"}),": Uses ",e.jsx(n.code,{children:"Dialog"})," for general confirmations and forms"]}),`
`]}),`
`,e.jsx(n.h2,{id:"use-cases-in-voxco",children:"Use Cases in Voxco"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Delete Survey"}),": Confirm before permanently deleting a survey"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Publish Changes"}),": Confirm publishing survey changes to live respondents"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Discard Draft"}),": Warn users before discarding unsaved changes"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Export Data"}),": Inform users about export completion"]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"variants",children:"Variants"}),`
`,e.jsx(n.h3,{id:"destructive",children:"Destructive"}),`
`,e.jsx(n.p,{children:"Use for dangerous actions that cannot be undone."}),`
`,e.jsx(o,{of:r}),`
`,e.jsx(n.h3,{id:"informational",children:"Informational"}),`
`,e.jsx(n.p,{children:"Use for success messages or positive confirmations."}),`
`,e.jsx(o,{of:s}),`
`,e.jsx(n.h3,{id:"with-form-content",children:"With Form Content"}),`
`,e.jsx(n.p,{children:"Use when additional input is needed before confirmation."}),`
`,e.jsx(o,{of:a}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"voxco-examples",children:"Voxco Examples"}),`
`,e.jsx(n.h3,{id:"delete-survey-confirmation",children:"Delete Survey Confirmation"}),`
`,e.jsx(o,{of:r}),`
`,e.jsx(n.h3,{id:"publish-survey",children:"Publish Survey"}),`
`,e.jsx(o,{of:s}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"api-reference",children:"API Reference"}),`
`,e.jsx(n.h3,{id:"props",children:"Props"}),`
`,e.jsxs(n.p,{children:[`| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `,e.jsx(n.code,{children:"type"})," | ",e.jsx(n.code,{children:'"destructive" \\| "informational" \\| "default"'})," | ",e.jsx(n.code,{children:'"default"'}),` | Dialog type determines styling and icon |
| `,e.jsx(n.code,{children:"title"})," | ",e.jsx(n.code,{children:"string"}),` | Required | Dialog title |
| `,e.jsx(n.code,{children:"description"})," | ",e.jsx(n.code,{children:"string"}),` | Required | Dialog description/message |
| `,e.jsx(n.code,{children:"confirmLabel"})," | ",e.jsx(n.code,{children:"string"})," | ",e.jsx(n.code,{children:'"Confirm"'}),` | Label for confirm button |
| `,e.jsx(n.code,{children:"cancelLabel"})," | ",e.jsx(n.code,{children:"string"})," | ",e.jsx(n.code,{children:'"Cancel"'}),` | Label for cancel button |
| `,e.jsx(n.code,{children:"open"})," | ",e.jsx(n.code,{children:"boolean"}),` | - | Controlled open state |
| `,e.jsx(n.code,{children:"onOpenChange"})," | ",e.jsx(n.code,{children:"(open: boolean) => void"}),` | - | Callback when open state changes |
| `,e.jsx(n.code,{children:"onConfirm"})," | ",e.jsx(n.code,{children:"() => void"}),` | - | Callback when confirm is clicked |
| `,e.jsx(n.code,{children:"onCancel"})," | ",e.jsx(n.code,{children:"() => void"}),` | - | Callback when cancel is clicked |
| `,e.jsx(n.code,{children:"trigger"})," | ",e.jsx(n.code,{children:"ReactNode"}),` | - | Trigger element to open dialog |
| `,e.jsx(n.code,{children:"children"})," | ",e.jsx(n.code,{children:"ReactNode"}),` | - | Additional content (e.g., form fields) |
| `,e.jsx(n.code,{children:"className"})," | ",e.jsx(n.code,{children:"string"})," | - | Additional CSS classes |"]}),`
`,e.jsx(n.h3,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Uses ",e.jsx(n.code,{children:'role="alertdialog"'})," for destructive type"]}),`
`,e.jsx(n.li,{children:"Focus is automatically moved to the dialog when opened"}),`
`,e.jsx(n.li,{children:"Escape key closes the dialog"}),`
`,e.jsx(n.li,{children:"Screen readers announce the dialog title and description"}),`
`]})]})}function B(i={}){const{wrapper:n}={...t(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(c,{...i})}):c(i)}export{B as default};
