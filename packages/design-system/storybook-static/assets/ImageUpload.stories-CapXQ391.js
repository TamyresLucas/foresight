import{j as e}from"./jsx-runtime-BYYWji4R.js";import{D as o}from"./dropzone-Dhwn_cOf.js";import{L as d}from"./label-D3XcEZ0Y.js";import{r as g}from"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./tslib.es6-BUas5LQb.js";import"./icons-BXU3tp_f.js";import"./icon-CPjmVJEk.js";import"./utils-CDN07tui.js";import"./button-DY4UnA7S.js";import"./index-CyBucMil.js";import"./index-Bew1Yeam.js";import"./index-C2vczdB5.js";import"./index-Drr-0Uuw.js";const C={title:"Components/Form Elements/ImageUpload",id:"specific-imageupload",component:o,parameters:{docs:{description:{component:"Image Upload variant with preview grid."}}}},r={render:()=>{const[a,t]=g.useState([]);return e.jsxs("div",{className:"space-y-2 max-w-sm",children:[e.jsx(d,{children:"Profile Picture"}),e.jsx(o,{value:a,onChange:t,type:"image",maxFiles:1,dropMessage:"Upload Image"})]})}},s={render:()=>{const[a,t]=g.useState([]);return e.jsxs("div",{className:"space-y-2",children:[e.jsx(d,{children:"Product Gallery"}),e.jsx(o,{value:a,onChange:t,type:"image",multiple:!0,dropMessage:"Drag images here"})]})}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    const [files, setFiles] = useState<File[]>([]);
    return <div className="space-y-2 max-w-sm">
                <Label>Profile Picture</Label>
                <Dropzone value={files} onChange={setFiles} type="image" maxFiles={1} dropMessage="Upload Image" />
            </div>;
  }
}`,...(n=(m=r.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};var l,p,c;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => {
    const [files, setFiles] = useState<File[]>([]);
    return <div className="space-y-2">
                <Label>Product Gallery</Label>
                <Dropzone value={files} onChange={setFiles} type="image" multiple dropMessage="Drag images here" />
            </div>;
  }
}`,...(c=(p=s.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const w=["SingleImage","ImageGallery"];export{s as ImageGallery,r as SingleImage,w as __namedExportsOrder,C as default};
