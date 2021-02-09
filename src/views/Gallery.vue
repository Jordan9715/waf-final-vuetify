<template>
  <div class="gallery">

    <v-container>
      <h1 class="subheading grey--text"> Ma Galerie </h1> 
       <v-col> <Upload @FichierAjouter="snackbar = true"/></v-col>
<br><br>
<v-row>
    <v-col
      v-for="n in 9"
      :key="n"
      class="d-flex child-flex"
      cols="4"
    >
      <v-img
        :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
        :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
        aspect-ratio="1"
        class="grey lighten-2"
      >
        <template v-slot:placeholder>
          <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
          >
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </v-col>
  </v-row>
    </v-container>
  </div>
</template>

<script>

import Upload from '../components/Upload'
export default {
  components:{
    Upload
  }

}
</script>

<style>

</style>