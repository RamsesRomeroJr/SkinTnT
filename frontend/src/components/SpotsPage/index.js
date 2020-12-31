import {fetch} from "../../store/csrf"
import {useEffect, useState} from "react"


import {useDispatch, useSelector} from "react-redux"
import {fetchAllSpots} from "../../store/spots"

const Spot = ({theSpot}) => {
    return (
        <div>
            <h3>{theSpot.name}</h3>
        </div>
    )
};

const SpotsPage = () =>{

    const dispatch = useDispatch();
    const currentSpots = useSelector(state => {
        return state.spots;
    })

    useEffect(async() => {
        dispatch(fetchAllSpots()
        )
    }, []);

    return (
        <div id="spots-page">
            <h2>Tattoo Shops</h2>
            {!currentSpots && <h3>Loading...</h3>}
            {currentSpots && currentSpots.map(spot => {
                return <Spot theSpot={spot} />
            })}
        </div>
    )
};

export default SpotsPage;
