import{j as a}from"./jsx-runtime-BYYWji4R.js";import{r as _}from"./index-ClcD9ViR.js";import{ag as y,aq as x,af as h}from"./icons-BXU3tp_f.js";import{c as o}from"./utils-CDN07tui.js";import{b as N}from"./button-DY4UnA7S.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./icon-CPjmVJEk.js";import"./index-CyBucMil.js";import"./index-Bew1Yeam.js";import"./index-C2vczdB5.js";const r=({className:e,...n})=>a.jsx("nav",{role:"navigation","aria-label":"pagination",className:o("mx-auto flex w-full justify-center",e),...n});r.displayName="Pagination";const c=_.forwardRef(({className:e,...n},s)=>a.jsx("ul",{ref:s,className:o("flex flex-row items-center gap-1",e),...n}));c.displayName="PaginationContent";const i=_.forwardRef(({className:e,...n},s)=>a.jsx("li",{ref:s,className:o("",e),...n}));i.displayName="PaginationItem";const t=({className:e,isActive:n,size:s="icon",...f})=>a.jsx("a",{"aria-current":n?"page":void 0,className:o(N({variant:n?"outline":"ghost",size:s}),e),...f});t.displayName="PaginationLink";const p=({className:e,...n})=>a.jsxs(t,{"aria-label":"Go to previous page",size:"default",className:o("gap-1 pl-2.5",e),...n,children:[a.jsx(y,{className:"h-4 w-4"}),a.jsx("span",{children:"Previous"})]});p.displayName="PaginationPrevious";const d=({className:e,...n})=>a.jsxs(t,{"aria-label":"Go to next page",size:"default",className:o("gap-1 pr-2.5",e),...n,children:[a.jsx("span",{children:"Next"}),a.jsx(h,{className:"h-4 w-4"})]});d.displayName="PaginationNext";const m=({className:e,...n})=>a.jsxs("span",{"aria-hidden":!0,className:o("flex h-9 w-9 items-center justify-center",e),...n,children:[a.jsx(x,{className:"h-4 w-4"}),a.jsx("span",{className:"sr-only",children:"More pages"})]});m.displayName="PaginationEllipsis";try{r.displayName="Pagination",r.__docgenInfo={description:"",displayName:"Pagination",props:{}}}catch{}try{c.displayName="PaginationContent",c.__docgenInfo={description:"",displayName:"PaginationContent",props:{}}}catch{}try{m.displayName="PaginationEllipsis",m.__docgenInfo={description:"",displayName:"PaginationEllipsis",props:{}}}catch{}try{i.displayName="PaginationItem",i.__docgenInfo={description:"",displayName:"PaginationItem",props:{}}}catch{}try{t.displayName="PaginationLink",t.__docgenInfo={description:"",displayName:"PaginationLink",props:{isActive:{defaultValue:null,description:"",name:"isActive",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"icon"},description:"",name:"size",required:!1,type:{name:'"default" | "sm" | "lg" | "icon" | null'}}}}}catch{}try{d.displayName="PaginationNext",d.__docgenInfo={description:"",displayName:"PaginationNext",props:{isActive:{defaultValue:null,description:"",name:"isActive",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"icon"},description:"",name:"size",required:!1,type:{name:'"default" | "sm" | "lg" | "icon" | null'}}}}}catch{}try{p.displayName="PaginationPrevious",p.__docgenInfo={description:"",displayName:"PaginationPrevious",props:{isActive:{defaultValue:null,description:"",name:"isActive",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"icon"},description:"",name:"size",required:!1,type:{name:'"default" | "sm" | "lg" | "icon" | null'}}}}}catch{}const q={title:"Components/Navigation/Pagination",component:r,parameters:{layout:"centered"},tags:["autodocs"]},l={render:e=>a.jsx(r,{...e,children:a.jsxs(c,{children:[a.jsx(i,{children:a.jsx(p,{href:"#"})}),a.jsx(i,{children:a.jsx(t,{href:"#",children:"1"})}),a.jsx(i,{children:a.jsx(t,{href:"#",isActive:!0,children:"2"})}),a.jsx(i,{children:a.jsx(t,{href:"#",children:"3"})}),a.jsx(i,{children:a.jsx(m,{})}),a.jsx(i,{children:a.jsx(d,{href:"#"})})]})})};var g,P,u;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <Pagination {...args}>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#" isActive>
                        2
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                    <PaginationNext href="#" />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
}`,...(u=(P=l.parameters)==null?void 0:P.docs)==null?void 0:u.source}}};const A=["Default"];export{l as Default,A as __namedExportsOrder,q as default};
