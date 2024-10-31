import {IPost} from "../models/IPost";
import {IComment} from "../models/IComment";

export const mergePostComments = (posts: IPost[], comments: IComment[]): IPost[] => {

    let map: IPost[] = posts.map((value: IPost) => ({...value, comments: []}));


    for (const post of map) {
        for (const comment of comments) {
            if (post.id === comment.postId) {
                post.comments.push(comment);
            }
        }
    }


    return map;


}
