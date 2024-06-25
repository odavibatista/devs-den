import api, { IAPIError } from "../api";

export interface IGetCategory {
  id_category: number;
  name: string;
  image_url: string;
}

const getCategory = async (
  token: string,
  id: number,
): Promise<IGetCategory | IAPIError> => {
  const response = await api
    .get(`/job-category/${id}/find`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .catch((err) => {
      return err.response;
    });

  return response.data;
};

export default getCategory;
