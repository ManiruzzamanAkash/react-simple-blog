import * as Types from "../Types";
import axios from "axios";
import { toast } from "react-toastify";

export const getPostAction = () => async(dispatch) => {
    let data = {
        status: false,
        message: "",
        isLoading: true,
        data: [],
    };

    dispatch({ type: Types.POST_LIST, payload: data });

    await axios
        .get(`http://laravel07-starter.herokuapp.com/api/v1/administrator/posts`)
        .then(async(res) => {
            const response = res.data;
            data.data = res.data.response.posts.data;
            data.message = res.data.response.message;
            if (response.meta.status === 200) {
                data.status = true;
            } else {
                data.status = false;
            }
        })
        .catch((err) => {
            data.message = err.data;
        });

    data.isLoading = false;
    dispatch({ type: Types.POST_LIST, payload: data });
};

export const getPostDetailAction = (id) => (dispatch) => {
    let data = {
        status: false,
        message: "",
        isLoading: true,
        data: [],
    };

    dispatch({ type: Types.POST_SHOW, payload: data });

    axios
        .get(`http://laravel07-starter.herokuapp.com/api/v1/administrator/posts/${id}`)
        .then((res) => {
            const response = res.data;
            data.data = res.data.response.post;
            data.message = res.data.response.message;
            if (response.meta.status === 200) {
                data.status = true;
            } else {
                data.status = false;
            }
        })
        .catch((err) => {
            data.message = err.data;
        });

    data.isLoading = false;
    dispatch({ type: Types.POST_SHOW, payload: data });
};


export const handleChangePostInput = (name, value) => (dispatch) => {
    let data = {
        name: name,
        value: value,
    }
    dispatch({ type: Types.CHANGE_POST_INPUT, payload: data });
};

export const storePostAction = (postData) => async(dispatch) => {
    let data = {
        status: false,
        message: "",
        isLoading: true,
    };

    dispatch({ type: Types.POST_CREATE, payload: data });

    await axios
        .post(
            `http://laravel07-starter.herokuapp.com/api/v1/administrator/posts`,
            postData
        )
        .then(async(res) => {
            const response = res.data;
            data.message = res.data.response.message;
            if (response.meta.status === 200) {
                data.status = true;
                toast.success(data.message);
            } else {
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

/**
 * getSingle post by id
 *
 * @param {integer} id
 */
export const getSinglePostAction = (id) => async(dispatch) => {
    let data = {
        status: false,
        message: "",
        isLoading: true,
        data: [],
    };

    dispatch({ type: Types.POST_SHOW, payload: data });

    await axios
        .get(
            `http://laravel07-starter.herokuapp.com/api/v1/administrator/posts/${id}`
        )
        .then(async(res) => {
            const response = res.data;
            data.data = res.data.response.post;
            data.message = res.data.response.message;
            if (response.meta.status === 200) {
                data.status = true;
            } else {
                data.status = false;
            }
        })
        .catch((err) => {
            data.message = err.data;
        });

    data.isLoading = false;
    dispatch({ type: Types.POST_SHOW, payload: data });
};

/**
 * delete post by id
 *
 * @param {integer} id
 */
export const deletePostAction = (id) => async(dispatch) => {
    let data = {
        status: false,
        message: "",
        isLoading: true,
        data: [],
    };

    dispatch({ type: Types.POST_DELETE, payload: data });

    await axios
        .delete(
            `http://laravel07-starter.herokuapp.com/api/v1/administrator/posts/${id}`
        )
        .then(async(res) => {
            const response = res.data;
            data.data = id;
            data.message = res.data.response.message;
            if (response.meta.status === 200) {
                data.status = true;
                toast.success(data.message);
            } else {
                data.status = false;
                toast.error(data.message);
            }
        })
        .catch((err) => {
            data.message = err.data;
        });

    data.isLoading = false;
    dispatch({ type: Types.POST_DELETE, payload: data });
};