<template>
	<div class="highlight">
		<h1>Hello {{name}},</h1> 
		<h3>my name is PROJECT-{{userid}}</h3>
	</div>
	
</template>

<script>
	export default{
		name: "Hellopairing",
		props:{
			name: {
				type: String,
				require: true
			},
			userid: String
		}
	};
</script>

<style type="text/css">
	.highlight{color: green;}
</style>