"use strict";var e=require("react"),t=require("styled-components");const n=t.h1`
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
`;module.exports=t=>{const l=["heading","H","S","P","subHeading","paragraph"],{element:a,content:i,size:c,color:d,gradient:s}=t;if(void 0!==s&&("object"!=typeof s||!s.to&&!s.colors))throw new Error('Expected Object with "to" property with type of "String" and "colors" with type of array');if(!l.includes(a))throw new Error(`type name of ${a} is invalid, please use one of the following : [${l.map((e=>e))}]`);if(s&&d)throw new Error(" Can not use gradient and color in the same componet, please use just one or split text into multiple components to use different styles");const g=i?i.replace(/<<</gi,"<span>").replace(/>>>/gi,"</span>"):void 0,u=()=>{if(g)return{__html:g}},p=()=>e.createElement(e.Fragment,null,e.createElement(n,{accentColor:null!=d?d:void 0,gradient:null!=s?s:void 0,size:null!=c?c:void 0,dangerouslySetInnerHTML:u()})),m=()=>e.createElement(e.Fragment,null,e.createElement(r,{accentColor:null!=d?d:void 0,gradient:null!=s?s:void 0,size:null!=c?c:void 0,dangerouslySetInnerHTML:u()})),$=()=>e.createElement(e.Fragment,null,e.createElement(o,{accentColor:null!=d?d:void 0,gradient:null!=s?s:void 0,size:null!=c?c:void 0,dangerouslySetInnerHTML:u()})),f={heading:e.createElement(p,null),paragraph:e.createElement($,null),subHeading:e.createElement(m,null),H:e.createElement(p,null),P:e.createElement($,null),S:e.createElement(m,null)};for(const[e,t]of Object.entries(f))if(a===e)return t;if(!a)return f.paragraph};
