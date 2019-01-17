<script>
import { Bar, mixins } from 'vue-chartjs'


export default {
    name: 'Chart',
    props: ['chartData', 'options'],
    mixins: [mixins.reactiveProp],
    extends: Bar,
    mounted () {
        this.renderChart(this.chartData, this.options)
    },
};
</script>