import{j as e}from"./jsx-runtime-BYYWji4R.js";import{useMDXComponents as t}from"./index-DUy19JZU.js";import{M as o,C as r}from"./index-Bl_Sc0A5.js";import{W as d,S as c,T as l,a}from"./WizardForm.stories-tYI6JR-m.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-Ae4nIkFJ.js";import"./index-BIandHEk.js";import"./index-Drr-0Uuw.js";import"./index-Bhelpi4i.js";import"./utils-CDN07tui.js";import"./button-DY4UnA7S.js";import"./index-CyBucMil.js";import"./index-Bew1Yeam.js";import"./index-C2vczdB5.js";import"./icons-BXU3tp_f.js";import"./icon-CPjmVJEk.js";import"./FormSection-CFy-4ppF.js";import"./separator-t5dMxVEz.js";import"./index-C59fdHCL.js";import"./input-D4wTwlKS.js";import"./label-D3XcEZ0Y.js";import"./textarea-CM2RoxGh.js";import"./select-B-XvDT_5.js";import"./index-BdQq_4o_.js";import"./index-DW48STyt.js";import"./index-BpI74HIb.js";import"./index-CWz5EflU.js";import"./index-CZKF78Oq.js";import"./index-guOESLwJ.js";import"./index-kkVLZR_L.js";import"./index-CDv6ZuJx.js";import"./tslib.es6-BUas5LQb.js";import"./index-CaubhJIw.js";import"./index-CafsI6Qv.js";import"./index-DTBqWj02.js";import"./index-Jh3OPyOv.js";import"./index-BntbZM61.js";import"./index-B0ATiKj9.js";import"./index-sY83p_TZ.js";import"./index-C4f8hYez.js";import"./checkbox-D3SMw4sX.js";import"./index-B2NcgzwI.js";import"./radio-group-CiBL1FUZ.js";import"./index-CGGLQkrZ.js";function s(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
`,e.jsx(n.h1,{id:"wizardform",children:"WizardForm"}),`
`,e.jsx(n.p,{children:"A multi-step form component with visual progress indicator and navigation controls."}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"WizardForm"})," provides a pattern for breaking complex forms into manageable steps. It includes:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Visual progress indicator"})," with step numbers and labels"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Previous/Next navigation"})," with customizable button labels"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Step completion tracking"})," with visual feedback"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Loading state support"})," for async operations"]}),`
`]}),`
`,e.jsx(n.h2,{id:"use-cases-in-voxco",children:"Use Cases in Voxco"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Survey Creation Wizard"}),": Guide users through survey setup"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Export Configuration"}),": Step-by-step export settings"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Account Setup"}),": Multi-step onboarding flow"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Template Selection"}),": Guided template customization"]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"variants",children:"Variants"}),`
`,e.jsx(n.h3,{id:"survey-creation-wizard",children:"Survey Creation Wizard"}),`
`,e.jsx(n.p,{children:"Complete example with multiple content sections."}),`
`,e.jsx(r,{of:c}),`
`,e.jsx(n.h3,{id:"simple-three-step-wizard",children:"Simple Three-Step Wizard"}),`
`,e.jsx(n.p,{children:"Basic wizard with minimal content."}),`
`,e.jsx(r,{of:l}),`
`,e.jsx(n.h3,{id:"loading-state",children:"Loading State"}),`
`,e.jsx(n.p,{children:"Showing async operation in progress."}),`
`,e.jsx(r,{of:a}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"api-reference",children:"API Reference"}),`
`,e.jsx(n.h3,{id:"wizardformprops",children:"WizardFormProps"}),`
`,e.jsxs(n.p,{children:[`| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `,e.jsx(n.code,{children:"steps"})," | ",e.jsx(n.code,{children:"WizardStep[]"}),` | Required | Array of step definitions |
| `,e.jsx(n.code,{children:"currentStep"})," | ",e.jsx(n.code,{children:"number"}),` | Required | Currently active step index (0-based) |
| `,e.jsx(n.code,{children:"onStepChange"})," | ",e.jsx(n.code,{children:"(stepIndex: number) => void"}),` | - | Callback when step changes |
| `,e.jsx(n.code,{children:"onBack"})," | ",e.jsx(n.code,{children:"() => void"}),` | - | Callback when back button is clicked |
| `,e.jsx(n.code,{children:"onNext"})," | ",e.jsx(n.code,{children:"() => void"}),` | - | Callback when next/submit button is clicked |
| `,e.jsx(n.code,{children:"backLabel"})," | ",e.jsx(n.code,{children:"string"})," | ",e.jsx(n.code,{children:'"Previous"'}),` | Label for back button |
| `,e.jsx(n.code,{children:"nextLabel"})," | ",e.jsx(n.code,{children:"string"})," | ",e.jsx(n.code,{children:'"Next"'}),` | Label for next button |
| `,e.jsx(n.code,{children:"submitLabel"})," | ",e.jsx(n.code,{children:"string"})," | ",e.jsx(n.code,{children:'"Finish"'}),` | Label for final submit button |
| `,e.jsx(n.code,{children:"isLoading"})," | ",e.jsx(n.code,{children:"boolean"})," | ",e.jsx(n.code,{children:"false"}),` | Disable navigation and show loading state |
| `,e.jsx(n.code,{children:"children"})," | ",e.jsx(n.code,{children:"ReactNode"}),` | Required | Step content |
| `,e.jsx(n.code,{children:"className"})," | ",e.jsx(n.code,{children:"string"})," | - | Additional CSS classes |"]}),`
`,e.jsx(n.h3,{id:"wizardstep",children:"WizardStep"}),`
`,e.jsxs(n.p,{children:[`| Prop | Type | Description |
|------|------|-------------|
| `,e.jsx(n.code,{children:"id"})," | ",e.jsx(n.code,{children:"string"}),` | Unique step identifier |
| `,e.jsx(n.code,{children:"label"})," | ",e.jsx(n.code,{children:"string"}),` | Display label for the step |
| `,e.jsx(n.code,{children:"description"})," | ",e.jsx(n.code,{children:"string"}),` | Optional description shown when step is active |
| `,e.jsx(n.code,{children:"isComplete"})," | ",e.jsx(n.code,{children:"boolean"}),` | Whether step validation passed |
| `,e.jsx(n.code,{children:"hasError"})," | ",e.jsx(n.code,{children:"boolean"})," | Whether step has validation errors |"]}),`
`,e.jsx(n.h3,{id:"implementation-example",children:"Implementation Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const [currentStep, setCurrentStep] = useState(0)

const steps = [
  { id: "basics", label: "Basics" },
  { id: "questions", label: "Questions" },
  { id: "review", label: "Review" },
]

<WizardForm
  steps={steps}
  currentStep={currentStep}
  onStepChange={setCurrentStep}
  onNext={() => {
    if (currentStep === steps.length - 1) {
      handleSubmit()
    } else {
      setCurrentStep(prev => prev + 1)
    }
  }}
>
  {currentStep === 0 && <BasicsForm />}
  {currentStep === 1 && <QuestionsForm />}
  {currentStep === 2 && <ReviewForm />}
</WizardForm>
`})}),`
`,e.jsx(n.h3,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Steps are rendered as an ordered list (",e.jsx(n.code,{children:"<ol>"}),") for screen readers"]}),`
`,e.jsxs(n.li,{children:["Active step is marked with ",e.jsx(n.code,{children:'aria-current="step"'})]}),`
`,e.jsxs(n.li,{children:["Step status is announced via ",e.jsx(n.code,{children:"aria-live"})," region"]}),`
`,e.jsx(n.li,{children:"Connector lines are hidden from assistive technology"}),`
`]})]})}function ie(i={}){const{wrapper:n}={...t(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{ie as default};
