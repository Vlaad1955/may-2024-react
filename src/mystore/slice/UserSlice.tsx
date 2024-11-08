import {UserModel} from "../../models/UserModel";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getUsers} from "../../service/users.service";

type UserSliceType = {
    users:UserModel[];
    user:UserModel | null;
}

const userInitState: UserSliceType = {
    users:[],
    user:null
}

const loadUser = createAsyncThunk(`userSlice/loadUser`, async (_, thunkAPI) => {
    try {
        let usersFromAPI = await getUsers();
        return thunkAPI.fulfillWithValue(usersFromAPI);
    } catch (e) {
        return thunkAPI.rejectWithValue(e);
    }
});

 export let userSlice = createSlice({
    name:`UserSlice`,
    initialState: userInitState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(loadUser.fulfilled, (state, action: PayloadAction<UserModel[]>) =>{
                state.users = action.payload;
            })
            .addCase(loadUser.rejected, (state, action: PayloadAction <any>)=>{
                console.log(`не підтягує users`)
})
});

 export const userSliceActions = {loadUser};