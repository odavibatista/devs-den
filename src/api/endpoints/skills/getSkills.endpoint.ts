import api, { IAPIError } from "../api";
import { IGetSkill } from "./getSingleSkill.endpoint";

const getSkills = async (): Promise<IGetSkill | IAPIError> => {
  const response = await api.get("/skills").catch((err) => {
    return err.response;
  });

  return response.data;
};

export default getSkills;
