import './index.css'

import {useEffect} from "react"
import {useParams} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import {fetchSpot} from "../../store/spot"

import Openings from '../Openings'
import RatingCreate from '../RatingCreate'
import Ratings from '../Ratings'

const Spot = ({theSpot}) => {
    return (
        <div id='spot-info'>
            <h1>{theSpot.name}</h1>
            <h4>{`${theSpot.street} ${theSpot.state} ${theSpot.zipcode}`}</h4>
            <img src='https://lh3.ggpht.com/p/AF1QipPWFW40qGnLdebEGPeaZ9lB5pkDZYRrSmwU30RF=s512' id='shop-img'/>
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

    const ratings = useSelector((state) => state.spot.Ratings);



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
        <div id='ratings'>
            <Ratings Ratings={ratings}/>
        </div>
        </div>
    )
};

export default SpotPage;
