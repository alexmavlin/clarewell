<template>
    <div class="input-group header__search">
        <div    class="input-group-prepend hover-cursor" 
                id="navbar-search-icon"
                @click="searchToggle($event)">
            <span class="input-group-text" id="search">
                <i class="icon-search"></i>
            </span>
        </div>
        <div class="header__search--window" id="header__search--window">
            <!-- Search window Header -->
            <div class="header__search--tabs__header">
                <div    class="header__search--tab__link active" 
                        data-link="patients-search-tab"
                        @click="toggleSearchTabs($event)">
                    <i class="mdi mdi-account-convert"></i>
                    <span>Patients</span>
                </div>
                <div    class="header__search--tab__link" 
                        data-link="appointments-search-tab"
                        @click="toggleSearchTabs($event)">
                    <i class="mdi mdi-file-document-box"></i>
                    <span>Appointments</span>
                </div>
                <div    class="header__search--tab__link" 
                        data-link="colleagues-search-tab"
                        @click="toggleSearchTabs($event)">
                    <i class="mdi mdi-account-card-details"></i>
                    <span>
                        Colleagues
                    </span>
                </div>
            </div>
            <!-- // Search window Header -->

            <!-- Search window Body -->
            <div class="header__search--tabs__body">
                <div class="header__search--tab active" id="patients-search-tab">
                    <form class="header__search--form" @submit.prevent="patientSearchFunction()">
                        <div class="form-group">
                            <div class="input-group">
                                <input  type="text" 
                                        class="form-control" 
                                        placeholder="Search for patients" 
                                        aria-label="Recipient's username"
                                        v-model="patientSearch.data">
                                <div class="input-group-append">
                                    <button class="btn btn-sm btn-primary" type="button">Search</button>
                                </div>
                            </div>
                            <p class="text-secondary">* Utilize our efficient search form to find patients effortlessly by their name, ID, address, or phone number.</p>
                        </div>
                    </form>
                </div>
                <div class="header__search--tab" id="appointments-search-tab">
                    <form class="header__search--form" @submit.prevent="appointmentSearchFunction()">
                        <div class="form-group">
                            <div class="input-group">
                                <input  type="text" 
                                        class="form-control" 
                                        placeholder="Search for appointments" 
                                        aria-label="Recipient's username"
                                        v-model="appointmentSearch.data">
                                <div class="input-group-append">
                                    <button class="btn btn-sm btn-primary" type="button">Search</button>
                                </div>
                            </div>
                            <p class="text-secondary">* Employ our user-friendly form to effortlessly filter appointments by date and name, ensuring a smooth and organized scheduling process.</p>
                        </div>
                    </form>
                </div>
                <div class="header__search--tab" id="colleagues-search-tab">
                    <form class="header__search--form" @submit.prevent="colleaguesSearchFunction()">
                        <div class="form-group">
                            <div class="input-group">
                                <input  type="text" 
                                        class="form-control" 
                                        placeholder="Search for colleagues" 
                                        aria-label="Recipient's username"
                                        v-model="colleaguesSearch.data">
                                <div class="input-group-append">
                                    <button class="btn btn-sm btn-primary" type="button">Search</button>
                                </div>
                            </div>
                            <p class="text-secondary">* Effortlessly find colleagues by name or clinic.</p>
                        </div>
                    </form>
                </div>
            </div>
            <!-- // Search window Body -->
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            patientSearch: {
                data: ''
            },
            appointmentSearch: {
                data: ''
            },
            colleaguesSearch: {
                data: ''
            }
        }
    },
    methods: {
        searchToggle(event) {
            let icon = event.target
            let searchWindow = document.getElementById('header__search--window')

            icon.classList.toggle('active')
            searchWindow.classList.toggle('active')
        },
        toggleSearchTabs(event) {
            let tabLinks = document.querySelectorAll('.header__search--tab__link')
            let tabs = document.querySelectorAll('.header__search--tab')
            let tabLink = event.target.parentElement.getAttribute('data-link')

            tabLinks.forEach((tabLink) => {
                if(tabLink.classList.contains('active')) {
                    tabLink.classList.remove('active')
                }
            })
            tabs.forEach((tab) => {
                if(tab.classList.contains('active')) {
                    tab.classList.remove('active')
                }
            })
            event.target.parentElement.classList.add('active')
            document.getElementById(tabLink).classList.add('active')
        },
        patientSearchFunction() {
            this.$router.push({name: 'clinician.patients', query: {searchBarData: this.patientSearch.data}})
            document.getElementById('header__search--window').classList.remove('active')
        },
        appointmentSearchFunction() {
            this.$router.push({name: 'clinician.appointments', query: {searchBarData: this.appointmentSearch.data}})
            document.getElementById('header__search--window').classList.remove('active')
        },
        colleaguesSearchFunction() {
            this.$router.push({name: 'clinician.colleagues', query: {searchBarData: this.colleaguesSearch.data}})
            document.getElementById('header__search--window').classList.remove('active')
        }
    }
}
</script>

<style lang="scss" scoped>
.header__search {
    position: relative;
    &--window {
        position: absolute;
        padding: 15px 10px;
        background: #fff;
        border-radius: 6px;
        border: 1px solid #6C7383;
        box-shadow: 0px 5px 21px -5px #CDD1E1;
        top: 60px;
        left: 0;
        opacity: 0;
        pointer-events: none;
        transition-property: opacity;
        transition-duration: .3s;
        transition-timing-function: ease-in-out;
        &.active {
            opacity: 1;
            pointer-events: all;
        }
    }
    &--tabs__header {
        display: flex;
        div + div {
            margin-left: 20px;
        }
    }
    &--tab__link {
        display: flex;
        cursor: pointer;
        i {
            margin-right: 7px;
            transition: color .3s ease-in-out;
        }
        span {
            font-weight: 600;
            transition: color .3s ease-in-out;
        }
        &.active {
            i,
            span {
                color: #4B49AC;
            }
        }
    }
    &--tab {
        display: none;
        &.active {
            display: block;
        }
    }
    &--form {
        input {
            border: 1px solid #CED4DA !important;
            padding-left: 10px !important;
        }
        button {
            color: #fff !important;
        }
        p {
            padding-left: 24px;
        }
    }
}
</style>