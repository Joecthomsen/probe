const StudyCard = (props) => {

    let description = props.description;
    if(description.length > 100){
        description = description.substring(0, 100 ) + "..."
    }

    return (
        <div className="studycard-container">
            <h1>{props.header}</h1>
            <div className="card-location">
                <span className="material-symbols-outlined">location_on</span>
                <p className="card-country">{props.country}</p>
                <p className="card-city">{props.city}</p>
            </div>            
            <hr className="card-line"/>   
            <h2>{props.title}</h2>
            <div className="card-description-container">
                <p>{description}</p>
            </div>
            <div className="links">
                <span className="material-symbols-outlined">read_more</span>
            </div>
        </div>
    );
}
 
export default StudyCard;