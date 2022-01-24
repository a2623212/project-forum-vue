import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app') //指稱我現在要用 app.vue 產生內容，產生之後請幫我灌到 #app (HTML) 中
