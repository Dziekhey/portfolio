import { apiClient } from "./config";

export const apiGetAllBlogs = async () => {
    return apiClient.get("/blogs");
};

export const apiDeleteAllBlogs = async () => {
    return apiClient.delete("/blogs");
};

export const apiAddBlogs = async (newBlog) => {
    return apiClient.post("/blogs", newBlog);
};

export const apiGetBlogs = async (id) => {
    return apiClient.get(`/blogs/${id}`);
};
  
export const apiUpdateBlogs = async (id, update) => {
    return apiClient.patch(`/blogs/${id}`, update);
};
  
export const apiDeleteBlogs = async (id) => {
    return apiClient.delete(`/blogs/${id}`);
};