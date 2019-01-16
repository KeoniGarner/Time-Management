<template>
    <div>
        <form @submit.prevent="handleSubmit">
            <h2>Login</h2>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="text" name="email" v-model="email" class="form-control" />
            </div>
            <div class="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" v-model="password" class="form-control" />
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
            email: '',
            password: '',
            submitted: false
        }
    },
    mounted () {
        this.logout();
    },
    methods: {
        logout() {
            this.$store.dispatch('logout');
        },
        handleSubmit() {
            this.$store.dispatch('signUserIn', { email: this.email, password: this.password })
                .then(() => {
                    this.$router.push({name:'dashboard'});
                })
                .catch(() => {

                });
        }
    },
    computed: {
        error () {
            return this.$store.state.error;
        },
        loading () {
            return this.$store.state.loading;
        }
    },
    watch: {
        error (value) {
            if (value) {
                this.alert = true;
            }
        },
        alert (value) {
            if (!value) {
                this.$store.commit('setError', null);
            }
        }
    }
};
</script>