import {UserModel} from "../models/UserModel";
import axios from "axios";


export let axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com'
})
export const getUsers = async ():Promise<UserModel[]> =>{
let axiosResponse = await axiosInstance.get<{ users:UserModel[]}>(`/users`);
return axiosResponse.data.users;
}