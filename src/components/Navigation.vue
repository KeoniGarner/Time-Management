<template>
    <div>
        <nav>
            <div class="icon">
                <font-awesome-icon icon="clock" />
            </div>
            <h1>Stopwatch.</h1>
            <ul>
                <router-link class="nav link nav-link" to="/"><li>Dashboard</li></router-link>
                <router-link class="nav link nav-link" to="/entry"><li>Time Entry</li></router-link>
                <router-link class="nav link nav-link" to="/guide"><li>Guidelines</li></router-link>
                <router-link class="nav link" to="/login"><li>Logout</li></router-link>
            </ul>
        </nav>
    </div>
</template>
<script>
export default {
    name: 'Navigation',
};
</script>