<template class="the-linning">
<div class="bg-wood">
	<div id="collapseUserForm"  class="collapse">
		<center class="almond-bar inner-lining-m"><br><br>
		<div class="col-md-2"></div>
		<div class="col-md-8 inner-lining-m" style="background-color:#333;color:#4CAF50">
			<p class="text-warn" v-if="errors_msg != ''">{{errors_msg}}</p>
			<form @submit.prevent="validateBeforeSubmit">
			  <div class="form-row form-group">
			      <label class="col-md-3 col-lg-2 left">Authority</label>
			      <div  class="col-md-9 col-lg-10">
			      <select class="custom-select" name="authority" v-model="authority">
			        <option value="1">Super-Admin</option>
			        <option value="2">Writer</option>
			        <option value="3">Reader</option>
			      </select>
			      <span>* required  {{ errors.first('authority') }}</span>
			  	  </div>
			  </div>
			  <div class="form-row form-group">
			      <label class="col-md-3 col-lg-2 left">Email</label>
			      <div  class="col-md-9 col-lg-10">
			      <input type="email" class="form-control" name="username" v-model="username" placeholder="Email" :disabled="formDisabled">
			      <span>* required  {{ errors.first('username') }}</span>
			  	  </div>
			  </div>
			  <div class="form-row form-group">
			      <label class="col-md-3 col-lg-2 left">Fullname</label>
			      <div  class="col-md-9 col-lg-10">
			      <input type="text" class="form-control" name="fullname" v-model="fullname" placeholder="Fullname" :disabled="formDisabled">
			      <span>* required  {{ errors.first('fullname') }}</span>
			  	  </div>
			  </div>
			  <div class="form-row form-group">
			      <label class="col-md-3 col-lg-2 left">Sex</label>
			      <div class="col-md-9 col-lg-10">
			      	<div class="form-check form-check-inline">
					  <input class="form-check-input" type="radio" name="sex" v-model="sex" id="inlineRadio1" value="Male" checked>
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
			        <span>{{ errors.first('sex') }}</span>
				  </div>
			  </div>
			  <div class="form-row form-group">
			      <label class="col-md-3 col-lg-2 left">Institution</label>
			      <div class="col-md-9 col-lg-10">
			      <input type="text" class="form-control" name="institution" v-model="institution" placeholder="Institution" :disabled="formDisabled">
			      <span>{{ errors.first('institution') }}</span>
			  	  </div>
			  </div>
			  <div class="form-row form-group">
			      <label class="col-md-3 col-lg-2 left">Password</label>
			      <div class="col-md-9 col-lg-10">
			      <input type="password" class="form-control" name="password" v-model="password" placeholder="Password" :disabled="formDisabled">
			      <span>{{ errors.first('password') }}</span>
			  	  </div>
			  </div>
			  <div class="form-row form-group">
			      <label class="col-md-3 col-lg-2 left">Password Confirm</label>
			      <div class="col-md-9 col-lg-10">
			      <input type="password" class="form-control" name="password" v-model="password_confirm" placeholder="Re-Type Password" :disabled="formDisabled">
			      <span>{{ errors.first('password') }}</span>
			  	  </div>
			  </div>
			  <p v-if="loadingForm"><img src="/assets/images/loading-orange.gif" width="100px"></p>
			  <p v-else><button type="submit" :disabled="formDisabled">{{command}}</button></p>
			</form>
		</div>
		<div class="col-md-2"></div>
		</center>
	</div>

	<div class="container inner-lining-m">
		<br><br><strong type="button" class="btn btn-success" style="float:right" data-toggle="collapse" data-target="#collapseUserForm">Add New User</strong>
		<div class="huge"  id="main"> List User </div>
		<br><br>
		<default-table 
			:isLoading="loadingData"
			:entity="data_entity"
			:lastPage="last_page"
			:listData="data"
			:limitData="limit_data"
			:detailIdentifier="'id'"
			:detailParams="{}"
			:showDelete="false"
			:showAnotherPageRoute="false"
			:showSamePageRoute="true"
			v-on:changePage="changePage"
			v-on:changePageSearch="changePageSearch"
			v-on:triggerCollapse="triggerCollapse"/>

		<center v-if="loadingData"><img src="/assets/images/loading-orange.gif" width="100px"></center>
	</div>
