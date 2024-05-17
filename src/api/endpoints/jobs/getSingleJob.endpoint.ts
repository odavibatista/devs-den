import api, { IAPIError } from "../api";

export interface IGetJob {
    job:    {
        id_job: number;
        title: string;
        description: string;
        wage: number;
        modality: string;
        contract: string
        
        job_category:   {
            id_category: number;
            name: string;
            image_url: string
        }
    };
    
    company:    {
        id_company: number;
        name: string
    }
}

const getSingleJob = async(id: number): Promise<IGetJob | IAPIError> => {
    
    const response = await api.get(`job/${id}/find`).catch((err)    => {
        return err.response
    })

    return response.data
} 

export default getSingleJob