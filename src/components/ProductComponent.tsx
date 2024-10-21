import React from "react";
import { ProductModel } from "../models/ProductModel";

type ProductProps = {
    product: ProductModel;
};

const ProductComponent: React.FC<ProductProps> = ({ product }) => {
    return (
        <div>
            {product.id}
            {product.title}
        </div>
    );
};

export default ProductComponent;