import React, {FC} from 'react';
import {IPost} from "../../models/IPost";

type PostProps = {
    item: IPost;
}
const Post: FC<PostProps> = ({item}) => {
    return (
        <div>
            {item.title}
        </div>
    );
};

export default Post;
