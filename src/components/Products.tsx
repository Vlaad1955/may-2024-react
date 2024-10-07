import React, {FC, useEffect, useState} from "react";
import Product from "./Product";
import {IPropProducts} from "../models/ProductsModel";

const Products:FC =(props) =>{
    const [products, setProducts] = useState<IPropProducts[]>([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then((response) => response.json())
            .then((data) => {
                setProducts(data.products);
            })
    }, []);

    return(
      <div>
          {products.map((product) => (
              <Product key={product.id}  product={product} />
          ))}
      </div>
    );
};
export default Products;