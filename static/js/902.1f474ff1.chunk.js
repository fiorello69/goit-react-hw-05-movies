"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[902],{800:(e,t,a)=>{a.d(t,{c:()=>c});const s="ErrorAlert_Error__rwsaJ";var r=a(496);const c=e=>{let{error:t}=e;return(0,r.jsx)("p",{className:s,children:t})}},264:(e,t,a)=>{a.d(t,{c:()=>o});var s=a(72);const r="Loader_loader__WEzse";var c=a(496);const o=()=>(0,c.jsx)(s.s$,{visible:!0,height:"80",width:"80",color:"#4fa94d",radius:"9",ariaLabel:"three-dots-loading",wrapperClass:r})},104:(e,t,a)=>{a.d(t,{c:()=>i});var s=a(560),r=a(12),c=(a(680),a(164));const o={trendingList:"MoviesList_trendingList__DDWPu",movieItem:"MoviesList_movieItem__etzOn"};var n=a(496);const i=e=>{let{movies:t}=e;const a=(0,s.IT)();return(0,n.jsx)("ul",{className:o.trendingList,children:t.map((e=>(0,n.jsxs)("li",{className:o.movieItem,children:[(0,n.jsx)(c.YXI,{className:o.icon}),(0,n.jsx)(r.cH,{to:"/movies/".concat(e.id),state:{from:a},children:e.title||e.name})]},e.id)))})}},902:(e,t,a)=>{a.r(t),a.d(t,{default:()=>g});var s=a(680),r=a(12),c=a(56),o=a(752);const n="Searchbar_Searchbar__cmesC",i="Searchbar_SearchForm__6JWsb",l="Searchbar_SearchForm-button__EAMc5",m="Searchbar_SearchForm-input__JsZM+";var d=a(496);const u=e=>{let{onFormSubmit:t}=e;return(0,d.jsx)("div",{className:n,children:(0,d.jsxs)("form",{className:i,onSubmit:e=>{e.preventDefault();const a=e.target,s=a.search.value.trim();s?(t(s),a.reset()):alert("Please, write something !")},children:[(0,d.jsx)("input",{className:m,type:"text",name:"search",autoComplete:"off",autoFocus:!0,placeholder:"Search movies"}),(0,d.jsx)("button",{type:"submit",className:l,children:(0,d.jsx)(o.oHc,{})})]})})};var h=a(104),v=a(800),_=a(264);const g=()=>{const[e,t]=(0,s.useState)(null),[a,o]=(0,s.useState)(!1),[n,i]=(0,s.useState)(null),[l,m]=(0,r.k5)(),g=l.get("query");(0,s.useEffect)((()=>{g&&(async()=>{try{o(!0);const e=await c.c.getSearchedMovies(g);0===e.results.length&&i("We are sorry. There is no movie for your searched term"),t(e.results)}catch(n){i(n.response.data.status_message)}finally{o(!1)}})()}),[g]);return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("section",{className:"container",children:[(0,d.jsx)(u,{onFormSubmit:e=>{m({query:e}),t(null),i(null)}}),e&&(0,d.jsx)(h.c,{movies:e}),n&&(0,d.jsx)(v.c,{error:n}),a&&(0,d.jsx)(_.c,{})]})})}},56:(e,t,a)=>{a.d(t,{c:()=>c});var s=a(372);s.c.defaults.baseURL="https://api.themoviedb.org/3";const r="051a3d8a53317eb2948f5da4b81e4296",c={getTrending:async()=>(await s.c.get("".concat("/trending/movie/day","?api_key=").concat(r))).data,getSearchedMovies:async e=>{const t="/search/movie?query=".concat(e);return(await s.c.get("".concat(t,"&api_key=").concat(r))).data},getMovieDetails:async e=>{const t="/movie/".concat(e);return(await s.c.get("".concat(t,"?api_key=").concat(r))).data},getMovieCredits:async e=>{const t="/movie/".concat(e,"/credits");return(await s.c.get("".concat(t,"?api_key=").concat(r))).data},getMovieReviews:async e=>{const t="/movie/".concat(e,"/reviews");return(await s.c.get("".concat(t,"?api_key=").concat(r))).data}}}}]);
//# sourceMappingURL=902.1f474ff1.chunk.js.map