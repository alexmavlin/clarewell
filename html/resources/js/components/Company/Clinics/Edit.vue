<template>
    <div>
        <div class="col-md-12 grid-margin stretch-card">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">New Clinic</h4>
                    <form class="forms-sample" @submit.prevent="createClinic()">

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
                                <input v-model="form.email_2" type="text" class="form-control" id="email_2"
                                    placeholder="example@domain.com">
                            </div>
                            <div class="form-group col-4">
                                <label for="email_3"><b>Additional E-mail</b> (optional)</label>
                                <input v-model="form.email_3" type="text" class="form-control" id="email_3"
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
                                <input v-model="form.phone_2" type="text" class="form-control" id="phone_2"
                                    placeholder="+420111222333">
                            </div>
                            <div class="form-group col-4">
                                <label for="phone_3"><b>Additional Phone Number</b> (optional)</label>
                                <input v-model="form.phone_3" type="text" class="form-control" id="phone_3"
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
                                    <vue-timepicker v-model="form.open0" 
                                                    :disabled="form.closed0" 
                                                    format="HH:mm" 
                                                    :minute-interval="10">
                                    </vue-timepicker>
                                    <span style="padding: 0px 10px;"> - </span>
                                    <vue-timepicker v-model="form.close0" :disabled="form.closed0"></vue-timepicker>
                                </div>
                                <div class="form-check form-check-flat form-check-primary">
                                    <label class="form-check-label">
                                        <input type="checkbox" v-model="form.closed0" class="form-check-input">Closed
                                        <i class="input-helper"></i>
                                    </label>
                                </div>
                            </div>
                            <div class="form-group d-flex flex-column align-items-center">
                                <label for=""><b>Monday</b></label>
                                <div class="d-flex align-items-center">
                                    <vue-timepicker v-model="form.open1" :disabled="form.closed1"></vue-timepicker>
                                    <span style="padding: 0px 10px;"> - </span>
                                    <vue-timepicker v-model="form.close1" :disabled="form.closed1"></vue-timepicker>
                                </div>
                                <div class="form-check form-check-flat form-check-primary">
                                    <label class="form-check-label">
                                        <input type="checkbox" v-model="form.closed1" class="form-check-input">Closed
                                        <i class="input-helper"></i>
                                    </label>
                                </div>
                            </div>
                            <div class="form-group d-flex flex-column align-items-center">
                                <label for=""><b>Tuesday</b></label>
                                <div class="d-flex align-items-center">
                                    <vue-timepicker v-model="form.open2" :disabled="form.closed2"></vue-timepicker>
                                    <span style="padding: 0px 10px;"> - </span>
                                    <vue-timepicker v-model="form.close2" :disabled="form.closed2"></vue-timepicker>
                                </div>
                                <div class="form-check form-check-flat form-check-primary">
                                    <label class="form-check-label">
                                        <input type="checkbox" v-model="form.closed2" class="form-check-input">Closed
                                        <i class="input-helper"></i>
                                    </label>
                                </div>
                            </div>
                            <div class="form-group d-flex flex-column align-items-center">
                                <label for=""><b>Wednesday</b></label>
                                <div class="d-flex align-items-center">
                                    <vue-timepicker v-model="form.open3" :disabled="form.closed3"></vue-timepicker>
                                    <span style="padding: 0px 10px;"> - </span>
                                    <vue-timepicker v-model="form.close3" :disabled="form.closed3"></vue-timepicker>
                                </div>
                                <div class="form-check form-check-flat form-check-primary">
                                    <label class="form-check-label">
                                        <input type="checkbox" v-model="form.closed3" class="form-check-input">Closed
                                        <i class="input-helper"></i>
                                    </label>
                                </div>
                            </div>
                            <div class="form-group d-flex flex-column align-items-center">
                                <label for=""><b>Thursday</b></label>
                                <div class="d-flex align-items-center">
                                    <vue-timepicker v-model="form.open4" :disabled="form.closed4"></vue-timepicker>
                                    <span style="padding: 0px 10px;"> - </span>
                                    <vue-timepicker v-model="form.close4" :disabled="form.closed4"></vue-timepicker>
                                </div>
                                <div class="form-check form-check-flat form-check-primary">
                                    <label class="form-check-label">
                                        <input type="checkbox" v-model="form.closed4" class="form-check-input">Closed
                                        <i class="input-helper"></i>
                                    </label>
                                </div>
                            </div>
                            <div class="form-group d-flex flex-column align-items-center">
                                <label for=""><b>Friday</b></label>
                                <div class="d-flex align-items-center">
                                    <vue-timepicker v-model="form.open5" :disabled="form.closed5"></vue-timepicker>
                                    <span style="padding: 0px 10px;"> - </span>
                                    <vue-timepicker v-model="form.close5" :disabled="form.closed5"></vue-timepicker>
                                </div>
                                <div class="form-check form-check-flat form-check-primary">
                                    <label class="form-check-label">
                                        <input type="checkbox" v-model="form.closed5" class="form-check-input">Closed
                                        <i class="input-helper"></i>
                                    </label>
                                </div>
                            </div>
                            <div class="form-group d-flex flex-column align-items-center">
                                <label for=""><b>Saturday</b></label>
                                <div class="d-flex align-items-center">
                                    <vue-timepicker v-model="form.open6" :disabled="form.closed6"></vue-timepicker>
                                    <span style="padding: 0px 10px;"> - </span>
                                    <vue-timepicker v-model="form.close6" :disabled="form.closed6"></vue-timepicker>
                                </div>
                                <div class="form-check form-check-flat form-check-primary">
                                    <label class="form-check-label">
                                        <input type="checkbox" v-model="form.closed6" class="form-check-input">Closed
                                        <i class="input-helper"></i>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <button type="submit" class="btn btn-primary mr-2">Submit</button>
                        <button class="btn btn-light">Cancel</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import API from '../../../api'
import Vue from 'vue'
import VueTimepicker from 'vue2-timepicker'
Vue.component('vue-timepicker', VueTimepicker)
import 'vue2-timepicker/dist/VueTimepicker.css'
export default {
    data() {
        return {
            form: {
                city: '',
                district: '',
                address: '',
                postal_code: '',
                email_primary: '',
                email_2: '',
                email_3: '',
                phone_primary: '',
                phone_2: '',
                phone_3: '',
                google_maps_link: '',
                google_maps_iframe: '',
                open0: '',
                open1: '',
                open2: '',
                open3: '',
                open4: '',
                open5: '',
                open6: '',
                close0: '',
                close1: '',
                close2: '',
                close3: '',
                close4: '',
                close5: '',
                close6: '',
                closed0: false,
                closed1: false,
                closed2: false,
                closed3: false,
                closed4: false,
                closed5: false,
                closed6: false,
            }
        }
    },
    methods: {
        createClinic() {
            API.post('/api/auth/clinic/create', this.form)
                .then(res => {
                    console.log(res)
                })
                .catch(err => {
                    console.log(err)
                    console.log(err.response)
                })
        },
    }
}
</script>