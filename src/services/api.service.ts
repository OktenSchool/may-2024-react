import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {}
});
const getAll = async <T, >(endpoint: string, callbackFn?: () => void): Promise<T> => {
    const {data} = await axiosInstance.get<T>(endpoint);
    return data;

}


export const apiService = {
    userService: {
        getAll
    },
    postService: {
        getAll
    },

    commentService: {
        getAll
    },

}

