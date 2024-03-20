import { apiClient } from "./config";

export const apiGetAllSkills = async () => {
    return apiClient.get("/skills");
};

export const apiDeleteAllSkills = async () => {
    return apiClient.delete("/skills");
};

export const apiAddSkill = async (newSkill) => {
    return apiClient.post("/skills", newSkill);
};

export const apiGetSkill = async (id) => {
    return apiClient.get(`/skills/${id}`);
};
  
export const apiUpdateSkill = async (id, updates) => {
    return apiClient.patch(`/skills/${id}`, updates);
};
  
export const apiDeleteSkill = async (id) => {
    return apiClient.delete(`/skills/${id}`);
};