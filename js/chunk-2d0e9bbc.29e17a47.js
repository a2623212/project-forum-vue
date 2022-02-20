(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e9bbc"],{"8f91":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container py-5"},[r("AdminUserForm",{attrs:{"initial-user":e.user,"is-processing":e.isProcessing},on:{"after-submit":e.handleAfterSubmit}})],1)},s=[],i=r("1da1"),n=r("5530"),u=(r("96cf"),r("b0c0"),r("d3b7"),r("25f0"),r("d9e2"),r("2f62")),o=r("4cce"),m=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("form",{on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.handleSubmit.apply(null,arguments)}}},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"name"}},[e._v("Name")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.name,expression:"user.name"}],staticClass:"form-control",attrs:{id:"name",type:"text",name:"name",placeholder:"Enter Name",required:""},domProps:{value:e.user.name},on:{input:function(t){t.target.composing||e.$set(e.user,"name",t.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"image"}},[e._v("Image")]),e.user.image?r("img",{staticClass:"d-block img-thumbnail mb-3",attrs:{src:e.user.image,width:"200",height:"200"}}):e._e(),r("input",{staticClass:"form-control-file",attrs:{id:"image",type:"file",name:"image",accept:"image/*"},on:{change:e.handleFileChange}})]),r("button",{staticClass:"btn btn-primary",attrs:{type:"submit",disabled:e.isProcessing}},[e._v(" Submit ")])])},c=[],l=(r("3ca3"),r("ddb0"),r("2b3d"),r("9861"),r("2fa3")),d={name:"AdminUserForm",props:{initialUser:{type:Object,default:function(){return{name:"",image:""}}},isProcessing:{type:Boolean,default:!1}},created:function(){this.user=Object(n["a"])(Object(n["a"])({},this.user),this.initialUser)},data:function(){return{user:{id:0,image:"",name:"",email:""}}},methods:{handleFileChange:function(e){var t=e.target.files;if(0!==t.length){var r=window.URL.createObjectURL(t[0]);this.user.image=r}else this.user.image=""},handleSubmit:function(e){if(this.user.name){var t=e.target,r=new FormData(t);this.$emit("after-submit",r)}else l["a"].fire({icon:"warning",title:"您尚未填寫姓名"})}}},f=d,h=r("2877"),p=Object(h["a"])(f,m,c,!1,null,null,null),g=p.exports,b={name:"AdminUserEdit",components:{AdminUserForm:g},watch:{currentUser:function(e){console.log("user",e);var t=this.$route.params.id;this.setUser(t)}},created:function(){var e=this.$route.params.id;this.setUser(e)},beforeRouteUpdate:function(e,t,r){var a=e.params.id;this.setUser(a),r()},computed:Object(n["a"])({},u["b"]["currentUser"]),data:function(){return{user:{id:0,image:"",name:"",email:""},isProcessing:!1}},methods:{setUser:function(e){var t=this.currentUser,r=t.id,a=t.image,s=t.name,i=t.email;r.toString()===e.toString()?(this.user.id=r,this.user.name=s,this.user.email=i,this.user.image=a):this.$router.push({name:"not-found"})},handleAfterSubmit:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var a,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,t.isProcessing=!0,r.next=4,o["a"].update({userId:t.user.id,formData:e});case 4:if(a=r.sent,s=a.data,"success"===s.status){r.next=8;break}throw new Error(s.message);case 8:t.$router.push({name:"user",params:{id:t.id}}),r.next=14;break;case 11:r.prev=11,r.t0=r["catch"](0),l["a"].fire({icon:"error",title:"無法更新使用者資料，請稍後再試"});case 14:case"end":return r.stop()}}),r,null,[[0,11]])})))()}}},v=b,w=Object(h["a"])(v,a,s,!1,null,null,null);t["default"]=w.exports}}]);
//# sourceMappingURL=chunk-2d0e9bbc.29e17a47.js.map