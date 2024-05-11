import api, { IAPIError } from "../api";
import { IGetJob } from "./getSingleJob";

const getJobs = async(): Promise<IGetJob[] | IAPIError | any> => {
    
    const response = await api.get('/jobs/browse').catch((err)    => {
        return err.response
    })

    return response.data
} 

export default getJobs