<template>

    <v-dialog max-width="500px" v-model="dialog" >

      <template v-slot:activator="{ on , attrs}">
        <v-btn color="success" dark v-bind="attrs" v-on="on">
         Ajouter un fichier
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline grey lighten-2">
          Ajouter un fichier 
        </v-card-title>

        <v-card-text>   
        <v-form class="px-3" ref="form"><!--formulazire-->
           
              <v-text-field
        solo
        v-model="titre"
        label="Titre">
        </v-text-field>
            <br>
          <div>
             <v-btn @click="click1">Choisir un ficher </v-btn>
           <input type="file" ref="input1"
            style="display: none"
            @change="previewImage" accept="image/* video/*" >                
          </div> 
          <p>(video / photo)</p>
            <br>

            <div v-if="imageData!=null">                     
                <img class="preview" height="268" width="356" :src="picture">
               <br>
           </div>     

          <v-divider></v-divider>
            
            <v-btn text class="success mx-0 mt-3" @click="onUpload"  >Sauvegarder</v-btn>

              

        </v-form>
        </v-card-text>        
      </v-card>
    </v-dialog>

</template>
<script>
import firebase from 'firebase'

export default {
  
  data(){
    return{
            titre:'',
            picture:null,
            uploadValue:0,
            imageData:null ,
            
            inputRules: [
              v => v.length >= 3 || 'Minimum length is 3 characters'
            ],
           dialog: false,
        }
    
  },
methods: {

  previewImage(event) {
  this.uploadValue=0;
  this.picture=null;
  this.imageData = event.target.files[0];
  this.onUpload()
},
onUpload(){
  this.picture=null;
  const storageRef=firebase.storage().ref(`${this.imageData.name}`).put(this.imageData);
  storageRef.on(`state_changed`,snapshot=>{
  this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
    }, error=>{console.log(error.message)},
  ()=>{this.uploadValue=100;
      storageRef.snapshot.ref.getDownloadURL().then((url)=>{
          this.picture =url;
        console.log('Fichier enregistré')
        });
      }      
    );
 },
  click1() {
  this.$refs.input1.click()   
},


  }
}
</script>