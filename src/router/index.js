import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home.vue';
import Live from '@/pages/Live.vue';
import StartLive from '@/pages/StartLive.vue';
import NotFound from '@/pages/NotFound.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/live',
      name: 'live',
      component: Live
    },
    {
      path: '/startLive',
      name: 'startLive',
      component: StartLive
    },
    {
      path: '*',
      name: 'notfound',
      component: NotFound
    }
  ]
});
