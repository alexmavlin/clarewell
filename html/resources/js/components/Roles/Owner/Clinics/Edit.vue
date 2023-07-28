<template>
    <div>
        <div class="col-md-12 grid-margin stretch-card">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">New Clinic</h4>
                    <form class="forms-sample" @submit.prevent="updateClinic()">

                        <!-- Address input line -->
                        <div class="d-flex">
                            <div class="form-group col-3">
                                <label for="city"><b>City*</b></label>
                                <input v-model="form.city" type="text" class="form-control" id="city" placeholder="London">
                            </div>
                            <div class="form-group col-3">
                                <label for="district"><b>District*</b></label>
                                <input v-model="form.district" type="text" class="form-control" id="district"
                                    placeholder="Marylebone">
                            </div>
                            <div class="form-group col-3">
                                <label for="address"><b>Address*</b></label>
                                <input v-model="form.address" type="text" class="form-control" id="address"
                                    placeholder="Address Line...">
                            </div>
                            <div class="form-group col-3">
                                <label for="postal_code"><b>Postal code*</b></label>
                                <input v-model="form.postal_code" type="text" class="form-control" id="postal_code"
                                    placeholder="123456">
                            </div>
                        </div>

                        <!-- Email input line -->
                        <div class="d-flex justify-content-between">
                            <div class="form-group col-4">
                                <label for="email_primary"><b>Primary E-mail*</b></label>
                                <input v-model="form.email_primary" type="text" class="form-control" id="email_primary"
                                    placeholder="example@domain.com">
                            </div>
                            <div class="form-group col-4">
                                <label for="email_2"><b>Additional E-mail</b> (optional)</label>
                                <input v-model="form.email_1" type="text" class="form-control" id="email_2"
                                    placeholder="example@domain.com">
                            </div>
                            <div class="form-group col-4">
                                <label for="email_3"><b>Additional E-mail</b> (optional)</label>
                                <input v-model="form.email_2" type="text" class="form-control" id="email_3"
                                    placeholder="example@domain.com">
                            </div>
                        </div>

                        <!-- Email input line -->
                        <div class="d-flex justify-content-between">
                            <div class="form-group col-4">
                                <label for="phone_primary"><b>Primary Phone Number*</b></label>
                                <input v-model="form.phone_primary" type="text" class="form-control" id="phone_primary"
                                    placeholder="+420111222333">
                            </div>
                            <div class="form-group col-4">
                                <label for="phone_2"><b>Additional Phone Number</b> (optional)</label>
                                <input v-model="form.phone_1" type="text" class="form-control" id="phone_2"
                                    placeholder="+420111222333">
                            </div>
                            <div class="form-group col-4">
                                <label for="phone_3"><b>Additional Phone Number</b> (optional)</label>
                                <input v-model="form.phone_2" type="text" class="form-control" id="phone_3"
                                    placeholder="+420111222333">
                            </div>
                        </div>

                        <!-- Google links inputs -->
                        <div class="d-flex justify-content-between">
                            <div class="form-group col-6">
                                <label for="google_maps_link"><b>Google Maps Link</b></label>
                                <input v-model="form.google_maps_link" type="text" class="form-control" id="google_maps_link"
                                    placeholder="+420111222333">
                            </div>
                            <div class="form-group col-6">
                                <label for="google_maps_iframe"><b>Google Maps Iframe</b></label>
                                <input v-model="form.google_maps_iframe" type="text" class="form-control" id="google_maps_iframe"
                                    placeholder="+420111222333">
                            </div>
                        </div>

                        <!-- Timetable section -->
                        <div class="">
                            <div class="form-group d-flex flex-column align-items-center">
                                <label for=""><b>Sunday</b></label>
                                <div class="d-flex align-items-center">
                                    <vue-timepicker v-model="form.opening_hours[0].open_hour" 
                                                    :disabled="form.opening_hours[0].closed" 
                                                    format="HH:mm" 
                                                    :minute-interval="10">
                                    </vue-timepicker>
                                    <span style="padding: 0px 10px;"> - </span>
                                    <vue-timepicker v-model="form.opening_hours[0].close_hour" 
                                                    :disabled="form.opening_hours[0].closed" 
                                                    format="HH:mm" 
                                                    :minute-interval="10">
                                    </vue-timepicker>
                                </div>
                                <div class="form-check form-check-flat form-check-primary">
                                    <label class="form-check-label">
                                        <input type="checkbox" v-model="form.opening_hours[0].closed" @change="disableInput()" class="form-check-input">Closed
                                        <i class="input-helper"></i>
                                    </label>
                                </div>
                            </div>
                            <div class="form-group d-flex flex-column align-items-center">
                                <label for=""><b>Monday</b></label>
                                <div class="d-flex align-items-center">
                                    <vue-timepicker v-model="form.opening_hours[1].open_hour" 
                                                    :disabled="form.opening_hours[1].closed" 
                                                    format="HH:mm" 
                                                    :minute-interval="10">
                                    </vue-timepicker>
                                    <span style="padding: 0px 10px;"> - </span>
                                    <vue-timepicker v-model="form.opening_hours[1].close_hour" 
                                                    :disabled="form.opening_hours[1].closed" 
                                                    format="HH:mm" 
                                                    :minute-interval="10">
                                    </vue-timepicker>
                                </div>
                                <div class="form-check form-check-flat form-check-primary">
                                    <label class="form-check-label">
                                        <input type="checkbox" v-model="form.opening_hours[1].closed" class="form-check-input">Closed
                                        <i class="input-helper"></i>
                                    </label>
                                </div>
                            </div>
                            <div class="form-group d-flex flex-column align-items-center">
                                <label for=""><b>Tuesday</b></label>
                                <div class="d-flex align-items-center">
                                    <vue-timepicker v-model="form.opening_hours[2].open_hour" 
                                                    :disabled="form.opening_hours[2].closed" 
                                                    format="HH:mm" 
                                                    :minute-interval="10">
                                    </vue-timepicker>
                                    <span style="padding: 0px 10px;"> - </span>
                                    <vue-timepicker v-model="form.opening_hours[2].close_hour" 
                                                    :disabled="form.opening_hours[2].closed" 
                                                    format="HH:mm" 
                                                    :minute-interval="10">
                                    </vue-timepicker>
                                </div>
                                <div class="form-check form-check-flat form-check-primary">
                                    <label class="form-check-label">
                                        <input type="checkbox" v-model="form.opening_hours[2].closed" class="form-check-input">Closed
                                        <i class="input-helper"></i>
                                    </label>
                                </div>
                            </div>
                            <div class="form-group d-flex flex-column align-items-center">
                                <label for=""><b>Wednesday</b></label>
                                <div class="d-flex align-items-center">
                                    <vue-timepicker v-model="form.opening_hours[3].open_hour" 
                                                    :disabled="form.opening_hours[3].closed" 
                                                    format="HH:mm" 
                                                    :minute-interval="10">
                                    </vue-timepicker>
                                    <span style="padding: 0px 10px;"> - </span>
                                    <vue-timepicker v-model="form.opening_hours[3].close_hour" 
                                                    :disabled="form.opening_hours[3].closed" 
                                                    format="HH:mm" 
                                                    :minute-interval="10">
                                    </vue-timepicker>
                                </div>
                                <div class="form-check form-check-flat form-check-primary">
                                    <label class="form-check-label">
                                        <input type="checkbox" v-model="form.opening_hours[3].closed" class="form-check-input">Closed
                                        <i class="input-helper"></i>
                                    </label>
                                </div>
                            </div>
                            <div class="form-group d-flex flex-column align-items-center">
                                <label for=""><b>Thursday</b></label>
                                <div class="d-flex align-items-center">
                                    <vue-timepicker v-model="form.opening_hours[4].open_hour" 
                                                    :disabled="form.opening_hours[4].closed" 
                                                    format="HH:mm" 
                                                    :minute-interval="10">
                                    </vue-timepicker>
                                    <span style="padding: 0px 10px;"> - </span>
                                    <vue-timepicker v-model="form.opening_hours[4].close_hour" 
                                                    :disabled="form.opening_hours[4].closed" 
                                                    format="HH:mm" 
                                                    :minute-interval="10">
                                    </vue-timepicker>
                                </div>
                                <div class="form-check form-check-flat form-check-primary">
                                    <label class="form-check-label">
                                        <input type="checkbox" v-model="form.opening_hours[4].closed" class="form-check-input">Closed
                                        <i class="input-helper"></i>
                                    </label>
                                </div>
                            </div>
                            <div class="form-group d-flex flex-column align-items-center">
                                <label for=""><b>Friday</b></label>
                                <div class="d-flex align-items-center">
                                    <vue-timepicker v-model="form.opening_hours[5].open_hour" 
                                                    :disabled="form.opening_hours[5].closed" 
                                                    format="HH:mm" 
                                                    :minute-interval="10">
                                    </vue-timepicker>
                                    <span style="padding: 0px 10px;"> - </span>
                                    <vue-timepicker v-model="form.opening_hours[5].close_hour" 
                                                    :disabled="form.opening_hours[5].closed" 
                                                    format="HH:mm" 
                                                    :minute-interval="10">
                                    </vue-timepicker>
                                </div>
                                <div class="form-check form-check-flat form-check-primary">
                                    <label class="form-check-label">
                                        <input type="checkbox" v-model="form.opening_hours[5].closed" class="form-check-input">Closed
                                        <i class="input-helper"></i>
                                    </label>
                                </div>
                            </div>
                            <div class="form-group d-flex flex-column align-items-center">
                                <label for=""><b>Saturday</b></label>
                                <div class="d-flex align-items-center">
                                    <vue-timepicker v-model="form.opening_hours[6].open_hour" 
                                                    :disabled="form.opening_hours[6].closed" 
                                                    format="HH:mm" 
                                                    :minute-interval="10">
                                    </vue-timepicker>
                                    <span style="padding: 0px 10px;"> - </span>
                                    <vue-timepicker v-model="form.opening_hours[6].close_hour" 
                                                    :disabled="form.opening_hours[6].closed" 
                                                    format="HH:mm" 
                                                    :minute-interval="10">
                                    </vue-timepicker>
                                </div>
                                <div class="form-check form-check-flat form-check-primary">
                                    <label class="form-check-label">
                                        <input type="checkbox" v-model="form.opening_hours[6].closed" class="form-check-input">Closed
                                        <i class="input-helper"></i>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <button type="submit" class="btn btn-primary mr-2">Submit</button>
                        <router-link :to="{name: 'owner.clinics.show', params: {id: this.$route.params.id}}" class="btn btn-light">Cancel</router-link>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import API from '../../../../api'
