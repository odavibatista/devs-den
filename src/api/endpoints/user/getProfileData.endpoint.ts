import api, { IAPIError } from "../api";

export interface IGetCandidateProfileData {
    id: number;
    name: string;
    email: string;
    role: "candidate";
    birth_date: string;
}

export interface IGetCompanyProfileData {
    id: number;
    company_name: string;
    email: string;
    role: "company";
    cnpj: string;
}

const getProfileData = async (
    token: string,
): Promise<IGetCandidateProfileData | IGetCompanyProfileData | IAPIError> => {
    const response = await api
        .get(`/user/profile`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .catch((err) => {
            return err.response;
        });

    return response.data;
};

export default getProfileData;