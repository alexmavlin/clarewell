<template>
    <div>
        <div class="row">
            <div class="col-md-12 grid-margin stretch-card">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex justify-content-between">
                            <p class="card-title mb-0">My Clinics</p>
                            <!-- <div class="input-group col-6">
                                <input v-model="serchBarText" @input="searchClinics()" type="text" class="form-control" placeholder="Patient's username, email, phone... etc.">
                                <div class="input-group-append">
                                    <button @click.prevent="searchClinics()" class="btn btn-sm btn-primary" type="button">Search</button>
                                </div>
                            </div> -->
                            <router-link :to="{ name: 'owner.clinic.create' }" type="button"
                                class="btn btn-info">Add</router-link>
                        </div>
                        <div class="table-responsive">
                            <table class="table table-striped table-borderless">
                                <thead>
                                    <tr>
                                        <th>Address</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="clinic in clinics">
                                        <td>
                                            {{ clinic.address }}, {{ clinic.city }}, {{ clinic.postal_code }}
                                        </td>
                                        <td class="font-weight-bold">
                                            {{ clinic.email_primary }}
                                        </td>
                                        <td>
                                            {{ clinic.phone_primary }}
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
        this.getClinics()
    },
    data() {
        return {
            clinics: {},
            serchBarText: '',
        }
    },
    methods: {
        getClinics() {
            let companyId = localStorage.getItem('company_id')
            API.get('/api/auth/clinic/index/' + companyId)
                .then(res => {
                    console.log(res)
                    this.clinics = res.data.data
                })
        },
        searchClinics() {
            let getQuery = this.serchBarText
            API.get('/api/auth/roles/clinicians/patients/index', {params: {searchBarData: getQuery}})
                .then(res => {
                    this.clinics = res.data.data
                })
        }
    }
}
</script>

<style>.table-link {
    text-decoration: none;
    color: #000;
}</style>