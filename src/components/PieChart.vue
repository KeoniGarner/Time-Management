<script>
import { Pie } from 'vue-chartjs'

export default {
    name: 'Chart',
    props: ['data', 'options'],
    extends: Pie,
    mounted () {
        this.renderChart(this.data, this.options)
    }
};
</script>