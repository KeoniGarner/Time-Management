<template>
    <div id="dashboard">
        <h1>Dashboard</h1>
        <div class="row auto">
            <div class="card col-3">
                <div class="card-interior">
                    <h1 id='productive' class="number">{{ dataCollection.datasets[0].data[0] + dataCollection.datasets[0].data[1] }} <span>Hours</span></h1>
                    <p>Productive Time</p>
                </div>
            </div>
            <div class="card col-3">
                <div class="card-interior">
                    <h1 id='unproductive' class="number">{{ dataCollection.datasets[0].data[4] }} <span>Hours</span></h1>
                    <p>Unproductive Time</p>
                </div>
            </div>
            <div class="card col-3">
                <div class="card-interior">
                    <h1 id='travel' class="number">{{ dataCollection.datasets[0].data[3] }} <span>Hours</span></h1>
                    <p>Travel Time</p>
                </div>
            </div>
            <div class="card col-3">
                <div class="card-interior">
                    <h1 id='vacation' class="number">{{ dataCollection.datasets[0].data[2] }} <span>Hours</span></h1>
                    <p>Vacation Time</p>
                </div>
            </div>
        </div>
        <div class="row auto">
            <div class="Chart card col-4">
                <div class="card-interior">
                    <h1>Doughnut Chart</h1>
                    <doughnut-chart ref='doughnut' :chart-data="dataCollection" :options="chartOptions"></doughnut-chart>
                </div>
            </div>
            <div class="Chart card col-8">
                <div class="card-interior">
                    <h1>Bar Chart</h1>
                    <bar-chart ref='bar' :chart-data="dataCollection" :options="chartOptions"></bar-chart>
                </div>
            </div>
        </div>
        <div class="row auto">
            <div class="Chart card col-4">
                <div class="card-interior">
                    <h1>Radar Chart</h1>
                    <radar-chart ref='radar' :chart-data="dataCollection" :options="chartOptions"></radar-chart>
                </div>
            </div>
            <div class="Chart card col-4">
                <div class="card-interior">
                    <h1>Line Chart</h1>
                    <line-chart ref='line' :chart-data="dataCollection" :options="chartOptions"></line-chart>
                </div>
            </div>
            <div class="Chart card col-4">
                <div class="card-interior">
                    <h1>Pie Chart</h1>
                    <pie-chart ref='pie' :chart-data="dataCollection" :options="chartOptions"></pie-chart>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { firebaseAuth, db } from '../config/firebase.config';
const timeEntries = db.collection('time-entries');

export default {
    data: function() {
        return {
            dataCollection: {},
            chartOptions: {
                responsive: true,
                maintainAspectRatio: false,
            }
        }
    },
    methods: {
        getRandomInt() {
            return Math.floor(Math.random() * 100);
        },
        getTimeEntries() {
            const labels = ['work', 'personal-development', 'vacation', 'travel', 'meetings']
            const dataset = {
                label: 'This Year',
                data: [0,0,0,0,0],
                backgroundColor: [
                            '#00635d',
                            '#1C1259',
                            '#FF9B00',
                            '#08a4bd',
                            '#EE4266',
                            ],
            };
            timeEntries
                .where("userId", "==", firebaseAuth().currentUser.uid)
                .orderBy("date", "desc")
                .get()
                .then(querySnapshot => {
                    querySnapshot.forEach(doc => {
                        const data = doc.data();
                        const index = labels.indexOf(data.category);
                        if (index !== -1) {
                            dataset.data[index] += Number(data.hours);
                        }
                    });
                    this.dataCollection = { labels: labels, datasets: [dataset] };
                })
                .catch(error => {
                    console.log("Error getting documents: ", error);
                });
        },
    },
    mounted() {
        this.getTimeEntries();
    },
};
</script>