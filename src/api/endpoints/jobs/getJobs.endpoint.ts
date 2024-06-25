import api, { IAPIError } from "../api";

export interface IGetJob {
  id_job: number;
  title: string;
  description: string;
  company_id: number;
  job_category_id: number;
  wage: number;
  modality: string;
  contract: string;
}

const getJobs = async (): Promise<IGetJob[] | IAPIError> => {
  const response = await api.get("/jobs/browse").catch((err) => {
    return err.response;
  });

  return response.data;
};

export default getJobs;
