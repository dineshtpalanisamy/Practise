const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_REQUEST": {
      return { ...state, loading: true, error: null };
    }
    case "LOGIN_SUCCESS": {
      return {
        ...state,
        user: action.payload,
        loading: false,
        error: null,
        isAuthenticated: true,
      };
    }
    case "LOGIN_FAIL": {
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    }
    case "LOGOUT": {
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default AuthReducer;
