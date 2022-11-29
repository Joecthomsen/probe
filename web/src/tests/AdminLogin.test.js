import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import AdminLogin from "../pages/AdminLogin";

const rend = () => {
  render(
    <Router>
      <AdminLogin></AdminLogin>
    </Router>
  );
};

test("test that components render", () => {
  rend();

  const signin = screen.getByText("Sign in");
  const username = screen.getByLabelText("Username");
  const password = screen.getByLabelText("Password");
  const logInBtn = screen.getByText("log in");

  expect(signin).toBeVisible();
  expect(username).toBeVisible();
  expect(password).toBeVisible();
  expect(logInBtn).toBeVisible();
});

test("test 'log in' button is disabled when only username is filled", () => {
  // Arrange
  rend();

  const username = screen.getByLabelText("Username");
  const logInBtn = screen.getByText("log in");

  // Act
  fireEvent.change(username, { target: { value: "admin" } });

  // Assert
  expect(username).toHaveValue("admin");
  expect(logInBtn).toBeDisabled();
});

test("test 'log in' button is disabled when only password is filled", () => {
  rend();

  const password = screen.getByLabelText("Password");
  const logInBtn = screen.getByText("log in");

  fireEvent.change(password, { target: { value: "test1234" } });
  expect(password).toHaveValue("test1234");
  expect(logInBtn).toBeDisabled();
});

test("test 'log in' button is active when username and password is filled", () => {
  rend();

  const username = screen.getByLabelText("Username");
  const password = screen.getByLabelText("Password");
  const logInBtn = screen.getByText("log in");

  fireEvent.change(username, { target: { value: "admin" } });
  fireEvent.change(password, { target: { value: "test1234" } });

  expect(logInBtn).not.toBeDisabled();
});
