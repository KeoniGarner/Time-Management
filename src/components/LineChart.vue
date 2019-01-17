<script>
import { Line, mixins } from 'vue-chartjs'

export default {
    name: 'Chart',
    props: ['chartData', 'options'],
    mixins: [mixins.reactiveProp],
    extends: Line,
    mounted () {
        this.renderChart(this.chartData, this.options)
    },
};
</script>