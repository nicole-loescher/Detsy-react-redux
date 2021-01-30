import { fetch } from './csrf';

const ADD_REVIEW = 'review/ADD_REVIEW';
const GET_REVIEW = 'review/GET_REVIEW';

const reviewAdder = (review) => ({
    type: ADD_REVIEW,
    review
});

const reviewGetter = (reviews) => ({
    type: GET_REVIEW,
    reviews
});

export const getReviews = () => async dispatch => {
    const res = await fetch('/api/reviews');
    return dispatch(reviewGetter(res.data));
};

export const getProductReview = (productId) => async dispatch =>{
    const res = await fetch(`/api/reviews/${productId}`);
    const review = dispatch(reviewGetter(res.data))
    if (review === null ) return;
    else return review;
}

export const addReview = (newReview) => async dispatch => {
    const res = await fetch('/api/reviews', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newReview),
    })
        return dispatch(reviewAdder(res.data.review));
        
};

const reviewReducer = (state = {}, action) => {
    switch(action.type){
        case ADD_REVIEW: {
            if(!state[action.review.id]) {
                const newState ={
                    ...state,
                    [action.review.id]: action.review
                };
                return newState;
            }
            return {
                ...state,
                [action.review.id]: {
                    ...state[action.review.id],
                    ...action.review,
                }
            };
        }
        case GET_REVIEW: {
            const allReviews = {};
            if(action.reviews === null) return null;
            action.reviews.forEach(review => {
                allReviews[review.id] = review;
            })
            return {
                ...allReviews,
                ...state,
            }
        }
        default:
            return state;
    }
}

export default reviewReducer;
