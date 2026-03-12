import{j as e}from"./jsx-runtime-BYYWji4R.js";import{r as n}from"./index-ClcD9ViR.js";import{a1 as pt}from"./icons-BrjYTXf4.js";import{c as ie}from"./utils-CDN07tui.js";import{L as Ue}from"./label-DYOVXtut.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Drr-0Uuw.js";import"./index-Bew1Yeam.js";import"./index-C2vczdB5.js";var xt=Object.defineProperty,mt=Object.defineProperties,ht=Object.getOwnPropertyDescriptors,le=Object.getOwnPropertySymbols,Xe=Object.prototype.hasOwnProperty,Ye=Object.prototype.propertyIsEnumerable,be=(r,o,s)=>o in r?xt(r,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[o]=s,ft=(r,o)=>{for(var s in o||(o={}))Xe.call(o,s)&&be(r,s,o[s]);if(le)for(var s of le(o))Ye.call(o,s)&&be(r,s,o[s]);return r},gt=(r,o)=>mt(r,ht(o)),vt=(r,o)=>{var s={};for(var l in r)Xe.call(r,l)&&o.indexOf(l)<0&&(s[l]=r[l]);if(r!=null&&le)for(var l of le(r))o.indexOf(l)<0&&Ye.call(r,l)&&(s[l]=r[l]);return s};function jt(r){let o=setTimeout(r,0),s=setTimeout(r,10),l=setTimeout(r,50);return[o,s,l]}function Pt(r){let o=n.useRef();return n.useEffect(()=>{o.current=r}),o.current}var Tt=18,et=40,Ot=`${et}px`,St=["[data-lastpass-icon-root]","com-1password-button","[data-dashlanecreated]",'[style$="2147483647 !important;"]'].join(",");function It({containerRef:r,inputRef:o,pushPasswordManagerStrategy:s,isFocused:l}){let[P,c]=n.useState(!1),[M,y]=n.useState(!1),[_,H]=n.useState(!1),$=n.useMemo(()=>s==="none"?!1:(s==="increase-width"||s==="experimental-no-flickering")&&P&&M,[P,M,s]),F=n.useCallback(()=>{let g=r.current,C=o.current;if(!g||!C||_||s==="none")return;let T=g,b=T.getBoundingClientRect().left+T.offsetWidth,W=T.getBoundingClientRect().top+T.offsetHeight/2,d=b-Tt,z=W;document.querySelectorAll(St).length===0&&document.elementFromPoint(d,z)===g||(c(!0),H(!0))},[r,o,_,s]);return n.useEffect(()=>{let g=r.current;if(!g||s==="none")return;function C(){let b=window.innerWidth-g.getBoundingClientRect().right;y(b>=et)}C();let T=setInterval(C,1e3);return()=>{clearInterval(T)}},[r,s]),n.useEffect(()=>{let g=l||document.activeElement===o.current;if(s==="none"||!g)return;let C=setTimeout(F,0),T=setTimeout(F,2e3),b=setTimeout(F,5e3),W=setTimeout(()=>{H(!0)},6e3);return()=>{clearTimeout(C),clearTimeout(T),clearTimeout(b),clearTimeout(W)}},[o,l,s,F]),{hasPWMBadge:P,willPushPWMBadge:$,PWM_BADGE_SPACE_WIDTH:Ot}}var tt=n.createContext({}),nt=n.forwardRef((r,o)=>{var s=r,{value:l,onChange:P,maxLength:c,textAlign:M="left",pattern:y,placeholder:_,inputMode:H="numeric",onComplete:$,pushPasswordManagerStrategy:F="increase-width",pasteTransformer:g,containerClassName:C,noScriptCSSFallback:T=yt,render:b,children:W}=s,d=vt(s,["value","onChange","maxLength","textAlign","pattern","placeholder","inputMode","onComplete","pushPasswordManagerStrategy","pasteTransformer","containerClassName","noScriptCSSFallback","render","children"]),z,me,he,fe,ge;let[rt,ot]=n.useState(typeof d.defaultValue=="string"?d.defaultValue:""),p=l??rt,G=Pt(p),q=n.useCallback(a=>{P==null||P(a),ot(a)},[P]),I=n.useMemo(()=>y?typeof y=="string"?new RegExp(y):y:null,[y]),x=n.useRef(null),ue=n.useRef(null),de=n.useRef({value:p,onChange:q,isIOS:typeof window<"u"&&((me=(z=window==null?void 0:window.CSS)==null?void 0:z.supports)==null?void 0:me.call(z,"-webkit-touch-callout","none"))}),U=n.useRef({prev:[(he=x.current)==null?void 0:he.selectionStart,(fe=x.current)==null?void 0:fe.selectionEnd,(ge=x.current)==null?void 0:ge.selectionDirection]});n.useImperativeHandle(o,()=>x.current,[]),n.useEffect(()=>{let a=x.current,i=ue.current;if(!a||!i)return;de.current.value!==a.value&&de.current.onChange(a.value),U.current.prev=[a.selectionStart,a.selectionEnd,a.selectionDirection];function h(){if(document.activeElement!==a){Z(null),J(null);return}let u=a.selectionStart,f=a.selectionEnd,X=a.selectionDirection,O=a.maxLength,D=a.value,w=U.current.prev,N=-1,L=-1,R;if(D.length!==0&&u!==null&&f!==null){let ut=u===f,dt=u===D.length&&D.length<O;if(ut&&!dt){let A=u;if(A===0)N=0,L=1,R="forward";else if(A===O)N=A-1,L=A,R="backward";else if(O>1&&D.length>1){let xe=0;if(w[0]!==null&&w[1]!==null){R=A<w[1]?"backward":"forward";let ct=w[0]===w[1]&&w[0]<O;R==="backward"&&!ct&&(xe=-1)}N=xe+A,L=xe+A+1}}N!==-1&&L!==-1&&N!==L&&x.current.setSelectionRange(N,L,R)}let Ie=N!==-1?N:u,ye=L!==-1?L:f,lt=R??X;Z(Ie),J(ye),U.current.prev=[Ie,ye,lt]}if(document.addEventListener("selectionchange",h,{capture:!0}),h(),document.activeElement===a&&ce(!0),!document.getElementById("input-otp-style")){let u=document.createElement("style");if(u.id="input-otp-style",document.head.appendChild(u),u.sheet){let f="background: transparent !important; color: transparent !important; border-color: transparent !important; opacity: 0 !important; box-shadow: none !important; -webkit-box-shadow: none !important; -webkit-text-fill-color: transparent !important;";Q(u.sheet,"[data-input-otp]::selection { background: transparent !important; color: transparent !important; }"),Q(u.sheet,`[data-input-otp]:autofill { ${f} }`),Q(u.sheet,`[data-input-otp]:-webkit-autofill { ${f} }`),Q(u.sheet,"@supports (-webkit-touch-callout: none) { [data-input-otp] { letter-spacing: -.6em !important; font-weight: 100 !important; font-stretch: ultra-condensed; font-optical-sizing: none !important; left: -1px !important; right: 1px !important; } }"),Q(u.sheet,"[data-input-otp] + * { pointer-events: all !important; }")}}let v=()=>{i&&i.style.setProperty("--root-height",`${a.clientHeight}px`)};v();let j=new ResizeObserver(v);return j.observe(a),()=>{document.removeEventListener("selectionchange",h,{capture:!0}),j.disconnect()}},[]);let[ve,je]=n.useState(!1),[K,ce]=n.useState(!1),[k,Z]=n.useState(null),[B,J]=n.useState(null);n.useEffect(()=>{jt(()=>{var a,i,h,v;(a=x.current)==null||a.dispatchEvent(new Event("input"));let j=(i=x.current)==null?void 0:i.selectionStart,u=(h=x.current)==null?void 0:h.selectionEnd,f=(v=x.current)==null?void 0:v.selectionDirection;j!==null&&u!==null&&(Z(j),J(u),U.current.prev=[j,u,f])})},[p,K]),n.useEffect(()=>{G!==void 0&&p!==G&&G.length<c&&p.length===c&&($==null||$(p))},[c,$,G,p]);let V=It({containerRef:ue,inputRef:x,pushPasswordManagerStrategy:F,isFocused:K}),Pe=n.useCallback(a=>{let i=a.currentTarget.value.slice(0,c);if(i.length>0&&I&&!I.test(i)){a.preventDefault();return}typeof G=="string"&&i.length<G.length&&document.dispatchEvent(new Event("selectionchange")),q(i)},[c,q,G,I]),Te=n.useCallback(()=>{var a;if(x.current){let i=Math.min(x.current.value.length,c-1),h=x.current.value.length;(a=x.current)==null||a.setSelectionRange(i,h),Z(i),J(h)}ce(!0)},[c]),Oe=n.useCallback(a=>{var i,h;let v=x.current;if(!g&&(!de.current.isIOS||!a.clipboardData||!v))return;let j=a.clipboardData.getData("text/plain"),u=g?g(j):j;a.preventDefault();let f=(i=x.current)==null?void 0:i.selectionStart,X=(h=x.current)==null?void 0:h.selectionEnd,O=(f!==X?p.slice(0,f)+u+p.slice(X):p.slice(0,f)+u+p.slice(f)).slice(0,c);if(O.length>0&&I&&!I.test(O))return;v.value=O,q(O);let D=Math.min(O.length,c-1),w=O.length;v.setSelectionRange(D,w),Z(D),J(w)},[c,q,I,p]),st=n.useMemo(()=>({position:"relative",cursor:d.disabled?"default":"text",userSelect:"none",WebkitUserSelect:"none",pointerEvents:"none"}),[d.disabled]),Se=n.useMemo(()=>({position:"absolute",inset:0,width:V.willPushPWMBadge?`calc(100% + ${V.PWM_BADGE_SPACE_WIDTH})`:"100%",clipPath:V.willPushPWMBadge?`inset(0 ${V.PWM_BADGE_SPACE_WIDTH} 0 0)`:void 0,height:"100%",display:"flex",textAlign:M,opacity:"1",color:"transparent",pointerEvents:"all",background:"transparent",caretColor:"transparent",border:"0 solid transparent",outline:"0 solid transparent",boxShadow:"none",lineHeight:"1",letterSpacing:"-.5em",fontSize:"var(--root-height)",fontFamily:"monospace",fontVariantNumeric:"tabular-nums"}),[V.PWM_BADGE_SPACE_WIDTH,V.willPushPWMBadge,M]),at=n.useMemo(()=>n.createElement("input",gt(ft({autoComplete:d.autoComplete||"one-time-code"},d),{"data-input-otp":!0,"data-input-otp-placeholder-shown":p.length===0||void 0,"data-input-otp-mss":k,"data-input-otp-mse":B,inputMode:H,pattern:I==null?void 0:I.source,"aria-placeholder":_,style:Se,maxLength:c,value:p,ref:x,onPaste:a=>{var i;Oe(a),(i=d.onPaste)==null||i.call(d,a)},onChange:Pe,onMouseOver:a=>{var i;je(!0),(i=d.onMouseOver)==null||i.call(d,a)},onMouseLeave:a=>{var i;je(!1),(i=d.onMouseLeave)==null||i.call(d,a)},onFocus:a=>{var i;Te(),(i=d.onFocus)==null||i.call(d,a)},onBlur:a=>{var i;ce(!1),(i=d.onBlur)==null||i.call(d,a)}})),[Pe,Te,Oe,H,Se,c,B,k,d,I==null?void 0:I.source,p]),pe=n.useMemo(()=>({slots:Array.from({length:c}).map((a,i)=>{var h;let v=K&&k!==null&&B!==null&&(k===B&&i===k||i>=k&&i<B),j=p[i]!==void 0?p[i]:null,u=p[0]!==void 0?null:(h=_==null?void 0:_[i])!=null?h:null;return{char:j,placeholderChar:u,isActive:v,hasFakeCaret:v&&j===null}}),isFocused:K,isHovering:!d.disabled&&ve}),[K,ve,c,B,k,d.disabled,p]),it=n.useMemo(()=>b?b(pe):n.createElement(tt.Provider,{value:pe},W),[W,pe,b]);return n.createElement(n.Fragment,null,T!==null&&n.createElement("noscript",null,n.createElement("style",null,T)),n.createElement("div",{ref:ue,"data-input-otp-container":!0,style:st,className:C},it,n.createElement("div",{style:{position:"absolute",inset:0,pointerEvents:"none"}},at)))});nt.displayName="Input";function Q(r,o){try{r.insertRule(o)}catch{console.error("input-otp could not insert CSS rule:",o)}}var yt=`
[data-input-otp] {
  --nojs-bg: white !important;
  --nojs-fg: black !important;

  background-color: var(--nojs-bg) !important;
  color: var(--nojs-fg) !important;
  caret-color: var(--nojs-fg) !important;
  letter-spacing: .25em !important;
  text-align: center !important;
  border: 1px solid var(--nojs-fg) !important;
  border-radius: 4px !important;
  width: 100% !important;
}
@media (prefers-color-scheme: dark) {
  [data-input-otp] {
    --nojs-bg: black !important;
    --nojs-fg: white !important;
  }
}`;const S=n.forwardRef(({className:r,containerClassName:o,...s},l)=>e.jsx(nt,{ref:l,containerClassName:ie("flex items-center gap-2 has-[:disabled]:opacity-50",o),className:ie("disabled:cursor-not-allowed",r),...s}));S.displayName="InputOTP";const m=n.forwardRef(({className:r,...o},s)=>e.jsx("div",{ref:s,className:ie("flex items-center",r),...o}));m.displayName="InputOTPGroup";const t=n.forwardRef(({index:r,className:o,...s},l)=>{const P=n.useContext(tt),{char:c,hasFakeCaret:M,isActive:y}=P.slots[r];return e.jsxs("div",{ref:l,className:ie("relative flex h-10 w-10 items-center justify-center border-y border-r border-primary/40 text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md hover:border-primary",y&&"z-10 ring-2 ring-ring ring-offset-background",o),...s,children:[c,M&&e.jsx("div",{className:"pointer-events-none absolute inset-0 flex items-center justify-center",children:e.jsx("div",{className:"h-4 w-px animate-caret-blink bg-foreground duration-1000"})})]})});t.displayName="InputOTPSlot";const E=n.forwardRef(({...r},o)=>e.jsx("div",{ref:o,role:"separator",...r,children:e.jsx(pt,{})}));E.displayName="InputOTPSeparator";S.__docgenInfo={description:"",methods:[],displayName:"InputOTP"};m.__docgenInfo={description:"",methods:[],displayName:"InputOTPGroup"};t.__docgenInfo={description:"",methods:[],displayName:"InputOTPSlot",props:{index:{required:!0,tsType:{name:"number"},description:""}}};E.__docgenInfo={description:"",methods:[],displayName:"InputOTPSeparator"};const At={title:"Components/Form Elements/Input OTP",component:S,parameters:{layout:"centered"}},Y={render:()=>e.jsxs(S,{maxLength:6,children:[e.jsxs(m,{children:[e.jsx(t,{index:0}),e.jsx(t,{index:1}),e.jsx(t,{index:2})]}),e.jsx(E,{}),e.jsxs(m,{children:[e.jsx(t,{index:3}),e.jsx(t,{index:4}),e.jsx(t,{index:5})]})]})},ee={render:()=>e.jsx(S,{maxLength:4,children:e.jsxs(m,{children:[e.jsx(t,{index:0}),e.jsx(t,{index:1}),e.jsx(t,{index:2}),e.jsx(t,{index:3})]})})},te={render:()=>e.jsxs("div",{className:"space-y-2",children:[e.jsx(Ue,{htmlFor:"otp",children:"Verification Code"}),e.jsx(S,{maxLength:6,id:"otp",children:e.jsxs(m,{children:[e.jsx(t,{index:0}),e.jsx(t,{index:1}),e.jsx(t,{index:2}),e.jsx(t,{index:3}),e.jsx(t,{index:4}),e.jsx(t,{index:5})]})}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Enter the code sent to your email."})]})},ne={render:()=>e.jsxs(S,{maxLength:6,disabled:!0,children:[e.jsxs(m,{children:[e.jsx(t,{index:0}),e.jsx(t,{index:1}),e.jsx(t,{index:2})]}),e.jsx(E,{}),e.jsxs(m,{children:[e.jsx(t,{index:3}),e.jsx(t,{index:4}),e.jsx(t,{index:5})]})]})},bt=()=>{const[r,o]=n.useState("");return e.jsxs("div",{className:"space-y-4",children:[e.jsxs(S,{maxLength:6,value:r,onChange:o,children:[e.jsxs(m,{children:[e.jsx(t,{index:0}),e.jsx(t,{index:1}),e.jsx(t,{index:2})]}),e.jsx(E,{}),e.jsxs(m,{children:[e.jsx(t,{index:3}),e.jsx(t,{index:4}),e.jsx(t,{index:5})]})]}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Value:"," ",e.jsx("code",{className:"bg-muted px-1 rounded",children:r||"(empty)"})]})]})},re={render:()=>e.jsx(bt,{})},wt=()=>{const[r,o]=n.useState(""),[s,l]=n.useState("idle"),P=c=>{l("verifying"),setTimeout(()=>{c==="123456"?l("success"):(l("error"),o(""))},1500)};return n.useEffect(()=>{r.length===6&&P(r)},[r]),e.jsxs("div",{className:"space-y-4 text-center w-full max-w-sm",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium",children:"Verify your email"}),e.jsx("p",{className:"text-sm text-muted-foreground mt-1",children:"We've sent a verification code to your email."})]}),e.jsx("div",{className:"flex justify-center",children:e.jsxs(S,{maxLength:6,value:r,onChange:o,disabled:s==="verifying"||s==="success",children:[e.jsxs(m,{children:[e.jsx(t,{index:0}),e.jsx(t,{index:1}),e.jsx(t,{index:2})]}),e.jsx(E,{}),e.jsxs(m,{children:[e.jsx(t,{index:3}),e.jsx(t,{index:4}),e.jsx(t,{index:5})]})]})}),s==="verifying"&&e.jsx("p",{className:"text-sm text-muted-foreground",children:"Verifying..."}),s==="success"&&e.jsx("p",{className:"text-sm text-green-600",children:"✓ Verified successfully!"}),s==="error"&&e.jsx("p",{className:"text-sm text-destructive",children:"Invalid code. Please try again."}),e.jsx("p",{className:"text-xs text-muted-foreground",children:'Hint: Try "123456" for success'})]})},oe={render:()=>e.jsx(wt,{})},se={render:()=>e.jsxs("div",{className:"space-y-4 text-center w-full max-w-sm p-6 border rounded-lg",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium",children:"Enter Survey Access Code"}),e.jsx("p",{className:"text-sm text-muted-foreground mt-1",children:"Enter the 6-digit code provided by your administrator."})]}),e.jsx("div",{className:"flex justify-center",children:e.jsx(S,{maxLength:6,children:e.jsxs(m,{children:[e.jsx(t,{index:0}),e.jsx(t,{index:1}),e.jsx(t,{index:2}),e.jsx(t,{index:3}),e.jsx(t,{index:4}),e.jsx(t,{index:5})]})})}),e.jsx("button",{className:"w-full px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90",children:"Access Survey"})]})},ae={render:()=>e.jsxs("div",{className:"space-y-2",children:[e.jsx(Ue,{children:"License Key"}),e.jsxs(S,{maxLength:16,inputMode:"text",children:[e.jsxs(m,{children:[e.jsx(t,{index:0}),e.jsx(t,{index:1}),e.jsx(t,{index:2}),e.jsx(t,{index:3})]}),e.jsx(E,{}),e.jsxs(m,{children:[e.jsx(t,{index:4}),e.jsx(t,{index:5}),e.jsx(t,{index:6}),e.jsx(t,{index:7})]}),e.jsx(E,{}),e.jsxs(m,{children:[e.jsx(t,{index:8}),e.jsx(t,{index:9}),e.jsx(t,{index:10}),e.jsx(t,{index:11})]}),e.jsx(E,{}),e.jsxs(m,{children:[e.jsx(t,{index:12}),e.jsx(t,{index:13}),e.jsx(t,{index:14}),e.jsx(t,{index:15})]})]})]})};var we,Ee,Ce;Y.parameters={...Y.parameters,docs:{...(we=Y.parameters)==null?void 0:we.docs,source:{originalSource:`{
  render: () => <InputOTP maxLength={6}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
}`,...(Ce=(Ee=Y.parameters)==null?void 0:Ee.docs)==null?void 0:Ce.source}}};var Ne,Le,Me;ee.parameters={...ee.parameters,docs:{...(Ne=ee.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  render: () => <InputOTP maxLength={4}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
      </InputOTPGroup>
    </InputOTP>
}`,...(Me=(Le=ee.parameters)==null?void 0:Le.docs)==null?void 0:Me.source}}};var Ge,ke,De;te.parameters={...te.parameters,docs:{...(Ge=te.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
  render: () => <div className="space-y-2">
      <Label htmlFor="otp">Verification Code</Label>
      <InputOTP maxLength={6} id="otp">
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
      <p className="text-sm text-muted-foreground">
        Enter the code sent to your email.
      </p>
    </div>
}`,...(De=(ke=te.parameters)==null?void 0:ke.docs)==null?void 0:De.source}}};var Re,Ae,_e;ne.parameters={...ne.parameters,docs:{...(Re=ne.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  render: () => <InputOTP maxLength={6} disabled>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
}`,...(_e=(Ae=ne.parameters)==null?void 0:Ae.docs)==null?void 0:_e.source}}};var Fe,We,Be;re.parameters={...re.parameters,docs:{...(Fe=re.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  render: () => <ControlledOTP />
}`,...(Be=(We=re.parameters)==null?void 0:We.docs)==null?void 0:Be.source}}};var Ve,He,$e;oe.parameters={...oe.parameters,docs:{...(Ve=oe.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  render: () => <VerificationFlow />
}`,...($e=(He=oe.parameters)==null?void 0:He.docs)==null?void 0:$e.source}}};var ze,qe,Ke;se.parameters={...se.parameters,docs:{...(ze=se.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 text-center w-full max-w-sm p-6 border rounded-lg">
      <div>
        <h3 className="text-lg font-medium">Enter Survey Access Code</h3>
        <p className="text-sm text-muted-foreground mt-1">
          Enter the 6-digit code provided by your administrator.
        </p>
      </div>

      <div className="flex justify-center">
        <InputOTP maxLength={6}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </div>

      <button className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90">
        Access Survey
      </button>
    </div>
}`,...(Ke=(qe=se.parameters)==null?void 0:qe.docs)==null?void 0:Ke.source}}};var Ze,Je,Qe;ae.parameters={...ae.parameters,docs:{...(Ze=ae.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
  render: () => <div className="space-y-2">
      <Label>License Key</Label>
      <InputOTP maxLength={16} inputMode="text">
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
          <InputOTPSlot index={6} />
          <InputOTPSlot index={7} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={8} />
          <InputOTPSlot index={9} />
          <InputOTPSlot index={10} />
          <InputOTPSlot index={11} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={12} />
          <InputOTPSlot index={13} />
          <InputOTPSlot index={14} />
          <InputOTPSlot index={15} />
        </InputOTPGroup>
      </InputOTP>
    </div>
}`,...(Qe=(Je=ae.parameters)==null?void 0:Je.docs)==null?void 0:Qe.source}}};const _t=["Default","FourDigits","WithLabel","Disabled","Controlled","VerificationFlowDemo","SurveyAccessCode","Alphanumeric"];export{ae as Alphanumeric,re as Controlled,Y as Default,ne as Disabled,ee as FourDigits,se as SurveyAccessCode,oe as VerificationFlowDemo,te as WithLabel,_t as __namedExportsOrder,At as default};
