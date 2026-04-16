import{j as o}from"./jsx-runtime-BYYWji4R.js";import{D as t}from"./DiagramCanvas-DNcpU9lZ.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./value-CErw7IZC.js";import"./index-NDK0uC61.js";import"./index-Drr-0Uuw.js";import"./icons-BJRAOfCp.js";import"./icon-CPjmVJEk.js";import"./utils-CDN07tui.js";const L={title:"Survey Builder/Logic/Nodes/StartNode",parameters:{layout:"centered",docs:{description:{component:`
**StartNode** marks the entry point of a survey flow.

- Always the first node in a diagram
- Has a single **output handle** (right side) to connect to the first question
- Uses \`border-success\` for its border, thicker when selected
- Label is configurable via \`data.label\` (defaults to \`"Start of Survey"\`)
                `}}},tags:["autodocs"],decorators:[r=>o.jsx("div",{style:{width:400,height:200},children:o.jsx(r,{})})]},n=r=>[{id:"start",type:"start",position:{x:100,y:70},data:{label:"Start of Survey"},...r}],e={render:()=>o.jsx(t,{nodes:n(),edges:[],showControls:!1,showBackground:!1,fitView:!0,nodesDraggable:!1,panOnDrag:!1,zoomOnScroll:!1})},a={render:()=>o.jsx(t,{nodes:n({selected:!0}),edges:[],showControls:!1,showBackground:!1,fitView:!0,nodesDraggable:!1,panOnDrag:!1,zoomOnScroll:!1})},s={render:()=>o.jsx(t,{nodes:n({data:{label:"Begin Onboarding"}}),edges:[],showControls:!1,showBackground:!1,fitView:!0,nodesDraggable:!1,panOnDrag:!1,zoomOnScroll:!1})};var l,d,i,c,f;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <DiagramCanvas nodes={baseNode()} edges={[]} showControls={false} showBackground={false} fitView nodesDraggable={false} panOnDrag={false} zoomOnScroll={false} />
}`,...(i=(d=e.parameters)==null?void 0:d.docs)==null?void 0:i.source},description:{story:"Default start node with the standard label.",...(f=(c=e.parameters)==null?void 0:c.docs)==null?void 0:f.description}}};var g,m,p,u,b;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <DiagramCanvas nodes={baseNode({
    selected: true
  })} edges={[]} showControls={false} showBackground={false} fitView nodesDraggable={false} panOnDrag={false} zoomOnScroll={false} />
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source},description:{story:"Start node in selected state — border becomes thicker.",...(b=(u=a.parameters)==null?void 0:u.docs)==null?void 0:b.description}}};var h,w,D,S,O;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <DiagramCanvas nodes={baseNode({
    data: {
      label: 'Begin Onboarding'
    }
  })} edges={[]} showControls={false} showBackground={false} fitView nodesDraggable={false} panOnDrag={false} zoomOnScroll={false} />
}`,...(D=(w=s.parameters)==null?void 0:w.docs)==null?void 0:D.source},description:{story:"Custom label text via \\`data.label\\`.",...(O=(S=s.parameters)==null?void 0:S.docs)==null?void 0:O.description}}};const E=["Default","Selected","CustomLabel"];export{s as CustomLabel,e as Default,a as Selected,E as __namedExportsOrder,L as default};
