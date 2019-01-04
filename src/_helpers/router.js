import Vue from 'vue';
import Router from 'vue-router';

import Dashboard from '../dashboard/Dashboard';
import Login from '../login/Login';
import Register from '../register/Register';
import TimeEntry from '../time-entry/TimeEntry';

Vue.use(Router);

export const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Dashboard },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/entry', component: TimeEntry },

    // otherwise redirect to home
    { path: '*', redirect: '/' }
  ]
});

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login', '/register'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  if (authRequired && !loggedIn) {
    return next('/login');
  }

  next();
})