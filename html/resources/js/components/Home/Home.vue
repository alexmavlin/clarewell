<template>
    <div>
        <div class="row">

            <div class="col-md-12 grid-margin stretch-card">
                <div v-if="roleId == 2 || !company" class="card">
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center">
                            <h2>To continue working add a company, please.</h2>
                            <router-link :to="{ name: 'company.create' }" type="button"
                                class="btn btn-info">Add</router-link>
                        </div>
                    </div>
                </div>
                <div v-if="roleId == 2 && company" class="card">
                    <div class="card-body">
                        <div class="d-flex justify-content-between">
                            <h4 class="card-title">{{ company.name }}</h4>
                            <router-link :to="{ name: 'company.edit' }" type="button"
                                class="btn btn-info">Edit</router-link>
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
import API from '../../api'
import Calendar from '../components/Calendar'

export default {
    name: 'Fruits',
    components: {
        Calendar
    },
    created() {
        this.getUserInfo()
    },
    mounted() {
        this.getCompany()
    },
    data() {
        return {
            api: null,
            company: null,
            clinics: null,
            roleId: null,
        }
    },
    methods: {
        getCompany() {
            let user_role = localStorage.getItem('role_id')
            let company_id = localStorage.getItem('company_id')
            console.log(user_role)
            if(user_role == 6) {
                API.get('/api/auth/company/getCompanyById/' + company_id)
                .then(res => {
                    console.log(res)
                    if (res.data.company) {
                        this.company = res.data.company
                        this.clinics = res.data.company.clinics
                    }
                })
                .catch(err => {
                    console.log(err)
                    console.log(err.response)
                })
            } else if(user_role == 2) {
                API.get('/api/auth/company/getCompanyByOwner')
                .then(res => {
                    if (res.data.company) {
                        this.company = res.data.company
                        this.clinics = res.data.company.clinics
                    }
                })
                .catch(err => {
                    console.log(err)
                    console.log(err.response)
                })
            }
        },
        getUserInfo() {
            this.roleId = localStorage.getItem('role_id')
        }
    }
}
</script>


<style lang="scss" scoped>
.router-link{
    text-decoration: none;
    color: #fff;
}
</style>