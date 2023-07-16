<template>
    <div>
        <div class="d-flex justify-content-center">
            <div class="col-md-6 grid-margin stretch-card">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">New Employee</h4>
                        <form class="forms-sample" @submit.prevent="storeEmployee()">
                            <div class="form-group">
                                <label for="name">Name</label>
                                <input v-model="form.name" type="text" class="form-control" id="name" placeholder="Joh Doe">
                            </div>
                            <div class="form-group">
                                <label for="email">Email address</label>
                                <input v-model="form.email" type="email" class="form-control" id="email"
                                    placeholder="Email">
                            </div>
                            <div class="form-group">
                                <label for="phone">Phone number</label>
                                <input v-model="form.phone" type="text" class="form-control" id="phone" placeholder="Email">
                            </div>
                            <div class="form-group">
                                <label>Select role</label>
                                <select v-model="form.role_id" class="form-control">
                                    <option v-for="role in roles" :value="role.id">{{ role.name }}</option>
                                </select>
                            </div>
                            <button type="submit" class="btn btn-primary mr-2">Submit</button>
                            <button class="btn btn-light">Cancel</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import API from '../../../api'
import Vue from 'vue'
import vSelect from 'vue-select'
Vue.component('v-select', vSelect)
import 'vue-select/dist/vue-select.css';
export default {
    created() {
        this.getData()
    },
    data() {
        return {
            form: {
                name: '',
                email: '',
                role_id: null,
                phone: '',
            },
            roles: [],
        }
    },
    methods: {
        getData() {
            API.get('/api/auth/employee/create')
                .then(res => {
                    this.roles = res.data.roles
                })
        },
        storeEmployee() {
            API.post('/api/auth/employee/store', this.form)
                .then(res => {
                    this.$router.push({name: 'employees.index'})
                })
                .catch(err => {
                    console.log(err)
                    console.log(err.response)
                })
        }
    }
}
</script>