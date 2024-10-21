import axiosInstants from "./Axios";
import { ProductModel } from "../models/ProductModel";
import {IDJResponse} from "../models/IDJResponse";

export const ProductService = {
    Product: {
        getAll: async (page: number):Promise<IDJResponse & {products: ProductModel[]}> => {
            const skip = (page-1)*30;
            const {data} = await axiosInstants.get<IDJResponse & {products: ProductModel[]}>(`/products`, {
                params: {
                    skip:skip
                }
            });

            return data;
        }
    }
};
