import {IProduct} from "./IProduct";

export type BaseResponseModelType = {
    total: number;
    skip: number;
    limit: number;
    products?: IProduct[]
    users?: any[]
    carts?: any[]
}
