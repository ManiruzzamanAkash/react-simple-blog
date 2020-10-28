import * as Types from '../Types';
import axios from 'axios';
import { toast } from 'react-toastify';

export const loginSubmitAction = (postData) => async (dispatch) => {
    let data = {
        status: false,
        message: "",
        isLoading: true,
        access_token: null,
        userData: null
    };
    dispatch({ type: Types.AUTH_LOGIN_CHECK, payload: data });

    await axios.post(`http://laravel07-starter.herokuapp.com/api/v1/sign-in`, postData)
    .then(async (res) => {
        const response = res.data;
        data.message = response.response.message;
        if(response.meta.status === 200){
            data.status = true;
            data.access_token = response.response.token;

            // Store it to local storage
            localStorage.setItem('access_token', response.response.token);
            localStorage.setItem('refresh_token', response.response.refresh_token);
            
            // Fetch and get the user information and set to localstorage
            data.userData = await getProfileInformation(response.response.token);
            localStorage.setItem('userData', JSON.stringify(data.userData));
        }else{
            data.status = false;
        }
    })
    .catch((err) => {
        data.message = err.data;
    });
    if(data.status){
        toast.success(data.message);
    }else{
        toast.error(data.message);
    }
    data.isLoading = false;
    dispatch({ type: Types.AUTH_LOGIN_CHECK, payload: data });
};

export const registerSubmitAction = (postData) => async (dispatch) => {
    let data = {
        status: false,
        message: "",
        isLoading: true,
        access_token: null,
        refresh_token: null,
        userData: null
    };
    dispatch({ type: Types.AUTH_REGISTER_SUBMIT, payload: data });

    await axios.post(`http://laravel07-starter.herokuapp.com/api/v1/sign-up`, postData)
    .then(async (res) => {
        const response = res.data;
        if(response.meta.status === 200){
            data.status = true;
            data.access_token = response.response.token;
            data.message = "Account Created Successfully";

             // Store it to local storage
             localStorage.setItem('access_token', response.response.token);
             localStorage.setItem('refresh_token', response.response.refresh_token);

            // Fetch and get the user information and set to localstorage
            data.userData = await getProfileInformation(response.response.token);
            localStorage.setItem('userData', JSON.stringify(data.userData));
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
        access_token: null,
        userData: null
    };

    const userData = localStorage.getItem('userData');
    const tokenData = localStorage.getItem('access_token');

    if(userData != null && tokenData != null){
        data.status = true;
        data.userData = JSON.parse(userData);
        data.access_token = tokenData;
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
    localStorage.removeItem('access_token');
    dispatch({ type: Types.LOGOUT_AUTH, payload: data });
};

async function getProfileInformation(token) {
    let userInfo = {};

    await axios.get(`http://laravel07-starter.herokuapp.com/api/v1/user-info`)
    .then((res) => {
        const response = res.data;
        if(response.meta.status === 200){
            userInfo = response.response.user;
        }
    })
    .catch((err) => {
        console.log('profile fetch err', err);
    });
    return userInfo;
}