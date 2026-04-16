import{j as e}from"./jsx-runtime-BYYWji4R.js";import{R as p,r as d}from"./index-ClcD9ViR.js";import{c as Te}from"./index-CWz5EflU.js";import{P as _}from"./index-C59fdHCL.js";import{I as fe,c as te,R as we}from"./index-CGGLQkrZ.js";import{a as ye,t as Ie}from"./toggle-D-OD_p_g.js";import{u as ie}from"./index-B0ATiKj9.js";import{u as be}from"./index-CZKF78Oq.js";import{c as ce}from"./utils-CDN07tui.js";import{E as v,a5 as N,a6 as G,a7 as ke,a8 as Ce,a9 as ue,x as Le,aa as Se,ab as Ve,ac as _e,q as Me,r as ze,ad as Pe,y as Ae}from"./icons-BJRAOfCp.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Drr-0Uuw.js";import"./index-CyBucMil.js";import"./index-Bew1Yeam.js";import"./index-DW48STyt.js";import"./index-BpI74HIb.js";import"./index-CaubhJIw.js";import"./index-CafsI6Qv.js";import"./index-kkVLZR_L.js";import"./index-C2vczdB5.js";import"./icon-CPjmVJEk.js";var g="ToggleGroup",[pe]=Te(g,[te]),ge=te(),V=p.forwardRef((s,r)=>{const{type:l,...o}=s;if(l==="single"){const n=o;return e.jsx(Be,{...n,ref:r})}if(l==="multiple"){const n=o;return e.jsx(Re,{...n,ref:r})}throw new Error(`Missing prop \`type\` expected on \`${g}\``)});V.displayName=g;var[me,de]=pe(g),Be=p.forwardRef((s,r)=>{const{value:l,defaultValue:o,onValueChange:n=()=>{},...t}=s,[i,c]=ie({prop:l,defaultProp:o??"",onChange:n,caller:g});return e.jsx(me,{scope:s.__scopeToggleGroup,type:"single",value:p.useMemo(()=>i?[i]:[],[i]),onItemActivate:c,onItemDeactivate:p.useCallback(()=>c(""),[c]),children:e.jsx(he,{...t,ref:r})})}),Re=p.forwardRef((s,r)=>{const{value:l,defaultValue:o,onValueChange:n=()=>{},...t}=s,[i,c]=ie({prop:l,defaultProp:o??[],onChange:n,caller:g}),m=p.useCallback(h=>c((x=[])=>[...x,h]),[c]),S=p.useCallback(h=>c((x=[])=>x.filter(je=>je!==h)),[c]);return e.jsx(me,{scope:s.__scopeToggleGroup,type:"multiple",value:i,onItemActivate:m,onItemDeactivate:S,children:e.jsx(he,{...t,ref:r})})});V.displayName=g;var[We,De]=pe(g),he=p.forwardRef((s,r)=>{const{__scopeToggleGroup:l,disabled:o=!1,rovingFocus:n=!0,orientation:t,dir:i,loop:c=!0,...m}=s,S=ge(l),h=be(i),x={role:"group",dir:h,...m};return e.jsx(We,{scope:l,rovingFocus:n,disabled:o,children:n?e.jsx(we,{asChild:!0,...S,orientation:t,dir:h,loop:c,children:e.jsx(_.div,{...x,ref:r})}):e.jsx(_.div,{...x,ref:r})})}),L="ToggleGroupItem",xe=p.forwardRef((s,r)=>{const l=de(L,s.__scopeToggleGroup),o=De(L,s.__scopeToggleGroup),n=ge(s.__scopeToggleGroup),t=l.value.includes(s.value),i=o.disabled||s.disabled,c={...s,pressed:t,disabled:i},m=p.useRef(null);return o.rovingFocus?e.jsx(fe,{asChild:!0,...n,focusable:!i,active:t,ref:m,children:e.jsx(M,{...c,ref:r})}):e.jsx(M,{...c,ref:r})});xe.displayName=L;var M=p.forwardRef((s,r)=>{const{__scopeToggleGroup:l,value:o,...n}=s,t=de(L,l),i={role:"radio","aria-checked":s.pressed,"aria-pressed":void 0},c=t.type==="single"?i:void 0;return e.jsx(ye,{...c,...n,ref:r,onPressedChange:m=>{m?t.onItemActivate(o):t.onItemDeactivate(o)}})}),ve=V,Ne=xe;const Ge=d.createContext({size:"default",variant:"default"}),u=d.forwardRef(({className:s,variant:r,size:l,children:o,...n},t)=>e.jsx(ve,{ref:t,className:ce("flex items-center justify-center gap-1",s),...n,children:e.jsx(Ge.Provider,{value:{variant:r,size:l},children:o})}));u.displayName=ve.displayName;const a=d.forwardRef(({className:s,children:r,variant:l,size:o,...n},t)=>{const i=d.useContext(Ge);return e.jsx(Ne,{ref:t,className:ce(Ie({variant:i.variant||l,size:i.size||o}),s),...n,children:r})});a.displayName=Ne.displayName;try{u.displayName="ToggleGroup",u.__docgenInfo={description:"",displayName:"ToggleGroup",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:'"default" | "outline" | null'}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:'"default" | "sm" | "lg" | null'}}}}}catch{}try{a.displayName="ToggleGroupItem",a.__docgenInfo={description:"",displayName:"ToggleGroupItem",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:'"default" | "outline" | null'}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:'"default" | "sm" | "lg" | null'}}}}}catch{}const ia={title:"ShadCn/Form Elements/ToggleGroup",component:u,parameters:{layout:"centered"}},j={render:()=>e.jsxs(u,{type:"multiple",children:[e.jsx(a,{value:"bold","aria-label":"Toggle bold",children:e.jsx(v,{className:"h-4 w-4"})}),e.jsx(a,{value:"italic","aria-label":"Toggle italic",children:e.jsx(N,{className:"h-4 w-4"})}),e.jsx(a,{value:"underline","aria-label":"Toggle underline",children:e.jsx(G,{className:"h-4 w-4"})})]})},T={render:()=>e.jsxs(u,{type:"single",defaultValue:"center",children:[e.jsx(a,{value:"left","aria-label":"Align left",children:e.jsx(Le,{className:"h-4 w-4"})}),e.jsx(a,{value:"center","aria-label":"Align center",children:e.jsx(Se,{className:"h-4 w-4"})}),e.jsx(a,{value:"right","aria-label":"Align right",children:e.jsx(Ve,{className:"h-4 w-4"})}),e.jsx(a,{value:"justify","aria-label":"Align justify",children:e.jsx(_e,{className:"h-4 w-4"})})]})},f={render:()=>e.jsxs(u,{type:"single",defaultValue:"list",children:[e.jsxs(a,{value:"list","aria-label":"List view",className:"gap-2",children:[e.jsx(Ae,{className:"h-4 w-4"}),e.jsx("span",{className:"text-sm",children:"List"})]}),e.jsxs(a,{value:"grid","aria-label":"Grid view",className:"gap-2",children:[e.jsx(ue,{className:"h-4 w-4"}),e.jsx("span",{className:"text-sm",children:"Grid"})]})]})},w={render:()=>e.jsxs(u,{type:"single",variant:"outline",defaultValue:"2x2",children:[e.jsx(a,{value:"2x2","aria-label":"2x2 Grid",children:e.jsx(ke,{className:"h-4 w-4"})}),e.jsx(a,{value:"3x3","aria-label":"3x3 Grid",children:e.jsx(Ce,{className:"h-4 w-4"})}),e.jsx(a,{value:"full","aria-label":"Full Grid",children:e.jsx(ue,{className:"h-4 w-4"})})]})},y={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"text-sm w-16",children:"Small:"}),e.jsxs(u,{type:"multiple",size:"sm",children:[e.jsx(a,{value:"bold",children:e.jsx(v,{className:"h-3 w-3"})}),e.jsx(a,{value:"italic",children:e.jsx(N,{className:"h-3 w-3"})}),e.jsx(a,{value:"underline",children:e.jsx(G,{className:"h-3 w-3"})})]})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"text-sm w-16",children:"Default:"}),e.jsxs(u,{type:"multiple",size:"default",children:[e.jsx(a,{value:"bold",children:e.jsx(v,{className:"h-4 w-4"})}),e.jsx(a,{value:"italic",children:e.jsx(N,{className:"h-4 w-4"})}),e.jsx(a,{value:"underline",children:e.jsx(G,{className:"h-4 w-4"})})]})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"text-sm w-16",children:"Large:"}),e.jsxs(u,{type:"multiple",size:"lg",children:[e.jsx(a,{value:"bold",children:e.jsx(v,{className:"h-5 w-5"})}),e.jsx(a,{value:"italic",children:e.jsx(N,{className:"h-5 w-5"})}),e.jsx(a,{value:"underline",children:e.jsx(G,{className:"h-5 w-5"})})]})]})]})},I={render:()=>e.jsxs(u,{type:"multiple",disabled:!0,children:[e.jsx(a,{value:"bold",children:e.jsx(v,{className:"h-4 w-4"})}),e.jsx(a,{value:"italic",children:e.jsx(N,{className:"h-4 w-4"})}),e.jsx(a,{value:"underline",children:e.jsx(G,{className:"h-4 w-4"})})]})},b={render:()=>{const[s,r]=d.useState("system");return e.jsxs("div",{className:"space-y-3",children:[e.jsxs(u,{type:"single",value:s,onValueChange:l=>l&&r(l),className:"border rounded-lg p-1",children:[e.jsxs(a,{value:"light",className:"gap-2",children:[e.jsx(Me,{className:"h-4 w-4"}),"Light"]}),e.jsxs(a,{value:"dark",className:"gap-2",children:[e.jsx(ze,{className:"h-4 w-4"}),"Dark"]}),e.jsxs(a,{value:"system",className:"gap-2",children:[e.jsx(Pe,{className:"h-4 w-4"}),"System"]})]}),e.jsxs("p",{className:"text-sm text-muted-foreground text-center",children:["Current theme: ",e.jsx("span",{className:"font-medium",children:s})]})]})}},k={render:()=>{const[s,r]=d.useState("builder");return e.jsxs("div",{className:"space-y-3",children:[e.jsxs(u,{type:"single",value:s,onValueChange:l=>l&&r(l),children:[e.jsxs(a,{value:"builder",className:"gap-2 px-4",children:[e.jsx("svg",{className:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"})}),"Builder"]}),e.jsxs(a,{value:"preview",className:"gap-2 px-4",children:[e.jsxs("svg",{className:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:[e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}),e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"})]}),"Preview"]}),e.jsxs(a,{value:"logic",className:"gap-2 px-4",children:[e.jsx("svg",{className:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 10V3L4 14h7v7l9-11h-7z"})}),"Logic"]})]}),e.jsxs("p",{className:"text-sm text-muted-foreground text-center",children:["View: ",e.jsx("span",{className:"font-medium capitalize",children:s})]})]})}},C={render:()=>{const[s,r]=d.useState("single");return e.jsxs("div",{className:"space-y-3",children:[e.jsx("p",{className:"text-sm font-medium",children:"Response Type"}),e.jsxs(u,{type:"single",value:s,onValueChange:l=>l&&r(l),variant:"outline",children:[e.jsxs(a,{value:"single",className:"flex-col gap-1 h-auto py-2 px-4",children:[e.jsxs("svg",{className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10",strokeWidth:2}),e.jsx("circle",{cx:"12",cy:"12",r:"4",fill:"currentColor"})]}),e.jsx("span",{className:"text-xs",children:"Single"})]}),e.jsxs(a,{value:"multiple",className:"flex-col gap-1 h-auto py-2 px-4",children:[e.jsxs("svg",{className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:[e.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",strokeWidth:2}),e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4"})]}),e.jsx("span",{className:"text-xs",children:"Multiple"})]}),e.jsxs(a,{value:"text",className:"flex-col gap-1 h-auto py-2 px-4",children:[e.jsx("svg",{className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h7"})}),e.jsx("span",{className:"text-xs",children:"Text"})]})]})]})}};var z,P,A;j.parameters={...j.parameters,docs:{...(z=j.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <ToggleGroup type="multiple">
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <Italic className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Toggle underline">
        <Underline className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
}`,...(A=(P=j.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};var B,R,W;T.parameters={...T.parameters,docs:{...(B=T.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <ToggleGroup type="single" defaultValue="center">
      <ToggleGroupItem value="left" aria-label="Align left">
        <AlignLeft className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Align center">
        <AlignCenter className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Align right">
        <AlignRight className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="justify" aria-label="Align justify">
        <AlignJustify className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
}`,...(W=(R=T.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var D,E,F;f.parameters={...f.parameters,docs:{...(D=f.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <ToggleGroup type="single" defaultValue="list">
      <ToggleGroupItem value="list" aria-label="List view" className="gap-2">
        <List className="h-4 w-4" />
        <span className="text-sm">List</span>
      </ToggleGroupItem>
      <ToggleGroupItem value="grid" aria-label="Grid view" className="gap-2">
        <LayoutGrid className="h-4 w-4" />
        <span className="text-sm">Grid</span>
      </ToggleGroupItem>
    </ToggleGroup>
}`,...(F=(E=f.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var q,U,O;w.parameters={...w.parameters,docs:{...(q=w.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <ToggleGroup type="single" variant="outline" defaultValue="2x2">
      <ToggleGroupItem value="2x2" aria-label="2x2 Grid">
        <Grid2X2 className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="3x3" aria-label="3x3 Grid">
        <Grid3X3 className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="full" aria-label="Full Grid">
        <LayoutGrid className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
}`,...(O=(U=w.parameters)==null?void 0:U.docs)==null?void 0:O.source}}};var H,X,$;y.parameters={...y.parameters,docs:{...(H=y.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <span className="text-sm w-16">Small:</span>
        <ToggleGroup type="multiple" size="sm">
          <ToggleGroupItem value="bold">
            <Bold className="h-3 w-3" />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic">
            <Italic className="h-3 w-3" />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline">
            <Underline className="h-3 w-3" />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-sm w-16">Default:</span>
        <ToggleGroup type="multiple" size="default">
          <ToggleGroupItem value="bold">
            <Bold className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic">
            <Italic className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline">
            <Underline className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-sm w-16">Large:</span>
        <ToggleGroup type="multiple" size="lg">
          <ToggleGroupItem value="bold">
            <Bold className="h-5 w-5" />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic">
            <Italic className="h-5 w-5" />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline">
            <Underline className="h-5 w-5" />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
}`,...($=(X=y.parameters)==null?void 0:X.docs)==null?void 0:$.source}}};var J,Q,K;I.parameters={...I.parameters,docs:{...(J=I.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <ToggleGroup type="multiple" disabled>
      <ToggleGroupItem value="bold">
        <Bold className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic">
        <Italic className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline">
        <Underline className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
}`,...(K=(Q=I.parameters)==null?void 0:Q.docs)==null?void 0:K.source}}};var Y,Z,ee;b.parameters={...b.parameters,docs:{...(Y=b.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => {
    const [theme, setTheme] = React.useState("system");
    return <div className="space-y-3">
        <ToggleGroup type="single" value={theme} onValueChange={value => value && setTheme(value)} className="border rounded-lg p-1">
          <ToggleGroupItem value="light" className="gap-2">
            <Sun className="h-4 w-4" />
            Light
          </ToggleGroupItem>
          <ToggleGroupItem value="dark" className="gap-2">
            <Moon className="h-4 w-4" />
            Dark
          </ToggleGroupItem>
          <ToggleGroupItem value="system" className="gap-2">
            <Monitor className="h-4 w-4" />
            System
          </ToggleGroupItem>
        </ToggleGroup>
        <p className="text-sm text-muted-foreground text-center">
          Current theme: <span className="font-medium">{theme}</span>
        </p>
      </div>;
  }
}`,...(ee=(Z=b.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,se,le;k.parameters={...k.parameters,docs:{...(ae=k.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => {
    const [view, setView] = React.useState("builder");
    return <div className="space-y-3">
        <ToggleGroup type="single" value={view} onValueChange={value => value && setView(value)}>
          <ToggleGroupItem value="builder" className="gap-2 px-4">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            Builder
          </ToggleGroupItem>
          <ToggleGroupItem value="preview" className="gap-2 px-4">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            Preview
          </ToggleGroupItem>
          <ToggleGroupItem value="logic" className="gap-2 px-4">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Logic
          </ToggleGroupItem>
        </ToggleGroup>
        <p className="text-sm text-muted-foreground text-center">
          View: <span className="font-medium capitalize">{view}</span>
        </p>
      </div>;
  }
}`,...(le=(se=k.parameters)==null?void 0:se.docs)==null?void 0:le.source}}};var re,oe,ne;C.parameters={...C.parameters,docs:{...(re=C.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => {
    const [type, setType] = React.useState("single");
    return <div className="space-y-3">
        <p className="text-sm font-medium">Response Type</p>
        <ToggleGroup type="single" value={type} onValueChange={value => value && setType(value)} variant="outline">
          <ToggleGroupItem value="single" className="flex-col gap-1 h-auto py-2 px-4">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <circle cx="12" cy="12" r="10" strokeWidth={2} />
              <circle cx="12" cy="12" r="4" fill="currentColor" />
            </svg>
            <span className="text-xs">Single</span>
          </ToggleGroupItem>
          <ToggleGroupItem value="multiple" className="flex-col gap-1 h-auto py-2 px-4">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth={2} />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
            </svg>
            <span className="text-xs">Multiple</span>
          </ToggleGroupItem>
          <ToggleGroupItem value="text" className="flex-col gap-1 h-auto py-2 px-4">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
            </svg>
            <span className="text-xs">Text</span>
          </ToggleGroupItem>
        </ToggleGroup>
      </div>;
  }
}`,...(ne=(oe=C.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};const ca=["Default","Single","WithLabels","Outline","Sizes","Disabled","ThemeSwitcher","SurveyViewToggle","QuestionTypeSelector"];export{j as Default,I as Disabled,w as Outline,C as QuestionTypeSelector,T as Single,y as Sizes,k as SurveyViewToggle,b as ThemeSwitcher,f as WithLabels,ca as __namedExportsOrder,ia as default};
