import {useEffect} from "react"
import {useParams} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import {fetchSpot} from "../../store/spot"

import Openings from '../Openings'
import RatingCreate from '../RatingCreate'

const Spot = ({theSpot}) => {
    return (
        <div>
            {/* {console.log(theSpot.Openings)} */}
            <h1>{theSpot.name}</h1>
            <h4>{`${theSpot.street} ${theSpot.state} ${theSpot.zipcode}`}</h4>
            {/* <h1>{theSpot.id}</h1> */}
        </div>
    )
};

const SpotPage = () =>{
    const {id} = useParams()
    useEffect(async() => {
        dispatch(fetchSpot(id)
        )
    }, []);

    const dispatch = useDispatch();

    const currentSpot = useSelector(state => {
        return state.spot;
    })

    const userId = useSelector(state => {
        return state.session.user.id;
    });

    const spotId = currentSpot.id



    return (
        <div id="spot-page">
        <div id="spot-page-title">
            {!currentSpot && <h3>Loading...</h3>}
            {currentSpot &&
                <Spot theSpot={currentSpot} />
            }
        </div>
        <div id="spot-openings">
            <Openings Openings={currentSpot.Openings}/>
        </div>
        <div id="rating-create">
            <RatingCreate />
        </div>
        </div>
    )
};

export default SpotPage;
