//import Footer from "../components/Footer";
import LandingPageStudyCard from "../components/HomepageStudyCard";
import NavBar from "../components/NavBar";
import "../styles/homepage.css"
import cardData from "../api/clinical_trial_api_mock"
//import LandingPageIntroduction from "../components/HomepageIntroduction";
//import backgroundImage from "../resources/background_image.jpg"

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1600 },
        items: 4,
        partialVisibilityGutter: 40
      },
      tablet: {
        breakpoint: { max: 1599, min: 1024 },
        items: 3
      },
      mobile: {
        breakpoint: { max: 1023, min: 0 },
        items: 1
      }
};

const LandingPage = () => {

    const studies = cardData.clinicalTrials;

    const cardList = studies.map((element, index) => {
        return(<LandingPageStudyCard key={index} 
            header={element.header} 
            title={element.title} 
            country={element.county} 
            description={element.cardDescription}/>)
    })

    return ( 
        <div>
            <NavBar />
                <main className="bg-image">
                    <div>
                        <div className="color-overlay"/>
                        <div className="header">
                            <h1>Clinical trial matching</h1>
                            <h2>World wide experimental medicin initiateves</h2>
                        </div>
                    </div>                   
                </main>  
                <Carousel 
                    responsive={responsive} 
                    infinite={true} 
                    containerClass="carusel-container" 
                    itemClass="carusel-item"
                    showDots={true}
                    partialVisible={false}
                    //centerMode={false}
                    >
                    {cardList}
                </Carousel>
            {/* <div className="blob-down"/> */}
        </div>
    )
}
 
export default LandingPage;