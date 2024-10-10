import {IPost} from "./IPost";

export interface IResponsePostsModel {
    posts: IPost[],
    skip: number,
    limit: number,
    total: number
}
