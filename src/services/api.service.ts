import axios from 'axios';
import {IUser} from "../models/IUser";
import {IPost} from "../models/IPost";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {}
});


export const getAllUsers = async (): Promise<IUser[]> => {
    const {data} = await axiosInstance.get<IUser[]>('/users');
    return data;
}

export const getPostsOfUser = async (userId: number): Promise<IPost[]> => {
    const {data} = await axiosInstance.get<IPost[]>('/posts');
    return data;
}


