import{j as e}from"./jsx-runtime-BYYWji4R.js";import{fn as u}from"./index-DgAF9SIF.js";import{T as a}from"./toolbox-item-PP50JxDt.js";import{x as o,y as g,z as Q,V,D as b,E as q,J as U,K as Z,N as _,O as z,Q as J,W as K,g as x,Y as W,Z as X,_ as C,G as Y,$,f as ee,a0 as ae,a1 as oe,a2 as ne,a3 as re,a4 as ie,a5 as se,a6 as te,a7 as le,a8 as ce,a9 as me,aa as de,ab as pe,p as ue,ac as ge,b as r}from"./icons-BXU3tp_f.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./utils-CDN07tui.js";import"./icon-CPjmVJEk.js";const Ie={title:"Components/ToolboxItem",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},isEnabled:{control:"boolean"},isDragging:{control:"boolean"},isDraggable:{control:"boolean"},className:{control:"text"}},args:{onDragStart:u(),onDragEnd:u(),onClick:u()}},i={args:{icon:o,label:"Check Box",isEnabled:!0}},s={render:()=>e.jsxs("div",{className:"flex flex-col gap-2 w-80",children:[e.jsx(a,{icon:r,label:"Enabled",isEnabled:!0}),e.jsx(a,{icon:r,label:"Disabled",isEnabled:!1}),e.jsx(a,{icon:r,label:"Dragging",isDragging:!0,isEnabled:!0}),e.jsx(a,{icon:r,label:"Non-Draggable",isDraggable:!1})]})},t={args:{icon:o,label:"Check Box",isEnabled:!1}},l={args:{icon:o,label:"Check Box",isDragging:!0}},M=[{name:"Block",icon:o},{name:"Auto Complete Dropdown",icon:g},{name:"Card Sort",icon:Q},{name:"Carousel",icon:V},{name:"Cascading Dropdown",icon:g},{name:"Check Box",icon:o},{name:"Choice Grid",icon:b},{name:"Click Map",icon:q},{name:"Comment Box",icon:U},{name:"Custom Grid",icon:Z},{name:"Custom Scripting",icon:_},{name:"Date & Time",icon:z},{name:"Description",icon:J},{name:"Drag and Drop Ranking",icon:K},{name:"Dropdown",icon:g},{name:"Email Address",icon:x},{name:"Email Collector",icon:x},{name:"File Upload",icon:W},{name:"Hot Spot",icon:X},{name:"Image Grid",icon:C},{name:"Image Select",icon:C},{name:"Language Preference",icon:Y},{name:"Lookup Table",icon:$},{name:"Metadata Collector",icon:ee},{name:"NPS",icon:ae},{name:"Numeric Input",icon:oe},{name:"Numeric Ranking",icon:ne},{name:"Page Break",icon:re},{name:"Phone Number",icon:ie},{name:"Radio Button",icon:se},{name:"Running Total",icon:b},{name:"Secured Temporary Variable",icon:te},{name:"Signature",icon:le},{name:"Slider",icon:ce},{name:"Star Rating",icon:me},{name:"Text Highlighter",icon:de},{name:"Text Input",icon:pe},{name:"Time Zone",icon:ue},{name:"Timer",icon:ge}],be={"Advanced & Interactive":["Card Sort","Carousel","Click Map","Comment Box","Custom Scripting","File Upload","Hot Spot","Signature","Text Highlighter","Timer"],Grid:["Choice Grid","Custom Grid","Image Grid","Running Total"],Input:["Date & Time","Email Address","Numeric Input","Text Input"],"Multiple choices":["Auto Complete Dropdown","Cascading Dropdown","Check Box","Dropdown","Image Select","Radio Button"],"Rating & Scoring":["Drag and Drop Ranking","NPS","Numeric Ranking","Slider","Star Rating"],Structural:["Block","Description","Lookup Table","Page Break"],"System Variable":["Email Collector","Language Preference","Metadata Collector","Phone Number","Secured Temporary Variable","Time Zone"]},c={render:()=>e.jsx("div",{className:"w-80 max-h-[500px] overflow-y-auto",children:M.map((n,d)=>e.jsx(a,{icon:n.icon,label:n.name,isEnabled:!0},d))})},m={render:()=>e.jsx("div",{className:"w-80 max-h-[600px] overflow-y-auto",children:Object.entries(be).map(([n,d],F)=>e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold px-4 pt-3 pb-1",children:n}),d.map((H,L)=>{const p=M.find(O=>O.name===H);return p?e.jsx(a,{icon:p.icon,label:p.name,isEnabled:!0},L):null})]},F))})};var h,D,S;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    icon: Square,
    label: "Check Box",
    isEnabled: true
  }
}`,...(S=(D=i.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};var T,k,f;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-2 w-80">
      <ToolboxItem icon={Check} label="Enabled" isEnabled={true} />
      <ToolboxItem icon={Check} label="Disabled" isEnabled={false} />
      <ToolboxItem icon={Check} label="Dragging" isDragging={true} isEnabled={true} />
      <ToolboxItem icon={Check} label="Non-Draggable" isDraggable={false} />
    </div>
}`,...(f=(k=s.parameters)==null?void 0:k.docs)==null?void 0:f.source}}};var I,E,N;t.parameters={...t.parameters,docs:{...(I=t.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    icon: Square,
    label: "Check Box",
    isEnabled: false
  }
}`,...(N=(E=t.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var y,B,v;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    icon: Square,
    label: "Check Box",
    isDragging: true
  }
}`,...(v=(B=l.parameters)==null?void 0:B.docs)==null?void 0:v.source}}};var w,j,G;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div className="w-80 max-h-[500px] overflow-y-auto">
      {sampleToolboxItems.map((item, index) => <ToolboxItem key={index} icon={item.icon} label={item.name} isEnabled={true} />)}
    </div>
}`,...(G=(j=c.parameters)==null?void 0:j.docs)==null?void 0:G.source}}};var R,A,P;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div className="w-80 max-h-[600px] overflow-y-auto">
      {Object.entries(sampleQuestionGroups).map(([groupName, items], groupIndex) => <div key={groupIndex}>
            <h3 className="text-sm font-semibold px-4 pt-3 pb-1">
              {groupName}
            </h3>
            {items.map((itemName, itemIndex) => {
        const item = sampleToolboxItems.find(i => i.name === itemName);
        if (!item) return null;
        return <ToolboxItem key={itemIndex} icon={item.icon} label={item.name} isEnabled={true} />;
      })}
          </div>)}
    </div>
}`,...(P=(A=m.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};const Ee=["Default","AllStates","Disabled","Dragging","AllQuestionTypes","GroupedByCategory"];export{c as AllQuestionTypes,s as AllStates,i as Default,t as Disabled,l as Dragging,m as GroupedByCategory,Ee as __namedExportsOrder,Ie as default};
