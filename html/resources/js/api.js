import axios from "axios"
import router from "./routes"

const api = axios.create()
// start request
api.interceptors.request.use(config => {
    // console.log(config)
    if (localStorage.getItem('access_token')) {
        config.headers.Authorization = `Bearer ${localStorage.getItem('access_token')}`
    }
    return config
}, error => {
})
// end request

//start response
api.interceptors.response.use(response => {
    console.log('Success')
    if (localStorage.getItem('access_token')) {
        response.headers.Authorization = `Bearer ${localStorage.getItem('access_token')}`
    }
    return response
}, error => {
    //console.log(error.response)
    if (error.response.data.message == 'Token has expired') {
        return axios.post('api/auth/refresh', {}, {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('access_token')}`
            }
        }).then(res => {
            console.log(res)
            localStorage.setItem('access_token', res.data.access_token)

            error.config.headers.authorization = `Bearer ${res.data.access_token}`
            return api.request(error.config)
        })
    }
    if (error.response.status === 401) {
        router.push({ name: 'login' })
    }
    return Promise.reject(error)
})
// end response

export default api