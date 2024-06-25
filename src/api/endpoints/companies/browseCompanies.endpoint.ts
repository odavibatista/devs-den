import api, { IAPIError } from "../api";

export interface IGetCompany {
  id: number;
  name: string;
  email: string;
}

const browseCompanies = async (): Promise<IGetCompany[] | IAPIError> => {
  const response = await api.get(`/companies/browse`).catch((err) => {
    return err.response;
  });

  return response.data;
};

export default browseCompanies;
