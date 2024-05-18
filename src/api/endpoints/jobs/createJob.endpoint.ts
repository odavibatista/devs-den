import { headers } from "next/headers";
import api, { IAPIError } from "../api";
import { IGetJob } from "./getJobs.endpoint";

export interface ICreateJob {
    title: string
    description: string
    job_category_id: number
    wage: number
    modality: 'remote' | 'presential' | 'hybrid'
    contract: 'clt' | 'pj' | 'intern'
}

const createJob = async(token: string, data: ICreateJob): Promise<IGetJob | IAPIError> => {
    
    const response = await api.post(`/job/create`, data, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    ).catch((err)    => {
        return err.response
    })

    return response.data
} 

export default createJob