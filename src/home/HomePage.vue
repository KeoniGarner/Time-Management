<template>
    <div id="dashboard">
        <h1>Dashboard</h1>
        <div class="row auto">
            <div class="Chart card col-4">
                <div class="card-interior">
                    <h1>Doughnut Chart</h1>
                    <doughnut-chart :data="chartData" :options="chartOptions"></doughnut-chart>
                </div>
            </div>
            <div class="Chart card col-8">
                <div class="card-interior">
                    <h1>Bar Chart</h1>
                    <bar-chart :data="chartData" :options="chartOptions"></bar-chart>
                </div>
            </div>
        </div>
        <div class="row auto">
            <div class="Chart card col-4">
                <div class="card-interior">
                    <h1>Radar Chart</h1>
                    <radar-chart :data="chartData" :options="chartOptions"></radar-chart>
                </div>
            </div>
            <div class="Chart card col-4">
                <div class="card-interior">
                    <h1>Line Chart</h1>
                    <line-chart :data="chartData" :options="chartOptions"></line-chart>
                </div>
            </div>
            <div class="Chart card col-4">
                <div class="card-interior">
                    <h1>Pie Chart</h1>
                    <pie-chart :data="chartData" :options="chartOptions"></pie-chart>
                </div>
            </div>
        </div>
        <button @click="refreshData" class="button">RANDOM DATA</button>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    data: function() {
        return {
            chartData: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                datasets: [
                    {
                        label: 'This Year',
                        backgroundColor: [
                            'rgba(0,0,255,1.00)',
                            'rgba(0,0,255,0.94)',
                            'rgba(0,0,255,0.88)',
                            'rgba(0,0,255,0.82)',
                            'rgba(0,0,255,0.76)',
                            'rgba(0,0,255,0.70)',
                            'rgba(0,0,255,0.64)',
                            'rgba(0,0,255,0.58)',
                            'rgba(0,0,255,0.52)',
                            'rgba(0,0,255,0.46)',
                            'rgba(0,0,255,0.40)',
                            'rgba(0,0,255,0.34)',
                        ],
                        data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
                    },
                    {
                        label: 'Last Year',
                        backgroundColor: [
                            'rgba(100,0,255,1.00)',
                            'rgba(100,0,255,0.94)',
                            'rgba(100,0,255,0.88)',
                            'rgba(100,0,255,0.82)',
                            'rgba(100,0,255,0.76)',
                            'rgba(100,0,255,0.70)',
                            'rgba(100,0,255,0.64)',
                            'rgba(100,0,255,0.58)',
                            'rgba(100,0,255,0.52)',
                            'rgba(100,0,255,0.46)',
                            'rgba(100,0,255,0.40)',
                            'rgba(100,0,255,0.34)',
                        ],
                        data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
                    },
                ] 
            },
            chartOptions: {
                responsive: true,
                maintainAspectRatio: false
            }
        }
    },
    mounted () {
        setInterval(() => {
            this.refreshData()
      }, 2000)
    },
    computed: {
        ...mapState({
            account: state => state.account,
            users: state => state.users.all
        })
    },
    created () {
        this.getAllUsers();
    },
    methods: {
        ...mapActions('users', {
            getAllUsers: 'getAll',
            deleteUser: 'delete'
        }),
        getRandomInt() {
            return Math.floor(Math.random() * 100);
        },
    }
};
</script>