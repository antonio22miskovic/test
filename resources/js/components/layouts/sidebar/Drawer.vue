<template>
	<v-navigation-drawer
       v-model="drawerOn"
        :color="color"
        :expand-on-hover="expandOnHover"
        :mini-variant="miniVariant"
        :letf="letf"
        :src="bg"
        absolute
        temporary
      >
        <v-list dense nav class="py-0">
          <v-list-item two-line :class="">
            <v-list-item-avatar >
              <img src="https://randomuser.me/api/portraits/men/81.jpg">
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title></v-list-item-title>
              <v-list-item-subtitle>{{user.first_name}}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>

          <!-- SECCION DE BOTONES DE DRAWER -->
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
               <router-link :to="{name: 'profile'}" tag="span">Profile</router-link>
            </v-list-item-content>
          </v-list-item>
             <!-- FIN SECCION DE BOTONES DE DRAWER -->
        </v-list>
      </v-navigation-drawer>
</template>
<script>
import { mapState } from 'vuex'
	export default{
		name:'Drawer',

		data:() =>({

        color: 'teal',
        colors: [
          'primary',
          'blue',
          'success',
          'red',
          'teal',

        ],
        letf: true,
        miniVariant: false,
        expandOnHover: false,
        background: false,
		}),
		computed: {
      user(){
        return this.$store.state.AUTH.currentUser
      },
      drawerOn:{
        get(){
          return this.$store.state.ADMIN_HOME.drawer
        },
        set(value){
           return this.$store.commit('ADMIN_HOME/SET_DRAWER', value)
        }
      },

      bg () {
        return this.background ? 'https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg' : undefined
      },
 	 }
	}
</script>