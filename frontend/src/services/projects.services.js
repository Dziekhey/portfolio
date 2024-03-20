import { apiClient } from "./config";

export const apiGetAllProjects = async () => {
    return apiClient.get("/projects");
};

export const apiDeleteAllProjects = async () => {
    return apiClient.delete("/projects");
};

export const apiAddProjects = async (newProject) => {
    return apiClient.post("/projects", newProject);
};

export const apiGetProject = async (id) => {
    return apiClient.get(`/projects/${id}`);
};

export const apiUpdateProject = async (id, update) => {
    return apiClient.patch(`/projects/${id}`, update)
};

export const apiDeletProject = async (id) => {
    return apiClient.delete(`/projects/${id}`);
};