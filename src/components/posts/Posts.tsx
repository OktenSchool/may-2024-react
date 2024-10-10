import React, {FC} from 'react';
import {IPost} from "../../models/IPost";
import Post from "../post/Post";

type PostsProps = {
    posts: IPost[];
}
const Posts: FC<PostsProps> = ({posts}) => {
    return (
        <div>
            {
                posts.map(value => <Post key={value.id} item={value}/>)
            }
        </div>
    );
};

export default Posts;
