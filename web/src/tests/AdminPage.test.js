import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import AdminPage from "../components/AdminPages/AdminPage";

const rend = () => {
  render(
    <Router>
      <AdminPage></AdminPage>
    </Router>
  );
};

test("test that components render", () => {
  rend();

  const users = screen.getByText("Users");
  const researchers = screen.getByText("Researchers");
  const trials = screen.getByText("Trials");
  const grid = screen.getByRole("grid");

  expect(users).toBeVisible();
  expect(researchers).toBeVisible();
  expect(trials).toBeVisible();
  expect(grid).toBeVisible();

  // Expect that first time render of page have users as the active.
  expect(users).toHaveAttribute("aria-pressed", "true");
  expect(researchers).toHaveAttribute("aria-pressed", "false");
  expect(trials).toHaveAttribute("aria-pressed", "false");

  expect(grid).toHaveAttribute("aria-colcount", "11");
});

test("test pressing researchers", () => {
  rend();

  const users = screen.getByText("Users");
  const researchers = screen.getByText("Researchers");
  const trials = screen.getByText("Trials");
  const grid = screen.getByRole("grid");

  fireEvent.click(researchers);

  expect(users).toHaveAttribute("aria-pressed", "false");
  expect(researchers).toHaveAttribute("aria-pressed", "true");
  expect(trials).toHaveAttribute("aria-pressed", "false");

  expect(grid).toHaveAttribute("aria-colcount", "8");
});

test("test pressing trials", () => {
  rend();

  const users = screen.getByText("Users");
  const researchers = screen.getByText("Researchers");
  const trials = screen.getByText("Trials");
  const grid = screen.getByRole("grid");

  fireEvent.click(trials);

  expect(users).toHaveAttribute("aria-pressed", "false");
  expect(researchers).toHaveAttribute("aria-pressed", "false");
  expect(trials).toHaveAttribute("aria-pressed", "true");

  expect(grid).toHaveAttribute("aria-colcount", "11");
});
