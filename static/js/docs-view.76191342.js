(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"./docs/view.mdx":function(e,n,t){"use strict";t.r(n);var a=t("./node_modules/react/index.js"),o=t.n(a),i=t("./node_modules/@mdx-js/tag/dist/index.js"),r=t("./node_modules/docz/dist/index.m.js"),s=t("./packages/ui-dom/components/View/index.js"),c=t.n(s),p=t("./packages/ui-dom/components/Button/index.js"),m=t.n(p);function d(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}n.default=function(e){var n=e.components,t=d(e,["components"]);return o.a.createElement(i.MDXTag,{name:"wrapper",components:n},o.a.createElement(i.MDXTag,{name:"h1",components:n,props:{id:"view"}},"View"),o.a.createElement(i.MDXTag,{name:"p",components:n},"The ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"View")," component is a wrapper for an empty and unstyled ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"div"),"."),o.a.createElement(i.MDXTag,{name:"h2",components:n,props:{id:"basic-usage"}},"Basic usage"),o.a.createElement(r.Playground,{__position:0,__code:"<View>\n  <Button active>A button inside a view</Button>\n</View>",__scope:{props:t,View:c.a,Button:m.a}},o.a.createElement(c.a,null,o.a.createElement(m.a,{active:!0},"A button inside a view"))))}}}]);