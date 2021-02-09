import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from 'firebase'
import Home from '../views/Home.vue'
import Calendar from '../views/Calendar'
import Gallery from '../views/Gallery'
import Checklist from '../views/CheckList'
import Notes from '../views/Notes'
import Login from '../views/Login'
import SignUp from '../views/SignUp' 
import About from '../views/About'
Vue.use(VueRouter)


const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: true
    }
  }, 
  {
    path: '/calendar',
    name: 'Calendar',
    component: Calendar,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: Gallery,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/checklist',
    name: 'Checklist',
    component: Checklist,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/notes',
    name: 'Notes',
    component: Notes,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/info',
    name: 'About',
    component: About
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next('');
  else if (!requiresAuth && currentUser) next('home');
  else next();
  if (requiresAuth && !currentUser) next('');
  else if (!requiresAuth && currentUser) next('calendar');
  else next();
  if (requiresAuth && !currentUser) next('');
  else if (!requiresAuth && currentUser) next('gallery');
  else next();
  if (requiresAuth && !currentUser) next('');
  else if (!requiresAuth && currentUser) next('checklist');
  else next();
  if (requiresAuth && !currentUser) next('');
  else if (!requiresAuth && currentUser) next('notes');
  else next();
});

export default router
