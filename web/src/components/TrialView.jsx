import StudyCardLarge from "./StudyCardLarge";
import "react-multi-carousel/lib/styles.css";
import cardData from "../api/clinical_trial_api_mock";

const TrialView = () => {

    const studies = cardData.clinicalTrials;

    const cardList = studies.map((element, index) => {
        return(<StudyCardLarge key={index}
                               header={element.header}
                               title={element.title}
                               country={element.county}
                               city={element.city}
                               description={element.longDescription}/>)
    })

    return (
        <div className="trials-box">
            <ul>{cardList}</ul>
        </div>

    );
}

export default TrialView;