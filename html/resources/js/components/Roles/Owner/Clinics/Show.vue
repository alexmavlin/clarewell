<template>
    <div>
        <div class="row">
            <div class="col-md-12 grid-margin stretch-card">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex justify-content-between">
                            <div class="info-group">
                                <p class="card-title mb-0">{{ clinic.city }}</p>
                                <p class="text-secondary">{{ clinic.address }}, {{ clinic.district }}, {{ clinic.postal_code }}</p>
                            </div>
                            <div class="btn-group">
                                <router-link    :to="{ name: 'owner.clinics.edit' }" 
                                                type="button"
                                                class="btn btn-info">
                                                Edit
                                </router-link>
                                <button type="button"
                                        class="btn btn-danger"
                                        @click.prevent="deleteClinic()">
                                        Delete
                                </button>
                            </div>
                        </div>
                        <div class="d-flex">
                            <div class="contact-information mt-5">
                                <div class="row">
                                    <div class="col-md-12">
                                        <address>
                                            <p class="font-weight-bold mb-3">Company Details</p>
                                            <p class="font-weight-bold">{{ clinic.company.name }}</p>
                                            <p class="font-weight-bold">{{ clinic.company.city }}</p>
                                            <p>{{ clinic.company.address }}</p>
                                            <p>{{ clinic.company.district}}</p>
                                            <p>{{ clinic.company.city }}, {{ clinic.company.postal_code }}</p>
                                        </address>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="clinic__info--row">
                            <div>
                                <address>
                                    <p class="font-weight-bold mb-3">Clinic Details</p>
                                    <p class="font-weight-bold">{{ clinic.city }}</p>
                                    <p>{{ clinic.address }}</p>
                                    <p>{{ clinic.district}}</p>
                                    <p>{{ clinic.city }}, {{ clinic.postal_code }}</p>
                                </address>
                            </div>
                            <div>
                                <address class="clinic__contact--column">
                                    <p v-if="clinic.email_primary"><b>Email #1:</b>  <a :href="'mailto:' + clinic.email_primary">{{ clinic.email_primary }}</a></p>
                                    <p v-if="clinic.email_1"><b>Email #2:</b>  <a :href="'mailto:' + clinic.email_1">{{ clinic.email_1 }}</a></p>
                                    <p v-if="clinic.email_2"><b>Email #3:</b>  <a :href="'mailto:' + clinic.email_2">{{ clinic.email_2 }}</a></p>
                                </address>
                            </div>
                            <div>
                                <address class="clinic__contact--column">
                                    <p v-if="clinic.phone_primary"><b>Phone number #1:</b>  <a :href="'tel:' + clinic.phone_primary">{{ clinic.phone_primary }}</a></p>
                                    <p v-if="clinic.phone_1"><b>Phone number #2:</b>  <a :href="'tel:' + clinic.phone_1">{{ clinic.phone_1 }}</a></p>
                                    <p v-if="clinic.phone_2"><b>Phone number #3:</b>  <a :href="'tel:' + clinic.phone_2">{{ clinic.phone_2 }}</a></p>
                                </address>
                            </div>
                        </div>
                        <iframe class="google__iframe" 
                                :src="clinic.google_maps_iframe" 
                                style="border:0;" 
                                allowfullscreen="" 
                                loading="lazy" 
                                referrerpolicy="no-referrer-when-downgrade"
                                v-if="clinic.google_maps_iframe"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import api from '../../../../api';
import Swal from 'sweetalert2'

export default {
    created() {
        this.getClinicData()
    },
    data() {
        return {
            clinic: {},
        }
    },
    methods: {
        getClinicData() {
            api.get(`/api/auth/clinic/show/${this.$route.params.id}`)
                .then(res => {
                    this.clinic = res.data
                    console.log(this.clinic)
                })
        },
        deleteClinic() {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((res) => {
                if(res.isConfirmed) {
                    api.delete(`/api/auth/clinic/delete/${this.$route.params.id}`)
                        .then(res => {
                            this.$router.push({name: 'owner.clinics'})
                        })
                }
            })
            
        }
    }
}
</script>

<style lang="scss" scoped>
.clinic__info--row {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
}
.clinic__contact--column {
    margin-top: 30px;
}
.google__iframe {
    width: 100%;
    height: 270px;
}
</style>