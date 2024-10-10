import React, {useState} from 'react';
import './App.css';
import Users from "./components/users/Users";
import {postService} from "./services/dummyjson.api.service";
import {IPost} from "./models/IPost";
import User from "./components/user/User";
import Posts from "./components/posts/Posts";


function App() {

    const [posts, setPosts] = useState<IPost[]>([]);
    const lift = async (id: number) => {
        setPosts(await postService.getPostsOfUser(id));
        console.log(id);

    };
    return (
        <div>

            <Users lift={lift}/>
            <hr/>
            <Posts posts={posts}/>
            <hr/>
        </div>


    );
}

export default App;
