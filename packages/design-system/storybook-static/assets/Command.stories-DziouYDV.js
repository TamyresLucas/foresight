import{j as n}from"./jsx-runtime-BYYWji4R.js";import{r as g}from"./index-ClcD9ViR.js";import{C as i,a as p,b as h,c as x,d as a,e,f as m,g as o,h as A}from"./command-CGPGbRg0.js";import{k as K,S as M,l as R,m as P,n as F,o as L,p as O,F as C,P as T,M as U,q as J,r as Q,s as W,R as _}from"./icons-BJRAOfCp.js";import{B as q}from"./button-D_2cT0Yd.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Drr-0Uuw.js";import"./tslib.es6-BUas5LQb.js";import"./index-CDv6ZuJx.js";import"./index-Bew1Yeam.js";import"./index-C59fdHCL.js";import"./index-CyBucMil.js";import"./index-kkVLZR_L.js";import"./utils-CDN07tui.js";import"./dialog-C0K2dDoO.js";import"./index-CtOrc1W9.js";import"./index-DW48STyt.js";import"./index-CWz5EflU.js";import"./index-CaubhJIw.js";import"./index-CafsI6Qv.js";import"./index-B0ATiKj9.js";import"./index-guOESLwJ.js";import"./index-BntbZM61.js";import"./index-B2NcgzwI.js";import"./icon-CPjmVJEk.js";import"./index-C2vczdB5.js";const Nn={title:"ShadCn/Actions/Command",component:i,parameters:{layout:"centered"}},t={render:u=>n.jsxs(i,{className:"rounded-lg shadow-md md:min-w-[450px]",...u,children:[n.jsx(p,{placeholder:"Type a command or search..."}),n.jsxs(h,{children:[n.jsx(x,{children:"No results found."}),n.jsxs(a,{heading:"Suggestions",children:[n.jsxs(e,{children:[n.jsx(K,{className:"mr-2 h-4 w-4"}),n.jsx("span",{children:"Calendar"})]}),n.jsxs(e,{children:[n.jsx(M,{className:"mr-2 h-4 w-4"}),n.jsx("span",{children:"Search Emoji"})]}),n.jsxs(e,{children:[n.jsx(R,{className:"mr-2 h-4 w-4"}),n.jsx("span",{children:"Calculator"})]})]}),n.jsx(m,{}),n.jsxs(a,{heading:"Settings",children:[n.jsxs(e,{children:[n.jsx(P,{className:"mr-2 h-4 w-4"}),n.jsx("span",{children:"Profile"}),n.jsx(o,{children:"⌘P"})]}),n.jsxs(e,{children:[n.jsx(F,{className:"mr-2 h-4 w-4"}),n.jsx("span",{children:"Billing"}),n.jsx(o,{children:"⌘B"})]}),n.jsxs(e,{children:[n.jsx(L,{className:"mr-2 h-4 w-4"}),n.jsx("span",{children:"Settings"}),n.jsx(o,{children:"⌘S"})]})]})]})]})},d={render:()=>{const[u,s]=g.useState(!1);return g.useEffect(()=>{const j=r=>{r.key==="k"&&(r.metaKey||r.ctrlKey)&&(r.preventDefault(),s(B=>!B))};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[]),n.jsxs("div",{className:"flex flex-col items-center gap-4",children:[n.jsxs("p",{className:"text-sm text-muted-foreground",children:["Press"," ",n.jsxs("kbd",{className:"pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100",children:[n.jsx("span",{className:"text-xs",children:"⌘"}),"K"]})," ","to open the command menu"]}),n.jsxs(q,{variant:"outline",onClick:()=>s(!0),className:"w-[250px] justify-between text-muted-foreground",children:[n.jsx("span",{children:"Search..."}),n.jsxs("kbd",{className:"pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100",children:[n.jsx("span",{className:"text-xs",children:"⌘"}),"K"]})]}),n.jsxs(A,{open:u,onOpenChange:s,children:[n.jsx(p,{placeholder:"Type a command or search..."}),n.jsxs(h,{children:[n.jsx(x,{children:"No results found."}),n.jsxs(a,{heading:"Suggestions",children:[n.jsxs(e,{onSelect:()=>s(!1),children:[n.jsx(O,{className:"mr-2 h-4 w-4"}),n.jsx("span",{children:"Dashboard"})]}),n.jsxs(e,{onSelect:()=>s(!1),children:[n.jsx(C,{className:"mr-2 h-4 w-4"}),n.jsx("span",{children:"Surveys"})]}),n.jsxs(e,{onSelect:()=>s(!1),children:[n.jsx(T,{className:"mr-2 h-4 w-4"}),n.jsx("span",{children:"New Project"})]})]}),n.jsx(m,{}),n.jsxs(a,{heading:"Settings",children:[n.jsxs(e,{onSelect:()=>s(!1),children:[n.jsx(P,{className:"mr-2 h-4 w-4"}),n.jsx("span",{children:"Profile"})]}),n.jsxs(e,{onSelect:()=>s(!1),children:[n.jsx(U,{className:"mr-2 h-4 w-4"}),n.jsx("span",{children:"Email Settings"})]}),n.jsxs(e,{onSelect:()=>s(!1),children:[n.jsx(L,{className:"mr-2 h-4 w-4"}),n.jsx("span",{children:"Settings"})]})]}),n.jsx(m,{}),n.jsxs(a,{heading:"Theme",children:[n.jsxs(e,{onSelect:()=>s(!1),children:[n.jsx(J,{className:"mr-2 h-4 w-4"}),n.jsx("span",{children:"Light"})]}),n.jsxs(e,{onSelect:()=>s(!1),children:[n.jsx(Q,{className:"mr-2 h-4 w-4"}),n.jsx("span",{children:"Dark"})]})]})]})]})]})}},c={render:()=>n.jsxs(i,{className:"rounded-lg shadow-md md:min-w-[450px]",children:[n.jsx(p,{placeholder:"Search documentation..."}),n.jsxs(h,{className:"h-[300px]",children:[n.jsx(x,{children:"No results found."}),n.jsxs(a,{heading:"Getting Started",children:[n.jsxs(e,{children:[n.jsx(_,{className:"mr-2 h-4 w-4"}),n.jsx("span",{children:"Introduction"})]}),n.jsxs(e,{children:[n.jsx(C,{className:"mr-2 h-4 w-4"}),n.jsx("span",{children:"Installation"})]}),n.jsxs(e,{children:[n.jsx(O,{className:"mr-2 h-4 w-4"}),n.jsx("span",{children:"Project Structure"})]})]}),n.jsx(m,{}),n.jsxs(a,{heading:"Components",children:[n.jsxs(e,{children:[n.jsx("div",{className:"mr-2 h-4 w-4"}),n.jsx("span",{children:"Button"})]}),n.jsxs(e,{children:[n.jsx("div",{className:"mr-2 h-4 w-4"}),n.jsx("span",{children:"Card"})]}),n.jsxs(e,{children:[n.jsx("div",{className:"mr-2 h-4 w-4"}),n.jsx("span",{children:"Dialog"})]}),n.jsxs(e,{children:[n.jsx("div",{className:"mr-2 h-4 w-4"}),n.jsx("span",{children:"Dropdown Menu"})]})]}),n.jsx(m,{}),n.jsxs(a,{heading:"API Reference",children:[n.jsxs(e,{children:[n.jsx("div",{className:"mr-2 h-4 w-4"}),n.jsx("span",{children:"props"})]}),n.jsxs(e,{children:[n.jsx("div",{className:"mr-2 h-4 w-4"}),n.jsx("span",{children:"hooks"})]})]})]})]})},l={render:()=>n.jsxs(i,{className:"rounded-lg shadow-md md:min-w-[450px]",children:[n.jsx(p,{placeholder:"Search survey actions..."}),n.jsxs(h,{children:[n.jsx(x,{children:"No results found."}),n.jsxs(a,{heading:"Edit",children:[n.jsxs(e,{children:[n.jsx(T,{className:"mr-2 h-4 w-4"}),n.jsx("span",{children:"Add Question"}),n.jsx(o,{children:"⌘J"})]}),n.jsxs(e,{children:[n.jsx(C,{className:"mr-2 h-4 w-4"}),n.jsx("span",{children:"Add Page"}),n.jsx(o,{children:"⌘Enter"})]})]}),n.jsx(m,{}),n.jsx(a,{heading:"Manage",children:n.jsxs(e,{variant:"destructive",children:[n.jsx(W,{className:"mr-2 h-4 w-4"}),n.jsx("span",{children:"Delete Survey"})]})})]})]})};var S,N,w;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => <Command className="rounded-lg shadow-md md:min-w-[450px]" {...args}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <Calendar className="mr-2 h-4 w-4" />
            <span>Calendar</span>
          </CommandItem>
          <CommandItem>
            <Smile className="mr-2 h-4 w-4" />
            <span>Search Emoji</span>
          </CommandItem>
          <CommandItem>
            <Calculator className="mr-2 h-4 w-4" />
            <span>Calculator</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <CreditCard className="mr-2 h-4 w-4" />
            <span>Billing</span>
            <CommandShortcut>⌘B</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
}`,...(w=(N=t.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};var f,I,v;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(false);
    React.useEffect(() => {
      const down = (e: KeyboardEvent) => {
        if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
          e.preventDefault();
          setOpen(open => !open);
        }
      };
      document.addEventListener("keydown", down);
      return () => document.removeEventListener("keydown", down);
    }, []);
    return <div className="flex flex-col items-center gap-4">
        <p className="text-sm text-muted-foreground">
          Press{" "}
          <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
            <span className="text-xs">⌘</span>K
          </kbd>{" "}
          to open the command menu
        </p>
        <Button variant="outline" onClick={() => setOpen(true)} className="w-[250px] justify-between text-muted-foreground">
          <span>Search...</span>
          <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
            <span className="text-xs">⌘</span>K
          </kbd>
        </Button>

        <CommandDialog open={open} onOpenChange={setOpen}>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem onSelect={() => setOpen(false)}>
                <LayoutDashboard className="mr-2 h-4 w-4" />
                <span>Dashboard</span>
              </CommandItem>
              <CommandItem onSelect={() => setOpen(false)}>
                <FileText className="mr-2 h-4 w-4" />
                <span>Surveys</span>
              </CommandItem>
              <CommandItem onSelect={() => setOpen(false)}>
                <Plus className="mr-2 h-4 w-4" />
                <span>New Project</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem onSelect={() => setOpen(false)}>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </CommandItem>
              <CommandItem onSelect={() => setOpen(false)}>
                <Mail className="mr-2 h-4 w-4" />
                <span>Email Settings</span>
              </CommandItem>
              <CommandItem onSelect={() => setOpen(false)}>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Theme">
              <CommandItem onSelect={() => setOpen(false)}>
                <Sun className="mr-2 h-4 w-4" />
                <span>Light</span>
              </CommandItem>
              <CommandItem onSelect={() => setOpen(false)}>
                <Moon className="mr-2 h-4 w-4" />
                <span>Dark</span>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </CommandDialog>
      </div>;
  }
}`,...(v=(I=d.parameters)==null?void 0:I.docs)==null?void 0:v.source}}};var y,b,E;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <Command className="rounded-lg shadow-md md:min-w-[450px]">
      <CommandInput placeholder="Search documentation..." />
      <CommandList className="h-[300px]">
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Getting Started">
          <CommandItem>
            <Rocket className="mr-2 h-4 w-4" />
            <span>Introduction</span>
          </CommandItem>
          <CommandItem>
            <FileText className="mr-2 h-4 w-4" />
            <span>Installation</span>
          </CommandItem>
          <CommandItem>
            <LayoutDashboard className="mr-2 h-4 w-4" />
            <span>Project Structure</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Components">
          <CommandItem>
            <div className="mr-2 h-4 w-4" />
            <span>Button</span>
          </CommandItem>
          <CommandItem>
            <div className="mr-2 h-4 w-4" />
            <span>Card</span>
          </CommandItem>
          <CommandItem>
            <div className="mr-2 h-4 w-4" />
            <span>Dialog</span>
          </CommandItem>
          <CommandItem>
            <div className="mr-2 h-4 w-4" />
            <span>Dropdown Menu</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="API Reference">
          <CommandItem>
            <div className="mr-2 h-4 w-4" />
            <span>props</span>
          </CommandItem>
          <CommandItem>
            <div className="mr-2 h-4 w-4" />
            <span>hooks</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
}`,...(E=(b=c.parameters)==null?void 0:b.docs)==null?void 0:E.source}}};var G,k,D;l.parameters={...l.parameters,docs:{...(G=l.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <Command className="rounded-lg shadow-md md:min-w-[450px]">
      <CommandInput placeholder="Search survey actions..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Edit">
          <CommandItem>
            <Plus className="mr-2 h-4 w-4" />
            <span>Add Question</span>
            <CommandShortcut>⌘J</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <FileText className="mr-2 h-4 w-4" />
            <span>Add Page</span>
            <CommandShortcut>⌘Enter</CommandShortcut>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Manage">
          <CommandItem variant="destructive">
            <Trash className="mr-2 h-4 w-4" />
            <span>Delete Survey</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
}`,...(D=(k=l.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};const wn=["Default","GlobalSearch","WithSubSections","SurveyActions"];export{t as Default,d as GlobalSearch,l as SurveyActions,c as WithSubSections,wn as __namedExportsOrder,Nn as default};