</div>
</template>

<script>
	import {GET_USER,REGISTER,UPDATE_USER} from '../../network/auth.apiclient'
	import DefaultTable from '../../components/table/DefaultTable'

	export default{
		name: 'list_user',
		components:{
			DefaultTable
		},
		data(){
			return {
				command: "Add New User",
				loadingForm: false,
				loadingData: false,
		        formDisabled: false,
				limit_data: 5,
				last_page: 0,
				current_page: 1,
		        errors_msg: '',
				data: [],
				data_entity: [
					{name: 'fullname', title: 'Fullname', type: 'text'},
					{name: 'email', title: 'Email', type: 'text'},
					{name: 'sex', title: 'Sex', type: 'text'},
					{name: 'authority', title: 'Access Right', type: 'text'},
					{name: 'institution', title: 'Institution', type: 'text'},
				],
		        id: 0,
		        username: '',
		        password: '',
		        password_confirm: '',
		        authority: '',
		        fullname: '',
		        sex:'Male',
		        institution: '',
		        id_selected: 0,
			}
		},
		mounted(){
			this.getData(1)
		},
		methods:{
			getData: function(page){
				this.loadingData = true
				GET_USER(this.$store.getters.getToken, this.limit_data, page).then((res)=>{
					this.data = res.data.data.users
					this.last_page = res.data.data.paginator.total_pages
					this.current_page = res.data.data.paginator.current_page
					this.loadingData = false
				}, (err)=>{
					this.loadingData = false
					this.handleAPI(err)
				})
			},
			changePage(page){
				if(page !== this.current_page){
		          this.getData(page)
		        }
		    },
		    changePageSearch(query){
		        this.search_query = query
		        this.getData(1)
		    },
			validateBeforeSubmit(){
		        this.$validator.validateAll().then((result) => {
		          if (result) {
		            var params = new URLSearchParams();
		            params.append('id', this.id);
		            params.append('email', this.username);
		            params.append('password', this.password);
		            params.append('password_confirmation', this.password_confirm);
		            params.append('authority', this.authority);
		            params.append('name', this.fullname);
		            params.append('sex', this.sex);
		            params.append('institution', this.institution);
		            // this.formDisabled = true
		            this.loadingForm = true
		            if(this.id === 0){
						REGISTER(this.$store.getters.getToken, params).then((res)=>{
							if(typeof res.data.data.id === 'undefined' || res.data.data.id === null){}
							else{}
							alert("SUCCED")
							this.clearForm()
							this.getData(this.current_page)
							this.loadingForm = false
						}, (err)=>{
							this.loadingForm = false
							this.handleAPI(err)
						})
		            }else{
						UPDATE_USER(this.$store.getters.getToken, params).then((res)=>{
							alert("SUCCED")
							this.clearForm()
							this.getData(this.current_page)
							this.loadingForm = false
						}, (err)=>{
							this.loadingForm = false
							this.handleAPI(err)
						})
		            }
		            return;
		          }
		        });
			},
			clearForm(){
				this.id = 0
		        this.username = ''
		        this.password = ''
		        this.password_confirm = ''
		        this.authority = ''
		        this.fullname = ''
		        this.sex ='Male'
		        this.institution = ''
				console.log("cleaning ... DONE")
			},
			triggerCollapse(idx, id_user){
				let classDefined = document.getElementById("collapseUserForm").className;
				if(classDefined == "collapse" || (this.id_selected != 0 && this.id_selected != id_user)){
					this.id = this.data[idx].id
			        this.username = this.data[idx].email
			        this.password = ''
			        this.password_confirm = ''
			        this.authority = this.data[idx].authority
			        this.fullname = this.data[idx].fullname
			        this.sex = this.data[idx].sex
			        this.institution = this.data[idx].institution
					this.command = "Update User Info"
					this.id_selected = this.id 
					document.getElementById("collapseUserForm").className = "collapse show";
				}else{
					document.getElementById("collapseUserForm").className = "collapse";
				}
			},
		}
	};
</script>
<style>
	span{color:orange;}
</style>