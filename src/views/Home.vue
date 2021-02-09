<template>
<div class="home">
  
  
 <v-container >
     <h1>Homepage</h1>
    <h1 class="display-4 ma-3 pa-6"  >
      Bienvenue
    </h1>
    <br><br>
    <v-carousel >
    <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src" reverse-transition="fade-transition" transition="fade-transition"></v-carousel-item>
  </v-carousel>


   <p class="headline">This is a headline</p>
    <!-- Stack the columns on mobile by making one full-width and the other half-width -->
    <v-row>
      <v-col cols="12" md="8">
        <v-card class="pa-2" outlined tile >
          <p class="pink lighten-4 red--text text--darken-4">Division d'un texte de prose, d'un discours, d'un chapitre qui apparaît typographiquement par un alinéa initial. (Dans les renvois, le paragraphe est noté par le signe §, appelé lui-même « paragraphe ».) </p>
        </v-card>
      </v-col>
      <v-col cols="6" md="4">
        <v-card class="pa-2" outlined tile>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum maiores modi quidem veniam, expedita quis laboriosam, ullam facere adipisci, iusto, voluptate sapiente corrupti asperiores rem nemo numquam fuga ab at.


        </v-card>
      </v-col>
    </v-row>
    <br>

    <p class="caption">This is a caption</p>

    <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
    <v-row>
      <v-col v-for="n in 3" :key="n" cols="6" md="4">
        <v-card class="pa-2" outlined tile>
I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.        </v-card>
      </v-col>
    </v-row>
    <br>

    <p class="subheading font-weight-bold">This is a subheading</p>

    <!-- Columns are always 50% wide, on mobile and desktop -->
    <v-row>
      <v-col v-for="n in 2" :key="n" cols="6">
        <v-card class="pa-2" outlined tile>
         <p class="red white--text">Division d'un texte de prose, d'un discours, d'un chapitre qui apparaît typographiquement par un alinéa initial. (Dans les renvois, le paragraphe est noté par le signe §, appelé lui-même « paragraphe ».) </p>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
<!--differenttype d'ecriture-->
    
    <h4 class="display-1">Smaller display</h4>
    
    
    

</div>
</template>

<script>


// @ is an alias to /src


export default {
  name: 'Home',

    data () {
      return {
        items: [
          {
            src: 'https://www.lespetitscadeaux.com/2789-thickbox_default/sticker-bonne-annee-2021.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
      }
    },
  }
</script>
