(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ab43a"],{1511:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container py-5"},[r("UserProfileCard",{attrs:{user:e.user,"initial-is-followed":e.isFollowed,"is-current-user":e.currentUser.id===e.user.id}}),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-4"},[r("UserFollowingsCard",{attrs:{followings:e.user.Followings}}),r("UserFollowersCard",{attrs:{followers:e.user.Followers}})],1),r("div",{staticClass:"col-md-8"},[r("UserCommentsCard",{attrs:{comments:e.user.Comments}}),r("UserFavoritedRestaurantsCard",{attrs:{favoritedRestaurants:e.user.FavoritedRestaurants}})],1)])],1)},a=[],n=r("1da1"),i=r("5530"),o=(r("96cf"),r("b0c0"),r("2f62")),l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"card mb-3"},[r("div",{staticClass:"row no-gutters"},[r("div",{staticClass:"col-md-4"},[r("img",{attrs:{src:e._f("emptyImage")(e.user.image),width:"300px",height:"300px"}})]),r("div",{staticClass:"col-md-8"},[r("div",{staticClass:"card-body"},[r("h5",{staticClass:"card-title"},[e._v(" "+e._s(e.user.name)+" ")]),r("p",{staticClass:"card-text"},[e._v(" "+e._s(e.user.email)+" ")]),r("ul",{staticClass:"list-unstyled"},[r("li",[r("strong",[e._v(e._s(e.user.Comments.length))]),e._v(" 已評論餐廳 ")]),r("li",[r("strong",[e._v(e._s(e.user.FavoritedRestaurants.length))]),e._v(" 收藏的餐廳 ")]),r("li",[r("strong",[e._v(e._s(e.user.Followings.length))]),e._v(" followings (追蹤者) ")]),r("li",[r("strong",[e._v(e._s(e.user.Followers.length))]),e._v(" followers (追隨者) ")])]),e.isCurrentUser?[r("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"user-edit",params:{id:e.user.id}}}},[e._v(" Edit ")])]:[e.isFollowed?r("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.deleteFollowing(e.user.id)}}},[e._v(" 取消追蹤 ")]):r("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.addFollowing(e.user.id)}}},[e._v(" 追蹤 ")])]],2)])])])},c=[],u=(r("d9e2"),r("2708")),d=r("4cce"),m=r("2fa3"),v={name:"userProfileCard",mixins:[u["a"]],props:{user:{type:Object,required:!0},initialIsFollowed:{type:Boolean,required:!0},isCurrentUser:{type:Boolean,required:!0}},watch:{initialIsFollowed:function(e){this.isFollowed=e}},data:function(){return{isFollowed:this.initialIsFollowed}},methods:{deleteFollowing:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){var s,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,d["a"].deleteFollowing({userId:e});case 3:if(s=r.sent,a=s.data,"error"!==a.status){r.next=7;break}throw new Error(a.message);case 7:t.isFollowed=!1,r.next=14;break;case 10:r.prev=10,r.t0=r["catch"](0),console.log("error",r.t0),m["a"].fire({icon:"error",title:"無法取消追蹤，請稍後再試"});case 14:case"end":return r.stop()}}),r,null,[[0,10]])})))()},addFollowing:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){var s,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,d["a"].addFollowing({userId:e});case 3:if(s=r.sent,a=s.data,"error"!==a.status){r.next=7;break}throw new Error(a.message);case 7:t.isFollowed=!0,r.next=14;break;case 10:r.prev=10,r.t0=r["catch"](0),console.log("error",r.t0),m["a"].fire({icon:"error",title:"無法加入追蹤，請稍後再試"});case 14:case"end":return r.stop()}}),r,null,[[0,10]])})))()}}},g=v,f=r("2877"),w=Object(f["a"])(g,l,c,!1,null,null,null),p=w.exports,h=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"card mb-3"},[r("div",{staticClass:"card-header"},[r("strong",[e._v(e._s(e.followings.length))]),e._v(" followings (追蹤者) ")]),r("div",{staticClass:"card-body"},e._l(e.followings,(function(t){return r("router-link",{key:t.id,attrs:{to:{name:"user",params:{id:t.id}}}},[r("img",{staticClass:"mr-1",attrs:{src:e._f("emptyImage")(t.image),width:"60",height:"60"}})])})),1)])},C=[],_={name:"userFollowingsCard",mixins:[u["a"]],props:{followings:{type:Array,required:!0}}},b=_,F=Object(f["a"])(b,h,C,!1,null,null,null),y=F.exports,x=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"card"},[r("div",{staticClass:"card-header"},[r("strong",[e._v(e._s(e.followers.length))]),e._v(" followers (追隨者) ")]),r("div",{staticClass:"card-body"},e._l(e.followers,(function(t){return r("router-link",{key:t.id,attrs:{to:{name:"user",params:{id:t.id}}}},[r("img",{staticClass:"mr-1",attrs:{src:e._f("emptyImage")(t.image),width:"60",height:"60"}})])})),1)])},k=[],R={name:"userFollowersCard",mixins:[u["a"]],props:{followers:{type:Array,required:!0}}},U=R,j=Object(f["a"])(U,x,k,!1,null,null,null),O=j.exports,I=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"card"},[r("div",{staticClass:"card-header"},[r("strong",[e._v(e._s(e.comments.length))]),e._v(" 已評論餐廳 ")]),r("div",{staticClass:"card-body"},e._l(e.comments,(function(t){return r("router-link",{key:t.id,attrs:{to:{name:"restaurant",params:{id:t.Restaurant.id}}}},[r("img",{staticClass:"mr-1 mb-1",attrs:{src:e._f("emptyImage")(t.Restaurant.image),width:"60",height:"60"}})])})),1)])},E=[],q={name:"userCommentsCard",mixins:[u["a"]],props:{comments:{type:Array,required:!0}}},$=q,P=Object(f["a"])($,I,E,!1,null,null,null),A=P.exports,B=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"card"},[r("div",{staticClass:"card-header"},[r("strong",[e._v(e._s(e.favoritedRestaurants.length))]),e._v(" 收藏的餐廳 ")]),r("div",{staticClass:"card-body"},e._l(e.favoritedRestaurants,(function(t){return r("router-link",{key:t.id,attrs:{to:{name:"restaurant",params:{id:t.id}}}},[r("img",{staticClass:"mr-1 mb-1",attrs:{src:e._f("emptyImage")(t.image),width:"60",height:"60"}})])})),1)])},D=[],J={name:"userFavoritedRestaurantsCard",mixins:[u["a"]],props:{favoritedRestaurants:{type:Array,required:!0}}},z=J,G=Object(f["a"])(z,B,D,!1,null,null,null),H=G.exports,K={name:"user",components:{UserProfileCard:p,UserFollowingsCard:y,UserFollowersCard:O,UserCommentsCard:A,UserFavoritedRestaurantsCard:H},created:function(){var e=this.$route.params.id;this.fetchUser(e)},computed:Object(i["a"])({},Object(o["b"])(["currentUser"])),beforeRouteUpdate:function(e,t,r){var s=e.params.id;this.fetchUser(s),r()},data:function(){return{user:{id:-1,name:"",email:"",image:"",Comments:[],FavoritedRestaurants:[],Followers:[],Followings:[]},isFollowed:!1}},methods:{fetchUser:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){var s,a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,d["a"].get({userId:e});case 3:s=r.sent,a=s.data,n=a.profile,t.user={id:n.id,name:n.name,email:n.email,image:n.image,Comments:n.Comments,FavoritedRestaurants:n.FavoritedRestaurants,Followers:n.Followers,Followings:n.Followings},t.isFollowed=a.isFollowed,r.next=14;break;case 10:r.prev=10,r.t0=r["catch"](0),console.log("error",r.t0),m["a"].fire({icon:"error",title:"無法取得該使用者資料，請稍後再試"});case 14:case"end":return r.stop()}}),r,null,[[0,10]])})))()}}},L=K,M=Object(f["a"])(L,s,a,!1,null,null,null);t["default"]=M.exports}}]);
//# sourceMappingURL=chunk-2d0ab43a.1f08a761.js.map