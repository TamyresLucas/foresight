import{j as n}from"./jsx-runtime-BYYWji4R.js";import{B as r,D as a,u as Ce,a as Se}from"./DiagramCanvas-DNcpU9lZ.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./value-CErw7IZC.js";import"./index-NDK0uC61.js";import"./index-Drr-0Uuw.js";import"./icons-BJRAOfCp.js";import"./icon-CPjmVJEk.js";import"./utils-CDN07tui.js";const s={id:"start",type:"start",position:{x:300,y:40},data:{label:"Start"}},o={id:"end",type:"end",position:{x:300,y:600},data:{label:"End"}},D={id:"mc-1",type:"multipleChoice",position:{x:200,y:160},data:{variableName:"Q1",question:"How satisfied are you?",subtype:"radio",options:[{id:"opt1",text:"Very satisfied"},{id:"opt2",text:"Satisfied"},{id:"opt3",text:"Neutral"},{id:"opt4",text:"Dissatisfied"}]}},y={id:"text-1",type:"textEntry",position:{x:200,y:360},data:{variableName:"Q2",question:"Any additional comments?"}},we={id:"desc-1",type:"description",position:{x:600,y:160},data:{question:"Please answer the following questions honestly."}},De=[{id:"e-start-mc",source:"start",target:"mc-1",animated:!1},{id:"e-mc-text",source:"mc-1",sourceHandle:"opt1",target:"text-1",targetHandle:"input",label:"Very satisfied"},{id:"e-mc-end",source:"mc-1",sourceHandle:"opt4",target:"end",targetHandle:"input",label:"Dissatisfied"},{id:"e-text-end",source:"text-1",sourceHandle:"output",target:"end",targetHandle:"input"}],Le={title:"Survey Builder/Logic/DiagramCanvas",component:a,parameters:{layout:"fullscreen",docs:{description:{component:"A React Flow-based diagram canvas for visualizing survey flows. Accepts pre-formatted `nodes` and `edges` — survey-to-diagram conversion must happen upstream (e.g. via a `useSurveyDiagram` hook). Wrapped internally in `ReactFlowProvider`; no external provider needed."}}},tags:["autodocs"],argTypes:{showControls:{control:"boolean"},showBackground:{control:"boolean"},backgroundVariant:{control:"select",options:Object.values(r)},nodesDraggable:{control:"boolean"},panOnDrag:{control:"boolean"},zoomOnScroll:{control:"boolean"},fitView:{control:"boolean"},onNodeClick:{action:"nodeClicked"},onNodesChange:{action:"nodesChanged"},onEdgesChange:{action:"edgesChanged"},nodes:{control:!1},edges:{control:!1}}};function ye(e){const{initialNodes:fe,initialEdges:xe,...ve}=e,[ke,,Ee]=Ce(fe),[be,,Ne]=Se(xe);return n.jsx(a,{...ve,nodes:ke,edges:be,onNodesChange:Ee,onEdgesChange:Ne})}const t={name:"Full Survey Flow",render:e=>n.jsx("div",{style:{width:"100%",height:"600px"},children:n.jsx(ye,{...e,initialNodes:[s,D,y,we,o],initialEdges:De})}),args:{showControls:!0,showBackground:!0,backgroundVariant:r.Dots,nodesDraggable:!0,panOnDrag:!0,zoomOnScroll:!0,fitView:!0}},i={name:"Minimal Flow",render:e=>n.jsx("div",{style:{width:"100%",height:"400px"},children:n.jsx(ye,{...e,initialNodes:[s,o],initialEdges:[{id:"e-start-end",source:"start",target:"end"}]})}),args:{showControls:!0,showBackground:!0,backgroundVariant:r.Dots,nodesDraggable:!0,panOnDrag:!0,zoomOnScroll:!0,fitView:!0}},d={name:"Node › Start",render:e=>n.jsx("div",{style:{width:"100%",height:"300px"},children:n.jsx(a,{...e,nodes:[{...s,position:{x:200,y:100}}],edges:[]})}),args:{showControls:!1,showBackground:!0,backgroundVariant:r.Dots,nodesDraggable:!1,fitView:!0}},c={name:"Node › End",render:e=>n.jsx("div",{style:{width:"100%",height:"300px"},children:n.jsx(a,{...e,nodes:[{...o,position:{x:200,y:100}}],edges:[]})}),args:{showControls:!1,showBackground:!0,backgroundVariant:r.Dots,nodesDraggable:!1,fitView:!0}},l={name:"Node › Multiple Choice",render:e=>n.jsx("div",{style:{width:"100%",height:"360px"},children:n.jsx(a,{...e,nodes:[{...D,position:{x:200,y:80}}],edges:[]})}),args:{showControls:!1,showBackground:!0,backgroundVariant:r.Dots,nodesDraggable:!1,fitView:!0}},g={name:"Node › Text Entry",render:e=>n.jsx("div",{style:{width:"100%",height:"300px"},children:n.jsx(a,{...e,nodes:[{...y,position:{x:200,y:80}}],edges:[]})}),args:{showControls:!1,showBackground:!0,backgroundVariant:r.Dots,nodesDraggable:!1,fitView:!0}},u={name:"Node › Description",render:e=>n.jsx("div",{style:{width:"100%",height:"300px"},children:n.jsx(a,{...e,nodes:[{...we,position:{x:200,y:80}}],edges:[]})}),args:{showControls:!1,showBackground:!0,backgroundVariant:r.Dots,nodesDraggable:!1,fitView:!0}},p={name:"Read-Only Canvas",render:e=>n.jsx("div",{style:{width:"100%",height:"600px"},children:n.jsx(a,{...e,nodes:[s,D,y,o],edges:De})}),args:{showControls:!1,showBackground:!0,backgroundVariant:r.Lines,nodesDraggable:!1,panOnDrag:!1,zoomOnScroll:!1,fitView:!0}},h={name:"Background › Dots",render:e=>n.jsx("div",{style:{width:"100%",height:"400px"},children:n.jsx(a,{...e,nodes:[s,o],edges:[{id:"e",source:"start",target:"end"}]})}),args:{showControls:!1,showBackground:!0,backgroundVariant:r.Dots,nodesDraggable:!1,fitView:!0}},m={name:"Background › Lines",render:e=>n.jsx("div",{style:{width:"100%",height:"400px"},children:n.jsx(a,{...e,nodes:[s,o],edges:[{id:"e",source:"start",target:"end"}]})}),args:{showControls:!1,showBackground:!0,backgroundVariant:r.Lines,nodesDraggable:!1,fitView:!0}},w={name:"Background › Cross",render:e=>n.jsx("div",{style:{width:"100%",height:"400px"},children:n.jsx(a,{...e,nodes:[s,o],edges:[{id:"e",source:"start",target:"end"}]})}),args:{showControls:!1,showBackground:!0,backgroundVariant:r.Cross,nodesDraggable:!1,fitView:!0}};var f,x,v,k,E;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  // eslint-disable-next-line storybook/no-redundant-story-name
  name: 'Full Survey Flow',
  render: args => <div style={{
    width: '100%',
    height: '600px'
  }}>
            <InteractiveCanvas {...args} initialNodes={[START_NODE, MC_NODE, TEXT_NODE, DESC_NODE, END_NODE]} initialEdges={BASE_EDGES} />
        </div>,
  args: {
    showControls: true,
    showBackground: true,
    backgroundVariant: BackgroundVariant.Dots,
    nodesDraggable: true,
    panOnDrag: true,
    zoomOnScroll: true,
    fitView: true
  }
}`,...(v=(x=t.parameters)==null?void 0:x.docs)==null?void 0:v.source},description:{story:`Full interactive survey flow with all node types connected.
Nodes are draggable and edges are live — mirrors real usage.`,...(E=(k=t.parameters)==null?void 0:k.docs)==null?void 0:E.description}}};var b,N,C,S,V;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  // eslint-disable-next-line storybook/no-redundant-story-name
  name: 'Minimal Flow',
  render: args => <div style={{
    width: '100%',
    height: '400px'
  }}>
            <InteractiveCanvas {...args} initialNodes={[START_NODE, END_NODE]} initialEdges={[{
      id: 'e-start-end',
      source: 'start',
      target: 'end'
    }]} />
        </div>,
  args: {
    showControls: true,
    showBackground: true,
    backgroundVariant: BackgroundVariant.Dots,
    nodesDraggable: true,
    panOnDrag: true,
    zoomOnScroll: true,
    fitView: true
  }
}`,...(C=(N=i.parameters)==null?void 0:N.docs)==null?void 0:C.source},description:{story:`Minimal flow — Start → End only.
Useful for testing the canvas renders with the smallest valid input.`,...(V=(S=i.parameters)==null?void 0:S.docs)==null?void 0:V.description}}};var B,O,_,T,j;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Node › Start',
  render: args => <div style={{
    width: '100%',
    height: '300px'
  }}>
            <DiagramCanvas {...args} nodes={[{
      ...START_NODE,
      position: {
        x: 200,
        y: 100
      }
    }]} edges={[]} />
        </div>,
  args: {
    showControls: false,
    showBackground: true,
    backgroundVariant: BackgroundVariant.Dots,
    nodesDraggable: false,
    fitView: true
  }
}`,...(_=(O=d.parameters)==null?void 0:O.docs)==null?void 0:_.source},description:{story:"Start node in isolation — verifies --success border and label rendering.",...(j=(T=d.parameters)==null?void 0:T.docs)==null?void 0:j.description}}};var R,F,M,A,L;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Node › End',
  render: args => <div style={{
    width: '100%',
    height: '300px'
  }}>
            <DiagramCanvas {...args} nodes={[{
      ...END_NODE,
      position: {
        x: 200,
        y: 100
      }
    }]} edges={[]} />
        </div>,
  args: {
    showControls: false,
    showBackground: true,
    backgroundVariant: BackgroundVariant.Dots,
    nodesDraggable: false,
    fitView: true
  }
}`,...(M=(F=c.parameters)==null?void 0:F.docs)==null?void 0:M.source},description:{story:"End node in isolation — verifies --success border and label rendering.",...(L=(A=c.parameters)==null?void 0:A.docs)==null?void 0:L.description}}};var z,H,q,X,G;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Node › Multiple Choice',
  render: args => <div style={{
    width: '100%',
    height: '360px'
  }}>
            <DiagramCanvas {...args} nodes={[{
      ...MC_NODE,
      position: {
        x: 200,
        y: 80
      }
    }]} edges={[]} />
        </div>,
  args: {
    showControls: false,
    showBackground: true,
    backgroundVariant: BackgroundVariant.Dots,
    nodesDraggable: false,
    fitView: true
  }
}`,...(q=(H=l.parameters)==null?void 0:H.docs)==null?void 0:q.source},description:{story:`MultipleChoice node with 4 choices — each choice renders its own
output handle on the right side.`,...(G=(X=l.parameters)==null?void 0:X.docs)==null?void 0:G.description}}};var I,P,Q,U,W;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'Node › Text Entry',
  render: args => <div style={{
    width: '100%',
    height: '300px'
  }}>
            <DiagramCanvas {...args} nodes={[{
      ...TEXT_NODE,
      position: {
        x: 200,
        y: 80
      }
    }]} edges={[]} />
        </div>,
  args: {
    showControls: false,
    showBackground: true,
    backgroundVariant: BackgroundVariant.Dots,
    nodesDraggable: false,
    fitView: true
  }
}`,...(Q=(P=g.parameters)==null?void 0:P.docs)==null?void 0:Q.source},description:{story:"TextEntry node — open-ended question with a single output handle.",...(W=(U=g.parameters)==null?void 0:U.docs)==null?void 0:W.description}}};var J,K,Y,Z,$;u.parameters={...u.parameters,docs:{...(J=u.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: 'Node › Description',
  render: args => <div style={{
    width: '100%',
    height: '300px'
  }}>
            <DiagramCanvas {...args} nodes={[{
      ...DESC_NODE,
      position: {
        x: 200,
        y: 80
      }
    }]} edges={[]} />
        </div>,
  args: {
    showControls: false,
    showBackground: true,
    backgroundVariant: BackgroundVariant.Dots,
    nodesDraggable: false,
    fitView: true
  }
}`,...(Y=(K=u.parameters)==null?void 0:K.docs)==null?void 0:Y.source},description:{story:"Description node — informational content block, no question handles.",...($=(Z=u.parameters)==null?void 0:Z.docs)==null?void 0:$.description}}};var ee,ne,re,ae,se;p.parameters={...p.parameters,docs:{...(ee=p.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  name: 'Read-Only Canvas',
  render: args => <div style={{
    width: '100%',
    height: '600px'
  }}>
            <DiagramCanvas {...args} nodes={[START_NODE, MC_NODE, TEXT_NODE, END_NODE]} edges={BASE_EDGES} />
        </div>,
  args: {
    showControls: false,
    showBackground: true,
    backgroundVariant: BackgroundVariant.Lines,
    nodesDraggable: false,
    panOnDrag: false,
    zoomOnScroll: false,
    fitView: true
  }
}`,...(re=(ne=p.parameters)==null?void 0:ne.docs)==null?void 0:re.source},description:{story:`Read-only canvas — all interaction disabled.
Mirrors an embed or preview context.`,...(se=(ae=p.parameters)==null?void 0:ae.docs)==null?void 0:se.description}}};var oe,te,ie,de,ce;h.parameters={...h.parameters,docs:{...(oe=h.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: 'Background › Dots',
  render: args => <div style={{
    width: '100%',
    height: '400px'
  }}>
            <DiagramCanvas {...args} nodes={[START_NODE, END_NODE]} edges={[{
      id: 'e',
      source: 'start',
      target: 'end'
    }]} />
        </div>,
  args: {
    showControls: false,
    showBackground: true,
    backgroundVariant: BackgroundVariant.Dots,
    nodesDraggable: false,
    fitView: true
  }
}`,...(ie=(te=h.parameters)==null?void 0:te.docs)==null?void 0:ie.source},description:{story:"Background variants — visually compare Dots vs Lines vs Cross.",...(ce=(de=h.parameters)==null?void 0:de.docs)==null?void 0:ce.description}}};var le,ge,ue;m.parameters={...m.parameters,docs:{...(le=m.parameters)==null?void 0:le.docs,source:{originalSource:`{
  name: 'Background › Lines',
  render: args => <div style={{
    width: '100%',
    height: '400px'
  }}>
            <DiagramCanvas {...args} nodes={[START_NODE, END_NODE]} edges={[{
      id: 'e',
      source: 'start',
      target: 'end'
    }]} />
        </div>,
  args: {
    showControls: false,
    showBackground: true,
    backgroundVariant: BackgroundVariant.Lines,
    nodesDraggable: false,
    fitView: true
  }
}`,...(ue=(ge=m.parameters)==null?void 0:ge.docs)==null?void 0:ue.source}}};var pe,he,me;w.parameters={...w.parameters,docs:{...(pe=w.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  name: 'Background › Cross',
  render: args => <div style={{
    width: '100%',
    height: '400px'
  }}>
            <DiagramCanvas {...args} nodes={[START_NODE, END_NODE]} edges={[{
      id: 'e',
      source: 'start',
      target: 'end'
    }]} />
        </div>,
  args: {
    showControls: false,
    showBackground: true,
    backgroundVariant: BackgroundVariant.Cross,
    nodesDraggable: false,
    fitView: true
  }
}`,...(me=(he=w.parameters)==null?void 0:he.docs)==null?void 0:me.source}}};const ze=["FullSurveyFlow","MinimalFlow","StartNodeStory","EndNodeStory","MultipleChoiceNodeStory","TextEntryNodeStory","DescriptionNodeStory","ReadOnly","BackgroundDots","BackgroundLines","BackgroundCross"];export{w as BackgroundCross,h as BackgroundDots,m as BackgroundLines,u as DescriptionNodeStory,c as EndNodeStory,t as FullSurveyFlow,i as MinimalFlow,l as MultipleChoiceNodeStory,p as ReadOnly,d as StartNodeStory,g as TextEntryNodeStory,ze as __namedExportsOrder,Le as default};
