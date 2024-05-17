import IUserResponse from "@/server/utils/user.response";
import api, { IAPIError } from "../api";
import { IGetUser } from "../user/getUser.endpoint";

export interface ICompanyRegister {
    company_name: string;
    cnpj: string;
        credentials: {
            email: string;
            password: string;
            role: "company";
        }
    
        address: {
            uf: number
            city: string
            cep: string
            street: string
            number: string
            complement: string
       }
}

export interface ICompanyRegisterResponse extends IUserResponse {}

const companyRegister = async(data: ICompanyRegister): Promise<ICompanyRegisterResponse | IAPIError> => {
    
    const response = await api.post("/company/register").catch((err)    => {
        return err.response
    })

    return response.data
} 

export default companyRegister