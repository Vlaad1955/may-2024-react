import axios from "axios";
import {ComentModel} from "../model/ComentModel";

export let axiosInstants = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

export const getComents = async ():Promise<ComentModel[]> => {
    let axiosResponse = await axiosInstants.get<ComentModel[]>(`/comments`);
    return axiosResponse.data;
}