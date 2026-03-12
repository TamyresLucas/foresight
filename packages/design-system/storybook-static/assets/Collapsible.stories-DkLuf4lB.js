import{j as e}from"./jsx-runtime-BYYWji4R.js";import{R as p,C as m,a as d}from"./index-hmEc8TBq.js";import{B as c}from"./button-u6FMGbIq.js";import{C as x}from"./icons-BrjYTXf4.js";import{r as u}from"./index-ClcD9ViR.js";import"./index-DW48STyt.js";import"./index-CWz5EflU.js";import"./index-B0ATiKj9.js";import"./index-CafsI6Qv.js";import"./index-Bew1Yeam.js";import"./index-C59fdHCL.js";import"./index-Drr-0Uuw.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-CyBucMil.js";import"./index-B2NcgzwI.js";import"./index-CaubhJIw.js";import"./index-C2vczdB5.js";import"./utils-CDN07tui.js";const n=p,h=m,C=d,_={title:"Components/Data Display/Collapsible",component:n,parameters:{layout:"centered"}},s={render:a=>{const[i,l]=u.useState(!1);return e.jsxs(n,{open:i,onOpenChange:l,className:"w-[350px] space-y-2",...a,children:[e.jsxs("div",{className:"flex items-center justify-between space-x-4 px-4",children:[e.jsx("h4",{className:"text-sm font-semibold",children:"@peduarte starred 3 repositories"}),e.jsx(h,{asChild:!0,children:e.jsxs(c,{variant:"ghost",size:"sm",className:"w-9 p-0",children:[e.jsx(x,{className:"h-4 w-4"}),e.jsx("span",{className:"sr-only",children:"Toggle"})]})})]}),e.jsx("div",{className:"rounded-md border px-4 py-3 font-mono text-sm",children:"@radix-ui/primitives"}),e.jsxs(C,{className:"space-y-2",children:[e.jsx("div",{className:"rounded-md border px-4 py-3 font-mono text-sm",children:"@radix-ui/colors"}),e.jsx("div",{className:"rounded-md border px-4 py-3 font-mono text-sm",children:"@stitches/react"})]})]})}};var o,t,r;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
                <div className="rounded-md border px-4 py-3 font-mono text-sm">
                    @radix-ui/primitives
                </div>
                <CollapsibleContent className="space-y-2">
                    <div className="rounded-md border px-4 py-3 font-mono text-sm">
                        @radix-ui/colors
                    </div>
                    <div className="rounded-md border px-4 py-3 font-mono text-sm">
                        @stitches/react
                    </div>
                </CollapsibleContent>
            </Collapsible>;
  }
}`,...(r=(t=s.parameters)==null?void 0:t.docs)==null?void 0:r.source}}};const $=["Default"];export{s as Default,$ as __namedExportsOrder,_ as default};
