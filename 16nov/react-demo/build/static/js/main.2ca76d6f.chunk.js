(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,a,t){},15:function(e,a,t){},17:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(7),l=t.n(c),i=(t(13),t(1)),s=t(2),m=t(4),o=t(3),u=t(5),d=(t(15),function(e){function a(){return Object(i.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("header",null,r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"logo"},"Dopos"),r.a.createElement("div",{className:"nav"},r.a.createElement("nav",{className:"nav-desc"},r.a.createElement("a",{href:"#"},"HOME"),r.a.createElement("a",{href:"#"},"PRODUCTS"),r.a.createElement("a",{href:"#"},"AWARDS"),r.a.createElement("a",{href:"#"},"CONTACT US"))),r.a.createElement("div",{className:"log"},r.a.createElement("div",{className:"log-in"},"LOG IN "),r.a.createElement("div",{className:"log-pic"},r.a.createElement("i",{className:"far fa-user-circle"})))))}}]),a}(n.Component)),E=function(e){var a={backgroundImage:"url(".concat(e.src,")")};return r.a.createElement("div",{id:e.id,className:e.class,style:a})},f=function(e){return r.a.createElement("div",{className:e.class},e.text,r.a.createElement("i",{className:e.iconClass}))},v=function(e){function a(){return Object(i.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("main",null,r.a.createElement("div",{className:"main-container"},r.a.createElement("div",{className:"main-title"},"Creative Design & Advertising"),r.a.createElement("div",{className:"main-text"},"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi impedit omnis nobis a?"),r.a.createElement(f,{class:"main-button",text:"LEARN MORE",iconClass:"fas fa-angle-right"}),r.a.createElement("div",{className:"main-slider"},r.a.createElement("li",{className:"slider-dot"}),r.a.createElement("li",{className:"slider-dot"}),r.a.createElement("li",{className:"slider-dot"}),r.a.createElement("li",{className:"slider-dot"}))),r.a.createElement(E,{class:"main-picture",src:"/pictures/characters.jpg"}))}}]),a}(n.Component),p=function(e){function a(){return Object(i.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("article",null,r.a.createElement("div",{className:"article-container"},r.a.createElement("div",{className:"article-title"},r.a.createElement("h1",null,"Design Solutions For Any Media."),r.a.createElement("div",{className:"article-studio"},"S T U D I O")),r.a.createElement("div",{className:"article-graphic-parent"},r.a.createElement(E,{class:"article-graphic",src:"/pictures/graphic.jpg"})),r.a.createElement("div",{className:"article-web-parent"},r.a.createElement(E,{class:"article-web",src:"/pictures/web.jpg"})),r.a.createElement("div",{className:"article-post"},r.a.createElement("div",{className:"line"}),r.a.createElement("div",{className:"article-post-container"},"Suspendisse eget est at bendum dui elit, aliquam vel lacus a felis."),r.a.createElement(f,{class:"article-post-button",text:"LEARN MORE"})),r.a.createElement("div",{className:"article-orange-parent"},r.a.createElement(E,{class:"article-orange",src:"/pictures/orange.jpeg"})),r.a.createElement("div",{className:"article-social-parent"},r.a.createElement(E,{class:"article-social",src:"/pictures/social.jpg"}))))}}]),a}(n.Component),h=function(e){function a(){return Object(i.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("article",null,r.a.createElement("div",{className:"mid-article"},r.a.createElement("div",{className:"mid-article-left"},r.a.createElement("h1",null,"Making Ideas Come to Life."),r.a.createElement("div",{className:"mid-article-featured"},"F E A T U R E D")),r.a.createElement("div",{className:"mid-article-right"},r.a.createElement("div",{className:"mid-article-container"},r.a.createElement("div",{className:"mid-article-right-calendar"},"01"),r.a.createElement("div",{className:"mid-article-right-slash"},"/"),r.a.createElement("div",{className:"mid-article-right-second"},"09")))))}}]),a}(n.Component),b=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(m.a)(this,Object(o.a)(a).call(this,e))).goToPrevSlide=function(){0!==t.state.currentIndex&&t.setState(function(e){return{currentIndex:e.currentIndex-1,translateValue:e.translateValue+t.slideWidth()}})},t.goToNextSlide=function(){if(t.state.currentIndex===t.state.images.length-1)return t.setState({currentIndex:0,translateValue:0});t.setState(function(e){return{currentIndex:e.currentIndex+1,translateValue:e.translateValue+-t.slideWidth()}})},t.slideWidth=function(){return document.querySelector(".slide").clientWidth},t.state={images:["/pictures/slider.jpg","/pictures/orange.jpeg","https://files.slack.com/files-pri/TAHE5KEM9-FE52KMPQR/web_site_design_portfolio_character_-_copy__4_.jpg","https://media-cdn.tripadvisor.com/media/photo-s/12/f8/66/ce/paris-in-one-day-sightseeing.jpg"],currentIndex:0,translateValue:0},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"slider-parent"},r.a.createElement(N,{goToPrevSlide:this.goToPrevSlide}),r.a.createElement(O,{goToNextSlide:this.goToNextSlide}),r.a.createElement("div",{className:"slider"},r.a.createElement("div",{className:"slider-wrapper",style:{transform:"translateX(".concat(this.state.translateValue,"px)"),transition:"transform ease-out 1s"}},this.state.images.map(function(e,a){return r.a.createElement(g,{key:a,image:e})}))))}}]),a}(n.Component),g=function(e){var a=e.image,t={backgroundImage:"url(".concat(a,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"70% 50%"};return r.a.createElement("div",{className:"slide",style:t})},N=function(e){return r.a.createElement("div",{className:"backArrow arrow",onClick:e.goToPrevSlide},r.a.createElement("i",{className:"fa fa-arrow-left fa-2x","aria-hidden":"true"}))},O=function(e){return r.a.createElement("div",{className:"nextArrow arrow",onClick:e.goToNextSlide},r.a.createElement("i",{className:"fa fa-arrow-right fa-2x","aria-hidden":"true"}))},j=function(e){function a(){return Object(i.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("article",null,r.a.createElement("div",{className:"article-end-container"},r.a.createElement("div",{className:"article-left"},r.a.createElement("h2",null,"Curabitur nisi nisi, vairus ac lectus sed, eleifend ultrices nibh nam sit amet eros mauris. Cras non ligula sed metus aliquet mollis nec sed tellus."),r.a.createElement(f,{class:"article-end-button",text:"Case Study"})),r.a.createElement("div",{className:"article-right"},r.a.createElement("div",{className:"article-category"},r.a.createElement("div",{className:"article-category-title"},"CATEGORY"),r.a.createElement("div",{className:"article-design"},"Design & Branding"),r.a.createElement("div",{className:"article-line"})),r.a.createElement("div",{className:"article-client"},r.a.createElement("div",{className:"article-client-title"},"CLIENT"),r.a.createElement("div",{className:"article-cusco"},"Cusco Barista"),r.a.createElement("div",{className:"article-line"})))))}}]),a}(n.Component),y=function(e){return r.a.createElement("i",{className:e.class}," ")},C=function(e){function a(){return Object(i.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("section",null,r.a.createElement("div",{className:"our-clients"},"Our Clients"),r.a.createElement(y,{class:"fab fa-react"}),r.a.createElement(y,{class:"fab fa-firefox"}),r.a.createElement(y,{class:"fab fa-js"}),r.a.createElement("div",{className:"view-all"},"VIEW ALL"))}}]),a}(n.Component),w=function(e){function a(){return Object(i.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("footer",null,r.a.createElement("div",{className:"divide-line"}),r.a.createElement("div",{class:"footer-wrapper"},r.a.createElement("div",{class:"logo"},"Dopos"),r.a.createElement("div",{class:"navigation"},r.a.createElement("nav",{class:"nav-desc"},r.a.createElement("a",{href:"#"},"HOME"),r.a.createElement("a",{href:"#"},"PRODUCTS"),r.a.createElement("a",{href:"#"},"AWARDS"),r.a.createElement("a",{href:"#"},"CONTACT US"))),r.a.createElement("div",{class:"footer-icons"},r.a.createElement("i",{class:"fab fa-facebook-f"}),r.a.createElement("i",{class:"fab fa-twitter"}),r.a.createElement("i",{class:"fab fa-instagram"}),r.a.createElement("i",{class:"fab fa-vimeo-v"}))))}}]),a}(n.Component),k=function(e){function a(){return Object(i.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d,null),r.a.createElement(v,null),r.a.createElement(p,null),r.a.createElement(h,null),r.a.createElement(b,null),r.a.createElement(j,null),r.a.createElement(C,null),r.a.createElement(w,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,a,t){e.exports=t(17)}},[[8,2,1]]]);
//# sourceMappingURL=main.2ca76d6f.chunk.js.map