import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import StudyCard from "../components/StudyCard";
import cardData from "../api/clinical_trial_api_mock"

const responsive = {
  superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1600 },
      items: 4,
      partialVisibilityGutter: 40
    },
    tablet: {
      breakpoint: { max: 1599, min: 1124 },
      items: 3
    },
    smallTablet: {
      breakpoint: {max: 1123, min: 724},
      items: 2
    },
    mobile: {
      breakpoint: { max: 723, min: 0 },
      items: 1
    }
};

const studies = cardData.clinicalTrials;
const cardList = studies.map((element, index) => {
  return(<StudyCard key={index} 
      header={element.header} 
      title={element.title} 
      country={element.county}
      city={element.city} 
      description={element.cardDescription}/>)
})


const CustomCarousel = () => {
    return (
      <Carousel 
          responsive={responsive} 
          infinite={true} 
          containerClass="carusel-container" 
          itemClass="carusel-item"
          showDots={true}
          partialVisible={false}
          >
          {cardList}
      </Carousel>
    );
}
 
export default CustomCarousel;