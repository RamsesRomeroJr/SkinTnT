import "./index.css"
import splash from "./TattooNeon.jpg"


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
                <h1>
                    Spot
                </h1>
                </div>
            </div>
        </div>
    </div>
    )
};

export default Home;
