import axios from "axios";
export interface IAPIError {
    message: string
    status: number
}

export interface IAPIResponse {
    message: string
    status: number
    data?: any
}

/* Aqui, chamamos a url que inserimos no arquivo '.env' para ser utilizado pelo Axios em todas as nossas requisições */
const NEXT_PUBLIC_API = process.env.NEXT_PUBLIC_API

/* Aqui, criamos a API passando como URL o dado obtido acima, para que todas as requisições sejam nesse endereço */
const api = axios.create({
    baseURL: NEXT_PUBLIC_API
})

/* Exportamos para ela ser a base de todas as nossas requisições */
export default api