<template>
    <div class="jumbotron">
        <navigation></navigation>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div v-if="alert.message" :class="`alert ${alert.type}`">{{alert.message}}</div>
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
// import { Navigation } from '../index.js';

export default {
    name: 'app',
    // components: {
    //     Navigation
    // },
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

<style lang="scss">
    @import '../static/style.scss';
</style>