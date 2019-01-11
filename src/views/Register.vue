<template>
    <div>
        <form @submit.prevent="handleSubmit">
            <h2>Register</h2>
            <div class="form-group">
                <label for="firstName">First Name</label>
                <input type="text" name="firstName" class="form-control" />
            </div>
            <div class="form-group">
                <label for="lastName">Last Name</label>
                <input type="text" name="lastName" class="form-control" />
            </div>
            <div class="form-group">
                <label for="username">Username</label>
                <input type="text" name="username" class="form-control" />
            </div>
            <div class="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" class="form-control" />
            </div>
            <div class="form-group">
                <button class="button">Register</button>
                <router-link to="/login" class="button secondary">Cancel</router-link>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data () {
        return {
            user: {
                firstName: '',
                lastName: '',
                username: '',
                password: ''
            },
            submitted: false
        }
    }
};
</script>