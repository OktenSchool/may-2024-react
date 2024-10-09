import {IUser} from "../models/IUser";
import {ITodo} from "../models/ITodo";

// export const getUsers = async (): Promise<IUser[]> => {
//     let response: IUser[] = await fetch('https://jsonplaceholder.typicode.com/users')
//         .then(value => value.json());
//
//     return response;
// }
//
//
// export const getTodosOfUser = async (user: IUser) => {
//     let response: ITodo[] = await fetch('https://jsonplaceholder.typicode.com/todos?userId=' + user.id)
//         .then(value => value.json());
//     return response;
//
// }

import axios from 'axios';

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',

});

axiosInstance.interceptors.request.use((request) => {

    if (request.method === 'post') {
        request.headers.delete('Content-Type', 'application/json');
        request.headers.set('xxx', 'qweasd');
    }

    console.log(request);

    return request;

})
export const getUsers = async (): Promise<IUser[]> => {
    let axiosResponse = await axiosInstance.get<IUser[]>('/users');
    return axiosResponse.data;
}

export const getTodosOfUser = async (user: IUser) => {
    let response = await axiosInstance.get<ITodo[]>('/todos', {
        params: {userId: user.id}
    });
    return response.data;
}

