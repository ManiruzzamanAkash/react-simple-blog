import * as Types from '../Types';
import axios from 'axios';

export const loginSubmitAction = (postData) => async (dispatch) => {
    let data = {
        status: false,
        message: "",
        isLoading: true,
        tokenData: null,
        userData: null
    };
    dispatch({ type: Types.AUTH_LOGIN_CHECK, payload: data });

    await axios.post(`http://laravel07-starter.herokuapp.com/api/v1/sign-in`, postData)
    .then(async (res) => {
        const response = res.data;
        data.message = response.response.message;
        if(response.meta.status === 200){
            data.status = true;
            data.tokenData = response.response.token;
            // Fetch and get the user information and set to localstorage
            data.userData = await getProfileInformation(response.response.token);
        }else{
            data.status = false;
        }
    })
    .catch((err) => {
        data.message = err.data;
    });

    data.isLoading = false;
    dispatch({ type: Types.AUTH_LOGIN_CHECK, payload: data });
};

export const registerSubmitAction = (postData) => async (dispatch) => {
    let data = {
        status: false,
        message: "",
        isLoading: true,
        tokenData: null,
        userData: null
    };
    dispatch({ type: Types.AUTH_REGISTER_SUBMIT, payload: data });

    await axios.post(`http://laravel07-starter.herokuapp.com/api/v1/sign-up`, postData)
    .then(async (res) => {
        console.log('res register', res);
        const response = res.data;
        if(response.meta.status === 200){
            data.status = true;
            data.tokenData = response.response.token;
            data.message = "Account Created Successfully";
            // Fetch and get the user information and set to localstorage
            data.userData = await getProfileInformation(response.response.token);
        }else{
            data.status = false;
            data.message = res.data.response.message;
        }
    })
    .catch((err) => {
        data.message = err.data;
    });

    data.isLoading = false;
    dispatch({ type: Types.AUTH_REGISTER_SUBMIT, payload: data });
};

export const getAuthenticatedProfileInformationAction = () => async (dispatch) => {
    let data = {
        status: false,
        tokenData: null,
        userData: null
    };

    const userData = localStorage.getItem('userData');
    const tokenData = localStorage.getItem('tokenData');

    if(userData != null && tokenData != null){
        data.status = true;
        data.userData = JSON.parse(userData);
        data.tokenData = tokenData;
    }else{
        data.status = false;
    }

    dispatch({ type: Types.GET_AUTH_DATA, payload: data });
};

export const logoutAuthenticatedUser = () => async (dispatch) => {
    let data = {
        status: false,
        tokenData: null,
        userData: null
    };

    localStorage.removeItem('userData');
    localStorage.removeItem('tokenData');
    dispatch({ type: Types.LOGOUT_AUTH, payload: data });
};

async function getProfileInformation(token) {
    let userInfo = {};
    const headerData = {
        headers: {
            "Access-Control-Allow-Origin" : "*",
            "Content-type": "Application/json",
            "Authorization": `${token}`
        }   
    }

    await axios.get(`http://laravel07-starter.herokuapp.com/api/v1/user-info`, headerData)
    .then((res) => {
        const response = res.data;
        if(response.meta.status === 200){
            userInfo =response.response.user;
        }
    })
    .catch((err) => {
    });
    return userInfo;
}