import './index.css'

import {useSelector, useDispatch} from 'react-redux'
import { useState, useEffect } from 'react';
import {cancelBooking, fetchSpot} from "../../store/spot"


const OpeningClosed = ({Opening}) =>{
    const dispatch = useDispatch();

    const user = useSelector((state) => state.session.user)
    let userId;
    if(user){
        userId = user.id
    }
    const spotId = useSelector((state) => state.spot).id

    const [selectedOpening, setSelectedOpening] = useState('')
    // check openings to see if it matches current user to display "cancel" button
    //to cancel session
    const handleSubmit = async (e) => {
        // e.preventDefault();

        dispatch(cancelBooking({openingId: selectedOpening, userId, spotId}))
        dispatch(fetchSpot(spotId))
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <h3>Booked Sessions</h3>
            {!Opening.length && <h4 style={{color: "salmon"}}>-no current bookings-</h4>}
                <ul>
                    {Opening.map(opening =>{
                    if(userId === opening.userId){
                        return(
                        <div key={`div for ${opening.id}`}>
                        <li key={opening.id} id='booked' >{`${new Date(opening.start)} - ${new Date(opening.end)}`}</li>
                        <button  onClick={() => setSelectedOpening(opening.id)} id='cancel-button'>cancel</button>
                        </div>
                        )
                    }
                    else if(userId !== opening.userId){
                        return <li key={opening.id}>{`${new Date(opening.start)} - ${new Date(opening.end)}`}</li>
                    }
                    })}
                </ul>
            </form>

        </div>
    )
}

export default OpeningClosed;
