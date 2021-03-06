import './index.css'

import { addBooking, fetchSpot } from "../../store/spot"
import { useState } from 'react';
import {useDispatch, useSelector } from "react-redux"

const OpeningOpen = ({Opening}) =>{
    const dispatch = useDispatch();
    const user = useSelector((state) => state.session.user)
    let userId;
    if(user){
        userId = user.id
    }
    const spotId = useSelector((state) => state.spot).id

    const [currentOpening, setOpening] = useState('')
    const [selectedOpening, setSelectedOpening] = useState('')

    //this will be the submit for each opening (aka new Opening component)
    const handleSubmit = async (e) => {
        // e.preventDefault();
        //                   userId,openingId, spotId
        dispatch(addBooking({openingId: selectedOpening, userId, spotId}));
        dispatch(fetchSpot(spotId))
    }

    return (
        <div>
            <h3>Book A Session</h3>
            <form onSubmit={handleSubmit}>
                <select
                    name='opening'
                    onChange={e => {
                        setOpening(e.target.value)
                        setSelectedOpening(e.target.value)
                    }}
                    value={currentOpening}
                >
                    <option value='' disabled>Select a Session</option>
                    {Opening.map(opening =>
                        <option key={opening.id} value={opening.id}>{`${new Date(opening.start)} to ${new Date(opening.end)}`}</option>)}
                </select>
                <button id='book-button' >Book</button>
            </form>

        </div>
    )
}

export default OpeningOpen
