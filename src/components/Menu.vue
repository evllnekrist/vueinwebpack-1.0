<template>
	<div class="almond-bar header curve-btm">
		<ul class="inner-lining-s dropdown-head">
			<li><router-link :to="{path: '/'}" class="almond-thin nav-item">Home</router-link></li>
			<li class="almond-thin nav-item dropdown-content "><a>Lyrics</a>
				<ul class="dropdown-detail">
					<li><router-link :to="{path: '/lyrics#once'}" class="almond-thin nav-item">Once</router-link></li><br>
					<li><router-link :to="{path: '/lyrics#twice'}" class="almond-thin nav-item">Twice</router-link></li><br>
					<li><router-link :to="{path: '/lyrics#thrice'}" class="almond-thin nav-item">Thrice</router-link></li>
				</ul>
			</li>
			<li><router-link :to="{name: 'show-articles'}" class="almond-thin nav-item">Articles</router-link></li>
			<li><router-link :to="{name: 'show-user'}" class="almond-thin nav-item">User</router-link></li>
			<li v-if="this.$store.getters.getFullname == null"><router-link :to="{name: 'let-login'}" class="almond-thin nav-item">Login</router-link></li>
			<li class="almond-thin nav-item" v-else><a @click="logout">Logout</a></li>
		</ul>
	</div>
</template>

<script>
	import {LOGOUT} from "../network/auth.apiclient.js"
	export default{
		name: 'menus',
		data(){
			return{};
		},
		mounted(){},
		methods:{
			logout(){
		        this.$store.dispatch("logout")
		        this.$router.push('/login')
				alert("you log out ..")
				LOGOUT(this.$store.getters.getToken).then((res)=>{
					console.log("normally logout")
				}, (err)=>{
					console.log("abnormally logout, \n", err)
				})
			}
		}
	};
</script>