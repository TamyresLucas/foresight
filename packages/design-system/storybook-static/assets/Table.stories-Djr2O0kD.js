import{j as e}from"./jsx-runtime-BYYWji4R.js";import{r as Y}from"./index-ClcD9ViR.js";import{c as Z}from"./utils-CDN07tui.js";import{T as i,a as r,b as t,c as n,d as c,e as l,f as G,g as ee}from"./table-CWs5SO29.js";import{B as m}from"./badge-CDZW3nus.js";import{B as ae}from"./button-DY4UnA7S.js";import{C as y}from"./checkbox-D3SMw4sX.js";import{T as J}from"./table-row-actions-xSQstJAD.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-C2vczdB5.js";import"./index-CyBucMil.js";import"./index-Bew1Yeam.js";import"./index-CWz5EflU.js";import"./index-DW48STyt.js";import"./index-B0ATiKj9.js";import"./index-CafsI6Qv.js";import"./index-sY83p_TZ.js";import"./index-Jh3OPyOv.js";import"./index-B2NcgzwI.js";import"./index-C59fdHCL.js";import"./index-Drr-0Uuw.js";import"./icons-BXU3tp_f.js";import"./icon-CPjmVJEk.js";import"./dropdown-menu-dt8OH03F.js";import"./index-CqCTsHsz.js";import"./index-BpI74HIb.js";import"./index-CZKF78Oq.js";import"./index-guOESLwJ.js";import"./index-kkVLZR_L.js";import"./index-CDv6ZuJx.js";import"./tslib.es6-BUas5LQb.js";import"./index-CaubhJIw.js";import"./index-DTBqWj02.js";import"./index-BntbZM61.js";import"./index-CGGLQkrZ.js";const We={title:"Components/Data Display/Table",component:i,parameters:{layout:"centered"},tags:["autodocs"]},o=[{invoice:"INV001",paymentStatus:"Paid",totalAmount:"$250.00",paymentMethod:"Credit Card"},{invoice:"INV002",paymentStatus:"Pending",totalAmount:"$150.00",paymentMethod:"PayPal"},{invoice:"INV003",paymentStatus:"Unpaid",totalAmount:"$350.00",paymentMethod:"Bank Transfer"},{invoice:"INV004",paymentStatus:"Paid",totalAmount:"$450.00",paymentMethod:"Credit Card"},{invoice:"INV005",paymentStatus:"Paid",totalAmount:"$550.00",paymentMethod:"PayPal"},{invoice:"INV006",paymentStatus:"Pending",totalAmount:"$200.00",paymentMethod:"Bank Transfer"},{invoice:"INV007",paymentStatus:"Unpaid",totalAmount:"$300.00",paymentMethod:"Credit Card"}],b={render:()=>e.jsxs(i,{children:[e.jsx(G,{children:"A list of your recent invoices."}),e.jsx(r,{children:e.jsxs(t,{children:[e.jsx(n,{className:"w-[100px]",children:"Invoice"}),e.jsx(n,{children:"Status"}),e.jsx(n,{children:"Method"}),e.jsx(n,{className:"text-right",children:"Amount"})]})}),e.jsx(c,{children:o.map(a=>e.jsxs(t,{children:[e.jsx(l,{className:"font-medium",children:a.invoice}),e.jsx(l,{children:a.paymentStatus}),e.jsx(l,{children:a.paymentMethod}),e.jsx(l,{className:"text-right",children:a.totalAmount})]},a.invoice))})]})},T={render:()=>e.jsxs(i,{children:[e.jsx(G,{children:"Invoice summary with total."}),e.jsx(r,{children:e.jsxs(t,{children:[e.jsx(n,{className:"w-[100px]",children:"Invoice"}),e.jsx(n,{children:"Status"}),e.jsx(n,{children:"Method"}),e.jsx(n,{className:"text-right",children:"Amount"})]})}),e.jsx(c,{children:o.slice(0,5).map(a=>e.jsxs(t,{children:[e.jsx(l,{className:"font-medium",children:a.invoice}),e.jsx(l,{children:a.paymentStatus}),e.jsx(l,{children:a.paymentMethod}),e.jsx(l,{className:"text-right",children:a.totalAmount})]},a.invoice))}),e.jsx(ee,{children:e.jsxs(t,{children:[e.jsx(l,{colSpan:3,children:"Total"}),e.jsx(l,{className:"text-right font-bold",children:"$1,600.00"})]})})]})},K=a=>{switch(a){case"Paid":return e.jsx(m,{variant:"success",children:"Paid"});case"Pending":return e.jsx(m,{variant:"secondary",children:"Pending"});case"Unpaid":return e.jsx(m,{variant:"destructive",children:"Unpaid"});default:return e.jsx(m,{children:a})}},h={render:()=>e.jsxs(i,{children:[e.jsx(r,{children:e.jsxs(t,{children:[e.jsx(n,{className:"w-[100px]",children:"Invoice"}),e.jsx(n,{children:"Status"}),e.jsx(n,{children:"Method"}),e.jsx(n,{className:"text-right",children:"Amount"})]})}),e.jsx(c,{children:o.map(a=>e.jsxs(t,{children:[e.jsx(l,{className:"font-medium",children:a.invoice}),e.jsx(l,{children:K(a.paymentStatus)}),e.jsx(l,{children:a.paymentMethod}),e.jsx(l,{className:"text-right",children:a.totalAmount})]},a.invoice))})]})},le=()=>{const[a,d]=Y.useState([]),L=()=>{a.length===o.length?d([]):d(o.map(s=>s.invoice))},Q=s=>{d(v=>v.includes(s)?v.filter(X=>X!==s):[...v,s])};return e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"text-sm text-muted-foreground",children:[a.length," of ",o.length," selected"]}),e.jsxs(i,{children:[e.jsx(r,{children:e.jsxs(t,{children:[e.jsx(n,{className:"w-[40px]",children:e.jsx(y,{checked:a.length===o.length,onCheckedChange:L})}),e.jsx(n,{children:"Invoice"}),e.jsx(n,{children:"Status"}),e.jsx(n,{className:"text-right",children:"Amount"})]})}),e.jsx(c,{children:o.map(s=>e.jsxs(t,{"data-state":a.includes(s.invoice)&&"selected",children:[e.jsx(l,{children:e.jsx(y,{checked:a.includes(s.invoice),onCheckedChange:()=>Q(s.invoice)})}),e.jsx(l,{className:"font-medium",children:s.invoice}),e.jsx(l,{children:s.paymentStatus}),e.jsx(l,{className:"text-right",children:s.totalAmount})]},s.invoice))})]})]})},p={render:()=>e.jsx(le,{})},x={render:()=>e.jsxs(i,{children:[e.jsx(r,{children:e.jsxs(t,{children:[e.jsx(n,{children:"Invoice"}),e.jsx(n,{children:"Status"}),e.jsx(n,{children:"Amount"}),e.jsx(n,{className:"text-right",children:"Actions"})]})}),e.jsx(c,{children:o.slice(0,5).map(a=>e.jsxs(t,{children:[e.jsx(l,{className:"font-medium",children:a.invoice}),e.jsx(l,{children:K(a.paymentStatus)}),e.jsx(l,{children:a.totalAmount}),e.jsx(l,{className:"text-right",children:e.jsx(J,{actions:[{label:"Edit",onClick:()=>console.log("Edit",a),icon:"edit"},{label:"Delete",onClick:()=>console.log("Delete",a),variant:"destructive",icon:"delete"}]})})]},a.invoice))})]})},ne=[{id:"R001",respondent:"john@example.com",completed:"2024-01-15",score:8,status:"Complete"},{id:"R002",respondent:"jane@example.com",completed:"2024-01-16",score:9,status:"Complete"},{id:"R003",respondent:"bob@example.com",completed:"-",score:null,status:"Partial"},{id:"R004",respondent:"alice@example.com",completed:"2024-01-17",score:7,status:"Complete"},{id:"R005",respondent:"charlie@example.com",completed:"-",score:null,status:"Not Started"}],u={render:()=>e.jsxs("div",{className:"w-full",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:"text-lg font-medium",children:"Survey Responses"}),e.jsx(ae,{variant:"outline",size:"sm",children:"Export"})]}),e.jsxs(i,{children:[e.jsx(r,{children:e.jsxs(t,{children:[e.jsx(n,{className:"w-[80px]",children:"ID"}),e.jsx(n,{children:"Respondent"}),e.jsx(n,{children:"Completed"}),e.jsx(n,{children:"Score"}),e.jsx(n,{children:"Status"}),e.jsx(n,{className:"text-right",children:"Actions"})]})}),e.jsx(c,{children:ne.map(a=>e.jsxs(t,{children:[e.jsx(l,{className:"font-mono text-sm",children:a.id}),e.jsx(l,{children:a.respondent}),e.jsx(l,{children:a.completed}),e.jsx(l,{children:a.score!==null?e.jsxs("span",{className:"font-medium",children:[a.score,"/10"]}):e.jsx("span",{className:"text-muted-foreground",children:"-"})}),e.jsx(l,{children:e.jsx(m,{variant:a.status==="Complete"?"success":a.status==="Partial"?"secondary":"outline",children:a.status})}),e.jsx(l,{className:"text-right",children:e.jsx(J,{actions:[{label:"View",onClick:()=>console.log("View",a),icon:"visibility"}]})})]},a.id))})]})]})},j={render:()=>e.jsxs(i,{children:[e.jsx(r,{children:e.jsxs(t,{children:[e.jsx(n,{children:"Invoice"}),e.jsx(n,{children:"Status"}),e.jsx(n,{children:"Method"}),e.jsx(n,{className:"text-right",children:"Amount"})]})}),e.jsx(c,{children:o.map((a,d)=>e.jsxs(t,{className:Z(d%2===0&&"bg-primary/5"),children:[e.jsx(l,{className:"font-medium",children:a.invoice}),e.jsx(l,{children:a.paymentStatus}),e.jsx(l,{children:a.paymentMethod}),e.jsx(l,{className:"text-right",children:a.totalAmount})]},a.invoice))})]})},C={render:()=>e.jsxs(i,{children:[e.jsx(r,{children:e.jsxs(t,{children:[e.jsx(n,{className:"py-1",children:"Invoice"}),e.jsx(n,{className:"py-1",children:"Status"}),e.jsx(n,{className:"py-1 text-right",children:"Amount"})]})}),e.jsx(c,{children:o.map(a=>e.jsxs(t,{children:[e.jsx(l,{className:"py-1 font-medium text-sm",children:a.invoice}),e.jsx(l,{className:"py-1 text-sm",children:a.paymentStatus}),e.jsx(l,{className:"py-1 text-right text-sm",children:a.totalAmount})]},a.invoice))})]})};var N,g,H;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(H=(g=b.parameters)==null?void 0:g.docs)==null?void 0:H.source}}};var S,w,f;T.parameters={...T.parameters,docs:{...(S=T.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(f=(w=T.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};var R,A,B;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(B=(A=h.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var I,M,k;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <SelectableTable />
}`,...(k=(M=p.parameters)==null?void 0:M.docs)==null?void 0:k.source}}};var P,V,D;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(D=(V=x.parameters)==null?void 0:V.docs)==null?void 0:D.source}}};var E,$,W;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(W=($=u.parameters)==null?void 0:$.docs)==null?void 0:W.source}}};var F,U,z;j.parameters={...j.parameters,docs:{...(F=j.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(z=(U=j.parameters)==null?void 0:U.docs)==null?void 0:z.source}}};var _,O,q;C.parameters={...C.parameters,docs:{...(_=C.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(q=(O=C.parameters)==null?void 0:O.docs)==null?void 0:q.source}}};const Fe=["Default","WithFooter","WithBadges","WithSelection","WithActions","SurveyResponses","Striped","Compact"];export{C as Compact,b as Default,j as Striped,u as SurveyResponses,x as WithActions,h as WithBadges,T as WithFooter,p as WithSelection,Fe as __namedExportsOrder,We as default};
