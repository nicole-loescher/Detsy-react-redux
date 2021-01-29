import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { EditProduct } from '../EditProduct'
import { deleteProduct } from '../../store/product'
import { addToCart } from '../../store/cart'
import './ProductDetail.css';
import { ReviewForm } from '../ReviewForm';
import { getReviews } from '../../store/review';

export function ProductDetail({ product }) {
    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch();

    const [hideForm, setHideForm ]= useState(true);
    const [hideReview, setHideReview] = useState(true);
    const [hideReviewForm, setHideReviewForm]= useState(true);
    useEffect(()=>{
        dispatch(getReviews())
    },[dispatch])
    let content;
        if (!user || user.id !== product.user_id){
        content = (
            <div>
                <button className='product__add' onClick={()=> dispatch(addToCart(product.id))}>Add to cart</button>
                <p>highest rated review</p>
                <button onClick={()=>setHideReview(false)}>see more reviews</button>
            </div>
            )
            if(!hideReview){
                content = (
                    <div>
                        <button className='product__add' onClick={() => dispatch(addToCart(product.id))}>Add to cart</button>
                        <button onClick={()=> setHideReviewForm(false)}>add review</button>
                        <p>all reviews</p>
                        <p>more reviews</p>
                        <p>and still more reviews</p>
                    </div> 
                )
            }
            if(!hideReviewForm){
                content = (
                    <div>
                        <ReviewForm product={product} hide={()=> setHideReviewForm(true)} hideForm={()=> setHideReview(true)} />
                    </div>   
                )
            }
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