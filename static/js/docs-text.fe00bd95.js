(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"./docs/text.mdx":function(e,t,n){"use strict";n.r(t);var a=n("./node_modules/react/index.js"),o=n.n(a),s=n("./node_modules/@mdx-js/tag/dist/index.js"),i=n("./node_modules/docz/dist/index.m.js"),r=n("./packages/ui-dom/components/Text/index.js"),l=n.n(r),p=n("./packages/ui-dom/components/View/index.js"),c=n.n(p),m=n("./packages/ui-dom/components/Button/index.js"),d=n.n(m);function x(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}t.default=function(e){var t=e.components,n=x(e,["components"]);return o.a.createElement(s.MDXTag,{name:"wrapper",components:t},o.a.createElement(s.MDXTag,{name:"h1",components:t,props:{id:"text"}},"Text"),o.a.createElement(s.MDXTag,{name:"p",components:t},"A simple ",o.a.createElement(s.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"Text"),". All text should be wrapped in this component for better compatibility with platforms that don't support text outside of tags, such as React Native."),o.a.createElement(s.MDXTag,{name:"p",components:t},o.a.createElement(s.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"Text")," accepts any component or strings as children."),o.a.createElement(s.MDXTag,{name:"h2",components:t,props:{id:"basic-usage"}},"Basic usage"),o.a.createElement(i.Playground,{__position:0,__code:'<Text>This is a paragraph.</Text>\n<Text inline>\n  This is an inline text. A span element is rendered instead.\n</Text>\n<Text fontWeight="bold" color="pink">\n  Styled text\n</Text>\n<Text>\n  There\'s a <Button>button</Button> inside this text!\n</Text>\n<Text fontSize="xlarge">This text is very large.</Text>',__scope:{props:n,Text:l.a,View:c.a,Button:d.a}},o.a.createElement(l.a,null,"This is a paragraph."),o.a.createElement(l.a,{inline:!0},"This is an inline text. A span element is rendered instead."),o.a.createElement(l.a,{fontWeight:"bold",color:"pink"},"Styled text"),o.a.createElement(l.a,null,"There's a ",o.a.createElement(d.a,null,"button")," inside this text!"),o.a.createElement(l.a,{fontSize:"xlarge"},"This text is very large.")))}}}]);