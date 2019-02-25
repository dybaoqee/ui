(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./docs/components/breakpoint.mdx":function(e,n,o){"use strict";o.r(n);var t=o("./node_modules/react/index.js"),a=o.n(t),r=o("./node_modules/@mdx-js/tag/dist/index.js"),i=o("./node_modules/docz/dist/index.m.js"),p=o("./packages/ui-dom/components/Breakpoint/index.js"),l=o.n(p),m=o("./packages/ui-dom/components/Row/index.js"),s=o.n(m),c=o("./packages/ui-dom/components/Col/index.js"),d=o.n(c),k=o("./packages/ui-dom/components/Text/index.js"),u=o.n(k),b=o("./packages/ui-dom/components/View/index.js"),g=o.n(b);function x(e,n){if(null==e)return{};var o,t,a=function(e,n){if(null==e)return{};var o,t,a={},r=Object.keys(e);for(t=0;t<r.length;t++)o=r[t],n.indexOf(o)>=0||(a[o]=e[o]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)o=r[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}n.default=function(e){var n=e.components,o=x(e,["components"]);return a.a.createElement(r.MDXTag,{name:"wrapper",components:n},a.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"breakpoint"}},"Breakpoint"),a.a.createElement(r.MDXTag,{name:"p",components:n},"Renders children when breakpoint requirements are met"),a.a.createElement(i.Playground,{__position:0,__code:'<Breakpoint only="phone">\n  <Text>Only phone</Text>\n</Breakpoint>\n<Breakpoint down="tablet">\n  <Text>Tablet & Phone</Text>\n</Breakpoint>\n<Breakpoint up="desktop">\n  <Text>Desktop</Text>\n</Breakpoint>',__scope:{props:o,Breakpoint:l.a,BreakpointProvider:p.BreakpointProvider,Row:s.a,Col:d.a,Text:u.a,View:g.a}},a.a.createElement(l.a,{only:"phone"},a.a.createElement(u.a,null,"Only phone")),a.a.createElement(l.a,{down:"tablet"},a.a.createElement(u.a,null,"Tablet & Phone")),a.a.createElement(l.a,{up:"desktop"},a.a.createElement(u.a,null,"Desktop"))),a.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"breakpointprovider"}},"BreakpointProvider"),a.a.createElement(r.MDXTag,{name:"p",components:n},"Returns current breakpoint"),a.a.createElement(i.Playground,{__position:1,__code:"<BreakpointProvider>\n  {({ breakpoint, isMobile }) => (\n    <Row>\n      <Col mr={2}>\n        <Text>{breakpoint}</Text>\n      </Col>\n      <Col>\n        <Text color={isMobile ? 'pink' : 'grey'}>\n          ({isMobile ? 'is mobile' : 'not mobile'})\n        </Text>\n      </Col>\n    </Row>\n  )}\n</BreakpointProvider>",__scope:{props:o,Breakpoint:l.a,BreakpointProvider:p.BreakpointProvider,Row:s.a,Col:d.a,Text:u.a,View:g.a}},a.a.createElement(p.BreakpointProvider,null,function(e){var n=e.breakpoint,o=e.isMobile;return a.a.createElement(s.a,null,a.a.createElement(d.a,{mr:2},a.a.createElement(u.a,null,n)),a.a.createElement(d.a,null,a.a.createElement(u.a,{color:o?"pink":"grey"},"(",o?"is mobile":"not mobile",")")))})),a.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"withbreakpoint"}},"withBreakpoint"),a.a.createElement(r.MDXTag,{name:"p",components:n},"Wraps the target component in a ",a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"BreakpointProvider")," and passes the resulting ",a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"breakpoint")," to props"))}}}]);