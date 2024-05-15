import api, { IAPIError } from "../api";

export interface IHomeData {
    user: {
        id: number;
        name: string;
        role: 'candidate' | 'company';
    }
}

const getHomeData = async(token: string): Promise<IHomeData | IAPIError> => {
    
    const response = await api.get(`/user/home-data`,  {
        headers:    {
            Authorization: `Bearer ${token}`
        }}
    ).catch((err)  => {
        return err.response
    })

    return response.data
}

export default getHomeData
