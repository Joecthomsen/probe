const LandingPageStudyCard = (props) => {

    let description = props.description;
    if(description.length > 200){
        description = description.substring(0, 100 ) + "..."
    }

    return (
        <div className="studycard-container">
                <h1>{props.header}</h1>
                <h2>{props.title}</h2>
                <h3>{props.country}</h3>
                <p>{description}</p>
                <span className="material-symbols-outlined">arrow_outward</span>
        </div>
    );
}
 
export default LandingPageStudyCard;