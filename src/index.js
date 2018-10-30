import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import {routes} from './router/index'
import store from './store/store'
import VeeValidate from 'vee-validate';
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '../assets/css/app.css'

Vue.use(Router)
Vue.use(VeeValidate)
// vue.use(BootstrapVue)

const router = new Router({
	routes: [
		...routes,
	],
	mode: 'history',
	scrollBehavior(to, from, savedPosition){
		if(savedPosition){
			return savedPosition
		}
		if(to.hash){
			return{selector: to.hash}
		}
		return{x: 0, y: 0}
	}
})

new Vue({
	el: '#app',

	store,
	router,
	render: h => h(App)
})