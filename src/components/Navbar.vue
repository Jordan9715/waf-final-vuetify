<template>
  <nav>
       
    <v-snackbar v-model="snackbar" :timeout="3000" top color="success">
        <span>Super ! Ta note a bien été ajouté</span>
        <v-btn text color="white" @click="snackbar = false">Fermer</v-btn>
    </v-snackbar>

      <v-app-bar  rounded app class="secondary">
            <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer">
                <v-icon>mdi-menu</v-icon>
            </v-app-bar-nav-icon> <!--bouton de navigation drawer-->
          <v-toolbar-title class="text-uppercase grey--text">   <!-- titre dans le navbvar + couleur -->
              <span class="font-weight-light">What</span>      <!-- gris +claires -->
              <span>aFix</span>
          </v-toolbar-title>
          <v-spacer></v-spacer> <!--fait un espace-->

        <v-btn text>
            <Theme/>
        </v-btn>

          <v-btn text color="grey" @click="logout" > <!--Bouton déconnexion -->
              <span>Déconnexion</span>
              <v-icon> mdi-logout</v-icon>
          </v-btn>
      </v-app-bar>

    <v-navigation-drawer app v-model="drawer" class="primary" >
        <v-layout column align-center>
            <v-col class="mt-5">
                <v-avatar size="100">
                    <img src="" alt="" srcset="">
                </v-avatar>
            <p class="white--text subheading mt-1">
                pseudo ici ou email
            </p>
            </v-col>

             <v-spacer></v-spacer>

        <v-col class="mt-4 mb-3"><Popup @NoteAjouter="snackbar = true"/></v-col>
        
        </v-layout>
        <v-list>
            <v-list-item v-for="link in links" :key="link.text" router :to = "link.route" >
                <v-list-item-action>
                    <v-icon class="white--text">{{link.icon}} </v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title class="white--text">
                        {{link.text}}
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
                
        </v-list>
    </v-navigation-drawer>

  </nav>
</template>

<script>
import firebase from 'firebase'
import Popup from './Popup'
import Theme from './Theme'

export default {

    components:{
        Popup,
    Theme
    },

    data(){
        return{
            drawer: false,
            links:[
                {icon: 'mdi-menu' , text:'Home-page' , route:'/home'},
                {icon: 'list_alt', text:'Liste' ,route:'/checklist'},
                {icon: 'collections' , text:'Galerie' , route:'/gallery'},
                {icon: 'today' , text:'Calendrier' , route:'/calendar'},
                {icon: 'sticky_note_2' , text:'Mes Notes' , route:'/notes'},
                {icon: 'mdi-help' , text:'Information' , route:'/info'},
                {icon: 'mdi-account' , text:'Connexion' , route:'/'}
                
            ],
           snackbar: false
        }
    },
     methods: {
    logout: function() {
      firebase.auth().signOut().then(() => {
        this.$router.replace('/')
      })
    }
  },

}
</script>