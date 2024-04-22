import axios from "axios";

const apiURL: string = String(process.env.API_URL?.toString())

const api = axios.create({
    baseURL: apiURL
})

export default api