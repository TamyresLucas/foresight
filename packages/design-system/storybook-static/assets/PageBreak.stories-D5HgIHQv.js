import{j as e}from"./jsx-runtime-BYYWji4R.js";import{B as M}from"./badge-CDZW3nus.js";import{c as B}from"./utils-CDN07tui.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-C2vczdB5.js";const t=({pageNumber:a,pageName:l,isSelected:c,isDragging:P})=>{const Q=l||`Page ${a}`;return e.jsxs("div",{className:B("relative py-4 group cursor-grab",P&&"opacity-50",c&&"rounded-md ring-2 ring-primary ring-offset-2"),children:[e.jsx("div",{className:"absolute left-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity",children:e.jsx("span",{className:"material-symbols-rounded text-xl text-muted-foreground select-none",children:"drag_indicator"})}),e.jsxs("div",{className:"flex items-center gap-4 text-muted-foreground w-full",children:[e.jsx("div",{className:"flex-grow h-px bg-border-ui"}),e.jsxs("div",{className:"flex-shrink-0 flex items-stretch border border-border-ui rounded-full overflow-hidden hover:border-primary/50 transition-colors",children:[e.jsxs("span",{className:"bg-white dark:bg-muted px-3 py-1.5 text-xs font-bold text-foreground border-r border-border-ui",children:["P",a]}),e.jsx("span",{className:"text-xs font-semibold text-foreground bg-white dark:bg-card hover:bg-muted/50 px-3 py-1.5 transition-colors cursor-text",children:Q})]}),e.jsx("div",{className:"flex-grow h-px bg-border-ui"})]}),e.jsx("div",{className:"absolute right-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity",children:e.jsx("button",{className:"p-1.5 rounded hover:bg-muted text-muted-foreground",children:e.jsx("span",{className:"material-symbols-rounded text-base leading-none",children:"more_horiz"})})})]})},r=({id:a,label:l,children:c})=>e.jsxs("div",{className:"p-4 rounded-lg border border-border-ui bg-card grid items-start gap-x-4 grid-cols-[auto_1fr]",children:[e.jsx("div",{className:"flex items-center justify-center w-5 text-muted-foreground",children:e.jsx("span",{className:"material-symbols-rounded text-base select-none",children:"drag_indicator"})}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[e.jsx("span",{className:"text-xs font-mono font-semibold text-muted-foreground uppercase tracking-wide",children:a}),e.jsx(M,{variant:"outline",children:l})]}),c]})]}),_={title:"Survey Builder/Survey Canvas/PageBreak",parameters:{layout:"padded",docs:{description:{component:`
**PageBreak** is a separator element rendered between question cards to divide a block into multiple pages.

When a respondent fills out the survey, each page break creates a new "next" button — questions before the break appear on one screen, questions after it on the next.

### Anatomy

\`\`\`
  ── [drag handle]  ─────────── P2  Page Name ─────────── [⋯ actions]
\`\`\`

- **Left rule**: thin \`bg-border\` line
- **Pill**: rounded container with a \`P{n}\` number badge + editable page name
- **Right rule**: same thin line
- **Drag handle**: visible on hover (left side)
- **Actions menu**: visible on hover (right side) — options include Move to new block, Delete

### States

| State | Visual |
|-------|--------|
| Default | Subdued horizontal rule + pill |
| Hovered | Pill border shifts to \`border-primary/50\`, handles appear |
| Selected | \`ring-2 ring-primary ring-offset-2\` around the row |
| Dragging | \`opacity-50\` |
| Named page | Custom label shown instead of "Page N" |
`}}},tags:["autodocs"],decorators:[a=>e.jsx("div",{className:"max-w-2xl py-4",children:e.jsx(a,{})})]},s={name:"Default",render:()=>e.jsxs("div",{className:"space-y-1",children:[e.jsx(r,{id:"Q1",label:"Multiple Choice",children:e.jsx("p",{className:"text-sm text-foreground",children:"How satisfied are you with our service?"})}),e.jsx(t,{pageNumber:2}),e.jsx(r,{id:"Q2",label:"Text Entry",children:e.jsx("p",{className:"text-sm text-foreground",children:"Please describe your experience in detail."})})]})},o={name:"Named Page Break",render:()=>e.jsxs("div",{className:"space-y-1",children:[e.jsx(r,{id:"Q3",label:"Multiple Choice",children:e.jsx("p",{className:"text-sm text-foreground",children:"Which industry do you work in?"})}),e.jsx(t,{pageNumber:2,pageName:"Product Feedback"}),e.jsx(r,{id:"Q4",label:"Checkbox",children:e.jsx("p",{className:"text-sm text-foreground",children:"Which features do you use most?"})})]})},i={name:"Selected",render:()=>e.jsxs("div",{className:"space-y-1",children:[e.jsx(r,{id:"Q1",label:"Multiple Choice",children:e.jsx("p",{className:"text-sm text-foreground",children:"How satisfied are you with our service?"})}),e.jsx(t,{pageNumber:2,pageName:"Follow-up",isSelected:!0}),e.jsx(r,{id:"Q2",label:"Text Entry",children:e.jsx("p",{className:"text-sm text-foreground",children:"Please describe your experience in detail."})})]})},d={name:"Dragging",render:()=>e.jsxs("div",{className:"space-y-1",children:[e.jsx(r,{id:"Q1",label:"Multiple Choice",children:e.jsx("p",{className:"text-sm text-foreground",children:"How satisfied are you with our service?"})}),e.jsx(t,{pageNumber:2,isDragging:!0}),e.jsx(r,{id:"Q2",label:"Text Entry",children:e.jsx("p",{className:"text-sm text-foreground",children:"Please describe your experience in detail."})})]})},n={name:"Multiple Page Breaks",render:()=>e.jsxs("div",{className:"space-y-1",children:[e.jsx(r,{id:"Q1",label:"Description",children:e.jsx("p",{className:"text-sm text-foreground leading-relaxed",children:"Welcome to our annual satisfaction survey. This will take about 3 minutes."})}),e.jsx(r,{id:"Q2",label:"Multiple Choice",children:e.jsx("p",{className:"text-sm text-foreground",children:"How satisfied are you with our service?"})}),e.jsx(t,{pageNumber:2,pageName:"Product Usage"}),e.jsx(r,{id:"Q3",label:"Checkbox",children:e.jsx("p",{className:"text-sm text-foreground",children:"Which features do you use most often?"})}),e.jsx(r,{id:"Q4",label:"Multiple Choice",children:e.jsx("p",{className:"text-sm text-foreground",children:"How often do you use the product?"})}),e.jsx(t,{pageNumber:3,pageName:"Demographics"}),e.jsx(r,{id:"Q5",label:"Multiple Choice",children:e.jsx("p",{className:"text-sm text-foreground",children:"What is your role?"})}),e.jsx(r,{id:"Q6",label:"Text Entry",children:e.jsx("p",{className:"text-sm text-foreground",children:"Any final comments?"})})]})};var u,m,x;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  // eslint-disable-next-line storybook/no-redundant-story-name
  name: 'Default',
  render: () => <div className="space-y-1">
            <ContextCard id="Q1" label="Multiple Choice">
                <p className="text-sm text-foreground">How satisfied are you with our service?</p>
            </ContextCard>
            <PageBreak pageNumber={2} />
            <ContextCard id="Q2" label="Text Entry">
                <p className="text-sm text-foreground">Please describe your experience in detail.</p>
            </ContextCard>
        </div>
}`,...(x=(m=s.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var p,g,h;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Named Page Break',
  render: () => <div className="space-y-1">
            <ContextCard id="Q3" label="Multiple Choice">
                <p className="text-sm text-foreground">Which industry do you work in?</p>
            </ContextCard>
            <PageBreak pageNumber={2} pageName="Product Feedback" />
            <ContextCard id="Q4" label="Checkbox">
                <p className="text-sm text-foreground">Which features do you use most?</p>
            </ContextCard>
        </div>
}`,...(h=(g=o.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var b,f,y;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  // eslint-disable-next-line storybook/no-redundant-story-name
  name: 'Selected',
  render: () => <div className="space-y-1">
            <ContextCard id="Q1" label="Multiple Choice">
                <p className="text-sm text-foreground">How satisfied are you with our service?</p>
            </ContextCard>
            <PageBreak pageNumber={2} pageName="Follow-up" isSelected />
            <ContextCard id="Q2" label="Text Entry">
                <p className="text-sm text-foreground">Please describe your experience in detail.</p>
            </ContextCard>
        </div>
}`,...(y=(f=i.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var N,C,j;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  // eslint-disable-next-line storybook/no-redundant-story-name
  name: 'Dragging',
  render: () => <div className="space-y-1">
            <ContextCard id="Q1" label="Multiple Choice">
                <p className="text-sm text-foreground">How satisfied are you with our service?</p>
            </ContextCard>
            <PageBreak pageNumber={2} isDragging />
            <ContextCard id="Q2" label="Text Entry">
                <p className="text-sm text-foreground">Please describe your experience in detail.</p>
            </ContextCard>
        </div>
}`,...(j=(C=d.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};var v,w,k;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  // eslint-disable-next-line storybook/no-redundant-story-name
  name: 'Multiple Page Breaks',
  render: () => <div className="space-y-1">
            <ContextCard id="Q1" label="Description">
                <p className="text-sm text-foreground leading-relaxed">
                    Welcome to our annual satisfaction survey. This will take about 3 minutes.
                </p>
            </ContextCard>
            <ContextCard id="Q2" label="Multiple Choice">
                <p className="text-sm text-foreground">How satisfied are you with our service?</p>
            </ContextCard>
            <PageBreak pageNumber={2} pageName="Product Usage" />
            <ContextCard id="Q3" label="Checkbox">
                <p className="text-sm text-foreground">Which features do you use most often?</p>
            </ContextCard>
            <ContextCard id="Q4" label="Multiple Choice">
                <p className="text-sm text-foreground">How often do you use the product?</p>
            </ContextCard>
            <PageBreak pageNumber={3} pageName="Demographics" />
            <ContextCard id="Q5" label="Multiple Choice">
                <p className="text-sm text-foreground">What is your role?</p>
            </ContextCard>
            <ContextCard id="Q6" label="Text Entry">
                <p className="text-sm text-foreground">Any final comments?</p>
            </ContextCard>
        </div>
}`,...(k=(w=n.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};const A=["Default","Named","Selected","Dragging","MultiplePageBreaks"];export{s as Default,d as Dragging,n as MultiplePageBreaks,o as Named,i as Selected,A as __namedExportsOrder,_ as default};
