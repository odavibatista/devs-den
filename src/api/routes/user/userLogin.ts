/* Aqui, importamos a API criada anteriormente */
import api, { IAPIError } from "../api";

/* Passamos os atributos do login, por hora e provavelmente somente e-mail e senha, para que seja tipado para a função*/
interface userLoginAttributes   {
    email: string
    inserted_password: string
}

export interface ILoginResponse {
    user: {
        id: number
        name: string
        role: string
    }
    token: string
}

/* Aqui, declaramos a função userLogin() como o service que irá chamar no endpoint, passando um parâmetro do tipo criado acima */
const userLogin = async (data: userLoginAttributes): Promise<ILoginResponse  | IAPIError  > => {
    
    /* Chamamos o endpoint '/user/login' enviando os dados do tipo declarado */
    const response = await api.post("/user/login", data).catch((err)    =>  {
        /* Caso haja um erro, retornamos ele */
        return err.response
    })

    /* Retornamos a resposta contendo os dados se tudo der certo */
    return response.data
}

/* Exportamos a função para ser utilizada em outros arquivos */
export default userLogin