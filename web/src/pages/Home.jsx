import "../styles/homepage.css"
import "react-multi-carousel/lib/styles.css";
import CustomCarousel from "../components/Carousel";
import world from "../resources/map-of-the-world-png.png"

const LandingPage = () => {

    return ( 
        <div>
            <main className="bg-image">
                <div className="landingpage-wrapper">
                    {/* <div className="color-overlay"/> */}
                    <div className="header">
                        <h1>Clinical trial matching</h1>
                        <h2>World wide experimental medicin initiateves</h2>
                    </div>
                    <img className="world" src={world} alt="null" />
                </div>                   
            </main> 
            <div className="card-page">
                <div className="card-header">
                    <h1>Selection of Studies</h1>
                </div>
                <CustomCarousel/>
            </div> 
        </div>
    )
}
 
export default LandingPage;