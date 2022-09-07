//import Footer from "../components/Footer";
import LandingPageStudyCard from "../components/LandingPageStudyCard";
import NavBar from "../components/NavBar";
import "../styles/landingpage.css"
import cardData from "../api/clinical_trial_api_mock"
import LandingPageIntroduction from "../components/LandingpageIntroduction";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 2
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 2
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
};

const LandingPage = () => {

    const studies = cardData.clinicalTrials;

    const cardList = studies.map((element, index) => {
        return(<LandingPageStudyCard key={index} header={element.header} title={element.title} country={element.county} description={element.cardDescription}/>)
    })

    return ( 
        <div>
            <NavBar />
                <main className="main-container">
                    <LandingPageIntroduction/>
                    <Carousel 
                        responsive={responsive} 
                        infinite={true} 
                        containerClass="carusel-container" 
                        itemClass="carusel-item"
                        showDots={true}
                        >
                        {cardList}
                    </Carousel>
                </main>  
            <div className="blob-down"/>
        </div>
    )
}
 
export default LandingPage;