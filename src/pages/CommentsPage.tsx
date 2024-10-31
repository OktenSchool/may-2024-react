import React, {useEffect} from 'react';
import {useStore} from "../store";

const CommentsPage = () => {

    let {commentSlice: {loadComments, allComments}} = useStore();
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(value => {
                loadComments(value);
            });

    }, []);
    return (
        <ul>
            {allComments.map(comment => (<li key={comment.id}>{comment.body}</li>))}
        </ul>
    );
};

export default CommentsPage;
