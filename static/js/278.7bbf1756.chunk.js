"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[278],{278:function(t,e,n){n.r(e),n.d(e,{default:function(){return l}});var r=n(861),a=n(885),c=n(757),u=n.n(c),i=n(791),o=n(731),s=n(115),p=n(184),f=s.b.getMovieByKeyword;function l(){var t=(0,i.useState)(""),e=(0,a.Z)(t,2),n=e[0],c=e[1],l=(0,i.useState)([]),h=(0,a.Z)(l,2),v=h[0],d=h[1],m=(0,i.useState)(!1),g=(0,a.Z)(m,2),y=g[0],x=g[1],b=(0,i.useState)(null),w=(0,a.Z)(b,2),k=w[0],Z=w[1],_=(0,o.lr)(),j=(0,a.Z)(_,2),C=j[0],M=j[1],P=C.get("query"),S=Boolean(v.length);return(0,i.useEffect)((function(){function t(){return t=(0,r.Z)(u().mark((function t(e){var n,r,a,c;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=2;break}return t.abrupt("return");case 2:return t.prev=2,x(!0),Z(null),t.next=7,f(e);case 7:if(n=t.sent,r=n.data,a=r.results,c=r.total_results,d(a),0!==c){t.next=13;break}return Z("We did not find any images for your request"),t.abrupt("return");case 13:return t.abrupt("return");case 16:t.prev=16,t.t0=t.catch(2),d([]),Z("Whoops something went wrong");case 20:return t.prev=20,x(!1),t.finish(20);case 23:case"end":return t.stop()}}),t,null,[[2,16,20,23]])}))),t.apply(this,arguments)}!function(e){t.apply(this,arguments)}(P)}),[P]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("input",{name:"search",type:"text",value:n,onChange:function(t){var e=t.target;c(e.value)},autoComplete:"off"}),(0,p.jsx)("button",{type:"button",onClick:function(){var t=""!==n.trim()?{query:n.trim()}:null;t&&M(t)},children:"Search"}),y&&(0,p.jsx)("p",{children:"Loading..."}),k&&(0,p.jsx)("p",{children:k}),S&&(0,p.jsx)(s.O,{moviesList:v})]})}},115:function(t,e,n){n.d(e,{b:function(){return m},O:function(){return k}});var r=n(861),a=n(757),c=n.n(a),u=n(44),i="2acc48bc8101b89794229029120e4b70",o="https://api.themoviedb.org/3/";function s(){return s=(0,r.Z)(c().mark((function t(){var e,n,r=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:1,t.next=3,u.ZP.get("".concat(o,"trending/movie/day?api_key=").concat(i,"&page=").concat(e));case 3:return n=t.sent,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)}))),s.apply(this,arguments)}function p(){return p=(0,r.Z)(c().mark((function t(e){var n,r,a=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:1,t.next=3,u.ZP.get("".concat(o,"search/movie?api_key=").concat(i,"&query=").concat(e,"&page=").concat(n));case 3:return r=t.sent,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)}))),p.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.ZP.get("".concat(o,"movie/").concat(e,"?api_key=").concat(i));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.ZP.get("".concat(o,"movie/").concat(e,"/credits?api_key=").concat(i));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.ZP.get("".concat(o,"movie/").concat(e,"/reviews?api_key=").concat(i));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var v,d={getTrendingMovies:function(){return s.apply(this,arguments)},getMovieByKeyword:function(t){return p.apply(this,arguments)},getMovieDetails:function(t){return f.apply(this,arguments)},getMovieCredits:function(t){return l.apply(this,arguments)},getMovieReviews:function(t){return h.apply(this,arguments)}},m=d,g=n(731),y=n(470),x=n(168),b=n(444).ZP.ul(v||(v=(0,x.Z)(["\n    display: flex;\n    flex-direction: column;\n    margin: 0;\n\n    li {\n        margin-bottom: 4px;\n\n        &:last-child{\n            margin-bottom: 0;\n        }\n    }\n"]))),w=n(184);function k(t){var e=t.moviesList,n=(0,y.TH)();return(0,w.jsx)(b,{children:e.map((function(t){var e=t.id,r=t.original_title;return(0,w.jsx)("li",{children:(0,w.jsx)(g.rU,{state:{from:n},to:"/movies/".concat(e),children:r})},e)}))})}}}]);
//# sourceMappingURL=278.7bbf1756.chunk.js.map