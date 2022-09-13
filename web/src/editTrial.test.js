import {render, screen} from "@testing-library/react";
import EditTrials from "./pages/EditTrials";



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

test("editTrials has box for StudyCards", () =>{
    render(<EditTrials/>);
    let cardList = screen.getByTitle("cardContainer");
    expect(cardList).toBeInTheDocument();
})

/*test("editTrials has box for DialogBox", () =>{
    render(<EditTrials/>);
    let button = screen.getByText("Create Trial");
    Simulate.click(button);
    let state =
})*/