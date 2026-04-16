import{j as o}from"./jsx-runtime-BYYWji4R.js";import{D as t}from"./DiagramCanvas-DNcpU9lZ.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./value-CErw7IZC.js";import"./index-NDK0uC61.js";import"./index-Drr-0Uuw.js";import"./icons-BJRAOfCp.js";import"./icon-CPjmVJEk.js";import"./utils-CDN07tui.js";const V={title:"Survey Builder/Logic/Nodes/EndNode",parameters:{layout:"centered",docs:{description:{component:`
**EndNode** marks the exit point of a survey flow.

- Always the last node in a diagram
- Has a single **input handle** (left side) to receive connections from question nodes
- Uses \`border-success\` for its border and a green check-circle icon
- Label is configurable via \`data.label\` (defaults to \`"End of Survey"\`)
- A survey can have multiple end nodes for branching flows that terminate differently
                `}}},tags:["autodocs"],decorators:[r=>o.jsx("div",{style:{width:400,height:200},children:o.jsx(r,{})})]},n=r=>[{id:"end",type:"end",position:{x:100,y:70},data:{label:"End of Survey"},...r}],e={render:()=>o.jsx(t,{nodes:n(),edges:[],showControls:!1,showBackground:!1,fitView:!0,nodesDraggable:!1,panOnDrag:!1,zoomOnScroll:!1})},s={render:()=>o.jsx(t,{nodes:n({selected:!0}),edges:[],showControls:!1,showBackground:!1,fitView:!0,nodesDraggable:!1,panOnDrag:!1,zoomOnScroll:!1})},a={render:()=>o.jsx(t,{nodes:n({data:{label:"Survey Complete"}}),edges:[],showControls:!1,showBackground:!1,fitView:!0,nodesDraggable:!1,panOnDrag:!1,zoomOnScroll:!1})};var d,l,i,c,f;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <DiagramCanvas nodes={baseNode()} edges={[]} showControls={false} showBackground={false} fitView nodesDraggable={false} panOnDrag={false} zoomOnScroll={false} />
}`,...(i=(l=e.parameters)==null?void 0:l.docs)==null?void 0:i.source},description:{story:"Default end node with the standard label.",...(f=(c=e.parameters)==null?void 0:c.docs)==null?void 0:f.description}}};var m,p,g,u,h;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <DiagramCanvas nodes={baseNode({
    selected: true
  })} edges={[]} showControls={false} showBackground={false} fitView nodesDraggable={false} panOnDrag={false} zoomOnScroll={false} />
}`,...(g=(p=s.parameters)==null?void 0:p.docs)==null?void 0:g.source},description:{story:"End node in selected state — border becomes thicker.",...(h=(u=s.parameters)==null?void 0:u.docs)==null?void 0:h.description}}};var b,w,D,y,v;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <DiagramCanvas nodes={baseNode({
    data: {
      label: 'Survey Complete'
    }
  })} edges={[]} showControls={false} showBackground={false} fitView nodesDraggable={false} panOnDrag={false} zoomOnScroll={false} />
}`,...(D=(w=a.parameters)==null?void 0:w.docs)==null?void 0:D.source},description:{story:"Custom label for a specific survey completion state.",...(v=(y=a.parameters)==null?void 0:y.docs)==null?void 0:v.description}}};const L=["Default","Selected","CustomLabel"];export{a as CustomLabel,e as Default,s as Selected,L as __namedExportsOrder,V as default};
