import{j as e}from"./jsx-runtime-BYYWji4R.js";import{B as m}from"./button-DY4UnA7S.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-CyBucMil.js";import"./index-Bew1Yeam.js";import"./index-C2vczdB5.js";import"./utils-CDN07tui.js";const G=({icon:r,title:F,description:h,action:t,secondaryAction:s})=>e.jsxs("div",{className:"flex flex-col items-center justify-center text-center p-8 min-h-[300px]",children:[r&&e.jsx("div",{className:"mb-4 text-muted-foreground",children:r}),e.jsx("h3",{className:"text-lg font-semibold mb-2",children:F}),h&&e.jsx("p",{className:"text-sm text-muted-foreground max-w-sm mb-6",children:h}),(t||s)&&e.jsxs("div",{className:"flex gap-3",children:[s&&e.jsx(m,{variant:"outline",onClick:s.onClick,children:s.label}),t&&e.jsx(m,{onClick:t.onClick,children:t.label})]})]}),_=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"64",height:"64",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}),e.jsx("path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}),e.jsx("path",{d:"M9 14h6"}),e.jsx("path",{d:"M9 18h6"})]}),z=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"64",height:"64",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}),e.jsx("circle",{cx:"9",cy:"7",r:"4"}),e.jsx("path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}),e.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]}),V=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"64",height:"64",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"11",cy:"11",r:"8"}),e.jsx("path",{d:"m21 21-4.3-4.3"})]}),J=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"64",height:"64",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("path",{d:"m15 9-6 6"}),e.jsx("path",{d:"m9 9 6 6"})]}),K=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"64",height:"64",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12"}),e.jsx("path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"})]}),se={title:"Components/Feedback/EmptyState",component:G,parameters:{layout:"centered"},tags:["autodocs"]},o={args:{title:"No items found",description:"There are no items to display at this time."}},n={args:{icon:e.jsx(K,{}),title:"Your inbox is empty",description:"You don't have any messages yet. Check back later."}},a={args:{icon:e.jsx(_,{}),title:"No surveys yet",description:"Create your first survey to start collecting responses.",action:{label:"Create Survey"}}},i={args:{icon:e.jsx(_,{}),title:"No surveys yet",description:"Get started by creating your first survey. It only takes a few minutes to set up.",action:{label:"Create Survey"},secondaryAction:{label:"Import Survey"}}},c={args:{icon:e.jsx(z,{}),title:"No responses yet",description:"Share your survey to start collecting responses. Once you receive responses, they'll appear here.",action:{label:"Share Survey"},secondaryAction:{label:"Preview Survey"}}},l={args:{icon:e.jsx(V,{}),title:"No results found",description:"We couldn't find any surveys matching your search. Try different keywords or clear your filters.",action:{label:"Clear Search"}}},d={args:{icon:e.jsx("div",{className:"flex items-center justify-center rounded-full bg-destructive/10 p-4 text-destructive",children:e.jsx(J,{})}),title:"Something went wrong",description:"We couldn't load your data. Please try again or contact support if the problem persists.",action:{label:"Try Again"},secondaryAction:{label:"Contact Support"}}},u={args:{title:"No responses yet",description:"This survey hasn't received any responses yet. Share the survey link to start collecting data.",action:{label:"Copy Link"},icon:e.jsx(z,{})},render:r=>e.jsx("div",{className:"w-full max-w-2xl border border-primary/20 rounded-lg bg-card p-4",children:e.jsx(G,{...r||{}})})},p={args:{},render:()=>e.jsxs("div",{className:"flex flex-col items-center justify-center text-center p-8",children:[e.jsx("div",{className:"h-12 w-12 rounded-full bg-muted flex items-center justify-center mb-4",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 text-muted-foreground",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 6v6m0 0v6m0-6h6m-6 0H6"})})}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"No questions added yet"}),e.jsx(m,{variant:"link",className:"mt-2",children:"Add your first question"})]})};var y,x,g;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    title: "No items found",
    description: "There are no items to display at this time."
  }
}`,...(g=(x=o.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var v,f,w;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    icon: <InboxIcon />,
    title: "Your inbox is empty",
    description: "You don't have any messages yet. Check back later."
  }
}`,...(w=(f=n.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var j,b,k;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    icon: <SurveyIcon />,
    title: "No surveys yet",
    description: "Create your first survey to start collecting responses.",
    action: {
      label: "Create Survey"
    }
  }
}`,...(k=(b=a.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var S,N,C;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    icon: <SurveyIcon />,
    title: "No surveys yet",
    description: "Get started by creating your first survey. It only takes a few minutes to set up.",
    action: {
      label: "Create Survey"
    },
    secondaryAction: {
      label: "Import Survey"
    }
  }
}`,...(C=(N=i.parameters)==null?void 0:N.docs)==null?void 0:C.source}}};var I,L,W;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    icon: <ResponsesIcon />,
    title: "No responses yet",
    description: "Share your survey to start collecting responses. Once you receive responses, they'll appear here.",
    action: {
      label: "Share Survey"
    },
    secondaryAction: {
      label: "Preview Survey"
    }
  }
}`,...(W=(L=c.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};var B,M,A;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    icon: <SearchIcon />,
    title: "No results found",
    description: "We couldn't find any surveys matching your search. Try different keywords or clear your filters.",
    action: {
      label: "Clear Search"
    }
  }
}`,...(A=(M=l.parameters)==null?void 0:M.docs)==null?void 0:A.source}}};var E,R,T;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    icon: <div className="flex items-center justify-center rounded-full bg-destructive/10 p-4 text-destructive">
        <ErrorIcon />
      </div>,
    title: "Something went wrong",
    description: "We couldn't load your data. Please try again or contact support if the problem persists.",
    action: {
      label: "Try Again"
    },
    secondaryAction: {
      label: "Contact Support"
    }
  }
}`,...(T=(R=d.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var H,q,P;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    title: "No responses yet",
    description: "This survey hasn't received any responses yet. Share the survey link to start collecting data.",
    action: {
      label: "Copy Link"
    },
    icon: <ResponsesIcon />
  },
  render: (args: any) => <div className="w-full max-w-2xl border border-primary/20 rounded-lg bg-card p-4">
      <EmptyState {...args || {}} />
    </div>
}`,...(P=(q=u.parameters)==null?void 0:q.docs)==null?void 0:P.source}}};var Y,O,D;p.parameters={...p.parameters,docs:{...(Y=p.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {},
  render: () => <div className="flex flex-col items-center justify-center text-center p-8">
      <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      </div>
      <p className="text-sm text-muted-foreground">No questions added yet</p>
      <Button variant="link" className="mt-2">
        Add your first question
      </Button>
    </div>
}`,...(D=(O=p.parameters)==null?void 0:O.docs)==null?void 0:D.source}}};const oe=["Default","WithIcon","WithAction","NoSurveys","NoResponses","NoSearchResults","Error","InCard","Minimal"];export{o as Default,d as Error,u as InCard,p as Minimal,c as NoResponses,l as NoSearchResults,i as NoSurveys,a as WithAction,n as WithIcon,oe as __namedExportsOrder,se as default};
