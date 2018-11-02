import * as NETWORK from './apiclient'

export const GET_ARTICLE = function(token, limit, page){
	return NETWORK.API_CLIENT_WITH_TOKEN(token).get('/articles/'+limit+'?page='+page)
}