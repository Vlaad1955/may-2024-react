import axios from "axios";
import {PostModel} from "../model/PostModel";

export let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

export const getPosts = async (): Promise<PostModel[]> => {
    let axiosResponse = await axiosInstance.get<PostModel[]>(`/posts`);
    return axiosResponse.data;
};