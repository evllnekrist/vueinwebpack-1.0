<template>
	<div class="almond-bar header curve-btm">
		<ul class="inner-lining-s dropdown-head">
			<li v-if="loading" style="margin-top:-8px">
				<img src="/assets/images/loading-orange.gif" width="40px">&nbsp;&nbsp;load the menus ...&nbsp;&nbsp;
			</li>
			<li v-show="menu_home"><router-link :to="{path: '/'}" class="almond-thin nav-item">Home</router-link></li>
			<li class="almond-thin nav-item dropdown-content" v-show="menu_lyrics"><a>Lyrics</a>
				<ul class="dropdown-detail">
					<li><router-link :to="{path: '/lyrics#once'}" class="almond-thin nav-item">Once</router-link></li><br>
					<li><router-link :to="{path: '/lyrics#twice'}" class="almond-thin nav-item">Twice</router-link></li><br>
					<li><router-link :to="{path: '/lyrics#thrice'}" class="almond-thin nav-item">Thrice</router-link></li>
				</ul>
			</li>
			<li v-show="menu_articles"><router-link :to="{name: 'show-articles'}" class="almond-thin nav-item">Articles</router-link></li>
			<li v-show="menu_user"><router-link :to="{name: 'show-user'}" class="almond-thin nav-item">User</router-link></li>
			<li v-if="this.$store.getters.getFullname == null"><router-link :to="{name: 'let-login'}" class="almond-thin nav-item">Login</router-link></li>
			<li class="almond-thin nav-item" v-else><a @click="logout">Logout</a></li>
		</ul>
	</div>
</template>

<script>
	import {LOGOUT, GET_PERSONAL_MENU} from "../network/auth.apiclient.js"
	export default{
		name: 'menus',
		data(){
			return{
				loading: true,
				menu_home: false,
				menu_articles: false,
				menu_articles_detail: false,
				menu_lyrics: false,
				menu_user:false
			}
		},
		mounted(){
			this.getMenu()
		},
		methods:{
			getMenu(){
				GET_PERSONAL_MENU(this.$store.getters.getToken).then((res)=>{
					let menu = res.data.data;
					if(typeof menu !== 'undefined' && menu.length > 0){
						for(let i=0; i<menu.length;i++){
							if(menu[i].master_menu.name == 'home'){
								this.menu_home = true
							}else if(menu[i].master_menu.name == 'show-articles'){
								this.menu_articles = true
							}else if(menu[i].master_menu.name == 'detail-articles'){
								this.menu_articles_detail = true
							}else if(menu[i].master_menu.name == 'show-lyrics'){
								this.menu_lyrics = true
							}else if(menu[i].master_menu.name == 'show-user'){
								this.menu_user = true
							}
						}
						this.loading = false
					}else{
						alert("Sorry, no menu exist for unregistered user. \nWe will directed you to login page")
						this.$router.push('/login')
					}
				}, (err)=>{
					this.handleAPI(err)
				})
			},
			logout(){
				alert("you log out ..")
				LOGOUT(this.$store.getters.getToken).then((res)=>{
					console.log("normally logout")
				}, (err)=>{
					console.log("AB normally logout")
				})
		        this.$store.dispatch("logout")
		        this.$router.push('/login')
			}
		}
	};
</script>