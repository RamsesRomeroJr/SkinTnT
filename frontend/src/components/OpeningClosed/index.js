import {useSelector, useDispatch} from 'react-redux'

const OpeningClosed = ({Opening}) =>{
    const sessionUser = useSelector((state) => state.session.user);
    // check openings to see if it matches current user to display "cancel" button
    //to cancel session
    return (
        <div>
            <h3>Booked Sessions</h3>
            <ul>
                {Opening.map(opening => <li key={opening.id}>{`${opening.start} - ${opening.end}`}</li>)}
            </ul>

        </div>
    )
}

export default OpeningClosed;
