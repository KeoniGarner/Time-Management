<script>
import { Radar } from 'vue-chartjs'


export default {
    name: 'Chart',
    props: ['data', 'options'],
    extends: Radar,
    mounted () {
        this.renderChart(this.data, this.options)
    },
};
</script>