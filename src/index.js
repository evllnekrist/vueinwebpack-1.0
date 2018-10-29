import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import {routes} from './router/index'
import '../assets/app.css'

Vue.use(Router)

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

	router,
	render: h => h(App)
})