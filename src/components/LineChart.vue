<script>
import { Line } from 'vue-chartjs'

export default {
    name: 'Chart',
    props: ['data', 'options'],
    extends: Line,
    mounted () {
        this.renderChart(this.data, this.options)
    },
};
</script>