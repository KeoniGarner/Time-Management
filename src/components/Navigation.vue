<template>
    <div>
        <nav>
            <div class="icon">
                <font-awesome-icon icon="clock" />
            </div>
            <h1>Stopwatch.</h1>
            <ul>
                <router-link class="nav link" to="/"><li>Dashboard</li></router-link>
                <router-link class="nav link" to="/entry"><li>Time Entry</li></router-link>
                <router-link class="nav link" to="/guide"><li>Guidelines</li></router-link>
                <router-link class="nav link" to="/login"><li>Logout</li></router-link>
            </ul>
        </nav>
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
    name: 'Navigation',
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