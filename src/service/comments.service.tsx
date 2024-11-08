import {CommentModel} from "../models/CommentModel";
import {axiosInstance} from "./axios.service";
import {urls} from "../constant/urls";


export const getComments = async (): Promise<CommentModel[]> =>{
    let axiosRe = await axiosInstance.get<CommentModel[]>(urls.CommentsUrl)
    return axiosRe.data;
}