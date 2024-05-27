import api, { IAPIError } from "../api";

const applyToJob = async (token: string, jobId: number): Promise<void | IAPIError> => {
    
    const response = await api.post(`/job/${jobId}/apply`,  {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    
    ).catch((err)    => {
        return err.response
    })

    return response.data
}

export default applyToJob