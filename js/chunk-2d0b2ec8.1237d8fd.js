(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b2ec8"],{"25d3":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container py-5"},[a("div",[a("h1",[t._v(t._s(t.restaurant.name))]),a("span",{staticClass:"badge badge-secondary mt-1 mb-3"},[t._v(" "+t._s(t.restaurant.categoryName)+" ")])]),a("hr"),a("ul",[a("li",[t._v("評論數： "+t._s(t.restaurant.commentsLength))]),a("li",[t._v("瀏覽次數： "+t._s(t.restaurant.viewCounts))])]),a("button",{staticClass:"btn btn-link",attrs:{type:"button"},on:{click:function(e){return t.$router.back()}}},[t._v(" 回上一頁 ")])])},r=[],s=a("1da1"),c=(a("96cf"),a("b0c0"),a("c4c3")),u=a("2fa3"),o={name:"RestaurantDashboard",created:function(){var t=this.$route.params.id;this.fetchRestaurant(t)},beforeRouteUpdate:function(t,e,a){var n=t.params.id;this.fetchRestaurant(n),a()},data:function(){return{restaurant:{id:-1,name:"",categoryName:"",viewCounts:0,commentsLength:0}}},methods:{fetchRestaurant:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var n,r,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,c["a"].getRestaurant({restaurantId:t});case 3:n=a.sent,r=n.data,s=r.restaurant,e.restaurant={id:s.id,name:s.name,categoryName:s.Category.name,viewCounts:s.viewCounts,commentsLength:s.Comments.length},a.next=13;break;case 9:a.prev=9,a.t0=a["catch"](0),console.log("error",a.t0),u["a"].fire({icon:"error",title:"無法取得該餐廳資料，請稍後再試"});case 13:case"end":return a.stop()}}),a,null,[[0,9]])})))()}}},i=o,m=a("2877"),d=Object(m["a"])(i,n,r,!1,null,null,null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d0b2ec8.1237d8fd.js.map