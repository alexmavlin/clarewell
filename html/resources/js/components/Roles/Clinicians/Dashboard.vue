<template>
<div>
        <div class="row">

            <div class="col-md-12 grid-margin stretch-card">
                <div v-if="roleId == 6" class="card">
                    <div class="card-body">
                        <div class="d-flex justify-content-between">
                            <h4 class="card-title">{{ company.name }}</h4>
                        </div>
                        <p class="card-description">
                            {{ company.address + ', ' + company.postal_code + ', ' + company.city + ', ' + company.district
                                + ', ' + company.country }}
                        </p>
                        <div class="row">
                            <Calendar />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import api from '../../../api'
import Calendar from '../../components/Roles/Clinicians/ClaendarClinicians.vue'

export default {
    components: {
        Calendar
    },
    mounted() {
        this.getCompany(),
        this.getRoleId()
    },
    created() {

    },
    data() {
        return {
            roleId: '',
            company: [],
        }
    },
    methods: {
        getCompany() {
            let company_id = localStorage.getItem('company_id')
            api.get('/api/auth/company/getCompanyById/' + company_id)
                .then(res => {
                    this.company = res.data.company
                    console.log(this.company)
                })
                .catch(err => {
                    console.log(err)
                    console.log(err.response)
                })
        },
        getRoleId() {
            this.roleId = localStorage.getItem('role_id')
        }
    }
}
</script>