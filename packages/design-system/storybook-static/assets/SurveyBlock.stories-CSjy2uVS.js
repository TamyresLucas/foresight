import{j as e}from"./jsx-runtime-BYYWji4R.js";import{R as _e}from"./index-ClcD9ViR.js";import{A as c,b as m,a as H}from"./alert-aj_NsfeP.js";import{B as Fe}from"./badge-CDZW3nus.js";import{c as u}from"./utils-CDN07tui.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-C2vczdB5.js";const t=()=>e.jsx("div",{className:"flex items-center justify-center w-5 cursor-grab opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground",children:e.jsx("span",{className:"material-symbols-rounded text-base select-none",children:"drag_indicator"})}),i=({id:d})=>e.jsx("span",{className:"text-xs font-mono font-semibold text-muted-foreground uppercase tracking-wide",children:d}),r=({label:d})=>e.jsx(Fe,{variant:"outline",children:d}),l=()=>e.jsx("button",{className:"opacity-0 group-hover:opacity-100 transition-opacity p-1 rounded hover:bg-muted text-muted-foreground",children:e.jsx("span",{className:"material-symbols-rounded text-base leading-none",children:"more_horiz"})}),a=({children:d,isSelected:n,hasError:x,isDashed:p})=>e.jsx("div",{className:u("p-4 rounded-lg border transition-all group relative grid items-start gap-x-4 bg-card grid-cols-[auto_1fr]",n&&x&&"border-destructive shadow-md",n&&!x&&"border-primary shadow-md",!n&&p&&"border-dashed border-primary/50",!n&&!p&&"border-border-ui hover:shadow-md"),children:d}),s=({label:d,type:n="radio"})=>e.jsxs("div",{className:"flex items-center gap-2 py-1",children:[e.jsx("div",{className:u("w-4 h-4 border border-foreground flex-shrink-0",n==="radio"?"rounded-full":"rounded-sm")}),e.jsx("span",{className:"text-sm text-foreground",children:d})]}),Le=({message:d})=>e.jsxs(c,{className:"mt-3 py-2.5",children:[e.jsx("span",{className:"material-symbols-rounded text-base",children:"account_tree"}),e.jsx(m,{className:"text-xs",children:d})]}),A=({message:d})=>e.jsxs(c,{variant:"destructive",className:"mt-3 py-2.5",children:[e.jsx("span",{className:"material-symbols-rounded text-base",children:"error"}),e.jsx(H,{className:"text-xs font-semibold",children:"Logic Error"}),e.jsx(m,{className:"text-xs",children:d})]}),Pe=({branchName:d,sourceQid:n})=>e.jsxs(c,{className:"py-2",children:[e.jsx("span",{className:"material-symbols-rounded text-sm leading-none",children:"arrow_downward"}),e.jsxs(m,{className:"text-xs",children:["Respondents arrive here via ",e.jsx("strong",{children:d})," branching from"," ",e.jsx("span",{className:"font-mono font-semibold",children:n})]})]}),Ue=({branchName:d,sourceQid:n})=>e.jsxs(c,{variant:"destructive",className:"py-2",children:[e.jsx("span",{className:"material-symbols-rounded text-sm leading-none",children:"error"}),e.jsx(H,{className:"text-xs font-semibold",children:"Logic Error"}),e.jsxs(m,{className:"text-xs",children:["Branch ",e.jsx("strong",{children:d})," from ",e.jsx("span",{className:"font-mono font-semibold",children:n})," references a deleted choice. This block may never be reached."]})]}),q=({destination:d})=>e.jsxs(c,{className:"py-2",children:[e.jsx("span",{className:"material-symbols-rounded text-sm leading-none",children:"account_tree"}),e.jsxs(m,{className:"text-xs",children:["Survey flow continues to ",e.jsx("strong",{children:d})]})]}),Ye=({destination:d})=>e.jsxs(c,{variant:"destructive",className:"py-2",children:[e.jsx("span",{className:"material-symbols-rounded text-sm leading-none",children:"error"}),e.jsx(H,{className:"text-xs font-semibold",children:"Logic Error"}),e.jsxs(m,{className:"text-xs",children:["Branch target ",e.jsx("strong",{children:d})," was deleted. Update or remove this rule."]})]}),o=({children:d,title:n="Block 1",blockId:x="B1",questionCount:p,isSelected:T,isHovered:F,isCollapsed:E,isDragging:We,hasDisplayLogic:L,isSurveySection:Oe,sectionName:Ve,printMode:M})=>{const P=p??_e.Children.count(d);return e.jsxs("div",{className:u("border rounded-lg transition-all",M?"bg-background":"bg-card",We&&"opacity-50",T&&"border-2 border-primary shadow-md",!T&&F&&"border-primary/50 shadow-sm",!T&&!F&&"border-border-ui",L&&"border-dashed"),children:[e.jsxs("div",{className:u("flex items-center justify-between px-4 py-3",!E&&"border-b border-border-ui"),children:[e.jsxs("div",{className:"flex items-center gap-2 cursor-grab min-w-0",children:[!M&&e.jsx("button",{className:"p-0.5 rounded hover:bg-muted text-muted-foreground flex-shrink-0",children:e.jsx("span",{className:u("material-symbols-rounded text-base transition-transform",E&&"-rotate-90"),children:"expand_more"})}),e.jsx("span",{className:"font-semibold text-sm text-foreground flex-shrink-0",children:x}),e.jsx("span",{className:"font-semibold text-sm text-foreground truncate",children:n}),e.jsxs("span",{className:"text-xs text-muted-foreground font-normal flex-shrink-0",children:["(",P," question",P!==1?"s":"",")"]}),L&&e.jsx(Fe,{variant:"secondary",className:"flex-shrink-0",children:"Display Logic"})]}),!M&&e.jsx("button",{className:"opacity-0 hover:opacity-100 p-1 rounded hover:bg-muted text-muted-foreground flex-shrink-0",children:e.jsx("span",{className:"material-symbols-rounded text-base leading-none",children:"more_horiz"})})]}),!E&&e.jsxs("div",{className:"p-4 space-y-3",children:[Oe&&e.jsx("div",{className:"pb-4 border-b-2 border-primary",children:e.jsx("h3",{className:"text-xl font-semibold text-foreground",children:Ve||n})}),d]})]})},es={title:"Survey Builder/Survey Canvas/SurveyBlock",parameters:{layout:"padded",docs:{description:{component:`
**SurveyBlock** is the top-level container for a group of questions in the Survey Canvas. It is a fully controlled component — it owns no state and receives all data and handlers as props.

### Anatomy

- **Header**: collapse toggle, block ID (e.g. \`B1\`), editable block title, question count, actions menu (⋯)
- **Body**: ordered list of QuestionCard items; logic alerts at the edges; an optional section banner when \`isSurveySection\` is true
- **Logic alerts** appear at the edges of the body — **never** between questions

### States

| State | Border | Shadow | Notes |
|-------|--------|--------|-------|
| Default | \`border-border-ui\` (solid) | none | — |
| Hovered | \`border-primary/50\` (solid) | sm | Controlled by \`hoveredBlockId\` prop |
| Selected | \`border-2 border-primary\` (solid) | md | Controlled by \`selectedBlock\` prop |
| Dragging | default border | — | \`opacity-50\` via \`isBlockDragging\` prop |
| Display Logic | \`border-border-ui\` (**dashed**) | none | Block itself has \`displayLogic\` conditions |
| Collapsed | header only, body hidden | — | Via \`isCollapsed\` prop |
| Empty | body shows a dashed drop zone | — | When \`block.questions\` is empty |
| Print Mode | lighter bg, no drag / action UI | — | Via \`printMode\` prop |

### Branching logic alerts (block-level)

Logic alerts appear at the **edges** of the body.

| Position | Type | When |
|----------|------|------|
| **First** (before questions) | Incoming | This block is the destination of a branch from another block |
| **Last** (after questions) | Outgoing (SurveyFlowDisplay) | This block routes to another block, end of survey, or a custom \`continueTo\` target |

Both support a **default** (valid rule) and an **error** (broken rule) variant.

### Survey Section mode

When \`block.isSurveySection\` is true, a bold section title is rendered at the top of the body, separated from the questions by a \`border-primary\` divider. This is used to group related blocks under a named section.
                `}}},tags:["autodocs"],decorators:[d=>e.jsx("div",{className:"max-w-2xl space-y-4 py-4",children:e.jsx(d,{})})]},h={name:"Default",render:()=>e.jsxs(o,{title:"Customer Satisfaction",blockId:"B1",questionCount:3,children:[e.jsxs(a,{children:[e.jsx(t,{}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(i,{id:"Q1"}),e.jsx(r,{label:"Multiple Choice"})]}),e.jsx(l,{})]}),e.jsx("p",{className:"text-sm text-foreground mt-1",children:"How satisfied are you with our service?"}),e.jsxs("div",{className:"mt-3 space-y-0.5",children:[e.jsx(s,{label:"Very satisfied"}),e.jsx(s,{label:"Satisfied"}),e.jsx(s,{label:"Neutral"}),e.jsx(s,{label:"Dissatisfied"})]})]})]}),e.jsxs(a,{children:[e.jsx(t,{}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(i,{id:"Q2"}),e.jsx(r,{label:"Text Entry"})]}),e.jsx(l,{})]}),e.jsx("p",{className:"text-sm text-foreground mt-1",children:"Please describe your experience in detail."}),e.jsx("div",{className:"mt-3 rounded border border-border-ui bg-muted/30 px-3 py-2 text-sm text-muted-foreground italic",children:"Respondent types a free-text answer here..."})]})]}),e.jsxs(a,{children:[e.jsx(t,{}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(i,{id:"Q3"}),e.jsx(r,{label:"Checkbox"})]}),e.jsx(l,{})]}),e.jsx("p",{className:"text-sm text-foreground mt-1",children:"Which of the following apply to you?"}),e.jsxs("div",{className:"mt-3 space-y-0.5",children:[e.jsx(s,{label:"I use this product daily",type:"checkbox"}),e.jsx(s,{label:"I have recommended it to others",type:"checkbox"}),e.jsx(s,{label:"I would pay more for premium features",type:"checkbox"})]})]})]})]})},b={name:"Selected",render:()=>e.jsxs(o,{title:"Customer Satisfaction",blockId:"B1",questionCount:2,isSelected:!0,children:[e.jsxs(a,{children:[e.jsx(t,{}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(i,{id:"Q1"}),e.jsx(r,{label:"Multiple Choice"})]}),e.jsx(l,{})]}),e.jsx("p",{className:"text-sm text-foreground mt-1",children:"How satisfied are you with our service?"}),e.jsxs("div",{className:"mt-3 space-y-0.5",children:[e.jsx(s,{label:"Very satisfied"}),e.jsx(s,{label:"Satisfied"}),e.jsx(s,{label:"Neutral"}),e.jsx(s,{label:"Dissatisfied"})]})]})]}),e.jsxs(a,{children:[e.jsx(t,{}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(i,{id:"Q2"}),e.jsx(r,{label:"Text Entry"})]}),e.jsx(l,{})]}),e.jsx("p",{className:"text-sm text-foreground mt-1",children:"Please describe your experience in detail."}),e.jsx("div",{className:"mt-3 rounded border border-border-ui bg-muted/30 px-3 py-2 text-sm text-muted-foreground italic",children:"Respondent types a free-text answer here..."})]})]})]})},v={name:"Hovered",render:()=>e.jsxs(o,{title:"Customer Satisfaction",blockId:"B1",questionCount:2,isHovered:!0,children:[e.jsxs(a,{children:[e.jsx(t,{}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(i,{id:"Q1"}),e.jsx(r,{label:"Multiple Choice"})]}),e.jsx(l,{})]}),e.jsx("p",{className:"text-sm text-foreground mt-1",children:"How satisfied are you with our service?"}),e.jsxs("div",{className:"mt-3 space-y-0.5",children:[e.jsx(s,{label:"Very satisfied"}),e.jsx(s,{label:"Satisfied"})]})]})]}),e.jsxs(a,{children:[e.jsx(t,{}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(i,{id:"Q2"}),e.jsx(r,{label:"Text Entry"})]}),e.jsx(l,{})]}),e.jsx("p",{className:"text-sm text-foreground mt-1",children:"Please describe your experience in detail."}),e.jsx("div",{className:"mt-3 rounded border border-border-ui bg-muted/30 px-3 py-2 text-sm text-muted-foreground italic",children:"Respondent types a free-text answer here..."})]})]})]})},j={name:"Collapsed",render:()=>e.jsx(o,{title:"Demographics",blockId:"B2",questionCount:4,isCollapsed:!0})},f={name:"Dragging",render:()=>e.jsxs(o,{title:"Customer Satisfaction",blockId:"B1",questionCount:2,isDragging:!0,children:[e.jsxs(a,{children:[e.jsx(t,{}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(i,{id:"Q1"}),e.jsx(r,{label:"Multiple Choice"})]}),e.jsx(l,{})]}),e.jsx("p",{className:"text-sm text-foreground mt-1",children:"How satisfied are you with our service?"}),e.jsxs("div",{className:"mt-3 space-y-0.5",children:[e.jsx(s,{label:"Very satisfied"}),e.jsx(s,{label:"Satisfied"})]})]})]}),e.jsxs(a,{children:[e.jsx(t,{}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(i,{id:"Q2"}),e.jsx(r,{label:"Text Entry"})]}),e.jsx(l,{})]}),e.jsx("p",{className:"text-sm text-foreground mt-1",children:"Please describe your experience in detail."}),e.jsx("div",{className:"mt-3 rounded border border-border-ui bg-muted/30 px-3 py-2 text-sm text-muted-foreground italic",children:"Respondent types a free-text answer here..."})]})]})]})},g={name:"Display Logic (dashed border)",render:()=>e.jsxs(o,{title:"Follow-up Questions",blockId:"B3",questionCount:2,hasDisplayLogic:!0,children:[e.jsxs(a,{children:[e.jsx(t,{}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(i,{id:"Q5"}),e.jsx(r,{label:"Multiple Choice"})]}),e.jsx(l,{})]}),e.jsx("p",{className:"text-sm text-foreground mt-1",children:"What could we have done better?"}),e.jsxs("div",{className:"mt-3 space-y-0.5",children:[e.jsx(s,{label:"Faster response time"}),e.jsx(s,{label:"Better communication"}),e.jsx(s,{label:"Lower prices"})]})]})]}),e.jsxs(a,{children:[e.jsx(t,{}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(i,{id:"Q6"}),e.jsx(r,{label:"Text Entry"})]}),e.jsx(l,{})]}),e.jsx("p",{className:"text-sm text-foreground mt-1",children:"Please describe what went wrong."}),e.jsx("div",{className:"mt-3 rounded border border-border-ui bg-muted/30 px-3 py-2 text-sm text-muted-foreground italic",children:"Respondent types a free-text answer here..."})]})]})]})},y={name:"Empty (Drop Zone)",render:()=>e.jsx(o,{title:"New Block",blockId:"B4",questionCount:0,children:e.jsxs("div",{className:"flex flex-col items-center justify-center py-8 border-2 border-dashed border-border-ui rounded-lg text-muted-foreground gap-2",children:[e.jsx("span",{className:"material-symbols-rounded text-2xl",children:"add_circle"}),e.jsx("span",{className:"text-sm",children:"Drag a question here or click to add"})]})})},N={name:"Incoming Branching — Default",render:()=>e.jsxs(o,{title:"Follow-up Questions",blockId:"B3",questionCount:2,children:[e.jsx(Pe,{branchName:"Dissatisfied path",sourceQid:"Q1"}),e.jsxs(a,{children:[e.jsx(t,{}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(i,{id:"Q5"}),e.jsx(r,{label:"Multiple Choice"})]}),e.jsx(l,{})]}),e.jsx("p",{className:"text-sm text-foreground mt-1",children:"What could we have done better?"}),e.jsxs("div",{className:"mt-3 space-y-0.5",children:[e.jsx(s,{label:"Faster response time"}),e.jsx(s,{label:"Better communication"}),e.jsx(s,{label:"Lower prices"})]})]})]}),e.jsxs(a,{children:[e.jsx(t,{}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(i,{id:"Q6"}),e.jsx(r,{label:"Text Entry"})]}),e.jsx(l,{})]}),e.jsx("p",{className:"text-sm text-foreground mt-1",children:"Please describe what went wrong."}),e.jsx("div",{className:"mt-3 rounded border border-border-ui bg-muted/30 px-3 py-2 text-sm text-muted-foreground italic",children:"Respondent types a free-text answer here..."})]})]})]})},w={name:"Incoming Branching — Error",render:()=>e.jsxs(o,{title:"Follow-up Questions",blockId:"B3",questionCount:2,children:[e.jsx(Ue,{branchName:"Dissatisfied path",sourceQid:"Q1"}),e.jsxs(a,{children:[e.jsx(t,{}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(i,{id:"Q5"}),e.jsx(r,{label:"Multiple Choice"})]}),e.jsx(l,{})]}),e.jsx("p",{className:"text-sm text-foreground mt-1",children:"What could we have done better?"}),e.jsxs("div",{className:"mt-3 space-y-0.5",children:[e.jsx(s,{label:"Faster response time"}),e.jsx(s,{label:"Better communication"}),e.jsx(s,{label:"Lower prices"})]})]})]}),e.jsxs(a,{children:[e.jsx(t,{}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(i,{id:"Q6"}),e.jsx(r,{label:"Text Entry"})]}),e.jsx(l,{})]}),e.jsx("p",{className:"text-sm text-foreground mt-1",children:"Please describe what went wrong."}),e.jsx("div",{className:"mt-3 rounded border border-border-ui bg-muted/30 px-3 py-2 text-sm text-muted-foreground italic",children:"Respondent types a free-text answer here..."})]})]})]})},C={name:"Outgoing Flow — Default",render:()=>e.jsxs(o,{title:"Customer Satisfaction",blockId:"B1",questionCount:2,children:[e.jsxs(a,{children:[e.jsx(t,{}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(i,{id:"Q1"}),e.jsx(r,{label:"Multiple Choice"})]}),e.jsx(l,{})]}),e.jsx("p",{className:"text-sm text-foreground mt-1",children:"How satisfied are you with our service?"}),e.jsxs("div",{className:"mt-3 space-y-0.5",children:[e.jsx(s,{label:"Very satisfied"}),e.jsx(s,{label:"Satisfied"}),e.jsx(s,{label:"Neutral"}),e.jsx(s,{label:"Dissatisfied"})]})]})]}),e.jsxs(a,{children:[e.jsx(t,{}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(i,{id:"Q2"}),e.jsx(r,{label:"Text Entry"})]}),e.jsx(l,{})]}),e.jsx("p",{className:"text-sm text-foreground mt-1",children:"Any additional comments?"}),e.jsx("div",{className:"mt-3 rounded border border-border-ui bg-muted/30 px-3 py-2 text-sm text-muted-foreground italic",children:"Respondent types a free-text answer here..."})]})]}),e.jsx(q,{destination:"B3 – Follow-up Questions"})]})},Q={name:"Outgoing Flow — Error",render:()=>e.jsxs(o,{title:"Customer Satisfaction",blockId:"B1",questionCount:2,children:[e.jsxs(a,{children:[e.jsx(t,{}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(i,{id:"Q1"}),e.jsx(r,{label:"Multiple Choice"})]}),e.jsx(l,{})]}),e.jsx("p",{className:"text-sm text-foreground mt-1",children:"How satisfied are you with our service?"}),e.jsxs("div",{className:"mt-3 space-y-0.5",children:[e.jsx(s,{label:"Very satisfied"}),e.jsx(s,{label:"Satisfied"}),e.jsx(s,{label:"Neutral"}),e.jsx(s,{label:"Dissatisfied"})]})]})]}),e.jsxs(a,{children:[e.jsx(t,{}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(i,{id:"Q2"}),e.jsx(r,{label:"Text Entry"})]}),e.jsx(l,{})]}),e.jsx("p",{className:"text-sm text-foreground mt-1",children:"Any additional comments?"}),e.jsx("div",{className:"mt-3 rounded border border-border-ui bg-muted/30 px-3 py-2 text-sm text-muted-foreground italic",children:"Respondent types a free-text answer here..."})]})]}),e.jsx(Ye,{destination:"B3 – Follow-up Questions"})]})},S={name:"Incoming + Outgoing Flow",render:()=>e.jsxs(o,{title:"Neutral Feedback",blockId:"B2",questionCount:2,children:[e.jsx(Pe,{branchName:"Neutral path",sourceQid:"Q1"}),e.jsxs(a,{children:[e.jsx(t,{}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(i,{id:"Q3"}),e.jsx(r,{label:"Multiple Choice"})]}),e.jsx(l,{})]}),e.jsx("p",{className:"text-sm text-foreground mt-1",children:"What was the primary reason for your rating?"}),e.jsxs("div",{className:"mt-3 space-y-0.5",children:[e.jsx(s,{label:"Product quality"}),e.jsx(s,{label:"Customer support"}),e.jsx(s,{label:"Pricing"}),e.jsx(s,{label:"Delivery speed"})]})]})]}),e.jsxs(a,{children:[e.jsx(t,{}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(i,{id:"Q4"}),e.jsx(r,{label:"Text Entry"})]}),e.jsx(l,{})]}),e.jsx("p",{className:"text-sm text-foreground mt-1",children:"What would change your rating to Satisfied?"}),e.jsx("div",{className:"mt-3 rounded border border-border-ui bg-muted/30 px-3 py-2 text-sm text-muted-foreground italic",children:"Respondent types a free-text answer here..."})]})]}),e.jsx(q,{destination:"End of survey"})]})},B={name:"Question With Logic Error",render:()=>e.jsxs(o,{title:"Customer Satisfaction",blockId:"B1",questionCount:2,children:[e.jsxs(a,{isSelected:!0,hasError:!0,children:[e.jsx(t,{}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(i,{id:"Q1"}),e.jsx(r,{label:"Multiple Choice"})]}),e.jsx(l,{})]}),e.jsx("p",{className:"text-sm text-foreground mt-1",children:"How satisfied are you with our service?"}),e.jsxs("div",{className:"mt-3 space-y-0.5",children:[e.jsx(s,{label:"Very satisfied"}),e.jsx(s,{label:"Satisfied"}),e.jsx(s,{label:"Neutral"}),e.jsx(s,{label:"Dissatisfied"})]}),e.jsx(A,{message:"Skip logic references Q4 which no longer exists. Update or remove this rule."})]})]}),e.jsxs(a,{children:[e.jsx(t,{}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(i,{id:"Q2"}),e.jsx(r,{label:"Text Entry"})]}),e.jsx(l,{})]}),e.jsx("p",{className:"text-sm text-foreground mt-1",children:"Please describe your experience in detail."}),e.jsx("div",{className:"mt-3 rounded border border-border-ui bg-muted/30 px-3 py-2 text-sm text-muted-foreground italic",children:"Respondent types a free-text answer here..."})]})]})]})},k={name:"Multiple Logic Issues",render:()=>e.jsxs(o,{title:"Customer Satisfaction",blockId:"B1",questionCount:3,children:[e.jsxs(a,{isSelected:!0,hasError:!0,children:[e.jsx(t,{}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(i,{id:"Q1"}),e.jsx(r,{label:"Multiple Choice"})]}),e.jsx(l,{})]}),e.jsx("p",{className:"text-sm text-foreground mt-1",children:"How satisfied are you with our service?"}),e.jsxs("div",{className:"mt-3 space-y-0.5",children:[e.jsx(s,{label:"Very satisfied"}),e.jsx(s,{label:"Satisfied"}),e.jsx(s,{label:"Neutral"}),e.jsx(s,{label:"Dissatisfied"})]}),e.jsx(A,{message:"Skip logic references Q4 which no longer exists."})]})]}),e.jsxs(a,{children:[e.jsx(t,{}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(i,{id:"Q2"}),e.jsx(r,{label:"Text Entry"})]}),e.jsx(l,{})]}),e.jsx("p",{className:"text-sm text-foreground mt-1",children:"Please describe your experience in detail."}),e.jsx("div",{className:"mt-3 rounded border border-border-ui bg-muted/30 px-3 py-2 text-sm text-muted-foreground italic",children:"Respondent types a free-text answer here..."}),e.jsx(Le,{message:"Display only if Q1 = 'Dissatisfied' or 'Neutral'"})]})]}),e.jsxs(a,{hasError:!0,children:[e.jsx(t,{}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(i,{id:"Q3"}),e.jsx(r,{label:"Checkbox"})]}),e.jsx(l,{})]}),e.jsx("p",{className:"text-sm text-foreground mt-1",children:"Which of the following apply to you?"}),e.jsxs("div",{className:"mt-3 space-y-0.5",children:[e.jsx(s,{label:"I use this product daily",type:"checkbox"}),e.jsx(s,{label:"I have recommended it to others",type:"checkbox"})]}),e.jsx(A,{message:"Display logic references a deleted choice. This question will always be shown."})]})]})]})},I={name:"Survey Section Mode",render:()=>e.jsxs(o,{title:"About Your Experience",blockId:"B2",questionCount:2,isSurveySection:!0,sectionName:"Part 2 — Service Quality",children:[e.jsxs(a,{children:[e.jsx(t,{}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(i,{id:"Q4"}),e.jsx(r,{label:"Multiple Choice"})]}),e.jsx(l,{})]}),e.jsx("p",{className:"text-sm text-foreground mt-1",children:"How would you rate our support team?"}),e.jsxs("div",{className:"mt-3 space-y-0.5",children:[e.jsx(s,{label:"Excellent"}),e.jsx(s,{label:"Good"}),e.jsx(s,{label:"Fair"}),e.jsx(s,{label:"Poor"})]})]})]}),e.jsxs(a,{children:[e.jsx(t,{}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(i,{id:"Q5"}),e.jsx(r,{label:"Text Entry"})]}),e.jsx(l,{})]}),e.jsx("p",{className:"text-sm text-foreground mt-1",children:"What did our support team do particularly well?"}),e.jsx("div",{className:"mt-3 rounded border border-border-ui bg-muted/30 px-3 py-2 text-sm text-muted-foreground italic",children:"Respondent types a free-text answer here..."})]})]})]})},D={name:"Print Mode",render:()=>e.jsxs(o,{title:"Customer Satisfaction",blockId:"B1",questionCount:3,printMode:!0,children:[e.jsxs(a,{children:[e.jsx(t,{}),e.jsxs("div",{children:[e.jsx("div",{className:"flex items-center justify-between mb-1",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(i,{id:"Q1"}),e.jsx(r,{label:"Multiple Choice"})]})}),e.jsx("p",{className:"text-sm text-foreground mt-1",children:"How satisfied are you with our service?"}),e.jsxs("div",{className:"mt-3 space-y-0.5",children:[e.jsx(s,{label:"Very satisfied"}),e.jsx(s,{label:"Satisfied"}),e.jsx(s,{label:"Neutral"}),e.jsx(s,{label:"Dissatisfied"})]})]})]}),e.jsxs(a,{children:[e.jsx(t,{}),e.jsxs("div",{children:[e.jsx("div",{className:"flex items-center justify-between mb-1",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(i,{id:"Q2"}),e.jsx(r,{label:"Text Entry"})]})}),e.jsx("p",{className:"text-sm text-foreground mt-1",children:"Please describe your experience in detail."}),e.jsx("div",{className:"mt-3 rounded border border-border-ui bg-muted/30 px-3 py-2 text-sm text-muted-foreground italic",children:"Respondent types a free-text answer here..."})]})]}),e.jsxs(a,{children:[e.jsx(t,{}),e.jsxs("div",{children:[e.jsx("div",{className:"flex items-center justify-between mb-1",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(i,{id:"Q3"}),e.jsx(r,{label:"Description"})]})}),e.jsx("div",{className:"mt-1 text-sm text-foreground leading-relaxed",children:"Thank you for completing this section. Your feedback helps us improve."})]})]})]})},R={name:"Canvas Overview (Multiple Blocks)",render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(o,{title:"Introduction",blockId:"B1",questionCount:1,children:e.jsxs(a,{children:[e.jsx(t,{}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(i,{id:"Q1"}),e.jsx(r,{label:"Description"})]}),e.jsx(l,{})]}),e.jsx("div",{className:"mt-1 text-sm text-foreground leading-relaxed",children:"Welcome! This survey will take approximately 3 minutes. Your responses are anonymous."})]})]})}),e.jsxs(o,{title:"Customer Satisfaction",blockId:"B2",questionCount:2,isSelected:!0,children:[e.jsxs(a,{isSelected:!0,children:[e.jsx(t,{}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(i,{id:"Q2"}),e.jsx(r,{label:"Multiple Choice"})]}),e.jsx(l,{})]}),e.jsx("p",{className:"text-sm text-foreground mt-1",children:"How satisfied are you with our service?"}),e.jsxs("div",{className:"mt-3 space-y-0.5",children:[e.jsx(s,{label:"Very satisfied"}),e.jsx(s,{label:"Satisfied"}),e.jsx(s,{label:"Neutral"}),e.jsx(s,{label:"Dissatisfied"})]}),e.jsx(Le,{message:"If 'Dissatisfied' or 'Neutral' → branch to B3 (Follow-up)"})]})]}),e.jsxs(a,{children:[e.jsx(t,{}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(i,{id:"Q3"}),e.jsx(r,{label:"Text Entry"})]}),e.jsx(l,{})]}),e.jsx("p",{className:"text-sm text-foreground mt-1",children:"Any additional comments?"}),e.jsx("div",{className:"mt-3 rounded border border-border-ui bg-muted/30 px-3 py-2 text-sm text-muted-foreground italic",children:"Respondent types a free-text answer here..."})]})]}),e.jsx(q,{destination:"B3 – Follow-up Questions"})]}),e.jsx(o,{title:"Follow-up Questions",blockId:"B3",questionCount:3,isCollapsed:!0}),e.jsxs(o,{title:"Demographics",blockId:"B4",questionCount:2,hasDisplayLogic:!0,children:[e.jsxs(a,{children:[e.jsx(t,{}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(i,{id:"Q7"}),e.jsx(r,{label:"Multiple Choice"})]}),e.jsx(l,{})]}),e.jsx("p",{className:"text-sm text-foreground mt-1",children:"What is your age range?"}),e.jsxs("div",{className:"mt-3 space-y-0.5",children:[e.jsx(s,{label:"Under 25"}),e.jsx(s,{label:"25–44"}),e.jsx(s,{label:"45–64"}),e.jsx(s,{label:"65 or older"})]})]})]}),e.jsxs(a,{children:[e.jsx(t,{}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(i,{id:"Q8"}),e.jsx(r,{label:"Checkbox"})]}),e.jsx(l,{})]}),e.jsx("p",{className:"text-sm text-foreground mt-1",children:"How did you hear about us?"}),e.jsxs("div",{className:"mt-3 space-y-0.5",children:[e.jsx(s,{label:"Search engine",type:"checkbox"}),e.jsx(s,{label:"Social media",type:"checkbox"}),e.jsx(s,{label:"Word of mouth",type:"checkbox"})]})]})]})]})]})};var W,O,V;h.parameters={...h.parameters,docs:{...(W=h.parameters)==null?void 0:W.docs,source:{originalSource:`{
  // eslint-disable-next-line storybook/no-redundant-story-name
  name: 'Default',
  render: () => <SurveyBlock title="Customer Satisfaction" blockId="B1" questionCount={3}>
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
        </SurveyBlock>
}`,...(V=(O=h.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};var _,U,Y;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:`{
  // eslint-disable-next-line storybook/no-redundant-story-name
  name: 'Selected',
  render: () => <SurveyBlock title="Customer Satisfaction" blockId="B1" questionCount={2} isSelected>
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
        </SurveyBlock>
}`,...(Y=(U=b.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var z,G,Z;v.parameters={...v.parameters,docs:{...(z=v.parameters)==null?void 0:z.docs,source:{originalSource:`{
  // eslint-disable-next-line storybook/no-redundant-story-name
  name: 'Hovered',
  render: () => <SurveyBlock title="Customer Satisfaction" blockId="B1" questionCount={2} isHovered>
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
        </SurveyBlock>
}`,...(Z=(G=v.parameters)==null?void 0:G.docs)==null?void 0:Z.source}}};var J,K,X;j.parameters={...j.parameters,docs:{...(J=j.parameters)==null?void 0:J.docs,source:{originalSource:`{
  // eslint-disable-next-line storybook/no-redundant-story-name
  name: 'Collapsed',
  render: () => <SurveyBlock title="Demographics" blockId="B2" questionCount={4} isCollapsed>
            {/* Body is hidden when collapsed */}
        </SurveyBlock>
}`,...(X=(K=j.parameters)==null?void 0:K.docs)==null?void 0:X.source}}};var $,ee,se;f.parameters={...f.parameters,docs:{...($=f.parameters)==null?void 0:$.docs,source:{originalSource:`{
  // eslint-disable-next-line storybook/no-redundant-story-name
  name: 'Dragging',
  render: () => <SurveyBlock title="Customer Satisfaction" blockId="B1" questionCount={2} isDragging>
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
        </SurveyBlock>
}`,...(se=(ee=f.parameters)==null?void 0:ee.docs)==null?void 0:se.source}}};var te,ie,re;g.parameters={...g.parameters,docs:{...(te=g.parameters)==null?void 0:te.docs,source:{originalSource:`{
  name: 'Display Logic (dashed border)',
  render: () => <SurveyBlock title="Follow-up Questions" blockId="B3" questionCount={2} hasDisplayLogic>
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
        </SurveyBlock>
}`,...(re=(ie=g.parameters)==null?void 0:ie.docs)==null?void 0:re.source}}};var ae,le,de;y.parameters={...y.parameters,docs:{...(ae=y.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  name: 'Empty (Drop Zone)',
  render: () => <SurveyBlock title="New Block" blockId="B4" questionCount={0}>
            <div className="flex flex-col items-center justify-center py-8 border-2 border-dashed border-border-ui rounded-lg text-muted-foreground gap-2">
                <span className="material-symbols-rounded text-2xl">add_circle</span>
                <span className="text-sm">Drag a question here or click to add</span>
            </div>
        </SurveyBlock>
}`,...(de=(le=y.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var oe,ne,ce;N.parameters={...N.parameters,docs:{...(oe=N.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: 'Incoming Branching — Default',
  render: () => <SurveyBlock title="Follow-up Questions" blockId="B3" questionCount={2}>
            {/* Alert BEFORE questions — respondents arrive here via a branch */}
            <IncomingFlowAlert branchName="Dissatisfied path" sourceQid="Q1" />
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
        </SurveyBlock>
}`,...(ce=(ne=N.parameters)==null?void 0:ne.docs)==null?void 0:ce.source}}};var me,ue,xe;w.parameters={...w.parameters,docs:{...(me=w.parameters)==null?void 0:me.docs,source:{originalSource:`{
  name: 'Incoming Branching — Error',
  render: () => <SurveyBlock title="Follow-up Questions" blockId="B3" questionCount={2}>
            {/* Error alert BEFORE questions — originating rule is broken */}
            <IncomingFlowErrorAlert branchName="Dissatisfied path" sourceQid="Q1" />
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
        </SurveyBlock>
}`,...(xe=(ue=w.parameters)==null?void 0:ue.docs)==null?void 0:xe.source}}};var pe,he,be;C.parameters={...C.parameters,docs:{...(pe=C.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  name: 'Outgoing Flow — Default',
  render: () => <SurveyBlock title="Customer Satisfaction" blockId="B1" questionCount={2}>
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
            {/* Alert AFTER all questions — outgoing branch or skip */}
            <OutgoingFlowAlert destination="B3 – Follow-up Questions" />
        </SurveyBlock>
}`,...(be=(he=C.parameters)==null?void 0:he.docs)==null?void 0:be.source}}};var ve,je,fe;Q.parameters={...Q.parameters,docs:{...(ve=Q.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  name: 'Outgoing Flow — Error',
  render: () => <SurveyBlock title="Customer Satisfaction" blockId="B1" questionCount={2}>
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
            {/* Error alert AFTER questions — target block was deleted */}
            <OutgoingFlowErrorAlert destination="B3 – Follow-up Questions" />
        </SurveyBlock>
}`,...(fe=(je=Q.parameters)==null?void 0:je.docs)==null?void 0:fe.source}}};var ge,ye,Ne;S.parameters={...S.parameters,docs:{...(ge=S.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  name: 'Incoming + Outgoing Flow',
  render: () => <SurveyBlock title="Neutral Feedback" blockId="B2" questionCount={2}>
            {/* Incoming: arrives here via branch from Q1 */}
            <IncomingFlowAlert branchName="Neutral path" sourceQid="Q1" />
            <QuestionCardShell>
                <DragHandle />
                <div>
                    <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                            <QuestionId id="Q3" />
                            <TypeBadge label="Multiple Choice" />
                        </div>
                        <ActionsMenu />
                    </div>
                    <p className="text-sm text-foreground mt-1">What was the primary reason for your rating?</p>
                    <div className="mt-3 space-y-0.5">
                        <ChoiceRow label="Product quality" />
                        <ChoiceRow label="Customer support" />
                        <ChoiceRow label="Pricing" />
                        <ChoiceRow label="Delivery speed" />
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
                    <p className="text-sm text-foreground mt-1">What would change your rating to Satisfied?</p>
                    <div className="mt-3 rounded border border-border-ui bg-muted/30 px-3 py-2 text-sm text-muted-foreground italic">
                        Respondent types a free-text answer here...
                    </div>
                </div>
            </QuestionCardShell>
            {/* Outgoing: routes to end of survey */}
            <OutgoingFlowAlert destination="End of survey" />
        </SurveyBlock>
}`,...(Ne=(ye=S.parameters)==null?void 0:ye.docs)==null?void 0:Ne.source}}};var we,Ce,Qe;B.parameters={...B.parameters,docs:{...(we=B.parameters)==null?void 0:we.docs,source:{originalSource:`{
  name: 'Question With Logic Error',
  render: () => <SurveyBlock title="Customer Satisfaction" blockId="B1" questionCount={2}>
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
        </SurveyBlock>
}`,...(Qe=(Ce=B.parameters)==null?void 0:Ce.docs)==null?void 0:Qe.source}}};var Se,Be,ke;k.parameters={...k.parameters,docs:{...(Se=k.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  name: 'Multiple Logic Issues',
  render: () => <SurveyBlock title="Customer Satisfaction" blockId="B1" questionCount={3}>
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
                    <LogicErrorAlert message="Skip logic references Q4 which no longer exists." />
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
                    <LogicAlert message="Display only if Q1 = 'Dissatisfied' or 'Neutral'" />
                </div>
            </QuestionCardShell>
            <QuestionCardShell hasError>
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
                    </div>
                    <LogicErrorAlert message="Display logic references a deleted choice. This question will always be shown." />
                </div>
            </QuestionCardShell>
        </SurveyBlock>
}`,...(ke=(Be=k.parameters)==null?void 0:Be.docs)==null?void 0:ke.source}}};var Ie,De,Re;I.parameters={...I.parameters,docs:{...(Ie=I.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  name: 'Survey Section Mode',
  render: () => <SurveyBlock title="About Your Experience" blockId="B2" questionCount={2} isSurveySection sectionName="Part 2 — Service Quality">
            <QuestionCardShell>
                <DragHandle />
                <div>
                    <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                            <QuestionId id="Q4" />
                            <TypeBadge label="Multiple Choice" />
                        </div>
                        <ActionsMenu />
                    </div>
                    <p className="text-sm text-foreground mt-1">How would you rate our support team?</p>
                    <div className="mt-3 space-y-0.5">
                        <ChoiceRow label="Excellent" />
                        <ChoiceRow label="Good" />
                        <ChoiceRow label="Fair" />
                        <ChoiceRow label="Poor" />
                    </div>
                </div>
            </QuestionCardShell>
            <QuestionCardShell>
                <DragHandle />
                <div>
                    <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                            <QuestionId id="Q5" />
                            <TypeBadge label="Text Entry" />
                        </div>
                        <ActionsMenu />
                    </div>
                    <p className="text-sm text-foreground mt-1">What did our support team do particularly well?</p>
                    <div className="mt-3 rounded border border-border-ui bg-muted/30 px-3 py-2 text-sm text-muted-foreground italic">
                        Respondent types a free-text answer here...
                    </div>
                </div>
            </QuestionCardShell>
        </SurveyBlock>
}`,...(Re=(De=I.parameters)==null?void 0:De.docs)==null?void 0:Re.source}}};var Te,Ee,Me;D.parameters={...D.parameters,docs:{...(Te=D.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  // eslint-disable-next-line storybook/no-redundant-story-name
  name: 'Print Mode',
  render: () => <SurveyBlock title="Customer Satisfaction" blockId="B1" questionCount={3} printMode>
            <QuestionCardShell>
                <DragHandle />
                <div>
                    <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                            <QuestionId id="Q1" />
                            <TypeBadge label="Multiple Choice" />
                        </div>
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
                            <TypeBadge label="Description" />
                        </div>
                    </div>
                    <div className="mt-1 text-sm text-foreground leading-relaxed">
                        Thank you for completing this section. Your feedback helps us improve.
                    </div>
                </div>
            </QuestionCardShell>
        </SurveyBlock>
}`,...(Me=(Ee=D.parameters)==null?void 0:Ee.docs)==null?void 0:Me.source}}};var Ae,He,qe;R.parameters={...R.parameters,docs:{...(Ae=R.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  name: 'Canvas Overview (Multiple Blocks)',
  render: () => <div className="space-y-4">
            {/* B1 — Introduction, no logic */}
            <SurveyBlock title="Introduction" blockId="B1" questionCount={1}>
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
                            Welcome! This survey will take approximately 3 minutes. Your responses are anonymous.
                        </div>
                    </div>
                </QuestionCardShell>
            </SurveyBlock>

            {/* B2 — Selected, has outgoing branching */}
            <SurveyBlock title="Customer Satisfaction" blockId="B2" questionCount={2} isSelected>
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
                        <LogicAlert message="If 'Dissatisfied' or 'Neutral' → branch to B3 (Follow-up)" />
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
                        <p className="text-sm text-foreground mt-1">Any additional comments?</p>
                        <div className="mt-3 rounded border border-border-ui bg-muted/30 px-3 py-2 text-sm text-muted-foreground italic">
                            Respondent types a free-text answer here...
                        </div>
                    </div>
                </QuestionCardShell>
                {/* Outgoing flow alert AFTER questions */}
                <OutgoingFlowAlert destination="B3 – Follow-up Questions" />
            </SurveyBlock>

            {/* B3 — Follow-up with incoming branch, collapsed */}
            <SurveyBlock title="Follow-up Questions" blockId="B3" questionCount={3} isCollapsed>
                {/* Body hidden when collapsed */}
            </SurveyBlock>

            {/* B4 — Demographics, display logic dashed border */}
            <SurveyBlock title="Demographics" blockId="B4" questionCount={2} hasDisplayLogic>
                <QuestionCardShell>
                    <DragHandle />
                    <div>
                        <div className="flex items-center justify-between mb-1">
                            <div className="flex items-center gap-2">
                                <QuestionId id="Q7" />
                                <TypeBadge label="Multiple Choice" />
                            </div>
                            <ActionsMenu />
                        </div>
                        <p className="text-sm text-foreground mt-1">What is your age range?</p>
                        <div className="mt-3 space-y-0.5">
                            <ChoiceRow label="Under 25" />
                            <ChoiceRow label="25–44" />
                            <ChoiceRow label="45–64" />
                            <ChoiceRow label="65 or older" />
                        </div>
                    </div>
                </QuestionCardShell>
                <QuestionCardShell>
                    <DragHandle />
                    <div>
                        <div className="flex items-center justify-between mb-1">
                            <div className="flex items-center gap-2">
                                <QuestionId id="Q8" />
                                <TypeBadge label="Checkbox" />
                            </div>
                            <ActionsMenu />
                        </div>
                        <p className="text-sm text-foreground mt-1">How did you hear about us?</p>
                        <div className="mt-3 space-y-0.5">
                            <ChoiceRow label="Search engine" type="checkbox" />
                            <ChoiceRow label="Social media" type="checkbox" />
                            <ChoiceRow label="Word of mouth" type="checkbox" />
                        </div>
                    </div>
                </QuestionCardShell>
            </SurveyBlock>
        </div>
}`,...(qe=(He=R.parameters)==null?void 0:He.docs)==null?void 0:qe.source}}};const ss=["Default","Selected","Hovered","Collapsed","Dragging","WithDisplayLogic","Empty","IncomingBranching","IncomingBranchingError","OutgoingFlow","OutgoingFlowError","IncomingAndOutgoing","WithQuestionLogicError","WithMultipleLogicIssues","SurveySection","PrintMode","CanvasOverview"];export{R as CanvasOverview,j as Collapsed,h as Default,f as Dragging,y as Empty,v as Hovered,S as IncomingAndOutgoing,N as IncomingBranching,w as IncomingBranchingError,C as OutgoingFlow,Q as OutgoingFlowError,D as PrintMode,b as Selected,I as SurveySection,g as WithDisplayLogic,k as WithMultipleLogicIssues,B as WithQuestionLogicError,ss as __namedExportsOrder,es as default};
