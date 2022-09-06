import Footer from "../components/Footer";
import LandingPageStudyCard from "../components/LandingPageStudyCard";
import NavBar from "../components/NavBar";
import "../styles/landingpage.css"
import cardData from "../api/clinical_trial_api_mock"

const LandingPage = () => {

    const card = cardData.clinicalTrials[0];


    const element = <LandingPageStudyCard header={card.header} title={card.title} country={card.county} description={card.cardDescription}/>

    return ( 
        <div>
            <NavBar />
                <main className="main-container">
                    {element}
                </main>
            <Footer/>
        </div>
    )
}
 
export default LandingPage;