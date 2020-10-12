import * as Types  from "../Types";
  
  // Initial state
  const initialState = {
    isLoggedIn: false,
    authUserData: {},
    authTokenData: {},
    loginMessage: "",
    registerMessage: "",
    isLoading: false
  };
  
  const AuthReducer = (state = initialState, action) => {
    const newState = { ...state };
  
    switch (action.type) {
      case Types.AUTH_LOGIN_CHECK:

        // Store it to local storage
        localStorage.setItem('userData', JSON.stringify(action.payload.userData));
        localStorage.setItem('tokenData', action.payload.tokenData);

        return {
          ...state,
          isLoggedIn: action.payload.status,
          authUserData: action.payload.userData,
          authTokenData: action.payload.tokenData,
          loginMessage: action.payload.message,
          isLoading: action.payload.isLoading
        };


      case Types.AUTH_REGISTER_SUBMIT:
        // Store it to local storage
        localStorage.setItem('userData', JSON.stringify(action.payload.userData));
        localStorage.setItem('tokenData', action.payload.tokenData);

        return {
          ...state,
          isLoggedIn: action.payload.status,
          authUserData: action.payload.userData,
          authTokenData: action.payload.tokenData,
          registerMessage: action.payload.message,
          isLoading: action.payload.isLoading
        };

      case Types.GET_AUTH_DATA:
        
        return {
          ...state,
          isLoggedIn: action.payload.status,
          authUserData: action.payload.userData,
          authTokenData: action.payload.tokenData,
        };
  
      case Types.AUTH_GET_LOGIN_DATA:
        const authTokenData =
          JSON.parse(localStorage.getItem("tokenData")) || "undefined";
        const authUserData = localStorage.getItem("userData");
  
        let isLogged = state.isLoggedIn;
        if (typeof authTokenData != "undefined") {
          isLogged = authTokenData.success;
        }
  
        return {
          ...state,
          isLoggedIn: isLogged,
          authUserData: authUserData,
          authTokenData: authTokenData
        };
  
      case Types.AUTH_POST_LOGOUT:
        return {
          ...state,
          isLoggedIn: false,
          authTokenData: {},
          authUserData: {},
          loginMessage: "",
          isLoading: false
        };
  
      default:
        break;
    }
    return newState;
  };
  
  export default AuthReducer;
  