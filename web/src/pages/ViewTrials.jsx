import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Filter from "../components/Filter";
import TrialView from "../components/TrialView";
import StudyCardLarge from "../components/StudyCardLarge";
import Carousel from "react-multi-carousel";

const numbers = [1, 2, 3, 4, 5];
const ViewTrials = () => {

    return (
        <div>
            <NavBar></NavBar>
            <div className="view-trials-page">
                <Filter></Filter>
                <TrialView numbers={numbers}></TrialView>
            </div>
        </div>

    );
}

export default ViewTrials;