import axios from "axios";
import {urls} from "../constant/urls";


export const axiosInstance = axios.create({
    baseURL: urls.BaseUrl
});
 