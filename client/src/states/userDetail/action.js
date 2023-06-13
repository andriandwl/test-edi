import * as api from "../../utils/api";
import { hideLoading, showLoading } from "react-redux-loading-bar";

const ActionType = {
  RECEIVE_USER_DETAIL: "RECEIVE_USER_DETAIL",
};

const getUserById = (id) => async (dispatch) => {
  dispatch(showLoading());
  try {
    const data = await api.getUsersById(id);
    dispatch({
      type: ActionType.RECEIVE_USER_DETAIL,
      payload: data.data,
    });
  } catch (error) {
    alert(error.message);
  }
  dispatch(hideLoading());
};

export { ActionType, getUserById };
