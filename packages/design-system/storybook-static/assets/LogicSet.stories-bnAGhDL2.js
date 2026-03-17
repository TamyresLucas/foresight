import{j as e}from"./jsx-runtime-BYYWji4R.js";import{r as E}from"./index-ClcD9ViR.js";import{B as x}from"./button-DY4UnA7S.js";import{B as Ge}from"./badge-CDZW3nus.js";import{S as V,a as Q,b as B,c as _,d as L}from"./select-B-XvDT_5.js";import{P as M,w as Je,X as Ze}from"./icons-BXU3tp_f.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-CyBucMil.js";import"./index-Bew1Yeam.js";import"./index-C2vczdB5.js";import"./utils-CDN07tui.js";import"./index-Drr-0Uuw.js";import"./index-BdQq_4o_.js";import"./index-DW48STyt.js";import"./index-BpI74HIb.js";import"./index-CWz5EflU.js";import"./index-CZKF78Oq.js";import"./index-guOESLwJ.js";import"./index-C59fdHCL.js";import"./index-kkVLZR_L.js";import"./index-CDv6ZuJx.js";import"./tslib.es6-BUas5LQb.js";import"./index-CaubhJIw.js";import"./index-CafsI6Qv.js";import"./index-DTBqWj02.js";import"./index-Jh3OPyOv.js";import"./index-BntbZM61.js";import"./index-B0ATiKj9.js";import"./index-sY83p_TZ.js";import"./index-C4f8hYez.js";import"./icon-CPjmVJEk.js";const U=[{id:"Q1",label:"Q1 – What is your age?",choices:["Under 18","18–34","35–54","55+"]},{id:"Q2",label:"Q2 – Do you own a car?",choices:["Yes","No"]},{id:"Q3",label:"Q3 – Preferred contact method",choices:["Email","Phone","SMS"]}],es={equals:"Is equal to",not_equals:"Is not equal to",contains:"Contains",is_empty:"Is empty",is_not_empty:"Is not empty"};function ss({condition:t,index:v,showIndex:d,showIfLabel:m,hasError:p,onChange:c,onRemove:l,onAddBelow:R}){const g=U.find(s=>s.id===t.questionId),j=t.operator&&!["is_empty","is_not_empty"].includes(t.operator);return e.jsxs("div",{className:"flex items-center gap-2",children:[d&&e.jsxs("span",{className:"text-xs font-medium text-[var(--on-surface-variant)] w-4 text-center shrink-0",children:[v+1,"."]}),m&&e.jsx("span",{className:"text-sm font-medium text-[var(--on-surface)] w-6 text-center shrink-0",children:"if"}),e.jsxs(V,{value:t.questionId,onValueChange:s=>c(t.id,"questionId",s),children:[e.jsx(Q,{className:"flex-1 min-w-0 h-8 text-xs","aria-invalid":p&&!t.questionId?"true":void 0,children:e.jsx(B,{placeholder:"Select question"})}),e.jsx(_,{children:U.map(s=>e.jsx(L,{value:s.id,children:s.label},s.id))})]}),e.jsxs(V,{value:t.operator,onValueChange:s=>c(t.id,"operator",s),disabled:!t.questionId,children:[e.jsx(Q,{className:`flex-1 min-w-0 h-8 text-xs${t.questionId?"":" hidden"}`,"aria-invalid":p&&t.questionId&&!t.operator?"true":void 0,children:e.jsx(B,{placeholder:"Operator"})}),e.jsx(_,{children:Object.entries(es).map(([s,i])=>e.jsx(L,{value:s,children:i},s))})]}),e.jsxs(V,{value:t.value,onValueChange:s=>c(t.id,"value",s),disabled:!t.operator||!j,children:[e.jsx(Q,{className:`flex-1 min-w-0 h-8 text-xs${!j||!t.operator?" hidden":""}`,"aria-invalid":p&&t.operator&&!t.value?"true":void 0,children:e.jsx(B,{placeholder:"Value"})}),e.jsx(_,{children:((g==null?void 0:g.choices)??[]).map(s=>e.jsx(L,{value:s,children:s},s))})]}),l&&e.jsx(x,{variant:"ghost-destructive",size:"icon",className:"h-7 w-7 shrink-0",onClick:()=>l(t.id),"aria-label":"Remove condition",children:e.jsx(Ze,{})}),R&&e.jsx(x,{variant:"ghost-primary",size:"icon",className:"h-7 w-7 shrink-0",onClick:()=>R(t.id),"aria-label":"Add condition below",children:e.jsx(M,{})})]})}function ts({label:t,isSelected:v,onClick:d}){const[m,p]=E.useState(!1),c=v?"default":m?"secondary":"outline";return e.jsx(Ge,{variant:c,className:"cursor-pointer select-none",onClick:d,onMouseEnter:()=>p(!0),onMouseLeave:()=>p(!1),role:"button",tabIndex:0,onKeyDown:l=>l.key==="Enter"||l.key===" "?d():void 0,children:t})}function h({initialData:t,startEmpty:v=!1,actionValue:d,headerContent:m,issues:p=[],showRowIfLabel:c=!1,transparentBackground:l=!1,initialValidationErrorIds:R=[]}){const[g,j]=E.useState(v),[s,i]=E.useState(t),[We,ze]=E.useState(d??"show"),[W,O]=E.useState(new Set(R)),w=s.conditions.length>1,Te=["p-3 border rounded-md relative transition-colors",l?"border-[var(--outline-variant)] bg-transparent":W.size>0?"border-destructive bg-[var(--surface-container-high)] shadow-sm":s.isConfirmed?"border-border-ui bg-[var(--surface-container)]":"border-primary bg-[var(--surface-container-high)] shadow-sm"].join(" "),Ue=(r,a,o)=>{i(u=>({...u,isConfirmed:!1,conditions:u.conditions.map(n=>n.id!==r?n:a==="questionId"?{...n,questionId:o,operator:"",value:""}:{...n,[a]:o})})),O(u=>{const n=new Set(u);return n.delete(r),n})},Pe=r=>{const a=s.conditions.findIndex(n=>n.id===r),o={id:`cond-${Date.now()}`,questionId:"",operator:"",value:""},u=[...s.conditions];u.splice(a+1,0,o),i(n=>({...n,conditions:u,isConfirmed:!1}))},Fe=()=>{const r={id:`cond-${Date.now()}`,questionId:"",operator:"",value:""};i(a=>({...a,conditions:[...a.conditions,r],isConfirmed:!1}))},$e=r=>{i(a=>({...a,conditions:a.conditions.filter(o=>o.id!==r)}))},He=()=>{const r=new Set;s.conditions.forEach(a=>{const o=a.operator&&!["is_empty","is_not_empty"].includes(a.operator);(!a.questionId||!a.operator||o&&!a.value)&&r.add(a.id)}),O(r),r.size===0&&i(a=>({...a,isConfirmed:!0}))},Ye=()=>({...t,operator:"AND",conditions:[{id:`cond-${Date.now()}`,questionId:"",operator:"",value:""}],isConfirmed:!1}),Ke=()=>{j(!0),i(t),O(new Set)},Xe=()=>{i(t),O(new Set)};return g?e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs(x,{variant:"ghost-primary",size:"sm",onClick:()=>{j(!1),i(Ye())},children:[e.jsx(M,{})," Add logic set"]}),e.jsxs(x,{variant:"ghost-primary",size:"sm",children:[e.jsx(M,{})," Add logic expression"]})]}):e.jsxs("div",{className:"w-full",children:[d!==void 0&&e.jsxs("div",{className:"flex items-center gap-2 mb-2 w-full",children:[e.jsxs(V,{value:We,onValueChange:r=>ze(r),children:[e.jsx(Q,{className:"w-24 h-8 text-sm shrink-0",children:e.jsx(B,{})}),e.jsxs(_,{children:[e.jsx(L,{value:"show",children:"Show"}),e.jsx(L,{value:"hide",children:"Hide"})]})]}),m]}),e.jsxs("div",{className:Te,style:l?{backgroundColor:"transparent"}:void 0,children:[e.jsx("div",{className:"flex items-center justify-between mb-3",children:e.jsx("div",{className:"flex items-center gap-2 w-full",children:m&&d===void 0?e.jsx("div",{className:"flex-grow",children:m}):e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"text-xs font-medium text-[var(--on-surface-variant)] uppercase tracking-wider",children:"Logic Set"}),!w&&!c&&e.jsxs("div",{className:"flex items-center gap-1 ml-2",children:[e.jsx("span",{className:"text-sm font-medium text-[var(--on-surface)] shrink-0",children:"if"}),W.size>0&&e.jsx(Je,{className:"h-4 w-4 text-destructive shrink-0"})]})]})})}),w&&e.jsx("div",{className:"flex items-center gap-2 mb-3 px-2",children:e.jsx("div",{className:"flex gap-1",children:["AND","OR"].map(r=>{const a=s.operator===r;return e.jsx(ts,{label:r,isSelected:a,onClick:()=>i(o=>({...o,operator:r,isConfirmed:!1}))},r)})})}),e.jsx("div",{className:"space-y-2",children:s.conditions.map((r,a)=>e.jsx(ss,{condition:r,index:a,showIndex:w,showIfLabel:c,hasError:W.has(r.id),onChange:Ue,onRemove:w?$e:void 0,onAddBelow:w?Pe:void 0},r.id))}),e.jsxs("div",{className:"mt-3 flex items-center justify-between",children:[e.jsxs(x,{variant:"ghost-primary",size:"sm",onClick:Fe,children:[e.jsx(M,{})," Add condition"]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(x,{variant:s.isConfirmed?"ghost-destructive":"ghost",size:"sm",onClick:s.isConfirmed?Xe:Ke,children:s.isConfirmed?"Delete":"Cancel"}),!s.isConfirmed&&e.jsx(x,{variant:"default",size:"sm",onClick:He,children:"Apply"})]})]})]})]})}const Os={title:"Survey Builder/Logic/LogicSet",component:h,parameters:{layout:"padded"},tags:["autodocs"]},f={id:"set-1",operator:"AND",conditions:[{id:"cond-1",questionId:"",operator:"",value:""}],isConfirmed:!1},z={id:"set-2",operator:"AND",conditions:[{id:"cond-1",questionId:"Q2",operator:"equals",value:"Yes"}],isConfirmed:!0},T={id:"set-3",operator:"AND",conditions:[{id:"cond-1",questionId:"Q1",operator:"equals",value:"18–34"},{id:"cond-2",questionId:"Q2",operator:"equals",value:"Yes"}],isConfirmed:!1},S={args:{initialData:f,startEmpty:!0}},y={args:{initialData:f}},b={args:{initialData:z}},N={args:{initialData:T}},C={args:{initialData:{...T,id:"set-4",operator:"OR"}}},D={args:{initialData:{id:"set-5",operator:"AND",conditions:[{id:"cond-err-1",questionId:"",operator:"",value:""}],isConfirmed:!1},initialValidationErrorIds:["cond-err-1"]}},I={args:{initialData:f,actionValue:"show",headerContent:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-sm font-semibold text-[var(--on-surface)]",children:"Question 3"}),e.jsx("span",{className:"text-sm font-bold text-primary",children:"IF"})]})}},k={args:{initialData:f,transparentBackground:!0}},q={args:{initialData:{id:"set-6",operator:"AND",conditions:[{id:"cond-1",questionId:"Q1",operator:"equals",value:"18–34"}],isConfirmed:!1},showRowIfLabel:!0}},A={render:()=>e.jsxs("div",{className:"flex flex-col gap-6 w-[480px]",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-[var(--on-surface-variant)] uppercase tracking-wider mb-2",children:"Unconfirmed"}),e.jsx(h,{initialData:f})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-[var(--on-surface-variant)] uppercase tracking-wider mb-2",children:"Confirmed"}),e.jsx(h,{initialData:z})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-[var(--on-surface-variant)] uppercase tracking-wider mb-2",children:"Multiple Conditions (AND)"}),e.jsx(h,{initialData:T})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-[var(--on-surface-variant)] uppercase tracking-wider mb-2",children:"With Error"}),e.jsx(h,{initialData:{...z,id:"set-err"},issues:["Referenced question was deleted."]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-[var(--on-surface-variant)] uppercase tracking-wider mb-2",children:"With Action Bar"}),e.jsx(h,{initialData:f,actionValue:"show",headerContent:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-sm font-semibold text-[var(--on-surface)]",children:"Question 3"}),e.jsx("span",{className:"text-sm font-bold text-primary",children:"IF"})]})})]})]})};var P,F,$,H,Y;S.parameters={...S.parameters,docs:{...(P=S.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    initialData: unconfirmedSeed,
    startEmpty: true
  }
}`,...($=(F=S.parameters)==null?void 0:F.docs)==null?void 0:$.source},description:{story:'Empty state — no logic set added yet. Shows only the "+ Add logic set" ghost-primary button. Clicking it transitions to Unconfirmed.',...(Y=(H=S.parameters)==null?void 0:H.docs)==null?void 0:Y.description}}};var K,X,G,J,Z;y.parameters={...y.parameters,docs:{...(K=y.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    initialData: unconfirmedSeed
  }
}`,...(G=(X=y.parameters)==null?void 0:X.docs)==null?void 0:G.source},description:{story:"Initial editing state when a new rule is created. Primary border, surface-container-high background, Cancel + Apply buttons.",...(Z=(J=y.parameters)==null?void 0:J.docs)==null?void 0:Z.description}}};var ee,se,te,re,ae;b.parameters={...b.parameters,docs:{...(ee=b.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    initialData: confirmedSeed
  }
}`,...(te=(se=b.parameters)==null?void 0:se.docs)==null?void 0:te.source},description:{story:"Saved and confirmed rule. Outline-variant border, surface-container background, Delete button only.",...(ae=(re=b.parameters)==null?void 0:re.docs)==null?void 0:ae.description}}};var ie,ne,oe,de,ce;N.parameters={...N.parameters,docs:{...(ie=N.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    initialData: multiSeed
  }
}`,...(oe=(ne=N.parameters)==null?void 0:ne.docs)==null?void 0:oe.source},description:{story:"Two or more conditions — AND/OR toggle and row numbering appear.",...(ce=(de=N.parameters)==null?void 0:de.docs)==null?void 0:ce.description}}};var le,me,pe,ue,xe;C.parameters={...C.parameters,docs:{...(le=C.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    initialData: {
      ...multiSeed,
      id: 'set-4',
      operator: 'OR'
    }
  }
}`,...(pe=(me=C.parameters)==null?void 0:me.docs)==null?void 0:pe.source},description:{story:"Multiple conditions with OR operator active.",...(xe=(ue=C.parameters)==null?void 0:ue.docs)==null?void 0:xe.description}}};var he,fe,ve,ge,je;D.parameters={...D.parameters,docs:{...(he=D.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
    initialValidationErrorIds: ['cond-err-1']
  }
}`,...(ve=(fe=D.parameters)==null?void 0:fe.docs)==null?void 0:ve.source},description:{story:'Error state — triggered when the user clicks Apply with empty selects. Unconfirmed border, destructive styling on empty selects, warning icon next to "if".',...(je=(ge=D.parameters)==null?void 0:ge.docs)==null?void 0:je.description}}};var we,Se,ye,be,Ne;I.parameters={...I.parameters,docs:{...(we=I.parameters)==null?void 0:we.docs,source:{originalSource:`{
  args: {
    initialData: unconfirmedSeed,
    actionValue: 'show',
    headerContent: <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-[var(--on-surface)]">Question 3</span>
                <span className="text-sm font-bold text-primary">IF</span>
            </div>
  }
}`,...(ye=(Se=I.parameters)==null?void 0:Se.docs)==null?void 0:ye.source},description:{story:"With Show/Hide action bar and custom header — pattern used by DisplayLogicSet.",...(Ne=(be=I.parameters)==null?void 0:be.docs)==null?void 0:Ne.description}}};var Ce,De,Ie,ke,qe;k.parameters={...k.parameters,docs:{...(Ce=k.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  args: {
    initialData: unconfirmedSeed,
    transparentBackground: true
  }
}`,...(Ie=(De=k.parameters)==null?void 0:De.docs)==null?void 0:Ie.source},description:{story:"Transparent background — used when the LogicSet is nested inside another container.",...(qe=(ke=k.parameters)==null?void 0:ke.docs)==null?void 0:qe.description}}};var Ae,Ee,Le,Re,Oe;q.parameters={...q.parameters,docs:{...(Ae=q.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  args: {
    initialData: {
      id: 'set-6',
      operator: 'AND',
      conditions: [{
        id: 'cond-1',
        questionId: 'Q1',
        operator: 'equals',
        value: '18–34'
      }],
      isConfirmed: false
    },
    showRowIfLabel: true
  }
}`,...(Le=(Ee=q.parameters)==null?void 0:Ee.docs)==null?void 0:Le.source},description:{story:'Inline "if" label per row — pattern used by SkipLogicSet.',...(Oe=(Re=q.parameters)==null?void 0:Re.docs)==null?void 0:Oe.description}}};var Ve,Qe,Be,_e,Me;A.parameters={...A.parameters,docs:{...(Ve=A.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6 w-[480px]">
            <div>
                <p className="text-xs text-[var(--on-surface-variant)] uppercase tracking-wider mb-2">Unconfirmed</p>
                <LogicSetDisplay initialData={unconfirmedSeed} />
            </div>
            <div>
                <p className="text-xs text-[var(--on-surface-variant)] uppercase tracking-wider mb-2">Confirmed</p>
                <LogicSetDisplay initialData={confirmedSeed} />
            </div>
            <div>
                <p className="text-xs text-[var(--on-surface-variant)] uppercase tracking-wider mb-2">Multiple Conditions (AND)</p>
                <LogicSetDisplay initialData={multiSeed} />
            </div>
            <div>
                <p className="text-xs text-[var(--on-surface-variant)] uppercase tracking-wider mb-2">With Error</p>
                <LogicSetDisplay initialData={{
        ...confirmedSeed,
        id: 'set-err'
      }} issues={['Referenced question was deleted.']} />
            </div>
            <div>
                <p className="text-xs text-[var(--on-surface-variant)] uppercase tracking-wider mb-2">With Action Bar</p>
                <LogicSetDisplay initialData={unconfirmedSeed} actionValue="show" headerContent={<div className="flex items-center gap-2">
                            <span className="text-sm font-semibold text-[var(--on-surface)]">Question 3</span>
                            <span className="text-sm font-bold text-primary">IF</span>
                        </div>} />
            </div>
        </div>
}`,...(Be=(Qe=A.parameters)==null?void 0:Qe.docs)==null?void 0:Be.source},description:{story:"Overview of all states stacked.",...(Me=(_e=A.parameters)==null?void 0:_e.docs)==null?void 0:Me.description}}};const Vs=["Empty","Unconfirmed","Confirmed","MultipleConditions","MultipleConditionsOR","WithError","WithActionBar","TransparentBackground","WithRowIfLabel","AllStates"];export{A as AllStates,b as Confirmed,S as Empty,N as MultipleConditions,C as MultipleConditionsOR,k as TransparentBackground,y as Unconfirmed,I as WithActionBar,D as WithError,q as WithRowIfLabel,Vs as __namedExportsOrder,Os as default};
