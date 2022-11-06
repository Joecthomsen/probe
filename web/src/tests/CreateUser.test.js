import {render, screen, fireEvent} from '@testing-library/react'
import {BrowserRouter as Router} from "react-router-dom";
import CreateNewUserForm from "../components/createuser/CreateNewUserForm";

test('Test that all fields that are on client user, page one, are visible', () => {

    render(
        <Router>
            <CreateNewUserForm/>
        </Router>
    )

    const email = screen.getByPlaceholderText("Email")
    const password = screen.getByPlaceholderText("Password")
    const repeatedPassword = screen.getByPlaceholderText("Repeat password")
    const firstName = screen.getByPlaceholderText("First name(s)")
    const lastName = screen.getByPlaceholderText("Last name")
    const dob = screen.getByTestId("create-user-dob")
    const city = screen.getByPlaceholderText("City")
    const region = screen.getByPlaceholderText("Region")
    const country = screen.getByPlaceholderText("Country")

    expect(email).toBeVisible()
    expect(password).toBeVisible()
    expect(repeatedPassword).toBeVisible()
    expect(firstName).toBeVisible()
    expect(lastName).toBeVisible()
    expect(dob).toBeVisible()
    expect(city).toBeVisible()
    expect(region).toBeVisible()
    expect(country).toBeVisible()

    expect(screen.getByText("Next")).toBeVisible()
    expect(screen.queryByText("Create User")).not.toBeInTheDocument()
})

test("Test that 'Medical user' field can be pressed, and that the input field is changed", () => {
    render(
        <Router>
            <CreateNewUserForm/>
        </Router>
    )
    fireEvent.click(screen.getByText("Medical User"))
    expect(screen.queryByText("Next")).not.toBeInTheDocument()
    expect(screen.queryByText("create-user-dob")).not.toBeInTheDocument()
    expect(screen.getByText("Create User")).toBeVisible()
})

test("Test that when click on 'Next' and password NOT match, that form two is not displayed", () => {

    render(
        <Router>
            <CreateNewUserForm/>
        </Router>
    )

    fireEvent.click(screen.getByText("Client User"))

    fireEvent.change(screen.getByPlaceholderText("Email"), {target: {value: "email"}});
    fireEvent.change(screen.getByPlaceholderText("Password"), {target: {value: "password"}});
    fireEvent.change(screen.getByPlaceholderText("Repeat password"), {target: {value: "1234"}});
    fireEvent.change(screen.getByPlaceholderText("First name(s)"), {target: {value: "name"}});
    fireEvent.change(screen.getByPlaceholderText("Last name"), {target: {value: "last"}});
    fireEvent.change(screen.getByTestId("create-user-dob"), {target: "10/11/1999"});
    fireEvent.change(screen.getByPlaceholderText("City"), {target: {value: "city"}});
    fireEvent.change(screen.getByPlaceholderText("Region"), {target: {value: "region"}});
    fireEvent.change(screen.getByPlaceholderText("Country"), {target: {value: "Denmark"}});

    fireEvent.click(screen.getByText("Next"))
    expect(screen.getByTestId("error-msg")).toBeVisible()
    expect(screen.getByText("Next")).toBeVisible()

})

test("Test that, when password match, error message not shown", () => {

    render(
        <Router>
            <CreateNewUserForm/>
        </Router>
    )

    fireEvent.change(screen.getByPlaceholderText("Password"), {target: {value: "1234"}});
    expect(screen.queryByText("error-msg")).toBeNull()

})