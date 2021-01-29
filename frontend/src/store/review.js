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

export const addReview = (newReview) => async dispatch => {
    console.log('-----hit')
    const res = await fetch('/api/reviews', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newReview),
    })
        return dispatch(reviewAdder(res.data.review));
        
};

const initialState = {
    reviews: [],
    review: []
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
        default:
            return state;
    }
}

export default reviewReducer;
