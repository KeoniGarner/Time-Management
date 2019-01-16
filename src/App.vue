<template>
    <div class="jumbotron">
        <div class="row">
            <navigation></navigation>
            <div class="container col-10 offset-2">
                <div class="row">
                    <div class="col-12">
                        <transition name="router">
                            <router-view></router-view>
                        </transition>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'app',
};
</script>

<style lang="scss">
    @import './static/style.scss';
</style>