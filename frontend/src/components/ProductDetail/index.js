import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { EditProduct } from '../EditProduct'
import './ProductDetail.css';

export function ProductDetail({ product }) {
    const user = useSelector(state => state.session.user);
    const [hideForm, setHideForm ]= useState(true)
    let content;
    if(user.id === product.user_id){
        content = (
            <button onClick={(e)=> setHideForm(false)}>
                Edit
            </button>
        )
        if(!hideForm){
            content=(
                <EditProduct product={product} />
            )
        }
    }
    
    return (
        <div className='product' key={`${product.id}.${product.name}`}>
            <img alt='product' className='product__img' src={product.imgPath} />
            <h2 className='product__title'>{product.name}</h2>
            <h3 className='product__price'>${product.price}</h3>
            <p className='product__details'>{product.description}</p>
            <button className='product__add'>Add to cart</button>
            {content}
        </div>
    )
}