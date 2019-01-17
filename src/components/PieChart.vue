<script>
import { Pie, mixins } from 'vue-chartjs'

export default {
    name: 'Chart',
    props: ['chartData', 'options'],
    mixins: [mixins.reactiveProp],
    extends: Pie,
    mounted () {
        this.renderChart(this.chartData, this.options)
    }
};
</script>