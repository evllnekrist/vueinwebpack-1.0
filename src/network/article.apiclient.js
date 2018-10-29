import * as NETWORK from './apiclient'

export const GET_ARTICLE = function(){
	return NETWORK.API_CLIENT.get('/articles')
}