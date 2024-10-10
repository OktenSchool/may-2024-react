import axios from 'axios';
import {IUser} from "../models/IUser";
import {IResponseUsersModel} from "../models/IResponseUsersModel";
import {IResponsePostsModel} from "../models/IResponsePostsModel";
import {IPost} from "../models/IPost";

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
});


export const userService = {
    getUsers: async (): Promise<IUser[]> => {
        return (await axiosInstance.get<IResponseUsersModel>('/users')).data.users
    }
}


export const postService = {
    getPostsOfUser: async (id: number): Promise<IPost[]> => {
        let axiosResponse = await axiosInstance.get<IResponsePostsModel>('/posts/user/' + id);
        return axiosResponse.data.posts

    }
}

// export {userService, postService};
