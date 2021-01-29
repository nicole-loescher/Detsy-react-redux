import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { EditProduct } from '../EditProduct'
import { deleteProduct } from '../../store/product'
import { addToCart } from '../../store/cart'
import './ProductDetail.css';

export function ProductDetail({ product }) {
    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch();

    const [hideForm, setHideForm ]= useState(true)
    let content;
        if (!user || user.id !== product.user_id){
        content = (
            <button className='product__add' onClick={()=> dispatch(addToCart(product.id))}>Add to cart</button>
            )
        }
        else if(user.id === product.user_id){
            content = (
                <button className='product-edit__button' onClick={(e)=> setHideForm(false)}>
                    Edit
                </button>
            )
            if(!hideForm){
                content=(
                    <div>
                        <EditProduct product={product} hideForm={() => setHideForm(true)} deleteProduct={() =>{
                        dispatch(deleteProduct(product.id))}
                        }
                         />
                            
                    </div>
                )
            }
        }
    
    return (
        <div className='product' key={`${product.id}.${product.name}`}>
            <img alt='product' className='product__img' src={product.imgPath} />
            <h2 className='product__title'>{product.name}</h2>
            <h3 className='product__price'>${product.price}</h3>
            <p className='product__details'>{product.description}</p>
            {content}
        </div>
    )
}