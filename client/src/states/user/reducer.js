import { ActionTypes } from "./action";

const usersReducer = (user = [], action) => {
  switch (action.type) {
    case ActionTypes.RECEIVE_DATA_USER:
      return action.payload;
    case ActionTypes.SET_DATA_USER:
      return [...user, action.payload];
    case ActionTypes.DELETE_USERS:
      return user.filter(({ id }) => id !== action.payload);
    default:
      return user;
  }
};

export default usersReducer;
