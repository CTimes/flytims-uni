import Vue from 'vue'
import App from './App'
import uView from "uview-ui"

import store from './common/store'
import * as filters from './common/filters' // global filters
// import moment from 'moment'
// 舍弃了全局挂载moment.js的方案，这样会导致小程序端主包vender过大，采用按需引用方案，配合uniapp的分包优化。
// 在需要引用moment的地方引入其压缩版moment.min.js(moment-with-locales.min为带国际化的压缩版)
import Custom from './static/colorui/components/custom.vue'
import Tabar from './components/tabar/tabar.vue'
import Section from './components/section/section.vue'

import { request } from './api/server.js'

// var vuexStore = require("./store/$u.mixin.js") // require 方式报错
import vuexStore from "./common/store/$u.mixin.js"
Vue.mixin(vuexStore)

Vue.component('fly-custom',Custom)
// 自定义tabar有切换刷新问题，使用自定义tabar，直接去掉page.json中的tabbar相关配置，然后每个tabbar页面添加自定义tabbar组件即可。
// 自定义tabbar相较于原生tabbar扩展性较强，可以自定义样式。
Vue.component('fly-component-tabar',Tabar)
Vue.component('fly-section',Section)

Vue.config.productionTip = false

Vue.prototype.$store = store
Vue.prototype.$request = request
// Vue.prototype.$moment = moment

App.mpType = 'app'

Vue.use(uView)

// register global utility filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

const app = new Vue({
	store,
    ...App
})
app.$mount()
