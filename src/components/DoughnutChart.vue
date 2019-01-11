<script>
import { Doughnut } from 'vue-chartjs'


export default {
    name: 'Chart',
    props: ['data', 'options'],
    extends: Doughnut,
    mounted () {
        this.renderChart(this.data, this.options)
    },
};
</script>