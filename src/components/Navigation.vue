<template>
    <div>
        <nav>
            <h1><font-awesome-icon icon="clock" />STOPWATCH</h1>
            <ul>
                <li><router-link class="nav link" to="/">Time Entry</router-link></li>
                <li><router-link class="nav link" to="/">Data</router-link></li>
                <li><router-link class="nav link" to="/">Guidelines</router-link></li>
                <li><router-link class="nav link" to="/login">Login</router-link></li>
                <li><router-link class="nav link" to="/register">Register</router-link></li>
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