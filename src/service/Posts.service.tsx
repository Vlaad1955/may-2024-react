import axios from "axios";
import {BaseUrl} from "../constant/Urls";
import {PostModel} from "../model/PostModel";


export function PostPosts(post: PostModel) {
    return axios.post(`${BaseUrl}/posts`, post)
}
