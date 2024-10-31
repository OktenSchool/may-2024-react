import React, {useEffect} from 'react';
import {useStore} from "../store";

const PostsPage = () => {
    let {postSlice: {loadPosts, allPosts}} = useStore();
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => {
                loadPosts(value);
            });

    }, []);
    return (
        <ul>
            {allPosts.map(post => (<li key={post.id}>{post.title}</li>))}
        </ul>
    );
};

export default PostsPage;
