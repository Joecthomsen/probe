import "../styles/homepage.css"
import "react-multi-carousel/lib/styles.css";
import CustomCarousel from "../components/Carousel";
import world from "../resources/map-of-the-world-png.png"
// import { homepageStore } from "../stores/HomepageStore";
import { observer } from 'mobx-react-lite';


const LandingPage = () => {

    return ( 
        <div>
            <main className="bg-image">
                <div className="landingpage-wrapper">
                    {/* <div className="color-overlay"/> */}
                    <div className="header">
                        <h1>Clinical trial matching</h1>
                        <h2>World wide experimental medicin initiateves test test </h2>
                    </div>
                    <img className="world" src={world} alt="null" /> 

                    {/* {!homepageStore.burgerMenuToggled 
                    ? 
                        <img className="world" src={world} alt="null" /> 
                    : 
                        <div className="burger-menu-wrapper">
                            <h1 className="burger-menu">MOFO</h1>
                            <img className="world" src={world} alt="null" /> 
                        </div>} */}
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
 
export default observer(LandingPage);