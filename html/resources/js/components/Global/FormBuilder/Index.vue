<template>
    <div>
        <div class="row">
            <div class="col-md-12 grid-margin stretch-card">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex justify-content-between">
                            <p class="card-title mb-0">Forms</p>
                            <div class="input-group col-6">
                                <input @change="searchForms()" type="text" class="form-control" placeholder="Patient's username, email, phone... etc.">
                                <div class="input-group-append">
                                    <button @click.prevent="searchPatients()" class="btn btn-sm btn-primary" type="button">Search</button>
                                </div>
                            </div>
                            <router-link :to="{ name: 'formbuilder.create' }" type="button"
                                class="btn btn-info">Add</router-link>
                        </div>
                        <div class="table-responsive">
                            <table class="table table-striped table-borderless">
                                <thead>
                                    <tr>
                                        <th>Form title</th>
                                        <th>Sections</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="consultation in consultations">
                                        <td>{{ consultation.name }}</td>
                                        <td>{{ consultation.sections.length }}</td>
                                        <td>
                                            <router-link :to="{name: 'formbuilder.edit', params: {id: consultation.id}}">Edit</router-link>
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
import api from '../../../api'
import API from '../../../api'
export default {
    created() {
        this.getConsultations()
    },
    data() {
        return {
            consultations: null
        }
    },
    methods: {
        getConsultations() {
            api.get('/api/auth/commoncontrollers/formbuilder/index')
                .then(res => {
                    this.consultations = res.data
                    console.log(this.consultations)
                })
                .catch(err => {
                    console.log(err)
                    console.log(err.response)
                })
        }
    }
}
</script>

<style>.table-link {
    text-decoration: none;
    color: #000;
}</style>