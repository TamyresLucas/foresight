import{j as e}from"./jsx-runtime-BYYWji4R.js";import{C as s}from"./checkbox-DWcrSu7J.js";import{L as a}from"./label-DYOVXtut.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Bew1Yeam.js";import"./index-CWz5EflU.js";import"./index-DW48STyt.js";import"./index-B0ATiKj9.js";import"./index-CafsI6Qv.js";import"./index-sY83p_TZ.js";import"./index-Jh3OPyOv.js";import"./index-B2NcgzwI.js";import"./index-C59fdHCL.js";import"./index-Drr-0Uuw.js";import"./index-CyBucMil.js";import"./icons-BrjYTXf4.js";import"./utils-CDN07tui.js";import"./index-C2vczdB5.js";const G={title:"Components/Form Elements/Checkbox",component:s,parameters:{layout:"centered"}},r={render:c=>e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(s,{id:"terms",...c}),e.jsx(a,{htmlFor:"terms",children:"Accept terms and conditions"})]})},t={args:{checked:!0},render:c=>e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(s,{id:"terms2",...c}),e.jsx(a,{htmlFor:"terms2",children:"Checked by default"})]})},i={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(s,{id:"disabled1",disabled:!0}),e.jsx(a,{htmlFor:"disabled1",className:"text-muted-foreground",children:"Disabled unchecked"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(s,{id:"disabled2",disabled:!0,checked:!0}),e.jsx(a,{htmlFor:"disabled2",className:"text-muted-foreground",children:"Disabled checked"})]})]})},n={render:()=>e.jsxs("div",{className:"items-top flex space-x-2",children:[e.jsx(s,{id:"terms-desc"}),e.jsxs("div",{className:"grid gap-1.5 leading-none",children:[e.jsx(a,{htmlFor:"terms-desc",children:"Accept terms and conditions"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"You agree to our Terms of Service and Privacy Policy."})]})]})},d={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"items-top flex space-x-2",children:[e.jsx(s,{id:"notifications",defaultChecked:!0}),e.jsxs("div",{className:"grid gap-1.5 leading-none",children:[e.jsx(a,{htmlFor:"notifications",children:"Email notifications"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Receive updates about new surveys and responses."})]})]}),e.jsxs("div",{className:"items-top flex space-x-2",children:[e.jsx(s,{id:"marketing"}),e.jsxs("div",{className:"grid gap-1.5 leading-none",children:[e.jsx(a,{htmlFor:"marketing",children:"Marketing emails"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Receive tips and product announcements."})]})]}),e.jsxs("div",{className:"items-top flex space-x-2",children:[e.jsx(s,{id:"partner",disabled:!0}),e.jsxs("div",{className:"grid gap-1.5 leading-none",children:[e.jsx(a,{htmlFor:"partner",className:"text-muted-foreground",children:"Partner offers"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"This option is currently unavailable."})]})]})]})};var o,l,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => <div className="flex items-center space-x-2">
            <Checkbox id="terms" {...args} />
            <Label htmlFor="terms">Accept terms and conditions</Label>
        </div>
}`,...(m=(l=r.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var p,x,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    checked: true
  },
  render: args => <div className="flex items-center space-x-2">
            <Checkbox id="terms2" {...args} />
            <Label htmlFor="terms2">Checked by default</Label>
        </div>
}`,...(u=(x=t.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};var h,g,f;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
            <div className="flex items-center space-x-2">
                <Checkbox id="disabled1" disabled />
                <Label htmlFor="disabled1" className="text-muted-foreground">Disabled unchecked</Label>
            </div>
            <div className="flex items-center space-x-2">
                <Checkbox id="disabled2" disabled checked />
                <Label htmlFor="disabled2" className="text-muted-foreground">Disabled checked</Label>
            </div>
        </div>
}`,...(f=(g=i.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var v,b,N;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div className="items-top flex space-x-2">
            <Checkbox id="terms-desc" />
            <div className="grid gap-1.5 leading-none">
                <Label htmlFor="terms-desc">Accept terms and conditions</Label>
                <p className="text-sm text-muted-foreground">
                    You agree to our Terms of Service and Privacy Policy.
                </p>
            </div>
        </div>
}`,...(N=(b=n.parameters)==null?void 0:b.docs)==null?void 0:N.source}}};var j,k,C;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
            <div className="items-top flex space-x-2">
                <Checkbox id="notifications" defaultChecked />
                <div className="grid gap-1.5 leading-none">
                    <Label htmlFor="notifications">Email notifications</Label>
                    <p className="text-sm text-muted-foreground">
                        Receive updates about new surveys and responses.
                    </p>
                </div>
            </div>
            <div className="items-top flex space-x-2">
                <Checkbox id="marketing" />
                <div className="grid gap-1.5 leading-none">
                    <Label htmlFor="marketing">Marketing emails</Label>
                    <p className="text-sm text-muted-foreground">
                        Receive tips and product announcements.
                    </p>
                </div>
            </div>
            <div className="items-top flex space-x-2">
                <Checkbox id="partner" disabled />
                <div className="grid gap-1.5 leading-none">
                    <Label htmlFor="partner" className="text-muted-foreground">Partner offers</Label>
                    <p className="text-sm text-muted-foreground">
                        This option is currently unavailable.
                    </p>
                </div>
            </div>
        </div>
}`,...(C=(k=d.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};const H=["Default","Checked","Disabled","WithDescription","MultipleWithDescriptions"];export{t as Checked,r as Default,i as Disabled,d as MultipleWithDescriptions,n as WithDescription,H as __namedExportsOrder,G as default};
