import { apiClient } from "./config";

export const apiGetAllAchievements = async () => {
    return apiClient.get("/achievements");
};

export const apiDeleteAllAchievements = async () => {
    return apiClient.delete("/ahievements");
};

export const apiAddAchievement = async (newAchievement) => {
    return apiClient.post("/achievements", newAchievement);
};

export const apiGetAchievment = async (id) => {
    return apiClient.get(`/achievements/${id}`);
};

export const apiUpdateAchievement = async (id, update) => {
    return apiClient.patch(`/achievements/${id}`, update);
};

export const apiDeletAchievement = async (id) => {
    return apiClient.delete(`/achievements/${id}`);
};