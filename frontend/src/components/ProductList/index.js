
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../store/product';
import { ProductDetail } from '../ProductDetail';
import './ProductList.css'

export function ProductList() {
    const products = useSelector(state => {
        return state.product
    })
    const productArr = Object.values(products)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getProduct())
    },[dispatch])

    if(!products){
        return 'no dice'
    }
    return (
        <div>
            <h2>Our top picks for you...</h2>
            <div className='product__list'>
                {productArr.map(product => (
                        <ProductDetail product={product} />
                    ))}
            </div>
        </div>
    )
}