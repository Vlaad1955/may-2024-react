import axios from "axios";
import {Urls} from "../constant/Urls";

export const axiosInstance = axios.create({
    baseURL: Urls.BaseUrl
});
