<template>
    <div>
        <div class="container-scroller" v-if="accessToken">
            <!-- partial:partials/_navbar.html -->
            <nav class="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
                <div class="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
                    <a class="navbar-brand brand-logo mr-5" href="index.html"><img src="/template_src/images/logo.svg"
                            class="mr-2" alt="logo" /></a>
                    <a class="navbar-brand brand-logo-mini" href="index.html"><img src="/template_src/images/logo-mini.svg"
                            alt="logo" /></a>
                </div>
                <div class="navbar-menu-wrapper d-flex align-items-center justify-content-end">
                    <button class="sidebar__toggler" 
                            type="button" 
                            @click="sidebarToggle($event)">
                        <span></span>
                    </button>
                    <ul class="navbar-nav mr-lg-2">
                        <li class="nav-item nav-search d-none d-lg-block">
                            <ClinicianSearchBar v-if="role_id == 6" />
                        </li>
                    </ul>
                    <ul class="navbar-nav navbar-nav-right">
                        <li class="nav-item dropdown">
                            <a class="nav-link count-indicator dropdown-toggle" id="notificationDropdown" href="#"
                                data-toggle="dropdown">
                                <i class="icon-bell mx-0"></i>
                                <span class="count"></span>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
                                aria-labelledby="notificationDropdown">
                                <p class="mb-0 font-weight-normal float-left dropdown-header">Notifications</p>
                                <a class="dropdown-item preview-item">
                                    <div class="preview-thumbnail">
                                        <div class="preview-icon bg-success">
                                            <i class="ti-info-alt mx-0"></i>
                                        </div>
                                    </div>
                                    <div class="preview-item-content">
                                        <h6 class="preview-subject font-weight-normal">Application Error</h6>
                                        <p class="font-weight-light small-text mb-0 text-muted">
                                            Just now
                                        </p>
                                    </div>
                                </a>
                                <a class="dropdown-item preview-item">
                                    <div class="preview-thumbnail">
                                        <div class="preview-icon bg-warning">
                                            <i class="ti-settings mx-0"></i>
                                        </div>
                                    </div>
                                    <div class="preview-item-content">
                                        <h6 class="preview-subject font-weight-normal">Settings</h6>
                                        <p class="font-weight-light small-text mb-0 text-muted">
                                            Private message
                                        </p>
                                    </div>
                                </a>
                                <a class="dropdown-item preview-item">
                                    <div class="preview-thumbnail">
                                        <div class="preview-icon bg-info">
                                            <i class="ti-user mx-0"></i>
                                        </div>
                                    </div>
                                    <div class="preview-item-content">
                                        <h6 class="preview-subject font-weight-normal">New user registration</h6>
                                        <p class="font-weight-light small-text mb-0 text-muted">
                                            2 days ago
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </li>
                        <li class="nav-item nav-profile dropdown">
                            <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" id="profileDropdown">
                                <img src="template_src/images/faces/face28.jpg" alt="profile" />
                            </a>
                            <div class="dropdown-menu dropdown-menu-right navbar-dropdown"
                                aria-labelledby="profileDropdown">
                                <a class="dropdown-item">
                                    <i class="ti-settings text-primary"></i>
                                    Settings
                                </a>
                                <a class="dropdown-item">
                                    <i class="ti-power-off text-primary"></i>
                                    Logout
                                </a>
                            </div>
                        </li>
                        <li class="nav-item nav-settings d-none d-lg-flex">
                            <a class="nav-link" href="#">
                                <i class="icon-ellipsis"></i>
                            </a>
                        </li>
                    </ul>
                    <button class="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button"
                        data-toggle="offcanvas">
                        <span class="icon-menu"></span>
                    </button>
                </div>
            </nav>
            <!-- partial -->
            <div class="container-fluid page-body-wrapper">
                <nav class="sidebar sidebar-offcanvas" id="sidebar">
                    <ul class="nav">
                        <!-- Links to Dashboard -->
                        <li class="nav-item">
                            <!-- Owner -->
                            <router-link v-if="role_id == 2" :to="{ name: 'home' }" class="nav-link">
                                <i class="icon-grid menu-icon"></i>
                                <span class="menu-title">Dashboard</span>
                            </router-link>
                            <!-- Receptionists -->
                            <router-link v-if="role_id == 4" :to="{ name: 'receptionists.dashboard' }" class="nav-link">
                                <i class="icon-grid menu-icon"></i>
                                <span class="menu-title">Dashboard</span>
                            </router-link>
                            <!-- Link for Clinicians -->
                            <router-link v-if="role_id == 6" :to="{ name: 'clinician.dashboard' }" class="nav-link">
                                <i class="icon-grid menu-icon"></i>
                                <span class="menu-title">Dashboard</span>
                            </router-link>
                        </li>
                        
                        <!-- Links to patients pages -->
                        <li class="nav-item">
                            <!-- Owner -->
                            <router-link v-if="role_id == 2" :to="{ name: 'patients.index' }" class="nav-link">
                                <i class="icon-grid menu-icon"></i>
                                <span class="menu-title">Patients</span>
                            </router-link>
                            <!-- Receptionist -->
                            <router-link v-if="role_id == 4" :to="{ name: 'clinician.patients' }" class="nav-link">
                                <i class="icon-grid menu-icon"></i>
                                <span class="menu-title">Patients</span>
                            </router-link>
                            <!-- Clinician -->
                            <router-link v-if="role_id == 6" :to="{ name: 'clinician.patients' }" class="nav-link">
                                <i class="icon-grid menu-icon"></i>
                                <span class="menu-title">Patients</span>
                            </router-link>
                        </li>

                        <!-- Links to appointments -->
                        <li class="nav-item">
                            <!-- Clinician -->
                            <router-link v-if="role_id == 6" :to="{ name: 'clinician.appointments' }" class="nav-link">
                                <i class="icon-grid menu-icon"></i>
                                <span class="menu-title">Appointments</span>
                            </router-link>
                        </li>

                        <!-- Links to Employees/Colleagues -->
                        <li class="nav-item" v-if="role_id == 2">
                            <router-link :to="{ name: 'employees.index' }" class="nav-link">
                                <i class="icon-grid menu-icon"></i>
                                <span class="menu-title">Employees</span>
                            </router-link>
                        </li>
                        <li class="nav-item" v-if="role_id == 6">
                            <router-link :to="{ name: 'clinician.colleagues' }" class="nav-link">
                                <i class="icon-grid menu-icon"></i>
                                <span class="menu-title">Colleagues</span>
                            </router-link>
                        </li>

                        <li class="nav-item">
                            <router-link :to="{ name: 'formbuilder.index' }" class="nav-link" v-if="role_id == 2">
                                <i class="icon-grid menu-icon"></i>
                                <span class="menu-title">Form Builder</span>
                            </router-link>
                        </li>

                        <li class="nav-item">
                            <a v-if="accessToken" class="nav-link" type="button" @click.prevent="logout()">
                                <i class="icon-grid menu-icon"></i>
                                <span class="menu-title">Logout</span>
                            </a>
                        </li>
                    </ul>
                </nav>

                <div class="main-panel" id="main-panel" v-if="accessToken">
                    <div class="content-wrapper">
                        <router-view></router-view>
                    </div>

                    <footer class="footer">
                        <div class="d-sm-flex justify-content-center justify-content-sm-between">
                            <span class="text-muted text-center text-sm-left d-block d-sm-inline-block">Copyright © 2021.
                                Premium <a href="https://www.bootstrapdash.com/" target="_blank">Bootstrap admin
                                    template</a> from BootstrapDash.
                                All rights reserved.</span>
                            <span class="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">Hand-crafted & made
                                with <i class="ti-heart text-danger ml-1"></i></span>
                        </div>
                    </footer>
                </div>
            </div>
        </div>

        <router-view v-if="!accessToken"></router-view>


    </div>
