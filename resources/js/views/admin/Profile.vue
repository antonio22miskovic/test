<template>



  <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://randomuser.me/api/portraits/men/81.jpg"
    >
      <v-card-title>{{user.firts_name}}</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">{{user.last_name}}</v-card-subtitle>

    <v-card-text class="text--primary">
      <div>{{user.email}}</div>

      <div>{{user.contact_number}}</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="orange"
        text
      >
        Edit
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>

  export default{
    name:'Profile',
    data:() => ({

    }),
    methods:{
      edit(){

      }
    },
    computed:{
      user(){
        return this.$store.state.AUTH.currentUser
      }
    }
  }
</script>