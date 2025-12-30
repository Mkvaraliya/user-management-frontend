import api from "./axios";

export const fetchUsers = (params) =>
  api.get("/api/admin/users", { params });

export const toggleUserStatus = (userId) =>
  api.put(`/api/admin/users/${userId}/status`);

export const deleteUser = (userId) =>
  api.delete(`/api/admin/users/${userId}`);


