import Vue from 'vue';
import VeeValidate from 'vee-validate';

import * as firebase from './config/firebase.config';

import { router } from './router';
import { store } from './store';

import App from './App';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { ServerTable, ClientTable, Event } from 'vue-tables-2';

import Navigation from './components/Navigation';
import DoughnutChart from './components/DoughnutChart';
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import PieChart from './components/PieChart';
import RadarChart from './components/RadarChart';

import VModal from 'vue-js-modal';

library.add(faClock);

Vue.component('navigation', Navigation);
Vue.component('bar-chart', BarChart);
Vue.component('doughnut-chart', DoughnutChart);
Vue.component('radar-chart', RadarChart);
Vue.component('line-chart', LineChart);
Vue.component('pie-chart', PieChart);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(VModal);
Vue.use(ClientTable);
Vue.use(ServerTable);
Vue.use(VeeValidate);

console.log(firebase.firebaseAuth);

const unsubscribe = firebase.firebaseAuth()
.onAuthStateChanged((firebaseUser) => {
    new Vue({
        el: '#app',
        router,
        store,
        render: h => h(App),
        created () {
            if (firebaseUser) {
                store.dispatch('autoSignIn', firebaseUser);
            }
        }
    });
    unsubscribe();
});