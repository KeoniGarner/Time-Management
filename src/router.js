import Vue from 'vue';
import Router from 'vue-router';
import firebase from 'firebase';

import Dashboard from './views/Dashboard';
import Login from './views/Login';
import Register from './views/Register';
import TimeEntry from './views/TimeEntry';

Vue.use(Router);

export const router = new Router({
    mode: 'history',
    routes: [
        { path: '/dashboard', component: Dashboard, meta: { requiresAuth: true } },
        { path: '/login', component: Login },
        { path: '/register', component: Register },
        { path: '/entry', component: TimeEntry, meta: { requiresAuth: true } },

        // otherwise redirect to home
        { path: '*', redirect: '/dashboard' }
    ]
});

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    const isAuthenticated = firebase.auth().currentUser;

    if (requiresAuth && !isAuthenticated) {
      next('/signin');
    } else {
      next();
    }
});
