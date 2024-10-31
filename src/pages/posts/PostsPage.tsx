import React, {useEffect, useState} from "react";
import {PostModel} from "../../model/PostsModel";
import {getPosts} from "../../service/Posts.service";
import Post from "../../components/post/Post";
import useStore from "../../store/MyStore";

const PostsPage = () =>{
 const [posts, setPost] = useState<PostModel[]>([])
 const { postSlice:{loadPosts}} =useStore();


    useEffect(() => {
        getPosts()
            .then((data)=>{
                setPost(data);
                loadPosts(data);
            })
    }, []);

    return(
        <div>
            {posts.map((post)=><Post key={post.id} post={post} />)}
        </div>
    )
};

export default PostsPage;