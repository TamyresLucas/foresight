import{j as t}from"./jsx-runtime-BYYWji4R.js";import{B as D}from"./button-DY4UnA7S.js";import{u as k,T as y}from"./toaster-BgpJKJkE.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-CyBucMil.js";import"./index-Bew1Yeam.js";import"./index-C2vczdB5.js";import"./utils-CDN07tui.js";import"./index-Drr-0Uuw.js";import"./index-DW48STyt.js";import"./index-BpI74HIb.js";import"./index-CWz5EflU.js";import"./index-guOESLwJ.js";import"./index-C59fdHCL.js";import"./index-kkVLZR_L.js";import"./index-BntbZM61.js";import"./index-CafsI6Qv.js";import"./index-B2NcgzwI.js";import"./index-B0ATiKj9.js";import"./index-C4f8hYez.js";import"./icons-BXU3tp_f.js";import"./icon-CPjmVJEk.js";const C=({variant:r})=>{const{toast:w}=k();return t.jsxs(t.Fragment,{children:[t.jsxs(D,{variant:"outline",onClick:()=>{w({title:r?`${r.charAt(0).toUpperCase()+r.slice(1)} notification`:"Notification",description:"This is an example toast message.",variant:r})},children:["Show ",r??"default"," toast"]}),t.jsx(y,{})]})},V={title:"Components/Feedback/Toaster",component:C,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","success","warning","destructive","info"],description:"Toast variant to display when the button is clicked."}}},s={args:{variant:"default"}},e={args:{variant:"success"}},a={args:{variant:"warning"}},o={args:{variant:"destructive"}},n={args:{variant:"info"}};var i,c,p;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    variant: 'default'
  }
}`,...(p=(c=s.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,u,d;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: 'success'
  }
}`,...(d=(u=e.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var l,g,f;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    variant: 'warning'
  }
}`,...(f=(g=a.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var v,x,S;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: 'destructive'
  }
}`,...(S=(x=o.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var T,h,j;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    variant: 'info'
  }
}`,...(j=(h=n.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};const X=["Default","Success","Warning","Destructive","Info"];export{s as Default,o as Destructive,n as Info,e as Success,a as Warning,X as __namedExportsOrder,V as default};
