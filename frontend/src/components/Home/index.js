import "./index.css"
import splash from "./TattooNeon.jpg"

const Home = () =>{
    return (
    <div>
        <div id="home-page-container">
            <img src={splash} />
            <div id="home-page-overlay" >
                <h1>
                    Welcome
                </h1>
            </div>
        </div>
    </div>
    )
};

export default Home;
