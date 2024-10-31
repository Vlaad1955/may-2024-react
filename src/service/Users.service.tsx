import {UserModel} from "../model/UsersModel";
import {axiosInstance} from "./Axios.service";
import {Urls} from "../constant/Urls";


export type UsersRe = {
    users:UserModel[]
};

export const getUsers = async (): Promise<UserModel[]> =>{
let axiosResponse = await axiosInstance.get<UsersRe>(Urls.UserUrl)
    return axiosResponse.data.users
};