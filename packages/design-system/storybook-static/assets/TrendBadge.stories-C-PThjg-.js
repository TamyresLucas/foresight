import{j as e}from"./jsx-runtime-BYYWji4R.js";import{T as a}from"./TrendBadge-C8ekqNSh.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./utils-CDN07tui.js";import"./icons-BJRAOfCp.js";import"./icon-CPjmVJEk.js";const w={title:"ShadCn/Dashboard UI/Trend Badge",component:a,parameters:{layout:"centered",docs:{description:{component:'\n**TrendBadge** is a compact inline badge used inside StatsCard to communicate directional change.\n\n### Props\n\n| Prop | Type | Description |\n|------|------|-------------|\n| `type` | `"positive" \\| "negative"` | Controls color and arrow direction |\n| `value` | `number` | Percentage value displayed (e.g. `15.1` → "+15.1%") |\n\n### Behavior in StatsCard\n\n- `positive` → green badge with upward arrow (↑)\n- `negative` → red badge with downward arrow (↓)\n- When `type` is `"neutral"`, **no TrendBadge is rendered** — the StatsCard uses plain text instead\n- Non-neutral trends also trigger an `ArrowUpRight` circular outline button in the card header\n                '}}},argTypes:{type:{control:"select",options:["positive","negative"]},value:{control:"number"}}},r={args:{type:"positive",value:15.1}},t={args:{type:"negative",value:2}},n={name:"All Variants",render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(a,{type:"positive",value:15.1}),e.jsx(a,{type:"negative",value:2}),e.jsx(a,{type:"positive",value:.4}),e.jsx(a,{type:"negative",value:8.3})]})};var s,o,i;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    type: "positive",
    value: 15.1
  }
}`,...(i=(o=r.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var d,p,l;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    type: "negative",
    value: 2
  }
}`,...(l=(p=t.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var c,v,g;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  // eslint-disable-next-line storybook/no-redundant-story-name
  name: "All Variants",
  render: () => <div className="flex items-center gap-4">
            <TrendBadge type="positive" value={15.1} />
            <TrendBadge type="negative" value={2} />
            <TrendBadge type="positive" value={0.4} />
            <TrendBadge type="negative" value={8.3} />
        </div>
}`,...(g=(v=n.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};const B=["Positive","Negative","AllVariants"];export{n as AllVariants,t as Negative,r as Positive,B as __namedExportsOrder,w as default};
