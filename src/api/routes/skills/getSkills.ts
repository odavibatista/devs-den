import { ApiError } from "next/dist/server/api-utils";
import api from "../api";
import { IGetSkill } from "./getSingleSkill";

const getSkills = async(): Promise<IGetSkill | ApiError> => {
    
    const response = await api.get('/skills').catch((err)    => {
        return err.response
    })

    return response.data
} 

export default getSkills