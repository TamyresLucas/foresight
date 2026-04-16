import{j as n}from"./jsx-runtime-BYYWji4R.js";import{r as g}from"./index-ClcD9ViR.js";import{fn as Q}from"./index-DgAF9SIF.js";import{c as x}from"./utils-CDN07tui.js";import"./_commonjsHelpers-Cpj98o6Y.js";function U({value:i,onChange:V,placeholder:c="Click to edit…",disabled:e=!1,className:m,_forceEditing:z=!1}){const[G,u]=g.useState(z),[d,p]=g.useState(i),f=()=>{e||u(!0)},b=()=>{u(!1),V(d)},J=l=>{l.key==="Enter"&&b(),l.key==="Escape"&&(p(i),u(!1))};return G?n.jsx("input",{autoFocus:!0,value:d,placeholder:c,onChange:l=>p(l.target.value),onBlur:b,onKeyDown:J,className:x("outline-none bg-transparent w-full border-b-2 border-primary","placeholder:text-muted-foreground/60",m)}):n.jsx("div",{role:"textbox",tabIndex:e?-1:0,"aria-disabled":e,"aria-placeholder":c,onClick:f,onFocus:f,className:x("outline-none break-words min-h-[1.25em]",!e&&"hover:border-b hover:border-primary/30 cursor-text",e&&"cursor-default select-text opacity-50",!d&&"text-muted-foreground italic",m),children:d||n.jsx("span",{className:"italic text-muted-foreground",children:c})})}const ee={title:"Survey Builder/Survey Canvas/EditableText",component:U,parameters:{docs:{description:{component:'\n**EditableText** is an inline click-to-edit text field used throughout the Survey Canvas for question titles, block headings, and choice labels. It renders as styled text at rest and switches to a native `<input>` on click or keyboard focus.\n\n> **Note:** `EditableText.tsx` has not been implemented yet — this stories file documents the agreed API and all visual states prior to implementation.\n\n### Behaviour\n\n| State | Trigger | Visual |\n|-------|---------|--------|\n| **Default** | — | Plain text; subtle underline appears on hover |\n| **Editing** | click / Tab | Native input with solid `border-primary` underline; commits on blur or Enter; cancels on Escape |\n| **Empty** | `value=""` | Italic muted placeholder text |\n| **Disabled** | `disabled={true}` | 50% opacity, `cursor-default`, no hover affordance |\n\n### Props\n\n| Prop | Type | Default |\n|------|------|---------|\n| `value` | `string` | required |\n| `onChange` | `(value: string) => void` | required |\n| `placeholder` | `string` | `"Click to edit…"` |\n| `disabled` | `boolean` | `false` |\n| `className` | `string` | — |\n                '}}},tags:["autodocs"],args:{onChange:Q()},argTypes:{_forceEditing:{table:{disable:!0}}},decorators:[i=>n.jsx("div",{className:"w-[420px] p-6 border border-border-ui rounded-lg bg-card",children:n.jsx(i,{})})]},t={name:"Default",args:{value:"How satisfied are you with our service?",className:"font-semibold text-base text-foreground"}},r={name:"Editing",args:{value:"How satisfied are you with our service?",className:"font-semibold text-base text-foreground",_forceEditing:!0}},o={name:"Empty",args:{value:"",placeholder:"Enter question text…",className:"font-semibold text-base text-foreground"}},a={name:"Long Text",args:{value:"On a scale from 1 to 10, how likely are you to recommend our product or service to a friend, colleague, or family member based on your most recent interaction with our support team?",className:"text-base text-foreground"}},s={name:"Disabled",args:{value:"How satisfied are you with our service?",disabled:!0,className:"font-semibold text-base text-foreground"}};var y,h,v,E,w;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  // eslint-disable-next-line storybook/no-redundant-story-name
  name: 'Default',
  args: {
    value: 'How satisfied are you with our service?',
    className: 'font-semibold text-base text-foreground'
  }
}`,...(v=(h=t.parameters)==null?void 0:h.docs)==null?void 0:v.source},description:{story:"Default — text at rest. Hover to see the underline affordance; click to enter editing mode.",...(w=(E=t.parameters)==null?void 0:E.docs)==null?void 0:w.description}}};var k,N,D,T,S;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
  // eslint-disable-next-line storybook/no-redundant-story-name
  name: 'Editing',
  args: {
    value: 'How satisfied are you with our service?',
    className: 'font-semibold text-base text-foreground',
    _forceEditing: true
  }
}`,...(D=(N=r.parameters)==null?void 0:N.docs)==null?void 0:D.source},description:{story:"Editing — the inline input is active with the text selected, ready for the user to type.",...(S=(T=r.parameters)==null?void 0:T.docs)==null?void 0:S.description}}};var C,j,H,q,I;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  // eslint-disable-next-line storybook/no-redundant-story-name
  name: 'Empty',
  args: {
    value: '',
    placeholder: 'Enter question text…',
    className: 'font-semibold text-base text-foreground'
  }
}`,...(H=(j=o.parameters)==null?void 0:j.docs)==null?void 0:H.source},description:{story:"Empty — no value set. The placeholder text is visible until the user types.",...(I=(q=o.parameters)==null?void 0:q.docs)==null?void 0:I.description}}};var L,_,P,B,O;a.parameters={...a.parameters,docs:{...(L=a.parameters)==null?void 0:L.docs,source:{originalSource:`{
  // eslint-disable-next-line storybook/no-redundant-story-name
  name: 'Long Text',
  args: {
    value: 'On a scale from 1 to 10, how likely are you to recommend our product or service to a friend, colleague, or family member based on your most recent interaction with our support team?',
    className: 'text-base text-foreground'
  }
}`,...(P=(_=a.parameters)==null?void 0:_.docs)==null?void 0:P.source},description:{story:"Long Text — verifies multi-line wrapping within a constrained container.",...(O=(B=a.parameters)==null?void 0:B.docs)==null?void 0:O.description}}};var F,K,A,M,R;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`{
  // eslint-disable-next-line storybook/no-redundant-story-name
  name: 'Disabled',
  args: {
    value: 'How satisfied are you with our service?',
    disabled: true,
    className: 'font-semibold text-base text-foreground'
  }
}`,...(A=(K=s.parameters)==null?void 0:K.docs)==null?void 0:A.source},description:{story:"Disabled — read-only state used in print mode or locked surveys. No interaction affordances are shown.",...(R=(M=s.parameters)==null?void 0:M.docs)==null?void 0:R.description}}};const te=["Default","Editing","Empty","LongText","Disabled"];export{t as Default,s as Disabled,r as Editing,o as Empty,a as LongText,te as __namedExportsOrder,ee as default};
