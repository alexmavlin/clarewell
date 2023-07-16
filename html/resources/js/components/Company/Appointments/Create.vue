<template>
    <div>
        <div class="col-md-12 grid-margin stretch-card">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">Appointment for {{ patient.name }}</h4>
                    <p class="card-description">
                        Patient ID: {{ patient.patient_id }}
                    </p>
                    <form class="forms-sample" @submit.prevent="storeAppointment()">
                        <div class="form-group">
                            <input v-model="form.patient_id" type="text" class="form-control" id="patient_id" hidden>
                        </div>
                        <label for="">Choose date and time</label>

                        <div class="d-flex col-12">
                            <div class="form-group col-6">
                                <label for="clinician_id">Choose a clinician</label>
                                <v-select :options="clinician_options" :reduce="clinician_id => clinician_id.id"
                                    v-model="form.clinician_id" id="clinician_id"></v-select>
                            </div>
                            <div class="form-group col-6">
                                <label for="clinic_id">Choose a clinic</label>
                                <v-select :options="clinic_options" :reduce="clinic_id => clinic_id.id"
                                    v-model="form.clinic_id" id="clinic_id"></v-select>
                            </div>
                        </div>
                        <v-app id="dayspan" v-cloak>
                            <ds-calendar-app :calendar="calendar"></ds-calendar-app>
                        </v-app>
                        <div class="d-flex col-12">
                            <div class="form-group col-8">
                                <label for="notes">Notes</label>
                                <textarea v-model="form.notes" class="form-control" id="notes" rows="4"></textarea>
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
import api from '../../../api'
import Vue from 'vue'
import vSelect from 'vue-select'
Vue.component('v-select', vSelect)
import 'vue-select/dist/vue-select.css';
import DateRangePicker from 'vue2-daterange-picker'
import 'vue2-daterange-picker/dist/vue2-daterange-picker.css'
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'
import { Calendar } from 'dayspan';

export default {
    components: { 
        DateRangePicker,
        Calendar,
     },
    mounted() {
        this.getClinics()
        this.getClinicians()
        this.getPatient()
    },
    data() {
        return {
            calendar: Calendar.months(),
            form: {
                patient_id: this.$route.params.id,
                clinician_id: '',
                clinic_id: '',
                notes: '',
                time_range: {
                    startDate: null,
                    endDate: null
                }
            },
            clinics: {},
            patient: {},
            clinician_options: [],
            clinic_options: [],
        }
    },
    methods: {
        storeAppointment() {
            console.log(this.form)
            api.post('/api/auth/appointment/store', this.form)
                .then(res => {
                    console.log(res)
                    Swal.fire({
                        icon: 'success',
                        title: 'Appointment has been saved',
                        text: 'New appointment for ' + this.patient.name + ' is stored.',
                    })
                    this.$router.push({name: 'patients.show', params: {id: this.patient.id}})
                })
        },
        getPatient() {
            api.get('/api/auth/patient/' + this.$route.params.id)
                .then(res => {
                    this.patient = res.data
                })
        },
        getClinics() {
            api.get('/api/auth/clinic/index')
                .then(res => {
                    this.clinics = res.data
                    res.data.forEach(clinic => {
                        this.clinic_options.push({ id: clinic.id, label: clinic.address + ', ' + clinic.city })
                    })
                })
        },
        getClinicians() {
            api.get('/api/auth/employee/clinicians')
                .then(res => {
                    res.data.forEach(clinician => {
                        this.clinician_options.push({ id: clinician.id, label: clinician.name })
                    })
                    console.log(this.clinician_options)
                })
        },
    },
}
</script>