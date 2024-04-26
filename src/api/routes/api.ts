import axios from "axios";

/* Aqui, chamamos a url que inserimos no arquivo '.env' para ser utilizado pelo Axios em todas as nossas requisições */
const apiURL: string = String(process.env.API_URL?.toString())

/* Aqui, criamos a API passando como URL o dado obtido acima, para que todas as requisições sejam nesse endereço */
const api = axios.create({
    baseURL: apiURL
})

/* Exportamos para ela ser a base de todas as nossas requisições */
export default api