<template>
	<div>

			</Update>


	<v-container class="my-12">
		<v-card
    		:loading="loading"
      	 	class="mx-auto"
      		max-width="100%"
    		raised >
      		<v-container>
      			<v-row>
      				<v-col>
      					<v-card-title><v-icon color="nav">mdi-account-multiple</v-icon> Users </v-card-title>
      				</v-col>
      				<v-col>
      					<v-form ref="search">
                 			<v-text-field label="search"
                    			v-model="search"
                    			:append-icon="b ? 'mdi-magnify' : 'mdi-restart'"
                    			:hint="search_off ? 'contact not found' : 'search contact'"
                    			:error="filtering_error"
                    			@click:append="filter">
                			</v-text-field>
              			</v-form>
      				</v-col>
      			</v-row>
      		</v-container>
      		<v-container>
      			<v-simple-table v-if="users.length > 0"  height="300px" fixed-header>
    				<template v-slot:default>
      					<thead>
        					<tr>
          						<th class="text-left">First Name</th>
          						<th class="text-left">Last Name</th>
          						<th class="text-left">Email</th>
          						<th class="text-left">Contact Number</th>
          						<th class="text-left">edit</th>
          						<th class="text-left">delete</th>
          					</tr>
      					</thead>
      					<tbody>
        					<tr v-for="item in users" :key="item.id">
          						<td>{{ item.first_name }}</td>
          						<td>{{ item.last_name }}</td>
          						<td>{{ item.email }}</td>
          						<td>{{ item.contact_number }}</td>
          						<td>
            						<v-btn icon color="indigo" @click="modal_edit(item)">
              							<v-icon>mdi-pencil</v-icon>
            						</v-btn>
          						</td>
   	      						<td>
            						<v-btn icon color="pink"@click="erase_it(item.id)">
              							<v-icon>mdi-delete</v-icon>
            						</v-btn>
          						</td>
        					</tr>
						</tbody>
    				</template>
  				</v-simple-table>
      		</v-container>
    		<template v-if="users.length > 0">
  				<div class="text-center">
  					<v-container>
    					<v-row justify="center">
      						<v-col cols="8">
        						<v-container class="max-width">
          							<v-pagination
           		 						v-model="paginate.current_page"
            							class="my-4"
            							:length="paginate.last_page"
            							@input="Chagepage(paginate.current_page)"
          							></v-pagination>
        						</v-container>
      						</v-col>
    					</v-row>
  					</v-container>
  				</div>
			</template>
			<template v-if="users < 1">
				<v-container>
			 		<v-alert
      		  			outlined
      		  			type="warning"
      		  			prominent
      		  			border="left"
    		  			>
						No registered users!
   			 		</v-alert>
   				</v-container>
			</template>
      	</v-card>
      </v-container>
	</div>
</template>
<script>
	import Swal from 'sweetalert2'
	import Update from '../../components/layouts/dialogs/Update'
	export default{
		name:'Contact',
		components:{
			Update
		},
		mounted(){

			this.getContact()

		},
		data: () => ({


		}),
		methods:{

			getContact(page){
				this.$store.dispatch('USERMODULE/GET', page)
			},

			filter(){

			},

			modal_edit(item){
				this.$store.commit('USERMODULE/PULL_UPDATE',item)
			},

			modal_details(item){

			},

			erase_it(item){
				Swal.fire({
  					title: 'Are you sure?',
  					text: "You won't be able to revert this!",
  					icon: 'warning',
  					showCancelButton: true,
  					confirmButtonColor: '#3085d6',
  					cancelButtonColor: '#d33',
  					confirmButtonText: 'Yes, delete it!'
					}).then((result) => {
  					if (result.value) {
  						this.$store.dispatch('USERMODULE/DELETE',item)
    					Swal.fire(
      						'Deleted!',
      						'Your file has been deleted.',
      						'success'
    					)
    				this.getContact(this.paginate.current_page)
  					}
				})
			},

			 Chagepage(page){

      			this.paginate.current_page = page;
      			this.getContact(page);
			}


		},

		computed:{

			users(){

					return this.$store.state.USERMODULE.users
			},

			search:{
				set(value){
					return this.$store.commit('USERMODULE/SEARCH')
				},
				get(){
					return this.$store.state.USERMODULE.search
				}
			},

			filtering_error(){
				return this.$store.state.USERMODULE.filtering_error
			},

			valid(){
				return this.$store.state.USERMODULE.valid
			},

			loading(){
				return this.$store.state.USERMODULE.loading
			},

			b(){
				return this.$store.state.USERMODULE.b
			},

			search_off(){
				return this.$store.state.USERMODULE.search_off
			},

			show_errors(){
				return this.$store.state.USERMODULE.show_errors
			},

			paginate:{
				set(value){
					return this.$store.commit('USERMODULE/SET_PAGINATE', value)
				},
				get(){
					return this.$store.state.USERMODULE.paginate
				}
			},

		}
}
</script>