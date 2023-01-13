(this["webpackJsonpprojectx-web"]=this["webpackJsonpprojectx-web"]||[]).push([[0],{19:function(e,t,n){},20:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),s=n(6),r=n.n(s),a=(n(19),n.p,n(20),n(4)),i=n(2),l=n(11),d=n.n(l),j=n(13),b=n(3);function u(e,t,n,c){var o;c&&(o=JSON.stringify(c));var s=localStorage.getItem("token"),r=new XMLHttpRequest,a="https://".concat(window.location.host,"/api").concat(t);console.log("http://".concat(window.location.host)),console.log(t),console.log(a,"URL"),r.responseType="json";var i=function(e){var t=null;if(document.cookie&&""!==document.cookie)for(var n=document.cookie.split(";"),c=0;c<n.length;c++){var o=n[c].trim();if(o.substring(0,e.length+1)===e+"="){t=decodeURIComponent(o.substring(e.length+1));break}}return t}("csrftoken");r.open(e,a),r.setRequestHeader("Content-Type","application/json"),s&&r.setRequestHeader("Authorization","Token ".concat(s)),i&&(r.setRequestHeader("X-Requested-With","XMLHttpRequest"),r.setRequestHeader("X-CSRFToken",i)),r.onload=function(){if(403===r.status){var e=r.response.detail;console.log(e),"Authentication credentials were not provided."===e&&-1===window.location.href.indexOf("login")&&(window.location.href="/login/")}n(r.response,r.status)},r.onerror=function(e){console.log("error",e),n({message:"The request was an error"},400)},r.send(o)}function h(e,t){var n;e&&(n=JSON.stringify(e));var c=new XMLHttpRequest,o="localhost"===window.location.hostname?"http://127.0.0.1:8000/auth/":"".concat(window.location.hostname,"/auth/");console.log(o,"URL"),c.responseType="json";var s=function(e){var t=null;if(document.cookie&&""!==document.cookie)for(var n=document.cookie.split(";"),c=0;c<n.length;c++){var o=n[c].trim();if(o.substring(0,e.length+1)===e+"="){t=decodeURIComponent(o.substring(e.length+1));break}}return t}("csrftoken");c.open("POST",o),c.setRequestHeader("Content-Type","application/json"),s&&(c.setRequestHeader("X-Requested-With","XMLHttpRequest"),c.setRequestHeader("X-CSRFToken",s)),c.onload=function(){if(403===c.status){var e=c.response.detail;console.log(e)}t(c.response,c.status)},c.onerror=function(e){console.log("error",e),t({message:"The request was an error"},400)},c.send(n)}function O(e,t,n){u("POST","/books/cart/",n,{action:t,id:e})}function m(e){u("GET","/books/cart/",e)}function x(e,t){var n=[];e.forEach((function(e){n.push({id:e})})),console.log(n," BooksArray"),u("POST","/books/cart/",t,{action:"Buy",detail:n})}var f=n(0);function v(e){var t=e.book,n=e.index,o=e.isDetail,s=e.inCart,r=e.onRemove,a=e.orderid,l=e.checkout,d=Object(i.f)(),j=Object(c.useState)(e.buttonname?e.buttonname:null),h=Object(b.a)(j,2),m=h[0],x=h[1],v=Object(c.useState)(e.className?e.className:null),p=Object(b.a)(v,2),g=p[0],k=p[1],y=function(e,t){404===t&&"Book Not Available"===e.detail&&alert("Book Not Available"),400===t&&"Buy"===m&&d("/cart"),201===t&&("Add To Cart"===m&&(x("Remove"),k("btn btn-danger")),"Buy"===m?d("/cart"):"Remove"===m&&(!0===s||!0===l?r(n):(x("Add To Cart"),k("btn btn-primary"))))},w=function(e,t){"Book Not Delivered"===e.detail?alert("Book Not Delivered"):(k("btn btn-secondary disabled"),x("Book Processing for Return"))};return Object(f.jsx)("button",{className:g,onClick:function(e){var n=m;e.preventDefault(),e.stopPropagation(),"Add To Cart"===m?(n="Add",O(t.id,n,y)):"Remove"===m?(n="Remove",O(t.id,n,y)):"Buy"===m?o?(n="Add",O(t.id,n,y)):window.location.href="".concat(t.name,"/detail/"):"Buy All"===m?window.location.href="/checkout/":"Return Book"===m&&function(e,t){u("POST","/books/owned/",t,{action:"Return",detail:[{orderid:e}]})}(a,w)},children:m})}function p(e){var t=e.book,n=e.index,o=(e.className,e.isDetail,e.inCart),s=e.onRemove,r=e.owned,a=e.expiry,l=e.orderid,d=e.ordered,j=e.deliveryDate,u=e.delivered,h=e.checkout,O=Object(c.useState)(!1===u?"btn btn-danger disabled":r?a?"btn btn-secondary disabled":"btn btn-danger":d?"btn btn-danger disabled":"btn btn-primary"),m=Object(b.a)(O,2),x=m[0],p=m[1],g=Object(c.useState)(!1===u?"Book Not Delivered Yet":r?a?"Book Processing for Return":"Return Book":d?"Estimated Delivery Date : ".concat(j):"Add To Cart"),k=Object(b.a)(g,2),y=k[0],w=k[1],S=Object(c.useState)(!0),R=Object(b.a)(S,2),C=R[0],B=R[1];Object(c.useEffect)((function(){1==t.does_exists_in_cart&&(p("btn btn-danger"),w("Remove")),B(!1)}),[]);var E=Object(i.f)();return!0===C?"Loading":Object(f.jsxs)("div",{class:"product bookContainer",onClick:function(){E("/".concat(t.name,"/detail/"))},children:[Object(f.jsxs)("div",{class:"product-header",children:[Object(f.jsx)("img",{src:t.photo,alt:""}),Object(f.jsx)("ul",{class:"icons"})]}),Object(f.jsxs)("div",{class:"product-footer",children:[Object(f.jsx)("h3",{children:t.name}),Object(f.jsxs)("div",{class:"rating",children:[Object(f.jsx)("i",{class:"bx bxs-star"}),Object(f.jsx)("i",{class:"bx bxs-star"}),Object(f.jsx)("i",{class:"bx bxs-star"}),Object(f.jsx)("i",{class:"bx bxs-star"}),Object(f.jsx)("i",{class:"bx bx-star"})]}),Object(f.jsxs)("h4",{class:"price",children:["Rs ",t.price]}),Object(f.jsx)(v,{buttonname:y,className:x,checkout:h,book:t,inCart:o,onRemove:function(e){s(e)},index:n,orderid:l})]})]})}function g(e,t){t?u("POST","/profile/",e,t):u("GET","/profile/",e)}function k(e){var t=Object(c.useState)(),n=Object(b.a)(t,2),o=n[0],s=n[1],r=Object(c.useState)(),a=Object(b.a)(r,2),i=a[0],l=a[1],d=Object(c.useState)(!0),j=Object(b.a)(d,2),u=j[0],h=j[1],O={address:o,mobilenumber:i},m=function(e,t){console.log("Profile ",e,t),200===t?(s(e.address),l(e.mobilenumber),h(!1)):alert("Profile Error")};Object(c.useEffect)((function(){g(m),O={address:o,mobilenumber:i}}),[]);var x=function(e){var t=e.target.name;"address"===t?(s(e.target.value),e.target.className="form-control"):"mobilenumber"===t&&(l(e.target.value),e.target.className="form-control")};return!0===u?"Loading":Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{children:"Profile"}),Object(f.jsx)("label",{for:"address",children:"Address"}),Object(f.jsx)("input",{type:"text",class:"form-control text-muted",id:"address",value:o,onChange:x,name:"address"}),Object(f.jsx)("label",{for:"mobilenumber",children:"Mobile Number"}),Object(f.jsx)("input",{type:"number",class:"form-control text-muted",id:"mobilenumber",value:i,onChange:x,name:"mobilenumber"}),Object(f.jsx)("button",{className:"btn btn-secondary",onClick:function(){g(m,O)},children:"Save"})]})}function y(e){var t=e.book,n=Object(c.useState)(t.does_exists_in_cart?"Remove":"Add To Cart"),o=Object(b.a)(n,2),s=o[0],r=(o[1],Object(c.useState)(t.does_exists_in_cart?"btn btn-danger":"btn btn-primary")),a=Object(b.a)(r,2),i=a[0];a[1];return Object(f.jsx)("section",{class:"section product-detail",children:Object(f.jsxs)("div",{class:"details container-md",children:[Object(f.jsxs)("div",{class:"left",children:[Object(f.jsx)("div",{class:"main",children:Object(f.jsx)("img",{src:t.photo,alt:""})}),Object(f.jsxs)("div",{class:"thumbnails",children:[Object(f.jsx)("div",{class:"thumbnail",children:Object(f.jsx)("img",{src:t.photo,alt:""})}),Object(f.jsx)("div",{class:"thumbnail",children:Object(f.jsx)("img",{src:t.photo,alt:""})}),Object(f.jsx)("div",{class:"thumbnail",children:Object(f.jsx)("img",{src:t.photo,alt:""})}),Object(f.jsx)("div",{class:"thumbnail",children:Object(f.jsx)("img",{src:t.photo,alt:""})})]})]}),Object(f.jsxs)("div",{class:"right",children:[Object(f.jsx)("h1",{children:t.name}),Object(f.jsxs)("div",{class:"price",children:["Rs ",t.price]}),Object(f.jsxs)("h3",{children:["Book Category: ",t.type]}),Object(f.jsx)("p",{children:" Book Description "}),Object(f.jsx)(v,{buttonname:"Buy",className:"btn btn-primary",book:t,isDetail:!0}),Object(f.jsx)(v,{buttonname:s,className:i,book:t})]})]})})}function w(e){var t=e.book,n=e.index,c=e.onRemove;return Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:Object(f.jsxs)("div",{class:"cart-info",children:[Object(f.jsx)("img",{src:t.photo,alt:""}),Object(f.jsxs)("div",{children:[Object(f.jsx)("p",{children:t.name}),Object(f.jsxs)("span",{children:["Price: Rs ",t.price]}),Object(f.jsx)("br",{}),Object(f.jsx)(v,{buttonname:"Remove",className:"btn btn-danger",book:t,inCart:!0,onRemove:function(){c(n)}})]})]})}),Object(f.jsx)("td",{children:Object(f.jsx)("input",{type:"number",value:"1",min:"1"})}),Object(f.jsxs)("td",{children:["Rs ",t.price]})]})}function S(e){var t=Object(c.useState)([]),n=Object(b.a)(t,2),o=n[0],s=n[1],r=Object(c.useState)(!0),a=Object(b.a)(r,2),i=a[0],l=a[1],d=function(e,t){s(e),l(!1)};return Object(c.useEffect)((function(){u("GET","/books/",d)}),[]),!0===i?"Loading":Object(f.jsxs)("section",{class:"section all-products",id:"products",children:[Object(f.jsxs)("div",{class:"top container",children:[Object(f.jsx)("h1",{children:"All Products"}),Object(f.jsxs)("form",{children:[Object(f.jsxs)("select",{children:[Object(f.jsx)("option",{value:"1",children:"Defualt Sorting"}),Object(f.jsx)("option",{value:"2",children:"Sort By Price"}),Object(f.jsx)("option",{value:"3",children:"Sort By Popularity"}),Object(f.jsx)("option",{value:"4",children:"Sort By Sale"}),Object(f.jsx)("option",{value:"5",children:"Sort By Rating"})]}),Object(f.jsx)("span",{children:Object(f.jsx)("i",{class:"bx bx-chevron-down"})})]})]}),Object(f.jsx)("div",{class:"product-center container",children:o.map((function(e,t){return Object(f.jsx)(p,{book:e},t)}))})]})}function R(e){var t=Object(c.useState)(null),n=Object(b.a)(t,2),o=n[0],s=n[1],r=Object(c.useState)(!0),a=Object(b.a)(r,2),l=a[0],d=a[1],j=Object(i.g)().bookname,h=function(e,t){s(e[0]),d(!1)};return Object(c.useEffect)((function(){!function(e,t){u("GET","/books/".concat(e,"/"),t)}(j,h)}),[]),!0===l?"Loading":Object(f.jsx)(y,{book:o})}function C(e){var t=Object(c.useState)([]),n=Object(b.a)(t,2),o=n[0],s=n[1],r=Object(c.useState)(!0),i=Object(b.a)(r,2),l=i[0],d=i[1],j=0;Object(c.useEffect)((function(){m(u)}),[]);var u=function(e,t){s(e.usercart_set),d(!1)},h=function(e){s(o.filter((function(t){return o.indexOf(t)!==e})))},O=o.map((function(e,t){return j+=e.book.price,e.book.id}));return l?"":0===O.length?Object(f.jsx)("div",{className:"text-muted",children:"Cart Is Empty"}):Object(f.jsxs)("div",{class:"container-md cart",children:[Object(f.jsxs)("table",{children:[Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{children:"Product"}),Object(f.jsx)("th",{children:"Quantity"}),Object(f.jsx)("th",{children:"Subtotal"})]}),o.map((function(e,t){return Object(f.jsx)(w,{book:e.book,index:t,inCart:!0,onRemove:h},t)}))]}),Object(f.jsxs)("div",{class:"total-price",children:[Object(f.jsx)("table",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:"Total"}),Object(f.jsxs)("td",{children:["Rs ",j]})]})}),Object(f.jsx)(a.b,{to:"/checkout/",class:"checkout btn",children:"Proceed To Checkout"})]})]})}function B(e){var t=Object(c.useState)([]),n=Object(b.a)(t,2),o=n[0],s=n[1],r=Object(c.useState)(!0),a=Object(b.a)(r,2),i=a[0],l=a[1];Object(c.useEffect)((function(){u("GET","/books/owned/",d)}),[]);var d=function(e,t){500===t||s(e),l(!1)};return i?"Loading":0===o.length?"No Orders":Object(f.jsxs)("div",{className:"product-center container",children:[" ",o.map((function(e,t){return Object(f.jsxs)("div",{className:"border border-secondary mt-3",children:[Object(f.jsx)(p,{book:e.book,owned:!0,expiry:e.expiry,orderid:e.orderid,delivered:e.delivered},t),Object(f.jsxs)("div",{children:["Order Id : ",e.orderid]}),Object(f.jsxs)("div",{children:["Order Duration :",e.duration]}),Object(f.jsxs)("div",{children:["OwnerFrom : ",e.ownerfrom]}),Object(f.jsxs)("div",{children:["Book Expiry : ",e.expiry]}),Object(f.jsxs)("div",{children:["Book Return Amount : ",e.returnamount]}),Object(f.jsxs)("div",{children:["Book Return Date : ",e.returndate]})]})}))]})}function E(e){var t=Object(c.useState)([]),n=Object(b.a)(t,2),o=n[0],s=n[1],r=Object(c.useState)(!0),a=Object(b.a)(r,2),i=a[0],l=a[1],d=function(e,t){500===t||s(e),l(!1)};return Object(c.useEffect)((function(){u("GET","/books/ordered/",d)}),[]),i?"Loading":0===o.length?"No Orders":Object(f.jsx)("div",{className:"product-center container",children:o.map((function(e,t){return Object(f.jsxs)("div",{className:"border border-secondary",children:[Object(f.jsxs)("div",{children:["Order ID : ",e.id]}),Object(f.jsx)(p,{book:e.book,ordered:!0,deliveryDate:e.deliveryDate},t),Object(f.jsxs)("div",{children:["Delivery Date : ",e.deliveryDate," "]})]})}))})}function L(e){var t=Object(c.useState)("Are You Sure You Want to Logout ? "),n=Object(b.a)(t,2),o=n[0],s=n[1],r=Object(c.useState)(!0),a=Object(b.a)(r,2),i=a[0],l=a[1];return Object(c.useEffect)((function(){var e=localStorage.getItem("token");l(!!e)}),[]),Object(f.jsxs)("div",{children:[Object(f.jsx)("div",{children:o}),!0===i&&Object(f.jsx)("button",{onClick:function(){localStorage.setItem("token",""),s("Log Out Successfull"),window.location.href="/",l(!1)},className:"btn btn-danger",children:"Logout"})]})}function T(e){var t=Object(c.useState)([]),n=Object(b.a)(t,2),o=n[0],s=n[1],r=Object(c.useState)(!0),a=Object(b.a)(r,2),i=a[0],l=a[1],u=0,h=function(e,t){201===t?s(e.usercart_set):alert("CheckOut Component Error "),l(!1)},O=function(e){s(o.filter((function(t){return o.indexOf(t)!==e})))},v=localStorage.getItem("token");function g(e){var t=null;if(document.cookie&&""!==document.cookie)for(var n=document.cookie.split(";"),c=0;c<n.length;c++){var o=n[c].trim();if(o.substring(0,e.length+1)===e+"="){t=decodeURIComponent(o.substring(e.length+1));break}}return t}function y(){return(y=Object(j.a)(d.a.mark((function e(){var t,n,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w();case 2:if(e.sent){e.next=6;break}return alert("Failed"),e.abrupt("return");case 6:return e.next=8,fetch("localhost"===window.location.hostname?"http://localhost:8000/payment/":"https://projectxweb1.herokuapp.com/payment/",{method:"POST",headers:{Authorization:"Token ".concat(v),"X-CSRFToken":g("csrftoken")}}).then((function(e){return e.json()}));case 8:t=e.sent,n={key:"rzp_test_VR2iva4ym2KHCY",amount:t.amount,currency:"INR",name:"ProjectX",description:"Test Transaction",order_id:t.id,handler:function(e){x(R,S)},prefill:{name:t.name,email:t.email,contact:t.contact},notes:{address:"Razorpay Corporate Office"},theme:{color:"#3399cc"}},(c=new window.Razorpay(n)).on("payment.failed",(function(e){alert(e.error.code),alert(e.error.description),alert(e.error.source),alert(e.error.step),alert(e.error.reason),alert(e.error.metadata.order_id),alert(e.error.metadata.payment_id)})),c.open();case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var w=function(){return new Promise((function(e){var t=document.createElement("script");t.src="https://checkout.razorpay.com/v1/checkout.js",document.body.appendChild(t),t.onload=function(){e(!0)},t.onerror=function(){e(!1)}})).catch((function(e){return console.log(e)}))};Object(c.useEffect)((function(){m(h)}),[]);var S=function(e,t){201===t?window.location.href="/orders/":406===t?alert("Profile Not Completed"):alert("Checkout Cart Buy Error ")},R=o.map((function(e,t){return u+=e.book.price,e.book.id}));return!0===i?"Loading":Object(f.jsxs)("div",{children:[Object(f.jsx)("div",{className:"text-warning",children:"Note: Profile Should Be Completed Before Ordering"}),Object(f.jsx)(k,{}),Object(f.jsx)("div",{className:"product-center container",children:o.map((function(e,t){return Object(f.jsx)(p,{book:e.book,index:t,checkout:!0,onRemove:O},t)}))}),Object(f.jsxs)("div",{children:["Total Amount : ",u]}),Object(f.jsx)("button",{id:"rzp-button1",className:"btn btn-secondary",onClick:function(){return y.apply(this,arguments)},children:"Proceed to Payment"})]})}function N(){var e=Object(i.g)().query,t=Object(c.useState)([]),n=Object(b.a)(t,2),o=n[0],s=n[1],r=Object(c.useState)(!0),a=Object(b.a)(r,2),l=a[0],d=a[1],j=function(e,t){404===t||s(e),d(!1)};return Object(c.useEffect)((function(){!function(e,t){u("GET","/books/?query=".concat(e),t)}(e,j)}),[e]),!0===l?"Loading":0!==o.length?Object(f.jsx)("div",{class:"product-center container",children:o.map((function(e,t){return Object(f.jsx)(p,{book:e},t)}))}):"Not Found"}function P(e,t){var n;e&&(n=JSON.stringify(e));var c=new XMLHttpRequest,o="localhost"===window.location.hostname?"http://127.0.0.1:8000/api/books/users":"".concat(window.location.hostname,"/api/books/users");console.log(o,"URL"),c.responseType="json";var s=function(e){var t=null;if(document.cookie&&""!==document.cookie)for(var n=document.cookie.split(";"),c=0;c<n.length;c++){var o=n[c].trim();if(o.substring(0,e.length+1)===e+"="){t=decodeURIComponent(o.substring(e.length+1));break}}return t}("csrftoken");c.open("POST",o),c.setRequestHeader("Content-Type","application/json"),s&&(c.setRequestHeader("X-Requested-With","XMLHttpRequest"),c.setRequestHeader("X-CSRFToken",s)),c.onload=function(){if(403===c.status){var e=c.response.detail;console.log(e)}t(c.response,c.status)},c.onerror=function(e){console.log("error",e),t({message:"The request was an error"},400)},c.send(n)}function q(e){var t=Object(c.useState)(""),n=Object(b.a)(t,2),o=n[0],s=n[1],r=Object(c.useState)(""),a=Object(b.a)(r,2),i=a[0],l=a[1],d={username:o,password:i},j=function(e,t){400===t?alert("Wrong Credentials"):200===t&&(console.log(e.token,t),localStorage.setItem("token","".concat(e.token)),window.location.href="/")},u=function(e,t){console.log("Register ",e,t),200===t&&h(d,j),"A user with that username already exists."===e.username[0]&&alert("User Already Exists")},O=function(e){"username"===e.target.name?s(e.target.value):l(e.target.value)};return Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{children:"Login Here "}),Object(f.jsxs)("div",{children:["For sample login use credentials",Object(f.jsx)("br",{}),"Username: dhruvilmehta Password: 1234",Object(f.jsx)("br",{}),"OR ",Object(f.jsx)("br",{}),"You can enter your credentials and click on Register"]}),Object(f.jsx)("br",{}),Object(f.jsx)("label",{for:"exampleInputEmail1",children:"Username"}),Object(f.jsx)("input",{type:"text",class:"form-control ",placeholder:"Username",name:"username",value:d.username,onChange:O}),Object(f.jsx)("label",{for:"exampleInputPassword1",children:"Password"}),Object(f.jsx)("input",{type:"password",class:"form-control ",placeholder:"Password",name:"password",value:d.password,onChange:O}),Object(f.jsx)("button",{onClick:function(e){h(d,j)},className:"btn btn-primary",children:"Login"}),Object(f.jsx)("button",{onClick:function(e){P(d,u)},className:"btn btn-secondary",children:"Register"})]})}function I(e){var t=Object(c.useState)(""),n=Object(b.a)(t,2),o=(n[0],n[1]);return Object(f.jsx)(q,{userLogin:function(e){console.log(e),o(e)}})}var A=n(14),D=n(7);function H(){var e=Object(i.f)();return Object(f.jsx)("div",{children:Object(f.jsxs)("ul",{class:"nav-list",children:[Object(f.jsx)("li",{class:"nav-item",children:Object(f.jsx)("input",{id:"searchinput",class:"form-control fs-2 p-0",type:"search",placeholder:"Search","aria-label":"Search"})}),Object(f.jsx)("li",{class:"nav-item",children:Object(f.jsx)("button",{id:"searchbutton",class:"btn btn-outline-success m-1",type:"submit",onClick:function(t){var n=document.getElementById("searchinput");e("/search/query=".concat(n.value))},children:"Search"})}),Object(f.jsx)("li",{class:"nav-item",children:Object(f.jsx)(a.b,{to:"/",class:"nav-link",children:"Home"})}),Object(f.jsx)("li",{class:"nav-item",children:Object(f.jsx)(a.b,{to:"/orders",class:"nav-link",children:"Your Orders"})}),Object(f.jsx)("li",{class:"nav-item",children:Object(f.jsx)(a.b,{to:"/profile",class:"nav-link",children:"Your Profile"})}),Object(f.jsx)("li",{class:"nav-item",children:Object(f.jsx)(a.b,{to:"/ownedBooks",class:"nav-link",children:"Owned Books"})}),Object(f.jsx)("li",{class:"nav-item",children:Object(f.jsx)(a.b,{to:"/cart",class:"nav-link",children:"Cart"})}),Object(f.jsx)("li",{class:"nav-item",children:Object(f.jsx)(a.b,{to:"/logout",class:"nav-link",children:"Logout"})})]})})}function X(){var e=Object(i.f)();return Object(f.jsxs)("ul",{class:"nav-list",children:[Object(f.jsx)("li",{class:"nav-item",children:Object(f.jsx)("input",{id:"searchinput",class:"form-control fs-2 p-0",type:"search",placeholder:"Search","aria-label":"Search"})}),Object(f.jsx)("li",{class:"nav-item",children:Object(f.jsx)("button",{id:"searchbutton",class:"btn btn-outline-success m-1",type:"submit",onClick:function(t){var n=document.getElementById("searchinput");e("/search/query=".concat(n.value))},children:"Search"})}),Object(f.jsx)("li",{class:"nav-item",children:Object(f.jsx)(a.b,{to:"/login",class:"nav-link",children:"Login"})}),Object(f.jsx)("li",{class:"nav-item",children:Object(f.jsx)(a.b,{to:"#about",class:"nav-link",children:"About"})}),Object(f.jsx)("li",{class:"nav-item",children:Object(f.jsx)(a.b,{to:"#contact",class:"nav-link",children:"Contact"})})]})}var _=function(){var e=Object(c.useState)(localStorage.getItem("token")),t=Object(b.a)(e,2),n=t[0];return t[1],Object(c.useEffect)((function(){var e=document.querySelector(".menu"),t=document.querySelector(".hamburger"),n=document.querySelector(".close"),c=e.getBoundingClientRect().left;t.addEventListener("click",(function(){c<0&&(e.classList.add("show"),document.body.classList.add("show"),o.classList.add("show"))})),n.addEventListener("click",(function(){c<0&&(e.classList.remove("show"),document.body.classList.remove("show"),o.classList.remove("show"))}));var o=document.querySelector(".nav"),s=o.getBoundingClientRect().height;window.addEventListener("scroll",(function(){window.pageYOffset>s?o.classList.add("fix-nav"):o.classList.remove("fix-nav")})),Object(A.a)(document.querySelectorAll(".scroll-link")).map((function(t){t&&t.addEventListener("click",(function(t){t.preventDefault();var n=t.target.getAttribute("href").slice(1),c=document.getElementById(n),r=(o.classList.contains("fix-nav"),c.offsetTop-s);window.scrollTo({top:r,left:0}),o.classList.remove("show"),e.classList.remove("show"),document.body.classList.remove("show")}))})),D.a.from(".logo",{opacity:0,duration:1,delay:.5,y:-10}),D.a.from(".hamburger",{opacity:0,duration:1,delay:1,x:20}),D.a.from(".hero-img",{opacity:0,duration:1,delay:1.5,x:-200}),D.a.from(".hero-content h2",{opacity:0,duration:1,delay:2,y:-50}),D.a.from(".hero-content h1",{opacity:0,duration:1,delay:2.5,y:-45}),D.a.from(".hero-content a",{opacity:0,duration:1,delay:3.5,y:50});document.querySelector(".nav-list")}),[]),n?Object(f.jsx)("nav",{class:"nav",children:Object(f.jsxs)("div",{class:"navigation container",children:[Object(f.jsx)("div",{class:"logo",children:Object(f.jsx)("h1",{children:"ProjectX"})}),Object(f.jsxs)("div",{class:"menu",children:[Object(f.jsxs)("div",{class:"top-nav",children:[Object(f.jsx)("div",{class:"logo",children:Object(f.jsx)("h1",{children:"ProjectX"})}),Object(f.jsx)("div",{class:"close",children:Object(f.jsx)("i",{class:"bx bx-x"})})]}),Object(f.jsx)(H,{})]}),Object(f.jsx)("div",{class:"hamburger",children:Object(f.jsx)("i",{class:"bx bx-menu"})})]})}):Object(f.jsx)("nav",{class:"nav",children:Object(f.jsxs)("div",{class:"navigation container",children:[Object(f.jsx)("div",{class:"logo",children:Object(f.jsx)("h1",{children:"ProjectX"})}),Object(f.jsxs)("div",{class:"menu",children:[Object(f.jsxs)("div",{class:"top-nav",children:[Object(f.jsx)("div",{class:"logo",children:Object(f.jsx)("h1",{children:"ProjectX"})}),Object(f.jsx)("div",{class:"close",children:Object(f.jsx)("i",{class:"bx bx-x"})})]}),Object(f.jsx)(X,{})]}),Object(f.jsx)("div",{class:"hamburger",children:Object(f.jsx)("i",{class:"bx bx-menu"})})]})})};n(23).config();var F=function(){return Object(f.jsxs)(a.a,{children:[Object(f.jsx)(_,{}),Object(f.jsxs)(i.c,{children:[Object(f.jsx)(i.a,{path:"/",element:Object(f.jsx)(S,{})}),Object(f.jsx)(i.a,{path:"/cart",element:Object(f.jsx)(C,{})}),Object(f.jsx)(i.a,{exact:!0,path:"/orders",element:Object(f.jsx)(E,{})}),Object(f.jsx)(i.a,{exact:!0,path:"/ownedBooks",element:Object(f.jsx)(B,{})}),Object(f.jsx)(i.a,{exact:!0,path:"/login",element:Object(f.jsx)(I,{})}),Object(f.jsx)(i.a,{exact:!0,path:"/logout",element:Object(f.jsx)(L,{})}),Object(f.jsx)(i.a,{exact:!0,path:"/profile",element:Object(f.jsx)(k,{})}),Object(f.jsx)(i.a,{exact:!0,path:"/checkout",element:Object(f.jsx)(T,{})}),Object(f.jsx)(i.a,{path:"/search/query=:query",element:Object(f.jsx)(N,{})}),Object(f.jsx)(i.a,{path:"/:bookname/detail",element:Object(f.jsx)(R,{})})]})]})},U=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,27)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),o(e),s(e),r(e)}))},Y=document.getElementById("root");Y&&r.a.render(Object(f.jsx)(F,{}),Y);var z=o.a.createElement,G=document.getElementById("books");G&&r.a.render(z(S,G.dataset),G);var M=document.getElementById("bookdetail");M&&r.a.render(z(R,M.dataset),M);var J=document.getElementById("usercart");J&&r.a.render(z(C,J.dataset),J);var W=document.getElementById("ownedBooks");W&&r.a.render(z(B,W.dataset),W);var K=document.getElementById("orderedBooks");K&&r.a.render(z(E,K.dataset),K);var Q=document.getElementById("login");Q&&r.a.render(z(I,Q.dataset),Q);var V=document.getElementById("logout");V&&r.a.render(z(L,V.dataset),V);var Z=document.getElementById("profile");Z&&r.a.render(z(k,Z.dataset),Z);var $=document.getElementById("checkout");$&&r.a.render(z(T,$.dataset),$);var ee=document.getElementById("search");ee&&r.a.render(z(N,ee.dataset),ee),U()}},[[26,1,2]]]);
//# sourceMappingURL=main.87691a88.chunk.js.map