(this.webpackJsonpvauxdrinkv2=this.webpackJsonpvauxdrinkv2||[]).push([[0],{10:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var c=n(11),s=n(12),a=n(14),r=n(13),i=n(1),l=n.n(i),j=n(8),o=n.n(j),d=n(4),b=n(2),h=n(16),m=(n(10),n(0));function x(e){return document.getElementById(e)}function u(){x("toggleMenu-delivery").click();var e=x("toggleMenu-delivery").checked;console.log(e),e?(x("text-delivery").style.display="none",x("form-delivery").style.display="block"):x("menu-nav").style.display="none"}function O(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("span",{className:"over-text over-text-top",children:"SHOP"}),Object(m.jsx)("span",{className:"over-text over-text-bottom",children:"DRINKS"})]})}function v(e){return Object(m.jsxs)("div",{className:"card",children:[Object(m.jsx)("img",{className:"card-image",src:e.image}),Object(m.jsx)("span",{className:"card-title card-title-main",children:e.main}),Object(m.jsx)("span",{className:"card-title card-title-sub",children:e.sub})]})}function p(){return Object(m.jsxs)("div",{className:"panel-delivery",children:[Object(m.jsx)("input",{type:"checkbox",id:"toggleMenu-delivery",className:"toggleMenu-delivery",name:"toggleMenu"}),Object(m.jsx)("div",{id:"form-delivery",className:"form-delivery",children:Object(m.jsx)(g,{})}),Object(m.jsx)("div",{id:"text-delivery",className:"text-delivery",onClick:u,children:Object(m.jsxs)("p",{children:["Get your brew delivered today. Free same day delivery is available tuesday-saturday, 7am to 8pm in San Francisco, Sacramento, Las Vegas, Houston, & Seattle. ",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),"Click me to check your location!"]})})]})}var g=function(e){Object(a.a)(n,e);var t=Object(r.a)(n);function n(e){var s;return Object(c.a)(this,n),(s=t.call(this,e)).changeHandler=function(e){var t=e.target.name,n=e.target.value,c="";"zip"===t&&(n.length>5&&(c=Object(m.jsx)("strong",{style:{color:"#eee"},children:"Please enter 5 digits only"})),""==n||Number(n)||(c=Object(m.jsx)("strong",{style:{color:"#eee"},children:"Zip code must be a number"}))),s.setState({errormessage:c}),s.setState(Object(h.a)({},t,n))},s.state={zip:null,errormessage:""},s}return Object(s.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("form",{children:[Object(m.jsx)("h3",{children:"Please enter your zip code:"}),Object(m.jsx)("input",{type:"text",name:"zip",onChange:this.changeHandler}),this.state.errormessage]})}}]),n}(l.a.Component);var f=function(){return Object(m.jsxs)("div",{className:"home",children:[Object(m.jsxs)(d.b,{to:"/drinks",children:[Object(m.jsx)(O,{}),Object(m.jsx)("video",{width:"auto",height:"auto",autoPlay:!0,loop:!0,muted:!0,playsInline:!0,children:Object(m.jsx)("source",{src:"/video/vid.mp4",type:"video/mp4"})})]}),Object(m.jsx)("div",{id:"home-clock",className:"home-clock"}),Object(m.jsx)("h3",{children:"A rich-flavored lager infused with slow roasted caramel malts. Enjoy a refreshing dark beer with a smooth, smooth taste."}),Object(m.jsxs)("div",{className:"flex-panels",children:[Object(m.jsx)(d.b,{to:"/drinks",children:Object(m.jsx)("div",{children:Object(m.jsx)(v,{main:"Indulge",sub:"Drinks",image:"./image/beer.jpg"})})}),Object(m.jsx)(d.b,{to:"/merch",children:Object(m.jsx)("div",{children:Object(m.jsx)(v,{main:"Warm",sub:"Wearables",image:"./image/hoodie.png"})})})]}),Object(m.jsx)(p,{})]})};function y(){return Object(m.jsxs)("div",{className:"about-text",children:[Object(m.jsx)("h3",{children:"It all started in a little brewhouse\u2026"}),Object(m.jsx)("br",{}),Object(m.jsxs)("p",{children:["In 1897, we started brewing in the small town of Ralston, CA.",Object(m.jsx)("br",{}),"Our founder T.J. Viallis, brewed the best beer in town and soon ",Object(m.jsx)("br",{}),"the whole state of California came to enjoy his work. Since then,",Object(m.jsx)("br",{}),"we have stopped at nothing to perfect our craft and deliver the ",Object(m.jsx)("br",{}),"freshest and most exquisite brew we can make."]}),Object(m.jsx)(d.b,{to:"/drinks",children:Object(m.jsxs)("div",{className:"to-drinks",children:[Object(m.jsx)("br",{}),"Stock up"]})})]})}var N=function(){return Object(m.jsxs)("div",{className:"about",children:[Object(m.jsx)("video",{width:"auto",height:"auto",autoPlay:!0,loop:!0,muted:!0,playsInline:!0,children:Object(m.jsx)("source",{src:"./video/vid.mp4",type:"video/mp4"})}),Object(m.jsx)(y,{})]})};function k(e){return Object(m.jsxs)("div",{className:"card-drink",children:[Object(m.jsx)("img",{src:e.image}),Object(m.jsxs)("div",{children:[e.name,Object(m.jsx)("br",{}),e.amount]})]})}function w(){return Object(m.jsx)("div",{className:"subheader",children:Object(m.jsx)("h3",{children:"\u2014 Beverages \u2014"})})}var C=function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)(w,{}),Object(m.jsx)("div",{className:"drinks-main",children:Object(m.jsxs)("div",{className:"flex-panels-drinks",children:[Object(m.jsx)(k,{amount:"500 ml",name:"Vaux Viallis",image:"./image/drink1_square.png"}),Object(m.jsx)(k,{amount:"500 ml",name:"Vaux Viallis Light",image:"./image/drink2_square.png"})]})})]})};function I(e){return Object(m.jsxs)("div",{className:"card-merch",children:[Object(m.jsx)("img",{src:e.image}),Object(m.jsxs)("div",{children:[e.name,Object(m.jsx)("br",{}),e.amount]})]})}function M(){return Object(m.jsx)("div",{className:"subheader",children:Object(m.jsx)("h3",{children:"\u2014 Merchandise \u2014"})})}var S=function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)(M,{}),Object(m.jsx)("div",{className:"merch-main",children:Object(m.jsxs)("div",{className:"flex-panels-merch",children:[Object(m.jsx)(I,{name:"Vaux Viallis Hoodie",image:"./image/hoodie2.png"}),Object(m.jsx)(I,{name:"More Apparel",image:"./image/hoodie2.png"})]})})]})},A=function(e){Object(a.a)(n,e);var t=Object(r.a)(n);function n(e){var s;return Object(c.a)(this,n),(s=t.call(this,e)).changeHandler=function(e){var t=e.target.name,n=e.target.value;s.setState(Object(h.a)({},t,n))},s.state={firstname:"",lastname:"",email:"",message:""},s}return Object(s.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("form",{children:[Object(m.jsx)("h2",{children:"Contact Us"}),Object(m.jsx)("br",{}),Object(m.jsx)("p",{children:"First Name:"}),Object(m.jsx)("input",{type:"text",name:"firstname"}),Object(m.jsx)("p",{children:"Last Name:"}),Object(m.jsx)("input",{type:"text",name:"lastname"}),Object(m.jsx)("p",{children:"Email:"}),Object(m.jsx)("input",{type:"text",name:"email"}),Object(m.jsx)("p",{children:"Message:"}),Object(m.jsx)("textarea",{value:this.state.message,onChange:this.changeHandler,rows:"5",name:"message"}),Object(m.jsx)("input",{type:"submit",value:"SEND"})]})}}]),n}(l.a.Component);var H=function(){return Object(m.jsx)("div",{className:"contact",children:Object(m.jsx)(A,{})})},T="MENU",L=null;function V(e){return document.getElementById(e)}function E(e){return Object(m.jsx)("div",{children:Object(m.jsxs)("h2",{className:"date-home",children:[Date().substr(0,4)," ",e.date.toLocaleTimeString()," Los Angeles, CA"]})})}function D(){V("toggleMenu").click();var e=V("toggleMenu").checked;console.log(e),e?(V("menu-nav").style.display="inline",V("btn-nav").innerHTML=" &#8212 ",function(){var e=V("menu-nav"),t=0;clearInterval(L),L=setInterval((function(){if(t>100)clearInterval(L),e.style.opacity=1;else{var n=(t+=.8)+60;e.style.opacity=.01*n}}),1)}()):(V("menu-nav").style.display="none",V("btn-nav").innerHTML=T)}function P(){return Object(m.jsxs)("div",{className:"header",children:[Object(m.jsx)("input",{type:"checkbox",id:"toggleMenu",className:"toggleMenu",name:"toggleMenu"}),Object(m.jsx)(R,{}),Object(m.jsx)("button",{id:"btn-nav",className:"btn-nav",onClick:D,children:T}),Object(m.jsx)("h1",{children:"VAUX VIALLIS"}),Object(m.jsx)("button",{className:"btn-cart",children:"CART (0)"})]})}function _(){return Object(m.jsxs)("div",{className:"ss-icons",children:[Object(m.jsx)("a",{className:"ig",href:"http://www.instagram.com/",target:"_blank",rel:"noopener",children:"IG"}),Object(m.jsx)("a",{className:"fb",href:"http://www.facebook.com/",target:"_blank",rel:"noopener",children:"FB"}),Object(m.jsx)("a",{className:"tw",href:"http://www.twitter.com/",target:"_blank",rel:"noopener",children:"TW"}),Object(m.jsx)("a",{className:"pin",href:"http://www.pinterest.com/",target:"_blank",rel:"noopener",children:"PIN"})]})}function B(){return Object(m.jsxs)("div",{className:"footer",children:[Object(m.jsx)(_,{}),Object(m.jsx)("p",{children:"Drink responsibly."}),Object(m.jsx)("p",{children:"JONATHAN TOLENTINO \xa9 2021"})]})}function R(){return Object(m.jsx)("div",{id:"menu-nav",className:"menu-nav",children:Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{onClick:D,children:Object(m.jsx)(d.b,{to:"/",children:"HOME"})}),Object(m.jsx)("li",{onClick:D,children:Object(m.jsx)(d.b,{to:"/drinks",children:"DRINKS"})}),Object(m.jsx)("li",{onClick:D,children:Object(m.jsx)(d.b,{to:"/merch",children:"MERCH"})}),Object(m.jsx)("li",{onClick:D,children:Object(m.jsx)(d.b,{to:"/about",children:"ABOUT"})}),Object(m.jsx)("li",{onClick:D,children:Object(m.jsx)(d.b,{to:"/contact",children:"CONTACT"})})]})})}setInterval((function(){V("home-clock")&&o.a.render(Object(m.jsx)(E,{date:new Date}),V("home-clock"))}),1e3);var z=function(e){Object(a.a)(n,e);var t=Object(r.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"wrapper",children:[Object(m.jsxs)(d.a,{children:[Object(m.jsx)(P,{}),Object(m.jsx)("div",{className:"spacer",children:" "}),Object(m.jsxs)(b.c,{children:[Object(m.jsx)(b.a,{path:"/",component:f,exact:!0}),Object(m.jsx)(b.a,{path:"/drinks",component:C,exact:!0}),Object(m.jsx)(b.a,{path:"/merch",component:S,exact:!0}),Object(m.jsx)(b.a,{path:"/about",component:N,exact:!0}),Object(m.jsx)(b.a,{path:"/contact",component:H,exact:!0})]})]}),Object(m.jsx)(B,{})]})}}]),n}(i.Component);o.a.render(Object(m.jsx)(z,{}),V("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.ed94e926.chunk.js.map