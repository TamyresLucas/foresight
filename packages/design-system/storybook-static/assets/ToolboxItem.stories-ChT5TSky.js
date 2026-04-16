import{j as n}from"./jsx-runtime-BYYWji4R.js";import{fn as x}from"./index-DgAF9SIF.js";import{C as be,D as xe,R as u,P as ye,T as he,a as y,q as ke,i as De}from"./toolbox-items-CXvAY9Mu.js";import{P as Be}from"./icons-BJRAOfCp.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./utils-CDN07tui.js";import"./icon-CPjmVJEk.js";const Se={title:"Survey Builder/Build/ToolboxItem",component:y,parameters:{docs:{description:{component:"\n**ToolboxItem** (`ui/toolbox-item.tsx`) is the draggable row in the question-type sidebar. Each row represents one question type the author can drag into the survey canvas or click to insert.\n\n### Anatomy\n\n- **Icon slot** — question-type icon; swaps to `GripVertical` on hover (or when `isDragged`) to signal drag capability\n- **Label** — question type name, truncated if the container is narrow\n- **End action** — optional trailing slot (visible on hover only); typically a `+` button\n\n### States\n\n| State | `isDragged` | `isEnabled` | Visual |\n|-------|-------------|-------------|--------|\n| Default | `false` | `true` | Card bg, type icon, label |\n| Hover | — | `true` | Muted bg, `GripVertical` replaces icon |\n| Dragging | `true` | `true` | Primary bg, white text, `GripVertical` |\n| Disabled | `false` | `false` | Faded icon + label, `cursor-not-allowed` |\n                "}}},tags:["autodocs"],args:{isEnabled:!0,isDragged:!1,isDraggable:!0,onDragStart:x(),onDragEnd:x(),onClick:x()},decorators:[e=>n.jsx("div",{className:"w-64 border border-border-ui rounded-lg overflow-hidden",children:n.jsx(e,{})})]},o={name:"Radio Button",args:{icon:u,label:"Radio Button"}},r={name:"Check Box",args:{icon:be,label:"Check Box"}},a={name:"Text Input",args:{icon:he,label:"Text Input"}},t={name:"Description",args:{icon:xe,label:"Description"}},s={name:"Page Break",args:{icon:ye,label:"Page Break"}},i={name:"Dragging",args:{icon:u,label:"Radio Button",isDragged:!0}},c={name:"Disabled",args:{icon:u,label:"Radio Button",isEnabled:!1}},d={name:"With End Action",args:{icon:u,label:"Radio Button",endAction:n.jsx("button",{className:"p-1 rounded hover:bg-primary/10 text-primary transition-colors","aria-label":"Add Radio Button",onClick:e=>e.stopPropagation(),children:n.jsx(Be,{className:"text-base leading-none"})})}},l={name:"All Types",render:e=>n.jsx("div",{className:"w-64 border border-border-ui rounded-lg overflow-hidden",children:[{icon:u,label:"Radio Button"},{icon:be,label:"Check Box"},{icon:he,label:"Text Input"},{icon:xe,label:"Description"},{icon:ye,label:"Page Break"}].map(({icon:m,label:g})=>n.jsx(y,{icon:m,label:g,onDragStart:e.onDragStart,onDragEnd:e.onDragEnd,onClick:e.onClick},g))})},p={name:"Full Library",render:e=>n.jsx("div",{className:"w-64 border border-border-ui rounded-lg overflow-hidden",children:Object.entries(ke).map(([m,g])=>n.jsxs("div",{children:[n.jsx("div",{className:"px-4 py-1.5 bg-muted/60 border-b border-border-ui",children:n.jsx("span",{className:"text-xs font-semibold text-muted-foreground uppercase tracking-wider",children:m})}),g.map(b=>{const h=De[b];return h?n.jsx(y,{icon:h,label:b,onDragStart:e.onDragStart,onDragEnd:e.onDragEnd,onClick:e.onClick},b):null})]},m))})};var k,D,B,I,v;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: "Radio Button",
  args: {
    icon: RadioButtonIcon,
    label: "Radio Button"
  }
}`,...(B=(D=o.parameters)==null?void 0:D.docs)==null?void 0:B.source},description:{story:"Radio Button — single-select multiple choice question.",...(v=(I=o.parameters)==null?void 0:I.docs)==null?void 0:v.description}}};var f,w,C,R,E;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "Check Box",
  args: {
    icon: CheckboxIcon,
    label: "Check Box"
  }
}`,...(C=(w=r.parameters)==null?void 0:w.docs)==null?void 0:C.source},description:{story:"Check Box — multi-select multiple choice question.",...(E=(R=r.parameters)==null?void 0:R.docs)==null?void 0:E.description}}};var T,S,P,A,j;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "Text Input",
  args: {
    icon: TextAnswerIcon,
    label: "Text Input"
  }
}`,...(P=(S=a.parameters)==null?void 0:S.docs)==null?void 0:P.source},description:{story:"Text Input — open-ended free-text question.",...(j=(A=a.parameters)==null?void 0:A.docs)==null?void 0:j.description}}};var q,N,F,G,L;t.parameters={...t.parameters,docs:{...(q=t.parameters)==null?void 0:q.docs,source:{originalSource:`{
  // eslint-disable-next-line storybook/no-redundant-story-name
  name: "Description",
  args: {
    icon: DescriptionIcon,
    label: "Description"
  }
}`,...(F=(N=t.parameters)==null?void 0:N.docs)==null?void 0:F.source},description:{story:"Description — informational text block; no respondent input.",...(L=(G=t.parameters)==null?void 0:G.docs)==null?void 0:L.description}}};var W,V,M,O,_;s.parameters={...s.parameters,docs:{...(W=s.parameters)==null?void 0:W.docs,source:{originalSource:`{
  // eslint-disable-next-line storybook/no-redundant-story-name
  name: "Page Break",
  args: {
    icon: PageBreakIcon,
    label: "Page Break"
  }
}`,...(M=(V=s.parameters)==null?void 0:V.docs)==null?void 0:M.source},description:{story:"Page Break — structural separator that creates a new survey page.",...(_=(O=s.parameters)==null?void 0:O.docs)==null?void 0:_.description}}};var H,z,J,K,Q;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`{
  // eslint-disable-next-line storybook/no-redundant-story-name
  name: "Dragging",
  args: {
    icon: RadioButtonIcon,
    label: "Radio Button",
    isDragged: true
  }
}`,...(J=(z=i.parameters)==null?void 0:z.docs)==null?void 0:J.source},description:{story:"Dragging — item is being dragged. Background switches to primary with white text and icon.",...(Q=(K=i.parameters)==null?void 0:K.docs)==null?void 0:Q.description}}};var U,X,Y,Z,$;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:`{
  // eslint-disable-next-line storybook/no-redundant-story-name
  name: "Disabled",
  args: {
    icon: RadioButtonIcon,
    label: "Radio Button",
    isEnabled: false
  }
}`,...(Y=(X=c.parameters)==null?void 0:X.docs)==null?void 0:Y.source},description:{story:"Disabled — item is greyed out and cannot be interacted with.",...($=(Z=c.parameters)==null?void 0:Z.docs)==null?void 0:$.description}}};var ee,ne,oe,re,ae;d.parameters={...d.parameters,docs:{...(ee=d.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  // eslint-disable-next-line storybook/no-redundant-story-name
  name: "With End Action",
  args: {
    icon: RadioButtonIcon,
    label: "Radio Button",
    endAction: <button className="p-1 rounded hover:bg-primary/10 text-primary transition-colors" aria-label="Add Radio Button" onClick={e => e.stopPropagation()}>
        <Plus className="text-base leading-none" />
      </button>
  }
}`,...(oe=(ne=d.parameters)==null?void 0:ne.docs)==null?void 0:oe.source},description:{story:"With End Action — trailing `+` button visible on hover (e.g. for quick-add).",...(ae=(re=d.parameters)==null?void 0:re.docs)==null?void 0:ae.description}}};var te,se,ie,ce,de;l.parameters={...l.parameters,docs:{...(te=l.parameters)==null?void 0:te.docs,source:{originalSource:`{
  // eslint-disable-next-line storybook/no-redundant-story-name
  name: "All Types",
  render: args => <div className="w-64 border border-border-ui rounded-lg overflow-hidden">
      {[{
      icon: RadioButtonIcon,
      label: "Radio Button"
    }, {
      icon: CheckboxIcon,
      label: "Check Box"
    }, {
      icon: TextAnswerIcon,
      label: "Text Input"
    }, {
      icon: DescriptionIcon,
      label: "Description"
    }, {
      icon: PageBreakIcon,
      label: "Page Break"
    }].map(({
      icon,
      label
    }) => <ToolboxItem key={label} icon={icon} label={label} onDragStart={args.onDragStart} onDragEnd={args.onDragEnd} onClick={args.onClick} />)}
    </div>
}`,...(ie=(se=l.parameters)==null?void 0:se.docs)==null?void 0:ie.source},description:{story:"All Types — the 5 core question types stacked as they appear in the sidebar toolbox.",...(de=(ce=l.parameters)==null?void 0:ce.docs)==null?void 0:de.description}}};var le,pe,ue,me,ge;p.parameters={...p.parameters,docs:{...(le=p.parameters)==null?void 0:le.docs,source:{originalSource:`{
  // eslint-disable-next-line storybook/no-redundant-story-name
  name: "Full Library",
  render: args => <div className="w-64 border border-border-ui rounded-lg overflow-hidden">
      {Object.entries(questionGroups).map(([group, names]) => <div key={group}>
          {/* Group heading */}
          <div className="px-4 py-1.5 bg-muted/60 border-b border-border-ui">
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              {group}
            </span>
          </div>
          {/* Items in group */}
          {names.map(name => {
        const icon = iconMap[name];
        if (!icon) return null;
        return <ToolboxItem key={name} icon={icon} label={name} onDragStart={args.onDragStart} onDragEnd={args.onDragEnd} onClick={args.onClick} />;
      })}
        </div>)}
    </div>
}`,...(ue=(pe=p.parameters)==null?void 0:pe.docs)==null?void 0:ue.source},description:{story:"Full Library — every question type from `toolbox-items.ts`, rendered in their category groups.",...(ge=(me=p.parameters)==null?void 0:me.docs)==null?void 0:ge.description}}};const Pe=["Radio","Checkbox","TextEntry","Description","PageBreak","Dragging","Disabled","WithEndAction","AllTypes","FullLibrary"];export{l as AllTypes,r as Checkbox,t as Description,c as Disabled,i as Dragging,p as FullLibrary,s as PageBreak,o as Radio,a as TextEntry,d as WithEndAction,Pe as __namedExportsOrder,Se as default};
