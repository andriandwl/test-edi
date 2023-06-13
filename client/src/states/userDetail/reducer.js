import { ActionType } from "./action";

const userDetailReducer = (userDetail = {}, action) => {
  switch (action.type) {
    case ActionType.RECEIVE_USER_DETAIL:
      return action.payload;
    default:
      return userDetail;
  }
};

export default userDetailReducer;
