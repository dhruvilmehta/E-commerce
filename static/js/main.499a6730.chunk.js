(this["webpackJsonpprojectx-web"]=this["webpackJsonpprojectx-web"]||[]).push([[0],{10:function(e,t,o){},12:function(e,t,o){"use strict";o.r(t);var n=o(1),r=o.n(n),c=o(3),a=o.n(c),s=(o(9),o.p+"static/media/logo.6ce24c58.svg"),i=(o(10),o(0));var d=function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsxs)("header",{className:"App-header",children:[Object(i.jsx)("img",{src:s,className:"App-logo",alt:"logo"}),Object(i.jsxs)("p",{children:["Edit ",Object(i.jsx)("code",{children:"src/App.js"})," and save to reload."]}),Object(i.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"})]})})},l=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,13)).then((function(t){var o=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,a=t.getTTFB;o(e),n(e),r(e),c(e),a(e)}))},u=o(2);function b(e,t,o,n){var r;n&&(r=JSON.stringify(n));var c=localStorage.getItem("token");console.log("Token Passing ",c);var a=new XMLHttpRequest,s="https://projectxweb1.herokuapp.com/api".concat(t);console.log(s,"URL"),a.responseType="json";var i=function(e){var t=null;if(document.cookie&&""!==document.cookie)for(var o=document.cookie.split(";"),n=0;n<o.length;n++){var r=o[n].trim();if(r.substring(0,e.length+1)===e+"="){t=decodeURIComponent(r.substring(e.length+1));break}}return t}("csrftoken");a.open(e,s),a.setRequestHeader("Content-Type","application/json"),c&&a.setRequestHeader("Authorization","Token ".concat(c)),i&&(a.setRequestHeader("X-Requested-With","XMLHttpRequest"),a.setRequestHeader("X-CSRFToken",i)),a.onload=function(){if(403===a.status){var e=a.response.detail;console.log(e),"Authentication credentials were not provided."===e&&-1===window.location.href.indexOf("login")&&(window.location.href="/login/")}o(a.response,a.status)},a.onerror=function(e){console.log("error",e),o({message:"The request was an error"},400)},a.send(r)}function j(e,t){var o;e&&(o=JSON.stringify(e));var n=new XMLHttpRequest;n.responseType="json";var r=function(e){var t=null;if(document.cookie&&""!==document.cookie)for(var o=document.cookie.split(";"),n=0;n<o.length;n++){var r=o[n].trim();if(r.substring(0,e.length+1)===e+"="){t=decodeURIComponent(r.substring(e.length+1));break}}return t}("csrftoken");n.open("POST","https://projectxweb1.herokuapp.com/auth/"),n.setRequestHeader("Content-Type","application/json"),r&&(n.setRequestHeader("X-Requested-With","XMLHttpRequest"),n.setRequestHeader("X-CSRFToken",r)),n.onload=function(){if(403===n.status){var e=n.response.detail;console.log(e)}t(n.response,n.status)},n.onerror=function(e){console.log("error",e),t({message:"The request was an error"},400)},n.send(o)}function f(e,t,o){b("POST","/books/cart/",o,{action:t,id:e})}function m(e){b("GET","/books/cart/",e)}function O(e){var t=e.book,o=e.index,r=e.isDetail,c=e.inCart,a=e.onRemove,s=e.orderid,d=e.checkout,l=Object(n.useState)(e.buttonname?e.buttonname:null),j=Object(u.a)(l,2),m=j[0],O=j[1],g=Object(n.useState)(e.className?e.className:null),p=Object(u.a)(g,2),v=p[0],h=p[1],k=function(e,t){console.log("Add To Cart ",e,t),404===t&&"Book Not Available"===e.detail&&alert("Book Not Available"),201===t&&("Add To Cart"===m&&(O("Remove"),h("btn btn-danger")),"Buy"===m?window.location.href="/checkout/":"Remove"===m&&(!0===c||!0===d?(console.log("Remove"),a(o)):(O("Add To Cart"),h("btn btn-primary"))))},x=function(e,t){console.log(e,t),"Book Not Delivered"===e.detail?alert("Book Not Delivered"):(h("btn btn-secondary disabled"),O("Book Processing for Return"))};return Object(i.jsx)("button",{className:v,onClick:function(e){var o=m;e.preventDefault(),e.stopPropagation(),"Add To Cart"===m?(o="Add",f(t.id,o,k)):"Remove"===m?(o="Remove",f(t.id,o,k)):"Buy"===m?r?(o="Add",f(t.id,o,k)):window.location.href="".concat(t.name,"/detail/"):"Buy All"===m?window.location.href="/checkout/":"Return Book"===m&&(!function(e,t){var o={action:"Return",detail:[{orderid:e}]};console.log(o,"Data"),b("POST","/books/owned/",t,o)}(s,x),console.log(s,"order ID OnClick"))},children:m})}function g(e){var t=e.book,o=e.index,r=e.className,c=e.isDetail,a=e.inCart,s=e.onRemove,d=e.owned,l=e.expiry,b=e.orderid,j=e.ordered,f=e.deliveryDate,g=e.delivered,p=e.checkout,v=Object(n.useState)(!1===g?"btn btn-danger disabled":d?l?"btn btn-secondary disabled":"btn btn-danger":j?"btn btn-danger disabled":"btn btn-primary"),h=Object(u.a)(v,2),k=h[0],x=h[1],y=Object(n.useState)(!1===g?"Book Not Delivered Yet":d?l?"Book Processing for Return":"Return Book":j?"Estimated Delivery Date : ".concat(f):"Add To Cart"),R=Object(u.a)(y,2),S=R[0],w=R[1],C=Object(n.useState)(!0),E=Object(u.a)(C,2),B=E[0],T=E[1],N=function(e,o){403===o||e.usercart_set.forEach((function(e){e.book.id===t.id&&(x("btn btn-danger"),w("Remove"))}));T(!1)};return Object(n.useEffect)((function(){m(N)}),[]),!0===B?"Loading":Object(i.jsx)("div",{className:"".concat(r," mt-3"),children:Object(i.jsxs)("div",{class:"card h-100",style:{width:"18rem"},children:[Object(i.jsx)("img",{class:"card-img-top",src:"...",alt:"Card image cap"}),Object(i.jsxs)("div",{class:"card-body",children:[Object(i.jsx)("h5",{class:"card-title",children:t.name}),Object(i.jsxs)("p",{class:"card-text",children:["Rs ",t.price," Category: ",t.type]}),!d&&!j&&Object(i.jsx)(O,{buttonname:"Buy",className:"btn btn-primary",book:t,isDetail:c}),Object(i.jsx)(O,{buttonname:S,className:k,checkout:p,book:t,inCart:a,onRemove:function(e){s(e)},index:o,orderid:b})]})]})})}function p(e,t){t?b("POST","/profile/",e,t):b("GET","/profile/",e)}function v(e){var t=Object(n.useState)(),o=Object(u.a)(t,2),r=o[0],c=o[1],a=Object(n.useState)(),s=Object(u.a)(a,2),d=s[0],l=s[1],b=Object(n.useState)(!0),j=Object(u.a)(b,2),f=j[0],m=j[1],O={address:r,mobilenumber:d},g=function(e,t){console.log("Profile ",e,t),200===t?(c(e.address),l(e.mobilenumber),m(!1)):alert("Profile Error")};Object(n.useEffect)((function(){p(g),O={address:r,mobilenumber:d}}),[]);var v=function(e){var t=e.target.name;"address"===t?(c(e.target.value),e.target.className="form-control"):"mobilenumber"===t&&(l(e.target.value),e.target.className="form-control")};return!0===f?"Loading":Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:"Profile"}),Object(i.jsx)("label",{for:"address",children:"Address"}),Object(i.jsx)("input",{type:"text",class:"form-control text-muted",id:"address",value:r,onChange:v,name:"address"}),Object(i.jsx)("label",{for:"mobilenumber",children:"Mobile Number"}),Object(i.jsx)("input",{type:"number",class:"form-control text-muted",id:"mobilenumber",value:d,onChange:v,name:"mobilenumber"}),Object(i.jsx)("button",{className:"btn btn-secondary",onClick:function(){p(g,O)},children:"Save"})]})}function h(e,t){var o;e&&(o=JSON.stringify(e));var n=new XMLHttpRequest;n.responseType="json";var r=function(e){var t=null;if(document.cookie&&""!==document.cookie)for(var o=document.cookie.split(";"),n=0;n<o.length;n++){var r=o[n].trim();if(r.substring(0,e.length+1)===e+"="){t=decodeURIComponent(r.substring(e.length+1));break}}return t}("csrftoken");n.open("POST","https://projectxweb1.herokuapp.com/api/books/users"),n.setRequestHeader("Content-Type","application/json"),r&&(n.setRequestHeader("X-Requested-With","XMLHttpRequest"),n.setRequestHeader("X-CSRFToken",r)),n.onload=function(){if(403===n.status){var e=n.response.detail;console.log(e)}t(n.response,n.status)},n.onerror=function(e){console.log("error",e),t({message:"The request was an error"},400)},n.send(o)}function k(e){var t=Object(n.useState)(""),o=Object(u.a)(t,2),r=o[0],c=o[1],a=Object(n.useState)(""),s=Object(u.a)(a,2),d=s[0],l=s[1],b={username:r,password:d},f=function(e,t){400===t?alert("Wrong Credentials"):200===t&&(console.log(e.token,t),localStorage.setItem("token","".concat(e.token)),window.location.href="/")},m=function(e,t){console.log("Register ",e,t),200===t&&j(b,f),"A user with that username already exists."===e.username[0]&&alert("User Already Exists")},O=function(e){"username"===e.target.name?c(e.target.value):l(e.target.value)};return Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:"Login User Form"}),Object(i.jsx)("label",{for:"exampleInputEmail1",children:"Username"}),Object(i.jsx)("input",{type:"text",class:"form-control ",placeholder:"Username",name:"username",value:b.username,onChange:O}),Object(i.jsx)("label",{for:"exampleInputPassword1",children:"Password"}),Object(i.jsx)("input",{type:"password",class:"form-control ",placeholder:"Password",name:"password",value:b.password,onChange:O}),Object(i.jsx)("button",{onClick:function(e){j(b,f)},className:"btn btn-primary",children:"Login"}),Object(i.jsx)("button",{onClick:function(e){h(b,m)},className:"btn btn-secondary",children:"Register"})]})}var x=document.getElementById("root");x&&a.a.render(Object(i.jsx)(d,{}),x);var y=r.a.createElement,R=document.getElementById("books");R&&a.a.render(y((function(e){var t=Object(n.useState)([]),o=Object(u.a)(t,2),c=o[0],a=o[1],s=Object(n.useState)(!0),d=Object(u.a)(s,2),l=d[0],j=d[1],f=function(e,t){console.log("response",e,t),a(e),j(!1)};return Object(n.useEffect)((function(){b("GET","/books/",f)}),[]),console.log("Books ",c),!0===l?"Loading":Object(i.jsx)(r.a.Fragment,{children:c.map((function(e,t){return Object(i.jsx)(g,{book:e},t)}))})}),R.dataset),R);var S=document.getElementById("bookdetail");S&&a.a.render(y((function(e){var t=Object(n.useState)(null),o=Object(u.a)(t,2),r=o[0],c=o[1],a=Object(n.useState)(!0),s=Object(u.a)(a,2),d=s[0],l=s[1],j=function(e,t){console.log("Book Detail Lookup",e,t),c(e[0]),l(!1)};return Object(n.useEffect)((function(){var t,o;t=e.bookname,o=j,b("GET","/books/".concat(t,"/"),o)}),[]),!0===d?"Loading":Object(i.jsx)(g,{book:r,isDetail:!0})}),S.dataset),S);var w=document.getElementById("usercart");w&&a.a.render(y((function(e){var t=Object(n.useState)([]),o=Object(u.a)(t,2),r=o[0],c=o[1],a=Object(n.useState)(!0),s=Object(u.a)(a,2),d=s[0],l=s[1],b=0;Object(n.useEffect)((function(){m(j)}),[]);var j=function(e,t){console.log("Cart Lookup ",e.usercart_set,t),c(e.usercart_set),l(!1)},f=function(e){c(r.filter((function(t){return r.indexOf(t)!==e})))},p=r.map((function(e,t){return console.log(e.book.price),b+=e.book.price,e.book.id}));return d?"":0===p.length?Object(i.jsx)("div",{className:"text-muted",children:"Cart Is Empty"}):Object(i.jsxs)("div",{children:[r.map((function(e,t){return Object(i.jsx)(g,{book:e.book,index:t,inCart:!0,onRemove:f},t)})),0!==p.length&&Object(i.jsx)(O,{buttonname:"Buy All",className:"btn btn-primary",cartbooks:p}),0!==p.length&&Object(i.jsxs)("div",{children:["Total Cost ",b]})]})}),w.dataset),w);var C=document.getElementById("ownedBooks");C&&a.a.render(y((function(e){var t=Object(n.useState)([]),o=Object(u.a)(t,2),r=o[0],c=o[1],a=Object(n.useState)(!0),s=Object(u.a)(a,2),d=s[0],l=s[1];Object(n.useEffect)((function(){b("GET","/books/owned/",j),l(!1)}),[]);var j=function(e,t){c(e)};return d?"Loading":Object(i.jsxs)("div",{children:[" ",r.map((function(e,t){return Object(i.jsxs)("div",{className:"border border-secondary mt-3 ",children:[Object(i.jsxs)("div",{children:["Order Id : ",e.orderid]}),Object(i.jsx)(g,{book:e.book,owned:!0,expiry:e.expiry,orderid:e.orderid,delivered:e.delivered},t),Object(i.jsxs)("div",{children:["Order Duration :",e.duration]}),Object(i.jsxs)("div",{children:["OwnerFrom : ",e.ownerfrom]}),Object(i.jsxs)("div",{children:["Book Expiry : ",e.expiry]}),Object(i.jsxs)("div",{children:["Book Return Amount : ",e.returnamount]}),Object(i.jsxs)("div",{children:["Book Return Date : ",e.returndate]})]})}))]})}),C.dataset),C);var E=document.getElementById("orderedBooks");E&&a.a.render(y((function(e){var t=Object(n.useState)([]),o=Object(u.a)(t,2),r=o[0],c=o[1],a=Object(n.useState)(!0),s=Object(u.a)(a,2),d=s[0],l=s[1],j=function(e,t){c(e),l(!1)};return Object(n.useEffect)((function(){b("GET","/books/ordered/",j)}),[]),d?"Loading":Object(i.jsx)("div",{children:r.map((function(e,t){return Object(i.jsxs)("div",{className:"border border-secondary",children:[Object(i.jsxs)("div",{children:["Order ID : ",e.id]}),Object(i.jsx)(g,{book:e.book,ordered:!0,deliveryDate:e.deliveryDate},t),Object(i.jsxs)("div",{children:["Delivery Date : ",e.deliveryDate," "]})]})}))})}),E.dataset),E);var B=document.getElementById("login");B&&a.a.render(y((function(e){var t=Object(n.useState)(""),o=Object(u.a)(t,2),r=(o[0],o[1]);return Object(i.jsx)(k,{userLogin:function(e){console.log(e),r(e)}})}),B.dataset),B);var T=document.getElementById("logout");T&&a.a.render(y((function(e){var t=Object(n.useState)("Are You Sure You Want to Logout ? "),o=Object(u.a)(t,2),r=o[0],c=o[1],a=Object(n.useState)(!0),s=Object(u.a)(a,2),d=s[0],l=s[1];return Object(n.useEffect)((function(){var e=localStorage.getItem("token");e?(l(!0),console.log(e,"TOKEN")):l(!1)}),[]),Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{children:r}),!0===d&&Object(i.jsx)("button",{onClick:function(){localStorage.setItem("token",""),c("Log Out Successfull"),window.location.href="/",l(!1)},className:"btn btn-danger",children:"Logout"})]})}),T.dataset),T);var N=document.getElementById("profile");N&&a.a.render(y(v,N.dataset),N);var L=document.getElementById("checkout");L&&a.a.render(y((function(e){var t=Object(n.useState)([]),o=Object(u.a)(t,2),r=o[0],c=o[1],a=Object(n.useState)(!0),s=Object(u.a)(a,2),d=s[0],l=s[1],j=0,f=function(e,t){201===t?c(e.usercart_set):alert("CheckOut Component Error "),l(!1)},O=function(e){c(r.filter((function(t){return r.indexOf(t)!==e})))};Object(n.useEffect)((function(){m(f)}),[]);var p=function(e,t){console.log("Cart Buy All ",e,t),201===t&&(window.location.href="/orders/"),406===t?alert("Profile Not Completed"):alert("Checkout Cart Buy Error ")},h=r.map((function(e,t){return j+=e.book.price,e.book.id}));return!0===d?"Loading":Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{className:"text-warning",children:"Note: Profile Should Be Completed Before Ordering"}),Object(i.jsx)(v,{}),Object(i.jsx)("div",{children:r.map((function(e,t){return Object(i.jsx)(g,{book:e.book,index:t,checkout:!0,onRemove:O},t)}))}),Object(i.jsxs)("div",{children:["Total Cost : ",j]}),Object(i.jsx)("button",{className:"btn btn-secondary",onClick:function(){!function(e,t){var o=[];e.forEach((function(e){o.push({id:e})})),console.log(o," BooksArray"),b("POST","/books/cart/",t,{action:"Buy",detail:o})}(h,p)},children:"Place Order"})]})}),L.dataset),L);var A=document.getElementById("search");A&&a.a.render(y((function(e){var t=e.query,o=Object(n.useState)([]),r=Object(u.a)(o,2),c=r[0],a=r[1],s=Object(n.useState)(!0),d=Object(u.a)(s,2),l=d[0],j=d[1],f=function(e,t){console.log(e,t),a(e),j(!1)};return console.log("search results ",c),Object(n.useEffect)((function(){!function(e,t){b("GET","/books/?query=".concat(e),t)}(t,f)}),[]),!0===l?"Loading":Object(i.jsx)("div",{children:c.map((function(e,t){return Object(i.jsx)(g,{book:e},t)}))})}),A.dataset),A),l()},9:function(e,t,o){}},[[12,1,2]]]);
//# sourceMappingURL=main.499a6730.chunk.js.map