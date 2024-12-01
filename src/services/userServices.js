import axios from "../setup/axios";

export const fetchAllRoles = async () => {
  return await axios.get(`${import.meta.env.VITE_BACKEND_API}/roles/read`);
};
