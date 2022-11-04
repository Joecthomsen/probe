import {render, screen, fireEvent} from '@testing-library/react'
import LoginPage from '../components/sign_in/Login'
import CreateNewUser from "../components/sign_in/CreateNewUser";
import {BrowserRouter as Router} from "react-router-dom";

test('There is an username input', async() => {
    render(
        <Router>
            <LoginPage />
        </Router>
    );
    const username = screen.getByPlaceholderText("Username");
    expect(username).toBeVisible();
})

test('There us a password input', () => {
    render(
        <Router>
            <LoginPage />
        </Router>
    );
    const password = screen.getByPlaceholderText("Password");
    expect(password).toBeVisible();
})

test('That the test entered in username input is rendered', () => {
    render(
        <Router>
            <LoginPage />
        </Router>
    );
    const usernameInput = screen.getByPlaceholderText("Username");
    fireEvent.change(usernameInput, {target: {value: "This is some text!"}});
    expect(usernameInput.value).toBe("This is some text!");
})

test('That the password is entered', () => {
    render(
        <Router>
            <LoginPage />
        </Router>
    );
    const usernameInput = screen.getByPlaceholderText("Password");
    fireEvent.change(usernameInput, {target: {value: "This is my secret password!"}});
    expect(usernameInput.value).toBe("This is my secret password!");
})

test('That there is a login button', () => {
    render(
        <Router>
            <LoginPage />
        </Router>
    );
    const loginButton = screen.getByText("Log in");
    expect(loginButton).toBeVisible()
})

test('That create new user button is working', () => {
    render(
        <Router>
            <CreateNewUser />
        </Router>
    );
    const createNewUserButton = screen.getByText("Create New User");
    expect(createNewUserButton).toBeVisible();
    fireEvent.click(createNewUserButton);
    expect(window.location.pathname).toBe("/createuser")
})

test('That there are two header elements', () => {
    render(
        <Router>
            <CreateNewUser />
        </Router>
    );
    const headerElements = screen.getAllByRole("heading");
    expect(headerElements.length).toBe(2);
})