import Vue from 'vue'
import VueTimepicker from 'vue2-timepicker'
Vue.component('vue-timepicker', VueTimepicker)
import 'vue2-timepicker/dist/VueTimepicker.css'
import Swal from 'sweetalert2'

export default {
    created() {
        this.getClinicData()
    },
    data() {
        return {
            form: {},
        }
    },
    methods: {
        getClinicData() {
            API.get(`/api/auth/clinic/show/${this.$route.params.id}`)
                .then(res => {
                    for(let i = 0; i < res.data.opening_hours.length; i++) {
                        if(res.data.opening_hours[i].closed == 1) {
                            res.data.opening_hours[i].closed = true
                        } else {
                            res.data.opening_hours[i].closed = false
                        }
                    }
                    
                    this.form = res.data
                    console.log(this.form)
                })
        },
        updateClinic() {
            Swal.fire({
                title: 'Are you sure you want to update the clinic?',
                text: "Clinic details will be changed",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Confirm'
            }).then((res) => {
                if(res.isConfirmed) {
                    API.post(`/api/auth/clinic/update/${this.$route.params.id}`, this.form)
                        .then(res => {
                            this.$router.push({name: 'owner.clinics.show', params: {id: this.$route.params.id}})
                        })
                }
            })
        }
    }
}
</script>