import api, { IAPIError, IAPIResponse } from "../api";

const removeJob = async (
  token: string,
  jobId: number,
): Promise<IAPIResponse | IAPIError> => {
  const response = await api
    .delete(`job/${jobId}/remove`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .catch((err) => {
      return err.response;
    });

  return response.data;
};

export default removeJob;
