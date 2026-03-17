import{j as e}from"./jsx-runtime-BYYWji4R.js";import{T as a}from"./toolbox-item-PP50JxDt.js";import{b as T,u as C,f as k,g as y,s as j}from"./icons-BXU3tp_f.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./utils-CDN07tui.js";import"./icon-CPjmVJEk.js";const W={title:"Survey Builder/ToolboxItem",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text",description:"Label text displayed below the icon."},isEnabled:{control:"boolean",description:"When false, renders the item in a disabled/muted state."},isDragging:{control:"boolean",description:"When true, applies dragging visual state."},isDraggable:{control:"boolean",description:"When false, renders as a click-only item (no drag handle)."}}},r={args:{icon:T,label:"Multiple Choice",isEnabled:!0,isDragging:!1,isDraggable:!0}},s={args:{icon:C,label:"Search (disabled)",isEnabled:!1,isDragging:!1,isDraggable:!0}},i={args:{icon:k,label:"Settings Block",isEnabled:!0,isDragging:!0,isDraggable:!0}},o={args:{icon:y,label:"Email Question",isEnabled:!0,isDragging:!1,isDraggable:!1,onClick:()=>alert("Clicked — insert question")}},l={render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"8px",padding:"16px",border:"1px solid var(--border)",borderRadius:"8px",width:"280px"},children:[e.jsx(a,{icon:T,label:"Multiple Choice"}),e.jsx(a,{icon:C,label:"Short Text"}),e.jsx(a,{icon:k,label:"Rating Scale"}),e.jsx(a,{icon:y,label:"Email"}),e.jsx(a,{icon:j,label:"Notification",isEnabled:!1})]})};var n,t,c;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    icon: Check,
    label: 'Multiple Choice',
    isEnabled: true,
    isDragging: false,
    isDraggable: true
  }
}`,...(c=(t=r.parameters)==null?void 0:t.docs)==null?void 0:c.source}}};var g,d,b;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    icon: Search,
    label: 'Search (disabled)',
    isEnabled: false,
    isDragging: false,
    isDraggable: true
  }
}`,...(b=(d=s.parameters)==null?void 0:d.docs)==null?void 0:b.source}}};var p,m,u;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    icon: Settings,
    label: 'Settings Block',
    isEnabled: true,
    isDragging: true,
    isDraggable: true
  }
}`,...(u=(m=i.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var x,D,f;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    icon: Mail,
    label: 'Email Question',
    isEnabled: true,
    isDragging: false,
    isDraggable: false,
    onClick: () => alert('Clicked — insert question')
  }
}`,...(f=(D=o.parameters)==null?void 0:D.docs)==null?void 0:f.source}}};var h,S,E;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '8px',
    padding: '16px',
    border: '1px solid var(--border)',
    borderRadius: '8px',
    width: '280px'
  }}>
            <ToolboxItem icon={Check} label="Multiple Choice" />
            <ToolboxItem icon={Search} label="Short Text" />
            <ToolboxItem icon={Settings} label="Rating Scale" />
            <ToolboxItem icon={Mail} label="Email" />
            <ToolboxItem icon={Bell} label="Notification" isEnabled={false} />
        </div>
}`,...(E=(S=l.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};const q=["Default","Disabled","Dragging","NotDraggable","ToolboxGrid"];export{r as Default,s as Disabled,i as Dragging,o as NotDraggable,l as ToolboxGrid,q as __namedExportsOrder,W as default};
