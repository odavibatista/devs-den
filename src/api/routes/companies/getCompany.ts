import api from "../api";

const getCompany = async(id: number) => {
    
    const response = await api.get(`/company/${id}`).catch((err)  => {
        return err.response
    })

    return response.data
}

export default getCompany


