import api, { IAPIError } from "../api";
export interface IGetUF {
  id_uf: number;
  name: string;
  acronym: string;
}

const getUfs = async (): Promise<IGetUF[] | IAPIError> => {
  const response = await api.get("/ufs").catch((err) => {
    return err.response;
  });

  return response.data;
};

export default getUfs;
