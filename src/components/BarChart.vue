<script>
import { Bar } from 'vue-chartjs'


export default {
    name: 'Chart',
    props: ['data', 'options'],
    extends: Bar,
    mounted () {
        this.renderChart(this.data, this.options)
    },
};
</script>