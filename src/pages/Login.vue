<template>
	<center class="the-content ">
		<div class="almond-bar inner-lining-xl">
			<div class="col-md-2"></div>
			<div class="col-md-8 inner-lining-xl" style="background-color:#333;color:#4CAF50">
				<div class="huge inner-lining-m" id="login"> LOGIN </div>
				<p class="text-warn" v-if="errors_msg != ''">{{errors_msg}}</p>
				<form @submit.prevent="validateBeforeSubmit">
				  <div class="form-row">
				    <div class="form-group col-md-6">
				      <label for="inputEmail">Email</label>
				      <input type="email" class="form-control" name="username" v-model="username" placeholder="Email" v-validate="'required'" :disabled="formDisabled">
				      <span>{{ errors.first('username') }}</span>
				    </div>
				    <div class="form-group col-md-6">
				      <label for="inputPassword">Password</label>
				      <input type="password" class="form-control" name="password" v-model="password" placeholder="Password" v-validate="'required'" :disabled="formDisabled">
				      <span>{{ errors.first('password') }}</span>
				    </div>
				  </div>
				  <p v-if="loading"><img src="/assets/images/loading-orange.gif" width="100px"></p>
				  <p v-else><button type="submit" :disabled="formDisabled">Submit</button></p>
				  <br></br><br></br>
				  <router-link :to="{path: '/'}" style="float:right">*click here to back to home</router-link>
				</form>
			</div>
			<div class="col-md-2"></div>
		</div>
	</center>
</template>

<script>
	export default{
		name: "login",
		data(){ 
			return{
				loading: false,
		        formDisabled: false,
		        username: '',
		        password: '',
		        errors_msg: ''
			}
		},
	    beforeRouteEnter (to, from, next) {
	      next(vm => {
	        vm.last_route = from.fullPath === null ? '/' : from.fullPath
	      })
	    },
		methods:{
			validateBeforeSubmit(){
		        this.$validator.validateAll().then((result) => {
		          if (result) {
		            var params = new URLSearchParams();
		            params.append('email', this.username);
		            params.append('password', this.password);
		            this.formDisabled = true
		            this.loading = true
		            this.$store.dispatch("login", params).then(res => {
		              if (this.$store.getters.getToken) {
		              	this.loading = false
		                this.$router.push(this.last_route)
		              	// alert("Welcome back, "+this.$store.getters.getFullname)
		              } else {
		              	this.loading = false
		                this.errors_msg = 'Invalid Credentials'
		                this.formDisabled = false
		              }
		            })
		            return;
		          }
		        });
			}
		}
	};
</script>