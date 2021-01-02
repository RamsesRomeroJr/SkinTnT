import {addBooking} from "../../store/spot"
import { useState } from 'react';
import {useDispatch } from "react-redux"

const OpeningOpen = ({Opening}) =>{
    const dispatch = useDispatch();

    const [currentOpening, setOpening] = useState('')

    //this will be the submit for each opening (aka new Opening component)
    const handleSubmit = (e) => {
        e.preventDefault();
        //                   userId,openingId, spotId
        dispatch(addBooking({                        }));
    }

    return (
        <div>
            <h3>Book A Session</h3>
            <form onSubmit={handleSubmit}>
                <select
                    name='opening'
                    onChange={e => setOpening(e.target.value)}
                    value={currentOpening}
                >
                    <option value='' disabled>Select Session</option>
                    {Opening.map(opening =>
                        <option key={currentOpening}>{`${opening.start}-${opening.end}`}</option>)}
                </select>
                <button>Book</button>
            </form>

        </div>
    )
}

export default OpeningOpen
