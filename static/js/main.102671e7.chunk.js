(this["webpackJsonpfinal-project"]=this["webpackJsonpfinal-project"]||[]).push([[0],{147:function(e,t,a){e.exports=a(186)},152:function(e,t,a){},181:function(e,t,a){},186:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),l=a(7),r=a.n(l),o=(a(152),a(36)),i=a(17),s=a(12),m=a(222),u=a(54),p=a.n(u),h=a(230),d=a(228),f=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)((function(){fetch("http://country.io/names.json").then((function(e){return e.json()})).then((function(e){console.log(e),l(Object.values(e)),console.log(a)}))}),[]),c.a.createElement(n.Fragment,null,c.a.createElement("div",{id:"search-menu",expand:"lg"},c.a.createElement("a",{className:"navbar-brand",href:"/"},c.a.createElement(m.a,{width:"50px",src:p.a})),c.a.createElement("div",{style:{width:300}},c.a.createElement(h.a,{onChange:function(e){console.log(e.target.innerText),window.location.href="/Voyager/#/overview/".concat(e.target.innerText)},id:"countryInput",options:a,renderInput:function(e){return c.a.createElement(d.a,Object.assign({},e,{label:"Choose country",margin:"normal"}))}}))))},E=a(93),g=a.n(E),b=a(94),j=a.n(b),v=a(95),O=a.n(v),y=a(96),x=a.n(y),w=a(97),k=a.n(w),S=[{id:"1",title:"Belgium",img:g.a},{id:"2",title:"Brazil",img:j.a},{id:"3",title:"Ukraine",img:O.a},{id:"4",title:"France",img:x.a},{id:"5",title:"Japan",img:k.a}],N=a(18),C=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(N.h,{id:"carousel-container"},c.a.createElement(N.c,{interval:5e3,activeItem:1,length:5,showControls:!0,showIndicators:!1,onHoverStop:!1,className:"z-depth-1"},c.a.createElement(N.e,null,S.map((function(e,t){return c.a.createElement(N.f,{itemId:e.id,key:t},c.a.createElement(N.t,null,c.a.createElement("img",{className:"d-block w-100 img-responsive",src:e.img,alt:e.title})),c.a.createElement(N.d,null,c.a.createElement("h1",{className:"h1-responsive"},e.title),c.a.createElement("a",{type:"button",href:"/Voyager/#/overview/".concat(e.title)},"discover")))}))))))},I=function(){return c.a.createElement(n.Fragment,null,c.a.createElement(f,null),c.a.createElement(C,null))},A=function(e){var t=e.country,a=Object(n.useState)(!1),l=Object(s.a)(a,2),r=l[0],o=l[1];return c.a.createElement(n.Fragment,null,c.a.createElement(N.m,{color:"info-color-dark",dark:!0,expand:"md"},c.a.createElement(N.n,{href:"/"},c.a.createElement(m.a,{width:"50px",src:p.a})),c.a.createElement(N.p,{onClick:function(){o(!r)}}),c.a.createElement(N.g,{id:"navbarCollapse3",isOpen:r,navbar:!0},c.a.createElement(N.o,{left:!0},c.a.createElement(N.k,null,c.a.createElement("div",{style:{width:300},className:"autocomplete"},c.a.createElement("h2",{style:{color:"white"}},t.charAt(0).toUpperCase()+t.slice(1))))),c.a.createElement(N.o,{right:!0},c.a.createElement(N.k,null,c.a.createElement(N.l,{className:"mr-4",to:"/"},"Home"))))))},z=a(138),F=a(137);var P=Object(F.a)((function(e){var t=e.setCity,a=e.capital,l=e.country,r=e.code,o=Object(n.useState)(""),i=Object(s.a)(o,2),m=i[0],u=i[1],p=Object(n.useState)([]),h=Object(s.a)(p,2),d=h[0],f=h[1],E=Object(n.useState)([]),g=Object(s.a)(E,2),b=g[0],j=g[1],v=c.a.createRef(),O=l.charAt(0).toUpperCase()+l.slice(1),y=function(e){var t=e.target;t.scrollHeight-t.scrollTop===t.clientHeight&&v.current.scrollIntoView({behavior:"smooth",block:"start"})};Object(n.useEffect)((function(){fetch("https://raw.githubusercontent.com/russ666/all-countries-and-cities-json/master/countries.json").then((function(e){return e.json()})).then((function(e){var t=function(e){for(var t,a,n=e.length;0!==n;)a=Math.floor(Math.random()*n),t=e[n-=1],e[n]=e[a],e[a]=t;return e}(e[O]);f(t),j(t)}))}),[r]),Object(n.useLayoutEffect)((function(){t(a),u(a)}),[a]);return c.a.createElement("div",{style:{padding:"20px 0",textAlign:"center"}},c.a.createElement("input",{style:{border:"3px solid rgb(0 130 156)",borderRadius:"5px"},placeholder:"Search city",onInput:function(e){var t;t=e.target.value?b.filter((function(t){return t.toUpperCase().includes(e.target.value.toUpperCase())})):b,f(t)}}),c.a.createElement("div",{className:"timeline"},c.a.createElement("ul",null,[a].concat(Object(z.a)(d)).map((function(e,a){return c.a.createElement("li",{key:a,ref:v,onScroll:y},c.a.createElement("a",{key:a,style:{fontSize:m===e?"20px":"16px",fontWeight:m===e?"bold":"normal",":hover":{fontSize:"20px"}},onClick:function(){t(e),u(e)}},e))})))))})),B=function(e){var t=e.data;return c.a.createElement("nav",{className:"topbar"},c.a.createElement("ul",null,c.a.createElement("li",null,t.subregion,c.a.createElement("small",{className:"text-muted"},"Region")),c.a.createElement("li",null,c.a.createElement("img",{src:t.flag,width:"40",height:"30",alt:" ",style:{border:"1px solid black"}}),c.a.createElement("small",{className:"text-muted"},"Flag")),c.a.createElement("li",null,(t.population/1e6).toFixed(1),c.a.createElement("small",{className:"text-muted"},"Population, million")),c.a.createElement("li",null,t.capital,c.a.createElement("small",{className:"text-muted"},"Capital")),c.a.createElement("li",null,c.a.createElement("p",null,t.currencies&&t.currencies[0].name," (",t.currencies&&t.currencies[0].symbol,")",c.a.createElement("small",{className:"text-muted"},"Local currency")))))},H=a(131),U="AIzaSyCxvj0dlBrHRWv08M30tGEd1UzOSK-Gxw0",_=function(e){var t=e.city,a=e.setPlaceId,l=e.center,r=e.setCenter,o=Object(n.useState)(2),i=Object(s.a)(o,2),m=i[0],u=i[1],p=Object(n.useState)(!1),h=Object(s.a)(p,2),d=h[0],f=h[1];return Object(n.useEffect)((function(){t&&(f(!0),fetch("".concat("https://maps.googleapis.com/maps/api/place/textsearch","/json?query=").concat(t,"&language=en&key=").concat(U),{method:"GET",mode:"no-cors"}).then((function(e){return e.json()})).then((function(e){e&&e.results[0]&&r(e.results[0].geometry.location),console.log(e),u(12),e.results[0]&&a(e.results[0].place_id),f(!1)})))}),[t]),c.a.createElement("div",{className:"map"},d?c.a.createElement("div",{style:{padding:"100px 0",textAlign:"center"}},c.a.createElement("iframe",{src:"https://i.stack.imgur.com/qq8AE.gif",width:"180",height:"180",frameBorder:"0",className:"giphy-embed"})):c.a.createElement(H.a,{bootstrapURLKeys:{key:U},center:l,defaultZoom:2,zoom:m}))},G=a(229);a(181);function R(e){var t=e.show,a=e.handleClose,l=e.photos,r=e.photo,o=e.keyAPI,i=e.photoIndex,m=e.PhotoAPI,u=Object(n.useState)(""),p=Object(s.a)(u,2),h=p[0],d=p[1],f=Object(n.useState)(i),E=Object(s.a)(f,2),g=E[0],b=E[1];function j(e){var t=l.length;b(e+g>=t?0:g+e<0?t-1:g+e)}return Object(n.useEffect)((function(){d("".concat(m,"?&key=").concat(o,"&photoreference=").concat(r.photo_reference,"&maxheight=1000&maxwidth=1000")),b(l.indexOf(r)),console.log(l.indexOf(r))}),[r]),Object(n.useEffect)((function(){console.log(l),l.length&&d("".concat(m,"?&key=").concat(o,"&photoreference=").concat(l[g].photo_reference,"&maxheight=1000&maxwidth=1000"))}),[g]),c.a.createElement(G.a,{size:"lg",centered:!0,dialogClassName:"modalFitWidth",show:t,onHide:a},c.a.createElement(G.a.Header,{closeButton:!0}),c.a.createElement(G.a.Body,null,c.a.createElement("div",{style:{height:"70vh",textAlign:"center"}},c.a.createElement("button",{className:"prev",onClick:function(){return j(-1)},style:{position:"absolute",left:"20px"}},"\u276e"),c.a.createElement("button",{className:"next",onClick:function(){return j(1)},style:{position:"absolute",right:"20px"}},"\u276f"),c.a.createElement("img",{style:{width:"100%",height:"100%",objectFit:"cover"},src:h}))))}var M="AIzaSyCxvj0dlBrHRWv08M30tGEd1UzOSK-Gxw0",W=function(e){var t=e.placeId,a=e.center,l=Object(n.useState)([]),r=Object(s.a)(l,2),o=r[0],i=r[1],m=Object(n.useState)(null),u=Object(s.a)(m,2),p=u[0],h=u[1],d=Object(n.useState)(!1),f=Object(s.a)(d,2),E=f[0],g=f[1],b=Object(n.useState)(""),j=Object(s.a)(b,2),v=j[0],O=j[1],y=Object(n.useState)(""),x=Object(s.a)(y,2),w=x[0],k=x[1];return Object(n.useEffect)((function(){console.log(a),t&&(fetch("".concat("https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details","/json?key=").concat(M,"&place_id=").concat(t,"&fields=photos")).then((function(e){return e.json()})).then((function(e){i(e.result.photos),console.log(e.result.photos)})),fetch("https://api.openweathermap.org/data/2.5/weather?lat=".concat(a.lat,"&lon=").concat(a.lng,"&appid=98cb06cb2b40f453cd89033992ff765a&units=metric")).then((function(e){return e.json()})).then((function(e){h(e)})))}),[t]),c.a.createElement("div",{className:"weather"},c.a.createElement("div",{className:"photos"},c.a.createElement("p",null,"Photos of the city"),o?c.a.createElement("div",null,o.slice(0,9).map((function(e,t){return c.a.createElement("img",{style:{cursor:"pointer"},onClick:function(){g(!0),O(e),k(o.indexOf(e)),console.log(o.indexOf(e))},key:t,src:"".concat("https://maps.googleapis.com/maps/api/place/photo","?&key=").concat(M,"&photoreference=").concat(e.photo_reference,"&maxheight=100&maxwidth=100")})}))):c.a.createElement("img",{style:{height:"300px",width:"300px"},src:"https://vcunited.club/wp-content/uploads/2020/01/No-image-available-2.jpg"})),c.a.createElement(R,{show:E,handleClose:function(){return g(!1)},photo:v,photos:o,keyAPI:M,photoIndex:w,PhotoAPI:"https://maps.googleapis.com/maps/api/place/photo"}),c.a.createElement("div",{className:"forecast"},c.a.createElement("p",null,"Weather"),p?c.a.createElement("div",{className:"forecast-grid"},c.a.createElement("img",{src:"http://openweathermap.org/img/w/".concat(p.weather[0].icon,".png")}),c.a.createElement("p",null,Math.floor(p.main.temp),"\xb0C\u2002"),c.a.createElement("small",{className:"text-muted"},p.weather[0].description," ")):null))},J=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)(""),o=Object(s.a)(r,2),m=o[0],u=o[1],p=Object(n.useState)({}),h=Object(s.a)(p,2),d=h[0],f=h[1],E=Object(i.f)().country,g=Object(n.useState)({}),b=Object(s.a)(g,2),j=b[0],v=b[1],O=Object(n.useState)(""),y=Object(s.a)(O,2),x=y[0],w=y[1];return Object(n.useEffect)((function(){E&&fetch("https://restcountries.eu/rest/v2/name/".concat(E)).then((function(e){return e.json()})).then((function(e){v(e[0]),w(e[0].alpha2Code),console.log(e),console.log(e[0].alpha2Code)}))}),[E]),c.a.createElement(n.Fragment,null,c.a.createElement(A,{country:E}),c.a.createElement("div",{className:"discover-wrapper"},c.a.createElement(B,{data:j}),c.a.createElement(P,{setCity:l,capital:j.capital,country:E,code:x}),c.a.createElement(_,{city:a,setPlaceId:u,center:d,setCenter:f}),c.a.createElement(W,{placeId:m,center:d})))};var T=function(){return c.a.createElement(o.a,null,c.a.createElement("div",{className:"main-container"},c.a.createElement(i.c,null,c.a.createElement(i.a,{exact:!0,path:"/"},c.a.createElement(I,null)," "),c.a.createElement(i.a,{path:"/overview/:country"},c.a.createElement(J,null)," "))))};a(182),a(183),a(184),a(185);r.a.render(c.a.createElement(T,null),document.getElementById("root"))},54:function(e,t,a){e.exports=a.p+"static/media/globe_PNG62.79f9e07e.png"},93:function(e,t,a){e.exports=a.p+"static/media/brussels-1920.935e4756.jpg"},94:function(e,t,a){e.exports=a.p+"static/media/Brazil.4987e8ac.jpg"},95:function(e,t,a){e.exports=a.p+"static/media/ukraine-kyiv_1920.b9c55795.jpg"},96:function(e,t,a){e.exports=a.p+"static/media/France.96d56c45.jpg"},97:function(e,t,a){e.exports=a.p+"static/media/Japan_1920.8fdbb3a7.jpg"}},[[147,1,2]]]);
//# sourceMappingURL=main.102671e7.chunk.js.map