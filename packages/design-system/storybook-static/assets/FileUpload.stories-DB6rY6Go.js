import{j as e}from"./jsx-runtime-BYYWji4R.js";import{D as n}from"./dropzone-Bu7LAIl6.js";import{L as v}from"./label-DYOVXtut.js";import{r as i}from"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./tslib.es6-BUas5LQb.js";import"./icons-BrjYTXf4.js";import"./utils-CDN07tui.js";import"./button-u6FMGbIq.js";import"./index-CyBucMil.js";import"./index-Bew1Yeam.js";import"./index-C2vczdB5.js";import"./index-Drr-0Uuw.js";const E={title:"Components/Form Elements/FileUpload",id:"specific-fileupload",component:n,parameters:{docs:{description:{component:"File Upload component using react-dropzone."}}}},a={render:()=>{const[s,r]=i.useState([]);return e.jsx("div",{className:"space-y-2",children:e.jsx(n,{value:s,onChange:r})})}},o={render:()=>{const[s,r]=i.useState([]);return e.jsxs("div",{className:"space-y-2",children:[e.jsx(v,{children:"Upload Documents"}),e.jsx(n,{value:s,onChange:r,dropMessage:"Upload PDF or DOCX"})]})}},t={render:()=>{const[s,r]=i.useState([]);return e.jsx("div",{className:"space-y-2",children:e.jsx(n,{value:s,onChange:r,multiple:!0,dropMessage:"Drag multiple files here"})})}};var l,p,c;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => {
    const [files, setFiles] = useState<File[]>([]);
    return <div className="space-y-2">
                <Dropzone value={files} onChange={setFiles} />
            </div>;
  }
}`,...(c=(p=a.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var m,d,u;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    const [files, setFiles] = useState<File[]>([]);
    return <div className="space-y-2">
                <Label>Upload Documents</Label>
                <Dropzone value={files} onChange={setFiles} dropMessage="Upload PDF or DOCX" />
            </div>;
  }
}`,...(u=(d=o.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var f,F,g;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    const [files, setFiles] = useState<File[]>([]);
    return <div className="space-y-2">
                <Dropzone value={files} onChange={setFiles} multiple dropMessage="Drag multiple files here" />
            </div>;
  }
}`,...(g=(F=t.parameters)==null?void 0:F.docs)==null?void 0:g.source}}};const O=["Default","WithLabel","MultipleFiles"];export{a as Default,t as MultipleFiles,o as WithLabel,O as __namedExportsOrder,E as default};
