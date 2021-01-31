import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import * as reviewActions from '../../store/review'
import './ReviewForm.css'

export function ReviewForm({ product, hide, hideForm }) {
    const [comments, setComments] = useState('');
    const [rating, setRating] = useState('');
    const dispatch = useDispatch();
    const user_id = useSelector(state => state.session.user.id)
    const product_id = product.id
    const history = useHistory();

    const onSubmit = async(e) => {
        e.preventDefault();
        const review = await dispatch(reviewActions.addReview({ 
            user_id,
            product_id,
            comments,
            rating
        }))
        if(review){
            hide();
            hideForm();
            return review
        }
    }
    const onCancel = (e) => {
        hide();
        hideForm();
    }
   
    if(user_id) return (
        <div className='rating'>

            <form onSubmit={onSubmit} className='review-form'>
                <textarea
                className='review__comments'
                value={comments}
                onChange={(e)=> setComments(e.target.value)}
                placeholder='Enter your comments'
                />
                <label>Rating</label>
                <input
                className='rating__input'
                value={rating}
                onChange={(e)=> setRating(e.target.value)}
                type='number'
                min='1'
                max='10'
                />
                <button className='review__button'>Submit Review</button>
            </form>
            <button className='review__button' onClick={onCancel}>Cancel</button>
        </div>
       
    )
    return (
        
            <h2>Loading</h2>
       
    )
}
