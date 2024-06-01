import api, { IAPIError } from "../api";

export interface IApplication   {
    id_user: number
    name: string
    active: boolean
}

export interface IGetJobStatusResponse {
    id_job: number
    title: string
    description: string
    wage: number
    modality: 'remote' | 'hybrid' | 'presential'
    contract: 'intern' | 'pj' | 'clt'
    job_category:   {
        id_category: 1
        name: string
        image_url: string
    }
    applications: IApplication[]
}

const getJobStatus = async (token: string, jobId: number): Promise<IGetJobStatusResponse | boolean | IAPIError> => {

    const response = await api.get(`/job/${jobId}/status`,  {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    ).catch((err)    => {
        return err.response
    })

    return response.data
}

export default getJobStatus