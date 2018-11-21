export const reusablemixin = {
	data(){
		return{}
	},
	methods: {
		showModal(msg){
			alert(msg)
		},
		handleAPI(e){
			if(e.response.status === 400 || e.response.status === 401){
				alert("Your session has been done, please login again ...")
				this.$router.push('/login')
			}else {
		        if (typeof e.response.data.msg !== 'undefined'){
		          this.showModal(e.response.data.msg)
		        } else {
		          this.showModal(typeof e.response.data.error !== 'undefined' ? e.response.data.error : e.response.data.message)
		        }
		     }
		}
	}
}

