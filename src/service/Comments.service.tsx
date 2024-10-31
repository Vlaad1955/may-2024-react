import {ComentsModel} from "../model/CommentsModel";
import {axiosInstance} from "./Axios.service";
import {Urls} from "../constant/Urls";


export type CommentsRe = {
    comments:ComentsModel[]
}

export const getComments = async (): Promise<ComentsModel[]> =>{
    let axiosRe = await axiosInstance.get<CommentsRe>(Urls.CommentsUrl);
    return axiosRe.data.comments;
}