import React, { useEffect, useState } from "react";
import PaginationComponent from "../components/PaginationComponent";
import { useSearchParams } from "react-router-dom";
import { ProductService } from "../services/Product.service";
import ProductsComponent from "../components/ProductsComponent";
import { ProductModel } from "../models/ProductModel";

const ProductsPage = () => {
    const [query, setQuery] = useSearchParams({ page: `1` });
    const [products, setProducts] = useState<ProductModel[]>([]);
    const [flag, setFlag] = useState<boolean>(false);

    useEffect(() => {
        const page = query.get(`page`);
        if (page) {
            ProductService.Product.getAll(+page).then(value => {
                if (value && value.products && value.products.length > 0) {
                    setProducts(value.products);

                    // Перевірка на наявність останнього продукту перед доступом до його id
                    const lastProduct = value.products[value.products.length - 1];
                    if (lastProduct && lastProduct.id >= value.total) {
                        setFlag(true);
                    } else {
                        setFlag(false);
                    }
                }
            });
        }
    }, [query]);

    return (
        <div>
            <ProductsComponent products={products} />
            <PaginationComponent flag={flag} />
        </div>
    );
};

export default ProductsPage;