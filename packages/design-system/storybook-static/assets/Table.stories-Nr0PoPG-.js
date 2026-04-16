import{j as e}from"./jsx-runtime-BYYWji4R.js";import{r as p}from"./index-ClcD9ViR.js";import{c as b}from"./utils-CDN07tui.js";import{B as T}from"./badge-CDZW3nus.js";import{B as ae}from"./button-D_2cT0Yd.js";import{C as w}from"./checkbox-BgGr9jDO.js";import{T as X}from"./table-row-actions-DVEbZE1S.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-C2vczdB5.js";import"./index-CyBucMil.js";import"./index-Bew1Yeam.js";import"./index-CWz5EflU.js";import"./index-DW48STyt.js";import"./index-B0ATiKj9.js";import"./index-CafsI6Qv.js";import"./index-sY83p_TZ.js";import"./index-Jh3OPyOv.js";import"./index-B2NcgzwI.js";import"./index-C59fdHCL.js";import"./index-Drr-0Uuw.js";import"./icons-BJRAOfCp.js";import"./icon-CPjmVJEk.js";import"./dropdown-menu-ehGnEydP.js";import"./index-CqCTsHsz.js";import"./index-BpI74HIb.js";import"./index-CZKF78Oq.js";import"./index-guOESLwJ.js";import"./index-kkVLZR_L.js";import"./index-CDv6ZuJx.js";import"./tslib.es6-BUas5LQb.js";import"./index-CaubhJIw.js";import"./index-DTBqWj02.js";import"./index-BntbZM61.js";import"./index-CGGLQkrZ.js";const i=p.forwardRef(({className:a,...n},o)=>e.jsx("div",{className:"relative w-full overflow-auto",children:e.jsx("table",{ref:o,className:b("w-full caption-bottom text-sm bg-background",a),...n})}));i.displayName="Table";const d=p.forwardRef(({className:a,...n},o)=>e.jsx("thead",{ref:o,className:b("table-header",a),...n}));d.displayName="TableHeader";const m=p.forwardRef(({className:a,...n},o)=>e.jsx("tbody",{ref:o,className:b("[&_tr:last-child]:border-0",a),...n}));m.displayName="TableBody";const f=p.forwardRef(({className:a,...n},o)=>e.jsx("tfoot",{ref:o,className:b("border-t border-primary/40 bg-transparent font-medium [&>tr]:last:border-b-0",a),...n}));f.displayName="TableFooter";const s=p.forwardRef(({className:a,...n},o)=>e.jsx("tr",{ref:o,className:b("table-body-row",a),...n}));s.displayName="TableRow";const t=p.forwardRef(({className:a,...n},o)=>e.jsx("th",{ref:o,className:b("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",a),...n}));t.displayName="TableHead";const l=p.forwardRef(({className:a,...n},o)=>e.jsx("td",{ref:o,className:b("p-4 align-middle [&:has([role=checkbox])]:pr-0",a),...n}));l.displayName="TableCell";const h=p.forwardRef(({className:a,...n},o)=>e.jsx("caption",{ref:o,className:b("mt-4 text-sm text-muted-foreground",a),...n}));h.displayName="TableCaption";try{i.displayName="Table",i.__docgenInfo={description:"",displayName:"Table",props:{}}}catch{}try{d.displayName="TableHeader",d.__docgenInfo={description:"",displayName:"TableHeader",props:{}}}catch{}try{m.displayName="TableBody",m.__docgenInfo={description:"",displayName:"TableBody",props:{}}}catch{}try{f.displayName="TableFooter",f.__docgenInfo={description:"",displayName:"TableFooter",props:{}}}catch{}try{t.displayName="TableHead",t.__docgenInfo={description:"",displayName:"TableHead",props:{}}}catch{}try{s.displayName="TableRow",s.__docgenInfo={description:"",displayName:"TableRow",props:{}}}catch{}try{l.displayName="TableCell",l.__docgenInfo={description:"",displayName:"TableCell",props:{}}}catch{}try{h.displayName="TableCaption",h.__docgenInfo={description:"",displayName:"TableCaption",props:{}}}catch{}const Ee={title:"ShadCn/Data Display/Table",component:i,parameters:{layout:"centered"},tags:["autodocs"]},c=[{invoice:"INV001",paymentStatus:"Paid",totalAmount:"$250.00",paymentMethod:"Credit Card"},{invoice:"INV002",paymentStatus:"Pending",totalAmount:"$150.00",paymentMethod:"PayPal"},{invoice:"INV003",paymentStatus:"Unpaid",totalAmount:"$350.00",paymentMethod:"Bank Transfer"},{invoice:"INV004",paymentStatus:"Paid",totalAmount:"$450.00",paymentMethod:"Credit Card"},{invoice:"INV005",paymentStatus:"Paid",totalAmount:"$550.00",paymentMethod:"PayPal"},{invoice:"INV006",paymentStatus:"Pending",totalAmount:"$200.00",paymentMethod:"Bank Transfer"},{invoice:"INV007",paymentStatus:"Unpaid",totalAmount:"$300.00",paymentMethod:"Credit Card"}],x={render:()=>e.jsxs(i,{children:[e.jsx(h,{children:"A list of your recent invoices."}),e.jsx(d,{children:e.jsxs(s,{children:[e.jsx(t,{className:"w-[100px]",children:"Invoice"}),e.jsx(t,{children:"Status"}),e.jsx(t,{children:"Method"}),e.jsx(t,{className:"text-right",children:"Amount"})]})}),e.jsx(m,{children:c.map(a=>e.jsxs(s,{children:[e.jsx(l,{className:"font-medium",children:a.invoice}),e.jsx(l,{children:a.paymentStatus}),e.jsx(l,{children:a.paymentMethod}),e.jsx(l,{className:"text-right",children:a.totalAmount})]},a.invoice))})]})},u={render:()=>e.jsxs(i,{children:[e.jsx(h,{children:"Invoice summary with total."}),e.jsx(d,{children:e.jsxs(s,{children:[e.jsx(t,{className:"w-[100px]",children:"Invoice"}),e.jsx(t,{children:"Status"}),e.jsx(t,{children:"Method"}),e.jsx(t,{className:"text-right",children:"Amount"})]})}),e.jsx(m,{children:c.slice(0,5).map(a=>e.jsxs(s,{children:[e.jsx(l,{className:"font-medium",children:a.invoice}),e.jsx(l,{children:a.paymentStatus}),e.jsx(l,{children:a.paymentMethod}),e.jsx(l,{className:"text-right",children:a.totalAmount})]},a.invoice))}),e.jsx(f,{children:e.jsxs(s,{children:[e.jsx(l,{colSpan:3,children:"Total"}),e.jsx(l,{className:"text-right font-bold",children:"$1,600.00"})]})})]})},Y=a=>{switch(a){case"Paid":return e.jsx(T,{variant:"success",children:"Paid"});case"Pending":return e.jsx(T,{variant:"secondary",children:"Pending"});case"Unpaid":return e.jsx(T,{variant:"destructive",children:"Unpaid"});default:return e.jsx(T,{children:a})}},j={render:()=>e.jsxs(i,{children:[e.jsx(d,{children:e.jsxs(s,{children:[e.jsx(t,{className:"w-[100px]",children:"Invoice"}),e.jsx(t,{children:"Status"}),e.jsx(t,{children:"Method"}),e.jsx(t,{className:"text-right",children:"Amount"})]})}),e.jsx(m,{children:c.map(a=>e.jsxs(s,{children:[e.jsx(l,{className:"font-medium",children:a.invoice}),e.jsx(l,{children:Y(a.paymentStatus)}),e.jsx(l,{children:a.paymentMethod}),e.jsx(l,{className:"text-right",children:a.totalAmount})]},a.invoice))})]})},le=()=>{const[a,n]=p.useState([]),o=()=>{a.length===c.length?n([]):n(c.map(r=>r.invoice))},Z=r=>{n(H=>H.includes(r)?H.filter(ee=>ee!==r):[...H,r])};return e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"text-sm text-muted-foreground",children:[a.length," of ",c.length," selected"]}),e.jsxs(i,{children:[e.jsx(d,{children:e.jsxs(s,{children:[e.jsx(t,{className:"w-[40px]",children:e.jsx(w,{checked:a.length===c.length,onCheckedChange:o})}),e.jsx(t,{children:"Invoice"}),e.jsx(t,{children:"Status"}),e.jsx(t,{className:"text-right",children:"Amount"})]})}),e.jsx(m,{children:c.map(r=>e.jsxs(s,{"data-state":a.includes(r.invoice)&&"selected",children:[e.jsx(l,{children:e.jsx(w,{checked:a.includes(r.invoice),onCheckedChange:()=>Z(r.invoice)})}),e.jsx(l,{className:"font-medium",children:r.invoice}),e.jsx(l,{children:r.paymentStatus}),e.jsx(l,{className:"text-right",children:r.totalAmount})]},r.invoice))})]})]})},y={render:()=>e.jsx(le,{})},N={render:()=>e.jsxs(i,{children:[e.jsx(d,{children:e.jsxs(s,{children:[e.jsx(t,{children:"Invoice"}),e.jsx(t,{children:"Status"}),e.jsx(t,{children:"Amount"}),e.jsx(t,{className:"text-right",children:"Actions"})]})}),e.jsx(m,{children:c.slice(0,5).map(a=>e.jsxs(s,{children:[e.jsx(l,{className:"font-medium",children:a.invoice}),e.jsx(l,{children:Y(a.paymentStatus)}),e.jsx(l,{children:a.totalAmount}),e.jsx(l,{className:"text-right",children:e.jsx(X,{actions:[{label:"Edit",onClick:()=>console.log("Edit",a),icon:"edit"},{label:"Delete",onClick:()=>console.log("Delete",a),variant:"destructive",icon:"delete"}]})})]},a.invoice))})]})},te=[{id:"R001",respondent:"john@example.com",completed:"2024-01-15",score:8,status:"Complete"},{id:"R002",respondent:"jane@example.com",completed:"2024-01-16",score:9,status:"Complete"},{id:"R003",respondent:"bob@example.com",completed:"-",score:null,status:"Partial"},{id:"R004",respondent:"alice@example.com",completed:"2024-01-17",score:7,status:"Complete"},{id:"R005",respondent:"charlie@example.com",completed:"-",score:null,status:"Not Started"}],g={render:()=>e.jsxs("div",{className:"w-full",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:"text-lg font-medium",children:"Survey Responses"}),e.jsx(ae,{variant:"outline",size:"sm",children:"Export"})]}),e.jsxs(i,{children:[e.jsx(d,{children:e.jsxs(s,{children:[e.jsx(t,{className:"w-[80px]",children:"ID"}),e.jsx(t,{children:"Respondent"}),e.jsx(t,{children:"Completed"}),e.jsx(t,{children:"Score"}),e.jsx(t,{children:"Status"}),e.jsx(t,{className:"text-right",children:"Actions"})]})}),e.jsx(m,{children:te.map(a=>e.jsxs(s,{children:[e.jsx(l,{className:"font-mono text-sm",children:a.id}),e.jsx(l,{children:a.respondent}),e.jsx(l,{children:a.completed}),e.jsx(l,{children:a.score!==null?e.jsxs("span",{className:"font-medium",children:[a.score,"/10"]}):e.jsx("span",{className:"text-muted-foreground",children:"-"})}),e.jsx(l,{children:e.jsx(T,{variant:a.status==="Complete"?"success":a.status==="Partial"?"secondary":"outline",children:a.status})}),e.jsx(l,{className:"text-right",children:e.jsx(X,{actions:[{label:"View",onClick:()=>console.log("View",a),icon:"visibility"}]})})]},a.id))})]})]})},C={render:()=>e.jsxs(i,{children:[e.jsx(d,{children:e.jsxs(s,{children:[e.jsx(t,{children:"Invoice"}),e.jsx(t,{children:"Status"}),e.jsx(t,{children:"Method"}),e.jsx(t,{className:"text-right",children:"Amount"})]})}),e.jsx(m,{children:c.map((a,n)=>e.jsxs(s,{className:b(n%2===0&&"bg-primary/5"),children:[e.jsx(l,{className:"font-medium",children:a.invoice}),e.jsx(l,{children:a.paymentStatus}),e.jsx(l,{children:a.paymentMethod}),e.jsx(l,{className:"text-right",children:a.totalAmount})]},a.invoice))})]})},v={render:()=>e.jsxs(i,{children:[e.jsx(d,{children:e.jsxs(s,{children:[e.jsx(t,{className:"py-1",children:"Invoice"}),e.jsx(t,{className:"py-1",children:"Status"}),e.jsx(t,{className:"py-1 text-right",children:"Amount"})]})}),e.jsx(m,{children:c.map(a=>e.jsxs(s,{children:[e.jsx(l,{className:"py-1 font-medium text-sm",children:a.invoice}),e.jsx(l,{className:"py-1 text-sm",children:a.paymentStatus}),e.jsx(l,{className:"py-1 text-right text-sm",children:a.totalAmount})]},a.invoice))})]})};var _,S,R;x.parameters={...x.parameters,docs:{...(_=x.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map(invoice => <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
          </TableRow>)}
      </TableBody>
    </Table>
}`,...(R=(S=x.parameters)==null?void 0:S.docs)==null?void 0:R.source}}};var A,B,I;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <Table>
      <TableCaption>Invoice summary with total.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.slice(0, 5).map(invoice => <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
          </TableRow>)}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right font-bold">$1,600.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
}`,...(I=(B=u.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};var k,M,P;j.parameters={...j.parameters,docs:{...(k=j.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map(invoice => <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{getStatusBadge(invoice.paymentStatus)}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
          </TableRow>)}
      </TableBody>
    </Table>
}`,...(P=(M=j.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var V,D,E;y.parameters={...y.parameters,docs:{...(V=y.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <SelectableTable />
}`,...(E=(D=y.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var $,F,W;N.parameters={...N.parameters,docs:{...($=N.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.slice(0, 5).map(invoice => <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{getStatusBadge(invoice.paymentStatus)}</TableCell>
            <TableCell>{invoice.totalAmount}</TableCell>
            <TableCell className="text-right">
              <TableRowActions actions={[{
            label: "Edit",
            onClick: () => console.log("Edit", invoice),
            icon: "edit"
          }, {
            label: "Delete",
            onClick: () => console.log("Delete", invoice),
            variant: "destructive",
            icon: "delete"
          }]} />
            </TableCell>
          </TableRow>)}
      </TableBody>
    </Table>
}`,...(W=(F=N.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};var U,z,O;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <div className="w-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium">Survey Responses</h3>
        <Button variant="outline" size="sm">
          Export
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[80px]">ID</TableHead>
            <TableHead>Respondent</TableHead>
            <TableHead>Completed</TableHead>
            <TableHead>Score</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {surveyResponses.map(response => <TableRow key={response.id}>
              <TableCell className="font-mono text-sm">{response.id}</TableCell>
              <TableCell>{response.respondent}</TableCell>
              <TableCell>{response.completed}</TableCell>
              <TableCell>
                {response.score !== null ? <span className="font-medium">{response.score}/10</span> : <span className="text-muted-foreground">-</span>}
              </TableCell>
              <TableCell>
                <Badge variant={response.status === "Complete" ? "success" : response.status === "Partial" ? "secondary" : "outline"}>
                  {response.status}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <TableRowActions actions={[{
              label: "View",
              onClick: () => console.log("View", response),
              icon: "visibility"
            }]} />
              </TableCell>
            </TableRow>)}
        </TableBody>
      </Table>
    </div>
}`,...(O=(z=g.parameters)==null?void 0:z.docs)==null?void 0:O.source}}};var q,G,J;C.parameters={...C.parameters,docs:{...(q=C.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice, index) => <TableRow key={invoice.invoice} className={cn(index % 2 === 0 && "bg-primary/5")}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
          </TableRow>)}
      </TableBody>
    </Table>
}`,...(J=(G=C.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,L,Q;v.parameters={...v.parameters,docs:{...(K=v.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="py-1">Invoice</TableHead>
          <TableHead className="py-1">Status</TableHead>
          <TableHead className="py-1 text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map(invoice => <TableRow key={invoice.invoice}>
            <TableCell className="py-1 font-medium text-sm">
              {invoice.invoice}
            </TableCell>
            <TableCell className="py-1 text-sm">
              {invoice.paymentStatus}
            </TableCell>
            <TableCell className="py-1 text-right text-sm">
              {invoice.totalAmount}
            </TableCell>
          </TableRow>)}
      </TableBody>
    </Table>
}`,...(Q=(L=v.parameters)==null?void 0:L.docs)==null?void 0:Q.source}}};const $e=["Default","WithFooter","WithBadges","WithSelection","WithActions","SurveyResponses","Striped","Compact"];export{v as Compact,x as Default,C as Striped,g as SurveyResponses,N as WithActions,j as WithBadges,u as WithFooter,y as WithSelection,$e as __namedExportsOrder,Ee as default};
