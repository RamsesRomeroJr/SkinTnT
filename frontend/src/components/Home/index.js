import "./index.css"
import splash from "./TattooNeon.jpg"
import {NavLink} from "react-router-dom"


const Home = () =>{
    return (
    <div>
        <div id="home-page-container">
            <img src={splash} />
            <div id="home-page-overlay" >
                <div id="home-body">
                <h1>
                    Find Your
                </h1>
                <NavLink to ="/spots" id="spots-link">
                    Spot
                </NavLink>
                </div>
            </div>
        </div>
    </div>
    )
};

export default Home;
