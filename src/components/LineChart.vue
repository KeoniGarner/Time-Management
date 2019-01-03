<script>
import { mapState, mapActions } from 'vuex'
import { Line } from 'vue-chartjs'


export default {
    name: 'Chart',
    props: ['data', 'options'],
    extends: Line,
    mounted () {
        this.renderChart(this.data, this.options)
    },
    computed: {
        ...mapState({
            alert: state => state.alert
        })
    },
    methods: {
        ...mapActions({
            clearAlert: 'alert/clear' 
        })
    },
    watch: {
        $route (to, from){
            // clear alert on location change
            this.clearAlert();
        }
    }
};
</script>