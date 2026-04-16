import{j as e}from"./jsx-runtime-BYYWji4R.js";import{fn as s}from"./index-DgAF9SIF.js";import{c as m}from"./utils-CDN07tui.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";function i({isActive:r=!1,position:p="after",onDrop:l}){return e.jsx("div",{"aria-label":`Drop zone — insert ${p==="before"?"before":"after"} this question`,role:"region",onDrop:u=>{u.preventDefault(),l==null||l()},onDragOver:u=>u.preventDefault(),className:m("w-full flex items-center justify-center transition-all duration-150",r?"h-10 py-1":"h-3 py-0.5"),children:e.jsx("div",{className:m("w-full rounded transition-all duration-150",r?"h-8 border-2 border-dashed border-primary bg-primary/5 flex items-center justify-center gap-2 text-primary":"h-0.5 bg-border-ui/40"),children:r&&e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"material-symbols-rounded text-base leading-none select-none",children:p==="before"?"move_up":"move_down"}),e.jsxs("span",{className:"text-xs font-medium",children:["Drop ",p==="before"?"before":"after"," this question"]})]})})})}function t({label:r}){return e.jsxs("div",{className:"w-full px-4 py-3 rounded-lg border border-border-ui bg-card flex items-center gap-3",children:[e.jsx("span",{className:"material-symbols-rounded text-base text-muted-foreground select-none",children:"drag_indicator"}),e.jsx("span",{className:"text-sm text-foreground font-medium",children:r})]})}const T={title:"Survey Builder/Survey Canvas/QuestionDropZone",component:i,parameters:{docs:{description:{component:"\n**QuestionDropZone** is a thin drop-target strip that appears between question cards in a **SurveyBlock** during a drag operation. At rest it is nearly invisible (a 2 px separator line). When a dragged item hovers over it, it expands to a highlighted 32 px zone that clearly communicates where the item will be inserted.\n\n> **Note:** `QuestionDropZone.tsx` has not been implemented yet — this stories file documents the agreed API and visual states.\n\n### States\n\n| `isActive` | Visual |\n|-------------|--------|\n| `false` (default) | 2 px muted separator line — nearly invisible |\n| `true` | 32 px dashed primary border + tinted background + directional icon |\n\n### Props\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `isActive` | `boolean` | `false` | Whether a drag is hovering over this zone |\n| `position` | `'before' \\| 'after'` | `'after'` | Where the item will be inserted relative to the adjacent card |\n| `onDrop` | `() => void` | — | Fired when the user releases the dragged item |\n                "}}},tags:["autodocs"],args:{isActive:!1,position:"after",onDrop:s()},decorators:[r=>e.jsx("div",{className:"w-[460px] p-4",children:e.jsx(r,{})})]},o={name:"Default",args:{isActive:!1,position:"after"}},a={name:"Active",args:{isActive:!0,position:"after"}},n={name:"Before (position)",render:r=>e.jsxs("div",{className:"w-[460px] p-4 space-y-0",children:[e.jsx(i,{...r,position:"before"}),e.jsx(t,{label:"How satisfied are you with our service?"})]}),args:{isActive:!0,position:"before",onDrop:s()}},d={name:"After (position)",render:r=>e.jsxs("div",{className:"w-[460px] p-4 space-y-0",children:[e.jsx(t,{label:"How satisfied are you with our service?"}),e.jsx(i,{...r,position:"after"})]}),args:{isActive:!0,position:"after",onDrop:s()}},c={name:"Overview",render:()=>e.jsxs("div",{className:"w-[460px] p-4 space-y-0",children:[e.jsx("p",{className:"text-xs text-muted-foreground uppercase tracking-wider mb-3",children:"Inactive (rest)"}),e.jsx(t,{label:"Question 1"}),e.jsx(i,{isActive:!1,position:"after",onDrop:s()}),e.jsx(t,{label:"Question 2"}),e.jsx("div",{className:"mt-6 mb-3",children:e.jsx("p",{className:"text-xs text-muted-foreground uppercase tracking-wider",children:"Active — insert before"})}),e.jsx(i,{isActive:!0,position:"before",onDrop:s()}),e.jsx(t,{label:"Question 3"}),e.jsx("div",{className:"mt-6 mb-3",children:e.jsx("p",{className:"text-xs text-muted-foreground uppercase tracking-wider",children:"Active — insert after"})}),e.jsx(t,{label:"Question 4"}),e.jsx(i,{isActive:!0,position:"after",onDrop:s()})]})};var f,x,v,b,g;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  // eslint-disable-next-line storybook/no-redundant-story-name
  name: 'Default',
  args: {
    isActive: false,
    position: 'after'
  }
}`,...(v=(x=o.parameters)==null?void 0:x.docs)==null?void 0:v.source},description:{story:"Default — the zone at rest. Renders as a near-invisible 2 px separator between question cards.",...(g=(b=o.parameters)==null?void 0:b.docs)==null?void 0:g.description}}};var h,w,y,j,A;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  // eslint-disable-next-line storybook/no-redundant-story-name
  name: 'Active',
  args: {
    isActive: true,
    position: 'after'
  }
}`,...(y=(w=a.parameters)==null?void 0:w.docs)==null?void 0:y.source},description:{story:"Active — a question or toolbox item is being dragged over this zone. The strip expands and highlights to invite a drop.",...(A=(j=a.parameters)==null?void 0:j.docs)==null?void 0:A.description}}};var D,N,k,Q,F;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Before (position)',
  render: args => <div className="w-[460px] p-4 space-y-0">
            <QuestionDropZoneMock {...args} position="before" />
            <FakeQuestionCard label="How satisfied are you with our service?" />
        </div>,
  args: {
    isActive: true,
    position: 'before',
    onDrop: fn()
  }
}`,...(k=(N=n.parameters)==null?void 0:N.docs)==null?void 0:k.source},description:{story:"Before — zone positioned above a card, indicating the dropped item will be inserted before it.",...(F=(Q=n.parameters)==null?void 0:Q.docs)==null?void 0:F.description}}};var S,Z,C,z,B;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'After (position)',
  render: args => <div className="w-[460px] p-4 space-y-0">
            <FakeQuestionCard label="How satisfied are you with our service?" />
            <QuestionDropZoneMock {...args} position="after" />
        </div>,
  args: {
    isActive: true,
    position: 'after',
    onDrop: fn()
  }
}`,...(C=(Z=d.parameters)==null?void 0:Z.docs)==null?void 0:C.source},description:{story:"After — zone positioned below a card, indicating the dropped item will be inserted after it.",...(B=(z=d.parameters)==null?void 0:z.docs)==null?void 0:B.description}}};var O,q,M,_,H;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  // eslint-disable-next-line storybook/no-redundant-story-name
  name: 'Overview',
  render: () => <div className="w-[460px] p-4 space-y-0">
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">Inactive (rest)</p>
            <FakeQuestionCard label="Question 1" />
            <QuestionDropZoneMock isActive={false} position="after" onDrop={fn()} />
            <FakeQuestionCard label="Question 2" />

            <div className="mt-6 mb-3">
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Active — insert before</p>
            </div>
            <QuestionDropZoneMock isActive position="before" onDrop={fn()} />
            <FakeQuestionCard label="Question 3" />

            <div className="mt-6 mb-3">
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Active — insert after</p>
            </div>
            <FakeQuestionCard label="Question 4" />
            <QuestionDropZoneMock isActive position="after" onDrop={fn()} />
        </div>
}`,...(M=(q=c.parameters)==null?void 0:q.docs)==null?void 0:M.source},description:{story:"Overview — all states shown in context with adjacent question cards.",...(H=(_=c.parameters)==null?void 0:_.docs)==null?void 0:H.description}}};const V=["Default","Active","Before","After","Overview"];export{a as Active,d as After,n as Before,o as Default,c as Overview,V as __namedExportsOrder,T as default};
