import { apiClient } from "./config";

export const apiGetAllExperiences = async () => {
    return apiClient.get("/experieces");
};

export const apiDeleteAllExperieces = async () => {
    return apiClient.delete("/experieces");
};

export const apiAddExperience = async (newExperience) => {
    return apiClient.post("/experieces", newExperience);
};

export const apiGetExperience = async (id) => {
    return apiClient.get(`/experieces/${id}`);
};
  
export const apiUpdateExperience = async (id, update) => {
    return apiClient.patch(`/experieces/${id}`, update);
};
  
export const apiDeleteExperience = async (id) => {
    return apiClient.delete(`/experieces/${id}`);
};