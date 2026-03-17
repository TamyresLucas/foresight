import{j as e}from"./jsx-runtime-BYYWji4R.js";import{r as i}from"./index-ClcD9ViR.js";import{T as r}from"./textarea-CM2RoxGh.js";import{L as a}from"./label-D3XcEZ0Y.js";import{B as Z}from"./button-DY4UnA7S.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./utils-CDN07tui.js";import"./index-Drr-0Uuw.js";import"./index-Bew1Yeam.js";import"./index-C2vczdB5.js";import"./index-CyBucMil.js";const ue={title:"Components/Form Elements/Textarea",component:r,parameters:{layout:"centered"}},c={args:{placeholder:"Type your message here."}},n={render:()=>e.jsxs("div",{className:"grid w-full gap-1.5",children:[e.jsx(a,{htmlFor:"message",children:"Your message"}),e.jsx(r,{placeholder:"Type your message here.",id:"message"})]})},d={render:()=>e.jsxs("div",{className:"grid w-full gap-2",children:[e.jsx(r,{placeholder:"Type your message here."}),e.jsx(Z,{children:"Send message"})]})},l={render:()=>e.jsx(r,{placeholder:"This is disabled...",disabled:!0})},$=()=>{const[t,o]=i.useState(""),s=280;return e.jsxs("div",{className:"w-[350px] space-y-2",children:[e.jsx(a,{htmlFor:"bio",children:"Bio"}),e.jsx(r,{id:"bio",placeholder:"Tell us about yourself...",value:t,onChange:j=>o(j.target.value.slice(0,s)),className:"min-h-[100px]"}),e.jsxs("p",{className:"text-sm text-muted-foreground text-right",children:[t.length,"/",s," characters"]})]})},m={render:()=>e.jsx($,{})},p={render:()=>e.jsxs("div",{className:"w-[350px] space-y-2",children:[e.jsx(a,{htmlFor:"description",children:"Description"}),e.jsx(r,{id:"description",placeholder:"Describe your survey...",className:"min-h-[100px]"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"This will appear as the survey description to respondents."})]})},u={render:()=>e.jsxs("div",{className:"w-[350px] space-y-2",children:[e.jsx(a,{htmlFor:"required",className:"text-destructive",children:"Required Field"}),e.jsx(r,{id:"required",placeholder:"This field is required...",className:"border-destructive focus-visible:ring-destructive"}),e.jsx("p",{className:"text-sm text-destructive",children:"This field is required."})]})},h={render:()=>e.jsxs("div",{className:"w-[350px] space-y-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(a,{children:"Small (2 rows)"}),e.jsx(r,{placeholder:"Small textarea...",rows:2})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(a,{children:"Medium (4 rows - default)"}),e.jsx(r,{placeholder:"Medium textarea...",rows:4})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(a,{children:"Large (8 rows)"}),e.jsx(r,{placeholder:"Large textarea...",rows:8})]})]})},ee=()=>{const[t,o]=i.useState("");return e.jsxs("div",{className:"w-[400px] p-4 border rounded-lg space-y-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"font-medium",children:"Q5. Additional Comments"}),e.jsx("p",{className:"text-sm text-muted-foreground mt-1",children:"Please share any additional feedback about your experience."})]}),e.jsx(r,{placeholder:"Enter your response here...",value:t,onChange:s=>o(s.target.value),className:"min-h-[120px]"}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("p",{className:"text-xs text-muted-foreground",children:["Optional • ",t.length," characters"]}),e.jsx(Z,{size:"sm",variant:"outline",children:"Skip Question"})]})]})},x={render:()=>e.jsx(ee,{})},g={render:()=>e.jsxs("div",{className:"w-[350px] space-y-2",children:[e.jsx(a,{htmlFor:"resizable",children:"Resizable Textarea"}),e.jsx(r,{id:"resizable",placeholder:"You can resize this textarea...",className:"resize min-h-[100px]"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Drag the corner to resize."})]})},re=()=>{const[t,o]=i.useState(""),s=i.useRef(null);return i.useEffect(()=>{s.current&&(s.current.style.height="auto",s.current.style.height=s.current.scrollHeight+"px")},[t]),e.jsxs("div",{className:"w-[350px] space-y-2",children:[e.jsx(a,{htmlFor:"autogrow",children:"Auto-growing Textarea"}),e.jsx(r,{ref:s,id:"autogrow",placeholder:"This will grow as you type...",value:t,onChange:j=>o(j.target.value),className:"min-h-[60px] resize-none overflow-hidden"})]})},v={render:()=>e.jsx(re,{})};var y,b,N;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    placeholder: 'Type your message here.'
  }
}`,...(N=(b=c.parameters)==null?void 0:b.docs)==null?void 0:N.source}}};var w,f,T;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div className="grid w-full gap-1.5">
            <Label htmlFor="message">Your message</Label>
            <Textarea placeholder="Type your message here." id="message" />
        </div>
}`,...(T=(f=n.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};var S,L,z;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div className="grid w-full gap-2">
            <Textarea placeholder="Type your message here." />
            <Button>Send message</Button>
        </div>
}`,...(z=(L=d.parameters)==null?void 0:L.docs)==null?void 0:z.source}}};var F,E,W;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <Textarea placeholder="This is disabled..." disabled />
}`,...(W=(E=l.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};var C,q,D;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <TextareaWithCount />
}`,...(D=(q=m.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};var R,B,A;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div className="w-[350px] space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" placeholder="Describe your survey..." className="min-h-[100px]" />
            <p className="text-sm text-muted-foreground">
                This will appear as the survey description to respondents.
            </p>
        </div>
}`,...(A=(B=p.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};var O,G,M;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <div className="w-[350px] space-y-2">
            <Label htmlFor="required" className="text-destructive">
                Required Field
            </Label>
            <Textarea id="required" placeholder="This field is required..." className="border-destructive focus-visible:ring-destructive" />
            <p className="text-sm text-destructive">
                This field is required.
            </p>
        </div>
}`,...(M=(G=u.parameters)==null?void 0:G.docs)==null?void 0:M.source}}};var Q,Y,H;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <div className="w-[350px] space-y-4">
            <div className="space-y-2">
                <Label>Small (2 rows)</Label>
                <Textarea placeholder="Small textarea..." rows={2} />
            </div>
            <div className="space-y-2">
                <Label>Medium (4 rows - default)</Label>
                <Textarea placeholder="Medium textarea..." rows={4} />
            </div>
            <div className="space-y-2">
                <Label>Large (8 rows)</Label>
                <Textarea placeholder="Large textarea..." rows={8} />
            </div>
        </div>
}`,...(H=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:H.source}}};var V,k,_;x.parameters={...x.parameters,docs:{...(V=x.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <OpenEndedQuestion />
}`,...(_=(k=x.parameters)==null?void 0:k.docs)==null?void 0:_.source}}};var P,I,J;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <div className="w-[350px] space-y-2">
            <Label htmlFor="resizable">Resizable Textarea</Label>
            <Textarea id="resizable" placeholder="You can resize this textarea..." className="resize min-h-[100px]" />
            <p className="text-sm text-muted-foreground">
                Drag the corner to resize.
            </p>
        </div>
}`,...(J=(I=g.parameters)==null?void 0:I.docs)==null?void 0:J.source}}};var K,U,X;v.parameters={...v.parameters,docs:{...(K=v.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <AutoGrowTextarea />
}`,...(X=(U=v.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};const he=["Default","WithLabel","WithButton","Disabled","WithCharacterCount","WithHelperText","WithError","Sizes","SurveyOpenEnded","Resizable","AutoGrow"];export{v as AutoGrow,c as Default,l as Disabled,g as Resizable,h as Sizes,x as SurveyOpenEnded,d as WithButton,m as WithCharacterCount,u as WithError,p as WithHelperText,n as WithLabel,he as __namedExportsOrder,ue as default};
