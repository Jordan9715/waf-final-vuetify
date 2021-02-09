<template>
  <div class="login">
        <v-card class="mt-14 mx-auto" width="500px">
           
        <v-card-title class="headline primary">
          Connectez-vous
        </v-card-title>

        <v-card-text>   
        <v-form class="px-3" ref="form"><!--formulazire-->

            <v-text-field type="text" v-model="email" placeholder="Adresse Mail"></v-text-field>
            <v-text-field type="password" v-model="password" placeholder="Mot de passe"></v-text-field>


          <v-divider></v-divider>
            
            <v-btn text color="secondary" class="mx-0 mt-3" @click="login">Connexion</v-btn>
            <br><br>
            <span>Pas de compte ? <router-link to="/sign-up">Inscrivez-vous</router-link> ici .</span>
        </v-form>
        </v-card-text>        
      
    </v-card>
  </div>
</template>

<script>

import firebase from 'firebase'

  export default {
    name: 'login',
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      login: function() {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
          () => {
            this.$router.replace('home')
          },
          (err) => {
            alert('Oops. ' + err.message)
          }
        );
      }
    }
  }
</script>

<style>

</style>