<template>
    <div>
        <div class="d-flex justify-content-center">
            <div class="col-md-12 grid-margin stretch-card">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">New Employee</h4>
                        <form class="forms-sample" @submit.prevent="storePatient()">
                            <div class="d-flex">
                                <div class="form-group col-4">
                                    <label for="name">Name</label>
                                    <input v-model="form.name" type="text" class="form-control" id="name"
                                        placeholder="Joh Doe">
                                </div>
                                <div class="form-group col-4">
                                    <label for="email">Email address</label>
                                    <input v-model="form.email" type="email" class="form-control" id="email"
                                        placeholder="Email">
                                </div>
                                <div class="form-group col-4">
                                    <label for="phone">Phone number</label>
                                    <input v-model="form.phone" type="text" class="form-control" id="phone"
                                        placeholder="Phone number">
                                </div>

                            </div>
                            <div class="d-flex">
                                <div class="form-group col-3">
                                    <label for="country">Country</label>
                                    <input v-model="form.country" type="text" class="form-control" id="country"
                                        placeholder="Country">
                                </div>
                                <div class="form-group col-3">
                                    <label for="city">City</label>
                                    <input v-model="form.city" type="text" class="form-control" id="city"
                                        placeholder="City">
                                </div>
                                <div class="form-group col-3">
                                    <label for="district">District</label>
                                    <input v-model="form.district" type="text" class="form-control" id="district"
                                        placeholder="District">
                                </div>
                                <div class="form-group col-3">
                                    <label for="postal_code">Postal code</label>
                                    <input v-model="form.postal_code" type="text" class="form-control" id="postal_code"
                                        placeholder="Postal code">
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="address">Address</label>
                                <input v-model="form.address" type="text" class="form-control" id="address"
                                    placeholder="Address">
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
import api from '../../../api'
export default {
    created() {
    },
    data() {
        return {
            form: {
                name: '',
                email: '',
                phone: '',
                country: '',
                district: '',
                city: '',
                address: '',
                postal_code: '',
            },
            roles: [],
        }
    },
    methods: {
        storePatient() {
            api.post('/api/auth/patient/store', this.form)
                .then(res => {
                    this.$router.push({name: 'patients.index'})
                })
                .catch(err => {
                    console.log(err)
                    console.log(err.response)
                })
        }
    }
}
</script>