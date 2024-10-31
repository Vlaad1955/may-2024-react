import {PostModel} from "../model/PostsModel";
import {Urls} from "../constant/Urls";
import {axiosInstance} from "./Axios.service";

type PostsResponse ={
    posts: PostModel[];
}
    export const getPosts = async (): Promise<PostModel[]> => {
        let axiosResponse = await axiosInstance.get<PostsResponse>(Urls.PostsUrl);
        return axiosResponse.data.posts;
    };
