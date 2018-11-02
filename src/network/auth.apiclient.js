import * as NETWORK from './apiclient'

export const AUTHENTICATE = function(params){
	return NETWORK.API_CLIENT.post('/auth/login', params)
}

export const LOGOUT = function(token){
	return NETWORK.API_CLIENT_WITH_TOKEN(token).post('/auth/logout')
}

export const GET_USER = function(token, limit, page){
	return NETWORK.API_CLIENT_WITH_TOKEN(token).get('/auth/list/'+limit+'?page='+page)
}

