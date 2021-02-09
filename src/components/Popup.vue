<template>

    <v-dialog max-width="500px" v-model="dialog" >

      <template v-slot:activator="{ on , attrs}">
        <v-btn color="success" dark v-bind="attrs" v-on="on">
         Ajouter une note
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline grey lighten-2">
          Ajouter une note 
        </v-card-title>

        <v-card-text>   
        <v-form class="px-3" ref="form"><!--formulazire-->
            <v-text-field label="Titre" v-model="titre" prepend-icon="mdi-folder" :rules="inputRules" ></v-text-field>
            <v-text-field label="Sous-titre" v-model="subtitle" prepend-icon="mdi-subtitle" :rules="inputRules"></v-text-field>
            <v-textarea label="Information" v-model="contenu" prepend-icon="mdi-pencil" :rules="inputRules"></v-textarea>


          <v-divider></v-divider>
            
            <v-btn text class="success mx-0 mt-3" @click="submit" :loading="loading" >Sauvegarder la note</v-btn>

        </v-form>
        </v-card-text>        
      </v-card>
    </v-dialog>

</template>
<script>
import firebase from 'firebase'
import db from '../main'

export default {
  
  data(){
    return{
            titre:'',
            contenu:'',
            subtitle:'',
            activator:'',
            inputRules: [
              v => v.length >= 3 || 'Minimum length is 3 characters'
            ],
            loading: false,
            dialog: false,
        }
    
  },
      methods:{
        submit(){
            if(this.$refs.form.validate()){ //valider le formulaire
              this.loading = true;

            const note = {
              titre: this.titre,
              contenu: this.contenu,
              subtitle: this.subtitle
            }
            db.collection('users').doc(firebase.auth().currentUser.uid).collection('notes').add(note).then(()=> {
              this.loading = false;
              this.dialog = false;
              this.$emit('NoteAjouter')
              console.log('ajouter à db')
            })
          }
        },
    },
}
</script>