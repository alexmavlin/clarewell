<template>
    <div>
        <div class="d-flex justify-content-center">
            <div class="col-md-12 grid-margin stretch-card">
                <div class="card min-height-100">
                    <div class="card-body">
                        <h4 class="card-title" v-if="consultation.name">{{ consultation.name }}</h4>
                        <div v-for="section in consultation.sections">
                            <div class="section">
                                <div class="section__header">
                                    <h2 class="section__name" v-if="section.name">{{ section.name }}</h2>
                                    <div class="section__controls">
                                        <button type="submit" class="btn btn-danger mr-2" @click="remove_section(section.id)">Remove</button>
                                    </div>
                                </div>

                                <div class="section__record" v-for="record in section.records">
                                    <div class="section__record--header">
                                        <h3 class="section__record--name" v-if="record.name">{{ record.name }}</h3>
                                        <p class="section__record--controls">
                                            <button type="button" @click="remove_record(record.id)" class="section__record--close">X</button>
                                        </p>
                                    </div>

                                    <div class="section__record--fieldset" v-for="fieldset in record.fieldsets">
                                        <div class="section__record--fieldset__header">
                                            <h4 class="section__record--fieldset__name" v-if="fieldset.name">Fieldset id: {{ fieldset.name }}</h4>
                                            <select name="" id="" @change="change_fieldset_direction($event, fieldset.id)">
                                                <option value="2">Row</option>
                                                <option value="1">Column</option>
                                            </select>
                                            <button type="button" @click="remove_fieldset(fieldset.id)">X</button>
                                        </div>

                                        <div class="section__form-field" v-for="field in fieldset.form_fields">
                                            <form :id="'field_form_' + field.id" @submit.prevent="edit_field(field.id)">
                                                <input  type="text" 
                                                        :value="field.name" 
                                                        @input="field_form.name = $event.target.value" 
                                                        :id="'field_name_' + field.id"
                                                        placeholder="Field Name*">
                                                <input  type="text" 
                                                        :value="field.placeholder" 
                                                        @input="field_form.placeholder = $event.target.value"
                                                        placeholder="Field Placeholder">
                                                <select name="type" @input="field_form.type = $event.target.value">
                                                    <option value="1">Text Input</option>
                                                    <option value="2">Text Area</option>
                                                    <option value="3">Select</option>
                                                    <option value="4">Checkbox</option>
                                                    <option value="5">Radio Button</option>
                                                    <option value="6">Date</option>
                                                </select>
                                                <button type="submit" class="create_field_btn text-primary">Save</button>
                                            </form>
                                            <form>
                                                <button type="submit" class="create_field_btn text-danger">Delete</button>
                                            </form>
                                        </div>

                                        <button class="create_field_btn" type="button" @click="create_field(fieldset.id)">+ Field</button>
                                    </div>

                                    <form @submit.prevent="store_fieldset(record.id)">
                                        <input type="hidden" :id="'record_id_' + record.id" :value="record.id">
                                        <button type="submit" class="section__record--fieldset__add--btn">+ Fieldset</button>
                                    </form>
                                </div>

                                <!-- Record Form -->
                                <form class="section__record--form" :id="'record_form_' + section.id" @submit.prevent="store_record(section.id)">
                                    <div class="d-flex align-items-center mb-3">
                                        <input type="hidden" :id="'section_id_' + section.id" :value="section.id">
                                        <input type="text" class="form-control mr-3" :value="record_name" @input="record_name = $event.target.value" :id="'record_name_' + section.id">
                                        <button type="submit" class="btn btn-primary mr-2">Save</button>
                                    </div>
                                </form>
                                <button :id="'add_record_' + section.id" :data-form="'record_form_' + section.id" type="submit" class="btn btn-primary mr-2" @click="add_record(section.id)">Add Record</button>
                                <button :id="'cancell_record_btn_' + section.id" :data-form="'record_form_' + section.id" type="submit" class="record_cancell_btn btn btn-danger mr-2" @click="cancell_record(section.id)">Cancell</button>
                            </div>
                        </div>
                        <form id="add_section" v-if="new_section" @submit.prevent="store_section()">
                            <div class="d-flex align-items-center mb-3">
                                <input type="hidden" v-model="section_form.consultation_id">
                                <input v-model="section_form.name" type="text" class="form-control mr-3" id="name">
                                <button type="submit" class="btn btn-primary mr-2">Save</button>
                            </div>
                        </form>
                        <button v-if="!new_section" type="submit" class="btn btn-primary mr-2" @click="add_section()">Add Section</button>
                        <button v-if="new_section" type="submit" class="btn btn-danger mr-2" @click="cancell_section()">Cancell</button>
                    
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import api from '../../../api';

