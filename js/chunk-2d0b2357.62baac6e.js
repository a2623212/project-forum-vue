(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b2357"],{"22ab":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container py-5"},[r("NavTabs"),r("h1",{staticClass:"mt-5"},[e._v("美食達人")]),r("hr"),r("div",{staticClass:"row text-center"},e._l(e.users,(function(e){return r("UsersProfilingCard",{key:e.id,attrs:{"initial-user":e}})})),1)],1)},a=[],s=r("1da1"),o=(r("96cf"),r("8bb1")),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"col-3"},[r("router-link",{attrs:{to:{name:"user",params:{id:e.user.id}}}},[r("img",{attrs:{src:e._f("emptyImage")(e.user.image),width:"140px",height:"140px"}})]),r("h2",[e._v(e._s(e.user.name))]),r("span",{staticClass:"badge badge-secondary"},[e._v("追蹤人數："+e._s(e.user.FollowerCount))]),r("p",{staticClass:"mt-3"},[e.user.isFollowed?r("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.deleteFollowed(e.user.id)}}},[e._v(" 取消追蹤 ")]):r("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.addFollowed(e.user.id)}}},[e._v(" 追蹤 ")])])],1)},u=[],c=r("5530"),l=(r("d9e2"),r("2708")),d=r("4cce"),p=r("2fa3"),f={name:"UserProfilingCard",mixins:[l["a"]],props:{initialUser:{type:Object,required:!0}},data:function(){return{user:this.initialUser}},methods:{addFollowed:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,d["a"].addFollowing({userId:e});case 3:if(n=r.sent,a=n.data,"success"===a.status){r.next=7;break}throw new Error("data.message");case 7:t.user=Object(c["a"])(Object(c["a"])({},t.user),{},{isFollowed:!0,FollowerCount:t.user.FollowerCount+1}),r.next=13;break;case 10:r.prev=10,r.t0=r["catch"](0),p["a"].fire({icon:"error",title:"無法追蹤，請稍後再試"});case 13:case"end":return r.stop()}}),r,null,[[0,10]])})))()},deleteFollowed:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,d["a"].deleteFollowing({userId:e});case 3:if(n=r.sent,a=n.data,"success"===a.status){r.next=7;break}throw new Error("data.message");case 7:t.user=Object(c["a"])(Object(c["a"])({},t.user),{},{isFollowed:!1,FollowerCount:t.user.FollowerCount-1}),r.next=13;break;case 10:r.prev=10,r.t0=r["catch"](0),p["a"].fire({icon:"error",title:"無法追蹤，請稍後再試"});case 13:case"end":return r.stop()}}),r,null,[[0,10]])})))()}}},w=f,b=r("2877"),h=Object(b["a"])(w,i,u,!1,null,null,null),v=h.exports,m={name:"UsersTops",components:{NavTabs:o["a"],UsersProfilingCard:v},data:function(){return{users:[]}},created:function(){this.fetchUsers()},methods:{fetchUsers:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d["a"].getTopUsers();case 3:r=t.sent,n=r.data,e.users=n.users,t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),p["a"].fire({icon:"error",title:"無法載入美食達人，請稍後再試"});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()}}},g=m,x=Object(b["a"])(g,n,a,!1,null,null,null);t["default"]=x.exports}}]);
//# sourceMappingURL=chunk-2d0b2357.62baac6e.js.map