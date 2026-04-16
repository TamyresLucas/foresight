import{j as e}from"./jsx-runtime-BYYWji4R.js";import{R as Ne}from"./index-ClcD9ViR.js";import{A as Q,b as B,a as fe}from"./alert-aj_NsfeP.js";import{B as we}from"./badge-CDZW3nus.js";import{c}from"./utils-CDN07tui.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-C2vczdB5.js";const t=()=>e.jsx("div",{className:"flex items-center justify-center w-5 cursor-grab opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground",children:e.jsx("span",{className:"material-symbols-rounded text-base select-none",children:"drag_indicator"})}),i=({id:l})=>e.jsx("span",{className:"text-xs font-mono font-semibold text-muted-foreground uppercase tracking-wide",children:l}),r=({label:l})=>e.jsx(we,{variant:"outline",children:l}),a=()=>e.jsx("button",{className:"opacity-0 group-hover:opacity-100 transition-opacity p-1 rounded hover:bg-muted text-muted-foreground",children:e.jsx("span",{className:"material-symbols-rounded text-base leading-none",children:"more_horiz"})}),d=({children:l,isSelected:n,hasError:m})=>e.jsx("div",{className:c("p-4 rounded-lg border transition-all group relative grid items-start gap-x-4 bg-card grid-cols-[auto_1fr]",n&&m&&"border-destructive shadow-md",n&&!m&&"border-primary shadow-md",!n&&"border-border-ui hover:shadow-md"),children:l}),s=({label:l,type:n="radio"})=>e.jsxs("div",{className:"flex items-center gap-2 py-1",children:[e.jsx("div",{className:c("w-4 h-4 border border-foreground flex-shrink-0",n==="radio"?"rounded-full":"rounded-sm")}),e.jsx("span",{className:"text-sm text-foreground",children:l})]}),D=({message:l})=>e.jsxs(Q,{className:"py-2",children:[e.jsx("span",{className:"material-symbols-rounded text-sm leading-none",children:"account_tree"}),e.jsx(B,{className:"text-xs",children:l})]}),ge=({message:l})=>e.jsxs(Q,{variant:"destructive",className:"py-2",children:[e.jsx("span",{className:"material-symbols-rounded text-sm leading-none",children:"error"}),e.jsx(fe,{className:"text-xs font-semibold",children:"Logic Error"}),e.jsx(B,{className:"text-xs",children:l})]}),je=({message:l})=>e.jsxs(Q,{className:"mt-3 py-2.5",children:[e.jsx("span",{className:"material-symbols-rounded text-base",children:"account_tree"}),e.jsx(B,{className:"text-xs",children:l})]}),Ce=({message:l})=>e.jsxs(Q,{variant:"destructive",className:"mt-3 py-2.5",children:[e.jsx("span",{className:"material-symbols-rounded text-base",children:"error"}),e.jsx(fe,{className:"text-xs font-semibold",children:"Logic Error"}),e.jsx(B,{className:"text-xs",children:l})]}),o=({children:l,title:n="Block 1",blockId:m="B1",questionCount:ve,isSelected:S,isHovered:I,isCollapsed:k,isDragging:ye})=>{const R=ve??Ne.Children.count(l);return e.jsxs("div",{className:c("bg-card border rounded-lg transition-all",ye&&"opacity-50",S&&"border-2 border-primary shadow-md",!S&&I&&"border-border-ui shadow-sm",!S&&!I&&"border-border-ui"),children:[e.jsxs("div",{className:c("flex items-center justify-between px-4 py-3",!k&&"border-b border-border-ui"),children:[e.jsxs("div",{className:"flex items-center gap-2 cursor-grab",children:[e.jsx("span",{className:"material-symbols-rounded text-base text-muted-foreground opacity-0 group-hover:opacity-100 select-none",children:"drag_indicator"}),e.jsx("button",{className:"p-0.5 rounded hover:bg-muted text-muted-foreground",children:e.jsx("span",{className:c("material-symbols-rounded text-base transition-transform",k&&"-rotate-90"),children:"expand_more"})}),e.jsx("span",{className:"font-semibold text-sm text-foreground",children:m}),e.jsx("span",{className:"font-semibold text-sm text-foreground",children:n}),e.jsxs("span",{className:"text-xs text-muted-foreground font-normal",children:["(",R," question",R!==1?"s":"",")"]})]}),e.jsx("button",{className:"opacity-0 hover:opacity-100 p-1 rounded hover:bg-muted text-muted-foreground",children:e.jsx("span",{className:"material-symbols-rounded text-base leading-none",children:"more_horiz"})})]}),!k&&e.jsx("div",{className:"p-4 space-y-3",children:l})]})},Ee={title:"Survey Builder/Survey Canvas/BlockCard",parameters:{layout:"padded",docs:{description:{component:`
**BlockCard** is the top-level container in the Survey Canvas. Each survey is made up of one or more blocks, each holding an ordered list of question cards.

### Anatomy

- **Header**: drag handle, collapse toggle, block ID (e.g. \`B1\`), block title, question count, actions menu
- **Body**: ordered list of QuestionCard items, separated by PageBreaks when multi-page
- **Logic alerts**: rendered inside the body at the edges (before or after all questions), never between questions

### States

| State | Border | Shadow |
|-------|--------|--------|
| Default | \`border-border-ui\` | none |
| Hovered | \`border-border-ui\` | sm |
| Selected | \`border-2 border-primary\` | md |
| Dragging | normal border + \`opacity-50\` | — |
| Collapsed | header only, body hidden | — |
| Empty | body shows a dashed drop zone | — |

### Branching logic alerts (block-level)

Logic alerts appear at the **edges** of the block body — never between questions.

| Position | Alert type | When |
|----------|------------|------|
| **First child** (before questions) | Incoming | This block is the destination of a branch from a previous block |
| **Last child** (after questions) | Outgoing | This block routes respondents to another block based on answers |

Both positions support two states:

| State | Component | When |
|-------|-----------|------|
| Default | \`FlowLogicAlert\` (neutral) | Rule is valid — shows the branch condition |
| Error | \`FlowLogicErrorAlert\` (destructive) | Rule is broken — branch target or source was deleted |

### Question-level logic

Individual QuestionCards inside a block may also carry their own logic alerts (skip logic, display logic). These appear inside the card, not at the block edges.
`}}},tags:["autodocs"],decorators:[l=>e.jsx("div",{className:"max-w-2xl space-y-4 py-4",children:e.jsx(l,{})})]},x={name:"Default",render:()=>e.jsxs(o,{title:"Customer Satisfaction",blockId:"B1",questionCount:3,children:[e.jsxs(d,{children:[e.jsx(t,{}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(i,{id:"Q1"}),e.jsx(r,{label:"Multiple Choice"})]}),e.jsx(a,{})]}),e.jsx("p",{className:"text-sm text-foreground mt-1",children:"How satisfied are you with our service?"}),e.jsxs("div",{className:"mt-3 space-y-0.5",children:[e.jsx(s,{label:"Very satisfied"}),e.jsx(s,{label:"Satisfied"}),e.jsx(s,{label:"Neutral"}),e.jsx(s,{label:"Dissatisfied"})]})]})]}),e.jsxs(d,{children:[e.jsx(t,{}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(i,{id:"Q2"}),e.jsx(r,{label:"Text Entry"})]}),e.jsx(a,{})]}),e.jsx("p",{className:"text-sm text-foreground mt-1",children:"Please describe your experience in detail."}),e.jsx("div",{className:"mt-3 rounded border border-border-ui bg-muted/30 px-3 py-2 text-sm text-muted-foreground italic",children:"Respondent types a free-text answer here..."})]})]}),e.jsxs(d,{children:[e.jsx(t,{}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(i,{id:"Q3"}),e.jsx(r,{label:"Checkbox"})]}),e.jsx(a,{})]}),e.jsx("p",{className:"text-sm text-foreground mt-1",children:"Which of the following apply to you?"}),e.jsxs("div",{className:"mt-3 space-y-0.5",children:[e.jsx(s,{label:"I use this product daily",type:"checkbox"}),e.jsx(s,{label:"I have recommended it to others",type:"checkbox"}),e.jsx(s,{label:"I would pay more for premium features",type:"checkbox"})]})]})]})]})},u={name:"Selected",render:()=>e.jsxs(o,{title:"Customer Satisfaction",blockId:"B1",questionCount:2,isSelected:!0,children:[e.jsxs(d,{children:[e.jsx(t,{}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(i,{id:"Q1"}),e.jsx(r,{label:"Multiple Choice"})]}),e.jsx(a,{})]}),e.jsx("p",{className:"text-sm text-foreground mt-1",children:"How satisfied are you with our service?"}),e.jsxs("div",{className:"mt-3 space-y-0.5",children:[e.jsx(s,{label:"Very satisfied"}),e.jsx(s,{label:"Satisfied"}),e.jsx(s,{label:"Neutral"}),e.jsx(s,{label:"Dissatisfied"})]})]})]}),e.jsxs(d,{children:[e.jsx(t,{}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(i,{id:"Q2"}),e.jsx(r,{label:"Text Entry"})]}),e.jsx(a,{})]}),e.jsx("p",{className:"text-sm text-foreground mt-1",children:"Please describe your experience in detail."}),e.jsx("div",{className:"mt-3 rounded border border-border-ui bg-muted/30 px-3 py-2 text-sm text-muted-foreground italic",children:"Respondent types a free-text answer here..."})]})]})]})},p={name:"Hovered",render:()=>e.jsxs(o,{title:"Customer Satisfaction",blockId:"B1",questionCount:2,isHovered:!0,children:[e.jsxs(d,{children:[e.jsx(t,{}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(i,{id:"Q1"}),e.jsx(r,{label:"Multiple Choice"})]}),e.jsx(a,{})]}),e.jsx("p",{className:"text-sm text-foreground mt-1",children:"How satisfied are you with our service?"}),e.jsxs("div",{className:"mt-3 space-y-0.5",children:[e.jsx(s,{label:"Very satisfied"}),e.jsx(s,{label:"Satisfied"})]})]})]}),e.jsxs(d,{children:[e.jsx(t,{}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(i,{id:"Q2"}),e.jsx(r,{label:"Text Entry"})]}),e.jsx(a,{})]}),e.jsx("p",{className:"text-sm text-foreground mt-1",children:"Please describe your experience in detail."}),e.jsx("div",{className:"mt-3 rounded border border-border-ui bg-muted/30 px-3 py-2 text-sm text-muted-foreground italic",children:"Respondent types a free-text answer here..."})]})]})]})},h={name:"Collapsed",render:()=>e.jsx(o,{title:"Demographics",blockId:"B2",questionCount:4,isCollapsed:!0})},b={name:"Outgoing Branching Logic — Default",render:()=>e.jsxs(o,{title:"Customer Satisfaction",blockId:"B1",questionCount:2,children:[e.jsxs(d,{children:[e.jsx(t,{}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(i,{id:"Q1"}),e.jsx(r,{label:"Multiple Choice"})]}),e.jsx(a,{})]}),e.jsx("p",{className:"text-sm text-foreground mt-1",children:"How satisfied are you with our service?"}),e.jsxs("div",{className:"mt-3 space-y-0.5",children:[e.jsx(s,{label:"Very satisfied"}),e.jsx(s,{label:"Satisfied"}),e.jsx(s,{label:"Neutral"}),e.jsx(s,{label:"Dissatisfied"})]})]})]}),e.jsxs(d,{children:[e.jsx(t,{}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(i,{id:"Q2"}),e.jsx(r,{label:"Text Entry"})]}),e.jsx(a,{})]}),e.jsx("p",{className:"text-sm text-foreground mt-1",children:"Any additional comments?"}),e.jsx("div",{className:"mt-3 rounded border border-border-ui bg-muted/30 px-3 py-2 text-sm text-muted-foreground italic",children:"Respondent types a free-text answer here..."})]})]}),e.jsx(D,{message:"If Q1 = 'Dissatisfied' → jump to B3 (Follow-up Questions)"})]})},f={name:"Outgoing Branching Logic — Error",render:()=>e.jsxs(o,{title:"Customer Satisfaction",blockId:"B1",questionCount:2,children:[e.jsxs(d,{children:[e.jsx(t,{}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(i,{id:"Q1"}),e.jsx(r,{label:"Multiple Choice"})]}),e.jsx(a,{})]}),e.jsx("p",{className:"text-sm text-foreground mt-1",children:"How satisfied are you with our service?"}),e.jsxs("div",{className:"mt-3 space-y-0.5",children:[e.jsx(s,{label:"Very satisfied"}),e.jsx(s,{label:"Satisfied"}),e.jsx(s,{label:"Neutral"}),e.jsx(s,{label:"Dissatisfied"})]})]})]}),e.jsxs(d,{children:[e.jsx(t,{}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(i,{id:"Q2"}),e.jsx(r,{label:"Text Entry"})]}),e.jsx(a,{})]}),e.jsx("p",{className:"text-sm text-foreground mt-1",children:"Any additional comments?"}),e.jsx("div",{className:"mt-3 rounded border border-border-ui bg-muted/30 px-3 py-2 text-sm text-muted-foreground italic",children:"Respondent types a free-text answer here..."})]})]}),e.jsx(ge,{message:"Branch target 'B3 – Follow-up' was deleted. Update or remove this rule."})]})},g={name:"Incoming Branching Logic — Default",render:()=>e.jsxs(o,{title:"Follow-up Questions",blockId:"B3",questionCount:2,children:[e.jsx(D,{message:"Reached from B1 — shown only when Q1 = 'Dissatisfied'"}),e.jsxs(d,{children:[e.jsx(t,{}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(i,{id:"Q5"}),e.jsx(r,{label:"Multiple Choice"})]}),e.jsx(a,{})]}),e.jsx("p",{className:"text-sm text-foreground mt-1",children:"What could we have done better?"}),e.jsxs("div",{className:"mt-3 space-y-0.5",children:[e.jsx(s,{label:"Faster response time"}),e.jsx(s,{label:"Better communication"}),e.jsx(s,{label:"Lower prices"})]})]})]}),e.jsxs(d,{children:[e.jsx(t,{}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(i,{id:"Q6"}),e.jsx(r,{label:"Text Entry"})]}),e.jsx(a,{})]}),e.jsx("p",{className:"text-sm text-foreground mt-1",children:"Please describe what went wrong."}),e.jsx("div",{className:"mt-3 rounded border border-border-ui bg-muted/30 px-3 py-2 text-sm text-muted-foreground italic",children:"Respondent types a free-text answer here..."})]})]})]})},j={name:"Incoming Branching Logic — Error",render:()=>e.jsxs(o,{title:"Follow-up Questions",blockId:"B3",questionCount:2,children:[e.jsx(ge,{message:"Source rule in B1 references a deleted choice. This block may never be reached."}),e.jsxs(d,{children:[e.jsx(t,{}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(i,{id:"Q5"}),e.jsx(r,{label:"Multiple Choice"})]}),e.jsx(a,{})]}),e.jsx("p",{className:"text-sm text-foreground mt-1",children:"What could we have done better?"}),e.jsxs("div",{className:"mt-3 space-y-0.5",children:[e.jsx(s,{label:"Faster response time"}),e.jsx(s,{label:"Better communication"}),e.jsx(s,{label:"Lower prices"})]})]})]}),e.jsxs(d,{children:[e.jsx(t,{}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(i,{id:"Q6"}),e.jsx(r,{label:"Text Entry"})]}),e.jsx(a,{})]}),e.jsx("p",{className:"text-sm text-foreground mt-1",children:"Please describe what went wrong."}),e.jsx("div",{className:"mt-3 rounded border border-border-ui bg-muted/30 px-3 py-2 text-sm text-muted-foreground italic",children:"Respondent types a free-text answer here..."})]})]})]})},v={name:"Question With Logic — Default",render:()=>e.jsxs(o,{title:"Customer Satisfaction",blockId:"B1",questionCount:2,children:[e.jsxs(d,{isSelected:!0,children:[e.jsx(t,{}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(i,{id:"Q1"}),e.jsx(r,{label:"Multiple Choice"})]}),e.jsx(a,{})]}),e.jsx("p",{className:"text-sm text-foreground mt-1",children:"How satisfied are you with our service?"}),e.jsxs("div",{className:"mt-3 space-y-0.5",children:[e.jsx(s,{label:"Very satisfied"}),e.jsx(s,{label:"Satisfied"}),e.jsx(s,{label:"Neutral"}),e.jsx(s,{label:"Dissatisfied"})]}),e.jsx(je,{message:"Skip to Q3 if respondent selects 'Dissatisfied'"})]})]}),e.jsxs(d,{children:[e.jsx(t,{}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(i,{id:"Q2"}),e.jsx(r,{label:"Text Entry"})]}),e.jsx(a,{})]}),e.jsx("p",{className:"text-sm text-foreground mt-1",children:"What did we do well?"}),e.jsx("div",{className:"mt-3 rounded border border-border-ui bg-muted/30 px-3 py-2 text-sm text-muted-foreground italic",children:"Respondent types a free-text answer here..."})]})]})]})},y={name:"Question With Logic — Error",render:()=>e.jsxs(o,{title:"Customer Satisfaction",blockId:"B1",questionCount:2,children:[e.jsxs(d,{isSelected:!0,hasError:!0,children:[e.jsx(t,{}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(i,{id:"Q1"}),e.jsx(r,{label:"Multiple Choice"})]}),e.jsx(a,{})]}),e.jsx("p",{className:"text-sm text-foreground mt-1",children:"How satisfied are you with our service?"}),e.jsxs("div",{className:"mt-3 space-y-0.5",children:[e.jsx(s,{label:"Very satisfied"}),e.jsx(s,{label:"Satisfied"}),e.jsx(s,{label:"Neutral"}),e.jsx(s,{label:"Dissatisfied"})]}),e.jsx(Ce,{message:"Skip logic references Q4 which no longer exists. Update or remove this rule."})]})]}),e.jsxs(d,{children:[e.jsx(t,{}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(i,{id:"Q2"}),e.jsx(r,{label:"Text Entry"})]}),e.jsx(a,{})]}),e.jsx("p",{className:"text-sm text-foreground mt-1",children:"Please describe your experience in detail."}),e.jsx("div",{className:"mt-3 rounded border border-border-ui bg-muted/30 px-3 py-2 text-sm text-muted-foreground italic",children:"Respondent types a free-text answer here..."})]})]})]})},N={name:"Dragging",render:()=>e.jsxs(o,{title:"Customer Satisfaction",blockId:"B1",questionCount:2,isDragging:!0,children:[e.jsxs(d,{children:[e.jsx(t,{}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(i,{id:"Q1"}),e.jsx(r,{label:"Multiple Choice"})]}),e.jsx(a,{})]}),e.jsx("p",{className:"text-sm text-foreground mt-1",children:"How satisfied are you with our service?"}),e.jsxs("div",{className:"mt-3 space-y-0.5",children:[e.jsx(s,{label:"Very satisfied"}),e.jsx(s,{label:"Satisfied"})]})]})]}),e.jsxs(d,{children:[e.jsx(t,{}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(i,{id:"Q2"}),e.jsx(r,{label:"Text Entry"})]}),e.jsx(a,{})]}),e.jsx("p",{className:"text-sm text-foreground mt-1",children:"Please describe your experience in detail."}),e.jsx("div",{className:"mt-3 rounded border border-border-ui bg-muted/30 px-3 py-2 text-sm text-muted-foreground italic",children:"Respondent types a free-text answer here..."})]})]})]})},w={name:"Empty (Drop Zone)",render:()=>e.jsx(o,{title:"New Block",blockId:"B4",questionCount:0,children:e.jsxs("div",{className:"flex flex-col items-center justify-center py-8 border-2 border-dashed border-border-ui rounded-lg text-muted-foreground gap-2",children:[e.jsx("span",{className:"material-symbols-rounded text-2xl",children:"add_circle"}),e.jsx("span",{className:"text-sm",children:"Drag a question here or click to add"})]})})},C={name:"Multiple Blocks (Canvas Overview)",render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(o,{title:"Introduction",blockId:"B1",questionCount:1,children:e.jsxs(d,{children:[e.jsx(t,{}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(i,{id:"Q1"}),e.jsx(r,{label:"Description"})]}),e.jsx(a,{})]}),e.jsx("div",{className:"mt-1 text-sm text-foreground leading-relaxed",children:"Welcome! This survey will take approximately 3 minutes to complete."})]})]})}),e.jsxs(o,{title:"Customer Satisfaction",blockId:"B2",questionCount:3,isSelected:!0,children:[e.jsxs(d,{isSelected:!0,children:[e.jsx(t,{}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(i,{id:"Q2"}),e.jsx(r,{label:"Multiple Choice"})]}),e.jsx(a,{})]}),e.jsx("p",{className:"text-sm text-foreground mt-1",children:"How satisfied are you with our service?"}),e.jsxs("div",{className:"mt-3 space-y-0.5",children:[e.jsx(s,{label:"Very satisfied"}),e.jsx(s,{label:"Satisfied"}),e.jsx(s,{label:"Neutral"}),e.jsx(s,{label:"Dissatisfied"})]}),e.jsx(je,{message:"Skip to Q4 if respondent selects 'Very satisfied' or 'Satisfied'"})]})]}),e.jsxs(d,{children:[e.jsx(t,{}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(i,{id:"Q3"}),e.jsx(r,{label:"Text Entry"})]}),e.jsx(a,{})]}),e.jsx("p",{className:"text-sm text-foreground mt-1",children:"What could we have done better?"}),e.jsx("div",{className:"mt-3 rounded border border-border-ui bg-muted/30 px-3 py-2 text-sm text-muted-foreground italic",children:"Respondent types a free-text answer here..."})]})]}),e.jsxs(d,{children:[e.jsx(t,{}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(i,{id:"Q4"}),e.jsx(r,{label:"Text Entry"})]}),e.jsx(a,{})]}),e.jsx("p",{className:"text-sm text-foreground mt-1",children:"Any additional feedback?"}),e.jsx("div",{className:"mt-3 rounded border border-border-ui bg-muted/30 px-3 py-2 text-sm text-muted-foreground italic",children:"Respondent types a free-text answer here..."})]})]}),e.jsx(D,{message:"If Q2 = 'Dissatisfied' → jump to B3 (Follow-up Questions)"})]}),e.jsx(o,{title:"Demographics",blockId:"B3",questionCount:3,isCollapsed:!0})]})};var E,T,A;x.parameters={...x.parameters,docs:{...(E=x.parameters)==null?void 0:E.docs,source:{originalSource:`{
  // eslint-disable-next-line storybook/no-redundant-story-name
  name: 'Default',
  render: () => <BlockCard title="Customer Satisfaction" blockId="B1" questionCount={3}>
            <QuestionCardShell>
                <DragHandle />
                <div>
                    <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                            <QuestionId id="Q1" />
                            <TypeBadge label="Multiple Choice" />
                        </div>
                        <ActionsMenu />
                    </div>
                    <p className="text-sm text-foreground mt-1">How satisfied are you with our service?</p>
                    <div className="mt-3 space-y-0.5">
                        <ChoiceRow label="Very satisfied" />
                        <ChoiceRow label="Satisfied" />
                        <ChoiceRow label="Neutral" />
                        <ChoiceRow label="Dissatisfied" />
                    </div>
                </div>
            </QuestionCardShell>
            <QuestionCardShell>
                <DragHandle />
                <div>
                    <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                            <QuestionId id="Q2" />
                            <TypeBadge label="Text Entry" />
                        </div>
                        <ActionsMenu />
                    </div>
                    <p className="text-sm text-foreground mt-1">Please describe your experience in detail.</p>
                    <div className="mt-3 rounded border border-border-ui bg-muted/30 px-3 py-2 text-sm text-muted-foreground italic">
                        Respondent types a free-text answer here...
                    </div>
                </div>
            </QuestionCardShell>
            <QuestionCardShell>
                <DragHandle />
                <div>
                    <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                            <QuestionId id="Q3" />
                            <TypeBadge label="Checkbox" />
                        </div>
                        <ActionsMenu />
                    </div>
                    <p className="text-sm text-foreground mt-1">Which of the following apply to you?</p>
                    <div className="mt-3 space-y-0.5">
                        <ChoiceRow label="I use this product daily" type="checkbox" />
                        <ChoiceRow label="I have recommended it to others" type="checkbox" />
                        <ChoiceRow label="I would pay more for premium features" type="checkbox" />
                    </div>
                </div>
            </QuestionCardShell>
        </BlockCard>
}`,...(A=(T=x.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var M,H,L;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  // eslint-disable-next-line storybook/no-redundant-story-name
  name: 'Selected',
  render: () => <BlockCard title="Customer Satisfaction" blockId="B1" questionCount={2} isSelected>
            <QuestionCardShell>
                <DragHandle />
                <div>
                    <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                            <QuestionId id="Q1" />
                            <TypeBadge label="Multiple Choice" />
                        </div>
                        <ActionsMenu />
                    </div>
                    <p className="text-sm text-foreground mt-1">How satisfied are you with our service?</p>
                    <div className="mt-3 space-y-0.5">
                        <ChoiceRow label="Very satisfied" />
                        <ChoiceRow label="Satisfied" />
                        <ChoiceRow label="Neutral" />
                        <ChoiceRow label="Dissatisfied" />
                    </div>
                </div>
            </QuestionCardShell>
            <QuestionCardShell>
                <DragHandle />
                <div>
                    <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                            <QuestionId id="Q2" />
                            <TypeBadge label="Text Entry" />
                        </div>
                        <ActionsMenu />
                    </div>
                    <p className="text-sm text-foreground mt-1">Please describe your experience in detail.</p>
                    <div className="mt-3 rounded border border-border-ui bg-muted/30 px-3 py-2 text-sm text-muted-foreground italic">
                        Respondent types a free-text answer here...
                    </div>
                </div>
            </QuestionCardShell>
        </BlockCard>
}`,...(L=(H=u.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var q,F,W;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  // eslint-disable-next-line storybook/no-redundant-story-name
  name: 'Hovered',
  render: () => <BlockCard title="Customer Satisfaction" blockId="B1" questionCount={2} isHovered>
            <QuestionCardShell>
                <DragHandle />
                <div>
                    <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                            <QuestionId id="Q1" />
                            <TypeBadge label="Multiple Choice" />
                        </div>
                        <ActionsMenu />
                    </div>
                    <p className="text-sm text-foreground mt-1">How satisfied are you with our service?</p>
                    <div className="mt-3 space-y-0.5">
                        <ChoiceRow label="Very satisfied" />
                        <ChoiceRow label="Satisfied" />
                    </div>
                </div>
            </QuestionCardShell>
            <QuestionCardShell>
                <DragHandle />
                <div>
                    <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                            <QuestionId id="Q2" />
                            <TypeBadge label="Text Entry" />
                        </div>
                        <ActionsMenu />
                    </div>
                    <p className="text-sm text-foreground mt-1">Please describe your experience in detail.</p>
                    <div className="mt-3 rounded border border-border-ui bg-muted/30 px-3 py-2 text-sm text-muted-foreground italic">
                        Respondent types a free-text answer here...
                    </div>
                </div>
            </QuestionCardShell>
        </BlockCard>
}`,...(W=(F=p.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};var V,P,O;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:`{
  // eslint-disable-next-line storybook/no-redundant-story-name
  name: 'Collapsed',
  render: () => <BlockCard title="Demographics" blockId="B2" questionCount={4} isCollapsed>
            {/* Children hidden when collapsed */}
        </BlockCard>
}`,...(O=(P=h.parameters)==null?void 0:P.docs)==null?void 0:O.source}}};var _,U,z;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Outgoing Branching Logic — Default',
  render: () => <BlockCard title="Customer Satisfaction" blockId="B1" questionCount={2}>
            <QuestionCardShell>
                <DragHandle />
                <div>
                    <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                            <QuestionId id="Q1" />
                            <TypeBadge label="Multiple Choice" />
                        </div>
                        <ActionsMenu />
                    </div>
                    <p className="text-sm text-foreground mt-1">How satisfied are you with our service?</p>
                    <div className="mt-3 space-y-0.5">
                        <ChoiceRow label="Very satisfied" />
                        <ChoiceRow label="Satisfied" />
                        <ChoiceRow label="Neutral" />
                        <ChoiceRow label="Dissatisfied" />
                    </div>
                </div>
            </QuestionCardShell>
            <QuestionCardShell>
                <DragHandle />
                <div>
                    <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                            <QuestionId id="Q2" />
                            <TypeBadge label="Text Entry" />
                        </div>
                        <ActionsMenu />
                    </div>
                    <p className="text-sm text-foreground mt-1">Any additional comments?</p>
                    <div className="mt-3 rounded border border-border-ui bg-muted/30 px-3 py-2 text-sm text-muted-foreground italic">
                        Respondent types a free-text answer here...
                    </div>
                </div>
            </QuestionCardShell>
            {/* Alert AFTER all questions — this block branches to another */}
            <FlowLogicAlert message="If Q1 = 'Dissatisfied' → jump to B3 (Follow-up Questions)" />
        </BlockCard>
}`,...(z=(U=b.parameters)==null?void 0:U.docs)==null?void 0:z.source}}};var Z,G,J;f.parameters={...f.parameters,docs:{...(Z=f.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: 'Outgoing Branching Logic — Error',
  render: () => <BlockCard title="Customer Satisfaction" blockId="B1" questionCount={2}>
            <QuestionCardShell>
                <DragHandle />
                <div>
                    <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                            <QuestionId id="Q1" />
                            <TypeBadge label="Multiple Choice" />
                        </div>
                        <ActionsMenu />
                    </div>
                    <p className="text-sm text-foreground mt-1">How satisfied are you with our service?</p>
                    <div className="mt-3 space-y-0.5">
                        <ChoiceRow label="Very satisfied" />
                        <ChoiceRow label="Satisfied" />
                        <ChoiceRow label="Neutral" />
                        <ChoiceRow label="Dissatisfied" />
                    </div>
                </div>
            </QuestionCardShell>
            <QuestionCardShell>
                <DragHandle />
                <div>
                    <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                            <QuestionId id="Q2" />
                            <TypeBadge label="Text Entry" />
                        </div>
                        <ActionsMenu />
                    </div>
                    <p className="text-sm text-foreground mt-1">Any additional comments?</p>
                    <div className="mt-3 rounded border border-border-ui bg-muted/30 px-3 py-2 text-sm text-muted-foreground italic">
                        Respondent types a free-text answer here...
                    </div>
                </div>
            </QuestionCardShell>
            {/* Error alert AFTER all questions — outgoing branch target was deleted */}
            <FlowLogicErrorAlert message="Branch target 'B3 – Follow-up' was deleted. Update or remove this rule." />
        </BlockCard>
}`,...(J=(G=f.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,X,Y;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: 'Incoming Branching Logic — Default',
  render: () => <BlockCard title="Follow-up Questions" blockId="B3" questionCount={2}>
            {/* Alert BEFORE all questions — respondents arrive here via branching from B1 */}
            <FlowLogicAlert message="Reached from B1 — shown only when Q1 = 'Dissatisfied'" />
            <QuestionCardShell>
                <DragHandle />
                <div>
                    <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                            <QuestionId id="Q5" />
                            <TypeBadge label="Multiple Choice" />
                        </div>
                        <ActionsMenu />
                    </div>
                    <p className="text-sm text-foreground mt-1">What could we have done better?</p>
                    <div className="mt-3 space-y-0.5">
                        <ChoiceRow label="Faster response time" />
                        <ChoiceRow label="Better communication" />
                        <ChoiceRow label="Lower prices" />
                    </div>
                </div>
            </QuestionCardShell>
            <QuestionCardShell>
                <DragHandle />
                <div>
                    <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                            <QuestionId id="Q6" />
                            <TypeBadge label="Text Entry" />
                        </div>
                        <ActionsMenu />
                    </div>
                    <p className="text-sm text-foreground mt-1">Please describe what went wrong.</p>
                    <div className="mt-3 rounded border border-border-ui bg-muted/30 px-3 py-2 text-sm text-muted-foreground italic">
                        Respondent types a free-text answer here...
                    </div>
                </div>
            </QuestionCardShell>
        </BlockCard>
}`,...(Y=(X=g.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var $,ee,se;j.parameters={...j.parameters,docs:{...($=j.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'Incoming Branching Logic — Error',
  render: () => <BlockCard title="Follow-up Questions" blockId="B3" questionCount={2}>
            {/* Error alert BEFORE all questions — the originating rule is broken */}
            <FlowLogicErrorAlert message="Source rule in B1 references a deleted choice. This block may never be reached." />
            <QuestionCardShell>
                <DragHandle />
                <div>
                    <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                            <QuestionId id="Q5" />
                            <TypeBadge label="Multiple Choice" />
                        </div>
                        <ActionsMenu />
                    </div>
                    <p className="text-sm text-foreground mt-1">What could we have done better?</p>
                    <div className="mt-3 space-y-0.5">
                        <ChoiceRow label="Faster response time" />
                        <ChoiceRow label="Better communication" />
                        <ChoiceRow label="Lower prices" />
                    </div>
                </div>
            </QuestionCardShell>
            <QuestionCardShell>
                <DragHandle />
                <div>
                    <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                            <QuestionId id="Q6" />
                            <TypeBadge label="Text Entry" />
                        </div>
                        <ActionsMenu />
                    </div>
                    <p className="text-sm text-foreground mt-1">Please describe what went wrong.</p>
                    <div className="mt-3 rounded border border-border-ui bg-muted/30 px-3 py-2 text-sm text-muted-foreground italic">
                        Respondent types a free-text answer here...
                    </div>
                </div>
            </QuestionCardShell>
        </BlockCard>
}`,...(se=(ee=j.parameters)==null?void 0:ee.docs)==null?void 0:se.source}}};var te,ie,re;v.parameters={...v.parameters,docs:{...(te=v.parameters)==null?void 0:te.docs,source:{originalSource:`{
  name: 'Question With Logic — Default',
  render: () => <BlockCard title="Customer Satisfaction" blockId="B1" questionCount={2}>
            <QuestionCardShell isSelected>
                <DragHandle />
                <div>
                    <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                            <QuestionId id="Q1" />
                            <TypeBadge label="Multiple Choice" />
                        </div>
                        <ActionsMenu />
                    </div>
                    <p className="text-sm text-foreground mt-1">How satisfied are you with our service?</p>
                    <div className="mt-3 space-y-0.5">
                        <ChoiceRow label="Very satisfied" />
                        <ChoiceRow label="Satisfied" />
                        <ChoiceRow label="Neutral" />
                        <ChoiceRow label="Dissatisfied" />
                    </div>
                    <LogicAlert message="Skip to Q3 if respondent selects 'Dissatisfied'" />
                </div>
            </QuestionCardShell>
            <QuestionCardShell>
                <DragHandle />
                <div>
                    <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                            <QuestionId id="Q2" />
                            <TypeBadge label="Text Entry" />
                        </div>
                        <ActionsMenu />
                    </div>
                    <p className="text-sm text-foreground mt-1">What did we do well?</p>
                    <div className="mt-3 rounded border border-border-ui bg-muted/30 px-3 py-2 text-sm text-muted-foreground italic">
                        Respondent types a free-text answer here...
                    </div>
                </div>
            </QuestionCardShell>
        </BlockCard>
}`,...(re=(ie=v.parameters)==null?void 0:ie.docs)==null?void 0:re.source}}};var ae,de,le;y.parameters={...y.parameters,docs:{...(ae=y.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  name: 'Question With Logic — Error',
  render: () => <BlockCard title="Customer Satisfaction" blockId="B1" questionCount={2}>
            <QuestionCardShell isSelected hasError>
                <DragHandle />
                <div>
                    <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                            <QuestionId id="Q1" />
                            <TypeBadge label="Multiple Choice" />
                        </div>
                        <ActionsMenu />
                    </div>
                    <p className="text-sm text-foreground mt-1">How satisfied are you with our service?</p>
                    <div className="mt-3 space-y-0.5">
                        <ChoiceRow label="Very satisfied" />
                        <ChoiceRow label="Satisfied" />
                        <ChoiceRow label="Neutral" />
                        <ChoiceRow label="Dissatisfied" />
                    </div>
                    <LogicErrorAlert message="Skip logic references Q4 which no longer exists. Update or remove this rule." />
                </div>
            </QuestionCardShell>
            <QuestionCardShell>
                <DragHandle />
                <div>
                    <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                            <QuestionId id="Q2" />
                            <TypeBadge label="Text Entry" />
                        </div>
                        <ActionsMenu />
                    </div>
                    <p className="text-sm text-foreground mt-1">Please describe your experience in detail.</p>
                    <div className="mt-3 rounded border border-border-ui bg-muted/30 px-3 py-2 text-sm text-muted-foreground italic">
                        Respondent types a free-text answer here...
                    </div>
                </div>
            </QuestionCardShell>
        </BlockCard>
}`,...(le=(de=y.parameters)==null?void 0:de.docs)==null?void 0:le.source}}};var oe,ne,ce;N.parameters={...N.parameters,docs:{...(oe=N.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  // eslint-disable-next-line storybook/no-redundant-story-name
  name: 'Dragging',
  render: () => <BlockCard title="Customer Satisfaction" blockId="B1" questionCount={2} isDragging>
            <QuestionCardShell>
                <DragHandle />
                <div>
                    <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                            <QuestionId id="Q1" />
                            <TypeBadge label="Multiple Choice" />
                        </div>
                        <ActionsMenu />
                    </div>
                    <p className="text-sm text-foreground mt-1">How satisfied are you with our service?</p>
                    <div className="mt-3 space-y-0.5">
                        <ChoiceRow label="Very satisfied" />
                        <ChoiceRow label="Satisfied" />
                    </div>
                </div>
            </QuestionCardShell>
            <QuestionCardShell>
                <DragHandle />
                <div>
                    <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                            <QuestionId id="Q2" />
                            <TypeBadge label="Text Entry" />
                        </div>
                        <ActionsMenu />
                    </div>
                    <p className="text-sm text-foreground mt-1">Please describe your experience in detail.</p>
                    <div className="mt-3 rounded border border-border-ui bg-muted/30 px-3 py-2 text-sm text-muted-foreground italic">
                        Respondent types a free-text answer here...
                    </div>
                </div>
            </QuestionCardShell>
        </BlockCard>
}`,...(ce=(ne=N.parameters)==null?void 0:ne.docs)==null?void 0:ce.source}}};var me,xe,ue;w.parameters={...w.parameters,docs:{...(me=w.parameters)==null?void 0:me.docs,source:{originalSource:`{
  name: 'Empty (Drop Zone)',
  render: () => <BlockCard title="New Block" blockId="B4" questionCount={0}>
            <div className="flex flex-col items-center justify-center py-8 border-2 border-dashed border-border-ui rounded-lg text-muted-foreground gap-2">
                <span className="material-symbols-rounded text-2xl">add_circle</span>
                <span className="text-sm">Drag a question here or click to add</span>
            </div>
        </BlockCard>
}`,...(ue=(xe=w.parameters)==null?void 0:xe.docs)==null?void 0:ue.source}}};var pe,he,be;C.parameters={...C.parameters,docs:{...(pe=C.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  name: 'Multiple Blocks (Canvas Overview)',
  render: () => <div className="space-y-4">
            <BlockCard title="Introduction" blockId="B1" questionCount={1}>
                <QuestionCardShell>
                    <DragHandle />
                    <div>
                        <div className="flex items-center justify-between mb-1">
                            <div className="flex items-center gap-2">
                                <QuestionId id="Q1" />
                                <TypeBadge label="Description" />
                            </div>
                            <ActionsMenu />
                        </div>
                        <div className="mt-1 text-sm text-foreground leading-relaxed">
                            Welcome! This survey will take approximately 3 minutes to complete.
                        </div>
                    </div>
                </QuestionCardShell>
            </BlockCard>

            <BlockCard title="Customer Satisfaction" blockId="B2" questionCount={3} isSelected>
                <QuestionCardShell isSelected>
                    <DragHandle />
                    <div>
                        <div className="flex items-center justify-between mb-1">
                            <div className="flex items-center gap-2">
                                <QuestionId id="Q2" />
                                <TypeBadge label="Multiple Choice" />
                            </div>
                            <ActionsMenu />
                        </div>
                        <p className="text-sm text-foreground mt-1">How satisfied are you with our service?</p>
                        <div className="mt-3 space-y-0.5">
                            <ChoiceRow label="Very satisfied" />
                            <ChoiceRow label="Satisfied" />
                            <ChoiceRow label="Neutral" />
                            <ChoiceRow label="Dissatisfied" />
                        </div>
                        <LogicAlert message="Skip to Q4 if respondent selects 'Very satisfied' or 'Satisfied'" />
                    </div>
                </QuestionCardShell>
                <QuestionCardShell>
                    <DragHandle />
                    <div>
                        <div className="flex items-center justify-between mb-1">
                            <div className="flex items-center gap-2">
                                <QuestionId id="Q3" />
                                <TypeBadge label="Text Entry" />
                            </div>
                            <ActionsMenu />
                        </div>
                        <p className="text-sm text-foreground mt-1">What could we have done better?</p>
                        <div className="mt-3 rounded border border-border-ui bg-muted/30 px-3 py-2 text-sm text-muted-foreground italic">
                            Respondent types a free-text answer here...
                        </div>
                    </div>
                </QuestionCardShell>
                <QuestionCardShell>
                    <DragHandle />
                    <div>
                        <div className="flex items-center justify-between mb-1">
                            <div className="flex items-center gap-2">
                                <QuestionId id="Q4" />
                                <TypeBadge label="Text Entry" />
                            </div>
                            <ActionsMenu />
                        </div>
                        <p className="text-sm text-foreground mt-1">Any additional feedback?</p>
                        <div className="mt-3 rounded border border-border-ui bg-muted/30 px-3 py-2 text-sm text-muted-foreground italic">
                            Respondent types a free-text answer here...
                        </div>
                    </div>
                </QuestionCardShell>
                {/* Outgoing branch — AFTER all questions */}
                <FlowLogicAlert message="If Q2 = 'Dissatisfied' → jump to B3 (Follow-up Questions)" />
            </BlockCard>

            <BlockCard title="Demographics" blockId="B3" questionCount={3} isCollapsed>
                {/* Collapsed — body not rendered */}
            </BlockCard>
        </div>
}`,...(be=(he=C.parameters)==null?void 0:he.docs)==null?void 0:be.source}}};const Te=["Default","Selected","Hovered","Collapsed","OutgoingBranchingLogic","OutgoingBranchingLogicError","IncomingBranchingLogic","IncomingBranchingLogicError","QuestionWithLogic","QuestionWithLogicError","Dragging","Empty","MultipleBlocks"];export{h as Collapsed,x as Default,N as Dragging,w as Empty,p as Hovered,g as IncomingBranchingLogic,j as IncomingBranchingLogicError,C as MultipleBlocks,b as OutgoingBranchingLogic,f as OutgoingBranchingLogicError,v as QuestionWithLogic,y as QuestionWithLogicError,u as Selected,Te as __namedExportsOrder,Ee as default};
