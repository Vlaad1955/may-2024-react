import React from "react";
import { ProductModel } from "../models/ProductModel";
import ProductComponent from "./ProductComponent";

type ProductProps = {
    products: ProductModel[];
};

const ProductsComponent: React.FC<ProductProps> = ({ products }) => {
    return (
        <div>
            {products.map((product) => (
                <ProductComponent key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductsComponent;