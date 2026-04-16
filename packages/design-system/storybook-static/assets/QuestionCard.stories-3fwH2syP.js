import{j as e}from"./jsx-runtime-BYYWji4R.js";import{A as ve,a as De,b as ge}from"./alert-aj_NsfeP.js";import{B as we}from"./badge-CDZW3nus.js";import{c as Ce}from"./utils-CDN07tui.js";import{T as S}from"./textarea-C00EirGh.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-C2vczdB5.js";const r=()=>e.jsx("div",{className:"flex items-center justify-center w-5 cursor-grab opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground",children:e.jsx("span",{className:"material-symbols-rounded text-base select-none",children:"drag_indicator"})}),t=({id:i})=>e.jsx("span",{className:"text-xs font-mono font-semibold text-foreground uppercase tracking-wide",children:i}),a=({label:i})=>e.jsx(we,{variant:"outline",children:i}),l=()=>e.jsx("button",{className:"opacity-0 group-hover:opacity-100 transition-opacity p-1 rounded hover:bg-muted text-muted-foreground",children:e.jsx("span",{className:"material-symbols-rounded text-base leading-none",children:"more_horiz"})}),o=({children:i,isSelected:d,hasError:T,isDashed:Q,className:Se})=>e.jsx("div",{className:Ce("p-4 rounded-lg border transition-all group relative grid items-start gap-x-4 bg-card grid-cols-[auto_1fr]",d&&T&&"border-destructive shadow-md",d&&!T&&"border-primary shadow-md",!d&&Q&&"border-dashed border-primary/50",!d&&!Q&&"border-border-ui hover:shadow-md",Se),children:i}),c=({children:i})=>e.jsx("p",{className:"text-sm text-foreground mt-1 leading-snug",children:i}),s=({label:i,type:d="radio"})=>e.jsxs("div",{className:"flex items-center gap-2 py-1",children:[e.jsx("div",{className:Ce("w-4 h-4 border border-foreground flex-shrink-0",d==="radio"?"rounded-full":"rounded-sm")}),e.jsx("span",{className:"text-sm text-foreground",children:i})]}),Ne=({message:i})=>e.jsxs(ve,{className:"mt-3 py-2.5",children:[e.jsx("span",{className:"material-symbols-rounded text-base",children:"account_tree"}),e.jsx(ge,{className:"text-xs",children:i})]}),D=({message:i})=>e.jsxs(ve,{variant:"destructive",className:"mt-3 py-2.5",children:[e.jsx("span",{className:"material-symbols-rounded text-base",children:"error"}),e.jsx(De,{className:"text-xs font-semibold",children:"Logic Error"}),e.jsx(ge,{className:"text-xs",children:i})]}),Ae={title:"Survey Builder/Survey Canvas/QuestionCard",parameters:{layout:"padded",docs:{description:{component:`
**QuestionCard** is the primary editing unit in the Survey Canvas. Each question in a survey is represented by one card.

### Supported question types

| Type | Input preview |
|------|---------------|
| Multiple Choice (radio) | Circular radio options |
| Multiple Choice (checkbox) | Square checkbox options |
| Text Entry | Muted placeholder text area |
| Description / Info | Plain text block, no input |

### States

| State | Border | Shadow |
|-------|--------|--------|
| Default | \`border-border-ui\` | none |
| Hovered | \`border-border-ui\` | sm |
| Selected | \`border-primary\` | md |
| Selected + Logic Error | \`border-destructive\` | md |
| Display Logic (dashed) | \`border-primary/50 dashed\` | none |

### Logic alerts (inside question card)

Logic can be configured on any question (skip logic, display logic, branching). When a rule is configured, an \`Alert\` is rendered at the bottom of the card content area.

| State | Variant | Icon | When |
|-------|---------|------|------|
| Default | default (neutral) | \`account_tree\` | Rule is valid — shows the configured logic condition text |
| Error | \`destructive\` | \`error\` | Rule is broken — references a deleted question, choice, or page |

The dashed-border display logic state (\`isDashed\`) is used when the question's visibility is controlled by a logic rule — a \`Display Logic\` badge appears in the header alongside the type badge.
                `}}},tags:["autodocs"],decorators:[i=>e.jsx("div",{className:"max-w-2xl space-y-4 py-4",children:e.jsx(i,{})})]},n={name:"Multiple Choice / Radio — Default",render:()=>e.jsxs(o,{children:[e.jsx(r,{}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(t,{id:"Q1"}),e.jsx(a,{label:"Multiple Choice"})]}),e.jsx(l,{})]}),e.jsx(c,{children:"How satisfied are you with our service?"}),e.jsxs("div",{className:"mt-3 space-y-0.5",children:[e.jsx(s,{label:"Very satisfied"}),e.jsx(s,{label:"Satisfied"}),e.jsx(s,{label:"Neutral"}),e.jsx(s,{label:"Dissatisfied"})]})]})]})},m={name:"Multiple Choice / Radio — Selected",render:()=>e.jsxs(o,{isSelected:!0,children:[e.jsx(r,{}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(t,{id:"Q1"}),e.jsx(a,{label:"Multiple Choice"})]}),e.jsx(l,{})]}),e.jsx(c,{children:"How satisfied are you with our service?"}),e.jsxs("div",{className:"mt-3 space-y-0.5",children:[e.jsx(s,{label:"Very satisfied"}),e.jsx(s,{label:"Satisfied"}),e.jsx(s,{label:"Neutral"}),e.jsx(s,{label:"Dissatisfied"})]})]})]})},x={name:"Multiple Choice / Radio — Logic Error",render:()=>e.jsxs(o,{isSelected:!0,hasError:!0,children:[e.jsx(r,{}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(t,{id:"Q1"}),e.jsx(a,{label:"Multiple Choice"})]}),e.jsx(l,{})]}),e.jsx(c,{children:"How satisfied are you with our service?"}),e.jsxs("div",{className:"mt-3 space-y-0.5",children:[e.jsx(s,{label:"Very satisfied"}),e.jsx(s,{label:"Satisfied"}),e.jsx(s,{label:"Neutral"}),e.jsx(s,{label:"Dissatisfied"})]}),e.jsx(D,{message:"Skip logic references Q4 which no longer exists. Update or remove this rule."})]})]})},h={name:"Multiple Choice / Checkbox — Default",render:()=>e.jsxs(o,{children:[e.jsx(r,{}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(t,{id:"Q2"}),e.jsx(a,{label:"Checkbox"})]}),e.jsx(l,{})]}),e.jsx(c,{children:"Which of the following apply to you? (Select all that apply)"}),e.jsxs("div",{className:"mt-3 space-y-0.5",children:[e.jsx(s,{label:"I use this product daily",type:"checkbox"}),e.jsx(s,{label:"I have recommended it to others",type:"checkbox"}),e.jsx(s,{label:"I would pay more for premium features",type:"checkbox"})]})]})]})},p={name:"Multiple Choice / Checkbox — Selected",render:()=>e.jsxs(o,{isSelected:!0,children:[e.jsx(r,{}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(t,{id:"Q2"}),e.jsx(a,{label:"Checkbox"})]}),e.jsx(l,{})]}),e.jsx(c,{children:"Which of the following apply to you? (Select all that apply)"}),e.jsxs("div",{className:"mt-3 space-y-0.5",children:[e.jsx(s,{label:"I use this product daily",type:"checkbox"}),e.jsx(s,{label:"I have recommended it to others",type:"checkbox"}),e.jsx(s,{label:"I would pay more for premium features",type:"checkbox"})]})]})]})},u={name:"Multiple Choice / Checkbox — Logic Error",render:()=>e.jsxs(o,{isSelected:!0,hasError:!0,children:[e.jsx(r,{}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(t,{id:"Q2"}),e.jsx(a,{label:"Checkbox"})]}),e.jsx(l,{})]}),e.jsx(c,{children:"Which of the following apply to you? (Select all that apply)"}),e.jsxs("div",{className:"mt-3 space-y-0.5",children:[e.jsx(s,{label:"I use this product daily",type:"checkbox"}),e.jsx(s,{label:"I have recommended it to others",type:"checkbox"}),e.jsx(s,{label:"I would pay more for premium features",type:"checkbox"})]}),e.jsx(D,{message:"Display logic references a deleted choice. Remove or update the condition."})]})]})},f={name:"Text Entry — Default",render:()=>e.jsxs(o,{children:[e.jsx(r,{}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(t,{id:"Q3"}),e.jsx(a,{label:"Text Entry"})]}),e.jsx(l,{})]}),e.jsx(c,{children:"Please describe your experience in detail."}),e.jsx(S,{className:"mt-3",placeholder:"Respondent types a free-text answer here...",readOnly:!0})]})]})},y={name:"Text Entry — Selected",render:()=>e.jsxs(o,{isSelected:!0,children:[e.jsx(r,{}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(t,{id:"Q3"}),e.jsx(a,{label:"Text Entry"})]}),e.jsx(l,{})]}),e.jsx(c,{children:"Please describe your experience in detail."}),e.jsx(S,{className:"mt-3",placeholder:"Respondent types a free-text answer here...",readOnly:!0})]})]})},b={name:"Text Entry — Logic Error",render:()=>e.jsxs(o,{isSelected:!0,hasError:!0,children:[e.jsx(r,{}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(t,{id:"Q3"}),e.jsx(a,{label:"Text Entry"})]}),e.jsx(l,{})]}),e.jsx(c,{children:"Please describe your experience in detail."}),e.jsx(S,{className:"mt-3",placeholder:"Respondent types a free-text answer here...",readOnly:!0}),e.jsx(D,{message:"Branch logic jumps to Q7 which is on a previous page. Forward-only branching required."})]})]})},j={name:"Multiple Choice / Radio — With Logic",render:()=>e.jsxs(o,{isSelected:!0,children:[e.jsx(r,{}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(t,{id:"Q1"}),e.jsx(a,{label:"Multiple Choice"})]}),e.jsx(l,{})]}),e.jsx(c,{children:"How satisfied are you with our service?"}),e.jsxs("div",{className:"mt-3 space-y-0.5",children:[e.jsx(s,{label:"Very satisfied"}),e.jsx(s,{label:"Satisfied"}),e.jsx(s,{label:"Neutral"}),e.jsx(s,{label:"Dissatisfied"})]}),e.jsx(Ne,{message:"Skip to Q4 if respondent selects 'Very satisfied' or 'Satisfied'"})]})]})},v={name:"Text Entry — With Logic",render:()=>e.jsxs(o,{isSelected:!0,children:[e.jsx(r,{}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(t,{id:"Q3"}),e.jsx(a,{label:"Text Entry"})]}),e.jsx(l,{})]}),e.jsx(c,{children:"Please describe your experience in detail."}),e.jsx(S,{className:"mt-3",placeholder:"Respondent types a free-text answer here...",readOnly:!0}),e.jsx(Ne,{message:"Display only if Q1 = 'Dissatisfied' or 'Neutral'"})]})]})},g={name:"Description / Info — Default",render:()=>e.jsxs(o,{children:[e.jsx(r,{}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(t,{id:"Q4"}),e.jsx(a,{label:"Description"})]}),e.jsx(l,{})]}),e.jsx("div",{className:"mt-1 text-sm text-foreground leading-relaxed",children:"Thank you for completing this section. The following questions will ask about your most recent support interaction."})]})]})},w={name:"Description / Info — Selected",render:()=>e.jsxs(o,{isSelected:!0,children:[e.jsx(r,{}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(t,{id:"Q4"}),e.jsx(a,{label:"Description"})]}),e.jsx(l,{})]}),e.jsx("div",{className:"mt-1 text-sm text-foreground leading-relaxed",children:"Thank you for completing this section. The following questions will ask about your most recent support interaction."})]})]})},C={name:"Description / Info — Display Logic (dashed border)",render:()=>e.jsxs(o,{isDashed:!0,children:[e.jsx(r,{}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(t,{id:"Q4"}),e.jsx(a,{label:"Description"}),e.jsx(we,{variant:"secondary",children:"Display Logic"})]}),e.jsx(l,{})]}),e.jsx("div",{className:"mt-1 text-sm text-foreground leading-relaxed",children:'Shown only to respondents who selected "Dissatisfied" in Q1.'})]})]})},N={name:"Description / Info — Logic Error",render:()=>e.jsxs(o,{isSelected:!0,hasError:!0,children:[e.jsx(r,{}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(t,{id:"Q4"}),e.jsx(a,{label:"Description"})]}),e.jsx(l,{})]}),e.jsx("div",{className:"mt-1 text-sm text-foreground leading-relaxed",children:"Thank you for completing this section."}),e.jsx(D,{message:"Display logic references Q1 which was deleted. This block will always be shown."})]})]})};var k,E,M;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Multiple Choice / Radio — Default',
  render: () => <CardShell>
            <DragHandle />
            <div>
                <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                        <QuestionId id="Q1" />
                        <TypeBadge label="Multiple Choice" />
                    </div>
                    <ActionsMenu />
                </div>
                <QuestionText>How satisfied are you with our service?</QuestionText>
                <div className="mt-3 space-y-0.5">
                    <ChoiceRow label="Very satisfied" />
                    <ChoiceRow label="Satisfied" />
                    <ChoiceRow label="Neutral" />
                    <ChoiceRow label="Dissatisfied" />
                </div>
            </div>
        </CardShell>
}`,...(M=(E=n.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var R,I,L;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Multiple Choice / Radio — Selected',
  render: () => <CardShell isSelected>
            <DragHandle />
            <div>
                <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                        <QuestionId id="Q1" />
                        <TypeBadge label="Multiple Choice" />
                    </div>
                    <ActionsMenu />
                </div>
                <QuestionText>How satisfied are you with our service?</QuestionText>
                <div className="mt-3 space-y-0.5">
                    <ChoiceRow label="Very satisfied" />
                    <ChoiceRow label="Satisfied" />
                    <ChoiceRow label="Neutral" />
                    <ChoiceRow label="Dissatisfied" />
                </div>
            </div>
        </CardShell>
}`,...(L=(I=m.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var A,H,B;x.parameters={...x.parameters,docs:{...(A=x.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Multiple Choice / Radio — Logic Error',
  render: () => <CardShell isSelected hasError>
            <DragHandle />
            <div>
                <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                        <QuestionId id="Q1" />
                        <TypeBadge label="Multiple Choice" />
                    </div>
                    <ActionsMenu />
                </div>
                <QuestionText>How satisfied are you with our service?</QuestionText>
                <div className="mt-3 space-y-0.5">
                    <ChoiceRow label="Very satisfied" />
                    <ChoiceRow label="Satisfied" />
                    <ChoiceRow label="Neutral" />
                    <ChoiceRow label="Dissatisfied" />
                </div>
                <LogicErrorAlert message="Skip logic references Q4 which no longer exists. Update or remove this rule." />
            </div>
        </CardShell>
}`,...(B=(H=x.parameters)==null?void 0:H.docs)==null?void 0:B.source}}};var W,q,V;h.parameters={...h.parameters,docs:{...(W=h.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'Multiple Choice / Checkbox — Default',
  render: () => <CardShell>
            <DragHandle />
            <div>
                <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                        <QuestionId id="Q2" />
                        <TypeBadge label="Checkbox" />
                    </div>
                    <ActionsMenu />
                </div>
                <QuestionText>Which of the following apply to you? (Select all that apply)</QuestionText>
                <div className="mt-3 space-y-0.5">
                    <ChoiceRow label="I use this product daily" type="checkbox" />
                    <ChoiceRow label="I have recommended it to others" type="checkbox" />
                    <ChoiceRow label="I would pay more for premium features" type="checkbox" />
                </div>
            </div>
        </CardShell>
}`,...(V=(q=h.parameters)==null?void 0:q.docs)==null?void 0:V.source}}};var O,P,_;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Multiple Choice / Checkbox — Selected',
  render: () => <CardShell isSelected>
            <DragHandle />
            <div>
                <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                        <QuestionId id="Q2" />
                        <TypeBadge label="Checkbox" />
                    </div>
                    <ActionsMenu />
                </div>
                <QuestionText>Which of the following apply to you? (Select all that apply)</QuestionText>
                <div className="mt-3 space-y-0.5">
                    <ChoiceRow label="I use this product daily" type="checkbox" />
                    <ChoiceRow label="I have recommended it to others" type="checkbox" />
                    <ChoiceRow label="I would pay more for premium features" type="checkbox" />
                </div>
            </div>
        </CardShell>
}`,...(_=(P=p.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};var F,U,z;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Multiple Choice / Checkbox — Logic Error',
  render: () => <CardShell isSelected hasError>
            <DragHandle />
            <div>
                <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                        <QuestionId id="Q2" />
                        <TypeBadge label="Checkbox" />
                    </div>
                    <ActionsMenu />
                </div>
                <QuestionText>Which of the following apply to you? (Select all that apply)</QuestionText>
                <div className="mt-3 space-y-0.5">
                    <ChoiceRow label="I use this product daily" type="checkbox" />
                    <ChoiceRow label="I have recommended it to others" type="checkbox" />
                    <ChoiceRow label="I would pay more for premium features" type="checkbox" />
                </div>
                <LogicErrorAlert message="Display logic references a deleted choice. Remove or update the condition." />
            </div>
        </CardShell>
}`,...(z=(U=u.parameters)==null?void 0:U.docs)==null?void 0:z.source}}};var G,J,K;f.parameters={...f.parameters,docs:{...(G=f.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'Text Entry — Default',
  render: () => <CardShell>
            <DragHandle />
            <div>
                <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                        <QuestionId id="Q3" />
                        <TypeBadge label="Text Entry" />
                    </div>
                    <ActionsMenu />
                </div>
                <QuestionText>Please describe your experience in detail.</QuestionText>
                <Textarea className="mt-3" placeholder="Respondent types a free-text answer here..." readOnly />
            </div>
        </CardShell>
}`,...(K=(J=f.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var X,Y,Z;y.parameters={...y.parameters,docs:{...(X=y.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: 'Text Entry — Selected',
  render: () => <CardShell isSelected>
            <DragHandle />
            <div>
                <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                        <QuestionId id="Q3" />
                        <TypeBadge label="Text Entry" />
                    </div>
                    <ActionsMenu />
                </div>
                <QuestionText>Please describe your experience in detail.</QuestionText>
                <Textarea className="mt-3" placeholder="Respondent types a free-text answer here..." readOnly />
            </div>
        </CardShell>
}`,...(Z=(Y=y.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,se;b.parameters={...b.parameters,docs:{...($=b.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'Text Entry — Logic Error',
  render: () => <CardShell isSelected hasError>
            <DragHandle />
            <div>
                <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                        <QuestionId id="Q3" />
                        <TypeBadge label="Text Entry" />
                    </div>
                    <ActionsMenu />
                </div>
                <QuestionText>Please describe your experience in detail.</QuestionText>
                <Textarea className="mt-3" placeholder="Respondent types a free-text answer here..." readOnly />
                <LogicErrorAlert message="Branch logic jumps to Q7 which is on a previous page. Forward-only branching required." />
            </div>
        </CardShell>
}`,...(se=(ee=b.parameters)==null?void 0:ee.docs)==null?void 0:se.source}}};var ie,re,te;j.parameters={...j.parameters,docs:{...(ie=j.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  name: 'Multiple Choice / Radio — With Logic',
  render: () => <CardShell isSelected>
            <DragHandle />
            <div>
                <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                        <QuestionId id="Q1" />
                        <TypeBadge label="Multiple Choice" />
                    </div>
                    <ActionsMenu />
                </div>
                <QuestionText>How satisfied are you with our service?</QuestionText>
                <div className="mt-3 space-y-0.5">
                    <ChoiceRow label="Very satisfied" />
                    <ChoiceRow label="Satisfied" />
                    <ChoiceRow label="Neutral" />
                    <ChoiceRow label="Dissatisfied" />
                </div>
                <LogicAlert message="Skip to Q4 if respondent selects 'Very satisfied' or 'Satisfied'" />
            </div>
        </CardShell>
}`,...(te=(re=j.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var ae,le,oe;v.parameters={...v.parameters,docs:{...(ae=v.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  name: 'Text Entry — With Logic',
  render: () => <CardShell isSelected>
            <DragHandle />
            <div>
                <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                        <QuestionId id="Q3" />
                        <TypeBadge label="Text Entry" />
                    </div>
                    <ActionsMenu />
                </div>
                <QuestionText>Please describe your experience in detail.</QuestionText>
                <Textarea className="mt-3" placeholder="Respondent types a free-text answer here..." readOnly />
                <LogicAlert message="Display only if Q1 = 'Dissatisfied' or 'Neutral'" />
            </div>
        </CardShell>
}`,...(oe=(le=v.parameters)==null?void 0:le.docs)==null?void 0:oe.source}}};var ce,de,ne;g.parameters={...g.parameters,docs:{...(ce=g.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  name: 'Description / Info — Default',
  render: () => <CardShell>
            <DragHandle />
            <div>
                <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                        <QuestionId id="Q4" />
                        <TypeBadge label="Description" />
                    </div>
                    <ActionsMenu />
                </div>
                <div className="mt-1 text-sm text-foreground leading-relaxed">
                    Thank you for completing this section. The following questions will ask about your most recent support interaction.
                </div>
            </div>
        </CardShell>
}`,...(ne=(de=g.parameters)==null?void 0:de.docs)==null?void 0:ne.source}}};var me,xe,he;w.parameters={...w.parameters,docs:{...(me=w.parameters)==null?void 0:me.docs,source:{originalSource:`{
  name: 'Description / Info — Selected',
  render: () => <CardShell isSelected>
            <DragHandle />
            <div>
                <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                        <QuestionId id="Q4" />
                        <TypeBadge label="Description" />
                    </div>
                    <ActionsMenu />
                </div>
                <div className="mt-1 text-sm text-foreground leading-relaxed">
                    Thank you for completing this section. The following questions will ask about your most recent support interaction.
                </div>
            </div>
        </CardShell>
}`,...(he=(xe=w.parameters)==null?void 0:xe.docs)==null?void 0:he.source}}};var pe,ue,fe;C.parameters={...C.parameters,docs:{...(pe=C.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  name: 'Description / Info — Display Logic (dashed border)',
  render: () => <CardShell isDashed>
            <DragHandle />
            <div>
                <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                        <QuestionId id="Q4" />
                        <TypeBadge label="Description" />
                        <Badge variant="secondary">Display Logic</Badge>
                    </div>
                    <ActionsMenu />
                </div>
                <div className="mt-1 text-sm text-foreground leading-relaxed">
                    Shown only to respondents who selected "Dissatisfied" in Q1.
                </div>
            </div>
        </CardShell>
}`,...(fe=(ue=C.parameters)==null?void 0:ue.docs)==null?void 0:fe.source}}};var ye,be,je;N.parameters={...N.parameters,docs:{...(ye=N.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  name: 'Description / Info — Logic Error',
  render: () => <CardShell isSelected hasError>
            <DragHandle />
            <div>
                <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                        <QuestionId id="Q4" />
                        <TypeBadge label="Description" />
                    </div>
                    <ActionsMenu />
                </div>
                <div className="mt-1 text-sm text-foreground leading-relaxed">
                    Thank you for completing this section.
                </div>
                <LogicErrorAlert message="Display logic references Q1 which was deleted. This block will always be shown." />
            </div>
        </CardShell>
}`,...(je=(be=N.parameters)==null?void 0:be.docs)==null?void 0:je.source}}};const He=["MultipleChoiceRadioDefault","MultipleChoiceRadioSelected","MultipleChoiceRadioError","MultipleChoiceCheckboxDefault","MultipleChoiceCheckboxSelected","MultipleChoiceCheckboxError","TextEntryDefault","TextEntrySelected","TextEntryError","MultipleChoiceRadioWithLogic","TextEntryWithLogic","DescriptionDefault","DescriptionSelected","DescriptionWithDisplayLogic","DescriptionError"];export{g as DescriptionDefault,N as DescriptionError,w as DescriptionSelected,C as DescriptionWithDisplayLogic,h as MultipleChoiceCheckboxDefault,u as MultipleChoiceCheckboxError,p as MultipleChoiceCheckboxSelected,n as MultipleChoiceRadioDefault,x as MultipleChoiceRadioError,m as MultipleChoiceRadioSelected,j as MultipleChoiceRadioWithLogic,f as TextEntryDefault,b as TextEntryError,y as TextEntrySelected,v as TextEntryWithLogic,He as __namedExportsOrder,Ae as default};
