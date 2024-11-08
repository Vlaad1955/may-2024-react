import {UserModel} from "../models/UserModel";
import {axiosInstance} from "./axios.service";
import {urls} from "../constant/urls";


export const getUsers = async ():Promise<UserModel[]> =>{
    let axiosRe = await axiosInstance.get<UserModel[]>(urls.UserUrl)
    return axiosRe.data;
};