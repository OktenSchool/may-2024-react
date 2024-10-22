import axios from 'axios';
import {IFormProps} from "../models/IFormProps";
import {IPost} from "../models/IPost";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {}
});


export const apiService = {
    post: {
        savePost: async (dataFromForm: IFormProps): Promise<IPost> => {
            const {data} = await axiosInstance.post<IPost>('/posts', dataFromForm);
            return data;

        }
    }
}
