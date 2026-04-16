import{j as e}from"./jsx-runtime-BYYWji4R.js";import{r as c}from"./index-ClcD9ViR.js";import{i as p,j as v}from"./icons-BJRAOfCp.js";import{c as j}from"./utils-CDN07tui.js";import{B as x}from"./button-D_2cT0Yd.js";import{C as f,a as g,b as y,c as S,d as C,e as N}from"./command-CGPGbRg0.js";import{P as h,a as b,b as w}from"./popover-BppGlrhw.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./icon-CPjmVJEk.js";import"./index-CyBucMil.js";import"./index-Bew1Yeam.js";import"./index-C2vczdB5.js";import"./index-Drr-0Uuw.js";import"./tslib.es6-BUas5LQb.js";import"./index-CDv6ZuJx.js";import"./index-C59fdHCL.js";import"./index-kkVLZR_L.js";import"./dialog-C0K2dDoO.js";import"./index-CtOrc1W9.js";import"./index-DW48STyt.js";import"./index-CWz5EflU.js";import"./index-CaubhJIw.js";import"./index-CafsI6Qv.js";import"./index-B0ATiKj9.js";import"./index-guOESLwJ.js";import"./index-BntbZM61.js";import"./index-B2NcgzwI.js";import"./index-DTBqWj02.js";import"./index-Jh3OPyOv.js";const T=[{value:"next.js",label:"Next.js"},{value:"sveltekit",label:"SvelteKit"},{value:"nuxt.js",label:"Nuxt.js"},{value:"remix",label:"Remix"},{value:"astro",label:"Astro"}],ne=()=>{var m;const[t,o]=c.useState(!1),[l,u]=c.useState("");return e.jsxs(h,{open:t,onOpenChange:o,children:[e.jsx(b,{asChild:!0,children:e.jsxs(x,{variant:"outline",role:"combobox","aria-expanded":t,className:"w-[200px] justify-between",children:[l?(m=T.find(r=>r.value===l))==null?void 0:m.label:"Select framework...",e.jsx(p,{className:"ml-2 h-4 w-4 shrink-0 opacity-50"})]})}),e.jsx(w,{className:"w-[200px] p-0",children:e.jsxs(f,{children:[e.jsx(g,{placeholder:"Search framework..."}),e.jsxs(y,{children:[e.jsx(S,{children:"No framework found."}),e.jsx(C,{children:T.map(r=>e.jsxs(N,{value:r.value,onSelect:a=>{u(a===l?"":a),o(!1)},children:[e.jsx(v,{className:j("mr-2 h-4 w-4",l===r.value?"opacity-100":"opacity-0")}),r.label]},r.value))})]})]})})]})},We={title:"ShadCn/Form Elements/Combobox",component:ne,parameters:{layout:"centered"}},O={render:()=>e.jsx(ne,{})},L=[{value:"customer-satisfaction",label:"Customer Satisfaction"},{value:"product-feedback",label:"Product Feedback"},{value:"employee-engagement",label:"Employee Engagement"},{value:"market-research",label:"Market Research"},{value:"brand-awareness",label:"Brand Awareness"},{value:"user-experience",label:"User Experience"},{value:"event-feedback",label:"Event Feedback"}],oe=()=>{const[t,o]=c.useState(!1),[l,u]=c.useState(["customer-satisfaction"]),m=a=>{u(s=>s.includes(a)?s.filter(n=>n!==a):[...s,a])},r=a=>{u(s=>s.filter(n=>n!==a))};return e.jsxs("div",{className:"w-full max-w-md",children:[e.jsxs(h,{open:t,onOpenChange:o,children:[e.jsx(b,{asChild:!0,children:e.jsxs(x,{variant:"outline",role:"combobox","aria-expanded":t,className:"w-full justify-between h-auto min-h-10",children:[e.jsx("div",{className:"flex flex-wrap gap-1",children:l.length>0?l.map(a=>{const s=L.find(n=>n.value===a);return e.jsxs("span",{className:"inline-flex items-center gap-1 rounded-md bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary",children:[s==null?void 0:s.label,e.jsx("button",{type:"button",className:"hover:bg-primary/20 rounded-full p-0.5",onClick:n=>{n.stopPropagation(),r(a)},children:e.jsx("svg",{className:"h-3 w-3",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]},a)}):e.jsx("span",{className:"text-muted-foreground",children:"Select topics..."})}),e.jsx(p,{className:"ml-2 h-4 w-4 shrink-0 opacity-50"})]})}),e.jsx(w,{className:"w-full p-0",align:"start",children:e.jsxs(f,{children:[e.jsx(g,{placeholder:"Search topics..."}),e.jsxs(y,{children:[e.jsx(S,{children:"No topic found."}),e.jsx(C,{children:L.map(a=>e.jsxs(N,{value:a.value,onSelect:()=>m(a.value),children:[e.jsx(v,{className:j("mr-2 h-4 w-4",l.includes(a.value)?"opacity-100":"opacity-0")}),a.label]},a.value))})]})]})})]}),e.jsxs("p",{className:"text-sm text-muted-foreground mt-2",children:[l.length," topic",l.length!==1?"s":""," selected"]})]})},B={render:()=>e.jsx(oe,{})},P={render:()=>{const[t,o]=c.useState([]),[l,u]=c.useState(!1),m=[{value:"analytics",label:"Advanced Analytics"},{value:"api",label:"API Access"},{value:"integrations",label:"Third-party Integrations"},{value:"customization",label:"Custom Branding"},{value:"support",label:"Priority Support"},{value:"security",label:"Enhanced Security"}],r=a=>{o(s=>s.includes(a)?s.filter(n=>n!==a):[...s,a])};return e.jsxs("div",{className:"w-full max-w-md p-4 border rounded-lg",children:[e.jsx("h3",{className:"font-medium mb-2",children:"Which features are most important to you?"}),e.jsx("p",{className:"text-sm text-muted-foreground mb-4",children:"Select all that apply."}),e.jsxs(h,{open:l,onOpenChange:u,children:[e.jsx(b,{asChild:!0,children:e.jsxs(x,{variant:"outline",className:"w-full justify-between h-auto min-h-10 text-left",children:[t.length>0?`${t.length} feature${t.length>1?"s":""} selected`:"Click to select features...",e.jsx(p,{className:"ml-2 h-4 w-4 shrink-0 opacity-50"})]})}),e.jsx(w,{className:"w-full p-0",align:"start",children:e.jsxs(f,{children:[e.jsx(g,{placeholder:"Search features..."}),e.jsxs(y,{children:[e.jsx(S,{children:"No feature found."}),e.jsx(C,{children:m.map(a=>e.jsxs(N,{value:a.value,onSelect:()=>r(a.value),children:[e.jsx(v,{className:j("mr-2 h-4 w-4",t.includes(a.value)?"opacity-100":"opacity-0")}),a.label]},a.value))})]})]})})]}),t.length>0&&e.jsx("div",{className:"flex flex-wrap gap-2 mt-3",children:t.map(a=>{const s=m.find(n=>n.value===a);return e.jsx("span",{className:"inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary",children:s==null?void 0:s.label},a)})})]})}},ce=()=>e.jsx(h,{children:e.jsx(b,{asChild:!0,children:e.jsxs(x,{variant:"outline",role:"combobox",className:"w-[200px] justify-between",disabled:!0,children:["Select option...",e.jsx(p,{className:"ml-2 h-4 w-4 shrink-0 opacity-50"})]})})}),E={render:()=>e.jsx(ce,{})},V={"Question Types":[{value:"radio",label:"Radio Button"},{value:"checkbox",label:"Checkbox"},{value:"dropdown",label:"Dropdown"}],"Text Inputs":[{value:"short-text",label:"Short Text"},{value:"long-text",label:"Long Text"},{value:"email",label:"Email"}],Advanced:[{value:"matrix",label:"Matrix"},{value:"ranking",label:"Ranking"},{value:"rating",label:"Rating Scale"}]},ie=()=>{var a;const[t,o]=c.useState(!1),[l,u]=c.useState(""),r=(a=Object.values(V).flat().find(s=>s.value===l))==null?void 0:a.label;return e.jsxs(h,{open:t,onOpenChange:o,children:[e.jsx(b,{asChild:!0,children:e.jsxs(x,{variant:"outline",role:"combobox","aria-expanded":t,className:"w-[250px] justify-between",children:[r||"Select question type...",e.jsx(p,{className:"ml-2 h-4 w-4 shrink-0 opacity-50"})]})}),e.jsx(w,{className:"w-[250px] p-0",children:e.jsxs(f,{children:[e.jsx(g,{placeholder:"Search types..."}),e.jsxs(y,{children:[e.jsx(S,{children:"No type found."}),Object.entries(V).map(([s,n])=>e.jsx(C,{heading:s,children:n.map(d=>e.jsxs(N,{value:d.value,onSelect:i=>{u(i===l?"":i),o(!1)},children:[e.jsx(v,{className:j("mr-2 h-4 w-4",l===d.value?"opacity-100":"opacity-0")}),d.label]},d.value))},s))]})]})})]})},A={render:()=>e.jsx(ie,{})},ue=()=>{var d;const[t,o]=c.useState(!1),[l,u]=c.useState(""),[m,r]=c.useState(!1),[a,s]=c.useState([]),n=i=>{r(!0),setTimeout(()=>{const k=[{value:"user-1",label:"john@example.com"},{value:"user-2",label:"jane@example.com"},{value:"user-3",label:"bob@example.com"},{value:"user-4",label:"alice@example.com"},{value:"user-5",label:"charlie@example.com"}];s(i?k.filter(re=>re.label.toLowerCase().includes(i.toLowerCase())):k),r(!1)},500)};return c.useEffect(()=>{t&&n("")},[t]),e.jsxs(h,{open:t,onOpenChange:o,children:[e.jsx(b,{asChild:!0,children:e.jsxs(x,{variant:"outline",role:"combobox","aria-expanded":t,className:"w-[250px] justify-between",children:[l?(d=a.find(i=>i.value===l))==null?void 0:d.label:"Select user...",e.jsx(p,{className:"ml-2 h-4 w-4 shrink-0 opacity-50"})]})}),e.jsx(w,{className:"w-[250px] p-0",children:e.jsxs(f,{children:[e.jsx(g,{placeholder:"Search users...",onValueChange:i=>n(i)}),e.jsx(y,{children:m?e.jsx("div",{className:"py-6 text-center text-sm text-muted-foreground",children:"Loading..."}):a.length===0?e.jsx(S,{children:"No users found."}):e.jsx(C,{children:a.map(i=>e.jsxs(N,{value:i.value,onSelect:k=>{u(k===l?"":k),o(!1)},children:[e.jsx(v,{className:j("mr-2 h-4 w-4",l===i.value?"opacity-100":"opacity-0")}),i.label]},i.value))})})]})})]})},I={render:()=>e.jsx(ue,{})},Q=[{value:"q1",label:"Q1: Customer Satisfaction",block:"Block 1"},{value:"q2",label:"Q2: Product Quality",block:"Block 1"},{value:"q3",label:"Q3: Service Speed",block:"Block 1"},{value:"q4",label:"Q4: Would Recommend",block:"Block 2"},{value:"q5",label:"Q5: Comments",block:"Block 2"},{value:"end",label:"End Survey",block:"Special"}],me=()=>{var r;const[t,o]=c.useState(!1),[l,u]=c.useState(""),m=Q.reduce((a,s)=>(a[s.block]||(a[s.block]=[]),a[s.block].push(s),a),{});return e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{className:"text-sm font-medium",children:"Skip to:"}),e.jsxs(h,{open:t,onOpenChange:o,children:[e.jsx(b,{asChild:!0,children:e.jsxs(x,{variant:"outline",role:"combobox","aria-expanded":t,className:"w-[280px] justify-between",children:[l?(r=Q.find(a=>a.value===l))==null?void 0:r.label:"Select destination...",e.jsx(p,{className:"ml-2 h-4 w-4 shrink-0 opacity-50"})]})}),e.jsx(w,{className:"w-[280px] p-0",children:e.jsxs(f,{children:[e.jsx(g,{placeholder:"Search questions..."}),e.jsxs(y,{children:[e.jsx(S,{children:"No question found."}),Object.entries(m).map(([a,s])=>e.jsx(C,{heading:a,children:s.map(n=>e.jsxs(N,{value:n.value,onSelect:d=>{u(d===l?"":d),o(!1)},children:[e.jsx(v,{className:j("mr-2 h-4 w-4",l===n.value?"opacity-100":"opacity-0")}),n.label]},n.value))},a))]})]})})]})]})},D={render:()=>e.jsx(me,{})};var M,R,G;O.parameters={...O.parameters,docs:{...(M=O.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <ComboboxDemo />
}`,...(G=(R=O.parameters)==null?void 0:R.docs)==null?void 0:G.source}}};var W,$,F;B.parameters={...B.parameters,docs:{...(W=B.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <MultiSelectDemo />
}`,...(F=($=B.parameters)==null?void 0:$.docs)==null?void 0:F.source}}};var U,z,_;P.parameters={...P.parameters,docs:{...(U=P.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => {
    const [selectedValues, setSelectedValues] = React.useState<string[]>([]);
    const [open, setOpen] = React.useState(false);
    const features = [{
      value: "analytics",
      label: "Advanced Analytics"
    }, {
      value: "api",
      label: "API Access"
    }, {
      value: "integrations",
      label: "Third-party Integrations"
    }, {
      value: "customization",
      label: "Custom Branding"
    }, {
      value: "support",
      label: "Priority Support"
    }, {
      value: "security",
      label: "Enhanced Security"
    }];
    const handleSelect = (value: string) => {
      setSelectedValues(prev => prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]);
    };
    return <div className="w-full max-w-md p-4 border rounded-lg">
                <h3 className="font-medium mb-2">Which features are most important to you?</h3>
                <p className="text-sm text-muted-foreground mb-4">Select all that apply.</p>

                <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                        <Button variant="outline" className="w-full justify-between h-auto min-h-10 text-left">
                            {selectedValues.length > 0 ? \`\${selectedValues.length} feature\${selectedValues.length > 1 ? 's' : ''} selected\` : "Click to select features..."}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-full p-0" align="start">
                        <Command>
                            <CommandInput placeholder="Search features..." />
                            <CommandList>
                                <CommandEmpty>No feature found.</CommandEmpty>
                                <CommandGroup>
                                    {features.map(feature => <CommandItem key={feature.value} value={feature.value} onSelect={() => handleSelect(feature.value)}>
                                            <Check className={cn("mr-2 h-4 w-4", selectedValues.includes(feature.value) ? "opacity-100" : "opacity-0")} />
                                            {feature.label}
                                        </CommandItem>)}
                                </CommandGroup>
                            </CommandList>
                        </Command>
                    </PopoverContent>
                </Popover>

                {selectedValues.length > 0 && <div className="flex flex-wrap gap-2 mt-3">
                        {selectedValues.map(value => {
          const feature = features.find(f => f.value === value);
          return <span key={value} className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                                    {feature?.label}
                                </span>;
        })}
                    </div>}
            </div>;
  }
}`,...(_=(z=P.parameters)==null?void 0:z.docs)==null?void 0:_.source}}};var q,K,H;E.parameters={...E.parameters,docs:{...(q=E.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <DisabledCombobox />
}`,...(H=(K=E.parameters)==null?void 0:K.docs)==null?void 0:H.source}}};var J,X,Y;A.parameters={...A.parameters,docs:{...(J=A.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <GroupedCombobox />
}`,...(Y=(X=A.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ae;I.parameters={...I.parameters,docs:{...(Z=I.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <AsyncCombobox />
}`,...(ae=(ee=I.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var se,le,te;D.parameters={...D.parameters,docs:{...(se=D.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => <BranchingCombobox />
}`,...(te=(le=D.parameters)==null?void 0:le.docs)==null?void 0:te.source}}};const $e=["Default","MultiSelect","SurveyMultiSelectQuestion","Disabled","WithGroups","AsyncSearch","SurveyBranchingTarget"];export{I as AsyncSearch,O as Default,E as Disabled,B as MultiSelect,D as SurveyBranchingTarget,P as SurveyMultiSelectQuestion,A as WithGroups,$e as __namedExportsOrder,We as default};
