(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0024d272"],{a19a:function(t,e,r){},ad68:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container py-5"},[r("RestaurantDetail",{attrs:{"initial-restaurant":t.restaurant}}),r("hr"),r("RestaurantComments",{attrs:{"restaurant-comments":t.restaurantComments},on:{"after-delete-comment":t.afterDeleteComments}}),r("CreateComment",{attrs:{"restaurant-id":t.restaurant.id},on:{"after-create-comment":t.afterCreateComment}})],1)},n=[],s=r("1da1"),i=r("5530"),o=(r("96cf"),r("b0c0"),r("a4d3"),r("e01a"),r("4de4"),r("d3b7"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12 mb-3"},[r("h1",[t._v(t._s(t.restaurant.name))]),r("p",{staticClass:"badge badge-secondary mt-1 mb-3"},[t._v(" "+t._s(t.restaurant.categoryName)+" ")])]),r("div",{staticClass:"col-lg-4"},[r("img",{staticClass:"img-responsive center-block",staticStyle:{width:"250px","margin-bottom":"25px"},attrs:{src:t._f("emptyImage")(t.restaurant.image)}}),r("div",{staticClass:"contact-info-wrap"},[r("ul",{staticClass:"list-unstyled"},[r("li",[r("strong",[t._v("Opening Hour:")]),t._v(" "+t._s(t.restaurant.openingHours)+" ")]),r("li",[r("strong",[t._v("Tel:")]),t._v(" "+t._s(t.restaurant.tel)+" ")]),r("li",[r("strong",[t._v("Address:")]),t._v(" "+t._s(t.restaurant.address)+" ")])])])]),r("div",{staticClass:"col-lg-8"},[r("p",[t._v(t._s(t.restaurant.description))]),r("router-link",{staticClass:"btn btn-primary btn-border mr-2",attrs:{to:{name:"restaurant-dashboard",params:{id:t.restaurant.id}}}},[t._v("Dashboard")]),t.restaurant.isFavorited?r("button",{staticClass:"btn btn-danger btn-border mr-2",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.deleteFavorite(t.restaurant.id)}}},[t._v(" 移除最愛 ")]):r("button",{staticClass:"btn btn-primary btn-border mr-2",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.addFavorite(t.restaurant.id)}}},[t._v(" 加到最愛 ")]),t.restaurant.isLiked?r("button",{staticClass:"btn btn-danger like mr-2",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.deleteLike(t.restaurant.id)}}},[t._v(" Unlike ")]):r("button",{staticClass:"btn btn-primary like mr-2",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.addLike(t.restaurant.id)}}},[t._v(" Like ")])],1)])}),c=[],u=(r("d9e2"),r("2708")),l=r("4cce"),d=r("2fa3"),m={name:"RestaurantDetail",mixins:[u["a"]],props:{initialRestaurant:{type:Object,required:!0}},watch:{initialRestaurant:function(t){this.restaurant=Object(i["a"])(Object(i["a"])({},this.restaurant),t)}},data:function(){return{restaurant:this.initialRestaurant}},methods:{addFavorite:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,l["a"].addFavorite({restaurantId:t});case 3:if(a=r.sent,n=a.data,"success"===n.status){r.next=7;break}throw new Error(n.message);case 7:e.restaurant=Object(i["a"])(Object(i["a"])({},e.restaurant),{},{isFavorited:!0}),r.next=14;break;case 10:r.prev=10,r.t0=r["catch"](0),console.log("error",r.t0),d["a"].fire({icon:"error",title:"無法加入最愛，請稍後再試"});case 14:case"end":return r.stop()}}),r,null,[[0,10]])})))()},deleteFavorite:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,l["a"].deleteFavorite({restaurantId:t});case 3:if(a=r.sent,n=a.data,"success"===n.status){r.next=7;break}throw new Error(n.message);case 7:e.restaurant=Object(i["a"])(Object(i["a"])({},e.restaurant),{},{isFavorited:!1}),r.next=14;break;case 10:r.prev=10,r.t0=r["catch"](0),console.log("error",r.t0),d["a"].fire({icon:"error",title:"無法加入最愛，請稍後再試"});case 14:case"end":return r.stop()}}),r,null,[[0,10]])})))()},addLike:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,l["a"].addLike({restaurantId:t});case 3:if(a=r.sent,n=a.data,"success"===n.status){r.next=7;break}throw new Error(n.message);case 7:e.restaurant=Object(i["a"])(Object(i["a"])({},e.restaurant),{},{isLiked:!0}),r.next=14;break;case 10:r.prev=10,r.t0=r["catch"](0),console.log("error",r.t0),d["a"].fire({icon:"error",title:"無法加入最愛，請稍後再試"});case 14:case"end":return r.stop()}}),r,null,[[0,10]])})))()},deleteLike:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,l["a"].deleteLike({restaurantId:t});case 3:if(a=r.sent,n=a.data,"success"===n.status){r.next=7;break}throw new Error(n.message);case 7:e.restaurant=Object(i["a"])(Object(i["a"])({},e.restaurant),{},{isLiked:!1}),r.next=14;break;case 10:r.prev=10,r.t0=r["catch"](0),console.log("error",r.t0),d["a"].fire({icon:"error",title:"無法加入最愛，請稍後再試"});case 14:case"end":return r.stop()}}),r,null,[[0,10]])})))()}}},b=m,f=(r("fbbe"),r("2877")),p=Object(f["a"])(b,o,c,!1,null,"5b3e0258",null),v=p.exports,g=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h2",{staticClass:"my-4"},[t._v("所有評論：")]),t._l(t.restaurantComments,(function(e){return r("div",{key:e.id},[r("blockquote",{staticClass:"blockquote mb-0"},[t.currentUser.isAdmin?r("button",{staticClass:"btn btn-danger float-right",attrs:{type:"button"},on:{click:function(r){return r.stopPropagation(),r.preventDefault(),t.handleDeleteButtonClick(e.id)}}},[t._v(" Delete ")]):t._e(),r("h3",[r("router-link",{attrs:{to:{name:"user",params:{id:e.User.id}}}},[t._v(" "+t._s(e.User.name)+" ")])],1),r("p",[t._v(t._s(e.text))]),r("footer",{staticClass:"blockquote-footer"},[t._v(" "+t._s(t._f("fromNow")(e.createdAt))+" ")])]),r("hr")])}))],2)},h=[],k={create:function(t){var e=t.restaurantId,r=t.text;return d["b"].post("/comments",{restaurantId:e,text:r})},delete:function(t){var e=t.commentId;return d["b"].delete("/comments/".concat(e))}},x=r("2f62"),w={props:{restaurantComments:{type:Array,required:!0}},computed:Object(i["a"])({},Object(x["b"])(["currentUser"])),mixins:[u["b"]],methods:{handleDeleteButtonClick:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,k.delete({commentId:t});case 3:if(a=r.sent,n=a.data,"success"===n.status){r.next=7;break}throw new Error(n.message);case 7:e.$emit("after-delete-comment",t),d["a"].fire({icon:"success",title:"成功刪除此評論"}),r.next=15;break;case 11:r.prev=11,r.t0=r["catch"](0),console.log("error",r.t0),d["a"].fire({icon:"error",title:"無法刪除此評論，請稍後再試"});case 15:case"end":return r.stop()}}),r,null,[[0,11]])})))()}}},C=w,_=(r("fd70"),Object(f["a"])(C,g,h,!1,null,"1e9e427e",null)),y=_.exports,R=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.handleSumbit.apply(null,arguments)}}},[r("div",{staticClass:"form-group mb-4"},[r("label",{attrs:{for:"text"}},[t._v("留下評論：")]),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"form-control",attrs:{rows:"3",name:"text"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}})]),r("div",{staticClass:"d-flex align-items-center justify-content-between"},[r("button",{staticClass:"btn btn-link",attrs:{type:"button"},on:{click:function(e){return t.$router.back()}}},[t._v(" 回上一頁 ")]),r("button",{staticClass:"btn btn-primary mr-0",attrs:{type:"submit",disabled:t.isProcessing}},[t._v(" Submit ")])])])},O=[],j=(r("a9e3"),{name:"CreateComment",props:{restaurantId:{type:Number,required:!0}},data:function(){return{text:"",isProcessing:!1}},methods:{handleSumbit:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,t.text){e.next=4;break}return d["a"].fire({icon:"warning",title:"您尚未填寫任何評論"}),e.abrupt("return");case 4:return t.isProcessing=!0,e.next=7,k.create({restaurantId:t.restaurantId,text:t.text});case 7:if(r=e.sent,a=r.data,"error"!==a.status){e.next=11;break}throw new Error(a.message);case 11:t.$emit("after-create-comment",{commentId:a.commentId,restaurantId:t.restaurantId,text:t.text}),d["a"].fire({icon:"success",title:"成功新增此評論！"}),t.isProcessing=!1,t.text="",e.next=22;break;case 17:e.prev=17,e.t0=e["catch"](0),t.isProcessing=!1,console.log("error",e.t0),d["a"].fire({icon:"error",title:"無法新增此評論，請稍後再試"});case 22:case"end":return e.stop()}}),e,null,[[0,17]])})))()}}}),I=j,D=(r("cb3f"),Object(f["a"])(I,R,O,!1,null,"2baccf72",null)),L=D.exports,F=r("c4c3"),P={name:"Restaurant",components:{RestaurantDetail:v,RestaurantComments:y,CreateComment:L},beforeRouteUpdate:function(t,e,r){var a=t.params.id;this.fetchRestaurant(a),r()},data:function(){return{restaurant:{id:-1,name:"",categoryName:"",image:"",openingHours:"",tel:"",address:"",description:"",isFavorited:!1,isLiked:!1},restaurantComments:[]}},computed:Object(i["a"])({},Object(x["b"])(["currentUser"])),created:function(){var t=this.$route.params.id;this.fetchRestaurant(t)},methods:{fetchRestaurant:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var a,n,s,i,o,c,u,l,m,b,f,p,v,g;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,F["a"].getRestaurant({restaurantId:t});case 3:a=r.sent,n=a.data,s=n.restaurant,i=n.isFavorited,o=n.isLiked,c=s.id,u=s.name,l=s.Category,m=s.image,b=s.opening_hours,f=s.tel,p=s.address,v=s.description,g=s.Comments,e.restaurant={id:c,name:u,categoryName:l?l.name:"未分類",image:m,openingHours:b,tel:f,address:p,description:v,isFavorited:i,isLiked:o},e.restaurantComments=g,r.next=15;break;case 11:r.prev=11,r.t0=r["catch"](0),console.log("error",r.t0),d["a"].fire({icon:"error",title:"無法取得餐廳資料，請稍後再試"});case 15:case"end":return r.stop()}}),r,null,[[0,11]])})))()},afterDeleteComments:function(t){this.restaurantComments=this.restaurantComments.filter((function(e){return e.id!==t}))},afterCreateComment:function(t){var e=t.commentId,r=t.restaurantId,a=t.text;this.restaurantComments.push({id:e,RestaurantId:r,User:{id:this.currentUser.id,name:this.currentUser.name},text:a,createdAt:new Date})}}},E=P,S=Object(f["a"])(E,a,n,!1,null,null,null);e["default"]=S.exports},cb3f:function(t,e,r){"use strict";r("a19a")},cd2b:function(t,e,r){},db1a:function(t,e,r){},e01a:function(t,e,r){"use strict";var a=r("23e7"),n=r("83ab"),s=r("da84"),i=r("e330"),o=r("1a2d"),c=r("1626"),u=r("3a9b"),l=r("577e"),d=r("9bf2").f,m=r("e893"),b=s.Symbol,f=b&&b.prototype;if(n&&c(b)&&(!("description"in f)||void 0!==b().description)){var p={},v=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:l(arguments[0]),e=u(f,this)?new b(t):void 0===t?b():b(t);return""===t&&(p[e]=!0),e};m(v,b),v.prototype=f,f.constructor=v;var g="Symbol(test)"==String(b("test")),h=i(f.toString),k=i(f.valueOf),x=/^Symbol\((.*)\)[^)]+$/,w=i("".replace),C=i("".slice);d(f,"description",{configurable:!0,get:function(){var t=k(this),e=h(t);if(o(p,t))return"";var r=g?C(e,7,-1):w(e,x,"$1");return""===r?void 0:r}}),a({global:!0,forced:!0},{Symbol:v})}},fbbe:function(t,e,r){"use strict";r("cd2b")},fd70:function(t,e,r){"use strict";r("db1a")}}]);
//# sourceMappingURL=chunk-0024d272.8eaa0502.js.map