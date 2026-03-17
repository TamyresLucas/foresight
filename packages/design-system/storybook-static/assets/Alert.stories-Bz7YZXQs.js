import{j as e}from"./jsx-runtime-BYYWji4R.js";import{r as g}from"./index-ClcD9ViR.js";import{c as re}from"./index-C2vczdB5.js";import{c as v}from"./utils-CDN07tui.js";import{ad as w,am as y,w as N,an as f,ao as se,A as ae,ap as te,s as ne}from"./icons-BXU3tp_f.js";import{B as j}from"./button-DY4UnA7S.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./icon-CPjmVJEk.js";import"./index-CyBucMil.js";import"./index-Bew1Yeam.js";const ie=re("relative w-full rounded-lg border p-4 grid grid-cols-[auto_1fr] gap-x-3 items-start [&>svg]:shrink-0 [&>svg]:mt-0.5 [&>svg]:row-span-2 [&>.material-symbols-rounded]:shrink-0 [&>.material-symbols-rounded]:mt-0.5 [&>.material-symbols-rounded]:row-span-2",{variants:{variant:{default:"bg-primary/10 border-border-subtle text-foreground shadow-sm [&>svg]:text-primary [&>.material-symbols-rounded]:text-primary",destructive:"border-destructive/40 text-foreground dark:border-destructive [&>svg]:text-destructive [&>.material-symbols-rounded]:text-destructive bg-destructive/10",success:"border-success/40 text-foreground dark:border-success [&>svg]:text-success [&>.material-symbols-rounded]:text-success bg-success/10",warning:"border-warning/40 text-foreground dark:border-warning [&>svg]:text-warning [&>.material-symbols-rounded]:text-warning bg-warning/10",info:"border-primary/40 text-foreground dark:border-info [&>svg]:text-info [&>.material-symbols-rounded]:text-info bg-info/10"}},defaultVariants:{variant:"default"}}),r=g.forwardRef(({className:t,variant:n,...i},ee)=>e.jsx("div",{ref:ee,role:"alert",className:v(ie({variant:n}),t),...i}));r.displayName="Alert";const a=g.forwardRef(({className:t,...n},i)=>e.jsx("h5",{ref:i,className:v("mb-1 font-medium leading-none tracking-tight",t),...n}));a.displayName="AlertTitle";const s=g.forwardRef(({className:t,...n},i)=>e.jsx("div",{ref:i,className:v("text-sm [&_p]:leading-relaxed",t),...n}));s.displayName="AlertDescription";try{r.displayName="Alert",r.__docgenInfo={description:"",displayName:"Alert",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:'"default" | "destructive" | "success" | "warning" | "info" | null'}}}}}catch{}try{a.displayName="AlertTitle",a.__docgenInfo={description:"",displayName:"AlertTitle",props:{}}}catch{}try{s.displayName="AlertDescription",s.__docgenInfo={description:"",displayName:"AlertDescription",props:{}}}catch{}const ge={title:"Components/Feedback/Alert",component:r,parameters:{layout:"centered"},tags:["autodocs"]},l={render:()=>e.jsxs(r,{className:"w-[450px]",children:[e.jsx(se,{className:"h-4 w-4"}),e.jsx(a,{children:"Heads up!"}),e.jsx(s,{children:"You can add components to your app using the cli."})]})},c={render:()=>e.jsxs(r,{variant:"destructive",className:"w-[450px]",children:[e.jsx(ae,{className:"h-4 w-4"}),e.jsx(a,{children:"Error"}),e.jsx(s,{children:"Your session has expired. Please log in again."})]})},o={render:()=>e.jsxs(r,{variant:"success",className:"w-[450px]",children:[e.jsx(y,{className:"h-4 w-4"}),e.jsx(a,{children:"Success!"}),e.jsx(s,{children:"Your survey has been published successfully."})]})},d={render:()=>e.jsxs(r,{variant:"warning",className:"w-[450px]",children:[e.jsx(N,{className:"h-4 w-4"}),e.jsx(a,{children:"Warning"}),e.jsx(s,{children:"Your survey has unsaved changes. Save before leaving."})]})},p={render:()=>e.jsxs(r,{variant:"info",className:"w-[450px]",children:[e.jsx(w,{className:"h-4 w-4"}),e.jsx(a,{children:"Information"}),e.jsx(s,{children:"Your subscription will renew on January 15, 2026."})]})},m={render:()=>e.jsxs(r,{className:"w-[450px]",children:[e.jsx(ne,{className:"h-4 w-4"}),e.jsx(a,{children:"New features available"}),e.jsxs(s,{className:"flex flex-col gap-2",children:[e.jsx("span",{children:"Check out the new survey templates and analytics dashboard."}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(j,{size:"sm",variant:"ghost",children:"Learn More"}),e.jsx(j,{size:"sm",variant:"ghost",children:"Dismiss"})]})]})]})},u={render:()=>e.jsxs(r,{variant:"destructive",className:"w-[450px]",children:[e.jsx(f,{className:"h-4 w-4"}),e.jsx(a,{children:"Survey Validation Failed"}),e.jsx(s,{children:e.jsxs("ul",{className:"list-disc list-inside mt-2 space-y-1",children:[e.jsx("li",{children:"Question 3 requires at least 2 answer options"}),e.jsx("li",{children:"Skip logic on Question 7 references deleted question"}),e.jsx("li",{children:"Thank you page message is required"})]})})]})},h={render:()=>e.jsxs(r,{className:"w-[450px] border-primary/50 bg-primary/5",children:[e.jsx(te,{className:"h-4 w-4 text-primary"}),e.jsx(a,{className:"text-primary",children:"Pro Tip"}),e.jsx(s,{children:"Keep your surveys under 10 questions for a 40% higher completion rate. Consider using skip logic to personalize the experience."})]})},x={render:()=>e.jsxs("div",{className:"w-[450px] space-y-4",children:[e.jsxs(r,{children:[e.jsx(w,{className:"h-4 w-4"}),e.jsx(a,{children:"Default Alert"}),e.jsx(s,{children:"This is the default alert style."})]}),e.jsxs(r,{variant:"success",children:[e.jsx(y,{className:"h-4 w-4"}),e.jsx(a,{children:"Success Alert"}),e.jsx(s,{children:"Action completed successfully."})]}),e.jsxs(r,{variant:"warning",children:[e.jsx(N,{className:"h-4 w-4"}),e.jsx(a,{children:"Warning Alert"}),e.jsx(s,{children:"Please review before proceeding."})]}),e.jsxs(r,{variant:"destructive",children:[e.jsx(f,{className:"h-4 w-4"}),e.jsx(a,{children:"Error Alert"}),e.jsx(s,{children:"Something went wrong."})]})]})},A={render:()=>e.jsxs("div",{className:"w-[350px] space-y-4",children:[e.jsxs(r,{className:"py-2",children:[e.jsx(w,{className:"h-4 w-4"}),e.jsx(s,{children:"Survey saved as draft."})]}),e.jsxs(r,{variant:"success",className:"py-2",children:[e.jsx(y,{className:"h-4 w-4"}),e.jsx(s,{children:"Survey published successfully."})]}),e.jsxs(r,{variant:"warning",className:"py-2",children:[e.jsx(N,{className:"h-4 w-4"}),e.jsx(s,{children:"Unaved changes in draft."})]}),e.jsxs(r,{variant:"destructive",className:"py-2",children:[e.jsx(f,{className:"h-4 w-4"}),e.jsx(s,{children:"Failed to save survey."})]})]})};var b,D,T;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <Alert className="w-[450px]">
            <Terminal className="h-4 w-4" />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
                You can add components to your app using the cli.
            </AlertDescription>
        </Alert>
}`,...(T=(D=l.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};var S,_,C;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <Alert variant="destructive" className="w-[450px]">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
                Your session has expired. Please log in again.
            </AlertDescription>
        </Alert>
}`,...(C=(_=c.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};var k,I,Y;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <Alert variant="success" className="w-[450px]">
            <CheckCircle2 className="h-4 w-4" />
            <AlertTitle>Success!</AlertTitle>
            <AlertDescription>
                Your survey has been published successfully.
            </AlertDescription>
        </Alert>
}`,...(Y=(I=o.parameters)==null?void 0:I.docs)==null?void 0:Y.source}}};var q,E,V;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <Alert variant="warning" className="w-[450px]">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Warning</AlertTitle>
            <AlertDescription>
                Your survey has unsaved changes. Save before leaving.
            </AlertDescription>
        </Alert>
}`,...(V=(E=d.parameters)==null?void 0:E.docs)==null?void 0:V.source}}};var B,W,z;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <Alert variant="info" className="w-[450px]">
            <InfoIcon className="h-4 w-4" />
            <AlertTitle>Information</AlertTitle>
            <AlertDescription>
                Your subscription will renew on January 15, 2026.
            </AlertDescription>
        </Alert>
}`,...(z=(W=p.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};var P,F,L;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <Alert className="w-[450px]">
            <Bell className="h-4 w-4" />
            <AlertTitle>New features available</AlertTitle>
            <AlertDescription className="flex flex-col gap-2">
                <span>Check out the new survey templates and analytics dashboard.</span>
                <div className="flex gap-2">
                    <Button size="sm" variant="ghost">Learn More</Button>
                    <Button size="sm" variant="ghost">Dismiss</Button>
                </div>
            </AlertDescription>
        </Alert>
}`,...(L=(F=m.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var Q,R,X;u.parameters={...u.parameters,docs:{...(Q=u.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <Alert variant="destructive" className="w-[450px]">
            <XCircle className="h-4 w-4" />
            <AlertTitle>Survey Validation Failed</AlertTitle>
            <AlertDescription>
                <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Question 3 requires at least 2 answer options</li>
                    <li>Skip logic on Question 7 references deleted question</li>
                    <li>Thank you page message is required</li>
                </ul>
            </AlertDescription>
        </Alert>
}`,...(X=(R=u.parameters)==null?void 0:R.docs)==null?void 0:X.source}}};var H,J,K;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <Alert className="w-[450px] border-primary/50 bg-primary/5">
            <Lightbulb className="h-4 w-4 text-primary" />
            <AlertTitle className="text-primary">Pro Tip</AlertTitle>
            <AlertDescription>
                Keep your surveys under 10 questions for a 40% higher completion rate.
                Consider using skip logic to personalize the experience.
            </AlertDescription>
        </Alert>
}`,...(K=(J=h.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var M,U,O;x.parameters={...x.parameters,docs:{...(M=x.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div className="w-[450px] space-y-4">
            <Alert>
                <InfoIcon className="h-4 w-4" />
                <AlertTitle>Default Alert</AlertTitle>
                <AlertDescription>
                    This is the default alert style.
                </AlertDescription>
            </Alert>

            <Alert variant="success">
                <CheckCircle2 className="h-4 w-4" />
                <AlertTitle>Success Alert</AlertTitle>
                <AlertDescription>
                    Action completed successfully.
                </AlertDescription>
            </Alert>

            <Alert variant="warning">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Warning Alert</AlertTitle>
                <AlertDescription>
                    Please review before proceeding.
                </AlertDescription>
            </Alert>

            <Alert variant="destructive">
                <XCircle className="h-4 w-4" />
                <AlertTitle>Error Alert</AlertTitle>
                <AlertDescription>
                    Something went wrong.
                </AlertDescription>
            </Alert>
        </div>
}`,...(O=(U=x.parameters)==null?void 0:U.docs)==null?void 0:O.source}}};var $,G,Z;A.parameters={...A.parameters,docs:{...($=A.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <div className="w-[350px] space-y-4">
            <Alert className="py-2">
                <InfoIcon className="h-4 w-4" />
                <AlertDescription>
                    Survey saved as draft.
                </AlertDescription>
            </Alert>
            <Alert variant="success" className="py-2">
                <CheckCircle2 className="h-4 w-4" />
                <AlertDescription>
                    Survey published successfully.
                </AlertDescription>
            </Alert>
            <Alert variant="warning" className="py-2">
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>
                    Unaved changes in draft.
                </AlertDescription>
            </Alert>
            <Alert variant="destructive" className="py-2">
                <XCircle className="h-4 w-4" />
                <AlertDescription>
                    Failed to save survey.
                </AlertDescription>
            </Alert>
        </div>
}`,...(Z=(G=A.parameters)==null?void 0:G.docs)==null?void 0:Z.source}}};const ve=["Default","Destructive","Success","Warning","Info","WithAction","SurveyValidationError","SurveyTip","AllVariants","Compact"];export{x as AllVariants,A as Compact,l as Default,c as Destructive,p as Info,o as Success,h as SurveyTip,u as SurveyValidationError,d as Warning,m as WithAction,ve as __namedExportsOrder,ge as default};
