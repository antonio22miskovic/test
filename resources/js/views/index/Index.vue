
<template>
  <v-app id="login">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-left>
          <v-flex xs12 sm8 md4 lg4>
            <v-card class="elevation-50 pa-3" width="400" shaped color="loginCard">
              <div class="layout column align-center">
                <img src="/logos/logo.png" alt="Vue Material Admin" width="180" height="180">
                <h1 class="primary--text text-center">{{title}}</h1>
              </div>
              <v-container style="min-height:320px">
                <transition name="fade" mode="out-in">
                  <router-view/>
                </transition>
              </v-container>
                <div class="text-center">
                  <strong> Ramon Villalobos - 2020 </strong>
                </div>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
      <v-snackbar
        v-model="ErrorModal"
        :timeout="2000"
        top>
        {{ result }}
      </v-snackbar>
    </v-content>
  </v-app>
</template>

<script>
export default {

  name:'Index',

  data: () => ({
    transitionName:'slide-left'
  }) ,

  methods: {

  },
  computed:{

    title(){
      return this.$store.state.AUTH.title
    },

    ErrorModal:{
      set(value){
          return this.$store.commit('AUTH/ERROR_ON',value)
      },
      get(){
          return this.$store.state.AUTH.showResult
      }
    },

    result(){
      return this.$store.state.AUTH.auth_error
    }

  },

}
</script>
<style scoped lang="css">
  #login {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    z-index: 0;
    background-image:url(/img/login/login3.jpg);
    display: cover;

  }
  .fade-enter {
      opacity: 0;
  }
  .fade-enter-active {
    transition: opacity 0.50s ease;
  }
  .fade-leave {}
  .fade-leave-active {
    transition: opacity 0.50s ease;
    opacity: 0;
  }
</style>
