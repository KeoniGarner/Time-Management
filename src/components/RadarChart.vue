<script>
import { Radar, mixins } from 'vue-chartjs'


export default {
    name: 'Chart',
    props: ['chartData', 'options'],
    mixins: [mixins.reactiveProp],
    extends: Radar,
    mounted () {
        this.renderChart(this.chartData, this.options)
    },
};
</script>