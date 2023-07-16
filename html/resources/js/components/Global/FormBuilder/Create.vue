<template>
    <div>
        <div class="d-flex justify-content-center">
            <div class="col-md-12 grid-margin stretch-card">
                <div class="card min-height-100">
                    <div class="card-body">
                        <h4 class="card-title">New consultation</h4>
                        <form id="consultation_form_create" class="forms-sample consultation_form" @submit.prevent="consultation_save()">
                            <div class="d-flex">
                                <div class="form-group col-6">
                                    <label for="name" v-if="!consultation_form_errors">{{consultation_form.name ? 'Name of Consultation: ' + consultation_form.name : 'Name of Consultation:'}}</label>
                                    <p v-if="consultation_form_errors" class="error_message">{{ consultation_form_errors.name[0] }}</p>
                                    <div class="d-flex align-items-center">
                                        <input v-model="consultation_form.name" type="text" class="form-control mr-3" id="name">
                                        <button type="submit" class="btn btn-primary mr-2">Save</button>
                                    </div>
                                </div>
                            </div>
                            <button class="btn btn-light">Cancel</button>
                        </form>
                        <form @submit="section_edit()" class="forms-sample consultation_form_main">
                            <div class="d-flex align-items-center">
                                <h3 class="mr-3" v-if="consultation_form_name">{{ consultation_form_name }}</h3>
                                <div @click="add_section()" class="btn btn-primary mr-2">Add section</div>
                            </div>
                            <div class="d-flex align-items-center">
                                <input v-model="section_form.name" type="text" class="form-control mr-3" id="name">
                                <button type="submit" class="btn btn-primary mr-2">Save</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import api from '../../../api'
export default {
    created() {
        
    },
    mounted() {
        this.set_element_height('consultation_form_create')
    },
    data() {
        return {
            consultation_form: {
                name: '',
            },
            consultation_form_errors: null,
            store_section: {
                consultation_id: '',
            },
            section_form: {
                name: '',
            },
            sections: [],
            store_section_errors: null,
            consultation_form_name: 'Any name',
        }
    },
    methods: {
        consultation_save() {
            api.post('/api/auth/commoncontrollers/formbuilder/consultation/store', this.consultation_form)
                .then(res => {
                    this.hide_element('consultation_form_create')
                    console.log(res)
                    this.consultation_form_name = res.data.name
                    this.store_section.consultation_id = res.data.id
                    this.$router.push({name: 'formbuilder.edit', params: {id: res.data.id}})
                })
                .catch(err => {
                    this.consultation_form_errors = err.response.data.errors
                })
        },
        add_section() {
            console.log(this.store_section)
            api.post('/api/auth/commoncontrollers/formbuilder/section/store', this.store_section)
                .then(res => {
                    this.sections.push(res.data.id)
                    console.log(res)
                    console.log(this.sections)
                })
                .catch(err => {
                    this.store_section_errors = err.response.data.errors
                })
        },
        section_edit() {
            
        },  
        set_element_height(el) {
            let element = document.getElementById(el)
            element.style.height = element.clientHeight + "px"
            element.style.transition = "all .2s ease"
        },
        hide_element(el) {
            let element = document.getElementById(el)
            element.style.height = "0px"
        },
        show_element(el) {

        },
    }
}
</script>

<style lang="scss" scoped>
    .min-height-100{
        min-height: 450px;
    }
    .error_message{
        color: #d84c4c;
    }
    .consultation_form {
        transition: all .4s ease;
        overflow: hidden;
        &.active {
            height: 0;
        }
    }
    .consultation_form_main {
        padding: 16px 25px;
        border-radius: 10px;
        border: 1px solid #afafaf;
    }
</style>