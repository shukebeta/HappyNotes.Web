import { defineNuxtPlugin } from '#app'
import axios, {type AxiosInstance} from 'axios'

export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig()

    const api:AxiosInstance = axios.create({
        baseURL: config.public.apiBaseUrl
    })

    const apiService: ApiService = {
        // User related API calls
        user: {
            getProfile: () => api.get('/user/profile'),
        },
        // note service
        note: {
            latest: (pageSize, pageNumber) => api.get(`/notes/latest/${pageSize}/${pageNumber}`),
            getById: (id: number) => api.get(`/note/get/${id}`),
        },
    }

    // Error Interceptor
    api.interceptors.response.use(
        response => response.data,
        error => {
            // Handle errors (e.g., show notifications, redirect on 401, etc.)
            console.error('API Error:', error)
            return Promise.reject(error)
        }
    )

    return {
        provide: {
            api: apiService
        }
    }
})
