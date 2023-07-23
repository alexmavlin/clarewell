<template>
    <div class="col-md-12 grid-margin stretch-card">
        <Fullcalendar   class="fullcalendar" 
                        :options="calendarPlugins">
        </Fullcalendar>
        <div class="event_modal" id="event_modal">
            <div class="event_modal--window">
                <i class="mdi mdi-close event_modal--window__close" @click="closeCalendarModal()"></i>
                <h3>New Appointment</h3>
                <form ref="appointment_form" @submit.prevent="appointmentSave()">

                    <!-- Row #1 -->
                    <div class="event_modal--form_row">
                        <!-- Location Select -->
                        <div class="form-group col-6">
                                <label for="clinic_id">Select Location</label>
                                <v-select :options="clinic_options" :reduce="clinic_id => clinic_id.id"
                                    v-model="appointment_form.clinic_id" id="clinic_id"></v-select>
                        </div>
                        <!-- Appointment Type -->
                        <div class="form-group col-6">
                                <label for="clinic_id">Appointment Type</label>
                                <v-select></v-select>
                        </div>
                    </div>
                    <!-- // Row #1 -->

                    <!-- Row #2 -->
                    <div class="event_modal--form_row">
                        <!-- Location Select -->
                        <div class="form-group col-6">
                                <label for="clinic_id">Practitioner</label>
                                <v-select :options="clinician_options" :reduce="clinician_id => clinician_id.id"
                                    v-model="appointment_form.clinician_id" id="clinician_id"></v-select>
                        </div>
                        <!-- Appointment Type -->
                        <div class="form-group col-6">
                                <label for="clinic_id">Patient</label>
                                <v-select :options="patient_options" :reduce="patient_id => patient_id.id"
                                    v-model="appointment_form.patient_id" id="clinic_id"></v-select>
                        </div>
                    </div>
                    <!-- // Row #2 -->

                    <!-- Row #3 -->
                    <div class="form-group">
                        <label>Date and time</label>
                        <div class="event_modal--form_row">
                            <input  v-model="appointment_form.start_time" 
                                    type="datetime-local" 
                                    class="form-control form-control-sm" 
                                    id="event_modal_form_start" 
                                    aria-label="Date start">
                            <input v-model="appointment_form.end_time" type="datetime-local" class="form-control form-control-sm" id="event_modal_form_end" aria-label="Date end">
                        </div>
                    </div>
                    <!-- // Row #3 -->

                    <!-- Row #4 -->
                    <div class="form-group">
                        <label for="exampleTextarea1">Comments</label>
                        <textarea v-model="appointment_form.notes" class="form-control" id="exampleTextarea1" rows="4"></textarea>
                    </div>
                    <!-- // Row #4 -->
                    <button type="submit" class="btn btn-primary mr-2">Save</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>

import API from '../../../../api'
import Fullcalendar from '@fullcalendar/vue'
import DayGridPlugin from '@fullcalendar/daygrid'
import TimeGridPlugin from '@fullcalendar/timegrid'
import InteractionPlugin from '@fullcalendar/interaction'
import ListPlugin from '@fullcalendar/list'
import Vue from 'vue'
import vSelect from 'vue-select'
Vue.component('v-select', vSelect)
import 'vue-select/dist/vue-select.css';

