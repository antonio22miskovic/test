
/////////////////////////// CONTACTS //////////////

export const contactModule = {

	namespaced: true,

	state : () => ({

    	contacts:[],
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

			state.contacts = payload

		},

		DIALOG_UPDATE(state, payload){

			state.dialog = payload

		},

		PULL_UPDATE(state, payload){

			state.pull = payload
			state.dialog = true

		}

	},

	actions:{

		GET(context, page){
			 axios.get('/api/contact?page='+page).then(res=>{
			 	if (res.data.contact.data.length > 0) {
			 		context.commit('SET_CONTACT',res.data.contact.data)
					context.commit('SET_PAGINATE',res.data.paginate)
			 	}

			}).
			 catch(err =>{
			 	console.log(err)
			 })
		},
		DELETE(context, id){
			 axios.delete('/api/contact/'+id).then(res=>{

			}).
			 catch(err =>{
			 	console.log(err)
			 })
		}
	}


}