<template>
    <div>
        <form @submit.prevent="handleSubmit">
            <h2>Login</h2>
            <div class="form-group">
                <label for="username">Username</label>
                <input type="text" name="username" class="form-control" />
            </div>
            <div class="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" class="form-control" />
            </div>
            <div class="form-group">
                <button class="button">Login</button>
                <router-link to="/register" class="button secondary">Register</router-link>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data () {
        return {
            username: '',
            password: '',
            submitted: false
        }
    },
};
</script>