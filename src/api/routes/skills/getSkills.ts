import api from "../api";

const getSkills = async() => {
    
    const response = await api.get('/skills').catch((err)    => {
        return err.response
    })

    return response.data
} 

export default getSkills