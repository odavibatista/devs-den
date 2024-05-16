import api, { IAPIError } from "../api";

const userDelete = async(token: string, id: number): Promise<{} | IAPIError> => {
    
    const response = await api.delete(`/user/${id}/delete`,  {
        headers:    {
            Authorization: `Bearer ${token}`
        }
    }).catch((err)    => {
        return err.response
    })

    return response.data
} 

export default userDelete