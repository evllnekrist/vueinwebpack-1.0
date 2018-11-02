<template>
	<center class="the-linning">
		<div class="almond-bar inner-lining-xl">
			<div class="col-md-2"></div>
			<div class="col-md-8 inner-lining-xl" style="background-color:#333;color:#4CAF50">
				<div class="huge inner-lining-m" id="login"> REGISTRATION </div>
				<p class="text-warn" v-if="errors_msg != ''">{{errors_msg}}</p>
				<form @submit.prevent="validateBeforeSubmit">
				  <div class="form-row form-group">
				      <label class="col-md-3 col-lg-2 left">Authority</label>
				      <select class="custom-select col-md-9 col-lg-10" name="authority" v-model="authority" v-validate="'required'">
				        <option value="1">Super-Admin</option>
				        <option value="2">Writer</option>
				        <option value="3">Reader</option>
				      </select>
				      <span>{{ errors.first('authority') }}</span>
				  </div>
				  <div class="form-row form-group">
				      <label class="col-md-3 col-lg-2 left">Email</label>
				      <input type="email" class="form-control col-md-9 col-lg-10" name="username" v-model="username" placeholder="Email" v-validate="'required'" :disabled="formDisabled">
				      <span>{{ errors.first('username') }}</span>
				  </div>
				  <div class="form-row form-group">
				      <label class="col-md-3 col-lg-2 left">Fullname</label>
				      <input type="text" class="form-control col-md-9 col-lg-10" name="fullname" v-model="fullname" placeholder="Fullname" v-validate="'required'" :disabled="formDisabled">
				      <span>{{ errors.first('fullname') }}</span>
				  </div>
				  <div class="form-row form-group">
				      <label class="col-md-3 col-lg-2 left">Sex</label>
				      <div class="col-md-9 col-lg-10">
				      	<div class="form-check form-check-inline">
						  <input class="form-check-input" type="radio" name="sex" v-model="sex" id="inlineRadio1" value="Male">
						  <label class="form-check-label" for="inlineRadio1">Male</label>
						</div>
						<div class="form-check form-check-inline">
						  <input class="form-check-input" type="radio" name="sex" v-model="sex" id="inlineRadio2" value="Female">
						  <label class="form-check-label" for="inlineRadio2">Female</label>
						</div>
						<div class="form-check form-check-inline">
						  <input class="form-check-input" type="radio" name="sex" v-model="sex" value="Other" disabled>
						  <label class="form-check-label" for="inlineRadio3">Other (Disabled)</label>
						</div>
					  </div>
				      <span>{{ errors.first('sex') }}</span>
				  </div>
				  <div class="form-row form-group">
				      <label class="col-md-3 col-lg-2 left">Institution</label>
				      <input type="text" class="form-control col-md-9 col-lg-10" name="institution" v-model="institution" placeholder="Institution" v-validate="'required'" :disabled="formDisabled">
				      <span>{{ errors.first('institution') }}</span>
				  </div>
				  <div class="form-row form-group">
				      <label class="col-md-3 col-lg-2 left">Password</label>
				      <input type="password" class="form-control col-md-9 col-lg-10" name="password" v-model="password" placeholder="Password" v-validate="'required'" :disabled="formDisabled">
				      <span>{{ errors.first('password') }}</span>
				  </div>
				  <div class="form-row form-group">
				      <label class="col-md-3 col-lg-2 left">Password Confirm</label>
				      <input type="password" class="form-control col-md-9 col-lg-10" name="password" v-model="password_confirm" placeholder="Re-Type Password" v-validate="'required'" :disabled="formDisabled">
				      <span>{{ errors.first('password') }}</span>
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
		name: "registration",
		data(){ 
			return{
				loading: false,
		        formDisabled: false,
		        username: '',
		        password: '',
		        password_confirm: '',
		        authority: 0,
		        fullname: '',
		        sex:'',
		        institution: '',
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