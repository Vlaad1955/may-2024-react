import { BaseUrl } from "../constant/url";
import axios from "axios";

const axiosInstants = axios.create({
    baseURL: BaseUrl,
});

export default axiosInstants;