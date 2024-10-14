import React, {useEffect, useState} from "react";
import {PostModel} from "../../model/PostModel";
import {getPosts} from "../../service/posts.service";
import Post from "../../components/post/Post";
const PostsPage = () =>{
   const [posts, setPosts] = useState<PostModel[]>([])
    useEffect(() => {
        getPosts()
            .then((data) =>{
                setPosts(data)
            })
    }, []);
    return(
        <div>
            {posts.map((post) => <Post key={post.id} post={post}/>)}
        </div>
    )
};

export default PostsPage;