import{j as n}from"./jsx-runtime-BYYWji4R.js";import{r as f}from"./index-ClcD9ViR.js";import{y as u,Y as j,x as N}from"./icons-BrjYTXf4.js";import{c as o}from"./utils-CDN07tui.js";import{b as I}from"./button-u6FMGbIq.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-CyBucMil.js";import"./index-Bew1Yeam.js";import"./index-C2vczdB5.js";const l=({className:a,...i})=>n.jsx("nav",{role:"navigation","aria-label":"pagination",className:o("mx-auto flex w-full justify-center",a),...i});l.displayName="Pagination";const m=f.forwardRef(({className:a,...i},s)=>n.jsx("ul",{ref:s,className:o("flex flex-row items-center gap-1",a),...i}));m.displayName="PaginationContent";const e=f.forwardRef(({className:a,...i},s)=>n.jsx("li",{ref:s,className:o("",a),...i}));e.displayName="PaginationItem";const t=({className:a,isActive:i,size:s="icon",...h})=>n.jsx("a",{"aria-current":i?"page":void 0,className:o(I({variant:i?"outline":"ghost",size:s}),a),...h});t.displayName="PaginationLink";const c=({className:a,...i})=>n.jsxs(t,{"aria-label":"Go to previous page",size:"default",className:o("gap-1 pl-2.5",a),...i,children:[n.jsx(u,{className:"h-4 w-4"}),n.jsx("span",{children:"Previous"})]});c.displayName="PaginationPrevious";const d=({className:a,...i})=>n.jsxs(t,{"aria-label":"Go to next page",size:"default",className:o("gap-1 pr-2.5",a),...i,children:[n.jsx("span",{children:"Next"}),n.jsx(N,{className:"h-4 w-4"})]});d.displayName="PaginationNext";const g=({className:a,...i})=>n.jsxs("span",{"aria-hidden":!0,className:o("flex h-9 w-9 items-center justify-center",a),...i,children:[n.jsx(j,{className:"h-4 w-4"}),n.jsx("span",{className:"sr-only",children:"More pages"})]});g.displayName="PaginationEllipsis";l.__docgenInfo={description:"",methods:[],displayName:"Pagination"};m.__docgenInfo={description:"",methods:[],displayName:"PaginationContent"};g.__docgenInfo={description:"",methods:[],displayName:"PaginationEllipsis"};e.__docgenInfo={description:"",methods:[],displayName:"PaginationItem"};t.__docgenInfo={description:"",methods:[],displayName:"PaginationLink",props:{isActive:{required:!1,tsType:{name:"boolean"},description:""},size:{defaultValue:{value:'"icon"',computed:!1},required:!1}}};d.__docgenInfo={description:"",methods:[],displayName:"PaginationNext"};c.__docgenInfo={description:"",methods:[],displayName:"PaginationPrevious"};const z={title:"Components/Navigation/Pagination",component:l,parameters:{layout:"centered"},tags:["autodocs"]},r={render:a=>n.jsx(l,{...a,children:n.jsxs(m,{children:[n.jsx(e,{children:n.jsx(c,{href:"#"})}),n.jsx(e,{children:n.jsx(t,{href:"#",children:"1"})}),n.jsx(e,{children:n.jsx(t,{href:"#",isActive:!0,children:"2"})}),n.jsx(e,{children:n.jsx(t,{href:"#",children:"3"})}),n.jsx(e,{children:n.jsx(g,{})}),n.jsx(e,{children:n.jsx(d,{href:"#"})})]})})};var p,P,x;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(x=(P=r.parameters)==null?void 0:P.docs)==null?void 0:x.source}}};const R=["Default"];export{r as Default,R as __namedExportsOrder,z as default};
