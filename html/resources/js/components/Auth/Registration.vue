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
                                <form class="pt-3" @submit.prevent="registerUser()">
                                    <div class="form-group">
                                        <div v-if="errors">
                                            <small class="text-danger" v-if="errors.email">{{ errors.email[0] }}</small>
                                        </div>
                                        <small v-if="error403" class="text-danger">{{ error403 }}</small>
                                        <input type="email" class="form-control form-control-lg" id="email"
                                            placeholder="Email" v-model="form.email">
                                    </div>
                                    <div class="form-group">
                                        <div v-if="errors">
                                            <small class="text-danger" v-if="errors.name">{{ errors.name[0] }}</small>
                                        </div>
                                        <input type="text" class="form-control form-control-lg" id="name" placeholder="Name"
                                            v-model="form.name">
                                    </div>
                                    <div class="form-group">
                                        <div v-if="errors">
                                            <small class="text-danger" v-if="errors.password">{{ errors.password[0] }}</small>
                                        </div>
                                        <input type="password" class="form-control form-control-lg" id="password"
                                            placeholder="Password" v-model="form.password">
                                    </div>
                                    <div class="form-group">
                                        <input type="password" class="form-control form-control-lg" id="password"
                                            placeholder="Password" v-model="form.password_confirmation">
                                    </div>
                                    <div class="mt-3">
                                        <button type="submit"
                                            class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn">
                                            SIGN UP
                                        </button>
                                    </div>
                                    <div class="my-2 d-flex justify-content-between align-items-center">
                                        <div class="form-check">
                                            <label class="form-check-label text-muted">
                                                <input type="checkbox" class="form-check-input">
                                                Keep me signed in
                                            </label>
                                        </div>
                                        <a href="#" class="auth-link text-black">Forgot password?</a>
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
    name: "Registration",
    data() {
        return {
            logo: '/template_src/images/logo.svg',
            form: {
                email: '',
                name: '',
                password: '',
                password_confirmation: '',
            },
            errors: {},
            error403: null
        }
    },
    methods: {
        registerUser() {
            axios.post('/api/register/signup', this.form)
                .then(res => {
                    localStorage.setItem('access_token', res.data.access_token)
                    let headers = {
                        'Accept': 'application/json',
                        'Authorization': 'Bearer ' + localStorage.getItem('access_token')
                    }
                    console.log(headers)
                    API.post('/api/auth/me', {headers: headers})
                        .then(res => {
                            console.log(res)
                            localStorage.setItem('uid', res.data.id)
                            localStorage.setItem('role_id', res.data.role_id)
                        })
                    this.$router.push({ name: 'company.create' })
                })
                .catch(err => {
                    console.log(err)
                    if(err.response.data.errors) {
                        this.errors = err.response.data.errors
                    }
                    if(err.response.data.message) {
                        this.error403 = err.response.data.message
                    }
                })
        }
    }
}
</script>