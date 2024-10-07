import React, {FC} from "react";
import {IPropProducts} from "../models/ProductsModel";
import Review from "./Review";

interface ProductProps {
    product: IPropProducts;
}
const Product:FC<ProductProps> = ({product}) =>{
    return(
        <div className = "Product">
            <h2>{product.title}</h2>
            <img src={product.thumbnail} alt={product.title} style={{ width: '150px' }} />
            <p><strong>Brand:</strong> {product.brand}</p>
            <p><strong>Category:</strong> {product.category}</p>
            <p><strong>Price:</strong> ${product.price}</p>
            <p><strong>Description:</strong> {product.description}</p>
            <p><strong>Rating:</strong> {product.rating}</p>
            <p><strong>Stock:</strong> {product.stock}</p>
            <p><strong>Tags:</strong> {product.tags}</p>
            <p><strong>Sku:</strong> {product.sku}</p>
            <p><strong>Weight:</strong> {product.weight}</p>
            <p><strong>Dimensions:</strong> width - {product.dimensions.width},depth - {product.dimensions.depth}, height-{product.dimensions.height}</p>
            <p><strong>Warranty Information:</strong> {product.warrantyInformation}</p>
            <p><strong>Shipping Information:</strong> {product.shippingInformation}</p>
            <p><strong>Availabi lity Status:</strong> {product.availabilityStatus}</p>
            <p><strong>Return Policy:</strong> {product.returnPolicy}</p>
            <p><strong>Minimum Order Quantity:</strong> {product.minimumOrderQuantity}</p>
                <p><strong>Meta:</strong> {product.meta.barcode} <br/> {product.meta.qrCode} <br/> {product.meta.createdAt} <br/> {product.meta.updatedAt}</p>
            <div className="Reviews">
                <h3>Reviews:</h3>
                {product.reviews.map((review, index) => (
                    <Review
                        rating={review.rating}
                        comment={review.comment}
                        date={review.date}
                        reviewerName={review.reviewerName}
                        reviewerEmail={review.reviewerEmail}
                    />
                ))}
            </div>
        </div>
    );
};

export default Product;
