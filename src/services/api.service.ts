import axios from 'axios';
import {BaseResponseType} from "../models/BaseResponseType";
import {IProduct} from "../models/IProduct";

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {}
});


export const getProducts = async (): Promise<IProduct[]> => {
    let {data: {products}} = await axiosInstance.get<BaseResponseType & { products: IProduct[] }>('/products');
    return products
}
export const getProduct = async (id: string): Promise<IProduct> => {

    return (await axiosInstance.get<IProduct>('/product/' + id)).data;
}
