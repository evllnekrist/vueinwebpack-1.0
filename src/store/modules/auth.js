import * as types from '../types';
import {AUTHENTICATE} from '../../network/auth.apiclient';

const state = {
	token: localStorage.getItem("token"),
	fullname: localStorage.getItem("fullname")
};

const getters = {
	getToken: state => {return state.token;},
	getFullname: state => {return state.fullname;}
};

const mutations = {
	[types.LOGIN](state){},
	[types.LOGIN_SUCCESS](state){
		state.token = localStorage.getItem("token");
		state.fullname = localStorage.getItem("fullname");
	},
	[types.LOGIN_FAILED](state){
		state.token = '';
	},
	[types.LOGOUT](state){
		state.token = '';
	}
};

const actions = {
	login({state,commit,rootState}, params){
		commit(types.LOGIN);
		return AUTHENTICATE(params).then(response=>{
			localStorage.setItem('token', response.data.user.api_token);
			localStorage.setItem('fullname', response.data.user.fullname);
			commit(types.LOGIN_SUCCESS);
			// console.log("retrieve data, ", response.data.user.fullname, "\n", response.data.user.api_token);
		}).catch(error =>{
			console.log("login failed, \n", error);
			commit(types.LOGIN_FAILED)
		})
	},
	logout({commit}){
		localStorage.removeItem('token');
		localStorage.removeItem('fullname');
		localStorage.removeItem('profile');
		commit(types.LOGOUT);
	}
};

export default{
	state, mutations, actions, getters
}


