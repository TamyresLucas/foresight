import{j as e}from"./jsx-runtime-BYYWji4R.js";import{L as o}from"./label-D3XcEZ0Y.js";import{I as g}from"./input-CgUhi0Pz.js";import{C as j}from"./checkbox-BgGr9jDO.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Drr-0Uuw.js";import"./index-Bew1Yeam.js";import"./index-C2vczdB5.js";import"./utils-CDN07tui.js";import"./index-CWz5EflU.js";import"./index-DW48STyt.js";import"./index-B0ATiKj9.js";import"./index-CafsI6Qv.js";import"./index-sY83p_TZ.js";import"./index-Jh3OPyOv.js";import"./index-B2NcgzwI.js";import"./index-C59fdHCL.js";import"./index-CyBucMil.js";import"./icons-BJRAOfCp.js";import"./icon-CPjmVJEk.js";const G={title:"ShadCn/Form Elements/Label",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{children:{control:"text",description:"Label text content."}}},r={args:{children:"Email address"}},a={render:()=>e.jsxs("div",{className:"flex flex-col gap-2 w-64",children:[e.jsx(o,{htmlFor:"email",children:"Email address"}),e.jsx(g,{id:"email",type:"email",placeholder:"you@example.com"})]})},s={render:()=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(j,{id:"terms"}),e.jsx(o,{htmlFor:"terms",children:"Accept terms and conditions"})]})},t={render:()=>e.jsxs("div",{className:"flex flex-col gap-2 w-64",children:[e.jsx(o,{htmlFor:"disabled-input",children:"Disabled field"}),e.jsx(g,{id:"disabled-input",disabled:!0,placeholder:"Not editable"})]})};var i,l,d;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    children: 'Email address'
  }
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var m,c,n;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-2 w-64">
            <Label htmlFor="email">Email address</Label>
            <Input id="email" type="email" placeholder="you@example.com" />
        </div>
}`,...(n=(c=a.parameters)==null?void 0:c.docs)==null?void 0:n.source}}};var p,x,u;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms">Accept terms and conditions</Label>
        </div>
}`,...(u=(x=s.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};var h,b,f;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-2 w-64">
            <Label htmlFor="disabled-input">Disabled field</Label>
            <Input id="disabled-input" disabled placeholder="Not editable" />
        </div>
}`,...(f=(b=t.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const H=["Default","WithInput","WithCheckbox","Disabled"];export{r as Default,t as Disabled,s as WithCheckbox,a as WithInput,H as __namedExportsOrder,G as default};
