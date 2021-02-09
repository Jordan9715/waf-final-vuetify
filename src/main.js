import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

import firebase from 'firebase'
import 'firebase/firestore'
  // Your web app's Firebase configuration
  var firebaseConfig = {
      apiKey: "AIzaSyAw8GHikzcY_TvZ2yKf-ANHi0rBXZHCwFk",
      authDomain: "what-a-fix.firebaseapp.com",
      projectId: "what-a-fix",
      storageBucket: "what-a-fix.appspot.com",
      messagingSenderId: "454809043063",
      appId: "1:454809043063:web:ddd605cd207f0c03b4c672"
    };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  db.settings({timestampsInSnapshots: true})

  export default db;


new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
