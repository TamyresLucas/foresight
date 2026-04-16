import{j as e}from"./jsx-runtime-BYYWji4R.js";import{R as f}from"./index-ClcD9ViR.js";import{fn as E}from"./index-DgAF9SIF.js";import{c as k}from"./utils-CDN07tui.js";import"./_commonjsHelpers-Cpj98o6Y.js";const uo={equals:"=",not_equals:"≠",contains:"contains",greater_than:">",less_than:"<",is_empty:"is empty",is_not_empty:"is not empty"};function B(o){const t=uo[o.operator]||o.operator;return o.operator==="is_empty"||o.operator==="is_not_empty"?`${o.questionId} ${t}`:`${o.questionId} ${t} "${o.value}"`}function g(o,t){if(o==="next")return"Next Question";if(o==="end")return"End of Survey";if(o.startsWith("block:")){const s=o.slice(6),c=t.blocks.find(l=>l.id===s);return c?`Block ${c.bid}: ${c.title.slice(0,30)}`:"Unknown Block"}const r=t.blocks.flatMap(s=>s.questions).find(s=>s.id===o);return r?`${r.qid}: ${r.text.slice(0,30)}`:o}function M({issues:o}){if(o.length===0)return null;const t=Array.from(new Set(o.map(r=>r.message)));return e.jsxs("div",{className:"flex items-center gap-2 p-3 rounded border border-[#EF576B] bg-[#FEEFF1] text-[#232323] mt-3",children:[e.jsx("span",{className:"material-symbols-rounded text-base text-[#CF455C] flex-shrink-0 leading-none select-none",children:"warning"}),e.jsx("div",{className:"flex-1 text-sm",children:t.map((r,s)=>e.jsx("div",{children:r},s))})]})}function po({logic:o,survey:t,onClick:r,onRemove:s,issues:c=[],isFocused:l=!1,focusedId:p,readOnly:h=!1}){const d=o.conditions.filter(i=>i.isConfirmed===!0),u=(o.logicSets??[]).filter(i=>i.isConfirmed===!0);return d.length===0&&u.length===0?null:e.jsxs("div",{className:k("mt-4 p-3 border rounded-md bg-muted/40 relative group/logic transition-colors cursor-pointer",l?"border-primary ring-1 ring-primary":"border-border-ui"),onClick:()=>r==null?void 0:r(),children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"material-symbols-rounded text-lg text-primary leading-none select-none",children:"visibility"}),e.jsx("h4",{className:"text-sm font-semibold text-foreground",children:"Display Logic"})]}),!h&&e.jsx("button",{onClick:i=>{i.stopPropagation(),s==null||s()},className:"w-6 h-6 flex items-center justify-center rounded-md text-destructive hover:bg-destructive/10 opacity-0 group-hover/logic:opacity-100 transition-opacity",title:"Remove Display Logic",children:e.jsx("span",{className:"material-symbols-rounded text-base leading-none select-none",children:"close"})})]}),e.jsxs("div",{className:"pl-2 space-y-1 text-sm text-muted-foreground",children:[e.jsx("p",{className:"mb-1",children:"Show this question if:"}),e.jsxs("div",{className:"flex flex-wrap gap-2 items-center",children:[d.map((i,n)=>e.jsxs(f.Fragment,{children:[n>0&&e.jsx("span",{className:"font-semibold text-foreground",children:o.operator}),e.jsx("span",{onClick:a=>{a.stopPropagation(),r==null||r(i.id)},className:k("font-semibold text-foreground cursor-pointer hover:text-primary hover:underline bg-card px-1.5 py-0.5 rounded border transition-colors",p===i.id?"border-primary ring-1 ring-primary":"border-transparent hover:border-border-ui"),children:B(i)})]},i.id)),u.map((i,n)=>e.jsxs(f.Fragment,{children:[(d.length>0||n>0)&&e.jsx("span",{className:"font-semibold text-foreground",children:o.operator}),e.jsxs("span",{onClick:a=>{a.stopPropagation(),r==null||r(i.id)},className:k("font-semibold text-foreground cursor-pointer hover:text-primary hover:underline bg-card px-1.5 py-0.5 rounded border transition-colors",p===i.id?"border-primary ring-1 ring-primary":"border-transparent hover:border-border-ui"),children:["(",i.conditions.map((a,y)=>e.jsxs(f.Fragment,{children:[y>0&&e.jsxs("span",{className:"font-bold text-foreground",children:[" ",i.operator," "]}),B(a)]},a.id)),")"]})]},i.id))]})]}),e.jsx(M,{issues:c})]})}function A({logic:o,currentQuestion:t,survey:r,onClick:s,onRemove:c,issues:l=[],isFocused:p=!1,readOnly:h=!1}){var u;if(o.type==="simple"&&!o.isConfirmed)return null;const d=o.type==="per_choice"?o.rules.filter(i=>i.isConfirmed):[];return o.type==="per_choice"&&d.length===0?null:e.jsxs("div",{onClick:s,className:k("mt-4 p-3 border rounded-md bg-muted/40 cursor-pointer group/skiplogic transition-colors",p?"border-primary ring-1 ring-primary":"border-border-ui"),children:[e.jsxs("div",{className:"flex items-center justify-between gap-2 mb-2",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"material-symbols-rounded text-lg text-primary leading-none select-none",children:"double_arrow"}),e.jsx("h4",{className:"text-sm font-semibold text-foreground",children:"Skip Logic"})]}),!h&&e.jsx("button",{onClick:i=>{i.stopPropagation(),c==null||c()},className:"w-6 h-6 flex items-center justify-center rounded-md text-destructive hover:bg-destructive/10 opacity-0 group-hover/skiplogic:opacity-100 transition-opacity",title:"Remove Skip Logic",children:e.jsx("span",{className:"material-symbols-rounded text-base leading-none select-none",children:"close"})})]}),e.jsxs("div",{className:"pl-2 space-y-1 text-sm text-muted-foreground",children:[o.type==="simple"&&o.isConfirmed&&e.jsxs("p",{children:["If answered → skip to"," ",e.jsx("span",{className:"font-semibold text-foreground",children:g(o.skipTo,r)}),"."]}),o.type==="per_choice"&&((u=t.choices)==null?void 0:u.map(i=>{const n=d.find(a=>a.choiceId===i.id);return n?e.jsxs("p",{children:["If “",e.jsx("span",{className:"font-semibold text-foreground",children:i.text.slice(0,20)}),"” is selected → skip to"," ",e.jsx("span",{className:"font-semibold text-foreground",children:g(n.skipTo,r)}),"."]},i.id):null}))]}),e.jsx(M,{issues:l})]})}function R({branchName:o,sourceQuestionId:t,targetBlockId:r,survey:s,onClick:c}){const l=g(`block:${r}`,s);return e.jsxs("div",{onClick:p=>{c&&(p.stopPropagation(),c())},className:"p-3 border border-border-ui rounded-md bg-muted/40 cursor-pointer hover:border-primary mb-4 transition-colors",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[e.jsx("span",{className:"material-symbols-rounded text-lg text-primary leading-none select-none",children:"call_split"}),e.jsx("h4",{className:"text-sm font-medium text-foreground",children:o})]}),e.jsxs("div",{className:"pl-2 text-sm text-muted-foreground flex items-center gap-1 flex-wrap",children:[e.jsx("span",{className:"text-foreground",children:t}),e.jsx("span",{className:"material-symbols-rounded text-base text-muted-foreground leading-none select-none",children:"arrow_right_alt"}),e.jsx("span",{className:"text-foreground",children:l}),e.jsx("span",{children:"."})]})]})}function F({logic:o,survey:t,onClick:r,question:s,issues:c=[],isFocused:l=!1,focusedId:p}){const h=new Set;for(const i of o.branches)if(i.thenSkipToIsConfirmed)for(const n of i.conditions)n.questionId===s.qid&&n.isConfirmed&&n.value&&h.add(n.value);const d=!s.choices||s.choices.length===0?!0:h.size<s.choices.length;return o.branches.some(i=>i.thenSkipToIsConfirmed&&i.conditions.some(n=>n.isConfirmed===!0))?e.jsxs("div",{className:k("mt-4 p-3 border rounded-md group/branching transition-colors cursor-pointer",l?"border-primary ring-1 ring-primary":"border-border-ui"),onClick:()=>r==null?void 0:r(),children:[e.jsx("div",{className:"flex items-center justify-between mb-2",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"material-symbols-rounded text-lg text-primary leading-none select-none",children:"call_split"}),e.jsx("h4",{className:"text-sm font-medium text-foreground",children:"Branching Logic"})]})}),e.jsxs("div",{className:"space-y-2 text-sm",children:[o.branches.map(i=>{const n=i.conditions.filter(a=>a.isConfirmed===!0);return n.length===0||!i.thenSkipToIsConfirmed?null:e.jsxs("div",{onClick:a=>{a.stopPropagation(),r==null||r(i.id)},className:k("p-2 bg-card rounded-md cursor-pointer border transition-colors",p===i.id?"border-primary ring-1 ring-primary":"border-transparent hover:border-border-ui"),children:[i.pathName&&e.jsx("div",{className:"font-medium text-foreground mb-1",children:i.pathName}),e.jsxs("div",{className:"text-foreground",children:[e.jsx("span",{children:"IF "}),n.length>1?e.jsx("div",{className:"ml-4 flex flex-col gap-1 my-1",children:n.map((a,y)=>e.jsxs("div",{children:[y>0&&e.jsxs("span",{className:"font-semibold",children:[i.operator," "]}),e.jsx("span",{className:"hover:text-primary hover:underline cursor-pointer",children:B(a)})]},a.id))}):e.jsx("span",{children:n.map((a,y)=>e.jsxs(f.Fragment,{children:[y>0&&e.jsxs("span",{children:[" ",i.operator," "]}),e.jsx("span",{className:"hover:text-primary hover:underline cursor-pointer",children:B(a)})]},a.id))}),e.jsx("span",{className:n.length>1?"mt-1 block":"",children:" THEN "}),e.jsxs("span",{children:["skip to"," ",e.jsx("span",{className:"font-semibold",children:g(i.thenSkipTo,t)}),"."]})]})]},i.id)}),d&&o.otherwiseIsConfirmed&&o.otherwiseSkipTo&&e.jsxs("div",{className:"p-2 bg-card rounded-md border border-dashed border-border-ui text-sm text-muted-foreground",children:[e.jsx("span",{className:"text-foreground",children:"Otherwise "}),"skip to"," ",e.jsx("span",{className:"font-semibold text-foreground",children:g(o.otherwiseSkipTo,t)}),".",e.jsx("span",{className:"ml-2 text-xs text-muted-foreground/60 italic",children:"(fallback)"})]})]}),e.jsx(M,{issues:c})]}):null}function O({logic:o,survey:t,onClick:r,sourceQuestion:s,allBranchingLogics:c=[]}){const l=c.length>0;return e.jsxs("div",{onClick:r,className:"p-3 border border-border-ui rounded-md bg-muted/40 cursor-pointer hover:border-primary transition-colors",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[e.jsx("span",{className:"material-symbols-rounded text-lg text-primary leading-none select-none",children:"arrow_right_alt"}),e.jsx("h4",{className:"text-sm font-medium text-foreground",children:"Default path"})]}),e.jsxs("div",{className:"space-y-2 text-sm",children:[l&&c.map(({question:p,logic:h})=>e.jsx(f.Fragment,{children:h.branches.map(d=>{const u=d.conditions.filter(i=>i.isConfirmed===!0);return u.length===0||!d.thenSkipToIsConfirmed?null:e.jsxs("div",{className:"text-foreground",children:[e.jsx("span",{children:"IF "}),u.map((i,n)=>e.jsxs(f.Fragment,{children:[n>0&&e.jsxs("span",{children:[" ",d.operator," "]}),e.jsx("span",{className:"font-semibold",children:B(i)})]},i.id)),e.jsx("span",{className:"material-symbols-rounded text-lg text-primary leading-none align-bottom mx-1.5 select-none inline-block",children:"call_split"}),e.jsx("span",{children:g(d.thenSkipTo,t)}),"."]},d.id)})},p.id)),e.jsx("div",{className:"text-foreground",children:l?e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"Otherwise "}),e.jsx("span",{className:"material-symbols-rounded text-lg text-primary leading-none align-bottom mx-1.5 select-none inline-block",children:"arrow_right_alt"}),e.jsx("span",{children:g(o.skipTo,t)}),"."]}):e.jsxs(e.Fragment,{children:[e.jsxs("span",{children:[(s==null?void 0:s.qid)??"Default path"," "]}),e.jsx("span",{className:"material-symbols-rounded text-lg text-primary leading-none align-bottom mx-1.5 select-none inline-block",children:"arrow_right_alt"}),e.jsx("span",{children:g(o.skipTo,t)}),"."]})})]})]})}const P={blocks:[{id:"block-intro",bid:"BL1",title:"Introduction",questions:[{id:"q-satisfaction",qid:"Q1",text:"How satisfied are you with our service?",choices:[{id:"c-very-satisfied",text:"Very satisfied"},{id:"c-satisfied",text:"Satisfied"},{id:"c-neutral",text:"Neutral"},{id:"c-dissatisfied",text:"Dissatisfied"}]},{id:"q-recommend",qid:"Q2",text:"Would you recommend us to a friend?",choices:[{id:"c-yes",text:"Yes"},{id:"c-no",text:"No"}]},{id:"q-reason",qid:"Q3",text:"What is the main reason for your rating?"},{id:"q-followup",qid:"Q4",text:"Any additional comments for our team?"}]},{id:"block-demographics",bid:"BL2",title:"Demographics",questions:[{id:"q-age",qid:"Q5",text:"What is your age group?",choices:[{id:"c-under25",text:"Under 25"},{id:"c-2544",text:"25–44"},{id:"c-45plus",text:"45+"}]},{id:"q-country",qid:"Q6",text:"What country do you live in?"}]},{id:"block-feedback",bid:"BL3",title:"Detailed Feedback",questions:[{id:"q-product",qid:"Q7",text:"Please rate our product quality."}]},{id:"block-end",bid:"BL4",title:"Thank You",questions:[]}]},m=P.blocks[0].questions[0],mo=P.blocks[0].questions[1],bo={title:"Survey Builder/Logic/LogicDisplays",component:po,parameters:{docs:{description:{component:"\n**LogicDisplays** contains the 5 read-only display cards that summarise configured logic rules on question and block cards. They are not editors — they render a compact, clickable summary that opens the corresponding logic editor when clicked.\n\n> **Note:** `_reference/LogicDisplays.tsx` imports from `../types` and `../utils`, which are not yet implemented. This stories file provides visual mock components with identical prop shapes, rendering logic, and shadcn/ui tokens.\n\n### Components\n\n| Component | Icon | Purpose |\n|-----------|------|---------|\n| **DisplayLogicDisplay** | `visibility` | Show/hide conditions for a question |\n| **SkipLogicDisplay** | `double_arrow` | Skip-to rules (simple or per choice) |\n| **IncomingLogicDisplay** | `call_split` | Incoming branch from another question |\n| **BranchingLogicDisplay** | `call_split` | Outgoing branch conditions |\n| **SurveyFlowDisplay** | `arrow_right_alt` | Default survey path with optional branching summary |\n                "}}},tags:["autodocs"],args:{survey:P,onClick:E(),onRemove:E(),issues:[],isFocused:!1,readOnly:!1},decorators:[o=>e.jsx("div",{className:"w-[480px]",children:e.jsx(o,{})})]},b={name:"DisplayLogic / Default",args:{logic:{operator:"AND",conditions:[{id:"cond-1",questionId:"Q1",operator:"equals",value:"Very satisfied",isConfirmed:!0}]}}},v={name:"DisplayLogic / Multiple Rules",args:{logic:{operator:"OR",conditions:[{id:"cond-a",questionId:"Q1",operator:"equals",value:"Very satisfied",isConfirmed:!0},{id:"cond-b",questionId:"Q2",operator:"equals",value:"Yes",isConfirmed:!0},{id:"cond-c",questionId:"Q5",operator:"equals",value:"25–44",isConfirmed:!0}]}}},x={name:"DisplayLogic / All Operators",args:{logic:{operator:"OR",conditions:[{id:"op-eq",questionId:"Q1",operator:"equals",value:"Very satisfied",isConfirmed:!0},{id:"op-neq",questionId:"Q1",operator:"not_equals",value:"Neutral",isConfirmed:!0},{id:"op-con",questionId:"Q3",operator:"contains",value:"support",isConfirmed:!0},{id:"op-gt",questionId:"Q3",operator:"greater_than",value:"5",isConfirmed:!0},{id:"op-lt",questionId:"Q3",operator:"less_than",value:"3",isConfirmed:!0},{id:"op-emp",questionId:"Q4",operator:"is_empty",isConfirmed:!0},{id:"op-nem",questionId:"Q4",operator:"is_not_empty",isConfirmed:!0}]}}},C={name:"DisplayLogic / Nested (Logic Set)",args:{logic:{operator:"AND",conditions:[{id:"flat-1",questionId:"Q1",operator:"equals",value:"Very satisfied",isConfirmed:!0}],logicSets:[{id:"set-1",operator:"AND",conditions:[{id:"nested-a",questionId:"Q2",operator:"equals",value:"Yes",isConfirmed:!0},{id:"nested-b",questionId:"Q5",operator:"equals",value:"25–44",isConfirmed:!0}],isConfirmed:!0}]}}},N={name:"SkipLogic / Default",render:o=>e.jsx(A,{logic:{type:"simple",isConfirmed:!0,skipTo:"q-age"},currentQuestion:m,survey:o.survey,onClick:o.onClick,onRemove:o.onRemove,issues:o.issues})},q={name:"SkipLogic / Skip To End",render:o=>e.jsx(A,{logic:{type:"simple",isConfirmed:!0,skipTo:"end"},currentQuestion:mo,survey:o.survey,onClick:o.onClick,onRemove:o.onRemove,issues:o.issues})},S={name:"SkipLogic / Multiple Rules (Per Choice)",render:o=>e.jsx(A,{logic:{type:"per_choice",rules:[{choiceId:"c-very-satisfied",skipTo:"block:block-feedback",isConfirmed:!0},{choiceId:"c-satisfied",skipTo:"block:block-demographics",isConfirmed:!0},{choiceId:"c-neutral",skipTo:"end",isConfirmed:!0},{choiceId:"c-dissatisfied",skipTo:"end",isConfirmed:!0}]},currentQuestion:m,survey:o.survey,onClick:o.onClick,onRemove:o.onRemove,issues:o.issues})},D={name:"IncomingLogic / Default",render:o=>e.jsx(R,{branchName:"Positive Feedback Branch",sourceQuestionId:"Q1",targetBlockId:"block-feedback",survey:o.survey,onClick:o.onClick})},I={name:"IncomingLogic / Multiple Sources",render:o=>e.jsxs("div",{className:"space-y-0",children:[e.jsx(R,{branchName:"Positive Response Branch",sourceQuestionId:"Q1",targetBlockId:"block-feedback",survey:o.survey,onClick:o.onClick}),e.jsx(R,{branchName:"Recommender Branch",sourceQuestionId:"Q2",targetBlockId:"block-feedback",survey:o.survey,onClick:o.onClick})]})},V=m,j={name:"BranchingLogic / Default",render:o=>e.jsx(F,{logic:{branches:[{id:"branch-happy",pathName:"Happy Path",operator:"AND",conditions:[{id:"bc-1",questionId:"Q1",operator:"equals",value:"Very satisfied",isConfirmed:!0}],thenSkipTo:"block:block-feedback",thenSkipToIsConfirmed:!0}]},question:V,survey:o.survey,onClick:o.onClick,onRemove:o.onRemove,issues:o.issues})},Q={name:"BranchingLogic / Multi Branch",render:o=>e.jsx(F,{logic:{branches:[{id:"branch-promoter",pathName:"Promoter Path",operator:"AND",conditions:[{id:"bc-p1",questionId:"Q1",operator:"equals",value:"Very satisfied",isConfirmed:!0}],thenSkipTo:"block:block-feedback",thenSkipToIsConfirmed:!0},{id:"branch-passive",pathName:"Passive Path",operator:"AND",conditions:[{id:"bc-p2",questionId:"Q1",operator:"equals",value:"Neutral",isConfirmed:!0}],thenSkipTo:"block:block-demographics",thenSkipToIsConfirmed:!0},{id:"branch-detractor",pathName:"Detractor Path",operator:"AND",conditions:[{id:"bc-p3a",questionId:"Q1",operator:"equals",value:"Dissatisfied",isConfirmed:!0},{id:"bc-p3b",questionId:"Q2",operator:"equals",value:"No",isConfirmed:!0}],thenSkipTo:"end",thenSkipToIsConfirmed:!0}]},question:V,survey:o.survey,onClick:o.onClick,onRemove:o.onRemove,issues:o.issues})},L={name:"BranchingLogic / Default Branch (Otherwise)",render:o=>e.jsx(F,{logic:{branches:[{id:"branch-vsat",pathName:"Very Satisfied",operator:"AND",conditions:[{id:"bc-vs",questionId:"Q1",operator:"equals",value:"Very satisfied",isConfirmed:!0}],thenSkipTo:"block:block-feedback",thenSkipToIsConfirmed:!0}],otherwiseIsConfirmed:!0,otherwiseSkipTo:"block:block-demographics"},question:V,survey:o.survey,onClick:o.onClick,onRemove:o.onRemove,issues:o.issues})},w={name:"SurveyFlow / Default",render:o=>e.jsx(O,{logic:{type:"simple",isConfirmed:!0,skipTo:"block:block-demographics"},survey:o.survey,sourceQuestion:m,onClick:o.onClick})},T={name:"SurveyFlow / Complex Flow",render:o=>e.jsx(O,{logic:{type:"simple",isConfirmed:!0,skipTo:"end"},survey:o.survey,sourceQuestion:m,allBranchingLogics:[{question:m,logic:{branches:[{id:"sf-b1",operator:"AND",conditions:[{id:"sf-c1",questionId:"Q1",operator:"equals",value:"Very satisfied",isConfirmed:!0}],thenSkipTo:"block:block-feedback",thenSkipToIsConfirmed:!0},{id:"sf-b2",operator:"AND",conditions:[{id:"sf-c2",questionId:"Q1",operator:"equals",value:"Neutral",isConfirmed:!0}],thenSkipTo:"block:block-demographics",thenSkipToIsConfirmed:!0},{id:"sf-b3",operator:"AND",conditions:[{id:"sf-c3",questionId:"Q2",operator:"equals",value:"No",isConfirmed:!0}],thenSkipTo:"block:block-end",thenSkipToIsConfirmed:!0}]}}],onClick:o.onClick})},_={name:"Overview — All 5 Components",render:o=>e.jsxs("div",{className:"w-[480px] space-y-8",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-muted-foreground uppercase tracking-wider mb-1",children:"DisplayLogicDisplay"}),e.jsx(po,{logic:{operator:"AND",conditions:[{id:"ov-c1",questionId:"Q2",operator:"equals",value:"Yes",isConfirmed:!0}]},survey:o.survey,onClick:o.onClick,onRemove:o.onRemove})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-muted-foreground uppercase tracking-wider mb-1",children:"SkipLogicDisplay"}),e.jsx(A,{logic:{type:"simple",isConfirmed:!0,skipTo:"block:block-demographics"},currentQuestion:m,survey:o.survey,onClick:o.onClick,onRemove:o.onRemove})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-muted-foreground uppercase tracking-wider mb-1",children:"IncomingLogicDisplay"}),e.jsx(R,{branchName:"High Satisfaction Branch",sourceQuestionId:"Q1",targetBlockId:"block-feedback",survey:o.survey,onClick:o.onClick})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-muted-foreground uppercase tracking-wider mb-1",children:"BranchingLogicDisplay"}),e.jsx(F,{logic:{branches:[{id:"ov-branch",pathName:"Promoter Path",operator:"AND",conditions:[{id:"ov-bc",questionId:"Q1",operator:"equals",value:"Very satisfied",isConfirmed:!0}],thenSkipTo:"block:block-feedback",thenSkipToIsConfirmed:!0}]},question:m,survey:o.survey,onClick:o.onClick,onRemove:o.onRemove})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-muted-foreground uppercase tracking-wider mb-1",children:"SurveyFlowDisplay"}),e.jsx(O,{logic:{type:"simple",isConfirmed:!0,skipTo:"block:block-demographics"},survey:o.survey,sourceQuestion:m,onClick:o.onClick})]})]})};var Y,$,U,H,W;b.parameters={...b.parameters,docs:{...(Y=b.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: 'DisplayLogic / Default',
  args: {
    logic: {
      operator: 'AND',
      conditions: [{
        id: 'cond-1',
        questionId: 'Q1',
        operator: 'equals',
        value: 'Very satisfied',
        isConfirmed: true
      }]
    }
  }
}`,...(U=($=b.parameters)==null?void 0:$.docs)==null?void 0:U.source},description:{story:`Default — one confirmed condition: Q1 = "Very satisfied" → show.
The card displays the Eye icon, "Display Logic" heading, and the condition chip.
The remove button (✕) is invisible until hover.`,...(W=(H=b.parameters)==null?void 0:H.docs)==null?void 0:W.description}}};var z,G,J,K,X;v.parameters={...v.parameters,docs:{...(z=v.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'DisplayLogic / Multiple Rules',
  args: {
    logic: {
      operator: 'OR',
      conditions: [{
        id: 'cond-a',
        questionId: 'Q1',
        operator: 'equals',
        value: 'Very satisfied',
        isConfirmed: true
      }, {
        id: 'cond-b',
        questionId: 'Q2',
        operator: 'equals',
        value: 'Yes',
        isConfirmed: true
      }, {
        id: 'cond-c',
        questionId: 'Q5',
        operator: 'equals',
        value: '25–44',
        isConfirmed: true
      }]
    }
  }
}`,...(J=(G=v.parameters)==null?void 0:G.docs)==null?void 0:J.source},description:{story:`Multiple Rules — three confirmed conditions joined by OR.
The operator badge appears between each chip.`,...(X=(K=v.parameters)==null?void 0:K.docs)==null?void 0:X.description}}};var Z,ee,oe,ie,re;x.parameters={...x.parameters,docs:{...(Z=x.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: 'DisplayLogic / All Operators',
  args: {
    logic: {
      operator: 'OR',
      conditions: [{
        id: 'op-eq',
        questionId: 'Q1',
        operator: 'equals',
        value: 'Very satisfied',
        isConfirmed: true
      }, {
        id: 'op-neq',
        questionId: 'Q1',
        operator: 'not_equals',
        value: 'Neutral',
        isConfirmed: true
      }, {
        id: 'op-con',
        questionId: 'Q3',
        operator: 'contains',
        value: 'support',
        isConfirmed: true
      }, {
        id: 'op-gt',
        questionId: 'Q3',
        operator: 'greater_than',
        value: '5',
        isConfirmed: true
      }, {
        id: 'op-lt',
        questionId: 'Q3',
        operator: 'less_than',
        value: '3',
        isConfirmed: true
      }, {
        id: 'op-emp',
        questionId: 'Q4',
        operator: 'is_empty',
        isConfirmed: true
      }, {
        id: 'op-nem',
        questionId: 'Q4',
        operator: 'is_not_empty',
        isConfirmed: true
      }]
    }
  }
}`,...(oe=(ee=x.parameters)==null?void 0:ee.docs)==null?void 0:oe.source},description:{story:"All Operators — one condition per each operator in the operator map.\nDemonstrates how `is_empty` / `is_not_empty` omit the value.",...(re=(ie=x.parameters)==null?void 0:ie.docs)==null?void 0:re.description}}};var se,ne,te,ae,ce;C.parameters={...C.parameters,docs:{...(se=C.parameters)==null?void 0:se.docs,source:{originalSource:`{
  name: 'DisplayLogic / Nested (Logic Set)',
  args: {
    logic: {
      operator: 'AND',
      conditions: [{
        id: 'flat-1',
        questionId: 'Q1',
        operator: 'equals',
        value: 'Very satisfied',
        isConfirmed: true
      }],
      logicSets: [{
        id: 'set-1',
        operator: 'AND',
        conditions: [{
          id: 'nested-a',
          questionId: 'Q2',
          operator: 'equals',
          value: 'Yes',
          isConfirmed: true
        }, {
          id: 'nested-b',
          questionId: 'Q5',
          operator: 'equals',
          value: '25–44',
          isConfirmed: true
        }],
        isConfirmed: true
      }]
    }
  }
}`,...(te=(ne=C.parameters)==null?void 0:ne.docs)==null?void 0:te.source},description:{story:'Nested — one flat condition + one logic set (grouped conditions).\nLogic sets are rendered as a bracketed expression: `(Q2 = "Yes" AND Q5 = "25–44")`.',...(ce=(ae=C.parameters)==null?void 0:ae.docs)==null?void 0:ce.description}}};var de,le,pe,ue,me;N.parameters={...N.parameters,docs:{...(de=N.parameters)==null?void 0:de.docs,source:{originalSource:`{
  name: 'SkipLogic / Default',
  render: args => <SkipLogicDisplayMock logic={{
    type: 'simple',
    isConfirmed: true,
    skipTo: 'q-age'
  }} currentQuestion={Q1} survey={args.survey} onClick={args.onClick as () => void} onRemove={args.onRemove} issues={args.issues} />
}`,...(pe=(le=N.parameters)==null?void 0:le.docs)==null?void 0:pe.source},description:{story:'Default — simple skip: "If answered → skip to Q5: What is your age group?"',...(me=(ue=N.parameters)==null?void 0:ue.docs)==null?void 0:me.description}}};var he,ge,fe,ke,ye;q.parameters={...q.parameters,docs:{...(he=q.parameters)==null?void 0:he.docs,source:{originalSource:`{
  name: 'SkipLogic / Skip To End',
  render: args => <SkipLogicDisplayMock logic={{
    type: 'simple',
    isConfirmed: true,
    skipTo: 'end'
  }} currentQuestion={Q2} survey={args.survey} onClick={args.onClick as () => void} onRemove={args.onRemove} issues={args.issues} />
}`,...(fe=(ge=q.parameters)==null?void 0:ge.docs)==null?void 0:fe.source},description:{story:"Skip To End — simple skip to the end of the survey.",...(ye=(ke=q.parameters)==null?void 0:ke.docs)==null?void 0:ye.description}}};var be,ve,xe,Ce,Ne;S.parameters={...S.parameters,docs:{...(be=S.parameters)==null?void 0:be.docs,source:{originalSource:`{
  name: 'SkipLogic / Multiple Rules (Per Choice)',
  render: args => <SkipLogicDisplayMock logic={{
    type: 'per_choice',
    rules: [{
      choiceId: 'c-very-satisfied',
      skipTo: 'block:block-feedback',
      isConfirmed: true
    }, {
      choiceId: 'c-satisfied',
      skipTo: 'block:block-demographics',
      isConfirmed: true
    }, {
      choiceId: 'c-neutral',
      skipTo: 'end',
      isConfirmed: true
    }, {
      choiceId: 'c-dissatisfied',
      skipTo: 'end',
      isConfirmed: true
    }]
  }} currentQuestion={Q1} survey={args.survey} onClick={args.onClick as () => void} onRemove={args.onRemove} issues={args.issues} />
}`,...(xe=(ve=S.parameters)==null?void 0:ve.docs)==null?void 0:xe.source},description:{story:"Multiple Rules — per-choice skip, 3 confirmed rules mapping each answer to a different destination.",...(Ne=(Ce=S.parameters)==null?void 0:Ce.docs)==null?void 0:Ne.description}}};var qe,Se,De,Ie,je;D.parameters={...D.parameters,docs:{...(qe=D.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  name: 'IncomingLogic / Default',
  render: args => <IncomingLogicDisplayMock branchName="Positive Feedback Branch" sourceQuestionId="Q1" targetBlockId="block-feedback" survey={args.survey} onClick={args.onClick as () => void} />
}`,...(De=(Se=D.parameters)==null?void 0:Se.docs)==null?void 0:De.source},description:{story:'Default — single incoming branch from Q1 ("Positive Feedback Branch") targeting the Detailed Feedback block.',...(je=(Ie=D.parameters)==null?void 0:Ie.docs)==null?void 0:je.description}}};var Qe,Le,we,Te,_e;I.parameters={...I.parameters,docs:{...(Qe=I.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
  name: 'IncomingLogic / Multiple Sources',
  render: args => <div className="space-y-0">
            <IncomingLogicDisplayMock branchName="Positive Response Branch" sourceQuestionId="Q1" targetBlockId="block-feedback" survey={args.survey} onClick={args.onClick as () => void} />
            <IncomingLogicDisplayMock branchName="Recommender Branch" sourceQuestionId="Q2" targetBlockId="block-feedback" survey={args.survey} onClick={args.onClick as () => void} />
        </div>
}`,...(we=(Le=I.parameters)==null?void 0:Le.docs)==null?void 0:we.source},description:{story:`Multiple Sources — two incoming branches from different questions arriving at the same block.
Rendered as stacked cards, as they would appear in the canvas.`,...(_e=(Te=I.parameters)==null?void 0:Te.docs)==null?void 0:_e.description}}};var Be,Re,Ae,Fe,Me;j.parameters={...j.parameters,docs:{...(Be=j.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  name: 'BranchingLogic / Default',
  render: args => <BranchingLogicDisplayMock logic={{
    branches: [{
      id: 'branch-happy',
      pathName: 'Happy Path',
      operator: 'AND',
      conditions: [{
        id: 'bc-1',
        questionId: 'Q1',
        operator: 'equals',
        value: 'Very satisfied',
        isConfirmed: true
      }],
      thenSkipTo: 'block:block-feedback',
      thenSkipToIsConfirmed: true
    }]
  }} question={Q1_SATISFACTION_QUESTION} survey={args.survey} onClick={args.onClick as (id?: string) => void} onRemove={args.onRemove} issues={args.issues} />
}`,...(Ae=(Re=j.parameters)==null?void 0:Re.docs)==null?void 0:Ae.source},description:{story:'Default — one simple branch: IF Q1 = "Very satisfied" THEN skip to Detailed Feedback block.',...(Me=(Fe=j.parameters)==null?void 0:Fe.docs)==null?void 0:Me.description}}};var Oe,Pe,Ve,Ee,Ye;Q.parameters={...Q.parameters,docs:{...(Oe=Q.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  name: 'BranchingLogic / Multi Branch',
  render: args => <BranchingLogicDisplayMock logic={{
    branches: [{
      id: 'branch-promoter',
      pathName: 'Promoter Path',
      operator: 'AND',
      conditions: [{
        id: 'bc-p1',
        questionId: 'Q1',
        operator: 'equals',
        value: 'Very satisfied',
        isConfirmed: true
      }],
      thenSkipTo: 'block:block-feedback',
      thenSkipToIsConfirmed: true
    }, {
      id: 'branch-passive',
      pathName: 'Passive Path',
      operator: 'AND',
      conditions: [{
        id: 'bc-p2',
        questionId: 'Q1',
        operator: 'equals',
        value: 'Neutral',
        isConfirmed: true
      }],
      thenSkipTo: 'block:block-demographics',
      thenSkipToIsConfirmed: true
    }, {
      id: 'branch-detractor',
      pathName: 'Detractor Path',
      operator: 'AND',
      conditions: [{
        id: 'bc-p3a',
        questionId: 'Q1',
        operator: 'equals',
        value: 'Dissatisfied',
        isConfirmed: true
      }, {
        id: 'bc-p3b',
        questionId: 'Q2',
        operator: 'equals',
        value: 'No',
        isConfirmed: true
      }],
      thenSkipTo: 'end',
      thenSkipToIsConfirmed: true
    }]
  }} question={Q1_SATISFACTION_QUESTION} survey={args.survey} onClick={args.onClick as (id?: string) => void} onRemove={args.onRemove} issues={args.issues} />
}`,...(Ve=(Pe=Q.parameters)==null?void 0:Pe.docs)==null?void 0:Ve.source},description:{story:"Multi Branch — three branches with different conditions and destinations.",...(Ye=(Ee=Q.parameters)==null?void 0:Ee.docs)==null?void 0:Ye.description}}};var $e,Ue,He,We,ze;L.parameters={...L.parameters,docs:{...($e=L.parameters)==null?void 0:$e.docs,source:{originalSource:`{
  name: 'BranchingLogic / Default Branch (Otherwise)',
  render: args => <BranchingLogicDisplayMock logic={{
    branches: [{
      id: 'branch-vsat',
      pathName: 'Very Satisfied',
      operator: 'AND',
      conditions: [{
        id: 'bc-vs',
        questionId: 'Q1',
        operator: 'equals',
        value: 'Very satisfied',
        isConfirmed: true
      }],
      thenSkipTo: 'block:block-feedback',
      thenSkipToIsConfirmed: true
    }],
    // Only 1 of 4 choices covered → showOtherwise = true
    otherwiseIsConfirmed: true,
    otherwiseSkipTo: 'block:block-demographics'
  }} question={Q1_SATISFACTION_QUESTION} survey={args.survey} onClick={args.onClick as (id?: string) => void} onRemove={args.onRemove} issues={args.issues} />
}`,...(He=(Ue=L.parameters)==null?void 0:Ue.docs)==null?void 0:He.source},description:{story:`Default Branch — two branches that don't cover all choices, exposing the "Otherwise" fallback.

> **Note:** In the current real component, the "otherwise" card is explicitly rendered as \`null\`
> ("User requested to hide the 'Otherwise' card for now"). The mock surfaces it as a dashed
> card for documentation purposes, so the design can be agreed before re-enabling.`,...(ze=(We=L.parameters)==null?void 0:We.docs)==null?void 0:ze.description}}};var Ge,Je,Ke,Xe,Ze;w.parameters={...w.parameters,docs:{...(Ge=w.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
  name: 'SurveyFlow / Default',
  render: args => <SurveyFlowDisplayMock logic={{
    type: 'simple',
    isConfirmed: true,
    skipTo: 'block:block-demographics'
  }} survey={args.survey} sourceQuestion={Q1} onClick={args.onClick as () => void} />
}`,...(Ke=(Je=w.parameters)==null?void 0:Je.docs)==null?void 0:Ke.source},description:{story:"Default — simple linear flow: Q1 → Demographics block. No branching.",...(Ze=(Xe=w.parameters)==null?void 0:Xe.docs)==null?void 0:Ze.description}}};var eo,oo,io,ro,so;T.parameters={...T.parameters,docs:{...(eo=T.parameters)==null?void 0:eo.docs,source:{originalSource:`{
  name: 'SurveyFlow / Complex Flow',
  render: args => <SurveyFlowDisplayMock logic={{
    type: 'simple',
    isConfirmed: true,
    skipTo: 'end'
  }} survey={args.survey} sourceQuestion={Q1} allBranchingLogics={[{
    question: Q1,
    logic: {
      branches: [{
        id: 'sf-b1',
        operator: 'AND',
        conditions: [{
          id: 'sf-c1',
          questionId: 'Q1',
          operator: 'equals',
          value: 'Very satisfied',
          isConfirmed: true
        }],
        thenSkipTo: 'block:block-feedback',
        thenSkipToIsConfirmed: true
      }, {
        id: 'sf-b2',
        operator: 'AND',
        conditions: [{
          id: 'sf-c2',
          questionId: 'Q1',
          operator: 'equals',
          value: 'Neutral',
          isConfirmed: true
        }],
        thenSkipTo: 'block:block-demographics',
        thenSkipToIsConfirmed: true
      }, {
        id: 'sf-b3',
        operator: 'AND',
        conditions: [{
          id: 'sf-c3',
          questionId: 'Q2',
          operator: 'equals',
          value: 'No',
          isConfirmed: true
        }],
        thenSkipTo: 'block:block-end',
        thenSkipToIsConfirmed: true
      }]
    }
  }]} onClick={args.onClick as () => void} />
}`,...(io=(oo=T.parameters)==null?void 0:oo.docs)==null?void 0:io.source},description:{story:`Complex Flow — Q1 has 3 branching conditions routing to different blocks,
with a default "Otherwise → End of Survey" fallback path.`,...(so=(ro=T.parameters)==null?void 0:ro.docs)==null?void 0:so.description}}};var no,to,ao,co,lo;_.parameters={..._.parameters,docs:{...(no=_.parameters)==null?void 0:no.docs,source:{originalSource:`{
  name: 'Overview — All 5 Components',
  render: args => <div className="w-[480px] space-y-8">
            {/* DisplayLogicDisplay */}
            <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">DisplayLogicDisplay</p>
                <DisplayLogicDisplayMock logic={{
        operator: 'AND',
        conditions: [{
          id: 'ov-c1',
          questionId: 'Q2',
          operator: 'equals',
          value: 'Yes',
          isConfirmed: true
        }]
      }} survey={args.survey} onClick={args.onClick} onRemove={args.onRemove} />
            </div>
            {/* SkipLogicDisplay */}
            <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">SkipLogicDisplay</p>
                <SkipLogicDisplayMock logic={{
        type: 'simple',
        isConfirmed: true,
        skipTo: 'block:block-demographics'
      }} currentQuestion={Q1} survey={args.survey} onClick={args.onClick as () => void} onRemove={args.onRemove} />
            </div>
            {/* IncomingLogicDisplay */}
            <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">IncomingLogicDisplay</p>
                <IncomingLogicDisplayMock branchName="High Satisfaction Branch" sourceQuestionId="Q1" targetBlockId="block-feedback" survey={args.survey} onClick={args.onClick as () => void} />
            </div>
            {/* BranchingLogicDisplay */}
            <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">BranchingLogicDisplay</p>
                <BranchingLogicDisplayMock logic={{
        branches: [{
          id: 'ov-branch',
          pathName: 'Promoter Path',
          operator: 'AND',
          conditions: [{
            id: 'ov-bc',
            questionId: 'Q1',
            operator: 'equals',
            value: 'Very satisfied',
            isConfirmed: true
          }],
          thenSkipTo: 'block:block-feedback',
          thenSkipToIsConfirmed: true
        }]
      }} question={Q1} survey={args.survey} onClick={args.onClick as (id?: string) => void} onRemove={args.onRemove} />
            </div>
            {/* SurveyFlowDisplay */}
            <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">SurveyFlowDisplay</p>
                <SurveyFlowDisplayMock logic={{
        type: 'simple',
        isConfirmed: true,
        skipTo: 'block:block-demographics'
      }} survey={args.survey} sourceQuestion={Q1} onClick={args.onClick as () => void} />
            </div>
        </div>
}`,...(ao=(to=_.parameters)==null?void 0:to.docs)==null?void 0:ao.source},description:{story:`Overview — all 5 LogicDisplay components rendered in sequence as they would
appear stacked within a question card panel.`,...(lo=(co=_.parameters)==null?void 0:co.docs)==null?void 0:lo.description}}};const vo=["DisplayLogic_Default","DisplayLogic_MultipleRules","DisplayLogic_AllOperators","DisplayLogic_Nested","SkipLogic_Default","SkipLogic_SkipToEnd","SkipLogic_MultipleRules","IncomingLogic_Default","IncomingLogic_MultipleSources","BranchingLogic_Default","BranchingLogic_MultiBranch","BranchingLogic_DefaultBranch","SurveyFlow_Default","SurveyFlow_ComplexFlow","Overview"];export{j as BranchingLogic_Default,L as BranchingLogic_DefaultBranch,Q as BranchingLogic_MultiBranch,x as DisplayLogic_AllOperators,b as DisplayLogic_Default,v as DisplayLogic_MultipleRules,C as DisplayLogic_Nested,D as IncomingLogic_Default,I as IncomingLogic_MultipleSources,_ as Overview,N as SkipLogic_Default,S as SkipLogic_MultipleRules,q as SkipLogic_SkipToEnd,T as SurveyFlow_ComplexFlow,w as SurveyFlow_Default,vo as __namedExportsOrder,bo as default};
