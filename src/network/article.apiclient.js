import * as NETWORK from './apiclient'

export const GET_ARTICLE = function(token, limit, page){
	return NETWORK.API_CLIENT_WITH_TOKEN(token).get('/articles/'+limit+'?page='+page)
}
export const GET_ARTICLE_BY_ID = function(token, id){
	return NETWORK.API_CLIENT_WITH_TOKEN(token).get('/articles/'+id)
}
export const ADD = function(token, params){
	return NETWORK.API_CLIENT_WITH_TOKEN(token).post('/articles/save',params)
}
export const UPDATE = function(token, params){
	return NETWORK.API_CLIENT_WITH_TOKEN(token).post('/articles/update',params)
}
export const DELETE = function(token, id){
	return NETWORK.API_CLIENT_WITH_TOKEN(token).get('/articles/delete/'+id)
}