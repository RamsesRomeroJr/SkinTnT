import {fetch} from "../../store/csrf"
import {useEffect, useState} from "react"

const Spot = ({theSpot}) => {
    return (
        <div>
            <h3>{theSpot.name}</h3>
        </div>
    )
};

const SpotsPage = () =>{

    const [currentSpots, setSpots] = useState([]);

    useEffect(async() => {
        const res = await fetch("/api/spots")
        setSpots(res.data.spots);
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
