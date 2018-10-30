<template>
	<div class="almond-bar header curve-btm">
		<ul class="inner-lining-s dropdown-head">
			<li><router-link :to="{path: '/'}" class="almond-thin">Home</router-link></li>
			<li class="almond-thin dropdown-content"><a>Lyrics</a>
				<ul class="dropdown-detail">
					<li><router-link :to="{path: '/lyrics#once'}" class="almond-thin">Once</router-link></li><br>
					<li><router-link :to="{path: '/lyrics#twice'}" class="almond-thin">Twice</router-link></li><br>
					<li><router-link :to="{path: '/lyrics#thrice'}" class="almond-thin">Thrice</router-link></li>
				</ul>
			</li>
			<li><router-link :to="{name: 'show-articles'}" class="almond-thin">Articles</router-link></li>
			<li v-if="this.$store.getters.getFullname == null"><router-link :to="{name: 'let-login'}" class="almond-thin">Login</router-link></li>
			<li class="almond-thin" v-else><a @click="logout">Logout</a></li>
		</ul>
	</div>
</template>

<script>
	export default{
		name: 'menus',
		data(){
			return{};
		},
		mounted(){},
		methods:{
			logout(){
				alert("PULK")
		        this.$store.dispatch("logout")
		        this.$router.push('/login')
			}
		}
	};
</script>