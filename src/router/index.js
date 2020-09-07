/* eslint-disable */
import Vue from 'vue';
import VueRouter from 'vue-router';

// Views
import Dashboard from '../views/Dashboard';
import Register from '../views/Register.vue';
import Login from '../views/Login.vue';

import firebase from '../config/firebase.config';

Vue.use(VueRouter);

const routes = [{
        path: '/',
        name: 'Login',
        component: Login,
        meta: { requiresGuest: true },
    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
        meta: { requiresGuest: true },
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
        meta: { requiresAuth: true },
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue'),
        meta: { requiresGuest: true },
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
    const requiresGuest = to.matched.some((record) => record.meta.requiresGuest);

    if (requiresAuth) {
        if (!firebase.auth().currentUser) {
            return next('/');
        } else {
            return next();
        }
    } else if (requiresGuest) {
        if (firebase.auth().currentUser) {
            return next('/dashboard');
        } else {
            return next();
        }
    } else {
        return next();
    }
});

export default router;