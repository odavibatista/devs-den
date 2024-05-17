import api, { IAPIError } from "../api";
import { IGetCategory } from "./getCategory";

const getCategories = async(): Promise<IGetCategory[] | any> => {

    
    const response = await api.get('/job-category/browse').catch((err)    => {
        return err.response
    })

    return response.data
} 

export default getCategories