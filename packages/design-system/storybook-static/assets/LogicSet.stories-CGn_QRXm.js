import{j as e}from"./jsx-runtime-BYYWji4R.js";import{r as g}from"./index-ClcD9ViR.js";import{B as S}from"./button-D_2cT0Yd.js";import{B as os}from"./badge-CDZW3nus.js";import{S as y,a as D,b as w,c as b,d as a}from"./select-C7AyIqOl.js";import{P as z,d as ds,h as cs}from"./icons-BJRAOfCp.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-CyBucMil.js";import"./index-Bew1Yeam.js";import"./index-C2vczdB5.js";import"./utils-CDN07tui.js";import"./index-Drr-0Uuw.js";import"./index-BdQq_4o_.js";import"./index-DW48STyt.js";import"./index-BpI74HIb.js";import"./index-CWz5EflU.js";import"./index-CZKF78Oq.js";import"./index-guOESLwJ.js";import"./index-C59fdHCL.js";import"./index-kkVLZR_L.js";import"./index-CDv6ZuJx.js";import"./tslib.es6-BUas5LQb.js";import"./index-CaubhJIw.js";import"./index-CafsI6Qv.js";import"./index-DTBqWj02.js";import"./index-Jh3OPyOv.js";import"./index-BntbZM61.js";import"./index-B0ATiKj9.js";import"./index-sY83p_TZ.js";import"./index-C4f8hYez.js";import"./icon-CPjmVJEk.js";const W=[{id:"Q1",label:"Q1 – What is your age?",choices:["Under 18","18–34","35–54","55+"]},{id:"Q2",label:"Q2 – Do you own a car?",choices:["Yes","No"]},{id:"Q3",label:"Q3 – Preferred contact method",choices:["Email","Phone","SMS"]}],ls={equals:"Is equal to",not_equals:"Is not equal to",contains:"Contains",is_empty:"Is empty",is_not_empty:"Is not empty"};function ps({condition:s,index:o,showIndex:f,showIfLabel:u,hasError:j,onChange:h,onRemove:x,onAddBelow:R}){const C=W.find(t=>t.id===s.questionId),N=s.operator&&!["is_empty","is_not_empty"].includes(s.operator);return e.jsxs("div",{className:"flex items-center gap-2",children:[f&&e.jsxs("span",{className:"text-xs font-medium text-muted-foreground w-4 text-center shrink-0",children:[o+1,"."]}),u&&e.jsx("span",{className:"text-sm font-medium text-foreground w-6 text-center shrink-0",children:"if"}),e.jsxs(y,{value:s.questionId,onValueChange:t=>h(s.id,"questionId",t),children:[e.jsx(D,{className:"flex-1 min-w-0 h-8 text-xs","aria-invalid":j&&!s.questionId?"true":void 0,children:e.jsx(w,{placeholder:"Select question"})}),e.jsx(b,{children:W.map(t=>e.jsx(a,{value:t.id,children:t.label},t.id))})]}),e.jsxs(y,{value:s.operator,onValueChange:t=>h(s.id,"operator",t),disabled:!s.questionId,children:[e.jsx(D,{className:`flex-1 min-w-0 h-8 text-xs${s.questionId?"":" hidden"}`,"aria-invalid":j&&s.questionId&&!s.operator?"true":void 0,children:e.jsx(w,{placeholder:"Operator"})}),e.jsx(b,{children:Object.entries(ls).map(([t,d])=>e.jsx(a,{value:t,children:d},t))})]}),e.jsxs(y,{value:s.value,onValueChange:t=>h(s.id,"value",t),disabled:!s.operator||!N,children:[e.jsx(D,{className:`flex-1 min-w-0 h-8 text-xs${!N||!s.operator?" hidden":""}`,"aria-invalid":j&&s.operator&&!s.value?"true":void 0,children:e.jsx(w,{placeholder:"Value"})}),e.jsx(b,{children:((C==null?void 0:C.choices)??[]).map(t=>e.jsx(a,{value:t,children:t},t))})]}),x&&e.jsx(S,{variant:"ghost-destructive",size:"icon",className:"h-7 w-7 shrink-0",onClick:()=>x(s.id),"aria-label":"Remove condition",children:e.jsx(cs,{})}),R&&e.jsx(S,{variant:"ghost-primary",size:"icon",className:"h-7 w-7 shrink-0",onClick:()=>R(s.id),"aria-label":"Add condition below",children:e.jsx(z,{})})]})}function ms({label:s,isSelected:o,onClick:f}){const[u,j]=g.useState(!1),h=o?"default":u?"secondary":"outline";return e.jsx(os,{variant:h,className:"cursor-pointer select-none",onClick:f,onMouseEnter:()=>j(!0),onMouseLeave:()=>j(!1),role:"button",tabIndex:0,onKeyDown:x=>x.key==="Enter"||x.key===" "?f():void 0,children:s})}function n({initialData:s,startEmpty:o=!1,actionValue:f,headerContent:u,issues:j=[],showRowIfLabel:h=!1,transparentBackground:x=!1,initialValidationErrorIds:R=[]}){const[C,N]=g.useState(o),[t,d]=g.useState(s),[Ge,Xe]=g.useState(f??"show"),[U,M]=g.useState(new Set(R)),k=t.conditions.length>1,Je=["p-3 border rounded-md relative transition-colors",x?"border-border-subtle bg-transparent":U.size>0?"border-destructive/40 shadow-sm":t.isConfirmed?"border-border-ui bg-muted/50":"border-primary bg-muted shadow-sm"].join(" "),Ze=(i,r,m)=>{d(v=>({...v,isConfirmed:!1,conditions:v.conditions.map(c=>c.id!==i?c:r==="questionId"?{...c,questionId:m,operator:"",value:""}:{...c,[r]:m})})),M(v=>{const c=new Set(v);return c.delete(i),c})},es=i=>{const r=t.conditions.findIndex(c=>c.id===i),m={id:`cond-${Date.now()}`,questionId:"",operator:"",value:""},v=[...t.conditions];v.splice(r+1,0,m),d(c=>({...c,conditions:v,isConfirmed:!1}))},ss=()=>{const i={id:`cond-${Date.now()}`,questionId:"",operator:"",value:""};d(r=>({...r,conditions:[...r.conditions,i],isConfirmed:!1}))},ts=i=>{d(r=>({...r,conditions:r.conditions.filter(m=>m.id!==i)}))},is=()=>{const i=new Set;t.conditions.forEach(r=>{const m=r.operator&&!["is_empty","is_not_empty"].includes(r.operator);(!r.questionId||!r.operator||m&&!r.value)&&i.add(r.id)}),M(i),i.size===0&&d(r=>({...r,isConfirmed:!0}))},rs=()=>({...s,operator:"AND",conditions:[{id:`cond-${Date.now()}`,questionId:"",operator:"",value:""}],isConfirmed:!1}),as=()=>{N(!0),d(s),M(new Set)},ns=()=>{d(s),M(new Set)};return C?e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs(S,{variant:"ghost-primary",size:"sm",onClick:()=>{N(!1),d(rs())},children:[e.jsx(z,{})," Add logic set"]}),e.jsxs(S,{variant:"ghost-primary",size:"sm",children:[e.jsx(z,{})," Add logic expression"]})]}):e.jsx("div",{className:"w-full",children:e.jsxs("div",{className:Je,style:x?{backgroundColor:"transparent"}:void 0,children:[e.jsx("div",{className:"flex items-center justify-between mb-3",children:e.jsx("div",{className:"flex items-center gap-2 w-full",children:f!==void 0?e.jsxs(e.Fragment,{children:[e.jsxs(y,{value:Ge,onValueChange:i=>Xe(i),children:[e.jsx(D,{className:"w-24 h-8 text-sm shrink-0",children:e.jsx(w,{})}),e.jsxs(b,{children:[e.jsx(a,{value:"show",children:"Show"}),e.jsx(a,{value:"hide",children:"Hide"})]})]}),u&&e.jsx("div",{className:"flex-grow",children:u})]}):u?e.jsx("div",{className:"flex-grow",children:u}):e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"text-xs font-medium text-muted-foreground uppercase tracking-wider",children:"Logic Set"}),!k&&!h&&e.jsxs("div",{className:"flex items-center gap-1 ml-2",children:[e.jsx("span",{className:"text-sm font-medium text-foreground shrink-0",children:"if"}),U.size>0&&e.jsx(ds,{className:"h-4 w-4 text-destructive shrink-0"})]})]})})}),k&&e.jsx("div",{className:"flex items-center gap-2 mb-3 px-2",children:e.jsx("div",{className:"flex gap-1",children:["AND","OR"].map(i=>{const r=t.operator===i;return e.jsx(ms,{label:i,isSelected:r,onClick:()=>d(m=>({...m,operator:i,isConfirmed:!1}))},i)})})}),e.jsx("div",{className:"space-y-2",children:t.conditions.map((i,r)=>e.jsx(ps,{condition:i,index:r,showIndex:k,showIfLabel:h,hasError:U.has(i.id),onChange:Ze,onRemove:k?ts:void 0,onAddBelow:k?es:void 0},i.id))}),e.jsxs("div",{className:"mt-3 flex items-center justify-between",children:[e.jsxs(S,{variant:"ghost-primary",size:"sm",onClick:ss,children:[e.jsx(z,{})," Add condition"]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(S,{variant:t.isConfirmed?"ghost-destructive":"ghost",size:"sm",onClick:t.isConfirmed?ns:as,children:t.isConfirmed?"Delete":"Cancel"}),!t.isConfirmed&&e.jsx(S,{variant:"default",size:"sm",onClick:is,children:"Apply"})]})]})]})})}const Ws={title:"Survey Builder/Logic/LogicSet",component:n,parameters:{layout:"padded",docs:{description:{component:`
**LogicSet** is the condition editor used throughout the Survey Builder to configure skip logic, display logic, branching rules, and choice visibility rules.

### States

| State | Border | Background | Footer |
|-------|--------|------------|--------|
| Empty | — | — | "+ Add logic set" ghost button only |
| Unconfirmed | \`border-primary\` | \`bg-muted shadow-sm\` | Cancel + Apply |
| Confirmed | \`border-border-ui\` | \`bg-muted/50\` | Delete only |
| Validation error | \`border-destructive/40\` | — | Cancel + Apply, invalid selects highlighted |

### Header patterns

The header content changes depending on the rule type:

| Rule type | Header |
|-----------|--------|
| Display question logic | Show/Hide select + question ID + "if" |
| Display choice logic | Show/Hide select + choice ID select + "if" |
| Skip logic | "Skip to" + question select + "if" |
| Branching logic | "Branch to" + block select + "if" |
| Generic | "Logic Set" label + "if" |

### Multiple conditions

When two or more conditions are added, an **AND / OR** toggle badge row appears above the conditions list and each row gets a numeric index. The toggle uses three states: \`default\` (selected), \`secondary\` (hovered), \`outline\` (inactive).

### Operators

Operators that do not require a value (\`is_empty\`, \`is_not_empty\`) hide the value select column to keep the layout clean.
                `}}},tags:["autodocs"]},l={id:"set-1",operator:"AND",conditions:[{id:"cond-1",questionId:"",operator:"",value:""}],isConfirmed:!1},T={id:"set-2",operator:"AND",conditions:[{id:"cond-1",questionId:"Q2",operator:"equals",value:"Yes"}],isConfirmed:!0},P={id:"set-3",operator:"AND",conditions:[{id:"cond-1",questionId:"Q1",operator:"equals",value:"18–34"},{id:"cond-2",questionId:"Q2",operator:"equals",value:"Yes"}],isConfirmed:!1};function Fe(){const[s,o]=g.useState("BL1");return e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-sm text-foreground shrink-0",children:"Branch to"}),e.jsxs(y,{value:s,onValueChange:o,children:[e.jsx(D,{className:"w-24 h-8 text-sm shrink-0",children:e.jsx(w,{})}),e.jsxs(b,{children:[e.jsx(a,{value:"BL1",children:"BL1"}),e.jsx(a,{value:"BL2",children:"BL2"}),e.jsx(a,{value:"BL3",children:"BL3"})]})]}),e.jsx("span",{className:"text-sm text-foreground shrink-0",children:"if"})]})}function Ye(){const[s,o]=g.useState("Q1");return e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-sm text-foreground shrink-0",children:"Skip to"}),e.jsxs(y,{value:s,onValueChange:o,children:[e.jsx(D,{className:"w-24 h-8 text-sm shrink-0",children:e.jsx(w,{})}),e.jsxs(b,{children:[e.jsx(a,{value:"Q1",children:"Q1"}),e.jsx(a,{value:"Q2",children:"Q2"}),e.jsx(a,{value:"Q3",children:"Q3"}),e.jsx(a,{value:"end",children:"End of survey"})]})]}),e.jsx("span",{className:"text-sm text-foreground shrink-0",children:"if"})]})}function Ke(){const[s,o]=g.useState("Q3_1");return e.jsxs("div",{className:"flex items-center gap-2 flex-grow",children:[e.jsxs(y,{value:s,onValueChange:o,children:[e.jsx(D,{className:"w-24 h-8 text-sm shrink-0",children:e.jsx(w,{})}),e.jsxs(b,{children:[e.jsx(a,{value:"Q3_1",children:"Q3_1"}),e.jsx(a,{value:"Q3_2",children:"Q3_2"}),e.jsx(a,{value:"Q3_3",children:"Q3_3"})]})]}),e.jsx("span",{className:"text-sm text-foreground shrink-0",children:"if"})]})}const us=e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-sm font-semibold text-foreground",children:"Q3"}),e.jsx("span",{className:"text-sm text-foreground",children:"if"})]}),p={actionValue:"show",headerContent:us},A={args:{initialData:l,startEmpty:!0}},I={args:{initialData:l,...p}},q={args:{initialData:T,...p}},L={args:{initialData:P,...p}},B={args:{initialData:{...P,id:"set-4",operator:"OR"},...p}},Q={args:{initialData:{id:"set-5",operator:"AND",conditions:[{id:"cond-err-1",questionId:"",operator:"",value:""}],isConfirmed:!1},initialValidationErrorIds:["cond-err-1"],...p}},E={name:"Display question logic set",args:{initialData:l,...p}},_={name:"Branching logic set",render:()=>e.jsx(n,{initialData:l,headerContent:e.jsx(Fe,{})})},V={name:"Skip logic set",render:()=>e.jsx(n,{initialData:l,headerContent:e.jsx(Ye,{})})},O={name:"Display choice logic set",render:()=>e.jsx(n,{initialData:l,actionValue:"show",headerContent:e.jsx(Ke,{})})},H={render:()=>e.jsxs("div",{className:"flex flex-col gap-6 w-[480px]",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-muted-foreground uppercase tracking-wider mb-2",children:"Unconfirmed"}),e.jsx(n,{initialData:l,...p})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-muted-foreground uppercase tracking-wider mb-2",children:"Confirmed"}),e.jsx(n,{initialData:T,...p})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-muted-foreground uppercase tracking-wider mb-2",children:"Multiple Conditions (AND)"}),e.jsx(n,{initialData:P,...p})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-muted-foreground uppercase tracking-wider mb-2",children:"With Error"}),e.jsx(n,{initialData:{...T,id:"set-err"},issues:["Referenced question was deleted."],...p})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-muted-foreground uppercase tracking-wider mb-2",children:"Display question logic set"}),e.jsx(n,{initialData:l,...p})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-muted-foreground uppercase tracking-wider mb-2",children:"Display choice logic set"}),e.jsx(n,{initialData:{...l,id:"set-choice"},actionValue:"show",headerContent:e.jsx(Ke,{})})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-muted-foreground uppercase tracking-wider mb-2",children:"Skip logic set"}),e.jsx(n,{initialData:{...l,id:"set-skip"},headerContent:e.jsx(Ye,{})})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-muted-foreground uppercase tracking-wider mb-2",children:"Branching logic set"}),e.jsx(n,{initialData:{...l,id:"set-branch"},headerContent:e.jsx(Fe,{})})]})]})};var $,F,Y,K,G;A.parameters={...A.parameters,docs:{...($=A.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    initialData: unconfirmedSeed,
    startEmpty: true
  }
}`,...(Y=(F=A.parameters)==null?void 0:F.docs)==null?void 0:Y.source},description:{story:'Empty state — no logic set added yet. Shows only the "+ Add logic set" ghost-primary button. Clicking it transitions to Unconfirmed.',...(G=(K=A.parameters)==null?void 0:K.docs)==null?void 0:G.description}}};var X,J,Z,ee,se;I.parameters={...I.parameters,docs:{...(X=I.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    initialData: unconfirmedSeed,
    ...sharedActionArgs
  }
}`,...(Z=(J=I.parameters)==null?void 0:J.docs)==null?void 0:Z.source},description:{story:"Initial editing state when a new rule is created. Primary border, surface-container-high background, Cancel + Apply buttons.",...(se=(ee=I.parameters)==null?void 0:ee.docs)==null?void 0:se.description}}};var te,ie,re,ae,ne;q.parameters={...q.parameters,docs:{...(te=q.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    initialData: confirmedSeed,
    ...sharedActionArgs
  }
}`,...(re=(ie=q.parameters)==null?void 0:ie.docs)==null?void 0:re.source},description:{story:"Saved and confirmed rule. Outline-variant border, surface-container background, Delete button only.",...(ne=(ae=q.parameters)==null?void 0:ae.docs)==null?void 0:ne.description}}};var oe,de,ce,le,pe;L.parameters={...L.parameters,docs:{...(oe=L.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    initialData: multiSeed,
    ...sharedActionArgs
  }
}`,...(ce=(de=L.parameters)==null?void 0:de.docs)==null?void 0:ce.source},description:{story:"Two or more conditions — AND/OR toggle and row numbering appear.",...(pe=(le=L.parameters)==null?void 0:le.docs)==null?void 0:pe.description}}};var me,ue,he,xe,ge;B.parameters={...B.parameters,docs:{...(me=B.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    initialData: {
      ...multiSeed,
      id: 'set-4',
      operator: 'OR'
    },
    ...sharedActionArgs
  }
}`,...(he=(ue=B.parameters)==null?void 0:ue.docs)==null?void 0:he.source},description:{story:"Multiple conditions with OR operator active.",...(ge=(xe=B.parameters)==null?void 0:xe.docs)==null?void 0:ge.description}}};var fe,je,ve,Se,ye;Q.parameters={...Q.parameters,docs:{...(fe=Q.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    initialData: {
      id: 'set-5',
      operator: 'AND',
      conditions: [{
        id: 'cond-err-1',
        questionId: '',
        operator: '',
        value: ''
      }],
      isConfirmed: false
    },
    initialValidationErrorIds: ['cond-err-1'],
    ...sharedActionArgs
  }
}`,...(ve=(je=Q.parameters)==null?void 0:je.docs)==null?void 0:ve.source},description:{story:'Error state — triggered when the user clicks Apply with empty selects. Unconfirmed border, destructive styling on empty selects, warning icon next to "if".',...(ye=(Se=Q.parameters)==null?void 0:Se.docs)==null?void 0:ye.description}}};var De,we,be,Ce,Ne;E.parameters={...E.parameters,docs:{...(De=E.parameters)==null?void 0:De.docs,source:{originalSource:`{
  name: 'Display question logic set',
  args: {
    initialData: unconfirmedSeed,
    ...sharedActionArgs
  }
}`,...(be=(we=E.parameters)==null?void 0:we.docs)==null?void 0:be.source},description:{story:"Show/Hide select + question ID + if in the header — pattern used by DisplayLogicSet.",...(Ne=(Ce=E.parameters)==null?void 0:Ce.docs)==null?void 0:Ne.description}}};var ke,Ae,Ie,qe,Le;_.parameters={..._.parameters,docs:{...(ke=_.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  name: 'Branching logic set',
  render: () => <LogicSetDisplay initialData={unconfirmedSeed} headerContent={<BranchHeaderSelect />} />
}`,...(Ie=(Ae=_.parameters)==null?void 0:Ae.docs)==null?void 0:Ie.source},description:{story:'"Branch to" text + block selector + if in the header.',...(Le=(qe=_.parameters)==null?void 0:qe.docs)==null?void 0:Le.description}}};var Be,Qe,Ee,_e,Ve;V.parameters={...V.parameters,docs:{...(Be=V.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  name: 'Skip logic set',
  render: () => <LogicSetDisplay initialData={unconfirmedSeed} headerContent={<SkipHeaderSelect />} />
}`,...(Ee=(Qe=V.parameters)==null?void 0:Qe.docs)==null?void 0:Ee.source},description:{story:'"Skip to" text + question select + if in the header — pattern used by SkipLogicSet.',...(Ve=(_e=V.parameters)==null?void 0:_e.docs)==null?void 0:Ve.description}}};var Oe,He,Re,Me,ze;O.parameters={...O.parameters,docs:{...(Oe=O.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  name: 'Display choice logic set',
  render: () => <LogicSetDisplay initialData={unconfirmedSeed} actionValue="show" headerContent={<ChoiceHeaderSelect />} />
}`,...(Re=(He=O.parameters)==null?void 0:He.docs)==null?void 0:Re.source},description:{story:"Show/Hide select + choice ID select + if in the header — pattern used by DisplayChoiceLogicSet.",...(ze=(Me=O.parameters)==null?void 0:Me.docs)==null?void 0:ze.description}}};var Ue,Te,Pe,We,$e;H.parameters={...H.parameters,docs:{...(Ue=H.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6 w-[480px]">
            <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Unconfirmed</p>
                <LogicSetDisplay initialData={unconfirmedSeed} {...sharedActionArgs} />
            </div>
            <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Confirmed</p>
                <LogicSetDisplay initialData={confirmedSeed} {...sharedActionArgs} />
            </div>
            <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Multiple Conditions (AND)</p>
                <LogicSetDisplay initialData={multiSeed} {...sharedActionArgs} />
            </div>
            <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">With Error</p>
                <LogicSetDisplay initialData={{
        ...confirmedSeed,
        id: 'set-err'
      }} issues={['Referenced question was deleted.']} {...sharedActionArgs} />
            </div>
            <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Display question logic set</p>
                <LogicSetDisplay initialData={unconfirmedSeed} {...sharedActionArgs} />
            </div>
            <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Display choice logic set</p>
                <LogicSetDisplay initialData={{
        ...unconfirmedSeed,
        id: 'set-choice'
      }} actionValue="show" headerContent={<ChoiceHeaderSelect />} />
            </div>
            <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Skip logic set</p>
                <LogicSetDisplay initialData={{
        ...unconfirmedSeed,
        id: 'set-skip'
      }} headerContent={<SkipHeaderSelect />} />
            </div>
            <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Branching logic set</p>
                <LogicSetDisplay initialData={{
        ...unconfirmedSeed,
        id: 'set-branch'
      }} headerContent={<BranchHeaderSelect />} />
            </div>
        </div>
}`,...(Pe=(Te=H.parameters)==null?void 0:Te.docs)==null?void 0:Pe.source},description:{story:"Overview of all states stacked.",...($e=(We=H.parameters)==null?void 0:We.docs)==null?void 0:$e.description}}};const $s=["Empty","Unconfirmed","Confirmed","MultipleConditions","MultipleConditionsOR","WithError","DisplayQuestionLogicSet","BranchingLogicSet","SkipLogicSet","DisplayChoiceLogicSet","AllStates"];export{H as AllStates,_ as BranchingLogicSet,q as Confirmed,O as DisplayChoiceLogicSet,E as DisplayQuestionLogicSet,A as Empty,L as MultipleConditions,B as MultipleConditionsOR,V as SkipLogicSet,I as Unconfirmed,Q as WithError,$s as __namedExportsOrder,Ws as default};
