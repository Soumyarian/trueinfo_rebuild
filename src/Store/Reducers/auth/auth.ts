import { LOGIN_CONSTANTS } from "./../../constants";
const initalState = {
  isLoading: false,
  error: null,
  token: null,
  isAuthSuccess: false,
};

const authReducer = (state = initalState, action) => {
  switch (action.type) {
    case LOGIN_CONSTANTS.LOGIN_REQUEST:
      return {
        ...state,
      };
    case LOGIN_CONSTANTS.LOGIN_SUCCESS:
      return {
        ...state,
        isAuthSuccess: true,
      };
    case LOGIN_CONSTANTS.LOGIN_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default authReducer;
