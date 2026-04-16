import{j as e}from"./jsx-runtime-BYYWji4R.js";import{r as h}from"./index-ClcD9ViR.js";import{c as x}from"./utils-CDN07tui.js";import{B as w}from"./button-D_2cT0Yd.js";import{j as X}from"./icons-BJRAOfCp.js";import{F as S}from"./FormSection-DW9GMY1R.js";import{I as g}from"./input-CgUhi0Pz.js";import{L as r}from"./label-D3XcEZ0Y.js";import{T as Y}from"./textarea-C00EirGh.js";import{S as Z,a as ee,b as te,c as se,d as I}from"./select-C7AyIqOl.js";import{C as N}from"./checkbox-BgGr9jDO.js";import{R as ae,a as j}from"./radio-group-C0RpCPFZ.js";function ne({step:a,index:t,isActive:s,isCompleted:n,isLast:i}){return e.jsxs("div",{className:"flex items-center","aria-current":s?"step":void 0,children:[e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx("div",{className:x("flex h-10 w-10 items-center justify-center rounded-full border-2 text-sm font-medium transition-colors",n&&"border-success bg-success text-success-foreground",s&&!n&&"border-primary bg-primary text-primary-foreground",!s&&!n&&"border-muted bg-background text-muted-foreground"),"aria-label":n?`Step ${t+1}: ${a.label} - Completed`:`Step ${t+1}: ${a.label}`,children:n?e.jsx(X,{className:"h-5 w-5"}):t+1}),e.jsx("span",{className:x("mt-2 text-xs font-medium",s||n?"text-foreground":"text-muted-foreground"),children:a.label})]}),!i&&e.jsx("div",{className:x("mx-2 h-0.5 w-12 sm:w-20 lg:w-32",n?"bg-success":"bg-muted"),"aria-hidden":"true"})]})}function m({steps:a,currentStep:t,onStepChange:s,onBack:n,onNext:i,backLabel:u="Previous",nextLabel:l="Next",submitLabel:U="Finish",isLoading:f=!1,children:A,className:H}){var C,k,F;const b=t===0,L=t===a.length-1,J=()=>{!b&&n?n():!b&&s&&s(t-1)},K=()=>{i?i():!L&&s&&s(t+1)};return e.jsxs("div",{className:x("space-y-8",H),children:[e.jsx("nav",{"aria-label":"Progress",className:"flex justify-center",children:e.jsx("ol",{className:"flex items-center",children:a.map((v,p)=>e.jsx("li",{children:e.jsx(ne,{step:v,index:p,isActive:p===t,isCompleted:p<t||v.isComplete===!0,isLast:p===a.length-1})},v.id))})}),e.jsxs("div",{className:"text-center",children:[e.jsxs("span",{className:"sr-only","aria-live":"polite",children:["Step ",t+1," of ",a.length,": ",(C=a[t])==null?void 0:C.label]}),e.jsx("h2",{className:"text-xl font-semibold",children:(k=a[t])==null?void 0:k.label}),((F=a[t])==null?void 0:F.description)&&e.jsx("p",{className:"mt-1 text-sm text-muted-foreground",children:a[t].description})]}),e.jsx("div",{className:"min-h-[200px]",children:A}),e.jsxs("div",{className:"flex justify-between border-t pt-6",children:[e.jsx(w,{type:"button",variant:"outline",onClick:J,disabled:b||f,children:u}),e.jsx(w,{type:"button",onClick:K,disabled:f,children:f?"Processing...":L?U:l})]})]})}try{m.displayName="WizardForm",m.__docgenInfo={description:`WizardForm - Multi-step form with progress indicator

Features:
- Visual step indicator with completion status
- Previous/Next navigation
- Customizable button labels
- Loading state support`,displayName:"WizardForm",props:{steps:{defaultValue:null,description:"Array of step definitions",name:"steps",required:!0,type:{name:"WizardStep[]"}},currentStep:{defaultValue:null,description:"Currently active step index (0-based)",name:"currentStep",required:!0,type:{name:"number"}},onStepChange:{defaultValue:null,description:"Callback when step changes",name:"onStepChange",required:!1,type:{name:"((stepIndex: number) => void)"}},onBack:{defaultValue:null,description:"Callback when back button is clicked",name:"onBack",required:!1,type:{name:"(() => void)"}},onNext:{defaultValue:null,description:"Callback when next/submit button is clicked",name:"onNext",required:!1,type:{name:"(() => void)"}},backLabel:{defaultValue:{value:"Previous"},description:"Label for the back button",name:"backLabel",required:!1,type:{name:"string"}},nextLabel:{defaultValue:{value:"Next"},description:"Label for the next button",name:"nextLabel",required:!1,type:{name:"string"}},submitLabel:{defaultValue:{value:"Finish"},description:"Label for the final submit button",name:"submitLabel",required:!1,type:{name:"string"}},isLoading:{defaultValue:{value:"false"},description:"Disable navigation",name:"isLoading",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"Step content",name:"children",required:!0,type:{name:"ReactNode"}},className:{defaultValue:null,description:"Additional CSS classes",name:"className",required:!1,type:{name:"string"}}}}}catch{}const re={title:"ShadCn/Form Elements/Wizard Form",component:m,parameters:{layout:"padded"}},z=[{id:"info",label:"Information",description:"Basic survey data"},{id:"questions",label:"Questions",description:"Configure the questions"},{id:"distribution",label:"Distribution",description:"Define delivery channels"},{id:"review",label:"Review",description:"Confirm the data"}],d={render:function(){const[t,s]=h.useState(0),n=[e.jsxs(S,{columns:2,children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(r,{htmlFor:"name",children:"Survey Name *"}),e.jsx(g,{id:"name",placeholder:"e.g., Customer Satisfaction"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(r,{htmlFor:"category",children:"Category"}),e.jsxs(Z,{children:[e.jsx(ee,{children:e.jsx(te,{placeholder:"Select"})}),e.jsxs(se,{children:[e.jsx(I,{value:"satisfaction",children:"Satisfaction"}),e.jsx(I,{value:"research",children:"Research"})]})]})]}),e.jsxs("div",{className:"col-span-full space-y-2",children:[e.jsx(r,{htmlFor:"description",children:"Description"}),e.jsx(Y,{id:"description",placeholder:"Describe the objective..."})]})]},"info"),e.jsx(S,{children:e.jsxs("div",{className:"space-y-4",children:[e.jsx(r,{children:"Initial Question Type"}),e.jsxs(ae,{defaultValue:"blank",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(j,{value:"blank",id:"blank"}),e.jsx(r,{htmlFor:"blank",className:"font-normal",children:"Start from scratch"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(j,{value:"template",id:"template"}),e.jsx(r,{htmlFor:"template",className:"font-normal",children:"Use template"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(j,{value:"import",id:"import"}),e.jsx(r,{htmlFor:"import",className:"font-normal",children:"Import questions"})]})]})]})},"questions"),e.jsxs(S,{columns:2,children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(r,{htmlFor:"start",children:"Start Date"}),e.jsx(g,{id:"start",type:"date"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(r,{htmlFor:"end",children:"End Date"}),e.jsx(g,{id:"end",type:"date"})]}),e.jsxs("div",{className:"col-span-full space-y-2",children:[e.jsx(r,{children:"Distribution Channels"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(N,{id:"email",defaultChecked:!0}),e.jsx(r,{htmlFor:"email",className:"font-normal",children:"Email"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(N,{id:"sms"}),e.jsx(r,{htmlFor:"sms",className:"font-normal",children:"SMS"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(N,{id:"link",defaultChecked:!0}),e.jsx(r,{htmlFor:"link",className:"font-normal",children:"Public Link"})]})]})]})]},"distribution"),e.jsxs("div",{className:"space-y-4 rounded-lg bg-muted/50 p-4",children:[e.jsx("h4",{className:"font-medium",children:"Survey Summary"}),e.jsxs("dl",{className:"grid gap-2 text-sm",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("dt",{className:"text-muted-foreground",children:"Name:"}),e.jsx("dd",{children:"Customer Satisfaction"})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("dt",{className:"text-muted-foreground",children:"Category:"}),e.jsx("dd",{children:"Satisfaction"})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("dt",{className:"text-muted-foreground",children:"Distribution:"}),e.jsx("dd",{children:"Email, Public Link"})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("dt",{className:"text-muted-foreground",children:"Period:"}),e.jsx("dd",{children:"02/01/2026 - 02/28/2026"})]})]})]},"review")],i=()=>{t<z.length-1?s(l=>l+1):(alert("Survey created successfully!"),s(0))},u=()=>{s(l=>Math.max(0,l-1))};return e.jsx("div",{className:"mx-auto max-w-3xl rounded-lg border bg-card p-6",children:e.jsx(m,{steps:z,currentStep:t,onNext:i,onBack:u,submitLabel:"Create Survey",children:n[t]})})}},y=[{id:"step1",label:"Step 1"},{id:"step2",label:"Step 2"},{id:"step3",label:"Step 3"}],o={render:function(){const[t,s]=h.useState(0);return e.jsx("div",{className:"mx-auto max-w-2xl rounded-lg border bg-card p-6",children:e.jsx(m,{steps:y,currentStep:t,onStepChange:s,children:e.jsx("div",{className:"flex h-32 items-center justify-center rounded-lg border-2 border-dashed",children:e.jsxs("p",{className:"text-muted-foreground",children:["Step ",t+1," Content"]})})})})}},c={render:function(){const[t,s]=h.useState(0),[n,i]=h.useState(!1),u=()=>{i(!0),setTimeout(()=>{i(!1),s(l=>Math.min(y.length-1,l+1))},1500)};return e.jsx("div",{className:"mx-auto max-w-2xl rounded-lg border bg-card p-6",children:e.jsx(m,{steps:y,currentStep:t,onNext:u,onBack:()=>s(l=>Math.max(0,l-1)),isLoading:n,children:e.jsx("div",{className:"flex h-32 items-center justify-center rounded-lg border-2 border-dashed",children:e.jsx("p",{className:"text-muted-foreground",children:'Click "Next" to simulate loading'})})})})}};var W,R,q,D,V;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: function Render() {
    const [currentStep, setCurrentStep] = useState(0);
    const stepContent = [
    // Step 1: Info
    <FormSection key="info" columns={2}>
                <div className="space-y-2">
                    <Label htmlFor="name">Survey Name *</Label>
                    <Input id="name" placeholder="e.g., Customer Satisfaction" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="satisfaction">Satisfaction</SelectItem>
                            <SelectItem value="research">Research</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="col-span-full space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea id="description" placeholder="Describe the objective..." />
                </div>
            </FormSection>,
    // Step 2: Questions
    <FormSection key="questions">
                <div className="space-y-4">
                    <Label>Initial Question Type</Label>
                    <RadioGroup defaultValue="blank">
                        <div className="flex items-center gap-2">
                            <RadioGroupItem value="blank" id="blank" />
                            <Label htmlFor="blank" className="font-normal">
                                Start from scratch
                            </Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <RadioGroupItem value="template" id="template" />
                            <Label htmlFor="template" className="font-normal">
                                Use template
                            </Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <RadioGroupItem value="import" id="import" />
                            <Label htmlFor="import" className="font-normal">
                                Import questions
                            </Label>
                        </div>
                    </RadioGroup>
                </div>
            </FormSection>,
    // Step 3: Distribution
    <FormSection key="distribution" columns={2}>
                <div className="space-y-2">
                    <Label htmlFor="start">Start Date</Label>
                    <Input id="start" type="date" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="end">End Date</Label>
                    <Input id="end" type="date" />
                </div>
                <div className="col-span-full space-y-2">
                    <Label>Distribution Channels</Label>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Checkbox id="email" defaultChecked />
                            <Label htmlFor="email" className="font-normal">Email</Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <Checkbox id="sms" />
                            <Label htmlFor="sms" className="font-normal">SMS</Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <Checkbox id="link" defaultChecked />
                            <Label htmlFor="link" className="font-normal">Public Link</Label>
                        </div>
                    </div>
                </div>
            </FormSection>,
    // Step 4: Review
    <div key="review" className="space-y-4 rounded-lg bg-muted/50 p-4">
                <h4 className="font-medium">Survey Summary</h4>
                <dl className="grid gap-2 text-sm">
                    <div className="flex justify-between">
                        <dt className="text-muted-foreground">Name:</dt>
                        <dd>Customer Satisfaction</dd>
                    </div>
                    <div className="flex justify-between">
                        <dt className="text-muted-foreground">Category:</dt>
                        <dd>Satisfaction</dd>
                    </div>
                    <div className="flex justify-between">
                        <dt className="text-muted-foreground">Distribution:</dt>
                        <dd>Email, Public Link</dd>
                    </div>
                    <div className="flex justify-between">
                        <dt className="text-muted-foreground">Period:</dt>
                        <dd>02/01/2026 - 02/28/2026</dd>
                    </div>
                </dl>
            </div>];
    const handleNext = () => {
      if (currentStep < surveySteps.length - 1) {
        setCurrentStep(prev => prev + 1);
      } else {
        alert("Survey created successfully!");
        setCurrentStep(0);
      }
    };
    const handleBack = () => {
      setCurrentStep(prev => Math.max(0, prev - 1));
    };
    return <div className="mx-auto max-w-3xl rounded-lg border bg-card p-6">
                <WizardForm steps={surveySteps} currentStep={currentStep} onNext={handleNext} onBack={handleBack} submitLabel="Create Survey">
                    {stepContent[currentStep]}
                </WizardForm>
            </div>;
  }
}`,...(q=(R=d.parameters)==null?void 0:R.docs)==null?void 0:q.source},description:{story:`Full wizard for creating a new survey.
Demonstrates step progression and content switching.`,...(V=(D=d.parameters)==null?void 0:D.docs)==null?void 0:V.description}}};var T,_,B,P,E;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: function Render() {
    const [currentStep, setCurrentStep] = useState(0);
    return <div className="mx-auto max-w-2xl rounded-lg border bg-card p-6">
                <WizardForm steps={threeSteps} currentStep={currentStep} onStepChange={setCurrentStep}>
                    <div className="flex h-32 items-center justify-center rounded-lg border-2 border-dashed">
                        <p className="text-muted-foreground">
                            Step {currentStep + 1} Content
                        </p>
                    </div>
                </WizardForm>
            </div>;
  }
}`,...(B=(_=o.parameters)==null?void 0:_.docs)==null?void 0:B.source},description:{story:"Simple three-step wizard demonstration.",...(E=(P=o.parameters)==null?void 0:P.docs)==null?void 0:E.description}}};var M,G,Q,$,O;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: function Render() {
    const [currentStep, setCurrentStep] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const handleNext = () => {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setCurrentStep(prev => Math.min(threeSteps.length - 1, prev + 1));
      }, 1500);
    };
    return <div className="mx-auto max-w-2xl rounded-lg border bg-card p-6">
                <WizardForm steps={threeSteps} currentStep={currentStep} onNext={handleNext} onBack={() => setCurrentStep(prev => Math.max(0, prev - 1))} isLoading={isLoading}>
                    <div className="flex h-32 items-center justify-center rounded-lg border-2 border-dashed">
                        <p className="text-muted-foreground">
                            Click "Next" to simulate loading
                        </p>
                    </div>
                </WizardForm>
            </div>;
  }
}`,...(Q=(G=c.parameters)==null?void 0:G.docs)==null?void 0:Q.source},description:{story:"Wizard with loading state for async operations.",...(O=($=c.parameters)==null?void 0:$.docs)==null?void 0:O.description}}};const ie=["SurveyCreationWizard","ThreeStepWizard","WithLoadingState"],Se=Object.freeze(Object.defineProperty({__proto__:null,SurveyCreationWizard:d,ThreeStepWizard:o,WithLoadingState:c,__namedExportsOrder:ie,default:re},Symbol.toStringTag,{value:"Module"}));export{d as S,o as T,Se as W,c as a};
