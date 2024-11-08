import {PostModel} from "../../models/PostModel";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getPosts} from "../../service/posts.service";


type PostSliceType = {
    posts: PostModel[],
    post:PostModel | null
};

const PostInitState: PostSliceType = {
    posts:[],
    post:null
};

const loadPosts = createAsyncThunk(`postSlice/loadUser`, async (_, thunkAPI)=>{
    try {
        let postsFromApi = await getPosts();
        return thunkAPI.fulfillWithValue(postsFromApi);
    }catch (e) {
        return thunkAPI.rejectWithValue(e);
    }
})

export let postSlice = createSlice({
    name:`postSlice`,
    initialState: PostInitState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(loadPosts.fulfilled, (state, action: PayloadAction<PostModel[]>)=> {
                state.posts = action.payload;
            })
            .addCase(loadPosts.rejected, (state, action: PayloadAction<any>) =>{
                console.log(`не підтягує posts`)
            })
})

export const postSliceAction = {loadPosts};



