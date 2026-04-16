import{j as e}from"./jsx-runtime-BYYWji4R.js";import{r as E}from"./index-ClcD9ViR.js";import{S as s}from"./switch-CM9DjxPM.js";import{L as a}from"./label-D3XcEZ0Y.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DW48STyt.js";import"./index-Bew1Yeam.js";import"./index-CWz5EflU.js";import"./index-B0ATiKj9.js";import"./index-CafsI6Qv.js";import"./index-sY83p_TZ.js";import"./index-Jh3OPyOv.js";import"./index-C59fdHCL.js";import"./index-Drr-0Uuw.js";import"./index-CyBucMil.js";import"./utils-CDN07tui.js";import"./index-C2vczdB5.js";const Z={title:"ShadCn/Form Elements/Switch",component:s,parameters:{layout:"centered"}},t={render:()=>e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(s,{id:"airplane-mode"}),e.jsx(a,{htmlFor:"airplane-mode",children:"Airplane Mode"})]})},r={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(s,{id:"disabled-off",disabled:!0}),e.jsx(a,{htmlFor:"disabled-off",className:"text-muted-foreground",children:"Disabled (off)"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(s,{id:"disabled-on",disabled:!0,defaultChecked:!0}),e.jsx(a,{htmlFor:"disabled-on",className:"text-muted-foreground",children:"Disabled (on)"})]})]})},i={render:()=>e.jsxs("div",{className:"flex items-start space-x-3",children:[e.jsx(s,{id:"notifications",className:"mt-1"}),e.jsxs("div",{className:"grid gap-1.5",children:[e.jsx(a,{htmlFor:"notifications",children:"Push Notifications"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Receive push notifications when someone responds to your survey."})]})]})},M=()=>{const[o,A]=E.useState(!1);return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(s,{id:"controlled",checked:o,onCheckedChange:A}),e.jsx(a,{htmlFor:"controlled",children:o?"Enabled":"Disabled"})]}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Current state: ",e.jsx("code",{className:"bg-muted px-1 rounded",children:o.toString()})]})]})},d={render:()=>e.jsx(M,{})},n={render:()=>e.jsxs("div",{className:"w-full max-w-md border rounded-lg divide-y",children:[e.jsxs("div",{className:"flex items-center justify-between p-4",children:[e.jsxs("div",{className:"space-y-0.5",children:[e.jsx(a,{children:"Email Notifications"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Receive emails about your survey responses"})]}),e.jsx(s,{id:"email",defaultChecked:!0})]}),e.jsxs("div",{className:"flex items-center justify-between p-4",children:[e.jsxs("div",{className:"space-y-0.5",children:[e.jsx(a,{children:"Push Notifications"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Get notified on your mobile device"})]}),e.jsx(s,{id:"push"})]}),e.jsxs("div",{className:"flex items-center justify-between p-4",children:[e.jsxs("div",{className:"space-y-0.5",children:[e.jsx(a,{children:"SMS Notifications"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Receive text messages for important updates"})]}),e.jsx(s,{id:"sms",disabled:!0})]})]})},l={render:()=>e.jsxs("div",{className:"w-full max-w-md space-y-6",children:[e.jsx("h3",{className:"text-lg font-medium",children:"Survey Settings"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between p-4 border rounded-lg",children:[e.jsxs("div",{className:"space-y-0.5",children:[e.jsx(a,{children:"Anonymous Responses"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Don't collect respondent information"})]}),e.jsx(s,{id:"anonymous",defaultChecked:!0})]}),e.jsxs("div",{className:"flex items-center justify-between p-4 border rounded-lg",children:[e.jsxs("div",{className:"space-y-0.5",children:[e.jsx(a,{children:"Required Questions"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Make all questions mandatory by default"})]}),e.jsx(s,{id:"required"})]}),e.jsxs("div",{className:"flex items-center justify-between p-4 border rounded-lg",children:[e.jsxs("div",{className:"space-y-0.5",children:[e.jsx(a,{children:"Progress Bar"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Show completion percentage to respondents"})]}),e.jsx(s,{id:"progress",defaultChecked:!0})]}),e.jsxs("div",{className:"flex items-center justify-between p-4 border rounded-lg",children:[e.jsxs("div",{className:"space-y-0.5",children:[e.jsx(a,{children:"Auto-advance"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Automatically move to next question after selection"})]}),e.jsx(s,{id:"autoadvance"})]})]})]})},c={render:()=>e.jsxs("div",{className:"flex items-center gap-8",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(s,{id:"small",className:"scale-75"}),e.jsx(a,{htmlFor:"small",children:"Small"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(s,{id:"default"}),e.jsx(a,{htmlFor:"default",children:"Default"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(s,{id:"large",className:"scale-125"}),e.jsx(a,{htmlFor:"large",children:"Large"})]})]})};var m,u,x;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div className="flex items-center space-x-2">
            <Switch id="airplane-mode" />
            <Label htmlFor="airplane-mode">Airplane Mode</Label>
        </div>
}`,...(x=(u=t.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var p,f,h;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
            <div className="flex items-center space-x-2">
                <Switch id="disabled-off" disabled />
                <Label htmlFor="disabled-off" className="text-muted-foreground">
                    Disabled (off)
                </Label>
            </div>
            <div className="flex items-center space-x-2">
                <Switch id="disabled-on" disabled defaultChecked />
                <Label htmlFor="disabled-on" className="text-muted-foreground">
                    Disabled (on)
                </Label>
            </div>
        </div>
}`,...(h=(f=r.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var v,N,j;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div className="flex items-start space-x-3">
            <Switch id="notifications" className="mt-1" />
            <div className="grid gap-1.5">
                <Label htmlFor="notifications">
                    Push Notifications
                </Label>
                <p className="text-sm text-muted-foreground">
                    Receive push notifications when someone responds to your survey.
                </p>
            </div>
        </div>
}`,...(j=(N=i.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var b,g,y;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <ControlledSwitch />
}`,...(y=(g=d.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var S,w,L;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div className="w-full max-w-md border rounded-lg divide-y">
            <div className="flex items-center justify-between p-4">
                <div className="space-y-0.5">
                    <Label>Email Notifications</Label>
                    <p className="text-sm text-muted-foreground">
                        Receive emails about your survey responses
                    </p>
                </div>
                <Switch id="email" defaultChecked />
            </div>
            <div className="flex items-center justify-between p-4">
                <div className="space-y-0.5">
                    <Label>Push Notifications</Label>
                    <p className="text-sm text-muted-foreground">
                        Get notified on your mobile device
                    </p>
                </div>
                <Switch id="push" />
            </div>
            <div className="flex items-center justify-between p-4">
                <div className="space-y-0.5">
                    <Label>SMS Notifications</Label>
                    <p className="text-sm text-muted-foreground">
                        Receive text messages for important updates
                    </p>
                </div>
                <Switch id="sms" disabled />
            </div>
        </div>
}`,...(L=(w=n.parameters)==null?void 0:w.docs)==null?void 0:L.source}}};var C,F,D;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div className="w-full max-w-md space-y-6">
            <h3 className="text-lg font-medium">Survey Settings</h3>
            <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="space-y-0.5">
                        <Label>Anonymous Responses</Label>
                        <p className="text-sm text-muted-foreground">
                            Don't collect respondent information
                        </p>
                    </div>
                    <Switch id="anonymous" defaultChecked />
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="space-y-0.5">
                        <Label>Required Questions</Label>
                        <p className="text-sm text-muted-foreground">
                            Make all questions mandatory by default
                        </p>
                    </div>
                    <Switch id="required" />
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="space-y-0.5">
                        <Label>Progress Bar</Label>
                        <p className="text-sm text-muted-foreground">
                            Show completion percentage to respondents
                        </p>
                    </div>
                    <Switch id="progress" defaultChecked />
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="space-y-0.5">
                        <Label>Auto-advance</Label>
                        <p className="text-sm text-muted-foreground">
                            Automatically move to next question after selection
                        </p>
                    </div>
                    <Switch id="autoadvance" />
                </div>
            </div>
        </div>
}`,...(D=(F=l.parameters)==null?void 0:F.docs)==null?void 0:D.source}}};var k,R,q;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-8">
            <div className="flex items-center space-x-2">
                <Switch id="small" className="scale-75" />
                <Label htmlFor="small">Small</Label>
            </div>
            <div className="flex items-center space-x-2">
                <Switch id="default" />
                <Label htmlFor="default">Default</Label>
            </div>
            <div className="flex items-center space-x-2">
                <Switch id="large" className="scale-125" />
                <Label htmlFor="large">Large</Label>
            </div>
        </div>
}`,...(q=(R=c.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};const $=["Default","Disabled","WithDescription","Controlled","SettingsList","SurveySettings","Sizes"];export{d as Controlled,t as Default,r as Disabled,n as SettingsList,c as Sizes,l as SurveySettings,i as WithDescription,$ as __namedExportsOrder,Z as default};
