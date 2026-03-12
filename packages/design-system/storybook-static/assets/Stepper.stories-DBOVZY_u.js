import{j as e}from"./jsx-runtime-BYYWji4R.js";import{r as h}from"./index-ClcD9ViR.js";import{B as c}from"./button-u6FMGbIq.js";import{I as v}from"./input-BN6GNswh.js";import{L as f}from"./label-DYOVXtut.js";import{R as F,a as R}from"./radio-group-BxW8sh3R.js";import{c as l}from"./utils-CDN07tui.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-CyBucMil.js";import"./index-Bew1Yeam.js";import"./index-C2vczdB5.js";import"./index-Drr-0Uuw.js";import"./index-DW48STyt.js";import"./index-CWz5EflU.js";import"./index-C59fdHCL.js";import"./index-CGGLQkrZ.js";import"./index-BpI74HIb.js";import"./index-CaubhJIw.js";import"./index-CafsI6Qv.js";import"./index-kkVLZR_L.js";import"./index-B0ATiKj9.js";import"./index-CZKF78Oq.js";import"./index-Jh3OPyOv.js";import"./index-sY83p_TZ.js";import"./index-B2NcgzwI.js";import"./icons-BrjYTXf4.js";const o=({steps:t,currentStep:i,orientation:s="horizontal"})=>s==="vertical"?e.jsx("div",{className:"flex flex-col",children:t.map((n,r)=>e.jsxs("div",{className:"flex items-start",children:[e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx("div",{className:l("flex h-10 w-10 items-center justify-center rounded-full border font-semibold text-sm leading-none transition-colors",r<i?"bg-primary border-primary text-primary-foreground":r===i?"border-primary text-primary":"border-primary/40 text-muted-foreground"),children:r<i?e.jsx("svg",{className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}):e.jsx("span",{children:r+1})}),r<t.length-1&&e.jsx("div",{className:l("w-[1px] h-12 my-2",r<i?"bg-primary":"bg-border")})]}),e.jsxs("div",{className:"ml-3 pt-2",children:[e.jsx("p",{className:l("text-sm font-medium",r<=i?"text-foreground":"text-muted-foreground"),children:n.title}),n.description&&e.jsx("p",{className:"text-xs text-muted-foreground",children:n.description})]})]},r))}):e.jsx("div",{className:"flex flex-row items-start w-full",children:t.map((n,r)=>e.jsxs("div",{className:"relative flex flex-col items-center flex-1",children:[r<t.length-1&&e.jsx("div",{className:l("absolute top-5 left-1/2 w-full h-[1px] -z-10",r<i?"bg-primary":"bg-border")}),e.jsx("div",{className:l("flex h-10 w-10 items-center justify-center rounded-full border font-semibold text-sm leading-none transition-colors z-10",r<i?"bg-primary border-primary text-primary-foreground":r===i?"bg-background border-primary text-primary":"bg-background border-primary/40 text-muted-foreground"),children:r<i?e.jsx("svg",{className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}):e.jsx("span",{children:r+1})}),e.jsxs("div",{className:"mt-2 text-center px-2",children:[e.jsx("p",{className:l("text-sm font-medium",r<=i?"text-foreground":"text-muted-foreground"),children:n.title}),n.description&&e.jsx("p",{className:"text-xs text-muted-foreground mt-0.5",children:n.description})]})]},r))}),E=[{value:"free",label:"Free",description:"Best for trying out",price:"$0/mo"},{value:"standard",label:"Standard",description:"Perfect for small teams",price:"$29/mo"},{value:"pro",label:"Pro",description:"For growing businesses",price:"$99/mo"}],I=({value:t,onValueChange:i})=>e.jsx(F,{value:t,onValueChange:i,className:"grid gap-3",children:E.map(s=>e.jsxs(f,{htmlFor:`plan-${s.value}`,className:"flex items-center justify-between rounded-lg border-2 border-muted bg-popover p-4 cursor-pointer hover:bg-accent hover:text-accent-foreground hover:border-primary/20 [&:has([data-state=checked])]:border-primary",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(R,{value:s.value,id:`plan-${s.value}`}),e.jsxs("div",{children:[e.jsx("p",{className:"font-medium",children:s.label}),e.jsx("p",{className:"text-sm text-muted-foreground",children:s.description})]})]}),e.jsx("span",{className:"font-semibold",children:s.price})]},s.value))}),L=()=>{const[t,i]=h.useState(0),[s,n]=h.useState({name:"",email:"",plan:"standard"}),r=[{title:"Personal Info",description:"Your details"},{title:"Choose Plan",description:"Select a plan"},{title:"Confirmation",description:"Review & submit"}],z=()=>{t<r.length-1&&i(a=>a+1)},Q=()=>{t>0&&i(a=>a-1)};return e.jsxs("div",{className:"w-full max-w-2xl space-y-8",children:[e.jsx(o,{steps:r,currentStep:t}),e.jsxs("div",{className:"min-h-[200px] p-6 border border-primary/20 rounded-lg",children:[t===0&&e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-lg font-medium",children:"Personal Information"}),e.jsxs("div",{className:"grid gap-4",children:[e.jsxs("div",{className:"grid gap-2",children:[e.jsx(f,{htmlFor:"name",children:"Name"}),e.jsx(v,{id:"name",placeholder:"Enter your name",value:s.name,onChange:a=>n(d=>({...d,name:a.target.value}))})]}),e.jsxs("div",{className:"grid gap-2",children:[e.jsx(f,{htmlFor:"email",children:"Email"}),e.jsx(v,{id:"email",type:"email",placeholder:"Enter your email",value:s.email,onChange:a=>n(d=>({...d,email:a.target.value}))})]})]})]}),t===1&&e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-lg font-medium",children:"Choose Your Plan"}),e.jsx(I,{value:s.plan,onValueChange:a=>n(d=>({...d,plan:a}))})]}),t===2&&e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-lg font-medium",children:"Confirm Your Details"}),e.jsxs("div",{className:"rounded-lg bg-muted/50 p-4 space-y-2",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-muted-foreground",children:"Name:"}),e.jsx("span",{className:"font-medium",children:s.name||"Not provided"})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-muted-foreground",children:"Email:"}),e.jsx("span",{className:"font-medium",children:s.email||"Not provided"})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-muted-foreground",children:"Plan:"}),e.jsx("span",{className:"font-medium capitalize",children:s.plan})]})]})]})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx(c,{variant:"outline",onClick:Q,disabled:t===0,children:"Back"}),e.jsx(c,{onClick:z,children:t===r.length-1?"Submit":"Next"})]})]})},de={title:"Components/Navigation/Stepper",component:L,parameters:{layout:"centered"},tags:["autodocs"]},m={render:()=>e.jsx(L,{})},p={render:()=>e.jsxs("div",{className:"w-full max-w-2xl space-y-8",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-medium mb-4",children:"Step 1 of 4"}),e.jsx(o,{steps:[{title:"Details"},{title:"Questions"},{title:"Logic"},{title:"Publish"}],currentStep:0})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-medium mb-4",children:"Step 2 of 4"}),e.jsx(o,{steps:[{title:"Details"},{title:"Questions"},{title:"Logic"},{title:"Publish"}],currentStep:1})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-medium mb-4",children:"Step 4 of 4 (Complete)"}),e.jsx(o,{steps:[{title:"Details"},{title:"Questions"},{title:"Logic"},{title:"Publish"}],currentStep:3})]})]})},u={render:()=>e.jsx("div",{className:"w-full max-w-md",children:e.jsx(o,{steps:[{title:"Create Survey",description:"Set up your survey details"},{title:"Add Questions",description:"Build your questionnaire"},{title:"Configure Logic",description:"Set up skip patterns"},{title:"Review & Publish",description:"Finalize and go live"}],currentStep:1,orientation:"vertical"})})},x={render:()=>{const[t,i]=h.useState(0),s=[{title:"Survey Info",description:"Basic details"},{title:"Questions",description:"Add content"},{title:"Distribution",description:"Share survey"}];return e.jsxs("div",{className:"w-full max-w-2xl space-y-6",children:[e.jsx(o,{steps:s,currentStep:t}),e.jsx("div",{className:"p-6 border border-primary/20 rounded-lg min-h-[150px] flex items-center justify-center",children:e.jsxs("p",{className:"text-muted-foreground",children:["Step ",t+1,": ",s[t].title]})}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx(c,{variant:"outline",onClick:()=>i(n=>Math.max(0,n-1)),disabled:t===0,children:"Previous"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(c,{variant:"ghost-success",children:"Save Draft"}),e.jsx(c,{onClick:()=>i(n=>Math.min(s.length-1,n+1)),children:t===s.length-1?"Publish Survey":"Continue"})]})]})]})}};var j,g,b;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <WizardDemo />
}`,...(b=(g=m.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var N,y,S;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div className="w-full max-w-2xl space-y-8">
            <div>
                <h4 className="text-sm font-medium mb-4">Step 1 of 4</h4>
                <Stepper steps={[{
        title: "Details"
      }, {
        title: "Questions"
      }, {
        title: "Logic"
      }, {
        title: "Publish"
      }]} currentStep={0} />
            </div>
            <div>
                <h4 className="text-sm font-medium mb-4">Step 2 of 4</h4>
                <Stepper steps={[{
        title: "Details"
      }, {
        title: "Questions"
      }, {
        title: "Logic"
      }, {
        title: "Publish"
      }]} currentStep={1} />
            </div>
            <div>
                <h4 className="text-sm font-medium mb-4">Step 4 of 4 (Complete)</h4>
                <Stepper steps={[{
        title: "Details"
      }, {
        title: "Questions"
      }, {
        title: "Logic"
      }, {
        title: "Publish"
      }]} currentStep={3} />
            </div>
        </div>
}`,...(S=(y=p.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var w,C,k;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div className="w-full max-w-md">
            <Stepper steps={[{
      title: "Create Survey",
      description: "Set up your survey details"
    }, {
      title: "Add Questions",
      description: "Build your questionnaire"
    }, {
      title: "Configure Logic",
      description: "Set up skip patterns"
    }, {
      title: "Review & Publish",
      description: "Finalize and go live"
    }]} currentStep={1} orientation="vertical" />
        </div>
}`,...(k=(C=u.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var P,B,D;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => {
    const [currentStep, setCurrentStep] = React.useState(0);
    const steps = [{
      title: "Survey Info",
      description: "Basic details"
    }, {
      title: "Questions",
      description: "Add content"
    }, {
      title: "Distribution",
      description: "Share survey"
    }];
    return <div className="w-full max-w-2xl space-y-6">
                <Stepper steps={steps} currentStep={currentStep} />

                <div className="p-6 border border-primary/20 rounded-lg min-h-[150px] flex items-center justify-center">
                    <p className="text-muted-foreground">
                        Step {currentStep + 1}: {steps[currentStep].title}
                    </p>
                </div>

                <div className="flex justify-between">
                    <Button variant="outline" onClick={() => setCurrentStep(prev => Math.max(0, prev - 1))} disabled={currentStep === 0}>
                        Previous
                    </Button>
                    <div className="flex gap-2">
                        <Button variant="ghost-success">Save Draft</Button>
                        <Button onClick={() => setCurrentStep(prev => Math.min(steps.length - 1, prev + 1))}>
                            {currentStep === steps.length - 1 ? 'Publish Survey' : 'Continue'}
                        </Button>
                    </div>
                </div>
            </div>;
  }
}`,...(D=(B=x.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};const ce=["Default","StepperOnly","VerticalStepper","SurveyWizard"];export{m as Default,p as StepperOnly,x as SurveyWizard,u as VerticalStepper,ce as __namedExportsOrder,de as default};
