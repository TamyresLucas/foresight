import{j as e}from"./jsx-runtime-BYYWji4R.js";import{I as r}from"./input-D4wTwlKS.js";import{L as s}from"./label-D3XcEZ0Y.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./utils-CDN07tui.js";import"./index-Drr-0Uuw.js";import"./index-Bew1Yeam.js";import"./index-C2vczdB5.js";const T={title:"Components/Form Elements/Input",component:r,parameters:{layout:"centered"},tags:["autodocs"]},a={args:{type:"text",placeholder:"Email"}},t={render:C=>e.jsxs("div",{className:"grid w-full max-w-sm items-center gap-1.5",children:[e.jsx(s,{htmlFor:"email-2",children:"Email"}),e.jsx(r,{type:"email",id:"email-2",placeholder:"Email",...C})]})},l={args:{disabled:!0,placeholder:"Disabled input"}},o={render:()=>e.jsxs("div",{className:"grid w-full max-w-sm items-center gap-1.5",children:[e.jsx(s,{htmlFor:"email-error",children:"Email"}),e.jsx(r,{type:"email",id:"email-error",placeholder:"Email",className:"border-destructive focus-visible:ring-destructive","aria-invalid":"true",defaultValue:"invalid-email"}),e.jsx("p",{className:"text-sm text-destructive",children:"Please enter a valid email address."})]})},n={render:()=>e.jsxs("div",{className:"flex flex-col gap-6 w-full max-w-sm",children:[e.jsxs("div",{className:"grid gap-1.5",children:[e.jsx(s,{htmlFor:"required-error",children:"Required Field"}),e.jsx(r,{id:"required-error",placeholder:"This field is required",className:"border-destructive focus-visible:ring-destructive","aria-invalid":"true"}),e.jsx("p",{className:"text-sm text-destructive",children:"This field is required."})]}),e.jsxs("div",{className:"grid gap-1.5",children:[e.jsx(s,{htmlFor:"format-error",children:"Phone Number"}),e.jsx(r,{id:"format-error",placeholder:"(000) 000-0000",className:"border-destructive focus-visible:ring-destructive","aria-invalid":"true",defaultValue:"123"}),e.jsx("p",{className:"text-sm text-destructive",children:"Please enter a valid phone number."})]}),e.jsxs("div",{className:"grid gap-1.5",children:[e.jsx(s,{htmlFor:"length-error",children:"Username"}),e.jsx(r,{id:"length-error",placeholder:"At least 3 characters",className:"border-destructive focus-visible:ring-destructive","aria-invalid":"true",defaultValue:"ab"}),e.jsx("p",{className:"text-sm text-destructive",children:"Username must be at least 3 characters."})]})]})},i={render:()=>e.jsxs("div",{className:"relative w-full max-w-sm",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})}),e.jsx(r,{type:"search",placeholder:"Search...",className:"pl-9"})]})},d={render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-full max-w-sm",children:[e.jsxs("div",{className:"relative",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})}),e.jsx(r,{type:"search",placeholder:"Search surveys...",className:"pl-9"})]}),e.jsxs("div",{className:"relative",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})}),e.jsx(r,{type:"email",placeholder:"Email address",className:"pl-9"})]}),e.jsxs("div",{className:"relative",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})}),e.jsx(r,{type:"text",placeholder:"Username",className:"pl-9"})]}),e.jsxs("div",{className:"relative",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"})}),e.jsx(r,{type:"password",placeholder:"Password",className:"pl-9 pr-9"}),e.jsx("button",{className:"absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground",children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:[e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}),e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"})]})})]})]})};var c,m,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    type: 'text',
    placeholder: 'Email'
  }
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var p,h,v;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email-2">Email</Label>
            <Input type="email" id="email-2" placeholder="Email" {...args} />
        </div>
}`,...(v=(h=t.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var x,g,w;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    disabled: true,
    placeholder: 'Disabled input'
  }
}`,...(w=(g=l.parameters)==null?void 0:g.docs)==null?void 0:w.source}}};var f,N,j;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email-error">Email</Label>
            <Input type="email" id="email-error" placeholder="Email" className="border-destructive focus-visible:ring-destructive" aria-invalid="true" defaultValue="invalid-email" />
            <p className="text-sm text-destructive">Please enter a valid email address.</p>
        </div>
}`,...(j=(N=o.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var b,k,L;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6 w-full max-w-sm">
            <div className="grid gap-1.5">
                <Label htmlFor="required-error">Required Field</Label>
                <Input id="required-error" placeholder="This field is required" className="border-destructive focus-visible:ring-destructive" aria-invalid="true" />
                <p className="text-sm text-destructive">This field is required.</p>
            </div>
            <div className="grid gap-1.5">
                <Label htmlFor="format-error">Phone Number</Label>
                <Input id="format-error" placeholder="(000) 000-0000" className="border-destructive focus-visible:ring-destructive" aria-invalid="true" defaultValue="123" />
                <p className="text-sm text-destructive">Please enter a valid phone number.</p>
            </div>
            <div className="grid gap-1.5">
                <Label htmlFor="length-error">Username</Label>
                <Input id="length-error" placeholder="At least 3 characters" className="border-destructive focus-visible:ring-destructive" aria-invalid="true" defaultValue="ab" />
                <p className="text-sm text-destructive">Username must be at least 3 characters.</p>
            </div>
        </div>
}`,...(L=(k=n.parameters)==null?void 0:k.docs)==null?void 0:L.source}}};var y,I,E;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div className="relative w-full max-w-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <Input type="search" placeholder="Search..." className="pl-9" />
        </div>
}`,...(E=(I=i.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};var W,z,M;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 w-full max-w-sm">
            {/* Search Input */}
            <div className="relative">
                <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <Input type="search" placeholder="Search surveys..." className="pl-9" />
            </div>

            {/* Email Input */}
            <div className="relative">
                <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <Input type="email" placeholder="Email address" className="pl-9" />
            </div>

            {/* User Input */}
            <div className="relative">
                <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <Input type="text" placeholder="Username" className="pl-9" />
            </div>

            {/* Password Input with trailing icon */}
            <div className="relative">
                <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <Input type="password" placeholder="Password" className="pl-9 pr-9" />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                </button>
            </div>
        </div>
}`,...(M=(z=d.parameters)==null?void 0:z.docs)==null?void 0:M.source}}};const R=["Default","WithLabel","Disabled","Error","ErrorVariants","WithIcon","WithIconVariants"];export{a as Default,l as Disabled,o as Error,n as ErrorVariants,i as WithIcon,d as WithIconVariants,t as WithLabel,R as __namedExportsOrder,T as default};
