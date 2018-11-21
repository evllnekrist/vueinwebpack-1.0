import * as NETWORK from './apiclient'

export const AUTHENTICATE = function(params){
	return NETWORK.API_CLIENT.post('/auth/login', params)
}
export const LOGOUT = function(token){
	return NETWORK.API_CLIENT_WITH_TOKEN(token).post('/auth/logout')
}
export const REGISTER = function(token, params){
	return NETWORK.API_CLIENT_WITH_TOKEN(token).post('/auth/register', params)
}
export const UPDATE_USER = function(token, params){
	return NETWORK.API_CLIENT_WITH_TOKEN(token).post('/auth/update', params)
}
export const GET_USER = function(token, limit, page){
	return NETWORK.API_CLIENT_WITH_TOKEN(token).get('/auth/list/'+limit+'?page='+page)
}
export const GET_USER_BY_ID = function(token, id){
	return NETWORK.API_CLIENT_WITH_TOKEN(token).get('/auth/'+id)
}
export const GET_PERSONAL_MENU = function(token){
	return NETWORK.API_CLIENT_WITH_TOKEN(token).get('/auth/personal_menu')
}

