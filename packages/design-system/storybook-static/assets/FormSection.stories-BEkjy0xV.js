import{j as e}from"./jsx-runtime-BYYWji4R.js";import{F as c,a as M,b as k,c as v}from"./FormSection-DW9GMY1R.js";import{B as o}from"./button-D_2cT0Yd.js";import{I as l}from"./input-CgUhi0Pz.js";import{L as a}from"./label-D3XcEZ0Y.js";import{T as _}from"./textarea-C00EirGh.js";import{S as d,a as m,b as u,c as p,d as n}from"./select-C7AyIqOl.js";import{C as h}from"./checkbox-BgGr9jDO.js";const W={title:"ShadCn/Form Elements/Form Layouts",component:c,parameters:{layout:"padded"}},s={render:()=>e.jsxs("div",{className:"max-w-3xl rounded-lg border bg-card p-6",children:[e.jsxs(c,{title:"Create New Survey",description:"Fill in the basic information for your survey",columns:2,children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(a,{htmlFor:"name",children:"Survey Name *"}),e.jsx(l,{id:"name",placeholder:"e.g., Customer Satisfaction 2026"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(a,{htmlFor:"category",children:"Category"}),e.jsxs(d,{children:[e.jsx(m,{children:e.jsx(u,{placeholder:"Select a category"})}),e.jsxs(p,{children:[e.jsx(n,{value:"satisfaction",children:"Satisfaction"}),e.jsx(n,{value:"research",children:"Market Research"}),e.jsx(n,{value:"feedback",children:"Feedback"})]})]})]}),e.jsx(k,{fullWidth:!0,children:e.jsxs("div",{className:"space-y-2",children:[e.jsx(a,{htmlFor:"description",children:"Description"}),e.jsx(_,{id:"description",placeholder:"Describe the survey objective...",className:"min-h-[100px]"})]})}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(a,{htmlFor:"language",children:"Language"}),e.jsxs(d,{children:[e.jsx(m,{children:e.jsx(u,{placeholder:"Select language"})}),e.jsxs(p,{children:[e.jsx(n,{value:"en",children:"English"}),e.jsx(n,{value:"es",children:"Spanish"}),e.jsx(n,{value:"fr",children:"French"})]})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(a,{htmlFor:"target",children:"Response Goal"}),e.jsx(l,{id:"target",type:"number",placeholder:"e.g., 500"})]})]}),e.jsxs(v,{children:[e.jsx(o,{variant:"outline",children:"Cancel"}),e.jsx(o,{children:"Create Survey"})]})]})},r={render:()=>e.jsxs("div",{className:"max-w-3xl rounded-lg border bg-card p-6",children:[e.jsxs(c,{title:"Basic Information",description:"General survey data",columns:2,children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(a,{htmlFor:"survey-name",children:"Survey Name"}),e.jsx(l,{id:"survey-name",defaultValue:"Customer Satisfaction"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(a,{htmlFor:"survey-id",children:"Survey ID"}),e.jsx(l,{id:"survey-id",defaultValue:"survey-001",disabled:!0})]})]}),e.jsxs(c,{title:"Distribution Settings",description:"Define how the survey will be sent",showSeparator:!0,columns:2,children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(a,{htmlFor:"start-date",children:"Start Date"}),e.jsx(l,{id:"start-date",type:"date"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(a,{htmlFor:"end-date",children:"End Date"}),e.jsx(l,{id:"end-date",type:"date"})]}),e.jsx(k,{fullWidth:!0,children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(h,{id:"anonymous"}),e.jsx(a,{htmlFor:"anonymous",className:"font-normal",children:"Keep responses anonymous"})]})})]}),e.jsxs(c,{title:"Notifications",description:"Configure email alerts",showSeparator:!0,children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(h,{id:"notify-complete",defaultChecked:!0}),e.jsx(a,{htmlFor:"notify-complete",className:"font-normal",children:"Notify when goal is reached"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(h,{id:"notify-daily"}),e.jsx(a,{htmlFor:"notify-daily",className:"font-normal",children:"Daily response summary"})]})]}),e.jsxs(v,{children:[e.jsx(o,{variant:"outline",children:"Cancel"}),e.jsx(o,{children:"Save Settings"})]})]})},t={render:()=>e.jsxs("div",{className:"max-w-xl rounded-lg border bg-card p-6",children:[e.jsxs(c,{title:"Account Settings",description:"Manage your preferences",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(a,{htmlFor:"email",children:"Email"}),e.jsx(l,{id:"email",type:"email",defaultValue:"user@voxco.com"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(a,{htmlFor:"timezone",children:"Timezone"}),e.jsxs(d,{defaultValue:"america-ny",children:[e.jsx(m,{children:e.jsx(u,{})}),e.jsxs(p,{children:[e.jsx(n,{value:"america-ny",children:"America/New_York (GMT-5)"}),e.jsx(n,{value:"america-la",children:"America/Los_Angeles (GMT-8)"}),e.jsx(n,{value:"europe-london",children:"Europe/London (GMT+0)"})]})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(a,{htmlFor:"language-pref",children:"Interface Language"}),e.jsxs(d,{defaultValue:"en",children:[e.jsx(m,{children:e.jsx(u,{})}),e.jsxs(p,{children:[e.jsx(n,{value:"en",children:"English"}),e.jsx(n,{value:"es",children:"Spanish"})]})]})]})]}),e.jsxs(v,{align:"between",children:[e.jsx(o,{variant:"ghost-destructive",children:"Delete Account"}),e.jsx(o,{children:"Save"})]})]})},i={render:()=>e.jsxs("div",{className:"max-w-4xl rounded-lg border bg-card p-6",children:[e.jsx("h3",{className:"mb-4 text-lg font-medium",children:"4 Column Grid (Responsive)"}),e.jsxs(M,{columns:4,children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(a,{htmlFor:"field1",children:"Field 1"}),e.jsx(l,{id:"field1",placeholder:"Value"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(a,{htmlFor:"field2",children:"Field 2"}),e.jsx(l,{id:"field2",placeholder:"Value"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(a,{htmlFor:"field3",children:"Field 3"}),e.jsx(l,{id:"field3",placeholder:"Value"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(a,{htmlFor:"field4",children:"Field 4"}),e.jsx(l,{id:"field4",placeholder:"Value"})]})]})]})};var x,S,y,g,f;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div className="max-w-3xl rounded-lg border bg-card p-6">
            <FormSection title="Create New Survey" description="Fill in the basic information for your survey" columns={2}>
                <div className="space-y-2">
                    <Label htmlFor="name">Survey Name *</Label>
                    <Input id="name" placeholder="e.g., Customer Satisfaction 2026" />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="satisfaction">Satisfaction</SelectItem>
                            <SelectItem value="research">Market Research</SelectItem>
                            <SelectItem value="feedback">Feedback</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <FormFieldWrapper fullWidth>
                    <div className="space-y-2">
                        <Label htmlFor="description">Description</Label>
                        <Textarea id="description" placeholder="Describe the survey objective..." className="min-h-[100px]" />
                    </div>
                </FormFieldWrapper>

                <div className="space-y-2">
                    <Label htmlFor="language">Language</Label>
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Select language" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="en">English</SelectItem>
                            <SelectItem value="es">Spanish</SelectItem>
                            <SelectItem value="fr">French</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="target">Response Goal</Label>
                    <Input id="target" type="number" placeholder="e.g., 500" />
                </div>
            </FormSection>

            <FormActions>
                <Button variant="outline">Cancel</Button>
                <Button>Create Survey</Button>
            </FormActions>
        </div>
}`,...(y=(S=s.parameters)==null?void 0:S.docs)==null?void 0:y.source},description:{story:`Two-column form layout with responsive grid.
Perfect for "Create Survey" or "User Settings" forms.`,...(f=(g=s.parameters)==null?void 0:g.docs)==null?void 0:f.description}}};var j,F,b,N,L;r.parameters={...r.parameters,docs:{...(j=r.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div className="max-w-3xl rounded-lg border bg-card p-6">
            <FormSection title="Basic Information" description="General survey data" columns={2}>
                <div className="space-y-2">
                    <Label htmlFor="survey-name">Survey Name</Label>
                    <Input id="survey-name" defaultValue="Customer Satisfaction" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="survey-id">Survey ID</Label>
                    <Input id="survey-id" defaultValue="survey-001" disabled />
                </div>
            </FormSection>

            <FormSection title="Distribution Settings" description="Define how the survey will be sent" showSeparator columns={2}>
                <div className="space-y-2">
                    <Label htmlFor="start-date">Start Date</Label>
                    <Input id="start-date" type="date" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="end-date">End Date</Label>
                    <Input id="end-date" type="date" />
                </div>
                <FormFieldWrapper fullWidth>
                    <div className="flex items-center gap-2">
                        <Checkbox id="anonymous" />
                        <Label htmlFor="anonymous" className="font-normal">
                            Keep responses anonymous
                        </Label>
                    </div>
                </FormFieldWrapper>
            </FormSection>

            <FormSection title="Notifications" description="Configure email alerts" showSeparator>
                <div className="flex items-center gap-2">
                    <Checkbox id="notify-complete" defaultChecked />
                    <Label htmlFor="notify-complete" className="font-normal">
                        Notify when goal is reached
                    </Label>
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox id="notify-daily" />
                    <Label htmlFor="notify-daily" className="font-normal">
                        Daily response summary
                    </Label>
                </div>
            </FormSection>

            <FormActions>
                <Button variant="outline">Cancel</Button>
                <Button>Save Settings</Button>
            </FormActions>
        </div>
}`,...(b=(F=r.parameters)==null?void 0:F.docs)==null?void 0:b.source},description:{story:`Form with multiple sections separated visually.
Ideal for longer configuration forms.`,...(L=(N=r.parameters)==null?void 0:N.docs)==null?void 0:L.description}}};var I,C,w,T,V;t.parameters={...t.parameters,docs:{...(I=t.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div className="max-w-xl rounded-lg border bg-card p-6">
            <FormSection title="Account Settings" description="Manage your preferences">
                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue="user@voxco.com" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="timezone">Timezone</Label>
                    <Select defaultValue="america-ny">
                        <SelectTrigger>
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="america-ny">America/New_York (GMT-5)</SelectItem>
                            <SelectItem value="america-la">America/Los_Angeles (GMT-8)</SelectItem>
                            <SelectItem value="europe-london">Europe/London (GMT+0)</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="language-pref">Interface Language</Label>
                    <Select defaultValue="en">
                        <SelectTrigger>
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="en">English</SelectItem>
                            <SelectItem value="es">Spanish</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </FormSection>

            <FormActions align="between">
                <Button variant="ghost-destructive">Delete Account</Button>
                <Button>Save</Button>
            </FormActions>
        </div>
}`,...(w=(C=t.parameters)==null?void 0:C.docs)==null?void 0:w.source},description:{story:`Single-column settings form.
Good for simpler configuration panels.`,...(V=(T=t.parameters)==null?void 0:T.docs)==null?void 0:V.description}}};var D,G,A,B,E;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div className="max-w-4xl rounded-lg border bg-card p-6">
            <h3 className="mb-4 text-lg font-medium">4 Column Grid (Responsive)</h3>
            <FormFieldGrid columns={4}>
                <div className="space-y-2">
                    <Label htmlFor="field1">Field 1</Label>
                    <Input id="field1" placeholder="Value" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="field2">Field 2</Label>
                    <Input id="field2" placeholder="Value" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="field3">Field 3</Label>
                    <Input id="field3" placeholder="Value" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="field4">Field 4</Label>
                    <Input id="field4" placeholder="Value" />
                </div>
            </FormFieldGrid>
        </div>
}`,...(A=(G=i.parameters)==null?void 0:G.docs)==null?void 0:A.source},description:{story:"Responsive grid for multiple field columns.",...(E=(B=i.parameters)==null?void 0:B.docs)==null?void 0:E.description}}};const R=["TwoColumnForm","MultiSectionForm","SettingsForm","FieldGridExample"],J=Object.freeze(Object.defineProperty({__proto__:null,FieldGridExample:i,MultiSectionForm:r,SettingsForm:t,TwoColumnForm:s,__namedExportsOrder:R,default:W},Symbol.toStringTag,{value:"Module"}));export{J as F,r as M,t as S,s as T,i as a};
