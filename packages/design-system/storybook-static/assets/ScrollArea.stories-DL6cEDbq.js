import{j as r}from"./jsx-runtime-BYYWji4R.js";import{S as n}from"./scroll-area-DIcynhVJ.js";import{S as d}from"./separator-DyOGEPWK.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-C59fdHCL.js";import"./index-Drr-0Uuw.js";import"./index-CyBucMil.js";import"./index-Bew1Yeam.js";import"./index-B2NcgzwI.js";import"./index-CafsI6Qv.js";import"./index-CWz5EflU.js";import"./index-kkVLZR_L.js";import"./index-CZKF78Oq.js";import"./index-BdQq_4o_.js";import"./index-DW48STyt.js";import"./utils-CDN07tui.js";const E={title:"Components/Layout/ScrollArea",component:n,parameters:{layout:"centered"},tags:["autodocs"]},p=Array.from({length:50}).map((s,e,i)=>`v1.2.0-beta.${i.length-e}`),a={render:s=>r.jsx(n,{className:"h-72 w-48 rounded-md border",...s,children:r.jsxs("div",{className:"p-4",children:[r.jsx("h4",{className:"mb-4 text-sm font-medium leading-none",children:"Tags"}),p.map(e=>r.jsxs("div",{children:[r.jsx("div",{className:"text-sm",children:e}),r.jsx(d,{className:"my-2"})]},e))]})})};var t,m,o;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: args => <ScrollArea className="h-72 w-48 rounded-md border" {...args}>
            <div className="p-4">
                <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
                {tags.map(tag => <div key={tag}>
                        <div className="text-sm">
                            {tag}
                        </div>
                        <Separator className="my-2" />
                    </div>)}
            </div>
        </ScrollArea>
}`,...(o=(m=a.parameters)==null?void 0:m.docs)==null?void 0:o.source}}};const T=["Default"];export{a as Default,T as __namedExportsOrder,E as default};
