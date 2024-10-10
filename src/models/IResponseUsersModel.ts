import {IUser} from "./IUser";

export interface IResponseUsersModel {
    users: IUser[],
    total: number,
    skip: number,
    limit: number,
}
