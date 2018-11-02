<template class="the-linning">
<div class="bg-wood">
	<div id="collapseUserForm"  class="panel-collapse collapse">
	<!-- class="collapse"> -->
		<center class="almond-bar inner-lining-m"><br><br>
		<div class="col-md-2"></div>
		<div class="col-md-8 inner-lining-m" style="background-color:#333;color:#4CAF50">
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
			</form>
		</div>
		<div class="col-md-2"></div>
		</center>
	</div>

	<div class="container inner-lining-m">
		<br><br><strong type="button" class="btn btn-success" style="float:right"  data-toggle="collapse" data-target="#collapseUserForm">Add New User</strong>
		<div class="huge"  id="main"> List User </div>
		<br><br>
		<div v-if="loading"><img src="/assets/images/loading-orange.gif" width="100px"></div>
		<default-table 
			:isLoading="loading"
			:entity="data_entity"
			:lastPage="last_page"
			:listData="data"
			:limitData="limit_data"
			:detailRoute="'detail-user'"
			:detailRouteType="'params'"
			:detailIdentifier="'id'"
			:detailParams="{}"
			:showDelete="false"
			v-on:changePage="changePage"
			v-on:changePageSearch="changePageSearch"/>
	</div>
</div>
</template>

<script>
	import {GET_USER} from '../../network/auth.apiclient'
	import DefaultTable from '../../components/table/DefaultTable'

	export default{
		name: 'list_user',
		components:{
			DefaultTable
		},
		data(){
			return {
				command: "Get Data",
				loading: false,
				data: [],
				data_entity: [
					{name: 'fullname', title: 'Fullname', type: 'text'},
					{name: 'email', title: 'Email', type: 'text'},
				],
				limit_data: 5,
				last_page: 0,
				current_page: 1,
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
		mounted(){
			this.getData(1)
		},
		methods:{
			getData: function(page){
				this.loading = true
				GET_USER(this.$store.getters.getToken, this.limit_data, page).then((res)=>{
					this.data = res.data.data.users
					this.last_page = res.data.data.paginator.total_pages
					this.current_page = res.data.data.paginator.current_page
				}, (err)=>{
					alert("Hoops..")
				})
				this.loading = false
				this.command = "Hide Result"
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
		}
	};
</script>