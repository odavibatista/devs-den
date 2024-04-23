import api from "../api";

interface userLoginAttributes   {
    email: string
    password: string
}

const userLogin = async (data: userLoginAttributes) => {
    
    const response = await api.post("/user/login", data).catch((err)    =>  {
        return err.response
    })

    return response.data
}

export default userLogin