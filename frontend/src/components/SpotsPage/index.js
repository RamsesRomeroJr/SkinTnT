import './index.css'
import {useEffect, useState} from "react"
import {NavLink} from "react-router-dom"


import {useDispatch, useSelector} from "react-redux"
import {fetchAllSpots} from "../../store/spots"

const Spot = ({theSpot}) => {
    return (
        <div id='spot-link'>
            <NavLink to={`/spot/${theSpot.id}`} key={theSpot.id}>{theSpot.name}</NavLink>
            <img src={theSpot.url} id='tattoo-shop-img'/>
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
                return <Spot theSpot={spot} key={spot.id} />
            })}
        </div>
    )
};

export default SpotsPage;
