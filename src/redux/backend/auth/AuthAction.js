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
    .then((res) => {
        const response = res.data;
        data.message = response.response.message;
        if(response.meta.status === 200){
            data.status = true;
            data.tokenData =response.response.token;
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