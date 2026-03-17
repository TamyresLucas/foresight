import{j as d}from"./jsx-runtime-BYYWji4R.js";import{r as m}from"./index-ClcD9ViR.js";import{C as o}from"./calendar-LBlGWTbT.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./utils-CDN07tui.js";import"./button-DY4UnA7S.js";import"./index-CyBucMil.js";import"./index-Bew1Yeam.js";import"./index-C2vczdB5.js";const S={title:"Components/Data Display/Calendar",component:o,parameters:{layout:"centered"},tags:["autodocs"]},e={render:()=>{const[s,n]=m.useState(new Date);return d.jsx(o,{mode:"single",selected:s,onSelect:n,className:"rounded-md border"})}};var t,r,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date());
    return <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />;
  }
}`,...(a=(r=e.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const g=["Default"];export{e as Default,g as __namedExportsOrder,S as default};
