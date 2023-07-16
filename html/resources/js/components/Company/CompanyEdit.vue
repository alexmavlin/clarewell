<template>
    <div>
        <div class="card">
            <div class="card-body">
                <h4 class="card-title">Add your company details</h4>
                <p class="card-description">
                    This information will serve as the basis for generating all invoice templates.
                </p>
                <form class="forms-sample" @submit.prevent="updateCompany()" enctype="multipart/form-data">
                    <div class="d-flex col-12 justify-content-between">
                        <div class="form-group col-5">
                            <label for="name">Company name</label>
                            <input v-model="form.name" type="text" class="form-control" id="name"
                                placeholder="My Company Ltd.">
                        </div>
                        <div class="form-group col-3">
                            <label>Select country</label>
                            <v-select :options="countryOptions" v-model="form.country"></v-select>
                        </div>
                    </div>

                    <div class="d-flex col-12 justify-content-between">
                        <div class="form-group col 4">
                            <label for="city">City</label>
                            <input v-model="form.city" type="text" class="form-control" id="city" placeholder="London">
                        </div>

                        <div class="form-group col-4">
                            <label for="district">District</label>
                            <input v-model="form.district" type="text" class="form-control" id="district"
                                placeholder="Marylebone">
                        </div>

                        <div class="form-group col-4">
                            <label for="address">Address line</label>
                            <input v-model="form.address" type="text" class="form-control" id="address"
                                placeholder="9 Ivor Place">
                        </div>
                    </div>

                    <div class="d-flex col-12 justify-content-between">
                        <div class="form-group col-6">
                            <label for="postal_code">Postal code</label>
                            <input v-model="form.postal_code" type="text" class="form-control" id="postal_code"
                                placeholder="NW1 6BY">
                        </div>
                        <div class="form-group col-6">
                            <label for="vat">VAT number</label>
                            <input v-model="form.vat" type="text" class="form-control" id="vat" placeholder="12345678">
                        </div>
                    </div>

                    <button type="submit" class="btn btn-primary mr-2">Submit</button>
                    <router-link :to="{ name: 'home' }" class="btn btn-light">Cancel</router-link>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import API from '../../api'
import Vue from 'vue'
import vSelect from 'vue-select'
Vue.component('v-select', vSelect)
import 'vue-select/dist/vue-select.css';

export default {
    created() {
        this.getCompanyByOwner()
    },
    data() {
        return {
            form: {
                name: '',
                country: '',
                city: '',
                district: '',
                address: '',
                postal_code: '',
                vat: '',
            },
            countryOptions: [
                'United Kingdom',
                'Czech Republic',
                'Germany'
            ],
            company_id: localStorage.getItem('company_id')
        }
    },
    methods: {
        getCompanyByOwner() {
            API.get('/api/auth/company/edit/' + this.company_id)
                .then(res => {
                    console.log(res)
                    this.form = res.data.company
                })
                .catch(err => {
                    console.log(err)
                    console.log(err.response)
                })
        },
        updateCompany() {
            API.post('/api/auth/company/update/' + this.company_id, this.form)
                .then(res => {
                    console.log(res)
                    this.$router.push({name: 'home'})
                })
                .catch(err => {
                    console.log(err)
                    console.log(err.response)
                })
        }
    }
}
</script>