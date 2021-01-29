import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import * as reviewActions from '../../store/review'

export function ReviewForm({ product, hide, hideForm }) {
    const [name, setName] = useState('');
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
   
    if(user_id) return (
        <div>
            <form onSubmit={onSubmit} className='review-form'>
                <input
                optional='true'
                placeholder='Enter your name(optional)'
                name='name'
                type='text'
                value={name}
                onChange={(e)=> setName(e.target.value)}
                />
                <textarea
                
                value={comments}
                onChange={(e)=> setComments(e.target.value)}
                placeholder='Enter your comments'
                />
                <input
                value={rating}
                onChange={(e)=> setRating(e.target.value)}
                type='number'
                />
                <button >Submit Review</button>
            </form>
        </div>
    )
    return (
        <div>
            <h2>Loading</h2>
        </div>
    )
}
