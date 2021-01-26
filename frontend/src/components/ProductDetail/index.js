import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { getOneProduct } from "../../store/product";


export function ProductDetail({ product }) {
    // const {productId } = useParams();
    // const product = useSelector(state =>  state.product[productId]);
    const dispatch = useDispatch();
    console.log( '-----------------------')
    useEffect(()=> {
        // dispatch(getOneProduct(productId));
    },[dispatch])

    return (
        <div>
            <img src={product.imgPath} />
            <h2>{product.name}</h2>
            <h3>{product.price}</h3>
            <p>{product.description}</p>
            
        </div>
    )
}