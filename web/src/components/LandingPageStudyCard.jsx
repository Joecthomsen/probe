const LandingPageStudyCard = (props) => {


    return (
        <div className="studycard-container">
                <h1>{props.header}</h1>
                <h2>{props.title}</h2>
                <h3>{props.country}</h3>
                <p>{props.description}</p>
        </div>
    );
}
 
export default LandingPageStudyCard;