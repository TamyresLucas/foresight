import{j as e}from"./jsx-runtime-BYYWji4R.js";import{D as i}from"./DiagramCanvas-DNcpU9lZ.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./value-CErw7IZC.js";import"./index-NDK0uC61.js";import"./index-Drr-0Uuw.js";import"./icons-BJRAOfCp.js";import"./icon-CPjmVJEk.js";import"./utils-CDN07tui.js";const G={title:"Survey Builder/Logic/Nodes/MultipleChoiceNode",parameters:{layout:"centered",docs:{description:{component:`
**MultipleChoiceNode** renders a question with a list of selectable options.

Each option gets its own **output handle** on the right, allowing conditional branching — different choices can route respondents to different parts of the survey.

### Subtypes

| Subtype | Icon | Behavior |
|---------|------|----------|
| \`radio\` | ○ Circle | Single selection — respondent picks one |
| \`checkbox\` | □ Square | Multi-selection — respondent picks many |

### Structure
- **Header**: \`variableName\` (bold) + \`question\` (truncated)
- **Options list**: each option row has a radio/checkbox indicator, label text, and its own output handle
- **Input handle**: one on the left of the node (incoming connection)
                `}}},tags:["autodocs"],decorators:[o=>e.jsx("div",{style:{width:500,height:340},children:e.jsx(o,{})})]},d=(o,H)=>[{id:"q1",type:"multipleChoice",position:{x:80,y:30},data:o,...H}],Q=[{id:"opt1",text:"Very Satisfied"},{id:"opt2",text:"Satisfied"},{id:"opt3",text:"Neutral"},{id:"opt4",text:"Dissatisfied"}],E=[{id:"rec1",text:"To friends"},{id:"rec2",text:"To family"},{id:"rec3",text:"To colleagues"}],s={render:()=>e.jsx(i,{nodes:d({variableName:"Q1",question:"How satisfied are you with our service?",subtype:"radio",options:Q}),edges:[],showControls:!1,showBackground:!1,fitView:!0,nodesDraggable:!1,panOnDrag:!1,zoomOnScroll:!1})},n={render:()=>e.jsx(i,{nodes:d({variableName:"Q3",question:"Who would you recommend us to?",subtype:"checkbox",options:E}),edges:[],showControls:!1,showBackground:!1,fitView:!0,nodesDraggable:!1,panOnDrag:!1,zoomOnScroll:!1})},a={render:()=>e.jsx(i,{nodes:d({variableName:"Q1",question:"How satisfied are you with our service?",subtype:"radio",options:Q},{selected:!0}),edges:[],showControls:!1,showBackground:!1,fitView:!0,nodesDraggable:!1,panOnDrag:!1,zoomOnScroll:!1})},t={render:()=>e.jsx(i,{nodes:d({variableName:"Q2",question:"Have you used our product before?",subtype:"radio",options:[{id:"yes",text:"Yes"},{id:"no",text:"No"}]}),edges:[],showControls:!1,showBackground:!1,fitView:!0,nodesDraggable:!1,panOnDrag:!1,zoomOnScroll:!1})},r={render:()=>e.jsx(i,{nodes:d({variableName:"Dept",question:"Which department do you work in?",subtype:"radio",options:[{id:"d1",text:"Engineering"},{id:"d2",text:"Product"},{id:"d3",text:"Design"},{id:"d4",text:"Marketing"},{id:"d5",text:"Sales"},{id:"d6",text:"Operations"}]}),edges:[],showControls:!1,showBackground:!1,fitView:!0,nodesDraggable:!1,panOnDrag:!1,zoomOnScroll:!1}),decorators:[o=>e.jsx("div",{style:{width:500,height:460},children:e.jsx(o,{})})]};var l,c,p,u,m;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <DiagramCanvas nodes={node({
    variableName: 'Q1',
    question: 'How satisfied are you with our service?',
    subtype: 'radio',
    options: satisfactionOptions
  })} edges={[]} showControls={false} showBackground={false} fitView nodesDraggable={false} panOnDrag={false} zoomOnScroll={false} />
}`,...(p=(c=s.parameters)==null?void 0:c.docs)==null?void 0:p.source},description:{story:`Radio subtype — single selection. Each option has its own output handle
so the flow can branch based on the respondent's answer.`,...(m=(u=s.parameters)==null?void 0:u.docs)==null?void 0:m.description}}};var f,g,h,w,b;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <DiagramCanvas nodes={node({
    variableName: 'Q3',
    question: 'Who would you recommend us to?',
    subtype: 'checkbox',
    options: recommendOptions
  })} edges={[]} showControls={false} showBackground={false} fitView nodesDraggable={false} panOnDrag={false} zoomOnScroll={false} />
}`,...(h=(g=n.parameters)==null?void 0:g.docs)==null?void 0:h.source},description:{story:`Checkbox subtype — multi-selection. Same branching structure as radio
but the indicator is a square instead of a circle.`,...(b=(w=n.parameters)==null?void 0:w.docs)==null?void 0:b.description}}};var y,x,O,D,S;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <DiagramCanvas nodes={node({
    variableName: 'Q1',
    question: 'How satisfied are you with our service?',
    subtype: 'radio',
    options: satisfactionOptions
  }, {
    selected: true
  })} edges={[]} showControls={false} showBackground={false} fitView nodesDraggable={false} panOnDrag={false} zoomOnScroll={false} />
}`,...(O=(x=a.parameters)==null?void 0:x.docs)==null?void 0:O.source},description:{story:"Selected state for a radio node — primary border and deeper shadow.",...(S=(D=a.parameters)==null?void 0:D.docs)==null?void 0:S.description}}};var v,k,C,N,q;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <DiagramCanvas nodes={node({
    variableName: 'Q2',
    question: 'Have you used our product before?',
    subtype: 'radio',
    options: [{
      id: 'yes',
      text: 'Yes'
    }, {
      id: 'no',
      text: 'No'
    }]
  })} edges={[]} showControls={false} showBackground={false} fitView nodesDraggable={false} panOnDrag={false} zoomOnScroll={false} />
}`,...(C=(k=t.parameters)==null?void 0:k.docs)==null?void 0:C.source},description:{story:"Only two options — minimal branching scenario.",...(q=(N=t.parameters)==null?void 0:N.docs)==null?void 0:q.description}}};var B,j,V,z,M;r.parameters={...r.parameters,docs:{...(B=r.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <DiagramCanvas nodes={node({
    variableName: 'Dept',
    question: 'Which department do you work in?',
    subtype: 'radio',
    options: [{
      id: 'd1',
      text: 'Engineering'
    }, {
      id: 'd2',
      text: 'Product'
    }, {
      id: 'd3',
      text: 'Design'
    }, {
      id: 'd4',
      text: 'Marketing'
    }, {
      id: 'd5',
      text: 'Sales'
    }, {
      id: 'd6',
      text: 'Operations'
    }]
  })} edges={[]} showControls={false} showBackground={false} fitView nodesDraggable={false} panOnDrag={false} zoomOnScroll={false} />,
  decorators: [Story => <div style={{
    width: 500,
    height: 460
  }}>
                <Story />
            </div>]
}`,...(V=(j=r.parameters)==null?void 0:j.docs)==null?void 0:V.source},description:{story:"Many options — shows how the node scales with more choices.",...(M=(z=r.parameters)==null?void 0:z.docs)==null?void 0:M.description}}};const J=["Radio","Checkbox","RadioSelected","TwoOptions","ManyOptions"];export{n as Checkbox,r as ManyOptions,s as Radio,a as RadioSelected,t as TwoOptions,J as __namedExportsOrder,G as default};
