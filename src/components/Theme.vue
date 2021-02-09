<template>
  <v-menu v-model="menu" :close-on-content-click="false" :nudge-width="200" offset-y>
    <template v-slot:activator="{ on }">
      <v-btn large icon v-on="on">
        <v-icon size="30" color="primary">mdi-palette</v-icon>
      </v-btn>
    </template>
    <v-card>
        <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="font-weight-bold">
            Dark Mode
          </v-list-item-title>
        </v-list-item-content>
        <v-list-item-action>
          <v-switch v-model="$vuetify.theme.dark"/>
        </v-list-item-action>
      </v-list-item>
      <v-divider/>
    </v-card> 
    <v-card-text>
        <v-card class="my-2" :disabled="$vuetify.theme.themes.name === theme.name"  @click="setTheme(theme)" hover outlined v-for="(theme, index) in themes" :key="index">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="font-weight-bold">
                {{ theme.name }}
                </v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-avatar color="success" size="30" v-if="$vuetify.theme.themes.name === theme.name">
                <v-icon>mdi-check</v-icon>
              </v-avatar>
            </v-list-item-action>
          </v-list-item>
          <div class="my-2">
            <v-chip class="mx-1" label :color="theme.dark[key]" v-for="(key, index) in Object.keys(theme.dark)" :key="index">
              {{ key }}
              </v-chip >
          </div>
          <div class="my-2">
            <v-chip class="mx-1" label :color="theme.light[key]" v-for="(key, index) in Object.keys(theme.light)" :key="index">
              {{ key }}
            </v-chip>
          </div>
        </v-card>
      </v-card-text>
  </v-menu>

</template>

<script>
export default {
    name:"",
    data:() => ({
        menu:false,
        themes: [
        {
          name: "Theme 1",
          dark: {
            primary: "#404764",
            secondary: "#D16B6B",
            success: "#86af3f",
          },
          light: {
            primary: "#96A0C5",
            secondary: "#E0ABAB",
            success: "#a5d64c",
          
          }
        },
        {
          name: "Theme 2",
          dark: {
            primary: "#E65100",
            secondary: "#0C75EC",
            success: "#86af3f"
          },
          light: {
            primary: "#ffa450",
            secondary: "#478EDF",
            success: "#a5d64c"
          }
          

        },
        {
          name: "Theme 3",
          dark: {
            primary: "#673AB7",
            secondary: "#5A3520",
            success: "#86af3f",
            
          },
          light: {
            primary: "#B39DDB",
            secondary: "#684632",
            success: "#a5d64c",
          }
          

        }
        

        ]
    }),
    methods:
    {
      setTheme(theme) {
      // fermer le menu
      this.menu = false;
     // const name = theme.name;
      const dark = theme.dark;
      const light = theme.light;
      // Definir le theme
      Object.keys(dark).forEach(i => {
        this.$vuetify.theme.themes.dark[i] = dark[i];
      });
      Object.keys(light).forEach(i => {
        this.$vuetify.theme.themes.light[i] = light[i];
      });
      // also save theme name to disable selection
      //this.$vuetify.theme.themes.name = name;
    }
  },
   mounted(){
        if (localStorage.getItem('theme')){
            this.theme = JSON.parse(localStorage.getItem('theme'));
            }

    },
    watch: {
        theme: {
            handler() {
                console.log('Le theme a bien été changé!');
                localStorage.setItem('theme', JSON.stringify(this.theme));
            },
            deep: true,
        },
    },

    
}
</script>

