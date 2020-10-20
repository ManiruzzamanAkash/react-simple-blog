import * as Types from '../Types';
import axios from 'axios';

export const storePostAction = (postData) => async (dispatch) => {
    let data = {
        status: false,
        message: "",
        isLoading: true,
    };

    dispatch({ type: Types.POST_CREATE, payload: data });

    await axios.post(`http://laravel07-starter.herokuapp.com/api/v1/administrator/posts`, postData)
    .then(async (res) => {
        console.log('res register', res);
        const response = res.data;
        if(response.meta.status === 200){
            data.status = true;
            data.tokenData = response.response.token;
            data.message = "Account Created Successfully";
        }else{
            data.status = false;
            data.message = res.data.response.message;
        }
    })
    .catch((err) => {
        data.message = err.data;
    });

    data.isLoading = false;
    dispatch({ type: Types.POST_CREATE, payload: data });
};
