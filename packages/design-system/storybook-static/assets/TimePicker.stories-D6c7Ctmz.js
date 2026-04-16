import{j as e}from"./jsx-runtime-BYYWji4R.js";import{r as a}from"./index-ClcD9ViR.js";import{S as v,a as N,b as j,c as y,d as b}from"./select-C7AyIqOl.js";import{c as z}from"./utils-CDN07tui.js";import{L as f}from"./label-D3XcEZ0Y.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Drr-0Uuw.js";import"./index-BdQq_4o_.js";import"./index-DW48STyt.js";import"./index-BpI74HIb.js";import"./index-CWz5EflU.js";import"./index-Bew1Yeam.js";import"./index-CyBucMil.js";import"./index-CZKF78Oq.js";import"./index-guOESLwJ.js";import"./index-C59fdHCL.js";import"./index-kkVLZR_L.js";import"./index-CDv6ZuJx.js";import"./tslib.es6-BUas5LQb.js";import"./index-CaubhJIw.js";import"./index-CafsI6Qv.js";import"./index-DTBqWj02.js";import"./index-Jh3OPyOv.js";import"./index-BntbZM61.js";import"./index-B0ATiKj9.js";import"./index-sY83p_TZ.js";import"./index-C4f8hYez.js";import"./icons-BJRAOfCp.js";import"./icon-CPjmVJEk.js";import"./index-C2vczdB5.js";function i({value:t,onChange:r,disabled:n=!1,className:h,hourPlaceholder:$="HH",minutePlaceholder:F="MM"}){const[o,g]=a.useState((t==null?void 0:t.split(":")[0])||""),[c,S]=a.useState((t==null?void 0:t.split(":")[1])||""),O=a.useMemo(()=>Array.from({length:24},(s,m)=>m.toString().padStart(2,"0")),[]),R=a.useMemo(()=>Array.from({length:60},(s,m)=>m.toString().padStart(2,"0")),[]);return a.useEffect(()=>{o&&c&&(r==null||r(`${o}:${c}`))},[o,c]),a.useEffect(()=>{if(t){const s=t.split(":");if(s.length===2){const m=s[0],T=s[1];m!==o&&g(m),T!==c&&S(T)}}},[t]),e.jsxs("div",{className:z("flex items-center gap-2",h),children:[e.jsxs(v,{value:o,onValueChange:g,disabled:n,children:[e.jsx(N,{className:"w-[80px]",children:e.jsx(j,{placeholder:$})}),e.jsx(y,{className:"max-h-[200px]",children:O.map(s=>e.jsx(b,{value:s,children:s},s))})]}),e.jsx("span",{className:"text-lg font-medium text-muted-foreground",children:":"}),e.jsxs(v,{value:c,onValueChange:S,disabled:n,children:[e.jsx(N,{className:"w-[80px]",children:e.jsx(j,{placeholder:F})}),e.jsx(y,{className:"max-h-[200px]",children:R.map(s=>e.jsx(b,{value:s,children:s},s))})]})]})}try{i.displayName="TimePicker",i.__docgenInfo={description:"",displayName:"TimePicker",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string) => void)"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},hourPlaceholder:{defaultValue:{value:"HH"},description:"",name:"hourPlaceholder",required:!1,type:{name:"string"}},minutePlaceholder:{defaultValue:{value:"MM"},description:"",name:"minutePlaceholder",required:!1,type:{name:"string"}}}}}catch{}const Ne={title:"ShadCn/Form Elements/TimePicker",id:"specific-timepicker",component:i,tags:["autodocs"],parameters:{docs:{description:{component:"Custom Time Picker using 2 Select components (Hours 00-23, Minutes 00-59)."}}},argTypes:{value:{control:"text",description:'Time value in "HH:MM" format'},disabled:{control:"boolean",description:"Disables the component"}}},l={render:()=>{const[t,r]=a.useState("");return e.jsxs("div",{className:"space-y-4",children:[e.jsx(i,{value:t,onChange:r}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected time: ",t||"None"]})]})}},d={render:()=>{const[t,r]=a.useState("14:30");return e.jsxs("div",{className:"space-y-4",children:[e.jsx(i,{value:t,onChange:r}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected time: ",t]})]})}},p={render:()=>{const[t,r]=a.useState("09:00");return e.jsxs("div",{className:"space-y-2",children:[e.jsx(f,{children:"Start Time"}),e.jsx(i,{value:t,onChange:r})]})}},u={args:{value:"12:00",disabled:!0}},x={render:()=>{const[t,r]=a.useState("09:00"),[n,h]=a.useState("17:00");return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(f,{children:"Start Time"}),e.jsx(i,{value:t,onChange:r})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(f,{children:"End Time"}),e.jsx(i,{value:n,onChange:h})]}),e.jsxs("div",{className:"p-4 bg-muted rounded-lg",children:[e.jsx("p",{className:"text-sm font-medium",children:"Selected Period:"}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:[t," - ",n]})]})]})}};var P,C,M;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => {
    const [time, setTime] = useState('');
    return <div className="space-y-4">
                <TimePicker value={time} onChange={setTime} />
                <p className="text-sm text-muted-foreground">
                    Selected time: {time || 'None'}
                </p>
            </div>;
  }
}`,...(M=(C=l.parameters)==null?void 0:C.docs)==null?void 0:M.source}}};var V,_,k;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => {
    const [time, setTime] = useState('14:30');
    return <div className="space-y-4">
                <TimePicker value={time} onChange={setTime} />
                <p className="text-sm text-muted-foreground">
                    Selected time: {time}
                </p>
            </div>;
  }
}`,...(k=(_=d.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};var E,L,H;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    const [time, setTime] = useState('09:00');
    return <div className="space-y-2">
                <Label>Start Time</Label>
                <TimePicker value={time} onChange={setTime} />
            </div>;
  }
}`,...(H=(L=p.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var q,D,I;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    value: "12:00",
    disabled: true
  }
}`,...(I=(D=u.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var W,w,A;x.parameters={...x.parameters,docs:{...(W=x.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    const [startTime, setStartTime] = useState('09:00');
    const [endTime, setEndTime] = useState('17:00');
    return <div className="space-y-6">
                <div className="space-y-2">
                    <Label>Start Time</Label>
                    <TimePicker value={startTime} onChange={setStartTime} />
                </div>
                <div className="space-y-2">
                    <Label>End Time</Label>
                    <TimePicker value={endTime} onChange={setEndTime} />
                </div>
                <div className="p-4 bg-muted rounded-lg">
                    <p className="text-sm font-medium">Selected Period:</p>
                    <p className="text-sm text-muted-foreground">
                        {startTime} - {endTime}
                    </p>
                </div>
            </div>;
  }
}`,...(A=(w=x.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};const je=["Default","WithValue","WithLabel","Disabled","MultipleInstances"];export{l as Default,u as Disabled,x as MultipleInstances,p as WithLabel,d as WithValue,je as __namedExportsOrder,Ne as default};
