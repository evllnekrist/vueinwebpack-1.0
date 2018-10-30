<template>
	<div class="highlight">
		<br><br>
		<h4>Hello, {{userName}} 
			<b v-if="userName == 'not login yet?'">
				<router-link :to="{name: 'let-login'}" class="almond-thin">click here</router-link>
			</b>
		</h4> 
		<h5>my name is {{rname}} PROJECT-{{rid}}</h5>
		<br><br>
	</div>
	
</template>

<script>
	export default{
		name: "hello",
		props:{ //yang didefine di tag
			robotName: {
				type: String,
				require: true
			},
			robotId: String 
		},
		data(){ //yang didefine di sini
			return{
				userName: '',
				rname: this.robotName,
				rid: this.robotId
			}
		},
		mounted(){
			this.getUser()
		},
		methods:{
			getUser(){
				let name = this.$store.getters.getFullname
				if(name != null){
					this.userName = name
				}else{
					this.userName = 'not login yet?'
				}
			}
		}
	};
</script>

<style type="text/css">
	.highlight{color: green;}
</style>