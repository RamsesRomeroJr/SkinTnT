import {useEffect} from "react"
import {useParams} from "react-router-dom"

import {useDispatch, useSelector} from "react-redux"
import {fetchSpot} from "../../store/spot"

const Spot = ({theSpot}) => {
    return (
        <div>
            {console.log(theSpot)}
            <h1>{theSpot.name}</h1>
            <h4>{`${theSpot.street} ${theSpot.state} ${theSpot.zipcode}`}</h4>
            {/* <h3>{theSpot.Openings}</h3> */}
        </div>
    )
};

const SpotPage = () =>{

    const {id} = useParams()

    const dispatch = useDispatch();
    const currentSpot = useSelector(state => {
        return state.spot;
    })

    useEffect(async() => {
        dispatch(fetchSpot(id)
        )
    }, []);

    return (
        <div id="spot-page">
            {!currentSpot && <h3>Loading...</h3>}
            {currentSpot &&
                <Spot theSpot={currentSpot} />
            }
        </div>
    )
};

export default SpotPage;
