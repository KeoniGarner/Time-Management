<script>
import { Doughnut, mixins } from 'vue-chartjs'


export default {
    name: 'Chart',
    props: ['chartData', 'options'],
    mixins: [mixins.reactiveProp],
    extends: Doughnut,
    mounted () {
        this.renderChart(this.chartData, this.options)
    },
};
</script>