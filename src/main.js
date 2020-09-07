import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// eslint-disable-next-line prettier/prettier
import firebase from './config/firebase.config';

Vue.config.productionTip = false;

let app;

// eslint-disable-next-line no-unused-vars
firebase.auth().onAuthStateChanged((user) => {
    if (!app) {
        new Vue({
            router,
            store,
            render: (h) => h(App),
        }).$mount('#app');
    }
});