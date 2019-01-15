<template>
    <div>
        <form @submit.prevent="handleSubmit">
            <h2>Register</h2>
            <div class="form-group">
                <label for="firstName">First Name</label>
                <input type="text" name="firstName" v-model="user.firstName" class="form-control" />
            </div>
            <div class="form-group">
                <label for="lastName">Last Name</label>
                <input type="text" name="lastName" v-model="user.lastName" class="form-control" />
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="text" name="email" v-model="user.email" class="form-control" />
            </div>
            <div class="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" v-model="user.password" class="form-control" />
            </div>
            <div class="form-group">
                <label htmlFor="confirm">Confirm Password</label>
                <input type="password" name="confirm" v-model="user.confirm" class="form-control" />
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
                email: '',
                password: '',
                confirm: '',
            },
            submitted: false
        }
    },
    computed: {
        comparePasswords () {
            return this.password === this.confirm ? true : 'Passwords don\'t match'
        },
        error () {
            return this.$store.state.error
        },
        loading () {
            return this.$store.state.loading
        }
    },
    methods: {
        handleSubmit () {
            if (this.comparePasswords !== true) {
                return
            }
            this.$store.dispatch('signUserUp', { email: this.user.email, password: this.user.password })
        }
    },
    watch: {
        error (value) {
            if (value) {
                this.alert = true
            }
        },
        alert (value) {
            if (!value) {
                this.$store.commit('setError', null)
            }
        }
    }
};
</script>