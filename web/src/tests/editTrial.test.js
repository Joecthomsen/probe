import {fireEvent, render, screen} from "@testing-library/react";
import EditTrials from "../pages/EditTrials";
import {EditTrialStoreOBJ} from "../stores/EditTrialStore";


const homepageErrors = console.error.bind(console)
beforeAll(() => {
    console.error = errormessage => {
        // Har fjernet et error message, da den er noget gunk fra material ui som alligevel ikke gør noget.
        const suppressedErrors = errormessage
            .toString()
            .includes("Warning: validateDOMNesting(...):")
        !suppressedErrors && homepageErrors(errormessage)
    }
})

afterAll(() => {
    console.error = homepageErrors
})

test("editTrials has text 'My trials'", () => {
    render(<EditTrials/>);
    let textElement = screen.getByText("My Trials");
    expect(textElement).toBeInTheDocument();
});

test("editTrials has button for Create Trial", () => {
    render(<EditTrials/>);
    let button = screen.getByText("Create Trial");
    expect(button).toBeInTheDocument();
});

test("editTrials has box for StudyCards", () => {
    render(<EditTrials/>);
    let cardList = screen.getByTitle("cardContainer");
    expect(cardList).toBeInTheDocument();
})

test("editTrials studies and cardList is same lenght",()=>{
    render(<EditTrials/>)
    EditTrialStoreOBJ.setOwnerID(0);
    expect(EditTrialStoreOBJ.cardList.length===EditTrialStoreOBJ.studies.length).toBeTruthy()
    }
)

test("EditTrials dialog is hidden", () => {
    render(<EditTrials/>)
    let dialog =EditTrialStoreOBJ.dialogOpen;
    expect(dialog).toBeFalsy();
})

test("editTrials Create Trial button opens dialog", () => {
    render(<EditTrials/>);
    let button = screen.getByText("Create Trial");
    fireEvent.click(button);
    let textElement = screen.getByText("Edit Trial");
    expect(textElement).toBeInTheDocument();
})


