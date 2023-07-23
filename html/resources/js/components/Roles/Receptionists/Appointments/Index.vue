<template>
    <div>
        <div class="row">
            <div class="col-md-12 grid-margin stretch-card">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex justify-content-between">
                            <p class="card-title mb-0">My appointments</p>
                            <div class="input-group col-6">
                                <input v-model="serchBarText" @input="searchAppointments()" type="text" class="form-control" placeholder="Patient's username, email, phone... etc.">
                                <div class="input-group-append">
                                    <button @click.prevent="searchAppointments()" class="btn btn-sm btn-primary" type="button">Search</button>
                                </div>
                            </div>
                        </div>
                        <div class="table-responsive">
                            <table class="table table-striped table-borderless">
                                <thead>
                                    <tr>
                                        <th>Patient</th>
                                        <th>Patient ID</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Date of appointment</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="appointment in appointments">
                                        <td>
                                            {{ appointment.patient.name }}
                                        </td>
                                        <td class="font-weight-bold">
                                            {{ appointment.patient.patient_id }}
                                        </td>
                                        <td>
                                            {{ appointment.patient.email }}
                                        </td>
                                        <td class="font-weight-medium">
                                            {{ appointment.patient.phone }}
                                        </td>
                                        <td class="font-weight-medium">
                                            {{ appointment.start_time }}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import API from '../../../../api'
export default {
    created() {
        this.getAppointments()
    },
    data() {
        return {
            appointments: {},
            serchBarText: '',
        }
    },
    methods: {
        getAppointments() {
            let getQuery = this.$route.query.searchBarData
            API.get('/api/auth/roles/receptionists/appointments/index', {params: {searchBarData: getQuery}})
                .then(res => {
                    console.log(res)
                    this.appointments = res.data.data
                })
        },
        searchAppointments() {
            let getQuery = this.serchBarText
            API.get('/api/auth/roles/receptionists/appointments/index', {params: {searchBarData: getQuery}})
                .then(res => {
                    this.appointments = res.data.data
                })
        }
    }
}
</script>

<style>.table-link {
    text-decoration: none;
    color: #000;
}</style>