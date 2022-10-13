import {render, screen} from '@testing-library/react'
import Homepage from './pages/Home'
import NavBar from './components/NavBar'
import {BrowserRouter as Router} from "react-router-dom";
//import Layout from './components/Layout'

test('Test that navbar button renders', async() => {
    render(
        <Router>
            <NavBar />
        </Router>
    );
    const homeButton = screen.getByText(/Home/i);
    expect(homeButton).toBeInTheDocument();
    const aboutButton = screen.getByText("About");
    expect(aboutButton).toBeInTheDocument();
    const loginButton = screen.getByText("Login");
    expect(loginButton).toBeInTheDocument();
})

test('Test that the content on the landing page renders', () => {
    render(<Homepage/>);
    const headerOne = screen.getAllByRole("heading");
    expect(headerOne.length).toBe(3);

})