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
                                <h4>Forgot password?</h4>
                                <h6 class="font-weight-light">Enter your Email</h6>
                                <form class="pt-3" @submit.prevent="sendToken()">
                                    <div class="form-group">
                                        <div v-if="errors">
                                            <small class="text-danger" v-if="errors.email">{{ errors.email[0] }}</small>
                                        </div>
                                        <small class="text-danger" v-if="credentialError">{{ credentialError }}</small>
                                        <input type="email" class="form-control form-control-lg" id="exampleInputEmail1"
                                            placeholder="Email" v-model="form.email">
                                    </div>
                                    <div class="mt-3">
                                        <button type="submit"
                                            class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn">
                                            Restore password
                                        </button>
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
                email: ''
            },
            errors: {},
            credentialError: null,
            headers: {}
        }
    },
    methods: {
        sendToken() {
            API.post('/api/auth/forgotpassword', this.form)
                .then(res => {
                    console.log(res)
                })
                .catch(err => {
                    this.errors = err.response.data.errors
                    this.credentialError = err.response.data.error
                })
        },
    }
}
</script>