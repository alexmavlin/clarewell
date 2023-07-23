import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const route = new VueRouter({
    mode: 'history',
    routes:[
        { path: '/login', component: () => import('./components/Auth/Login'), name: 'login' },
        { path: '/registration', component: () => import('./components/Auth/Registration'), name: 'registration' },

        { path: '/home', component: () => import('./components/Home/Home'), name: 'home'},

        /* Company routes */
        { path: '/new_company', component: () => import('./components/Company/CompanyCreate'), name: 'company.create' },
        { path: '/edit_company', component: () => import('./components/Company/CompanyEdit'), name: 'company.edit' },
        /* // Company routes */

        /* Clinic routes */
        { path: '/new_clinic', component: () => import('./components/Company/Clinics/Create'), name: 'clinic.create' },
        /* // Clinic routes */

        /* Employees routes */
        { path: '/employees', component: () => import('./components/Company/Employees/Index'), name: 'employees.index' },
        { path: '/employee/create', component: () => import('./components/Company/Employees/Create'), name: 'employees.create' },

        /* Products routes */
        { path: '/products', component: () => import('./components/Company/Products/Index'), name: 'products.index' },
        { path: '/product/create', component: () => import('./components/Company/Products/Create'), name: 'products.create' },
        { path: '/product/:id', component: () => import('./components/Company/Products/Show'), name: 'products.show' },
        { path: '/product/:id/edit', component: () => import('./components/Company/Products/Edit'), name: 'products.edit' },

        /* Patient routes */
        { path: '/patients', component: () => import('./components/Company/Patients/Index'), name: 'patients.index' },
        { path: '/patient/create', component: () => import('./components/Company/Patients/Create'), name: 'patients.create' },
        { path: '/patient/:id', component: () => import('./components/Company/Patients/Show'), name: 'patients.show' },
        { path: '/patient/:id/edit', component: () => import('./components/Company/Patients/Edit'), name: 'patients.edit' },

        /* Form Builder routes */
        { path: '/form_builder', component: () => import('./components/Global/FormBuilder/Index'), name: 'formbuilder.index' },
        { path: '/form_builder/create', component: () => import('./components/Global/FormBuilder/Create'), name: 'formbuilder.create' },
        { path: '/form_builder/:id', component: () => import('./components/Global/FormBuilder/Edit'), name: 'formbuilder.edit' },

        /* Appointment routes */
        { path: '/appointment/create/:id', component: () => import('./components/Company/Appointments/Create'), name: 'appointments.create' },
        { path: '/appointment/calendar', component: () => import('./components/Company/Appointments/Calendar'), name: 'appointments.calendar' },

        /* Defaults */
        { path: '*', component: () => import('./components/Home/Home'), name: 'default' },

        /* Routes for Clinicans */
        {
            path: '/cl/dashboard',
            component: () => import('./components/Roles/Clinicians/Dashboard'),
            name: 'clinician.dashboard',
        },
        {
            path: '/cl/patients',
            component: () => import('./components/Roles/Clinicians/Patients/Index'),
            name: 'clinician.patients',
        },
        {
            path: '/cl/appointments',
            component: () => import('./components/Roles/Clinicians/Appointments/Index'),
            name: 'clinician.appointments',
        },
        {
            path: '/cl/colleagues',
            component: () => import('./components/Roles/Clinicians/Colleagues/Index'),
            name: 'clinician.colleagues',
        },
        /* // Routes for Clinicans */

        /* Routes for Receptionists */
        {
            path: '/re/dashboard',
            component: () => import('./components/Roles/Receptionists/Dashboard'),
            name: 'receptionists.dashboard',
        },
        {
            path: '/re/patients',
            component: () => import('./components/Roles/Receptionists/Patients/Index'),
            name: 'receptionists.patients',
        },
        {
            path: '/re/appointments',
            component: () => import('./components/Roles/Receptionists/Appointments/Index'),
            name: 'receptionists.appointments',
        },
        {
            path: '/re/colleagues',
            component: () => import('./components/Roles/Receptionists/Colleagues/Index'),
            name: 'receptionists.colleagues',
        },

        /* // Routes for Receptionists */
    ]
})

route.beforeEach((to,from, next) => {

    const accessToken = localStorage.getItem('access_token')

    if(!accessToken) {
        if(to.name === 'login' || to.name === 'registration') {
            return next()
        } else {
            return next({
                name: 'login'
            })
        }
    }
    
    if(to.name === 'login' && accessToken || to.name === 'registration' && accessToken) {
        next({
            name: 'fruits.index'
        })
    }
    console.log(to.name)
    next()
})

export default route