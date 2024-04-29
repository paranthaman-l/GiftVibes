import axios from 'axios'
const fileUploadApi = axios.create({
    baseURL: import.meta.env.VITE_GOOGLE_SCRIPT
})

export { fileUploadApi };