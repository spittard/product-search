(this["webpackJsonpproduct-search"]=this["webpackJsonpproduct-search"]||[]).push([[0],{19:function(e,t,a){e.exports=a(46)},24:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),l=a.n(c),s=(a(24),a(1)),u=Object(n.createContext)(),i=function(e){var t=Object(n.useState)(),a=Object(s.a)(t,2),c=a[0],l=a[1],i=Object(n.useState)(void 0),o=Object(s.a)(i,2),m=o[0],d=o[1],p=Object(n.useState)([]),v=Object(s.a)(p,2),E=v[0],f=v[1];return r.a.createElement(u.Provider,{value:[E,f,m,d,c,l]}," ",e.children," ")};a(25),a(28);function o(e){var t=Object(n.useContext)(u),a=Object(s.a)(t,4)[3];return r.a.createElement("a",{href:"#",onClick:function(e,t){a({group:e,value:t})}.bind(this,e.group,e.value)},e.value)}function m(e){return r.a.createElement("div",{className:"card"},r.a.createElement("div",{class:"card-content"},r.a.createElement("div",{class:"media"},r.a.createElement("div",{class:"media-left"},r.a.createElement("figure",{class:"image is-48x48"},r.a.createElement("img",{src:e.product.fields.image_url,onError:function(e){e.target.onerror=null,e.target.src="movie.jpg"},alt:"movie.jpg"}))),r.a.createElement("div",{class:"media-content"},r.a.createElement("p",{class:"title is-4"},e.product.fields.title),r.a.createElement("p",{class:"subtitle is-6"},e.product.fields.plot))),r.a.createElement("div",{class:"content is-size-7"},r.a.createElement("b",null,"Starring:")," ",e.product.fields.actors.join(", "),r.a.createElement("br",null),r.a.createElement("b",null,"Directed by:")," ",e.product.fields.directors.join(", "),r.a.createElement("br",null))))}function d(){var e=Object(n.useContext)(u),t=Object(s.a)(e,4),a=t[0],c=t[2];t[3];return r.a.createElement("div",null,r.a.createElement("section",{className:"section"},r.a.createElement("div",{className:"container"},void 0===c?a.map((function(e){return r.a.createElement(m,{key:e.id,product:e})})):a.filter((function(e){return e.fields[c.group].includes(c.value)})).map((function(e){return r.a.createElement(m,{key:e.id,product:e})})))))}var p=a(5),v=a(18),E=function e(t){var a=this;Object(v.a)(this,e),this.actors=function(){var e=a.products.length>0?a.products.map((function(e){return e.fields.actors})):[],t=[];e.length>0&&e.map((function(e){return e.reduce((function(e,t){return e.push(t),e}),t)}));return console.log(t),Object(p.a)(new Set(t)).sort()},this.directors=function(){var e=a.products.length>0?a.products.map((function(e){return e.fields.directors})):[],t=[];e.length>0&&e.map((function(e){return e.reduce((function(e,t){return e.push(t),e}),t)}));return console.log(t),Object(p.a)(new Set(t)).sort()},this.genres=function(){var e=a.products.length>0?a.products.map((function(e){return e.fields.genres})):[],t=[];e.length>0&&e.map((function(e){return e.reduce((function(e,t){return e.push(t),e}),t)}));return console.log(t),Object(p.a)(new Set(t)).sort()},this.products=t};function f(){var e=Object(n.useContext)(u),t=Object(s.a)(e,1)[0],a=new E(t),c=a.genres(),l=a.directors(),i=a.actors();return r.a.createElement("aside",{class:"menu"},r.a.createElement("p",{className:"menu-label has-text-black"},"Genres"),r.a.createElement("ul",{class:"menu-list"},c.map((function(e){return r.a.createElement("li",{key:e},r.a.createElement(o,{group:"genres",value:e}))}))),r.a.createElement("p",{class:"menu-label"},"Directors"),r.a.createElement("ul",{class:"menu-list"},l.map((function(e){return r.a.createElement("li",null,r.a.createElement(o,{group:"directors",value:e}))}))),r.a.createElement("p",{class:"menu-label"},"Actors"),r.a.createElement("ul",{class:"menu-list"},i.map((function(e){return r.a.createElement("li",null,r.a.createElement(o,{group:"actors",value:e}))}))))}function b(){var e=Object(n.useContext)(u),t=Object(s.a)(e,6),a=t[1],c=t[3],l=t[4],i=t[5],o=Object(n.useState)("Dave"),m=Object(s.a)(o,2),d=(m[0],m[1],Object(n.useState)(!1)),p=Object(s.a)(d,2),v=p[0],E=p[1];Object(n.useEffect)((function(){fetch("https://ikchkii2sd.execute-api.us-west-2.amazonaws.com/?q="+l).then((function(e){return e.json()})).then((function(e){var t=e.hits.hits.map((function(e){return e._source}));a(t)})).catch((function(e){return console.error(e)}))}),[l,a]);return r.a.createElement("div",{className:"navbar has-shadow"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement("div",{className:"navbar-item"},r.a.createElement("p",{className:"title"},"Search Movies")),r.a.createElement("a",{role:"button",onClick:function(){return E(!v)},className:"navbar-burger burger ".concat(v?"is-active":""),"aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"},r.a.createElement("span",{"aria-hidden":"true"}),r.a.createElement("span",{"aria-hidden":"true"}),r.a.createElement("span",{"aria-hidden":"true"}))),r.a.createElement("div",{className:"navbar-menu ".concat(v?"is-active":"")},r.a.createElement("div",{className:"navbar-end"},r.a.createElement("div",{className:"navbar-item"},r.a.createElement("form",{onSubmit:function(e){c(void 0),i(l),console.log(l)},className:"field has-addons"},r.a.createElement("p",{className:"control is-expanded"},r.a.createElement("input",{value:l,type:"text",onChange:function(e){return i(e.target.value)},className:"input"})),r.a.createElement("p",{className:"control"},r.a.createElement("button",{className:"button is-info has-text-weight-bold"},"Search")))))))}function h(){var e=Object(n.useContext)(u),t=Object(s.a)(e,2);t[0],t[1];return r.a.createElement("div",null,r.a.createElement(b,null),r.a.createElement("div",{class:"columns"},r.a.createElement("div",{class:"column is-one-fifth"}," ",r.a.createElement(f,null)," "),r.a.createElement("div",{class:"column"}," ",r.a.createElement(d,null)," ")))}var g=function(){return r.a.createElement(i,null,r.a.createElement(h,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[19,1,2]]]);
//# sourceMappingURL=main.48a573d4.chunk.js.map