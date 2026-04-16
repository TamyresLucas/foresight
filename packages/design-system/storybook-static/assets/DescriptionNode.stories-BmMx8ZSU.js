import{j as e}from"./jsx-runtime-BYYWji4R.js";import{D as n}from"./DiagramCanvas-DNcpU9lZ.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./value-CErw7IZC.js";import"./index-NDK0uC61.js";import"./index-Drr-0Uuw.js";import"./icons-BJRAOfCp.js";import"./icon-CPjmVJEk.js";import"./utils-CDN07tui.js";const E={title:"Survey Builder/Logic/Nodes/DescriptionNode",parameters:{layout:"centered",docs:{description:{component:`
**DescriptionNode** is a read-only informational block — no question, no answer.

Use it to:
- Display instructions before a section of questions
- Show conditional messages ("Thank you for your positive feedback!")
- Add section headers or explanatory context between questions

The body scrolls if content exceeds 6 lines (\`max-h-24 overflow-y-auto\`).
Has one **input handle** (left) and one **output handle** (right).
                `}}},tags:["autodocs"],decorators:[i=>e.jsx("div",{style:{width:500,height:280},children:e.jsx(i,{})})]},t=(i,T)=>[{id:"desc1",type:"description",position:{x:80,y:60},data:i,...T}],o={render:()=>e.jsx(n,{nodes:t({question:"Thank you for your positive feedback! We appreciate your support."}),edges:[],showControls:!1,showBackground:!1,fitView:!0,nodesDraggable:!1,panOnDrag:!1,zoomOnScroll:!1})},s={render:()=>e.jsx(n,{nodes:t({question:"The following questions are about your recent purchase. Please answer as accurately as possible. This section should take about 2 minutes."}),edges:[],showControls:!1,showBackground:!1,fitView:!0,nodesDraggable:!1,panOnDrag:!1,zoomOnScroll:!1})},a={render:()=>e.jsx(n,{nodes:t({question:`Welcome to our annual satisfaction survey.

Your feedback is invaluable and helps us improve our services. This survey will take approximately 5 minutes to complete.

All responses are anonymous and will only be used in aggregate form.

Thank you for taking the time to share your thoughts with us.`}),edges:[],showControls:!1,showBackground:!1,fitView:!0,nodesDraggable:!1,panOnDrag:!1,zoomOnScroll:!1})},r={render:()=>e.jsx(n,{nodes:t({question:"Please complete the section below."},{selected:!0}),edges:[],showControls:!1,showBackground:!1,fitView:!0,nodesDraggable:!1,panOnDrag:!1,zoomOnScroll:!1})};var l,c,d,u,p;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <DiagramCanvas nodes={node({
    question: 'Thank you for your positive feedback! We appreciate your support.'
  })} edges={[]} showControls={false} showBackground={false} fitView nodesDraggable={false} panOnDrag={false} zoomOnScroll={false} />
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source},description:{story:"Short informational message shown conditionally in a flow.",...(p=(u=o.parameters)==null?void 0:u.docs)==null?void 0:p.description}}};var f,m,g,h,w;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <DiagramCanvas nodes={node({
    question: 'The following questions are about your recent purchase. Please answer as accurately as possible. This section should take about 2 minutes.'
  })} edges={[]} showControls={false} showBackground={false} fitView nodesDraggable={false} panOnDrag={false} zoomOnScroll={false} />
}`,...(g=(m=s.parameters)==null?void 0:m.docs)==null?void 0:g.source},description:{story:"Instructions block before a group of questions.",...(w=(h=s.parameters)==null?void 0:h.docs)==null?void 0:w.description}}};var y,b,D,k,v;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <DiagramCanvas nodes={node({
    question: 'Welcome to our annual satisfaction survey.\\n\\nYour feedback is invaluable and helps us improve our services. ' + 'This survey will take approximately 5 minutes to complete.\\n\\n' + 'All responses are anonymous and will only be used in aggregate form.\\n\\n' + 'Thank you for taking the time to share your thoughts with us.'
  })} edges={[]} showControls={false} showBackground={false} fitView nodesDraggable={false} panOnDrag={false} zoomOnScroll={false} />
}`,...(D=(b=a.parameters)==null?void 0:b.docs)==null?void 0:D.source},description:{story:"Long content that activates internal scroll.",...(v=(k=a.parameters)==null?void 0:k.docs)==null?void 0:v.description}}};var S,x,O,C,q;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <DiagramCanvas nodes={node({
    question: 'Please complete the section below.'
  }, {
    selected: true
  })} edges={[]} showControls={false} showBackground={false} fitView nodesDraggable={false} panOnDrag={false} zoomOnScroll={false} />
}`,...(O=(x=r.parameters)==null?void 0:x.docs)==null?void 0:O.source},description:{story:"Selected state — primary border and deeper shadow.",...(q=(C=r.parameters)==null?void 0:C.docs)==null?void 0:q.description}}};const Y=["Default","Instructions","LongContent","Selected"];export{o as Default,s as Instructions,a as LongContent,r as Selected,Y as __namedExportsOrder,E as default};
