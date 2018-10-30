<template>
	<div class="the-lining">
		<div class="inner-lining-m curve-btm" style="background-color:#534038; color:#f2d2ab">
		<center>
		<div class="huge"  id="main"> Blo<u>ody Moo</u>ldy </div>
			<br><br>
			<button v-on:click="getData">{{command}}</button>
			<br><br><br><br>
			<div v-if="loading">
				<img src="/assets/images/loading-orange.gif" width="100px">
			</div>
		</center>
		<div v-for="value in data" class="inner-lining-s curve-all" style="background-color:#333">
			<h2><a :href="'#'+value.slug">{{value.title}}</a></h2>
			<i>synopsis by {{value.user.fullname}}</i>
			<p v-html="value.body"></p>
		</div>
		</div>
	</div>
</template>

<script>
	import * as NETWORK_ARTICLE from '../network/article.apiclient.js'

	export default{
		name: 'articles',
		components:{
		},
		data(){
			return {
				data: [],
				loading: false,
				command: "Get Data"
			}
		},
		methods:{
			getData: function(){
				if(typeof this.data !== 'undefined' && this.data.length > 0){
					this.data = []
					this.command = "Get Data"
				}else{
					this.loading = true
					NETWORK_ARTICLE.GET_ARTICLE()
					.then((res)=>{
						// console.log(response.data.data)
						this.data = res.data.data.articles
					}, (err)=>{
						alert("Hoops..")
					})
					this.loading = false
					this.command = "Hide Result"
				}
			}
		}
	};
</script>