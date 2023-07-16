
require('./bootstrap');

import Vue from 'vue'
import Vuetify from 'vuetify'
import DaySpanVuetify from 'dayspan-vuetify'
import Index from './components/Index'
import router from './routes'
import API from './api'

import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'dayspan-vuetify/dist/lib/dayspan-vuetify.min.css'

// Import Noty
import Notification from './Helpers/Notification'
window.Notification = Notification

// Calendar
Vue.config.productionTip = false
Vue.use(Vuetify);
Vue.use(DaySpanVuetify, {
    data: {
      xs: 'MMM'
    },
    methods: {
      getDefaultEventColor: () => '#1976d2'
    }
  });


const app = new Vue({
  vuetify: new Vuetify(),
    el: '#app',
    render: h => h(Index),
    components: {
        Index
    },
    router,
    API
})
