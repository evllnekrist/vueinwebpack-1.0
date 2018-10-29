
import axios from 'axios';

export var base_url = 'http://127.0.0.1:8000/api'

export const API_CLIENT = axios.create({
	baseURL: base_url,
	headers: {
		'Content-type' : 'application/x-www-form-urlencoded'
	}
})

export const API_CLIENT_WITH_TOKEN = function(token){
	return axios.create({
		headers: {
			'Content-type' : 'application/x-www-form-urlencoded',
			Authorization: 'Bearer '+ token
		}
	})
}