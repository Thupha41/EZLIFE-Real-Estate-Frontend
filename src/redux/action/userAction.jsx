import axios from "../../setup/axios";

export const ADD_USER_REQUEST = "ADD_USER_REQUEST";
export const ADD_USER_SUCCESS = "ADD_USER_SUCCESS";
export const ADD_USER_FAILURE = "ADD_USER_FAILURE";
export const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";
export const SEARCH_USERS_REQUEST = "SEARCH_USERS_REQUEST";
export const SEARCH_USERS_SUCCESS = "SEARCH_USERS_SUCCESS";
export const SEARCH_USERS_FAILURE = "SEARCH_USERS_FAILURE";
export const DELETE_USERS_REQUEST = "DELETE_USERS_REQUEST";
export const DELETE_USERS_SUCCESS = "DELETE_USERS_SUCCESS";
export const DELETE_USERS_FAILURE = "DELETE_USERS_FAILURE";
export const UPDATE_USERS_REQUEST = "UPDATE_USERS_REQUEST";
export const UPDATE_USERS_SUCCESS = "UPDATE_USERS_SUCCESS";
export const UPDATE_USERS_FAILURE = "UPDATE_USERS_FAILURE";

export const fetchUsers = (page = 1, limit = 10) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_USERS_REQUEST });
    try {
      const response = await axios.get(
        `${
          import.meta.env.VITE_BACKEND_API
        }/users/read?page=${page}&limit=${limit}`
      );

      if (response && response.EC === 1) {
        dispatch({
          type: FETCH_USERS_SUCCESS,
          payload: {
            users: response.DT.users,
            totalRows: response.DT.totalRows,
            totalPages: response.DT.totalPages,
          },
        });
        return response.DT;
      } else {
        throw new Error(response.EM);
      }
    } catch (error) {
      dispatch({
        type: FETCH_USERS_FAILURE,
        payload: error.message,
      });
      throw error;
    }
  };
};

export const searchUsers = (searchQuery) => {
  return async (dispatch) => {
    dispatch({ type: SEARCH_USERS_REQUEST });
    try {
      const response = await axios.get(
        `${
          import.meta.env.VITE_BACKEND_API
        }/users/search?searchQuery=${searchQuery}`
      );

      if (response && response.EC === 1) {
        dispatch({
          type: SEARCH_USERS_SUCCESS,
          payload: response.DT,
        });
        return response.DT;
      } else {
        throw new Error(response.EM);
      }
    } catch (error) {
      dispatch({
        type: SEARCH_USERS_FAILURE,
        payload: error.message,
      });
      throw error;
    }
  };
};

export const createUser = (userData) => {
  return async (dispatch) => {
    dispatch({ type: ADD_USER_REQUEST });
    try {
      const payload = {
        email: userData.email,
        password: userData.password,
        first_name: userData.first_name,
        last_name: userData.last_name,
        phone: userData.phone,
        address: userData.address,
        roleId: userData.roleId,
        typeLogin: "local",
      };

      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_API}/users/create`,
        payload
      );

      if (response && response.EC === 1) {
        dispatch({
          type: ADD_USER_SUCCESS,
          payload: response.DT,
        });
        return response.DT;
      } else {
        throw new Error(response.EM);
      }
    } catch (error) {
      dispatch({
        type: ADD_USER_FAILURE,
        payload: error.message,
      });
      throw error;
    }
  };
};

export const deleteUsers = (userIds) => {
  return async (dispatch) => {
    dispatch({ type: DELETE_USERS_REQUEST });
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_BACKEND_API}/users/bulk-delete`,
        {
          data: { ids: userIds },
        }
      );

      if (response && response.EC === 1) {
        dispatch({
          type: DELETE_USERS_SUCCESS,
          payload: userIds,
        });
        return response.DT;
      } else {
        throw new Error(response.EM);
      }
    } catch (error) {
      dispatch({
        type: DELETE_USERS_FAILURE,
        payload: error.message,
      });
      throw error;
    }
  };
};

export const updateUsers = (users) => {
  return async (dispatch) => {
    dispatch({ type: UPDATE_USERS_REQUEST });
    try {
      const formattedUsers = users.map((user) => ({
        id: user.id,
        first_name: user.first_name,
        last_name: user.last_name,
        phone: user.phone || "",
        password: user.password || "",
        address: user.address || "",
        sex: user.sex || "",
        roleId: user.roleId || "",
      }));

      const response = await axios.put(
        `${import.meta.env.VITE_BACKEND_API}/users/bulk-update`,
        {
          users: formattedUsers,
        }
      );

      if (response && response.EC === 1) {
        dispatch({
          type: UPDATE_USERS_SUCCESS,
          payload: formattedUsers,
        });
        return response.EM || "Update successful";
      } else {
        throw new Error(response.EM || "Update failed");
      }
    } catch (error) {
      dispatch({
        type: UPDATE_USERS_FAILURE,
        payload: error.message,
      });
      throw error;
    }
  };
};
