<template>
    <div class="Notes">
        <h1 class="subheading grey--text">Mes Notes</h1>

        <Popup />
        <v-container class="my-5">
             <v-layout row wrap>
            <v-card v-for="note in mynotes" :key="note.titre" class="text-center- ma-3" max-width="400">
                    <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img>
                    
                    <v-card-title>
                    {{note.titre}}
                    </v-card-title>

                    <v-card-subtitle>
                    {{note.subtitle}}
                    </v-card-subtitle>

                    <v-card-actions>
                        <v-btn text color="orange lighten-2"  @click="deleteNote(note.id)" >
                             <v-icon> mdi-delete</v-icon>
                        </v-btn> <!--Pas fonctionnel à faire -->
                                                <v-spacer></v-spacer>
                        <v-btn icon @click="show = !show">
                            <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                        </v-btn>
                    </v-card-actions>

                    <v-expand-transition>
                        <div v-show="show">
                            <v-divider></v-divider>
                            <v-card-text>
                                {{note.contenu}} 
                            </v-card-text>
                        </div>
                    </v-expand-transition>
                
            </v-card>
            <br>
            </v-layout>
        </v-container>

    </div>
</template>

<script>
import db from '../main'
import firebase from 'firebase'
import Popup from '../components/Popup'
export default {

    data(){
        return{
            show: false,
            
            notes:[]
        }
    },
    computed:{
    mynotes(){
        return this.notes
    }
    },
        created(){
            db.collection('users').doc(firebase.auth().currentUser.uid).collection('notes').onSnapshot(res => {
                const changes = res.docChanges();

                changes.forEach(change => {
                    if ( change.type === 'added'){
                        this.notes.push({
                            ...change.doc.data(),
                            id: change.doc.id
                        })
                    }
                })
            })
        },
    methods:{
         deleteNote(doc){
             if(confirm('Etes vous sure ? ')){
            db.collection("users").doc(firebase.auth().currentUser.uid).collection('notes').doc(doc).delete().then(() => {
                    console.log("Document supprimer avec succes ");
                }).catch((error) => {
                    console.error("Error removing document: ", error);
                });
               
            }

             // const note = {
             // titre: this.titre,
             // contenu: this.contenu,
             // subtitle: this.subtitle
           //1 }

           // db.collection("users").doc(firebase.auth().currentUser.uid).collection('notes').doc(note).delete()
        },
    },    

    components:{
    Popup,

    },
}
</script>

<style>

</style>

