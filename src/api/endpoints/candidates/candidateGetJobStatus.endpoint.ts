import api, { IAPIError } from "../api";

export interface ICandidateJobStatus {
  has_applied: boolean;
}

const candidateGetJobStatus = async (
  token: string,
  jobId: number,
): Promise<ICandidateJobStatus | IAPIError> => {
  const response = await api
    .get(`/job/${jobId}/status`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .catch((err) => {
      return err.response;
    });

  return response.data;
};

export default candidateGetJobStatus;
