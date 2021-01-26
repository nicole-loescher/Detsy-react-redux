import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { getOneProduct } from "../../store/product";
import './ProductDetail.css';

export function ProductDetail({ product }) {
    // const {productId } = useParams();
    // const product = useSelector(state =>  state.product[productId]);
    const dispatch = useDispatch();
    console.log( '-----------------------', product )
    useEffect(()=> {
        // dispatch(getOneProduct(productId));
    },[dispatch])

    return (
        <div className='product'>
            <img className='product__img' src={product.imgPath} />
            <h2 className='product__title'>{product.name}</h2>
            <h3 className='product__price'>${product.price}</h3>
            <p className='product__details'>{product.description}</p>
            <button className='product__add'>Add to cart</button>
        </div>
    )
}