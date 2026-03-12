import{j as e}from"./jsx-runtime-BYYWji4R.js";import{r as v}from"./index-ClcD9ViR.js";import{c as re}from"./index-C2vczdB5.js";import{c as g}from"./utils-CDN07tui.js";import{u as w,O as y,w as N,Q as j,V as se,A as ae,W as ne,s as te}from"./icons-BrjYTXf4.js";import{B as f}from"./button-u6FMGbIq.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-CyBucMil.js";import"./index-Bew1Yeam.js";const ie=re("relative w-full rounded-lg border p-4 grid grid-cols-[auto_1fr] gap-x-3 items-start [&>svg]:shrink-0 [&>svg]:mt-0.5 [&>svg]:row-span-2 [&>.material-symbols-rounded]:shrink-0 [&>.material-symbols-rounded]:mt-0.5 [&>.material-symbols-rounded]:row-span-2",{variants:{variant:{default:"border-primary/40 text-foreground [&>svg]:text-primary [&>.material-symbols-rounded]:text-primary bg-[hsl(var(--secondary))]",destructive:"border-destructive/40 text-foreground dark:border-destructive [&>svg]:text-destructive [&>.material-symbols-rounded]:text-destructive bg-[hsl(var(--destructive))]",success:"border-success/40 text-foreground dark:border-success [&>svg]:text-success [&>.material-symbols-rounded]:text-success bg-[hsl(var(--success))]",warning:"border-warning/40 text-foreground dark:border-warning [&>svg]:text-warning [&>.material-symbols-rounded]:text-warning bg-[hsl(var(--warning))]",info:"border-primary/40 text-foreground dark:border-info [&>svg]:text-info [&>.material-symbols-rounded]:text-info bg-[hsl(var(--info))]"}},defaultVariants:{variant:"default"}}),r=v.forwardRef(({className:n,variant:t,...i},ee)=>e.jsx("div",{ref:ee,role:"alert",className:g(ie({variant:t}),n),...i}));r.displayName="Alert";const a=v.forwardRef(({className:n,...t},i)=>e.jsx("h5",{ref:i,className:g("mb-1 font-medium leading-none tracking-tight",n),...t}));a.displayName="AlertTitle";const s=v.forwardRef(({className:n,...t},i)=>e.jsx("div",{ref:i,className:g("text-sm [&_p]:leading-relaxed",n),...t}));s.displayName="AlertDescription";r.__docgenInfo={description:"",methods:[],displayName:"Alert"};a.__docgenInfo={description:"",methods:[],displayName:"AlertTitle"};s.__docgenInfo={description:"",methods:[],displayName:"AlertDescription"};const Ae={title:"Components/Feedback/Alert",component:r,parameters:{layout:"centered"},tags:["autodocs"]},l={render:()=>e.jsxs(r,{className:"w-[450px]",children:[e.jsx(se,{className:"h-4 w-4"}),e.jsx(a,{children:"Heads up!"}),e.jsx(s,{children:"You can add components to your app using the cli."})]})},c={render:()=>e.jsxs(r,{variant:"destructive",className:"w-[450px]",children:[e.jsx(ae,{className:"h-4 w-4"}),e.jsx(a,{children:"Error"}),e.jsx(s,{children:"Your session has expired. Please log in again."})]})},o={render:()=>e.jsxs(r,{variant:"success",className:"w-[450px]",children:[e.jsx(y,{className:"h-4 w-4"}),e.jsx(a,{children:"Success!"}),e.jsx(s,{children:"Your survey has been published successfully."})]})},d={render:()=>e.jsxs(r,{variant:"warning",className:"w-[450px]",children:[e.jsx(N,{className:"h-4 w-4"}),e.jsx(a,{children:"Warning"}),e.jsx(s,{children:"Your survey has unsaved changes. Save before leaving."})]})},m={render:()=>e.jsxs(r,{variant:"info",className:"w-[450px]",children:[e.jsx(w,{className:"h-4 w-4"}),e.jsx(a,{children:"Information"}),e.jsx(s,{children:"Your subscription will renew on January 15, 2026."})]})},p={render:()=>e.jsxs(r,{className:"w-[450px]",children:[e.jsx(te,{className:"h-4 w-4"}),e.jsx(a,{children:"New features available"}),e.jsxs(s,{className:"flex flex-col gap-2",children:[e.jsx("span",{children:"Check out the new survey templates and analytics dashboard."}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(f,{size:"sm",variant:"ghost",children:"Learn More"}),e.jsx(f,{size:"sm",variant:"ghost",children:"Dismiss"})]})]})]})},u={render:()=>e.jsxs(r,{variant:"destructive",className:"w-[450px]",children:[e.jsx(j,{className:"h-4 w-4"}),e.jsx(a,{children:"Survey Validation Failed"}),e.jsx(s,{children:e.jsxs("ul",{className:"list-disc list-inside mt-2 space-y-1",children:[e.jsx("li",{children:"Question 3 requires at least 2 answer options"}),e.jsx("li",{children:"Skip logic on Question 7 references deleted question"}),e.jsx("li",{children:"Thank you page message is required"})]})})]})},h={render:()=>e.jsxs(r,{className:"w-[450px] border-primary/50 bg-primary/5",children:[e.jsx(ne,{className:"h-4 w-4 text-primary"}),e.jsx(a,{className:"text-primary",children:"Pro Tip"}),e.jsx(s,{children:"Keep your surveys under 10 questions for a 40% higher completion rate. Consider using skip logic to personalize the experience."})]})},x={render:()=>e.jsxs("div",{className:"w-[450px] space-y-4",children:[e.jsxs(r,{children:[e.jsx(w,{className:"h-4 w-4"}),e.jsx(a,{children:"Default Alert"}),e.jsx(s,{children:"This is the default alert style."})]}),e.jsxs(r,{variant:"success",children:[e.jsx(y,{className:"h-4 w-4"}),e.jsx(a,{children:"Success Alert"}),e.jsx(s,{children:"Action completed successfully."})]}),e.jsxs(r,{variant:"warning",children:[e.jsx(N,{className:"h-4 w-4"}),e.jsx(a,{children:"Warning Alert"}),e.jsx(s,{children:"Please review before proceeding."})]}),e.jsxs(r,{variant:"destructive",children:[e.jsx(j,{className:"h-4 w-4"}),e.jsx(a,{children:"Error Alert"}),e.jsx(s,{children:"Something went wrong."})]})]})},A={render:()=>e.jsxs("div",{className:"w-[350px] space-y-4",children:[e.jsxs(r,{className:"py-2",children:[e.jsx(w,{className:"h-4 w-4"}),e.jsx(s,{children:"Survey saved as draft."})]}),e.jsxs(r,{variant:"success",className:"py-2",children:[e.jsx(y,{className:"h-4 w-4"}),e.jsx(s,{children:"Survey published successfully."})]}),e.jsxs(r,{variant:"warning",className:"py-2",children:[e.jsx(N,{className:"h-4 w-4"}),e.jsx(s,{children:"Unaved changes in draft."})]}),e.jsxs(r,{variant:"destructive",className:"py-2",children:[e.jsx(j,{className:"h-4 w-4"}),e.jsx(s,{children:"Failed to save survey."})]})]})};var b,D,T;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <Alert className="w-[450px]">
            <Terminal className="h-4 w-4" />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
                You can add components to your app using the cli.
            </AlertDescription>
        </Alert>
}`,...(T=(D=l.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};var S,C,k;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <Alert variant="destructive" className="w-[450px]">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
                Your session has expired. Please log in again.
            </AlertDescription>
        </Alert>
}`,...(k=(C=c.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var I,Y,_;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <Alert variant="success" className="w-[450px]">
            <CheckCircle2 className="h-4 w-4" />
            <AlertTitle>Success!</AlertTitle>
            <AlertDescription>
                Your survey has been published successfully.
            </AlertDescription>
        </Alert>
}`,...(_=(Y=o.parameters)==null?void 0:Y.docs)==null?void 0:_.source}}};var E,V,W;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <Alert variant="warning" className="w-[450px]">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Warning</AlertTitle>
            <AlertDescription>
                Your survey has unsaved changes. Save before leaving.
            </AlertDescription>
        </Alert>
}`,...(W=(V=d.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var q,B,z;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <Alert variant="info" className="w-[450px]">
            <InfoIcon className="h-4 w-4" />
            <AlertTitle>Information</AlertTitle>
            <AlertDescription>
                Your subscription will renew on January 15, 2026.
            </AlertDescription>
        </Alert>
}`,...(z=(B=m.parameters)==null?void 0:B.docs)==null?void 0:z.source}}};var P,F,Q;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(Q=(F=p.parameters)==null?void 0:F.docs)==null?void 0:Q.source}}};var L,R,X;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(K=(J=h.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var M,O,U;x.parameters={...x.parameters,docs:{...(M=x.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(U=(O=x.parameters)==null?void 0:O.docs)==null?void 0:U.source}}};var $,G,Z;A.parameters={...A.parameters,docs:{...($=A.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(Z=(G=A.parameters)==null?void 0:G.docs)==null?void 0:Z.source}}};const ve=["Default","Destructive","Success","Warning","Info","WithAction","SurveyValidationError","SurveyTip","AllVariants","Compact"];export{x as AllVariants,A as Compact,l as Default,c as Destructive,m as Info,o as Success,h as SurveyTip,u as SurveyValidationError,d as Warning,p as WithAction,ve as __namedExportsOrder,Ae as default};
