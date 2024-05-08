import api from "../api";

const getUser = async(id: number) => {
    
    const response = await api.get(`/user/${id}`).catch((err)  => {
        return err.response
    })

    return response.data
}

export default getUser
