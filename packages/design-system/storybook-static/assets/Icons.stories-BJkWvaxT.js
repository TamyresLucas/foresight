import{j as e}from"./jsx-runtime-BYYWji4R.js";import{I as y}from"./icons-BXU3tp_f.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./icon-CPjmVJEk.js";import"./utils-CDN07tui.js";const z=({size:o=24})=>{const x=Object.entries(y);return e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(100px, 1fr))",gap:"16px",padding:"16px",maxWidth:"900px"},children:x.map(([t,f])=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"6px",padding:"8px",border:"1px solid var(--border)",borderRadius:"6px"},children:[e.jsx(f,{className:`h-${o/4} w-${o/4}`}),e.jsx("span",{style:{fontSize:"10px",textAlign:"center",color:"var(--muted-foreground)",wordBreak:"break-word"},children:t})]},t))})},D={title:"Components/Data Display/Icons",component:z,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:[16,20,24,32,40,48],description:"Icon size in pixels (maps to Tailwind h-/w- classes)."}}},r={args:{size:24}},s={args:{size:32}},a={args:{size:16}};var n,i,p;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    size: 24
  }
}`,...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var c,l,d;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    size: 32
  }
}`,...(d=(l=s.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var m,g,u;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    size: 16
  }
}`,...(u=(g=a.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const v=["Default","Large","Small"];export{r as Default,s as Large,a as Small,v as __namedExportsOrder,D as default};
