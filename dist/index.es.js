import e from"react";import t from"styled-components";const n=t.h1`
  font-size: ${e=>{var t;return null!==(t=e.size)&&void 0!==t?t:"64px"}};
  font-weight: 600;
  line-height: 86px;
  letting: -3px;
  color: ${e=>e.baseColor};
  span{
    color: ${e=>e.accentColor};
    ${e=>e.gradient?`background: linear-gradient(to ${e.gradient.to}, ${e.gradient.colors.map((e=>e))});`:""}
    ${e=>e.gradient?"-webkit-background-clip: text;":""}
    ${e=>e.gradient?"-webkit-text-fill-color: transparent;":""}
  }
`,r=t.h2`
  font-size:${e=>{var t;return null!==(t=e.size)&&void 0!==t?t:"46px"}};
  font-weight: 600;
  line-height: 56px;
  letting: -3px;
  color: ${e=>e.baseColor};
  span{
    color: ${e=>e.accentColor};
    ${e=>e.gradient?`background: linear-gradient(to ${e.gradient.to}, ${e.gradient.colors.map((e=>e))});`:""}
    ${e=>e.gradient?"-webkit-background-clip: text;":""}
    ${e=>e.gradient?"-webkit-text-fill-color: transparent;":""}
  }
`,o=t.div`
  font-size: ${e=>{var t;return null!==(t=e.size)&&void 0!==t?t:"21px"}};
  font-weight: 400;
  line-height: 31px;
  color: ${e=>e.baseColor};
  span{
    color: ${e=>e.accentColor};
    ${e=>e.gradient?`background: linear-gradient(to ${e.gradient.to}, ${e.gradient.colors.map((e=>e))});`:""}
    ${e=>e.gradient?"-webkit-background-clip: text;":""}
    ${e=>e.gradient?"-webkit-text-fill-color: transparent;":""}
  }
`,l=t=>{const l=["heading","H","S","P","subHeading","paragraph"],{element:a,content:i,size:c,color:d,gradient:g}=t;if(void 0!==g&&("object"!=typeof g||!g.to&&!g.colors))throw new Error('Expected Object with "to" property with type of "String" and "colors" with type of array');if(!l.includes(a))throw new Error(`type name of ${a} is invalid, please use one of the following : [${l.map((e=>e))}]`);if(g&&d)throw new Error(" Can not use gradient and color in the same componet, please use just one or split text into multiple components to use different styles");const s=i?i.replace(/<<</gi,"<span>").replace(/>>>/gi,"</span>"):void 0,p=()=>{if(s)return{__html:s}},u=()=>e.createElement(e.Fragment,null,e.createElement(n,{accentColor:null!=d?d:void 0,gradient:null!=g?g:void 0,size:null!=c?c:void 0,dangerouslySetInnerHTML:p()})),m=()=>e.createElement(e.Fragment,null,e.createElement(r,{accentColor:null!=d?d:void 0,gradient:null!=g?g:void 0,size:null!=c?c:void 0,dangerouslySetInnerHTML:p()})),f=()=>e.createElement(e.Fragment,null,e.createElement(o,{accentColor:null!=d?d:void 0,gradient:null!=g?g:void 0,size:null!=c?c:void 0,dangerouslySetInnerHTML:p()})),$={heading:e.createElement(u,null),paragraph:e.createElement(f,null),subHeading:e.createElement(m,null),H:e.createElement(u,null),P:e.createElement(f,null),S:e.createElement(m,null)};for(const[e,t]of Object.entries($))if(a===e)return t;if(!a)return $.paragraph};export{l as default};
