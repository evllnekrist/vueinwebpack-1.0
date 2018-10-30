import Vue from 'vue';
import Vuex from 'vuex';
import auth from './modules/auth'

Vue.use(Vuex);

const store = new Vuex.Store({
	state:{
		data: []
	},
	mutations: {},
	action: {},
	getters: {},
	modules: {
		auth
	}
})

export default store