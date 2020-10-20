import * as Types from '../Types';
import axios from 'axios';
import { toast } from 'react-toastify';

export const storePostAction = (postData) => async (dispatch) => {
    let data = {
        status: false,
        message: "",
        isLoading: true,
    };

    dispatch({ type: Types.POST_CREATE, payload: data });
    
    await axios.post(`http://laravel07-starter.herokuapp.com/api/v1/administrator/posts`, postData)
    .then(async (res) => {
        console.log('res creat Post', res);
        const response = res.data;
        data.message = res.data.response.message;
        if(response.meta.status === 200){
            data.status = true;
            toast.success(data.message);
        }else{
            data.status = false;
            toast.error(data.message);
        }
    })
    .catch((err) => {
        data.message = err.data;
        toast.error(data.message);
    });

    data.isLoading = false;
    dispatch({ type: Types.POST_CREATE, payload: data });
};
