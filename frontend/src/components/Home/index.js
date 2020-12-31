import "./index.css"
import splash from "./TattooNeon.jpg"
import {Link} from "react-router-dom"


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
                <Link to ="/spots">
                    Spot
                </Link>
                </div>
            </div>
        </div>
    </div>
    )
};

export default Home;
