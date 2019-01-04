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
                            '#1C1259',
                            '#EE4266',
                            '#FF9B00',
                            '#1C1259',
                            '#EE4266',
                            '#FF9B00',
                            '#1C1259',
                            '#EE4266',
                            '#FF9B00',
                            '#1C1259',
                            '#EE4266',
                            '#FF9B00',
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