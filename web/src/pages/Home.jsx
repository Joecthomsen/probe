import "../styles/homepage.css"
import "react-multi-carousel/lib/styles.css";
import CustomCarousel from "../components/Carousel";

const LandingPage = () => {

    return ( 
        <div>
            <main className="bg-image">
                <div>
                    <div className="color-overlay"/>
                    <div className="header">
                        <h1>Clinical trial matching</h1>
                        <h2>World wide experimental medicin initiateves</h2>
                    </div>
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