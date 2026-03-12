import{j as e}from"./jsx-runtime-BYYWji4R.js";import{B as a}from"./button-u6FMGbIq.js";import{T as c,u as i}from"./toaster-DNTfbsc_.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-CyBucMil.js";import"./index-Bew1Yeam.js";import"./index-C2vczdB5.js";import"./utils-CDN07tui.js";import"./index-Drr-0Uuw.js";import"./index-DW48STyt.js";import"./index-BpI74HIb.js";import"./index-CWz5EflU.js";import"./index-guOESLwJ.js";import"./index-C59fdHCL.js";import"./index-kkVLZR_L.js";import"./index-BntbZM61.js";import"./index-CafsI6Qv.js";import"./index-B2NcgzwI.js";import"./index-B0ATiKj9.js";import"./index-C4f8hYez.js";import"./icons-BrjYTXf4.js";const f=()=>{const{toast:t}=i();return e.jsx(a,{variant:"outline",onClick:()=>{t({title:"Scheduled: Catch up",description:"Friday, February 10, 2023 at 5:57 PM"})},children:"Show Toast"})},I={title:"Components/Feedback/Toast",component:c,parameters:{layout:"centered"},tags:["autodocs"],decorators:[t=>e.jsxs(e.Fragment,{children:[e.jsx(t,{}),e.jsx(c,{})]})]},r={render:()=>e.jsx(f,{})},o={render:()=>{const{toast:t}=i();return e.jsx(a,{variant:"destructive",onClick:()=>{t({variant:"destructive",title:"Uh oh! Something went wrong.",description:"There was a problem with your request."})},children:"Show Destructive Toast"})}},s={render:()=>{const{toast:t}=i();return e.jsx(a,{variant:"success",onClick:()=>{t({variant:"success",title:"Success!",description:"Your action was completed successfully."})},children:"Show Success Toast"})}},n={render:()=>{const{toast:t}=i();return e.jsx(a,{variant:"outline",onClick:()=>{t({variant:"default",title:"Warning",description:"Please proceed with caution."})},children:"Show Warning Toast"})}};var u,p,m;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <ToastDemo />
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var d,l,h;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => {
    const {
      toast
    } = useToast();
    return <Button variant="destructive" onClick={() => {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request."
      });
    }}>
        Show Destructive Toast
      </Button>;
  }
}`,...(h=(l=o.parameters)==null?void 0:l.docs)==null?void 0:h.source}}};var v,S,w;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => {
    const {
      toast
    } = useToast();
    return <Button variant="success" onClick={() => {
      toast({
        variant: "success",
        title: "Success!",
        description: "Your action was completed successfully."
      });
    }}>
        Show Success Toast
      </Button>;
  }
}`,...(w=(S=s.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var T,g,x;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    const {
      toast
    } = useToast();
    return <Button variant="outline" onClick={() => {
      toast({
        variant: "default",
        title: "Warning",
        description: "Please proceed with caution."
      });
    }}>
        Show Warning Toast
      </Button>;
  }
}`,...(x=(g=n.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};const J=["Default","Destructive","Success","Warning"];export{r as Default,o as Destructive,s as Success,n as Warning,J as __namedExportsOrder,I as default};
