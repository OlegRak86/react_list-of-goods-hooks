(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c,s=n(8),o=n.n(s),r=n(6),i=n(7),a=n(1),l=(n(13),n(14),n(4)),u=n.n(l);!function(t){t.ALFABET_SORT="alfabet",t.WORD_LENGTH_SORT="wordlength",t.DEFAULT=""}(c||(c={}));var b=n(0),O=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];var h=function(){var t=Object(a.useState)(c.DEFAULT),e=Object(r.a)(t,2),n=e[0],s=e[1],o=Object(a.useState)(!1),l=Object(r.a)(o,2),h=l[0],j=l[1],d=function(t,e,n){var s=Object(i.a)(t);switch(e){case c.ALFABET_SORT:s.sort((function(t,e){return t.localeCompare(e)}));break;case c.WORD_LENGTH_SORT:s.sort((function(t,e){return t.length-e.length}));break;default:s=Object(i.a)(t)}return n&&s.reverse(),s}(O,n,h);return Object(b.jsxs)("div",{className:"section content",children:[Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{type:"button",className:u()("button","is-info",{"is-light":n!==c.ALFABET_SORT}),onClick:function(){return s(c.ALFABET_SORT)},children:"Sort alphabetically"}),Object(b.jsx)("button",{type:"button",className:u()("button","is-success",{"is-light":n!==c.WORD_LENGTH_SORT}),onClick:function(){return s(c.WORD_LENGTH_SORT)},children:"Sort by length"}),Object(b.jsx)("button",{type:"button",className:u()("button","is-warning",{"is-light":!h}),onClick:function(){return j(!1===h)},children:"Reverse"}),n.length>0||h?Object(b.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){s(c.DEFAULT),j(!1)},children:"Reset"}):""]}),Object(b.jsx)("ul",{children:d.map((function(t){return Object(b.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})};o.a.render(Object(b.jsx)(h,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.b2c8561e.chunk.js.map