export default {
    created() {
        this.get_consultation(this.$route.params.id)
    },
    mounted() {

    },
    data() {
        return {
            consultation: null,
            section_form: {
                name: '',
                consultation_id: '',
            },
            new_section: false,
            record_name: '',
            field_form: {
                name: '',
                placeholder: '',
                type: '',
                fieldset_id: '',
            },
        }
    },
    methods: {
        get_consultation(consultation) {
            api.get('/api/auth/commoncontrollers/formbuilder/consultation/' + consultation)
                .then(res => {
                    this.consultation = res.data
                    this.section_form.consultation_id = res.data.id
                    console.log(res)
                })
                .catch(err => {
                    console.log("Error")
                    console.log(err.response)
                })
        },
        add_section() {
            this.new_section = true
        },
        cancell_section() {
            this.new_section = false
        },
        add_record(id) {
            let button = document.getElementById('add_record_' + id)
            let cancell_btn = document.getElementById('cancell_record_btn_' + id)
            let form = document.getElementById(button.getAttribute('data-form'))

            form.style.display = 'block'
            button.style.display = 'none'
            cancell_btn.style.display = 'block'
        },
        cancell_record(id) {
            let button = document.getElementById('add_record_' + id)
            let cancell_btn = document.getElementById('cancell_record_btn_' + id)
            let form = document.getElementById(cancell_btn.getAttribute('data-form'))

            form.style.display = 'none'
            button.style.display = 'block'
            cancell_btn.style.display = 'none'
        },

        /* Store Record */
        store_record(id) {
            let form_data = {
                section_id: id,
                name: this.record_name
            }
            api.post('/api/auth/commoncontrollers/formbuilder/records/store', form_data)
                .then(res => {
                    this.get_consultation(this.$route.params.id)
                    this.record_name = ''
                    let button = document.getElementById('add_record_' + id)
                    let cancell_btn = document.getElementById('cancell_record_btn_' + id)
                    let form = document.getElementById(cancell_btn.getAttribute('data-form'))

                    form.style.display = 'none'
                    button.style.display = 'block'
                    cancell_btn.style.display = 'none'
                })
                .catch(err => {
                    console.log(err)
                    console.log(err.response)
                })
            console.log(form_data)
        },
        remove_record(id) {
            api.delete('/api/auth/commoncontrollers/formbuilder/records/delete/' + id)
                .then(res => {
                    this.get_consultation(this.$route.params.id)
                })
                .catch(err => {
                    console.log(err)
                    console.log(err.response)
                })
            console.log(id)
        },
        store_section() {
            console.log(this.section_form)
            api.post('/api/auth/commoncontrollers/formbuilder/section/store', this.section_form)
                .then(res => {
                    this.new_section = false
                    this.get_consultation(this.$route.params.id)
                    this.section_form.name = ''
                    console.log(res)
                    console.log(this.sections)
                })
                .catch(err => {
                    this.store_section_errors = err.response.data.errors
                    console.log(err)
                    console.log(err.response)
                })
        },
        remove_section(id) {
            api.delete('/api/auth/commoncontrollers/formbuilder/section/delete/' + id)
                .then(res => {
                    this.get_consultation(this.$route.params.id)
                })
                .catch(err => {
                    console.log(err)
                    console.log(err.response)
                })
        },

        /* Store Fieldset */
        store_fieldset(id) {
            let form_data = {
                record_id: id
            }
            api.post('/api/auth/commoncontrollers/formbuilder/fieldsets/store', form_data)
                .then(res => {
                    this.get_consultation(this.$route.params.id)
                })
                .catch(err => {
                    console.log(err)
                    console.log(err.response)
                })
        },
        change_fieldset_direction(event, id) {
            let form_data = {
                content_direction: event.target.value,
            }
            api.patch('/api/auth/commoncontrollers/formbuilder/fieldsets/edit/' + id, form_data)
                .then(res => {
                    this.get_consultation(this.$route.params.id)
                })
                .catch(err => {
                    console.log(err)
                    console.log(err.response)
                })
            console.log(event.target.value, id)
        },
        remove_fieldset(id) {
            api.delete('/api/auth/commoncontrollers/formbuilder/fieldsets/delete/', id)
                .then(res => {
                    this.get_consultation(this.$route.params.id)
                })
                .catch(err => {
                    console.log(err)
                    console.log(err.response)
                })
        },
        create_field(id) {
            api.post('/api/auth/commoncontrollers/formbuilder/fields/store/' + id)
                .then(res => {
                    this.get_consultation(this.$route.params.id)
                })
                .catch(err => {
                    console.log(err)
                    console.log(err.response)
                })
        },
        edit_field(id) {
            
            api.patch('/api/auth/commoncontrollers/formbuilder/fields/edit/' + id, this.field_form)
                .then(res => {
                    this.get_consultation(this.$route.params.id)
                })
                .catch(err => {
                    console.log(err)
                    console.log(err.response)
                })
        }
    }
}
</script>

<style lang="scss" scoped>
.section {
    border: 1px solid #b1aeae;
    padding: 20px;
    border-radius: 8px;
    margin-bottom: 15px;
    &__header {
        display: flex;
        align-items: center;
        margin-bottom: 15px;
    }
    &__name {
        font-size: 18px;
        line-height: 24px;
    }
    &__controls {
        margin-left: auto;
    }
    &__record--form {
        display: none;
    }
    &__record {
        padding: 15px;
        margin-bottom: 20px;
        background-color: #eef6fa;
        border-radius: 15px;
    }
    &__record--header{
        display: flex;
        margin-bottom: 15px;
        align-items: center;
    }
    &__record--name {
        font-size: 16px;
        line-height: 20px;
    }
    &__record--controls {
        margin-left: auto;
    }
    &__record--close {
        font-size: 24px;
        line-height: 24px;
        width: 24px;
        height: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        background-color: #fff;
        border-radius: 4px;
    }
    &__record--fieldset__add--btn {
        font-size: 14px;
        line-height: 18px;
        color: #b1aeae;
        border: none;
        background: none;
    }
    &__record--fieldset {
        padding: 18px;
        margin-bottom: 20px;
        border: 1px solid #b1aeae;
        border-radius: 6px;
    }
    &__record--fieldset__header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 15px;
        button {
            border: none;
            background: none;
        }
    }
    &__form-field {
        margin-bottom: 15px;
        display: flex;
        align-items: center;
        form {
            margin-right: 20px;
        }
    }
}
.record_cancell_btn {
    display: none;
}
.create_field_btn {
    font-size: 14px;
    line-height: 18px;
    color: #b1aeae;
    border: none;
    background: none;
}
</style>