import './index.css'

import {useSelector, useDispatch} from 'react-redux'
import { useState, useEffect } from 'react';
import { addRating, fetchSpot} from "../../store/spot"
import { useHistory } from "react-router-dom";

const RatingCreate = () =>{
    const dispatch = useDispatch();
    const history = useHistory();

    const user = useSelector((state) => state.session.user)
    let userId;
    if(user){
        userId = user.id
    }
    const spotId = useSelector((state) => state.spot).id

    const [rating, setRating] = useState(1);
    const [review, setReview] = useState('')

    const handleSubmit = async (e) => {
        if(user===undefined){
            // e.preventDefault();
            history.push('/')
        }
        // e.preventDefault();
        else{
            dispatch(addRating({userId, spotId, rating, review}))
        }
        // dispatch(fetchSpot(spotId))
        // console.log(spotId, userId, rating, review)
    }

    return (
        <div>
            <h3>Leave A Rating</h3>
            <form onSubmit={handleSubmit}>
                <select
                onChange={e => {
                    setRating(e.target.value)
                }}
                >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
                <div>
                    <textarea
                        id='review'
                        placeholder='leave a review'
                        onChange={(e) => {setReview(e.target.value)}}
                        value={review}
                    />
                </div>
                    <button id='submit-button'>Submit</button>
            </form>
        </div>
    )
}

export default RatingCreate;
