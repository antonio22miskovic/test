
/////////////////////////// CONTACTS //////////////

export const UserModule = {

	namespaced: true,

	state : () => ({

    	users:[],
		valid:false,
		pull:[],
		dialog:false,
		b:true,
		filtering_error:false,
		search:'',
		show_errors: false,
		paginate:{
            'total': 0,
            'current_page': 0,
            'per_page': 0,
            'last_page': 0,
            'from': 0,
            'to' : 0,
        },

	}),

	mutations:{

		SEARCH(state, payload){

			state.search = payload

		},

		SET_PAGINATE(state, payload){

			state.paginate = payload

		},

		SET_CONTACT(state, payload){

			state.users = payload

		},

		DIALOG_UPDATE(state, payload){

			state.dialog = payload

		},

		PULL_UPDATE(state, payload){

			state.pull   = payload
			state.dialog = true

		}

	},

	actions:{

	async GET(context, page){
		try {
			let res = await axios.get('/api/user?page='+page)
			if (res.data.users.data.length > 0) {
			 		context.commit('SET_CONTACT',res.data.users.data)
					context.commit('SET_PAGINATE',res.data.paginate)
			}

		} catch(e) {
			console.log(e);
		}
	},
	async DELETE(context, id){
			 axios.delete('/api/user/'+id).then(res=>{
			}).
			 catch(err =>{
			 	console.log(err)
			 })
		}
	}


}