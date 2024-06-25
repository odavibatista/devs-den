import api, { IAPIError } from "../api";

const applyToJob = async (
  token: string,
  jobId: number,
): Promise<any | IAPIError> => {
  const response = await api
    .post(`/job/${jobId}/apply`, null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .catch((err) => {
      return err.response;
    });

  return response.data;
};

export default applyToJob;
