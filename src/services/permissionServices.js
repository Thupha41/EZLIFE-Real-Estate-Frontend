import axios from "../setup/axios";

export const fetchAllPermissions = async () => {
  return await axios.get(
    `${import.meta.env.VITE_BACKEND_API}/permissions/read`
  );
};

export const fetchPermissionByRole = async (roleId) => {
  return await axios.get(
    `${import.meta.env.VITE_BACKEND_API}/roles/${roleId}/permissions`
  );
};

export const assignPermissionsToRole = async (data) => {
  return axios.post(
    `${import.meta.env.VITE_BACKEND_API}/permissions/assign-to-role`,
    { data }
  );
};
