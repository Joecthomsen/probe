import NavBar from "../components/NavBar";
import Filter from "../components/Filter";
import TrialView from "../components/TrialView";

const ViewTrials = () => {

    return (
        <div>
            <NavBar></NavBar>
            <div className="view-trials-page">
                <Filter></Filter>
                <TrialView></TrialView>
            </div>
        </div>

    );
}

export default ViewTrials;