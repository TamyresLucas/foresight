import{j as s}from"./jsx-runtime-BYYWji4R.js";import{r as l,a as pe}from"./index-ClcD9ViR.js";import"./index-Drr-0Uuw.js";import{c as xe}from"./index-Bew1Yeam.js";import{c as R}from"./utils-CDN07tui.js";import"./_commonjsHelpers-Cpj98o6Y.js";function fe(e,r=[]){let a=[];function n(o,d){const c=l.createContext(d);c.displayName=o+"Context";const i=a.length;a=[...a,d];const m=p=>{var M;const{scope:x,children:E,...f}=p,g=((M=x==null?void 0:x[e])==null?void 0:M[i])||c,me=l.useMemo(()=>f,Object.values(f));return s.jsx(g.Provider,{value:me,children:E})};m.displayName=o+"Provider";function v(p,x){var g;const E=((g=x==null?void 0:x[e])==null?void 0:g[i])||c,f=l.useContext(E);if(f)return f;if(d!==void 0)return d;throw new Error(`\`${p}\` must be used within \`${o}\``)}return[m,v]}const t=()=>{const o=a.map(d=>l.createContext(d));return function(c){const i=(c==null?void 0:c[e])||o;return l.useMemo(()=>({[`__scope${e}`]:{...c,[e]:i}}),[c,i])}};return t.scopeName=e,[n,ve(t,...r)]}function ve(...e){const r=e[0];if(e.length===1)return r;const a=()=>{const n=e.map(t=>({useScope:t(),scopeName:t.scopeName}));return function(o){const d=n.reduce((c,{useScope:i,scopeName:m})=>{const p=i(o)[`__scope${m}`];return{...c,...p}},{});return l.useMemo(()=>({[`__scope${r.scopeName}`]:d}),[d])}};return a.scopeName=r.scopeName,a}var ge=Symbol.for("react.lazy"),C=pe[" use ".trim().toString()];function Ne(e){return typeof e=="object"&&e!==null&&"then"in e}function ne(e){return e!=null&&typeof e=="object"&&"$$typeof"in e&&e.$$typeof===ge&&"_payload"in e&&Ne(e._payload)}function he(e){const r=ye(e),a=l.forwardRef((n,t)=>{let{children:o,...d}=n;ne(o)&&typeof C=="function"&&(o=C(o._payload));const c=l.Children.toArray(o),i=c.find(Pe);if(i){const m=i.props.children,v=c.map(p=>p===i?l.Children.count(m)>1?l.Children.only(null):l.isValidElement(m)?m.props.children:null:p);return s.jsx(r,{...d,ref:t,children:l.isValidElement(m)?l.cloneElement(m,void 0,v):null})}return s.jsx(r,{...d,ref:t,children:o})});return a.displayName=`${e}.Slot`,a}function ye(e){const r=l.forwardRef((a,n)=>{let{children:t,...o}=a;if(ne(t)&&typeof C=="function"&&(t=C(t._payload)),l.isValidElement(t)){const d=Se(t),c=be(o,t.props);return t.type!==l.Fragment&&(c.ref=n?xe(n,d):d),l.cloneElement(t,c)}return l.Children.count(t)>1?l.Children.only(null):null});return r.displayName=`${e}.SlotClone`,r}var je=Symbol("radix.slottable");function Pe(e){return l.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===je}function be(e,r){const a={...r};for(const n in r){const t=e[n],o=r[n];/^on[A-Z]/.test(n)?t&&o?a[n]=(...c)=>{const i=o(...c);return t(...c),i}:t&&(a[n]=t):n==="style"?a[n]={...t,...o}:n==="className"&&(a[n]=[t,o].filter(Boolean).join(" "))}return{...e,...a}}function Se(e){var n,t;let r=(n=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:n.get,a=r&&"isReactWarning"in r&&r.isReactWarning;return a?e.ref:(r=(t=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:t.get,a=r&&"isReactWarning"in r&&r.isReactWarning,a?e.props.ref:e.props.ref||e.ref)}var we=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],oe=we.reduce((e,r)=>{const a=he(`Primitive.${r}`),n=l.forwardRef((t,o)=>{const{asChild:d,...c}=t,i=d?a:r;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),s.jsx(i,{...c,ref:o})});return n.displayName=`Primitive.${r}`,{...e,[r]:n}},{}),$="Progress",I=100,[Ce]=fe($),[_e,Ee]=Ce($),ce=l.forwardRef((e,r)=>{const{__scopeProgress:a,value:n=null,max:t,getValueLabel:o=Re,...d}=e;(t||t===0)&&!L(t)&&console.error($e(`${t}`,"Progress"));const c=L(t)?t:I;n!==null&&!V(n,c)&&console.error(Ie(`${n}`,"Progress"));const i=V(n,c)?n:null,m=_(i)?o(i,c):void 0;return s.jsx(_e,{scope:a,value:i,max:c,children:s.jsx(oe.div,{"aria-valuemax":c,"aria-valuemin":0,"aria-valuenow":_(i)?i:void 0,"aria-valuetext":m,role:"progressbar","data-state":de(i,c),"data-value":i??void 0,"data-max":c,...d,ref:r})})});ce.displayName=$;var le="ProgressIndicator",ie=l.forwardRef((e,r)=>{const{__scopeProgress:a,...n}=e,t=Ee(le,a);return s.jsx(oe.div,{"data-state":de(t.value,t.max),"data-value":t.value??void 0,"data-max":t.max,...n,ref:r})});ie.displayName=le;function Re(e,r){return`${Math.round(e/r*100)}%`}function de(e,r){return e==null?"indeterminate":e===r?"complete":"loading"}function _(e){return typeof e=="number"}function L(e){return _(e)&&!isNaN(e)&&e>0}function V(e,r){return _(e)&&!isNaN(e)&&e<=r&&e>=0}function $e(e,r){return`Invalid prop \`max\` of value \`${e}\` supplied to \`${r}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${I}\`.`}function Ie(e,r){return`Invalid prop \`value\` of value \`${e}\` supplied to \`${r}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${I} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`}var ue=ce,Me=ie;const u=l.forwardRef(({className:e,value:r,...a},n)=>s.jsx(ue,{ref:n,className:R("relative h-4 w-full overflow-hidden rounded-full bg-[hsl(var(--secondary))]",e),...a,children:s.jsx(Me,{className:"h-full w-full flex-1 bg-primary transition-all",style:{transform:`translateX(-${100-(r||0)}%)`}})}));u.displayName=ue.displayName;try{u.displayName="Progress",u.__docgenInfo={description:"",displayName:"Progress",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const Qe={title:"Components/Feedback/Progress",component:u,parameters:{layout:"centered"},tags:["autodocs"]},N={render:()=>{const[e,r]=l.useState(13);return l.useEffect(()=>{const a=setTimeout(()=>r(66),500);return()=>clearTimeout(a)},[]),s.jsx(u,{value:e,className:"w-[300px]"})}},h={render:()=>s.jsxs("div",{className:"w-[300px] space-y-4",children:[s.jsxs("div",{className:"space-y-1",children:[s.jsx("span",{className:"text-sm text-muted-foreground",children:"0%"}),s.jsx(u,{value:0})]}),s.jsxs("div",{className:"space-y-1",children:[s.jsx("span",{className:"text-sm text-muted-foreground",children:"25%"}),s.jsx(u,{value:25})]}),s.jsxs("div",{className:"space-y-1",children:[s.jsx("span",{className:"text-sm text-muted-foreground",children:"50%"}),s.jsx(u,{value:50})]}),s.jsxs("div",{className:"space-y-1",children:[s.jsx("span",{className:"text-sm text-muted-foreground",children:"75%"}),s.jsx(u,{value:75})]}),s.jsxs("div",{className:"space-y-1",children:[s.jsx("span",{className:"text-sm text-muted-foreground",children:"100%"}),s.jsx(u,{value:100})]})]})},Le=()=>{const[e,r]=l.useState(45);return l.useEffect(()=>{const a=setInterval(()=>{r(n=>n>=100?100:n+1)},100);return()=>clearInterval(a)},[]),s.jsxs("div",{className:"w-[300px] space-y-2",children:[s.jsxs("div",{className:"flex justify-between text-sm",children:[s.jsx("span",{children:"Uploading..."}),s.jsxs("span",{className:"text-muted-foreground",children:[e,"%"]})]}),s.jsx(u,{value:e})]})},y={render:()=>s.jsx(Le,{})},j={render:()=>s.jsxs("div",{className:"w-[300px] space-y-2",children:[s.jsx("span",{className:"text-sm text-muted-foreground",children:"Loading..."}),s.jsx(u,{className:"animate-pulse"})]})},Ve=()=>{const a=Math.round(46.666666666666664);return s.jsxs("div",{className:"w-[350px] p-4 border rounded-lg space-y-3 bg-card",children:[s.jsxs("div",{className:"flex justify-between items-center",children:[s.jsx("span",{className:"text-sm font-medium",children:"Survey Progress"}),s.jsxs("span",{className:"text-sm text-muted-foreground",children:[7," of ",15," questions"]})]}),s.jsx(u,{value:a}),s.jsxs("p",{className:"text-xs text-muted-foreground",children:[a,"% complete • Estimated time remaining: 3 min"]})]})},P={render:()=>s.jsx(Ve,{})},De=()=>{const[e,r]=l.useState(2),a=5,n=["Details","Questions","Logic","Distribute","Publish"];return s.jsxs("div",{className:"w-[400px] space-y-4",children:[s.jsx("div",{className:"flex justify-between",children:n.map((t,o)=>s.jsxs("div",{className:R("flex flex-col items-center",o<=e?"text-primary":"text-muted-foreground"),children:[s.jsx("div",{className:R("w-8 h-8 rounded-full flex items-center justify-center text-sm",o<e?"bg-primary text-primary-foreground":o===e?"border-2 border-primary":"border border-muted-foreground"),children:o<e?"✓":o+1}),s.jsx("span",{className:"text-xs mt-1",children:t})]},t))}),s.jsx(u,{value:e/(a-1)*100}),s.jsxs("div",{className:"flex justify-between",children:[s.jsx("button",{onClick:()=>r(t=>Math.max(0,t-1)),className:"text-sm text-primary hover:underline disabled:opacity-50",disabled:e===0,children:"Previous"}),s.jsx("button",{onClick:()=>r(t=>Math.min(a-1,t+1)),className:"text-sm text-primary hover:underline disabled:opacity-50",disabled:e===a-1,children:"Next"})]})]})},b={render:()=>s.jsx(De,{})},Te=()=>s.jsxs("div",{className:"w-[350px] p-4 border rounded-lg space-y-3 bg-card",children:[s.jsxs("div",{className:"flex justify-between items-center",children:[s.jsx("span",{className:"font-medium",children:"Response Goal"}),s.jsx("span",{className:"text-2xl font-bold text-primary",children:342})]}),s.jsx(u,{value:68.4}),s.jsxs("div",{className:"flex justify-between text-sm text-muted-foreground",children:[s.jsxs("span",{children:[Math.round(68.4),"% of goal"]}),s.jsxs("span",{children:[158," more needed"]})]})]}),S={render:()=>s.jsx(Te,{})},w={render:()=>s.jsxs("div",{className:"w-[350px] space-y-4",children:[s.jsx("h3",{className:"font-medium",children:"Survey Completion Rates"}),s.jsxs("div",{className:"space-y-3",children:[s.jsxs("div",{className:"space-y-1",children:[s.jsxs("div",{className:"flex justify-between text-sm",children:[s.jsx("span",{children:"Customer Satisfaction"}),s.jsx("span",{className:"text-muted-foreground",children:"92%"})]}),s.jsx(u,{value:92,className:"h-2"})]}),s.jsxs("div",{className:"space-y-1",children:[s.jsxs("div",{className:"flex justify-between text-sm",children:[s.jsx("span",{children:"Employee Engagement"}),s.jsx("span",{className:"text-muted-foreground",children:"78%"})]}),s.jsx(u,{value:78,className:"h-2"})]}),s.jsxs("div",{className:"space-y-1",children:[s.jsxs("div",{className:"flex justify-between text-sm",children:[s.jsx("span",{children:"Product Feedback"}),s.jsx("span",{className:"text-muted-foreground",children:"45%"})]}),s.jsx(u,{value:45,className:"h-2"})]}),s.jsxs("div",{className:"space-y-1",children:[s.jsxs("div",{className:"flex justify-between text-sm",children:[s.jsx("span",{children:"Market Research"}),s.jsx("span",{className:"text-muted-foreground",children:"23%"})]}),s.jsx(u,{value:23,className:"h-2"})]})]})]})};var D,T,A;N.parameters={...N.parameters,docs:{...(D=N.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => {
    const [progress, setProgress] = React.useState(13);
    React.useEffect(() => {
      const timer = setTimeout(() => setProgress(66), 500);
      return () => clearTimeout(timer);
    }, []);
    return <Progress value={progress} className="w-[300px]" />;
  }
}`,...(A=(T=N.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var O,k,W;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <div className="w-[300px] space-y-4">
      <div className="space-y-1">
        <span className="text-sm text-muted-foreground">0%</span>
        <Progress value={0} />
      </div>
      <div className="space-y-1">
        <span className="text-sm text-muted-foreground">25%</span>
        <Progress value={25} />
      </div>
      <div className="space-y-1">
        <span className="text-sm text-muted-foreground">50%</span>
        <Progress value={50} />
      </div>
      <div className="space-y-1">
        <span className="text-sm text-muted-foreground">75%</span>
        <Progress value={75} />
      </div>
      <div className="space-y-1">
        <span className="text-sm text-muted-foreground">100%</span>
        <Progress value={100} />
      </div>
    </div>
}`,...(W=(k=h.parameters)==null?void 0:k.docs)==null?void 0:W.source}}};var B,G,Q;y.parameters={...y.parameters,docs:{...(B=y.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <ProgressWithLabel />
}`,...(Q=(G=y.parameters)==null?void 0:G.docs)==null?void 0:Q.source}}};var F,H,q;j.parameters={...j.parameters,docs:{...(F=j.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div className="w-[300px] space-y-2">
      <span className="text-sm text-muted-foreground">Loading...</span>
      <Progress className="animate-pulse" />
    </div>
}`,...(q=(H=j.parameters)==null?void 0:H.docs)==null?void 0:q.source}}};var z,U,X;P.parameters={...P.parameters,docs:{...(z=P.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <SurveyProgress />
}`,...(X=(U=P.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,J;b.parameters={...b.parameters,docs:{...(Y=b.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <StepProgress />
}`,...(J=(Z=b.parameters)==null?void 0:Z.docs)==null?void 0:J.source}}};var K,ee,se;S.parameters={...S.parameters,docs:{...(K=S.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <ResponseGoalProgress />
}`,...(se=(ee=S.parameters)==null?void 0:ee.docs)==null?void 0:se.source}}};var re,te,ae;w.parameters={...w.parameters,docs:{...(re=w.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => <div className="w-[350px] space-y-4">
      <h3 className="font-medium">Survey Completion Rates</h3>
      <div className="space-y-3">
        <div className="space-y-1">
          <div className="flex justify-between text-sm">
            <span>Customer Satisfaction</span>
            <span className="text-muted-foreground">92%</span>
          </div>
          <Progress value={92} className="h-2" />
        </div>
        <div className="space-y-1">
          <div className="flex justify-between text-sm">
            <span>Employee Engagement</span>
            <span className="text-muted-foreground">78%</span>
          </div>
          <Progress value={78} className="h-2" />
        </div>
        <div className="space-y-1">
          <div className="flex justify-between text-sm">
            <span>Product Feedback</span>
            <span className="text-muted-foreground">45%</span>
          </div>
          <Progress value={45} className="h-2" />
        </div>
        <div className="space-y-1">
          <div className="flex justify-between text-sm">
            <span>Market Research</span>
            <span className="text-muted-foreground">23%</span>
          </div>
          <Progress value={23} className="h-2" />
        </div>
      </div>
    </div>
}`,...(ae=(te=w.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};const Fe=["Default","StaticValues","WithLabel","Indeterminate","SurveyProgressBar","StepProgressBar","ResponseGoal","MultiProgress"];export{N as Default,j as Indeterminate,w as MultiProgress,S as ResponseGoal,h as StaticValues,b as StepProgressBar,P as SurveyProgressBar,y as WithLabel,Fe as __namedExportsOrder,Qe as default};
