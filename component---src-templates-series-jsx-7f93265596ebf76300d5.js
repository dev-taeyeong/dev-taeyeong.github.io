(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"/9aa":function(t,e,n){var o=n("NykK"),r=n("ExA7");t.exports=function(t){return"symbol"==typeof t||r(t)&&"[object Symbol]"==o(t)}},AP2z:function(t,e,n){var o=n("nmnc"),r=Object.prototype,i=r.hasOwnProperty,a=r.toString,c=o?o.toStringTag:void 0;t.exports=function(t){var e=i.call(t,c),n=t[c];try{t[c]=void 0;var o=!0}catch(l){}var r=a.call(t);return o&&(e?t[c]=n:delete t[c]),r}},DzJC:function(t,e,n){var o=n("sEfC"),r=n("GoyQ");t.exports=function(t,e,n){var i=!0,a=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return r(n)&&(i="leading"in n?!!n.leading:i,a="trailing"in n?!!n.trailing:a),o(t,e,{leading:i,maxWait:e,trailing:a})}},ExA7:function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},GoyQ:function(t,e){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},GxtF:function(t,e,n){"use strict";var o=n("q1tI"),r=n.n(o),i=n("vOnD"),a=n("Wbzz"),c=i.default.div.withConfig({displayName:"TagList__TagListWrapper",componentId:"sc-1sco23u-0"})(["margin-bottom:16px;word-break:break-all;"]),l=i.default.div.withConfig({displayName:"TagList__TagLink",componentId:"sc-1sco23u-1"})(["display:inline-block;padding:9.6px 11.2px;margin-right:8px;margin-bottom:8px;border-radius:50px;background-color:",";color:",";text-decoration:none;font-size:14.4px;transition:all 0.2s;&:hover{background-color:",";}"],(function(t){return t.selected?t.theme.colors.selectedTagBackground:t.theme.colors.tagBackground}),(function(t){return t.selected?t.theme.colors.selectedTagText:t.theme.colors.tagText}),(function(t){return t.selected?t.theme.colors.hoveredSelectedTagBackground:t.theme.colors.hoveredTagBackground})),u=function(t){return t.replace(/\s+/g,"-")};e.a=function(t){var e=t.tagList,n=t.count,o=t.selected;return e?n?r.a.createElement(c,null,e.map((function(t,e){return r.a.createElement(a.Link,{key:JSON.stringify({tag:t,i:e}),to:o===t.fieldValue?"/tags":"/tags?q="+t.fieldValue},r.a.createElement(l,{selected:t.fieldValue===o},u(t.fieldValue)," (",t.totalCount,")"))}))):r.a.createElement(c,null,e.map((function(t,e){return r.a.createElement(a.Link,{key:JSON.stringify({tag:t,i:e}),to:"/tags?q="+t},r.a.createElement(l,null,u(t)))}))):null}},KfNM:function(t,e){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},Kz5y:function(t,e,n){var o=n("WFqU"),r="object"==typeof self&&self&&self.Object===Object&&self,i=o||r||Function("return this")();t.exports=i},NykK:function(t,e,n){var o=n("nmnc"),r=n("AP2z"),i=n("KfNM"),a=o?o.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":a&&a in Object(t)?r(t):i(t)}},PZY4:function(t,e,n){"use strict";var o=n("DzJC"),r=n.n(o),i=n("q1tI"),a=n.n(i),c=n("vOnD"),l=n("Wbzz"),u=n("PyCY"),s=n("XUsr"),f=n("GxtF"),d=c.default.div.withConfig({displayName:"PostList__PostListWrapper",componentId:"sc-ol8bfn-0"})(["@media (max-width:768px){padding:0 10px;}"]),p=c.default.div.withConfig({displayName:"PostList__PostWrapper",componentId:"sc-ol8bfn-1"})(["position:relative;top:0;transition:all 0.5s;@media (max-width:768px){padding:0 5px;}"]),m=c.default.p.withConfig({displayName:"PostList__Date",componentId:"sc-ol8bfn-2"})(["margin-bottom:16px;font-size:14.4px;color:",";"],(function(t){return t.theme.colors.tertiaryText})),g=c.default.p.withConfig({displayName:"PostList__Excerpt",componentId:"sc-ol8bfn-3"})(["margin-bottom:32px;line-height:1.7;font-size:16px;color:",";word-break:break-all;"],(function(t){return t.theme.colors.secondaryText}));e.a=function(t){var e=t.postList,n=Object(i.useState)(10),o=n[0],c=n[1],x=r()((function(){document.documentElement.scrollHeight-document.documentElement.scrollTop<=document.documentElement.clientHeight+100&&o<e.length&&setTimeout((function(){return c(o+10)}),300)}),250);return Object(i.useEffect)((function(){return window.addEventListener("scroll",x),function(){window.removeEventListener("scroll",x)}}),[o,e]),Object(i.useEffect)((function(){c(10)}),[e]),a.a.createElement(d,null,e.slice(0,o).map((function(t,n){var r=t.frontmatter,i=r.title,c=r.date,d=r.tags,x=t.excerpt,v=t.fields.slug;return a.a.createElement(a.a.Fragment,null,a.a.createElement(p,null,a.a.createElement(u.a,{size:"bg"},a.a.createElement(l.Link,{to:v},i)),a.a.createElement(m,null,c),a.a.createElement(g,null,x),a.a.createElement(f.a,{tagList:d})),o-1!==n&&e.length-1!==n&&a.a.createElement(s.a,{mt:"48px",mb:"32px"}))})))}},PyCY:function(t,e,n){"use strict";var o=n("q1tI"),r=n.n(o),i=n("vOnD").default.h1.withConfig({displayName:"Title__Wrapper",componentId:"sc-1rvd18w-0"})(["margin-bottom:24px;font-size:",";font-weight:700;line-height:1.3;color:",";word-break:break-all;& > a{text-decoration:none;color:inherit;transition:all 0.2s;}& > a:hover{color:",";}"],(function(t){return t.size}),(function(t){return t.theme.colors.text}),(function(t){return t.theme.colors.secondaryText}));e.a=function(t){var e=t.size,n=t.children;return r.a.createElement(i,{size:{sm:"19.2px",md:"25.6px",bg:"33.6px"}[e]}," ",n," ")}},QIyF:function(t,e,n){var o=n("Kz5y");t.exports=function(){return o.Date.now()}},TO8r:function(t,e){var n=/\s/;t.exports=function(t){for(var e=t.length;e--&&n.test(t.charAt(e)););return e}},WFqU:function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(this,n("yLpj"))},XUsr:function(t,e,n){"use strict";var o=n("17x9"),r=n.n(o),i=n("vOnD").default.hr.withConfig({displayName:"Divider",componentId:"sc-1l9zb5e-0"})(["margin-top:",";margin-bottom:",";border:none;border-bottom:1px solid ",";"],(function(t){return t.mt}),(function(t){return t.mb}),(function(t){return t.theme.colors.divider}));i.propTypes={mt:r.a.string,mb:r.a.string},i.defaultProps={mt:"48px",mb:"48px"},e.a=i},jXQH:function(t,e,n){var o=n("TO8r"),r=/^\s+/;t.exports=function(t){return t?t.slice(0,o(t)+1).replace(r,""):t}},nmnc:function(t,e,n){var o=n("Kz5y").Symbol;t.exports=o},oozd:function(t,e,n){"use strict";n.r(e);var o=n("q1tI"),r=n.n(o),i=n("vOnD"),a=n("ntAx"),c=n("DGZL"),l=n("PZY4"),u=n("XUsr"),s=n("C4nX"),f=i.default.div.withConfig({displayName:"Series__Header",componentId:"sc-1vkm08d-0"})(["@media (max-width:768px){padding:0px 15px;}"]),d=i.default.h1.withConfig({displayName:"Series__Title",componentId:"sc-1vkm08d-1"})(["margin-bottom:15px;line-height:1.2;font-size:44.8px;font-weight:bold;color:",";word-break:break-all;"],(function(t){return t.theme.colors.text})),p=i.default.h3.withConfig({displayName:"Series__Subtitle",componentId:"sc-1vkm08d-2"})(["display:inline-block;padding:2px 3px;margin-top:32px;margin-bottom:8px;font-size:20px;font-weight:bold;background-color:",";color:",";letter-spacing:-1px;"],(function(t){return t.theme.colors.text}),(function(t){return t.theme.colors.bodyBackground})),m=i.default.div.withConfig({displayName:"Series__SeriesInform",componentId:"sc-1vkm08d-3"})(["display:flex;align-items:center;font-size:16px;color:",";& > span{margin:0 3px;}"],(function(t){return t.theme.colors.text})),g=i.default.span.withConfig({displayName:"Series__Date",componentId:"sc-1vkm08d-4"})(["color:",";font-weight:lighter;"],(function(t){return t.theme.colors.tertiaryText}));e.default=function(t){var e=t.pathContext,n=t.data,o=e.series,i=n.posts.nodes;return r.a.createElement(a.a,null,r.a.createElement(c.a,{title:"SERIES: "+o,description:s.description,url:s.siteUrl}),r.a.createElement(f,null,r.a.createElement(p,null," SERIES "),r.a.createElement(d,null," ",o," "),r.a.createElement(m,null,r.a.createElement("span",null,i.length," Posts"),r.a.createElement("span",null,"·"),r.a.createElement(g,null,"Last updated on ",i[i.length-1].frontmatter.date)),r.a.createElement(u.a,null)),r.a.createElement(l.a,{postList:i}))}},sEfC:function(t,e,n){var o=n("GoyQ"),r=n("QIyF"),i=n("tLB3"),a=Math.max,c=Math.min;t.exports=function(t,e,n){var l,u,s,f,d,p,m=0,g=!1,x=!1,v=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function h(e){var n=l,o=u;return l=u=void 0,m=e,f=t.apply(o,n)}function b(t){return m=t,d=setTimeout(E,e),g?h(t):f}function y(t){var n=t-p;return void 0===p||n>=e||n<0||x&&t-m>=s}function E(){var t=r();if(y(t))return w(t);d=setTimeout(E,function(t){var n=e-(t-p);return x?c(n,s-(t-m)):n}(t))}function w(t){return d=void 0,v&&l?h(t):(l=u=void 0,f)}function k(){var t=r(),n=y(t);if(l=arguments,u=this,p=t,n){if(void 0===d)return b(p);if(x)return clearTimeout(d),d=setTimeout(E,e),h(p)}return void 0===d&&(d=setTimeout(E,e)),f}return e=i(e)||0,o(n)&&(g=!!n.leading,s=(x="maxWait"in n)?a(i(n.maxWait)||0,e):s,v="trailing"in n?!!n.trailing:v),k.cancel=function(){void 0!==d&&clearTimeout(d),m=0,l=p=u=d=void 0},k.flush=function(){return void 0===d?f:w(r())},k}},tLB3:function(t,e,n){var o=n("jXQH"),r=n("GoyQ"),i=n("/9aa"),a=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,l=/^0o[0-7]+$/i,u=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(i(t))return NaN;if(r(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=r(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=o(t);var n=c.test(t);return n||l.test(t)?u(t.slice(2),n?2:8):a.test(t)?NaN:+t}}}]);
//# sourceMappingURL=component---src-templates-series-jsx-7f93265596ebf76300d5.js.map