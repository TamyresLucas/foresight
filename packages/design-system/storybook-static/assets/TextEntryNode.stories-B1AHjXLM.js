import{j as o}from"./jsx-runtime-BYYWji4R.js";import{D as t}from"./DiagramCanvas-DNcpU9lZ.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./value-CErw7IZC.js";import"./index-NDK0uC61.js";import"./index-Drr-0Uuw.js";import"./icons-BJRAOfCp.js";import"./icon-CPjmVJEk.js";import"./utils-CDN07tui.js";const V={title:"Survey Builder/Logic/Nodes/TextEntryNode",parameters:{layout:"centered",docs:{description:{component:`
**TextEntryNode** represents an open-ended question where the respondent types a free-text answer.

- Header shows \`variableName\` (bold) + \`question\` text
- Body shows a static placeholder: *"Respondent provides a text-based answer."*
- Has one **input handle** (left) and one **output handle** (right)
- Use for: names, emails, comments, open feedback, numeric inputs
                `}}},tags:["autodocs"],decorators:[r=>o.jsx("div",{style:{width:500,height:250},children:o.jsx(r,{})})]},n=(r,v)=>[{id:"q1",type:"textEntry",position:{x:80,y:60},data:r,...v}],e={render:()=>o.jsx(t,{nodes:n({variableName:"Q1",question:"What is your name?"}),edges:[],showControls:!1,showBackground:!1,fitView:!0,nodesDraggable:!1,panOnDrag:!1,zoomOnScroll:!1})},a={render:()=>o.jsx(t,{nodes:n({variableName:"Feedback",question:"Please describe in detail your overall experience with our product and support team."}),edges:[],showControls:!1,showBackground:!1,fitView:!0,nodesDraggable:!1,panOnDrag:!1,zoomOnScroll:!1})},s={render:()=>o.jsx(t,{nodes:n({variableName:"Email",question:"What is your email address?"},{selected:!0}),edges:[],showControls:!1,showBackground:!1,fitView:!0,nodesDraggable:!1,panOnDrag:!1,zoomOnScroll:!1})};var d,i,l,c,p;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <DiagramCanvas nodes={node({
    variableName: 'Q1',
    question: 'What is your name?'
  })} edges={[]} showControls={false} showBackground={false} fitView nodesDraggable={false} panOnDrag={false} zoomOnScroll={false} />
}`,...(l=(i=e.parameters)==null?void 0:i.docs)==null?void 0:l.source},description:{story:"A short question with a variable name.",...(p=(c=e.parameters)==null?void 0:c.docs)==null?void 0:p.description}}};var m,u,f,g,h;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <DiagramCanvas nodes={node({
    variableName: 'Feedback',
    question: 'Please describe in detail your overall experience with our product and support team.'
  })} edges={[]} showControls={false} showBackground={false} fitView nodesDraggable={false} panOnDrag={false} zoomOnScroll={false} />
}`,...(f=(u=a.parameters)==null?void 0:u.docs)==null?void 0:f.source},description:{story:"Long question text that gets truncated in the header.",...(h=(g=a.parameters)==null?void 0:g.docs)==null?void 0:h.description}}};var w,b,y,x,D;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <DiagramCanvas nodes={node({
    variableName: 'Email',
    question: 'What is your email address?'
  }, {
    selected: true
  })} edges={[]} showControls={false} showBackground={false} fitView nodesDraggable={false} panOnDrag={false} zoomOnScroll={false} />
}`,...(y=(b=s.parameters)==null?void 0:b.docs)==null?void 0:y.source},description:{story:"Selected state — primary border and deeper shadow.",...(D=(x=s.parameters)==null?void 0:x.docs)==null?void 0:D.description}}};const L=["Default","LongQuestion","Selected"];export{e as Default,a as LongQuestion,s as Selected,L as __namedExportsOrder,V as default};