export default {
    mounted() {
        this.getClinics()
        this.getClinicians()
        this.getPatients()
        this.getAppointments()
    },
    data() {
        return{
            clinic_options: [],
            clinician_options: [],
            patient_options: [],
            appointment_form: {
                clinic_id: '',
                clinician_id: '',
                patient_id: '',
                start_time: '',
                end_time: '',
                notes: '',
            },
            calendarPlugins: {
                plugins: [
                    DayGridPlugin,
                    TimeGridPlugin,
                    InteractionPlugin,
                    ListPlugin,
                ],
                initialView: 'timeGridWeek',
                headerToolbar: {
                    start: 'title',
                    center: 'dayGridMonth, timeGridWeek, timeGridDay, listWeek',
                    end: 'prev today next',
                },
                weekends: false,
                slotDuration: '00:15:00',
                slotMinTime: '08:00:00',
                slotMaxTime: '18:00:00',
                selectable: true,
                nowIndicator: true,
                select: this.handleDateClick,
                events: [],
                eventClick: this.handleEventClick,
            }
        }
    },
    components: {
        Fullcalendar,
    },
    methods: {
        handleDateClick: function(arg) {
            // console.log(arg)
            let modal = document.getElementById('event_modal')
            modal.classList.add('active')
            this.appointment_form.start_time = arg.startStr.split('+')[0]
            this.appointment_form.end_time = arg.endStr.split('+')[0]
        },
        closeCalendarModal() {
            let modal = document.getElementById('event_modal')
            modal.classList.remove('active')
        },
        getClinics() {
            let company_id = localStorage.getItem('company_id')
            API.get('/api/auth/clinic/index/' + company_id)
                .then(res => {
                    res.data.forEach(clinic => {
                        this.clinic_options.push({ id: clinic.id, label: clinic.address + ', ' + clinic.city })
                    })
                })
                .catch(err => {
                    console.log(err)
                    console.log(err.response)
                })
        },
        getClinicians() {
            let company_id = localStorage.getItem('company_id')
            API.get('/api/auth/employee/clinicians/' + company_id)
                .then(res => {
                    res.data.forEach(clinician => {
                        this.clinician_options.push({ id: clinician.id, label: clinician.name })
                    })
                })
                .catch(err => {
                    console.log(err)
                    console.log(err.response)
                })
        },
        getPatients() {
            let company_id = localStorage.getItem('company_id')
            API.get('/api/auth/patient/getPatients/' + company_id)
                .then(res => {
                    res.data.forEach(patient => {
                        this.patient_options.push({ id: patient.id, label: patient.name + ' - (id: ' + patient.patient_id + ')' })
                    })
                })
                .catch(err => {
                    console.log(err)
                    console.log(err.response)
                })
        },
        appointmentSave() {
            API.post('/api/auth/appointment/store', this.appointment_form)
                .then(res => {
                    document.getElementById('event_modal').classList.remove('active')
                    /* Cleaning form data */
                    this.appointment_form.clinic_id = ''
                    this.appointment_form.clinician_id = ''
                    this.appointment_form.patient_id = ''
                    this.appointment_form.start_time = ''
                    this.appointment_form.end_time = ''
                    this.appointment_form.notes = ''
                    /* Getting appointments */
                    this.calendarPlugins.events = []
                    this.getAppointments()
                })
                .catch(err => {
                    console.log(err)
                    console.log(err.response)
                })
        },
        getAppointments() {
            API.get('/api/auth/roles/receptionists/calendar-appointments')
                .then(res => {
                    console.log(res)
                    res.data.forEach(appointment => {
                        this.calendarPlugins.events.push(
                            {
                                title: appointment.patient.name, 
                                start: appointment.start_time, 
                                end: appointment.end_time 
                            }
                        )
                    })
                })
                .catch(err => {
                    console.log(err)
                    console.log(err.response)
                })
        },
        handleEventClick: function(arg) {
            alert(arg.event.title)
        }
    }
}
</script>

<style lang="scss">
.fullcalendar{
    max-width: 100%;
    width: 100%;
}
.event_modal {
    position: absolute;
    width: 100%;
    height: 100%;
    backdrop-filter: brightness(0.4);
    z-index: 5;
    display: flex;
    justify-content: center;
    pointer-events: none;
    opacity: 0;
    transition: opacity .4s ease-in-out;
    &.active{
        opacity: 1;
        pointer-events: all;
    }
    &--window {
        margin: 20px 10px;
        max-width: 800px;
        padding: 25px;
        width: 100%;
        min-height: 300px;
        background: #fff;
        border-radius: 6px;
        align-self: flex-start;
        position: relative;
        &__close {
            position: absolute;
            top: 25px;
            right: 25px;
            cursor: pointer;
        }
    }
    &--form_row {
        display: flex;
        input + input {
            margin-left: 25px;
        }
        .form-group {
            width: 100%;
            flex-grow: 1;
        }
    }
}
.fc .fc-event {
    padding: 2px;
}
</style>