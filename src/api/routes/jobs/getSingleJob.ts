import api, { IAPIError } from "../api";

export interface IGetJob {
    id: number;
    title: string;
    description: string;
    company_id: number;
    job_category_id: number;
    wage: number;
    modality: string;
}

const getSingleJob = async(id: number): Promise<IGetJob | IAPIError> => {
    
    const response = await api.get(`job/${id}/find`).catch((err)    => {
        return err.response
    })

    return response.data
} 

export default getSingleJob