/* Aqui, importamos a API criada anteriormente */
import IUserResponse from "@/server/utils/user.response";
import api, { IAPIError } from "../api";

/* Passamos os atributos do registro de usuário CANDIDATO, para que seja chamado no endpoint devido da API. São vários os dados de cadastro e separamos eles em objetos menores*/
interface IUserRegisterAttributes {
  name: string;
  gender: "male" | "female";
  birth_date: Date;
  credentials: {
    email: string;
    password: string;
    role: "candidate";
  };
  address: {
    uf: number;
    city: string;
    cep: string;
    street: string;
    number: string;
    complement: string;
  };
}
export interface ICandidateRegister extends IUserResponse {}

/* Aqui, declaramos a função userRegister() como o service que irá chamar no endpoint, passando um parâmetro do tipo criado acima */
const userRegister = async (
  data: IUserRegisterAttributes,
): Promise<ICandidateRegister | IAPIError> => {
  /* Chamamos o endpoint '/user/register' enviando os dados do tipo declarado */
  const response = await api.post("/user/register", data).catch((err) => {
    /* Caso haja um erro, retornamos ele */
    return err.response;
  });

  /* Retornamos a resposta contendo os dados se tudo der certo */
  return response.data;
};

/* Exportamos a função para ser utilizada em seu devido lugar */
export default userRegister;
