<template>
    <div>
        <div class="col-lg-12 grid-margin stretch-card">
            <div class="card">
                <div class="card-body">
                    <div class="d-flex justify-content-between">
                        <h4 class="card-title">Employees</h4>
                        <router-link :to="{ name: 'employees.create' }" type="button" class="btn btn-info">Add</router-link>
                    </div>
                    <p class="card-description">
                        List of employees
                    </p>
                    <div class="table-responsive">
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th>
                                        Name
                                    </th>
                                    <th>
                                        Email
                                    </th>
                                    <th>
                                        Phone
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-if="employees" v-for="employee in employees">
                                    <td>{{ employee.name }}</td>
                                    <td><a href="">{{ employee.email}}</a></td>
                                    <td>{{ employee.phone }}</td>
                                </tr>
                                <tr v-if="!employees">
                                    <td>No employees yet</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
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
        this.getEmployees()
    },
    data() {
        return {
            employees: null,
        }
    },
    methods: {
        getEmployees() {
            API.get('api/auth/employee/index')
                .then(res => {
                    if(res.data.employees.length) {
                        this.employees = res.data.employees
                    }
                    console.log(res)
                })
                .catch(err => {
                    console.log(err)
                    console.log(err.response)
                })
        }
    }
}
</script>