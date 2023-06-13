import * as api from "../../utils/api";

const ActionTypes = {
  SET_DATA_USER: "SET_DATA_USER",
  RECEIVE_DATA_USER: "RECEIVE_DATA_USER",
  DELETE_USERS: "DELETE_USERS",
};

const getUsers = () => async (dispatch) => {
  try {
    const { data } = await api.fetchUsers();
    dispatch({
      type: ActionTypes.RECEIVE_DATA_USER,
      payload: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

const addUser = (user) => async (dispatch) => {
  try {
    const { data } = await api.addUsers(user);
    dispatch({
      type: ActionTypes.SET_DATA_USER,
      payload: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

const deleteUser = (id) => async (dispatch) => {
  try {
    const { data } = await api.deleteUsers(id);

    dispatch({
      type: ActionTypes.DELETE_USERS,
      payload: data,
    });
  } catch (error) {
    alert(error.message);
  }
};

export { ActionTypes, getUsers, addUser, deleteUser };
