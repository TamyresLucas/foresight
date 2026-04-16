import{j as e}from"./jsx-runtime-BYYWji4R.js";import{A as s,a,b as r}from"./alert-aj_NsfeP.js";import{I as h,c as A,d as x,X as v,e as O,f as R,L as $,g as G}from"./icons-BJRAOfCp.js";import{B as w}from"./button-D_2cT0Yd.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-C2vczdB5.js";import"./utils-CDN07tui.js";import"./icon-CPjmVJEk.js";import"./index-CyBucMil.js";import"./index-Bew1Yeam.js";const de={title:"ShadCn/Feedback/Alert",component:s,parameters:{layout:"centered"},tags:["autodocs"]},n={render:()=>e.jsxs(s,{className:"w-[450px]",children:[e.jsx(O,{className:"h-4 w-4"}),e.jsx(a,{children:"Heads up!"}),e.jsx(r,{children:"You can add components to your app using the cli."})]})},t={render:()=>e.jsxs(s,{variant:"destructive",className:"w-[450px]",children:[e.jsx(R,{className:"h-4 w-4"}),e.jsx(a,{children:"Error"}),e.jsx(r,{children:"Your session has expired. Please log in again."})]})},i={render:()=>e.jsxs(s,{variant:"success",className:"w-[450px]",children:[e.jsx(A,{className:"h-4 w-4"}),e.jsx(a,{children:"Success!"}),e.jsx(r,{children:"Your survey has been published successfully."})]})},l={render:()=>e.jsxs(s,{variant:"warning",className:"w-[450px]",children:[e.jsx(x,{className:"h-4 w-4"}),e.jsx(a,{children:"Warning"}),e.jsx(r,{children:"Your survey has unsaved changes. Save before leaving."})]})},c={render:()=>e.jsxs(s,{variant:"info",className:"w-[450px]",children:[e.jsx(h,{className:"h-4 w-4"}),e.jsx(a,{children:"Information"}),e.jsx(r,{children:"Your subscription will renew on January 15, 2026."})]})},o={render:()=>e.jsxs(s,{className:"w-[450px]",children:[e.jsx(G,{className:"h-4 w-4"}),e.jsx(a,{children:"New features available"}),e.jsxs(r,{className:"flex flex-col gap-2",children:[e.jsx("span",{children:"Check out the new survey templates and analytics dashboard."}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(w,{size:"sm",variant:"ghost",children:"Learn More"}),e.jsx(w,{size:"sm",variant:"ghost",children:"Dismiss"})]})]})]})},d={render:()=>e.jsxs(s,{variant:"destructive",className:"w-[450px]",children:[e.jsx(v,{className:"h-4 w-4"}),e.jsx(a,{children:"Survey Validation Failed"}),e.jsx(r,{children:e.jsxs("ul",{className:"list-disc list-inside mt-2 space-y-1",children:[e.jsx("li",{children:"Question 3 requires at least 2 answer options"}),e.jsx("li",{children:"Skip logic on Question 7 references deleted question"}),e.jsx("li",{children:"Thank you page message is required"})]})})]})},p={render:()=>e.jsxs(s,{className:"w-[450px] border-primary/50 bg-primary/5",children:[e.jsx($,{className:"h-4 w-4 text-primary"}),e.jsx(a,{className:"text-primary",children:"Pro Tip"}),e.jsx(r,{children:"Keep your surveys under 10 questions for a 40% higher completion rate. Consider using skip logic to personalize the experience."})]})},m={render:()=>e.jsxs("div",{className:"w-[450px] space-y-4",children:[e.jsxs(s,{children:[e.jsx(h,{className:"h-4 w-4"}),e.jsx(a,{children:"Default Alert"}),e.jsx(r,{children:"This is the default alert style."})]}),e.jsxs(s,{variant:"success",children:[e.jsx(A,{className:"h-4 w-4"}),e.jsx(a,{children:"Success Alert"}),e.jsx(r,{children:"Action completed successfully."})]}),e.jsxs(s,{variant:"warning",children:[e.jsx(x,{className:"h-4 w-4"}),e.jsx(a,{children:"Warning Alert"}),e.jsx(r,{children:"Please review before proceeding."})]}),e.jsxs(s,{variant:"destructive",children:[e.jsx(v,{className:"h-4 w-4"}),e.jsx(a,{children:"Error Alert"}),e.jsx(r,{children:"Something went wrong."})]})]})},u={render:()=>e.jsxs("div",{className:"w-[350px] space-y-4",children:[e.jsxs(s,{className:"py-2",children:[e.jsx(h,{className:"h-4 w-4"}),e.jsx(r,{children:"Survey saved as draft."})]}),e.jsxs(s,{variant:"success",className:"py-2",children:[e.jsx(A,{className:"h-4 w-4"}),e.jsx(r,{children:"Survey published successfully."})]}),e.jsxs(s,{variant:"warning",className:"py-2",children:[e.jsx(x,{className:"h-4 w-4"}),e.jsx(r,{children:"Unaved changes in draft."})]}),e.jsxs(s,{variant:"destructive",className:"py-2",children:[e.jsx(v,{className:"h-4 w-4"}),e.jsx(r,{children:"Failed to save survey."})]})]})};var j,g,N;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <Alert className="w-[450px]">
            <Terminal className="h-4 w-4" />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
                You can add components to your app using the cli.
            </AlertDescription>
        </Alert>
}`,...(N=(g=n.parameters)==null?void 0:g.docs)==null?void 0:N.source}}};var y,f,D;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <Alert variant="destructive" className="w-[450px]">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
                Your session has expired. Please log in again.
            </AlertDescription>
        </Alert>
}`,...(D=(f=t.parameters)==null?void 0:f.docs)==null?void 0:D.source}}};var T,S,b;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <Alert variant="success" className="w-[450px]">
            <CheckCircle2 className="h-4 w-4" />
            <AlertTitle>Success!</AlertTitle>
            <AlertDescription>
                Your survey has been published successfully.
            </AlertDescription>
        </Alert>
}`,...(b=(S=i.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var C,k,I;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <Alert variant="warning" className="w-[450px]">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Warning</AlertTitle>
            <AlertDescription>
                Your survey has unsaved changes. Save before leaving.
            </AlertDescription>
        </Alert>
}`,...(I=(k=l.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};var Y,q,B;c.parameters={...c.parameters,docs:{...(Y=c.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <Alert variant="info" className="w-[450px]">
            <InfoIcon className="h-4 w-4" />
            <AlertTitle>Information</AlertTitle>
            <AlertDescription>
                Your subscription will renew on January 15, 2026.
            </AlertDescription>
        </Alert>
}`,...(B=(q=c.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};var E,W,z;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(z=(W=o.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};var P,V,F;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(F=(V=d.parameters)==null?void 0:V.docs)==null?void 0:F.source}}};var L,X,Q;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <Alert className="w-[450px] border-primary/50 bg-primary/5">
            <Lightbulb className="h-4 w-4 text-primary" />
            <AlertTitle className="text-primary">Pro Tip</AlertTitle>
            <AlertDescription>
                Keep your surveys under 10 questions for a 40% higher completion rate.
                Consider using skip logic to personalize the experience.
            </AlertDescription>
        </Alert>
}`,...(Q=(X=p.parameters)==null?void 0:X.docs)==null?void 0:Q.source}}};var H,J,K;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(K=(J=m.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var M,U,_;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(_=(U=u.parameters)==null?void 0:U.docs)==null?void 0:_.source}}};const pe=["Default","Destructive","Success","Warning","Info","WithAction","SurveyValidationError","SurveyTip","AllVariants","Compact"];export{m as AllVariants,u as Compact,n as Default,t as Destructive,c as Info,i as Success,p as SurveyTip,d as SurveyValidationError,l as Warning,o as WithAction,pe as __namedExportsOrder,de as default};
