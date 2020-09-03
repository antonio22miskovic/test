<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Open Dialog
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Contact Update</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label=" first name" required v-model="data.first_name"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label=" last name" required v-model="data.last_name"></v-text-field>
              </v-col>
                <v-text-field
                   append-icon="mdi-email"
                    v-model="data.email"
                  :rules="[(validation.email === null) || validation.email,
                  rules.required,
                  rules.email]"
              label="E-mail"
              required
          ></v-text-field>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="Contact number"
                  hint="example of persistent helper text"
                  persistent-hint
                  required
                  v-model="data.contact_number"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" text @click="update_Contact = false">Update</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
  export default {

    name:'Dialog_Update',
    mounted(){
      this.set_data()
    },
    data: () => ({
      data:{
        first_name:'',
        last_name:'',
        contact_number:'',
        email:'',
        validation:'',
      },
       rules:{
        required: value => !!value || 'E-mail Required.',
        email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'E-mail Invalid.'
        },
      }
    }),

    computed:{

      dialog:{
        set(value){
          return this.$state.commit('CONTACTMODULE/DIALOG_UPDATE',value)
        },
        get(){
          return this.$store.state.CONTACTMODULE.dialog
        }
      },

      pull(){
        return this.$store.state.CONTACTMODULE.pull
      }

    },

    methods:{
      set_data(){
        this.data.first_name     = this.pull.first_name,
        this.data.last_name      =  this.pull.last_name,
        this.data.contact_number = this.pull.contact_number,
        this.data.email          = this.pull.email
      }
    }

  }
</script>