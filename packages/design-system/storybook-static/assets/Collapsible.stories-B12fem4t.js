import{j as e}from"./jsx-runtime-BYYWji4R.js";import{R as x,C as y,a as m}from"./index-DqkRMSYB.js";import{r as c}from"./index-ClcD9ViR.js";import{c as b}from"./utils-CDN07tui.js";import{B as C}from"./button-DY4UnA7S.js";import{C as f}from"./icons-BXU3tp_f.js";import"./index-DW48STyt.js";import"./index-CWz5EflU.js";import"./index-B0ATiKj9.js";import"./index-CafsI6Qv.js";import"./index-Bew1Yeam.js";import"./index-C59fdHCL.js";import"./index-Drr-0Uuw.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-CyBucMil.js";import"./index-B2NcgzwI.js";import"./index-CaubhJIw.js";import"./index-C2vczdB5.js";import"./icon-CPjmVJEk.js";const r=x,i=y,o=c.forwardRef(({className:s,children:t,...n},u)=>e.jsx(m,{ref:u,className:b("overflow-hidden transition-all data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down",s),...n,children:t}));o.displayName=m.displayName;try{r.displayName="Collapsible",r.__docgenInfo={description:"",displayName:"Collapsible",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{i.displayName="CollapsibleTrigger",i.__docgenInfo={description:"",displayName:"CollapsibleTrigger",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{o.displayName="CollapsibleContent",o.__docgenInfo={description:"",displayName:"CollapsibleContent",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const $={title:"Components/Data Display/Collapsible",component:r,parameters:{layout:"centered"}},a={render:s=>{const[t,n]=c.useState(!1);return e.jsxs(r,{open:t,onOpenChange:n,className:"w-[350px] space-y-2",...s,children:[e.jsxs("div",{className:"flex items-center justify-between space-x-4 px-4",children:[e.jsx("h4",{className:"text-sm font-semibold",children:"@peduarte starred 3 repositories"}),e.jsx(i,{asChild:!0,children:e.jsxs(C,{variant:"ghost",size:"sm",className:"w-9 p-0",children:[e.jsx(f,{className:"h-4 w-4"}),e.jsx("span",{className:"sr-only",children:"Toggle"})]})})]}),e.jsx("div",{className:"rounded-md border border-primary/40 px-4 py-3 font-mono text-sm",children:"@radix-ui/primitives"}),e.jsxs(o,{className:"space-y-2",children:[e.jsx("div",{className:"rounded-md border border-primary/40 px-4 py-3 font-mono text-sm",children:"@radix-ui/colors"}),e.jsx("div",{className:"rounded-md border border-primary/40 px-4 py-3 font-mono text-sm",children:"@stitches/react"})]})]})}};var l,p,d;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => {
    const [isOpen, setIsOpen] = useState(false);
    return <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-[350px] space-y-2" {...args}>
                <div className="flex items-center justify-between space-x-4 px-4">
                    <h4 className="text-sm font-semibold">
                        @peduarte starred 3 repositories
                    </h4>
                    <CollapsibleTrigger asChild>
                        <Button variant="ghost" size="sm" className="w-9 p-0">
                            <ChevronsUpDown className="h-4 w-4" />
                            <span className="sr-only">Toggle</span>
                        </Button>
                    </CollapsibleTrigger>
                </div>
                <div className="rounded-md border border-primary/40 px-4 py-3 font-mono text-sm">
                    @radix-ui/primitives
                </div>
                <CollapsibleContent className="space-y-2">
                    <div className="rounded-md border border-primary/40 px-4 py-3 font-mono text-sm">
                        @radix-ui/colors
                    </div>
                    <div className="rounded-md border border-primary/40 px-4 py-3 font-mono text-sm">
                        @stitches/react
                    </div>
                </CollapsibleContent>
            </Collapsible>;
  }
}`,...(d=(p=a.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const k=["Default"];export{a as Default,k as __namedExportsOrder,$ as default};
