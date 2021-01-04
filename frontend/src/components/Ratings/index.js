import { useState } from "react"
import {useSelector } from "react-redux"

const Ratings = ({Ratings}) => {
    // const ratings = useSelector((state) => state.spot.Ratings);
    // const [ratings, setRatings] = useState({})

    // if(Ratings) ratings=Ratings;

    return (
        <div>
            <h3>Reviews</h3>
            <ul>
                {Ratings && Ratings.map(rating =>
                    <li key={`${rating.id}`}>{`Rating:${rating.rating}/5  Review:${rating.review}`}</li>
                    )}
            </ul>
                {!Ratings && <h4>No Ratings</h4>}
        </div>
    )
}

export default Ratings
