import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader
Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'md',
      },
    theme: {
            primary: '#9652ff',
            secondary: '#3cd1c2',
            accent: '#82B1FF',
            error: '#FF5252',
    }
});
