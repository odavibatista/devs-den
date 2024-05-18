import api, { IAPIError } from "../api";
import IUserResponse from "@/server/utils/user.response";

export interface ICandidateRegister {
    name: string
    gender: 'male' | 'female'
    birth_date: string
    credentials: {
        email: string
        password: string
        role: 'candidate'
    }
    address: {
        uf: number
        city: string
        cep: string
        street: string
        number: string
        complement?: string          
    }
}

export interface ICandidateRegisterResponse extends IUserResponse {}

const candidateRegister = async(data: ICandidateRegister): Promise<ICandidateRegisterResponse | IAPIError> => {
    
    const response = await api.post("/candidate/register", data).catch((err)    => {
        return err.response
    })

    return response.data
} 

export default candidateRegister 
