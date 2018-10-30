import * as NETWORK from './apiclient'

export const AUTHENTICATE = function(params){
	return NETWORK.API_CLIENT.post('/auth/login', params)
}