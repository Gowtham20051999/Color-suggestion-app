(this["webpackJsonpcrwn-clothing"]=this["webpackJsonpcrwn-clothing"]||[]).push([[0],{12:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"e",(function(){return c})),n.d(t,"d",(function(){return i})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return u})),n.d(t,"g",(function(){return l})),n.d(t,"h",(function(){return s})),n.d(t,"f",(function(){return d})),n.d(t,"j",(function(){return p})),n.d(t,"k",(function(){return f})),n.d(t,"i",(function(){return m}));var r=n(9),a=function(){return{type:r.a.GOOGLE_SIGN_IN_START}},c=function(e){return{type:r.a.SIGN_IN_SUCCESS,payload:e}},i=function(e){return{type:r.a.SIGN_IN_FAILURE,payload:e}},o=function(e){return{type:r.a.EMAIL_SIGN_IN_START,payload:e}},u=function(){return{type:r.a.CHECK_USER_SESSION}},l=function(){return{type:r.a.SIGN_OUT_START}},s=function(){return{type:r.a.SIGN_OUT_SUCCESS}},d=function(e){return{type:r.a.SIGN_OUT_FAILURE,payload:e}},p=function(e){return{type:r.a.SIGN_UP_START,payload:e}},f=function(e){var t=e.user,n=e.additionalData;return{type:r.a.SIGN_UP_SUCCESS,payload:{user:t,additionalData:n}}},m=function(e){return{type:r.a.SIGN_UP_FAILURE,payload:e}}},13:function(e,t,n){"use strict";n.d(t,"c",(function(){return l})),n.d(t,"b",(function(){return s})),n.d(t,"e",(function(){return d})),n.d(t,"a",(function(){return p})),n.d(t,"d",(function(){return f})),n.d(t,"f",(function(){return m}));var r=n(3),a=n.n(r),c=n(10),i=n(36),o=n(29),u=n.n(o);n(78),n(81);u.a.initializeApp({apiKey:"AIzaSyC2Yx02FxInpT3ClbubXkCPqfll8wYh1j8",authDomain:"crwn-db-844e0.firebaseapp.com",databaseURL:"https://crwn-db-844e0.firebaseio.com",projectId:"crwn-db-844e0",storageBucket:"crwn-db-844e0.appspot.com",messagingSenderId:"900856777187",appId:"1:900856777187:web:4b1e2cb5ffc4d467ddf8d6",measurementId:"G-P0293DM8T3"});var l=function(){var e=Object(i.a)(a.a.mark((function e(t,n){var r,i,o,u;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return r=f.doc("users/".concat(t.uid)),e.next=5,r.get();case 5:if(e.sent.exists){e.next=17;break}return i=t.displayName,o=t.email,u=new Date,e.prev=9,e.next=12,r.set(Object(c.a)({displayName:i,email:o,createdAt:u},n));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("error creating user",e.t0.message);case 17:return e.abrupt("return",r);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,n){return e.apply(this,arguments)}}(),s=function(e){return e.docs.map((function(e){var t=e.data(),n=t.title,r=t.items;return{routeName:encodeURI(n.toLowerCase()),id:e.id,title:n,items:r}})).reduce((function(e,t){return e[t.title.toLowerCase()]=t,e}),{})},d=function(){return new Promise((function(e,t){var n=p.onAuthStateChanged((function(t){n(),e(t)}),t)}))},p=u.a.auth(),f=u.a.firestore(),m=new u.a.auth.GoogleAuthProvider;m.setCustomParameters({prompt:"select_account"});u.a},16:function(e,t,n){"use strict";t.a={TOGGLE_CART_HIDDEN:"TOGGLE_CART_HIDDEN",ADD_ITEM:"ADD_ITEM",REMOVE_ITEM:"REMOVE_ITEM",CLEAR_ITEM_FROM_CART:"CLEAR_ITEM_FROM_CART",CLEAR_CART:"CLEAR_CART"}},19:function(e,t,n){"use strict";t.a={FETCH_COLLECTIONS_START:"FETCH_COLLECTIONS_START",FETCH_COLLECTIONS_SUCCESS:"FETCH_COLLECTIONS_SUCCESS",FETCH_COLLECTIONS_FAILURE:"FETCH_COLLECTIONS_FAILURE"}},25:function(e,t,n){"use strict";n.d(t,"e",(function(){return a})),n.d(t,"a",(function(){return c})),n.d(t,"d",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return u}));var r=n(16),a=function(){return{type:r.a.TOGGLE_CART_HIDDEN}},c=function(e){return{type:r.a.ADD_ITEM,payload:e}},i=function(e){return{type:r.a.REMOVE_ITEM,payload:e}},o=function(e){return{type:r.a.CLEAR_ITEM_FROM_CART,payload:e}},u=function(){return{type:r.a.CLEAR_CART}}},27:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return u}));var r=n(11),a=function(e){return e.cart},c=Object(r.a)([a],(function(e){return e.cartItems})),i=Object(r.a)([a],(function(e){return e.hidden})),o=Object(r.a)([c],(function(e){return e.reduce((function(e,t){return e+t.quantity}),0)})),u=Object(r.a)([c],(function(e){return e.reduce((function(e,t){return e+t.quantity*t.price}),0)}))},38:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return i}));var r=n(19),a=(n(13),function(){return{type:r.a.FETCH_COLLECTIONS_START}}),c=function(e){return{type:r.a.FETCH_COLLECTIONS_SUCCESS,payload:e}},i=function(e){return{type:r.a.FETCH_COLLECTIONS_FAILURE,payload:e}}},44:function(e,t,n){"use strict";var r=n(43),a=n(0),c=n.n(a),i=n(7),o=n(8);function u(){var e=Object(i.a)(["\n  min-width: 165px;\n  width: auto;\n  height: 50px;\n  letter-spacing: 0.5px;\n  line-height: 50px;\n  padding: 0 35px 0 35px;\n  font-size: 15px;\n  text-transform: uppercase;\n  font-family: 'Open Sans Condensed';\n  font-weight: bolder;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n\n  ","\n"]);return u=function(){return e},e}function l(){var e=Object(i.a)(["\n  background-color: #4285f4;\n  color: white;\n\n  &:hover {\n    background-color: #357ae8;\n    border: none;\n  }\n"]);return l=function(){return e},e}function s(){var e=Object(i.a)(["\n  background-color: white;\n  color: black;\n  border: 1px solid black;\n\n  &:hover {\n    background-color: black;\n    color: white;\n    border: none;\n  }\n"]);return s=function(){return e},e}function d(){var e=Object(i.a)(["\n  background-color: black;\n  color: white;\n  border: none;\n\n  &:hover {\n    background-color: white;\n    color: black;\n    border: 1px solid black;\n  }\n"]);return d=function(){return e},e}var p=Object(o.b)(d()),f=Object(o.b)(s()),m=Object(o.b)(l()),b=o.c.button(u(),(function(e){return e.isGoogleSignIn?m:e.inverted?f:p}));t.a=function(e){var t=e.children,n=Object(r.a)(e,["children"]);return c.a.createElement(b,n,t)}},45:function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=n(7),i=n(8);function o(){var e=Object(c.a)(["\n  display: inline-block;\n  width: 50px;\n  height: 50px;\n  border: 3px solid rgba(195, 195, 195, 0.6);\n  border-radius: 50%;\n  border-top-color: #636767;\n  animation: spin 1s ease-in-out infinite;\n  -webkit-animation: spin 1s ease-in-out infinite;\n\n  @keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n  @-webkit-keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n"]);return o=function(){return e},e}function u(){var e=Object(c.a)(["\n  height: 60vh;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return u=function(){return e},e}var l=i.c.div(u()),s=i.c.div(o());t.a=function(){return a.a.createElement(l,null,a.a.createElement(s,null))}},65:function(e,t,n){e.exports=n(85)},83:function(e,t,n){},85:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(33),i=n.n(c),o=n(22),u=n(18),l=n(52),s=n(14),d=n(31),p=(n(74),n(61)),f=n(53),m=n.n(f),b=n(10),h=n(9),g={currentUser:null,error:null},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h.a.SIGN_IN_SUCCESS:return Object(b.a)({},e,{currentUser:t.payload,error:null});case h.a.SIGN_OUT_SUCCESS:return Object(b.a)({},e,{currentUser:null,error:null});case h.a.SIGN_IN_FAILURE:case h.a.SIGN_OUT_FAILURE:case h.a.SIGN_UP_FAILURE:return Object(b.a)({},e,{error:t.payload});default:return e}},E=n(16),v=n(62),j=function(e,t){return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?Object(b.a)({},e,{quantity:e.quantity+1}):e})):[].concat(Object(v.a)(e),[Object(b.a)({},t,{quantity:1})])},w=function(e,t){return 1===e.find((function(e){return e.id===t.id})).quantity?e.filter((function(e){return e.id!==t.id})):e.map((function(e){return e.id===t.id?Object(b.a)({},e,{quantity:e.quantity-1}):e}))},x={hidden:!0,cartItems:[]},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E.a.TOGGLE_CART_HIDDEN:return Object(b.a)({},e,{hidden:!e.hidden});case E.a.ADD_ITEM:return Object(b.a)({},e,{cartItems:j(e.cartItems,t.payload)});case E.a.REMOVE_ITEM:return Object(b.a)({},e,{cartItems:w(e.cartItems,t.payload)});case E.a.CLEAR_ITEM_FROM_CART:return Object(b.a)({},e,{cartItems:e.cartItems.filter((function(e){return e.id!==t.payload.id}))});case E.a.CLEAR_CART:return Object(b.a)({},e,{cartItems:[]});default:return e}},_={sections:[{title:"light and Pale white",imageUrl:"https://s1.r29static.com/bin/entry/25b/0,0,460,552/960xbm,70/1238479/image.jpg",id:1,linkUrl:"shop/hats"},{title:"white and fair",imageUrl:"https://media.istockphoto.com/photos/smiling-asian-woman-with-fair-skin-hand-touching-her-face-picture-id1204923865?k=20&m=1204923865&s=612x612&w=0&h=9EZNRmNrmUWTEz0RvBCigqf0qHanFQJWKODWxxgz7Fw=",id:2,linkUrl:"shop/jackets"},{title:"medium and white to olive",imageUrl:"https://thumbs.dreamstime.com/z/girl-olive-skin-closeup-portrait-young-over-isolated-white-background-30820383.jpg",id:3,linkUrl:"shop/sneakers"},{title:"olive and maderate brown",imageUrl:"https://hips.hearstapps.com/elleuk.cdnds.net/18/12/1521726217-zendaya.jpg?resize=480:*",size:"large",id:4,linkUrl:"shop/womens"},{title:"brown and dark brown",imageUrl:"https://i.pinimg.com/originals/a7/1d/2b/a71d2be981871b08b652168f4a8b17cc.jpg",size:"large",id:5,linkUrl:"shop/mens"},{title:"black and very dark brown to black",imageUrl:"https://media.allure.com/photos/5b69f7fbf2fede0bb4257123/1:1/w_2000,h_2000,c_limit/duckie-dark-brown.jpg",size:"large",id:5,linkUrl:"shop/mens"}]},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;return t.type,e},k=n(19),C={collections:null,isFetching:!1,errorMessage:void 0},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k.a.FETCH_COLLECTIONS_START:return Object(b.a)({},e,{isFetching:!0});case k.a.FETCH_COLLECTIONS_SUCCESS:return Object(b.a)({},e,{isFetching:!1,collections:t.payload});case k.a.FETCH_COLLECTIONS_FAILURE:return Object(b.a)({},e,{isFetching:!1,errorMessage:t.payload});default:return e}},U={sections:[{title:"T-shirt",imageUrl:"https://ae01.alicdn.com/kf/HTB1WaykD3mTBuNjy1Xbq6yMrVXaC/Womail-kad-nlar-bayanlar-k-sa-k-sa-kollu-T-Shirt-yuvarlak-boyun-Casual-Tops-g.jpg",id:1,linkUrl:"shop/hats"},{title:"Pant",imageUrl:"https://m.media-amazon.com/images/I/51fLxAGe0ZS._UX569_.jpg",id:2,linkUrl:"shop/jackets"},{title:"skirt",imageUrl:"https://www.wholesaledancedress.com/image/cache/catalog/item-img/tulle-ballet-tutu-skirts-for-child-wrap-chiffon-dance-aprons-for-children-girls-ballet-skirt-latin-skating-dance-for-kids-w01277-600x600.jpg",id:3,linkUrl:"shop/sneakers"},{title:"gown",imageUrl:"https://ae01.alicdn.com/kf/H45ef358c66d54aaf9a3a71fccf1bd1efD/Pink-Quinceanera-Dresses-Ball-Gown-High-Neck-Crystals-Beaded-Butterfly-Sixteen-15-Sweet-16-Dress-Vestidos.jpg",size:"large",id:4,linkUrl:"shop/womens"},{title:"strapless dress",imageUrl:"https://5.imimg.com/data5/SELLER/Default/2021/1/VF/LV/LD/93721413/party-gown-dress-500x500.jpg",size:"large",id:5,linkUrl:"shop/mens"},{title:"ball gown",imageUrl:"https://img.veaul.com/product/d9e3f27da1c4d5378dda9b31920c64d5/luxury-gorgeous-red-bridal-wedding-dresses-2020-ball-gown-see-through-scoop-neck-long-sleeve-backless-heart-shaped-flower-appliques-lace-chapel-train-ruffle-560x560.jpg",size:"large",id:5,linkUrl:"shop/mens"},{title:"cocktail ",imageUrl:"https://cdn.shopify.com/s/files/1/2334/9687/products/JVN04718-FUCHSIA-1_600x.jpg?v=1628022486",size:"large",id:5,linkUrl:"shop/mens"},{title:"saree ",imageUrl:"https://5.imimg.com/data5/YD/II/MY-45174797/wedding-silk-saree-6050-500x500.jpg",size:"large",id:5,linkUrl:"shop/mens"},{title:"maxi dress ",imageUrl:"https://ae01.alicdn.com/kf/Hecffe26cbcdc46b5aee2c9ec4d182edeg/2021One-Shoulder-With-Bow-Pleated-Wedding-Dresses-Beading-Applique-Lace-Sweep-Train-White-Tulle-Bridal-Gowns.jpg_Q90.jpg_.webp",size:"large",id:5,linkUrl:"shop/mens"},{title:"half saree ",imageUrl:"https://i.pinimg.com/originals/01/fd/f7/01fdf748b7933e40e254d44cc2dd621e.jpg",size:"large",id:5,linkUrl:"shop/mens"},{title:"leghana ",imageUrl:"https://www.99sarees.com/images/Products/original/SB76_Vol4_AD609.jpg",size:"large",id:5,linkUrl:"shop/mens"},{title:"jumper ",imageUrl:"https://m.media-amazon.com/images/I/615oW1Hj2YL._UL1441_.jpg",size:"large",id:5,linkUrl:"shop/mens"},{title:"chudidar ",imageUrl:"https://i.pinimg.com/originals/ca/ff/c5/caffc56f4fc8296262f2904ede131561.jpg",size:"large",id:5,linkUrl:"shop/mens"},{title:"party wear chudidar ",imageUrl:"https://www.shahifits.in/wp-content/uploads/2022/02/Party-Wear-Latest-Anarkali-Designs-2022.jpg",size:"large",id:5,linkUrl:"shop/mens"},{title:"jeans ",imageUrl:"https://cdn.cliqueinc.com/posts/284651/best-straight-jeans-284651-1577716836149-image.gif",size:"large",id:5,linkUrl:"shop/mens"}]},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;return t.type,e},N={sections:[{title:"Blue",imageUrl:"https://serenoregis.org/wp-content/uploads/2021/06/January-2020-B-Fashion-Review-Colors-to-Banish-the-Winter-Blues.png",id:1,linkUrl:"shop/hats"},{title:"black",imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROZ4sgkgZByyEWRrRN4xDCBRQsPI4F_S9YWQ&usqp=CAU",id:2,linkUrl:"shop/jackets"},{title:"red",imageUrl:"https://www.color-hex.com/palettes/103574.png",id:3,linkUrl:"shop/sneakers"}]},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;return t.type,e},A={key:"root",storage:m.a,whitelist:["cart"]},L=Object(s.c)({user:O,cart:S,directory:y,shop:I,collections:T,light_pale_white:R}),G=Object(d.a)(A,L),F=n(3),z=n.n(F),H=n(5),P=n(13),D=n(38),M=z.a.mark(q),W=z.a.mark(V),B=z.a.mark(K);function q(){var e,t,n;return z.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,e=P.d.collection("collections"),r.next=4,e.get();case 4:return t=r.sent,r.next=7,Object(H.b)(P.b,t);case 7:return n=r.sent,r.next=10,Object(H.c)(Object(D.c)(n));case 10:r.next=16;break;case 12:return r.prev=12,r.t0=r.catch(0),r.next=16,Object(H.c)(Object(D.a)(r.t0.message));case 16:case"end":return r.stop()}}),M,null,[[0,12]])}function V(){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(H.d)(k.a.FETCH_COLLECTIONS_START,q);case 2:case"end":return e.stop()}}),W)}function K(){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(H.a)([Object(H.b)(V)]);case 2:case"end":return e.stop()}}),B)}var Y=n(12),J=z.a.mark(le),Q=z.a.mark(se),X=z.a.mark(de),Z=z.a.mark(pe),$=z.a.mark(fe),ee=z.a.mark(me),te=z.a.mark(be),ne=z.a.mark(he),re=z.a.mark(ge),ae=z.a.mark(Oe),ce=z.a.mark(Ee),ie=z.a.mark(ve),oe=z.a.mark(je),ue=z.a.mark(we);function le(e,t){var n,r;return z.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(H.b)(P.c,e,t);case 3:return n=a.sent,a.next=6,n.get();case 6:return r=a.sent,a.next=9,Object(H.c)(Object(Y.e)(Object(b.a)({id:r.id},r.data())));case 9:a.next=15;break;case 11:return a.prev=11,a.t0=a.catch(0),a.next=15,Object(H.c)(Object(Y.d)(a.t0));case 15:case"end":return a.stop()}}),J,null,[[0,11]])}function se(){var e,t;return z.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,P.a.signInWithPopup(P.f);case 3:return e=n.sent,t=e.user,n.next=7,le(t);case 7:n.next=13;break;case 9:return n.prev=9,n.t0=n.catch(0),n.next=13,Object(H.c)(Object(Y.d)(n.t0));case 13:case"end":return n.stop()}}),Q,null,[[0,9]])}function de(e){var t,n,r,a,c;return z.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return t=e.payload,n=t.email,r=t.password,i.prev=1,i.next=4,P.a.signInWithEmailAndPassword(n,r);case 4:return a=i.sent,c=a.user,i.next=8,le(c);case 8:i.next=14;break;case 10:return i.prev=10,i.t0=i.catch(1),i.next=14,Object(H.c)(Object(Y.d)(i.t0));case 14:case"end":return i.stop()}}),X,null,[[1,10]])}function pe(){var e;return z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(P.e)();case 3:if(e=t.sent){t.next=6;break}return t.abrupt("return");case 6:return t.next=8,le(e);case 8:t.next=14;break;case 10:return t.prev=10,t.t0=t.catch(0),t.next=14,Object(H.c)(Object(Y.d)(t.t0));case 14:case"end":return t.stop()}}),Z,null,[[0,10]])}function fe(){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P.a.signOut();case 3:return e.next=5,Object(H.c)(Object(Y.h)());case 5:e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(0),e.next=11,Object(H.c)(Object(Y.f)(e.t0));case 11:case"end":return e.stop()}}),$,null,[[0,7]])}function me(e){var t,n,r,a,c,i;return z.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return t=e.payload,n=t.email,r=t.password,a=t.displayName,o.prev=1,o.next=4,P.a.createUserWithEmailAndPassword(n,r);case 4:return c=o.sent,i=c.user,o.next=8,Object(H.c)(Object(Y.k)({user:i,additionalData:{displayName:a}}));case 8:o.next=14;break;case 10:return o.prev=10,o.t0=o.catch(1),o.next=14,Object(H.c)(Object(Y.i)(o.t0));case 14:case"end":return o.stop()}}),ee,null,[[1,10]])}function be(e){var t,n,r;return z.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.payload,n=t.user,r=t.additionalData,a.next=3,le(n,r);case 3:case"end":return a.stop()}}),te)}function he(){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(H.d)(h.a.GOOGLE_SIGN_IN_START,se);case 2:case"end":return e.stop()}}),ne)}function ge(){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(H.d)(h.a.EMAIL_SIGN_IN_START,de);case 2:case"end":return e.stop()}}),re)}function Oe(){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(H.d)(h.a.CHECK_USER_SESSION,pe);case 2:case"end":return e.stop()}}),ae)}function Ee(){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(H.d)(h.a.SIGN_OUT_START,fe);case 2:case"end":return e.stop()}}),ce)}function ve(){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(H.d)(h.a.SIGN_UP_START,me);case 2:case"end":return e.stop()}}),ie)}function je(){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(H.d)(h.a.SIGN_UP_SUCCESS,be);case 2:case"end":return e.stop()}}),oe)}function we(){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(H.a)([Object(H.b)(he),Object(H.b)(ge),Object(H.b)(Oe),Object(H.b)(Ee),Object(H.b)(ve),Object(H.b)(je)]);case 2:case"end":return e.stop()}}),ue)}var xe=n(25),Se=z.a.mark(ke),_e=z.a.mark(Ce),ye=z.a.mark(Ie);function ke(){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(H.c)(Object(xe.b)());case 2:case"end":return e.stop()}}),Se)}function Ce(){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(H.d)(h.a.SIGN_OUT_SUCCESS,ke);case 2:case"end":return e.stop()}}),_e)}function Ie(){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(H.a)([Object(H.b)(Ce)]);case 2:case"end":return e.stop()}}),ye)}var Ue=z.a.mark(Te);function Te(){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(H.a)([Object(H.b)(K),Object(H.b)(we),Object(H.b)(Ie)]);case 2:case"end":return e.stop()}}),Ue)}var Ne=Object(p.a)(),Re=[Ne];var Ae=Object(s.e)(G,s.a.apply(void 0,Re));Ne.run(Te);var Le=Object(d.b)(Ae),Ge=(d.b,Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function Fe(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(83);var ze=n(21),He=n(11),Pe=n(27),De=n(7),Me=n(8);function We(){return(We=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Be(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var qe=a.a.createElement("g",null),Ve=a.a.createElement("g",null),Ke=a.a.createElement("g",null),Ye=a.a.createElement("g",null),Je=a.a.createElement("g",null),Qe=a.a.createElement("g",null),Xe=a.a.createElement("g",null),Ze=a.a.createElement("g",null),$e=a.a.createElement("g",null),et=a.a.createElement("g",null),tt=a.a.createElement("g",null),nt=a.a.createElement("g",null),rt=a.a.createElement("g",null),at=a.a.createElement("g",null),ct=a.a.createElement("g",null),it=function(e){var t=e.svgRef,n=e.title,r=Be(e,["svgRef","title"]);return a.a.createElement("svg",We({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t},r),n?a.a.createElement("title",null,n):null,a.a.createElement("g",null,a.a.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),a.a.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),a.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),a.a.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),a.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),qe,Ve,Ke,Ye,Je,Qe,Xe,Ze,$e,et,tt,nt,rt,at,ct)},ot=a.a.forwardRef((function(e,t){return a.a.createElement(it,We({svgRef:t},e))}));n.p;function ut(){var e=Object(De.a)(["\n  position: absolute;\n  font-size: 10px;\n  font-weight: bold;\n  bottom: 12px;\n"]);return ut=function(){return e},e}function lt(){var e=Object(De.a)(["\n  width: 24px;\n  height: 24px;\n"]);return lt=function(){return e},e}function st(){var e=Object(De.a)(["\n  width: 45px;\n  height: 45px;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n"]);return st=function(){return e},e}var dt=Me.c.div(st()),pt=Object(Me.c)(ot)(lt()),ft=Me.c.span(ut()),mt=Object(He.b)({itemCount:Pe.c}),bt=Object(u.b)(mt,(function(e){return{toggleCartHidden:function(){return e(Object(xe.e)())}}}))((function(e){var t=e.toggleCartHidden,n=e.itemCount;return a.a.createElement(dt,{onClick:t},a.a.createElement(pt,null),a.a.createElement(ft,null,n))}));function ht(){var e=Object(De.a)(["\n  width: 70%;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  padding: 10px 20px;\n"]);return ht=function(){return e},e}function gt(){var e=Object(De.a)(["\n  width: 30%;\n"]);return gt=function(){return e},e}function Ot(){var e=Object(De.a)(["\n  width: 100%;\n  display: flex;\n  height: 80px;\n  margin-bottom: 15px;\n"]);return Ot=function(){return e},e}var Et=Me.c.div(Ot()),vt=Me.c.img(gt()),jt=Me.c.div(ht()),wt=a.a.memo((function(e){var t=e.item,n=t.imageUrl,r=t.price,c=t.name,i=t.quantity;return a.a.createElement(Et,null,a.a.createElement(vt,{src:n,alt:"item"}),a.a.createElement(jt,null,a.a.createElement("span",null,c),a.a.createElement("span",null,i," x $",r)))})),xt=n(44);function St(){var e=Object(De.a)(["\n  height: 240px;\n  display: flex;\n  flex-direction: column;\n  overflow: scroll;\n"]);return St=function(){return e},e}function _t(){var e=Object(De.a)(["\n  font-size: 18px;\n  margin: 50px auto;\n"]);return _t=function(){return e},e}function yt(){var e=Object(De.a)(["\n  margin-top: auto;\n"]);return yt=function(){return e},e}function kt(){var e=Object(De.a)(["\n  position: absolute;\n  width: 240px;\n  height: 340px;\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n  border: 1px solid black;\n  background-color: white;\n  top: 90px;\n  right: 40px;\n  z-index: 5;\n"]);return kt=function(){return e},e}var Ct=Me.c.div(kt()),It=Object(Me.c)(xt.a)(yt()),Ut=Me.c.span(_t()),Tt=Me.c.div(St()),Nt=Object(He.b)({cartItems:Pe.b}),Rt=Object(ze.g)(Object(u.b)(Nt)((function(e){var t=e.cartItems,n=e.history,r=e.dispatch;return a.a.createElement(Ct,null,a.a.createElement(Tt,null,t.length?t.map((function(e){return a.a.createElement(wt,{key:e.id,item:e})})):a.a.createElement(Ut,null,"Your cart is empty")),a.a.createElement(It,{onClick:function(){n.push("/checkout"),r(Object(xe.e)())}},"GO TO CHECKOUT"))}))),At=Object(He.a)([function(e){return e.user}],(function(e){return e.currentUser}));function Lt(){return(Lt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Gt(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var Ft=a.a.createElement("title",null,"Group"),zt=a.a.createElement("desc",null,"Created with Sketch."),Ht=a.a.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},a.a.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},a.a.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},a.a.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),a.a.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),a.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),a.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),a.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2})))),Pt=function(e){var t=e.svgRef,n=e.title,r=Gt(e,["svgRef","title"]);return a.a.createElement("svg",Lt({width:"50px",height:"39px",viewBox:"0 0 50 39",ref:t},r),void 0===n?Ft:n?a.a.createElement("title",null,n):null,zt,Ht)},Dt=a.a.forwardRef((function(e,t){return a.a.createElement(Pt,Lt({svgRef:t},e))}));n.p;function Mt(){var e=Object(De.a)(["\n  padding: 10px 15px;\n  cursor: pointer;\n"]);return Mt=function(){return e},e}function Wt(){var e=Object(De.a)(["\n  width: 50%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n\n  @media screen and (max-width: 800px) {\n    width: 80%;\n  }\n"]);return Wt=function(){return e},e}function Bt(){var e=Object(De.a)(["\n  height: 100%;\n  width: 70px;\n  padding: 25px;\n\n  @media screen and (max-width: 800px) {\n    width: 50px;\n    padding: 0;\n  }\n"]);return Bt=function(){return e},e}function qt(){var e=Object(De.a)(["\n  height: 70px;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 25px;\n\n  @media screen and (max-width: 800px) {\n    height: 60px;\n    padding: 10px;\n    margin-bottom: 20px;\n  }\n"]);return qt=function(){return e},e}var Vt=Me.c.div(qt()),Kt=Object(Me.c)(o.b)(Bt()),Yt=Me.c.div(Wt()),Jt=Object(Me.c)(o.b)(Mt()),Qt=Object(He.b)({currentUser:At,hidden:Pe.a}),Xt=Object(u.b)(Qt,(function(e){return{signOutStart:function(){return e(Object(Y.g)())}}}))((function(e){var t=e.currentUser,n=e.hidden,r=e.signOutStart;return a.a.createElement(Vt,null,a.a.createElement(Kt,{to:"/"},a.a.createElement(Dt,{className:"logo"})),a.a.createElement(Yt,null,a.a.createElement(Jt,{to:"/"},"Home"),a.a.createElement(Jt,{to:"/shop"},"SHOP"),t?a.a.createElement(Jt,{as:"div",onClick:r},"SIGN OUT"):a.a.createElement(Jt,{to:"/signin"},"SIGN IN"),a.a.createElement(bt,null)),n?null:a.a.createElement(Rt,null))})),Zt=n(45),$t=n(58),en=n(59),tn=n(60),nn=n(63);function rn(){var e=Object(De.a)(["\n  font-size: 28px;\n  color: #2f8e89;\n"]);return rn=function(){return e},e}function an(){var e=Object(De.a)(["\n  display: inline-block;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 40vh;\n  height: 40vh;\n"]);return an=function(){return e},e}function cn(){var e=Object(De.a)(["\n  height: 60vh;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]);return cn=function(){return e},e}var on=Me.c.div(cn()),un=Me.c.div(an(),(function(e){var t=e.imageUrl;return"url(".concat(t,")")})),ln=Me.c.h2(rn()),sn=function(e){Object(nn.a)(n,e);var t=Object(tn.a)(n);function n(){var e;return Object($t.a)(this,n),(e=t.call(this)).state={hasErrored:!1},e}return Object(en.a)(n,[{key:"componentDidCatch",value:function(e,t){console.log(e)}},{key:"render",value:function(){return this.state.hasErrored?a.a.createElement(on,null,a.a.createElement(un,{imageUrl:"https://i.imgur.com/yW2W9SC.png"}),a.a.createElement(ln,null,"Sorry this page is broken")):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasErrored:!0}}}]),n}(a.a.Component);function dn(){var e=Object(De.a)(["\n\tbody {\n\t\tfont-family: 'Open Sans Condensed';\n\t\tpadding: 20px 40px;\n\n\t\t@media screen and (max-width: 800px) {\n\t\t\tpadding: 10px;\n\t\t}\n\t}\n\n\ta {\n\t\ttext-decoration: none;\n\t\tcolor: black;\n\t}\n\n\t* {\n\t\tbox-sizing: border-box;\n\t}\n"]);return dn=function(){return e},e}var pn=Object(Me.a)(dn()),fn=Object(r.lazy)((function(){return n.e(7).then(n.bind(null,122))})),mn=Object(r.lazy)((function(){return n.e(6).then(n.bind(null,123))})),bn=Object(r.lazy)((function(){return n.e(8).then(n.bind(null,119))})),hn=Object(r.lazy)((function(){return n.e(10).then(n.bind(null,125))})),gn=Object(r.lazy)((function(){return n.e(11).then(n.bind(null,118))})),On=Object(r.lazy)((function(){return Promise.all([n.e(3),n.e(9)]).then(n.bind(null,120))})),En=Object(He.b)({currentUser:At}),vn=Object(u.b)(En,(function(e){return{checkUserSession:function(){return e(Object(Y.a)())}}}))((function(e){var t=e.checkUserSession,n=e.currentUser;return Object(r.useEffect)((function(){t()}),[t]),a.a.createElement("div",null,a.a.createElement(pn,null),a.a.createElement(Xt,null),a.a.createElement(ze.d,null,a.a.createElement(sn,null,a.a.createElement(r.Suspense,{fallback:a.a.createElement(Zt.a,null)},a.a.createElement(ze.b,{exact:!0,path:"/",component:bn}),a.a.createElement(ze.b,{path:"/shop",component:hn}),a.a.createElement(ze.b,{exact:!0,path:"/collections",component:mn}),a.a.createElement(ze.b,{exact:!0,path:"/light_pale_white",component:fn}),a.a.createElement(ze.b,{exact:!0,path:"/checkout",component:On}),a.a.createElement(ze.b,{exact:!0,path:"/signin",render:function(){return n?a.a.createElement(ze.a,{to:"/"}):a.a.createElement(gn,null)}})))))}));i.a.render(a.a.createElement(u.a,{store:Ae},a.a.createElement(o.a,null,a.a.createElement(l.a,{persistor:Le},a.a.createElement(vn,null)))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/Color-suggestion-app",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/Color-suggestion-app","/service-worker.js");Ge?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Fe(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Fe(t,e)}))}}()},9:function(e,t,n){"use strict";t.a={SET_CURRENT_USER:"SET_CURRENT_USER",GOOGLE_SIGN_IN_START:"GOOGLE_SIGN_IN_START",EMAIL_SIGN_IN_START:"EMAIL_SIGN_IN_START",SIGN_IN_SUCCESS:"SIGN_IN_SUCCESS",SIGN_IN_FAILURE:"SIGN_IN_FAILURE",CHECK_USER_SESSION:"CHECK_USER_SESSION",SIGN_OUT_START:"SIGN_OUT_START",SIGN_OUT_SUCCESS:"SIGN_OUT_SUCCESS",SIGN_OUT_FAILURE:"SIGN_OUT_FAILURE",SIGN_UP_START:"SIGN_UP_START",SIGN_UP_SUCCESS:"SIGN_UP_SUCCESS",SIGN_UP_FAILURE:"SIGN_UP_FAILURE"}}},[[65,1,2]]]);
//# sourceMappingURL=main.ae839a87.chunk.js.map