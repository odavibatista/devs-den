import api, { IAPIError } from "../api";

export interface IGetUser {
    id: number;
    name: string;
    email: string;
    role: 'candidate' | 'company';
}

const getUser = async(token: string, id: number): Promise<IGetUser | IAPIError> => {
    
    const response = await api.get(`/user/${id}/search`,  {
        headers:    {
            Authorization: `Bearer ${token}`
        }}
    ).catch((err)  => {
        return err.response
    })

    return response.data
}

export default getUser
