<template>
	<div>
    <router-view name="menu"/>
    <router-view name="main-content"/>
    <router-view name="footer"/>
	</div>
</template>

<script>

	export default{
		name: 'app',
		components:{
		},
		data(){
			return {
			}
		},
		methods:{
		}
	};
</script>