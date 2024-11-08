import { PostModel } from "../models/PostModel";
import { axiosInstance } from "./axios.service";
import { urls } from "../constant/urls";


export const getPosts = async (): Promise<PostModel[]> => {
    let axiosRe = await axiosInstance.get<PostModel[]>(urls.PostsUrl);
    return axiosRe.data;
};