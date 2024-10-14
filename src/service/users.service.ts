import { UserModel } from "../model/UserModel";
import axios from "axios";

export let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

export const getUsers = async (): Promise<UserModel[]> => {
    let axiosResponse = await axiosInstance.get<UserModel[]>(`/users`);
    return axiosResponse.data;
};