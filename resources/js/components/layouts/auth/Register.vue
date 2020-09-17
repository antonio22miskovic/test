<template>
	<div>
		<v-card-text>

        	<v-form ref="register">

        		<v-text-field
        			append-icon="mdi-account"
      				v-model="data.first_name"
      				:counter="10"
      				:rules="[	v => !!v || 'First Name Required.']"
      				label="First Name"
      				required
    			></v-text-field>

          <v-text-field
              append-icon="mdi-account"
              v-model="data.last_name"
              :counter="10"
              :rules="[ v => !!v || 'Last Name Required.']"
              label="Last Name"
              required
          ></v-text-field>

   				<v-text-field
   					append-icon="mdi-email"
      				v-model="data.email"
      				:rules="[(validation.email === null) || validation.email,
                  rules.required,
                  rules.email]"
      				label="E-mail"
      				required
   		 		></v-text-field>

   		 		<v-text-field
   		 			append-icon="mdi-lock"
            		type="password"
            		name="Password"
            		label="Password"
            		id="Password"
            		:rules="[v => !!v || 'Password Required']"
            		v-model="data.password"
            		/>


            	<v-text-field
            		:type="hidePassword ? 'password' : 'text'"
            		:append-icon="hidePassword ? 'mdi-eye' : 'mdi-eye-off'"
            		name="confirm_password"
            		label="confirm Password"
            		id="confirm_password"
            		:rules="[(data.password === confirm_password) || 'password do not match']"
            		v-model="confirm_password"
            		@click:append="hidePassword = !hidePassword"/>

            <v-card-actions>
         		    <v-btn color="warning" @click="reset"> clear </v-btn>
          		  <v-spacer></v-spacer>
          	    <v-btn color="secondary" @click="register" :loading='loading'> register </v-btn>
          	</v-card-actions>
        	</v-form>
    	</v-card-text>
    	<div class="text-center">
    	<v-btn text color="secondary" :to="{name:'login_in'}">login</v-btn>
 		</div>
	</div>
</template>
<script>
import Swal from 'sweetalert2'
	export default{

		name:'Registro',

		mounted(){

			this.title = 'Register!!!'

		},

		data: () => ({

			data:{
				first_name:'',
        last_name:'',
        email:'',
        password:'',
			},
			confirm_password:'',
			hidePassword:true,
      validation:{
        user:null,
        email:null
      },
      rules:{
        required: value => !!value || 'E-mail Required.',
        email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'E-mail Invalid.'
        },
      },

		}),


		methods:{

		async	register(){

        if (this.$refs.register.resetValidation()) {
            return
        }
        this.$store.commit('AUTH/LOADING') // llamamos a esta mutacion que activa el loading
          console.log('el error esta de aqui para abajo')
           try {
                const res = await this.$store.dispatch('AUTH/STORE_USER',this.data)
                console.log('error es el impostor')
                this.$store.commit('AUTH/LOADING_FALSE')
                Swal.fire({
                  position:'center',
                  icon: 'success',
                  title: 'Register Succefull',
                  showConfirmButton: false,
                  timer: 1500
                })
                this.reset()
                this.$router.push({name:'login_in'})
                console.log('error pero solo era un tripulante')
                this.validacion(res.validation)
                this.$store.commit('AUTH/LOADING_FALSE')

           } catch(e) {
              console.log(e)
              console.log(e.response)
              this.$store.commit('AUTH/LOADING_FALSE')
              this.reset()

           }





			},

			reset(){
        		this.$refs.register.reset()
      		},

      resetValidation(){
        	 return this.$refs.register.resetValidation()
      		},

      validacion(datos){

        if (datos.name !== undefined) {// primero el usuario
          this.validation.user = datos.name[0]
        }else{
          this.validation.user = null
        }

        if (datos.email !== undefined) {// segundo el email
          this.validation.email = datos.email[0]
        }else{
           this.validation.email = null
        }

        if(!this.$refs.registro.validate()){// verificar la validacion
           return
        }

      }

		},


		computed:{
			title:{
      			set(value){
        			return this.$store.commit('AUTH/TITLE',value)
      			},
      			get(){
        			return this.$store.state.AUTH.title
      			}
    	},
      loading(){
        return this.$store.state.AUTH.loading
      },
		}
	}
</script>