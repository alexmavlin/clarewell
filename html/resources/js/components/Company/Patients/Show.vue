<template>
    <div>
        <div class="col-md-12 grid-margin stretch-card">
            <div class="card">
                <div class="d-flex">
                    <div class="card-body col-8">
                        <h4 class="card-title">{{ patient.name }}</h4>
                        <p class="card-description">
                            Patient id: {{ patient.patient_id }}
                        </p>
                        <div class="row">
                            <div class="col-md-6">
                                <address>
                                    <p class="font-weight-bold">Address</p>
                                    <p>
                                        {{ patient.address }},
                                    </p>
                                    <p>
                                        {{ patient.postal_code }}
                                    </p>
                                    <p>
                                        {{ patient.district + ', ' + patient.city }}
                                    </p>
                                </address>
                            </div>
                            <div class="col-md-6">
                                <address class="text-primary">
                                    <p class="font-weight-bold">
                                        E-mail
                                    </p>
                                    <p class="mb-2">
                                        {{ patient.email }}
                                    </p>
                                    <p class="font-weight-bold">
                                        Phone number
                                    </p>
                                    <p>
                                        {{ patient.phone ? patient.phone : '' }}
                                    </p>
                                </address>
                            </div>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="card-body">
                            <div class="template-demo">
                                <router-link :to="{name: 'appointments.create', params: {id: patient.id}}" type="button" class="btn btn-info btn-lg btn-block">Book an appointment</router-link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <h4 class="card-title">History</h4>
                    <p class="card-description">
                        Use class <code>.lead</code>
                    </p>
                    <p class="lead">
                        Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import api from '../../../api';

export default {
    mounted() {
        this.getPatientData()
    },
    data() {
        return {
            patient: {}
        }
    },
    methods: {
        getPatientData() {
            api.get('/api/auth/patient/' + this.$route.params.id)
                .then(res => {
                    console.log(res)
                    this.patient = res.data
                })
        }
    }
}
</script>