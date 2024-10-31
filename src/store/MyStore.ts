
import {PostModel} from "../model/PostsModel";
import {create} from "zustand";
import {ComentsModel} from "../model/CommentsModel";

type StoreType ={
    commentsSlice:{
        comments:ComentsModel[],
        loadComment:(comments:ComentsModel[]) => void
    },
    postSlice:{
        posts:PostModel[],
        loadPosts:(posts:PostModel[]) => void
    }
};

 const useStore = create<StoreType>()((set) => {
return{
    commentsSlice:{
        comments:[],
    loadComment: (comments) =>{
        return set(state => ({
            ...state,
            commentsSlice:{
                ...state.commentsSlice,
                comments:comments,
            }
        }))
    }},
    postSlice:{
        posts:[],
        loadPosts:(posts) =>{
            return set(state =>({
                ...state,
                postSlice:{
                    ...state.postSlice,
                    posts:posts,
                }
            }) )
        }
    },
}});

 export default useStore;