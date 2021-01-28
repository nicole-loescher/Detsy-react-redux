
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, deleteProduct } from '../../store/product';
import { ProductDetail } from '../ProductDetail';
import './ProductList.css'


export function ProductList() {
    const products = useSelector(state => {
        return state.product
    })
    const productArr = Object.values(products)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getProducts())

    },[dispatch])

    if(!products){
        return 'no dice'
    }
    return (
            <div className='product__list'>
                {productArr.map(product => (
                        <ProductDetail key={product.id} product={product} />
                    ))}
            </div>
    )
}