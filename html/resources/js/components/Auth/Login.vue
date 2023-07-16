<template>
    <div>
        <div class="container-scroller">
            <div class="container-fluid page-body-wrapper full-page-wrapper">
                <div class="content-wrapper d-flex align-items-center auth px-0">
                    <div class="row w-100 mx-0">
                        <div class="col-lg-4 mx-auto">
                            <div class="auth-form-light text-left py-5 px-4 px-sm-5">
                                <div class="brand-logo">
                                    <img :src="logo" alt="logo">
                                </div>
                                <h4>Hello! let's get started</h4>
                                <h6 class="font-weight-light">Sign in to continue.</h6>
                                <form class="pt-3" @submit.prevent="login()">
                                    <div class="form-group">
                                        <div v-if="errors">
                                            <small class="text-danger" v-if="errors.email">{{ errors.email[0] }}</small>
                                        </div>
                                        <small class="text-danger" v-if="credentialError">{{ credentialError }}</small>
                                        <input type="email" class="form-control form-control-lg" id="exampleInputEmail1"
                                            placeholder="Email" v-model="form.email">
                                    </div>
                                    <div class="form-group">
                                        <div v-if="errors">
                                            <small class="text-danger" v-if="errors.password">{{ errors.password[0] }}</small>
                                        </div>
                                        <input type="password" class="form-control form-control-lg"
                                            id="exampleInputPassword1" placeholder="Password" v-model="form.password">
                                    </div>
                                    <div class="mt-3">
                                        <button type="submit"
                                            class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn">
                                            SIGN IN
                                        </button>
                                    </div>
                                    <div class="my-2 d-flex justify-content-between align-items-center">
                                        <a href="#" class="auth-link text-black" v-if="credentialError">Forgot password?</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- content-wrapper ends -->
            </div>
            <!-- page-body-wrapper ends -->
        </div>
    </div>
</template>

<script>
import API from '../../api'
export default {
    name: "Login",
    data() {
        return {
            logo: '/template_src/images/logo.svg',
            form: {
                email: '',
                password: '',
            },
            errors: {},
            credentialError: null,
            headers: {}
        }
    },
    methods: {
        login() {
            API.post('/api/auth/login', this.form)
                .then(res => {
                    // console.log(res)
                    localStorage.setItem('access_token', res.data.access_token)
                    this.headers = {
                        'Accept': 'application/json',
                        'Authorization': 'Bearer ' + localStorage.getItem('access_token')
                    }
                    console.log(this.headers)
                    API.post('/api/auth/me', {headers: this.headers})
                        .then(res => {
                            console.log(res)
                            localStorage.setItem('uid', res.data.id)
                            localStorage.setItem('role_id', res.data.role_id)
                            localStorage.setItem('company_id', res.data.company_id)

                            if(res.data.role_id == 2) {
                                this.$router.push({ name: 'home' })
                            } else if(res.data.role_id == 6) {
                                console.log('here_2')
                                this.$router.push({ name: 'clinician.dashboard' })
                            } else if(res.data.role_id == 4) {

                            } else if(res.data.role_id == 3) {
                            
                            } else if(res.data.role_id == 5) {

                            }
                        })
                    
                })
                .catch(err => {
                    this.errors = err.response.data.errors
                    this.credentialError = err.response.data.error
                })
        },
    }
}
</script>