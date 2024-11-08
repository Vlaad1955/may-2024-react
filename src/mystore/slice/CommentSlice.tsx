import { CommentModel } from "../../models/CommentModel";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getComments } from "../../service/comments.service";

type CommentSliceType = {
    comments: CommentModel[];
    commentsForfiltr: CommentModel[];
};

let CommentInitState: CommentSliceType = {
    comments: [],
    commentsForfiltr: [],
};

const loadComments = createAsyncThunk(
    `commentsSlice/loadComments`,
    async (_, thunkAPI) => {
        try {
            let commentsFromApi = await getComments();
            return thunkAPI.fulfillWithValue(commentsFromApi);
        } catch (e) {
            return thunkAPI.rejectWithValue(e);
        }
    }
);

export let comentSlice = createSlice({
    name: `comentSlice`,
    initialState: CommentInitState,
    reducers: {
        filterCommentsByPostId: (state, action: PayloadAction<number>) => {
            state.commentsForfiltr = state.comments.filter(
                (comment) => comment.postId === action.payload
            );
        },
    },
    extraReducers: (builder) =>
        builder
            .addCase(loadComments.fulfilled, (state, action: PayloadAction<CommentModel[]>) => {
                state.comments = action.payload;
            })
            .addCase(loadComments.rejected, (state, action: PayloadAction<any>) => {
                console.log(`не підтягує comments`);
            }),
});

export const commentSliceAction = {...comentSlice.actions, loadComments };