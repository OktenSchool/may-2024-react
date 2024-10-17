import React, {FC, useState} from 'react';
import {IUser} from "../../models/IUser";
import {getPostsOfUser} from "../../services/api.service";
import {IPost} from "../../models/IPost";

type UserProps = {
    item: IUser
}
const User: FC<UserProps> = ({item}) => {

    const [posts, setPosts] = useState<IPost[]>([]);
    const handleClickGetPostsOfThisUser = async () => {
        const posts = await getPostsOfUser(item.id);
        setPosts(posts);
    };
    return (
        <div>
            {item.name}
            <button onClick={() => {
                handleClickGetPostsOfThisUser();
            }}>click me
            </button>
            {
                posts.length && <div>

                    {
                        posts.map(post => <li key={post.id}> {post.title}</li>)
                    }
                </div>}
        </div>
    );
};

export default User;
