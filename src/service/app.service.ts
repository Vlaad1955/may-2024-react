import {UserModel} from "../models/UserModel";
import {axiosInstance} from "./user.service";
import {PostModel} from "../models/PostModel";
export const getPostsOfUser = async (user: UserModel) => {
    let response = await axiosInstance.get<{posts:PostModel[]}>('/posts', {
        params: {userId: user.id}
    });
    return response.data.posts;
}