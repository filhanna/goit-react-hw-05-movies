"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[285],{285:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var r=n(861),a=n(433),c=n(439),i=n(757),u=n.n(i),s=n(791),o=n(243),f=n(689),l=n(87),h=n(184),d=function(e){var t=e.getMovies,n=(0,s.useState)([]),r=(0,c.Z)(n,2),i=r[0],u=r[1],o=(0,f.TH)();return(0,s.useEffect)((function(){t().then((function(e){var t=e.results;return u((0,a.Z)(t))})).catch((function(e){return console.log(e.message)})).finally()}),[t]),(0,h.jsx)("div",{children:(0,h.jsx)("ul",{children:i.map((function(e){var t=e.id,n=e.title;return(0,h.jsx)("li",{children:(0,h.jsx)(l.rU,{id:t,to:"/movies/".concat(t),state:{from:o},children:n},t)},t)}))})})},v=function(){var e=(0,s.useState)([]),t=(0,c.Z)(e,2),n=(t[0],t[1]),i=(0,f.TH)();(0,s.useEffect)((function(){l().then((function(e){var t=e.results;return n((0,a.Z)(t))})).catch((function(e){return console.log(e.message)})).finally()}),[]);var l=function(){var e=(0,r.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"233807a8ffc50a65007330f29276706a",e.next=3,o.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat("233807a8ffc50a65007330f29276706a"));case 3:return t=e.sent,e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,h.jsxs)("div",{children:[(0,h.jsx)("h1",{children:"Trending Today"}),(0,h.jsx)(d,{getMovies:l,location:i})]})}}}]);
//# sourceMappingURL=285.b44c8c5d.chunk.js.map