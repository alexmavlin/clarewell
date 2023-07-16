<template>
    <div>
        <div class="row">
            <div class="col-md-12 grid-margin stretch-card">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex justify-content-between">
                            <p class="card-title mb-0">Patients</p>
                            <div class="input-group col-6">
                                <input @change="searchPatients()" type="text" class="form-control" placeholder="Patient's username, email, phone... etc.">
                                <div class="input-group-append">
                                    <button @click.prevent="searchPatients()" class="btn btn-sm btn-primary" type="button">Search</button>
                                </div>
                            </div>
                            <router-link :to="{ name: 'patients.create' }" type="button"
                                class="btn btn-info">Add</router-link>
                        </div>
                        <div class="table-responsive">
                            <table class="table table-striped table-borderless">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Patient ID</th>
                                        <th>Address</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="patient in patients">
                                        <td>
                                            <router-link class="table-link"
                                                :to="{ name: 'patients.show', params: { id: patient.id } }">
                                                {{ patient.name }}
                                            </router-link>
                                        </td>
                                        <td class="font-weight-bold">
                                            <router-link class="table-link"
                                                :to="{ name: 'patients.show', params: { id: patient.id } }">
                                                ${{ patient.email }}
                                            </router-link>
                                        </td>
                                        <td><router-link class="table-link"
                                                :to="{ name: 'patients.show', params: { id: patient.id } }">
                                                {{ patient.patient_id }}
                                            </router-link>
                                        </td>
                                        <td class="font-weight-medium">
                                            <router-link class="table-link"
                                                :to="{ name: 'patients.show', params: { id: patient.id } }">
                                                {{ patient.address + ', ' + patient.postal_code + ', ' + patient.district +
                                                    ', ' + patient.city }}
                                            </router-link>
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
import API from '../../../api'
export default {
    created() {
        this.getPatients()
    },
    data() {
        return {
            patients: {},
        }
    },
    methods: {
        getPatients() {
            API.get('/api/auth/patient/index')
                .then(res => {
                    this.patients = res.data
                })
        }
    }
}
</script>

<style>.table-link {
    text-decoration: none;
    color: #000;
}</style>