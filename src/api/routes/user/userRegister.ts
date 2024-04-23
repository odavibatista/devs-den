import api from "../api";

interface userRegisterAttributes {
    name: string
    gender: "male" | "female"
    birth_date: Date
    credentials:    {
        email: string
        password: string
        role: "candidate"
    }
    address:    {
        uf: number
        city: string
        cep: string
        street: string
        number: string
        complement: string
    }

}

const userRegister = async (data: userRegisterAttributes) => {

    const response = await api.post("/user/register", data).catch((err) => {
        return err.response
    })
    
    return response.data
}

export default userRegister