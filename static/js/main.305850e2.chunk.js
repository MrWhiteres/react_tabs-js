(this["webpackJsonpreact_tabs-js"]=this["webpackJsonpreact_tabs-js"]||[]).push([[0],{12:function(t,e,c){},14:function(t,e,c){"use strict";c.r(e);var a=c(3),n=c.n(a),s=c(5),i=c(1),b=(c(10),c(11),c(12),c(4)),d=c.n(b),l=c(0),o=function(t){var e=t.tab,c=t.selected,a=t.onTabSelected;return Object(l.jsx)("li",{className:d()({"is-active":c}),"data-cy":"Tab",children:Object(l.jsx)("a",{href:"#".concat(e.id),"data-cy":"TabLink",onClick:function(){c||a(e)},children:e.title})})},r=function(t){var e=t.tabs,c=t.selectedTab,a=t.onTabSelected;return Object(l.jsxs)("div",{"data-cy":"TabsComponent",children:[Object(l.jsx)("div",{className:"tabs is-boxed",children:Object(l.jsx)("ul",{children:e.map((function(t){return Object(l.jsx)(o,{tab:t,selected:c.id===t.id,onTabSelected:a},t.id)}))})}),Object(l.jsx)("div",{className:"block","data-cy":"TabContent",children:c.content})]})},j=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],u=function(){var t=Object(i.useState)(j[0]),e=Object(s.a)(t,2),c=e[0],a=e[1];return Object(l.jsxs)("div",{className:"section",children:[Object(l.jsx)("h1",{className:"title",children:"Selected tab is ".concat(c.title)}),Object(l.jsx)(r,{tabs:j,selectedTab:c,onTabSelected:a})]})};n.a.render(Object(l.jsx)(u,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.305850e2.chunk.js.map