const Menu = function(resolve){require(['../components/Menu.vue'], resolve)}
const Footer = function(resolve){require(['../components/Footer.vue'], resolve)}

const Dashboard = function(resolve){require(['../pages/Dashboard.vue'], resolve)}
const Articles = function(resolve){require(['../pages/Articles.vue'], resolve)}
const Lyrics = function(resolve){require(['../pages/Lyrics.vue'], resolve)}
const User = function(resolve){require(['../pages/User/User.vue'], resolve)}

const Login = function(resolve){require(['../pages/Login.vue'], resolve)}

export const routes = [
{
	path: '/',
	name: 'home',
	components: {
		'menu' : Menu,
		'main-content' : Dashboard,
		'footer': Footer
	}
},
{
	path: '/articles',
	name: 'show-articles',
	components: {
		'menu' : Menu,
		'main-content' : Articles,
		'footer': Footer
	}
},
{
	path: '/lyrics',
	name: 'show-lyrics',
	components: {
		'menu' : Menu,
		'main-content' : Lyrics,
		'footer': Footer
	}
},
{
	path: '/list-user',
	name: 'show-user',
	components: {
		'menu' : Menu,
		'main-content' : User,
		'footer': Footer
	}
},
{
	path: '/detail-user',
	name: 'detail-user',
	components: {
		'menu' : Menu,
		'main-content' : User,
		'footer': Footer
	}
},
{
	path: '/login',
	name: 'let-login',
	components: {
		'main-content' : Login
	}
},
]