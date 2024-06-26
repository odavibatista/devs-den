import api, { IAPIError } from "../api";
import { IGetCategory } from "./getCategory.endpoint";

const getCategories = async (): Promise<IGetCategory[] | IAPIError> => {
  const response = await api.get("/job-category/browse").catch((err) => {
    return err.response;
  });

  return response.data;
};

export default getCategories;