</template>

<script>
import API from '../api'
import ClinicianSearchBar from './UI/SearchBar/ClinicianSearchBar.vue'
export default {
    components: {
        ClinicianSearchBar
    },
    name: "Index",
    data() {
        return {
            accessToken: null,
            route_name: null,
            role_id: null
        }
    },
    mounted() {
        this.getAccessToken()
        this.getUserData()
    },
    updated() {
        this.getAccessToken()
    },
    methods: {
        getAccessToken() {
            this.accessToken = localStorage.getItem('access_token')
        },
        logout() {
            API.post('/api/auth/logout')
                .then(res => {
                    localStorage.clear()
                    this.$router.push({ name: 'login' })
                })
        },
        getUserData() {
            this.role_id = localStorage.getItem('role_id')
        },
        sidebarToggle(event) {
            let burger = event.target
            let sidebar = document.getElementById('sidebar')
            let content = document.getElementById('main-panel')

            burger.classList.toggle('minimized')
            sidebar.classList.toggle('minimized')
            content.classList.toggle('expanded')
        }
    }
}

</script>

<style lang="scss" scoped>
.sidebar__toggler {
    width: 20px;
    height: 16px;
    position: relative;
    span {
        position: absolute;
        width: 20px;
        height: 2px;
        background-color: #6C7383;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        opacity: 0;
        transition: opacity .3s ease-in-out;
    }
    &::before {
        content: '';
        position: absolute;
        width: 20px;
        height: 2px;
        background-color: #6C7383;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(-45deg);
        transition-property: transform, top, left;
        transition-duration: .3s;
        transition-timing-function: ease-in-out;
    }
    &::after {
        content: '';
        position: absolute;
        width: 20px;
        height: 2px;
        background-color: #6C7383;
        bottom: 50%;
        left: 50%;
        transform: translate(-50%, 50%) rotate(45deg);
        transition-property: transform, bottom, left;
        transition-duration: .3s;
        transition-timing-function: ease-in-out;
    }
    &.minimized {
        span {
            opacity: 1;
        }
        &::before {
            top: 0;
            left: 0;
            transform: translate(0,0) rotate(0deg);
        }
        &::after {
            bottom: 0;
            left: 0;
            transform: translate(0,0) rotate(0deg);
        }
    }
}
.sidebar {
    transition-property: width, opacity;
    transition-duration: .3s;
    transition-timing-function: ease-in-out;
}
.sidebar.minimized {
    width: 0;
    opacity: 0;
}
.main-panel {
    transition: width .3s ease-in-out;
}
.main-panel.expanded {
    width: 100%;
}
</style>