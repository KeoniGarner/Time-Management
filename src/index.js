import Vue from 'vue';
import VeeValidate from 'vee-validate';

import { store } from './_store';
import { router } from './_helpers';
import App from './app/App';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Navigation from './components/Navigation';
import BarChart from './components/BarChart';
import DoughnutChart from './components/DoughnutChart';
import RadarChart from './components/RadarChart';
import LineChart from './components/LineChart';
import PieChart from './components/PieChart';
library.add(faClock);

Vue.component('navigation', Navigation);
Vue.component('bar-chart', BarChart);
Vue.component('doughnut-chart', DoughnutChart);
Vue.component('radar-chart', RadarChart);
Vue.component('line-chart', LineChart);
Vue.component('pie-chart', PieChart);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(VeeValidate);

// setup fake backend
import { configureFakeBackend } from './_helpers';
import { Pie } from 'vue-chartjs';
configureFakeBackend();

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});