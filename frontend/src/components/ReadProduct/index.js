import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ProductDetail } from "../ProductDetail";

export function ReadProduct() {
    const { productId } = useParams();

    const product = useSelector( state => state.product[productId]);

    return (
        <div>
            <ProductDetail product={product} />
        </div>
    )
}