import{j as e}from"./jsx-runtime-BYYWji4R.js";import{r as i}from"./index-ClcD9ViR.js";import{c as x}from"./utils-CDN07tui.js";import{A as le,a as ce,b as de,c as ue,d as pe,e as me,f as ge,g as fe,h as he}from"./alert-dialog-Dvqow1w6.js";import{D as $,a as ee,b as ne,c as te,d as se,e as re,f as ae}from"./dialog-KVppOn0f.js";import{B as r}from"./button-u6FMGbIq.js";import{u as ve,v as ye,w as xe}from"./icons-BrjYTXf4.js";import{I as C}from"./input-BN6GNswh.js";import{L as j}from"./label-DYOVXtut.js";function oe({type:t}){const n={destructive:{Icon:xe,className:"text-destructive",bgClassName:"bg-destructive/10"},informational:{Icon:ye,className:"text-success",bgClassName:"bg-success/10"},default:{Icon:ve,className:"text-primary",bgClassName:"bg-primary/10"}}[t],{Icon:o}=n;return e.jsx("div",{className:x("mx-auto flex h-12 w-12 items-center justify-center rounded-full",n.bgClassName),children:e.jsx(o,{className:x("h-6 w-6",n.className)})})}function be({title:t,description:s,confirmLabel:n="Delete",cancelLabel:o="Cancel",open:l,onOpenChange:c,onConfirm:d,onCancel:v,trigger:y,className:b}){return e.jsxs(le,{open:l,onOpenChange:c,children:[y&&e.jsx(ce,{asChild:!0,children:y}),e.jsxs(de,{className:x("sm:max-w-md",b),children:[e.jsxs(ue,{className:"sm:text-center",children:[e.jsx(oe,{type:"destructive"}),e.jsx(pe,{className:"mt-4",children:t}),e.jsx(me,{children:s})]}),e.jsxs(ge,{className:"sm:justify-center",children:[e.jsx(fe,{onClick:v,children:o}),e.jsx(he,{onClick:d,className:"bg-destructive text-destructive-foreground hover:bg-destructive/90",children:n})]})]})]})}function Ce({title:t,description:s,confirmLabel:n="Got it",open:o,onOpenChange:l,onConfirm:c,trigger:d,className:v}){return e.jsxs($,{open:o,onOpenChange:l,children:[d&&e.jsx(ee,{asChild:!0,children:d}),e.jsxs(ne,{className:x("sm:max-w-md",v),children:[e.jsxs(te,{className:"sm:text-center",children:[e.jsx(oe,{type:"informational"}),e.jsx(se,{className:"mt-4",children:t}),e.jsx(re,{children:s})]}),e.jsx(ae,{className:"sm:justify-center",children:e.jsx(r,{onClick:c,children:n})})]})]})}function je({title:t,description:s,confirmLabel:n="Save",cancelLabel:o="Cancel",open:l,onOpenChange:c,onConfirm:d,onCancel:v,trigger:y,children:b,className:ie}){return e.jsxs($,{open:l,onOpenChange:c,children:[y&&e.jsx(ee,{asChild:!0,children:y}),e.jsxs(ne,{className:x("sm:max-w-md",ie),children:[e.jsxs(te,{children:[e.jsx(se,{children:t}),s&&e.jsx(re,{children:s})]}),b&&e.jsx("div",{className:"py-4",children:b}),e.jsxs(ae,{children:[e.jsx(r,{variant:"outline",onClick:v,children:o}),e.jsx(r,{onClick:d,children:n})]})]})]})}function a({type:t="default",children:s,...n}){return t==="destructive"?e.jsx(be,{...n}):t==="informational"?e.jsx(Ce,{...n}):e.jsx(je,{...n,children:s})}a.__docgenInfo={description:`ConfirmDialog - Reusable confirmation dialog component

Variants:
- **destructive**: Red action button with warning icon (for delete actions)
- **informational**: Success icon with single action (for success messages)
- **default**: Standard dialog with form support`,methods:[],displayName:"ConfirmDialog",props:{type:{required:!1,tsType:{name:"union",raw:'"destructive" | "informational" | "default"',elements:[{name:"literal",value:'"destructive"'},{name:"literal",value:'"informational"'},{name:"literal",value:'"default"'}]},description:"Type of dialog determines styling and icon",defaultValue:{value:'"default"',computed:!1}},title:{required:!0,tsType:{name:"string"},description:"Dialog title"},description:{required:!0,tsType:{name:"string"},description:"Dialog description/message"},confirmLabel:{required:!1,tsType:{name:"string"},description:"Label for the confirm/action button"},cancelLabel:{required:!1,tsType:{name:"string"},description:"Label for the cancel button"},open:{required:!1,tsType:{name:"boolean"},description:"Whether the dialog is open (controlled mode)"},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:"Callback when open state changes"},onConfirm:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when confirm is clicked"},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when cancel is clicked"},trigger:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Trigger element to open the dialog"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Additional content (e.g., form fields)"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes for the dialog content"}}};const De={title:"Blocks/Dashboard UI/Confirm Dialogs",component:a,parameters:{layout:"centered"},argTypes:{type:{control:"select",options:["destructive","informational","default"],description:"Type of dialog that determines styling"},onConfirm:{action:"confirmed"},onCancel:{action:"cancelled"}}},u={args:{type:"destructive",title:"Delete Survey?",description:"This action cannot be undone. All survey data will be permanently removed.",confirmLabel:"Delete",cancelLabel:"Cancel"},render:t=>{const[s,n]=i.useState(!1);return e.jsx(a,{...t,open:s,onOpenChange:n,trigger:e.jsx(r,{variant:"destructive",children:"Delete Survey"})})}},p={args:{type:"informational",title:"Survey Published!",description:"Your survey has been published successfully and is now available to respondents.",confirmLabel:"Continue"},render:t=>{const[s,n]=i.useState(!1);return e.jsx(a,{...t,open:s,onOpenChange:n,trigger:e.jsx(r,{variant:"success",children:"Publish Survey"})})}},m={args:{type:"default",title:"Add Question",description:"Fill in the fields below to add a new question.",confirmLabel:"Add",cancelLabel:"Cancel"},render:t=>{const[s,n]=i.useState(!1);return e.jsx(a,{...t,open:s,onOpenChange:n,trigger:e.jsx(r,{children:"Add Question"}),children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(j,{htmlFor:"question",children:"Question Text"}),e.jsx(C,{id:"question",placeholder:"Enter your question..."})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(j,{htmlFor:"type",children:"Question Type"}),e.jsx(C,{id:"type",placeholder:"e.g., Multiple Choice"})]})]})})}},g={args:{type:"destructive",title:"Remove Logic?",description:"The branching logic for this question will be removed. Affected questions will return to the default flow.",confirmLabel:"Remove Logic",cancelLabel:"Keep"},render:t=>{const[s,n]=i.useState(!1);return e.jsx(a,{...t,open:s,onOpenChange:n,trigger:e.jsx(r,{variant:"outline",children:"Remove Logic"})})}},f={args:{type:"informational",title:"Export Complete!",description:"Your file has been exported successfully. The download will start automatically.",confirmLabel:"OK"},render:t=>{const[s,n]=i.useState(!1);return e.jsx(a,{...t,open:s,onOpenChange:n,trigger:e.jsx(r,{variant:"outline",children:"Simulate Export"})})}},h={parameters:{layout:"padded"},render:()=>{const[t,s]=i.useState(!1),[n,o]=i.useState(!1),[l,c]=i.useState(!1);return e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(a,{type:"destructive",title:"Delete Survey?",description:"This action cannot be undone.",open:t,onOpenChange:s,trigger:e.jsx(r,{variant:"destructive",children:"Destructive"})}),e.jsx(a,{type:"informational",title:"Success!",description:"Operation completed successfully.",open:n,onOpenChange:o,trigger:e.jsx(r,{variant:"success",children:"Informational"})}),e.jsx(a,{type:"default",title:"Add Item",description:"Fill out the form.",open:l,onOpenChange:c,trigger:e.jsx(r,{children:"Form Dialog"}),children:e.jsxs("div",{className:"space-y-2",children:[e.jsx(j,{htmlFor:"name",children:"Name"}),e.jsx(C,{id:"name",placeholder:"Item name"})]})})]})}};var D,O,S,w,N;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
Features a red confirm button and warning icon.`,...(N=(w=u.parameters)==null?void 0:w.docs)==null?void 0:N.description}}};var L,T,A,I,q;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(A=(T=p.parameters)==null?void 0:T.docs)==null?void 0:A.source},description:{story:`Informational dialog for success messages or confirmations.
Features a green checkmark icon and single action button.`,...(q=(I=p.parameters)==null?void 0:I.docs)==null?void 0:q.description}}};var F,B,R,k,E;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(R=(B=m.parameters)==null?void 0:B.docs)==null?void 0:R.source},description:{story:`Dialog with form fields for collecting user input.
Useful for quick edits or adding new items without navigating away.`,...(E=(k=m.parameters)==null?void 0:k.docs)==null?void 0:E.description}}};var Q,_,P,K,V;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(P=(_=g.parameters)==null?void 0:_.docs)==null?void 0:P.source},description:{story:"Specific use case: Confirming removal of survey logic.",...(V=(K=g.parameters)==null?void 0:K.docs)==null?void 0:V.description}}};var W,Y,M,H,U;f.parameters={...f.parameters,docs:{...(W=f.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(M=(Y=f.parameters)==null?void 0:Y.docs)==null?void 0:M.source},description:{story:"Specific use case: Export completion confirmation.",...(U=(H=f.parameters)==null?void 0:H.docs)==null?void 0:U.description}}};var z,G,J,X,Z;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(J=(G=h.parameters)==null?void 0:G.docs)==null?void 0:J.source},description:{story:"Showcase of all dialog variants side by side.",...(Z=(X=h.parameters)==null?void 0:X.docs)==null?void 0:Z.description}}};const Oe=["Destructive","Informational","WithForm","RemoveLogic","ExportComplete","AllVariants"],Be=Object.freeze(Object.defineProperty({__proto__:null,AllVariants:h,Destructive:u,ExportComplete:f,Informational:p,RemoveLogic:g,WithForm:m,__namedExportsOrder:Oe,default:De},Symbol.toStringTag,{value:"Module"}));export{Be as C,u as D,p as I,m as W};
