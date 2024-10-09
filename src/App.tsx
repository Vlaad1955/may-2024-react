import React, {useState} from 'react';
import './App.css';
import Users from "./components/Users";
import user from "./components/User";
import {getPostsOfUser} from "./service/app.service";
import posts from "./components/Posts";
import {PostModel} from "./models/PostModel";
import Posts from "./components/Posts";
import {UserModel} from "./models/UserModel";


function App() {
    const [posts, SetPosts] = useState<PostModel[]>([]);
    const lift = (user:UserModel) =>{
        getPostsOfUser(user)
            .then((fetchedPosts) => SetPosts(fetchedPosts));
    }

  return (
    <div className="App">
        <Posts posts={posts}/>
      <Users lift={lift}/>
    </div>
  );
}

export default App;
