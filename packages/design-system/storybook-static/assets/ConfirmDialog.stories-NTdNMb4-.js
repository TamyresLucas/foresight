import{j as e}from"./jsx-runtime-BYYWji4R.js";import{r as i}from"./index-ClcD9ViR.js";import{c as x}from"./utils-CDN07tui.js";import{A as le,a as ce,b as de,c as ue,d as pe,e as me,f as fe,g as ge,h as he}from"./alert-dialog-CvlS5zEN.js";import{D as $,a as ee,b as ne,c as te,d as ae,e as re,f as se}from"./dialog-C0K2dDoO.js";import{B as r}from"./button-D_2cT0Yd.js";import{I as ve,C as ye,d as xe}from"./icons-BJRAOfCp.js";import{I as b}from"./input-CgUhi0Pz.js";import{L as j}from"./label-D3XcEZ0Y.js";function oe({type:t}){const n={destructive:{Icon:xe,className:"text-destructive",bgClassName:"bg-destructive/10"},informational:{Icon:ye,className:"text-success",bgClassName:"bg-success/10"},default:{Icon:ve,className:"text-primary",bgClassName:"bg-primary/10"}}[t],{Icon:o}=n;return e.jsx("div",{className:x("mx-auto flex h-12 w-12 items-center justify-center rounded-full",n.bgClassName),children:e.jsx(o,{className:x("h-6 w-6",n.className)})})}function Ce({title:t,description:a,confirmLabel:n="Delete",cancelLabel:o="Cancel",open:l,onOpenChange:c,onConfirm:d,onCancel:v,trigger:y,className:C}){return e.jsxs(le,{open:l,onOpenChange:c,children:[y&&e.jsx(ce,{asChild:!0,children:y}),e.jsxs(de,{className:x("sm:max-w-md",C),children:[e.jsxs(ue,{className:"sm:text-center",children:[e.jsx(oe,{type:"destructive"}),e.jsx(pe,{className:"mt-4",children:t}),e.jsx(me,{children:a})]}),e.jsxs(fe,{className:"sm:justify-center",children:[e.jsx(ge,{onClick:v,children:o}),e.jsx(he,{onClick:d,className:"bg-destructive text-destructive-foreground hover:bg-destructive/90",children:n})]})]})]})}function be({title:t,description:a,confirmLabel:n="Got it",open:o,onOpenChange:l,onConfirm:c,trigger:d,className:v}){return e.jsxs($,{open:o,onOpenChange:l,children:[d&&e.jsx(ee,{asChild:!0,children:d}),e.jsxs(ne,{className:x("sm:max-w-md",v),children:[e.jsxs(te,{className:"sm:text-center",children:[e.jsx(oe,{type:"informational"}),e.jsx(ae,{className:"mt-4",children:t}),e.jsx(re,{children:a})]}),e.jsx(se,{className:"sm:justify-center",children:e.jsx(r,{onClick:c,children:n})})]})]})}function je({title:t,description:a,confirmLabel:n="Save",cancelLabel:o="Cancel",open:l,onOpenChange:c,onConfirm:d,onCancel:v,trigger:y,children:C,className:ie}){return e.jsxs($,{open:l,onOpenChange:c,children:[y&&e.jsx(ee,{asChild:!0,children:y}),e.jsxs(ne,{className:x("sm:max-w-md",ie),children:[e.jsxs(te,{children:[e.jsx(ae,{children:t}),a&&e.jsx(re,{children:a})]}),C&&e.jsx("div",{className:"py-4",children:C}),e.jsxs(se,{children:[e.jsx(r,{variant:"outline",onClick:v,children:o}),e.jsx(r,{onClick:d,children:n})]})]})]})}function s({type:t="default",children:a,...n}){return t==="destructive"?e.jsx(Ce,{...n}):t==="informational"?e.jsx(be,{...n}):e.jsx(je,{...n,children:a})}try{s.displayName="ConfirmDialog",s.__docgenInfo={description:`ConfirmDialog - Reusable confirmation dialog component

Variants:
- **destructive**: Red action button with warning icon (for delete actions)
- **informational**: Success icon with single action (for success messages)
- **default**: Standard dialog with form support`,displayName:"ConfirmDialog",props:{type:{defaultValue:{value:"default"},description:"Type of dialog determines styling and icon",name:"type",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"destructive"'},{value:'"informational"'}]}},title:{defaultValue:null,description:"Dialog title",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"Dialog description/message",name:"description",required:!0,type:{name:"string"}},confirmLabel:{defaultValue:null,description:"Label for the confirm/action button",name:"confirmLabel",required:!1,type:{name:"string"}},cancelLabel:{defaultValue:null,description:"Label for the cancel button",name:"cancelLabel",required:!1,type:{name:"string"}},open:{defaultValue:null,description:"Whether the dialog is open (controlled mode)",name:"open",required:!1,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"Callback when open state changes",name:"onOpenChange",required:!1,type:{name:"((open: boolean) => void)"}},onConfirm:{defaultValue:null,description:"Callback when confirm is clicked",name:"onConfirm",required:!1,type:{name:"(() => void)"}},onCancel:{defaultValue:null,description:"Callback when cancel is clicked",name:"onCancel",required:!1,type:{name:"(() => void)"}},trigger:{defaultValue:null,description:"Trigger element to open the dialog",name:"trigger",required:!1,type:{name:"ReactNode"}},children:{defaultValue:null,description:"Additional content (e.g., form fields)",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"Additional CSS classes for the dialog content",name:"className",required:!1,type:{name:"string"}}}}}catch{}const De={title:"ShadCn/Overlay/Confirm Dialogs",component:s,parameters:{layout:"centered"},argTypes:{type:{control:"select",options:["destructive","informational","default"],description:"Type of dialog that determines styling"},onConfirm:{action:"confirmed"},onCancel:{action:"cancelled"}}},u={args:{type:"destructive",title:"Delete Survey?",description:"This action cannot be undone. All survey data will be permanently removed.",confirmLabel:"Delete",cancelLabel:"Cancel"},render:t=>{const[a,n]=i.useState(!1);return e.jsx(s,{...t,open:a,onOpenChange:n,trigger:e.jsx(r,{variant:"destructive",children:"Delete Survey"})})}},p={args:{type:"informational",title:"Survey Published!",description:"Your survey has been published successfully and is now available to respondents.",confirmLabel:"Continue"},render:t=>{const[a,n]=i.useState(!1);return e.jsx(s,{...t,open:a,onOpenChange:n,trigger:e.jsx(r,{variant:"success",children:"Publish Survey"})})}},m={args:{type:"default",title:"Add Question",description:"Fill in the fields below to add a new question.",confirmLabel:"Add",cancelLabel:"Cancel"},render:t=>{const[a,n]=i.useState(!1);return e.jsx(s,{...t,open:a,onOpenChange:n,trigger:e.jsx(r,{children:"Add Question"}),children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(j,{htmlFor:"question",children:"Question Text"}),e.jsx(b,{id:"question",placeholder:"Enter your question..."})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(j,{htmlFor:"type",children:"Question Type"}),e.jsx(b,{id:"type",placeholder:"e.g., Multiple Choice"})]})]})})}},f={args:{type:"destructive",title:"Remove Logic?",description:"The branching logic for this question will be removed. Affected questions will return to the default flow.",confirmLabel:"Remove Logic",cancelLabel:"Keep"},render:t=>{const[a,n]=i.useState(!1);return e.jsx(s,{...t,open:a,onOpenChange:n,trigger:e.jsx(r,{variant:"outline",children:"Remove Logic"})})}},g={args:{type:"informational",title:"Export Complete!",description:"Your file has been exported successfully. The download will start automatically.",confirmLabel:"OK"},render:t=>{const[a,n]=i.useState(!1);return e.jsx(s,{...t,open:a,onOpenChange:n,trigger:e.jsx(r,{variant:"outline",children:"Simulate Export"})})}},h={parameters:{layout:"padded"},render:()=>{const[t,a]=i.useState(!1),[n,o]=i.useState(!1),[l,c]=i.useState(!1);return e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(s,{type:"destructive",title:"Delete Survey?",description:"This action cannot be undone.",open:t,onOpenChange:a,trigger:e.jsx(r,{variant:"destructive",children:"Destructive"})}),e.jsx(s,{type:"informational",title:"Success!",description:"Operation completed successfully.",open:n,onOpenChange:o,trigger:e.jsx(r,{variant:"success",children:"Informational"})}),e.jsx(s,{type:"default",title:"Add Item",description:"Fill out the form.",open:l,onOpenChange:c,trigger:e.jsx(r,{children:"Form Dialog"}),children:e.jsxs("div",{className:"space-y-2",children:[e.jsx(j,{htmlFor:"name",children:"Name"}),e.jsx(b,{id:"name",placeholder:"Item name"})]})})]})}};var D,O,S,N,w;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    type: "destructive",
    title: "Delete Survey?",
    description: "This action cannot be undone. All survey data will be permanently removed.",
    confirmLabel: "Delete",
    cancelLabel: "Cancel"
  },
  render: args => {
    const [open, setOpen] = useState(false);
    return <ConfirmDialog {...args} open={open} onOpenChange={setOpen} trigger={<Button variant="destructive">Delete Survey</Button>} />;
  }
}`,...(S=(O=u.parameters)==null?void 0:O.docs)==null?void 0:S.source},description:{story:`Destructive dialog for dangerous actions like deleting items.
Features a red confirm button and warning icon.`,...(w=(N=u.parameters)==null?void 0:N.docs)==null?void 0:w.description}}};var L,A,I,q,F;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    type: "informational",
    title: "Survey Published!",
    description: "Your survey has been published successfully and is now available to respondents.",
    confirmLabel: "Continue"
  },
  render: args => {
    const [open, setOpen] = useState(false);
    return <ConfirmDialog {...args} open={open} onOpenChange={setOpen} trigger={<Button variant="success">Publish Survey</Button>} />;
  }
}`,...(I=(A=p.parameters)==null?void 0:A.docs)==null?void 0:I.source},description:{story:`Informational dialog for success messages or confirmations.
Features a green checkmark icon and single action button.`,...(F=(q=p.parameters)==null?void 0:q.docs)==null?void 0:F.description}}};var T,B,k,V,_;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    type: "default",
    title: "Add Question",
    description: "Fill in the fields below to add a new question.",
    confirmLabel: "Add",
    cancelLabel: "Cancel"
  },
  render: args => {
    const [open, setOpen] = useState(false);
    return <ConfirmDialog {...args} open={open} onOpenChange={setOpen} trigger={<Button>Add Question</Button>}>
                <div className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="question">Question Text</Label>
                        <Input id="question" placeholder="Enter your question..." />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="type">Question Type</Label>
                        <Input id="type" placeholder="e.g., Multiple Choice" />
                    </div>
                </div>
            </ConfirmDialog>;
  }
}`,...(k=(B=m.parameters)==null?void 0:B.docs)==null?void 0:k.source},description:{story:`Dialog with form fields for collecting user input.
Useful for quick edits or adding new items without navigating away.`,...(_=(V=m.parameters)==null?void 0:V.docs)==null?void 0:_.description}}};var R,E,Q,P,K;f.parameters={...f.parameters,docs:{...(R=f.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    type: "destructive",
    title: "Remove Logic?",
    description: "The branching logic for this question will be removed. Affected questions will return to the default flow.",
    confirmLabel: "Remove Logic",
    cancelLabel: "Keep"
  },
  render: args => {
    const [open, setOpen] = useState(false);
    return <ConfirmDialog {...args} open={open} onOpenChange={setOpen} trigger={<Button variant="outline">Remove Logic</Button>} />;
  }
}`,...(Q=(E=f.parameters)==null?void 0:E.docs)==null?void 0:Q.source},description:{story:"Specific use case: Confirming removal of survey logic.",...(K=(P=f.parameters)==null?void 0:P.docs)==null?void 0:K.description}}};var W,Y,M,H,z;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    type: "informational",
    title: "Export Complete!",
    description: "Your file has been exported successfully. The download will start automatically.",
    confirmLabel: "OK"
  },
  render: args => {
    const [open, setOpen] = useState(false);
    return <ConfirmDialog {...args} open={open} onOpenChange={setOpen} trigger={<Button variant="outline">Simulate Export</Button>} />;
  }
}`,...(M=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:M.source},description:{story:"Specific use case: Export completion confirmation.",...(z=(H=g.parameters)==null?void 0:H.docs)==null?void 0:z.description}}};var G,U,J,X,Z;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`{
  parameters: {
    layout: "padded"
  },
  render: () => {
    const [destructiveOpen, setDestructiveOpen] = useState(false);
    const [infoOpen, setInfoOpen] = useState(false);
    const [formOpen, setFormOpen] = useState(false);
    return <div className="flex flex-wrap gap-4">
                <ConfirmDialog type="destructive" title="Delete Survey?" description="This action cannot be undone." open={destructiveOpen} onOpenChange={setDestructiveOpen} trigger={<Button variant="destructive">Destructive</Button>} />
                <ConfirmDialog type="informational" title="Success!" description="Operation completed successfully." open={infoOpen} onOpenChange={setInfoOpen} trigger={<Button variant="success">Informational</Button>} />
                <ConfirmDialog type="default" title="Add Item" description="Fill out the form." open={formOpen} onOpenChange={setFormOpen} trigger={<Button>Form Dialog</Button>}>
                    <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="Item name" />
                    </div>
                </ConfirmDialog>
            </div>;
  }
}`,...(J=(U=h.parameters)==null?void 0:U.docs)==null?void 0:J.source},description:{story:"Showcase of all dialog variants side by side.",...(Z=(X=h.parameters)==null?void 0:X.docs)==null?void 0:Z.description}}};const Oe=["Destructive","Informational","WithForm","RemoveLogic","ExportComplete","AllVariants"],Be=Object.freeze(Object.defineProperty({__proto__:null,AllVariants:h,Destructive:u,ExportComplete:g,Informational:p,RemoveLogic:f,WithForm:m,__namedExportsOrder:Oe,default:De},Symbol.toStringTag,{value:"Module"}));export{Be as C,u as D,p as I,m as W};
