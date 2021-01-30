import ratingPhoto2 from '../images/d10-rating.jpg';
import './Rating.css'

export function Rating({review}) {

    return (
        <div className='rating'>
            <span className='rating__comment'>'{review.comments}'
                <div className='rating__dice'>
                    <p className='rating__num'>{review.rating}</p>
                    <img className='rating__img' src={ratingPhoto2} />
                </div>
                <p className='rating__user'>-{review.User.username}</p>
            </span>
        </div>
    )
}
