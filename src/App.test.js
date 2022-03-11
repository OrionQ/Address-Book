import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import CreateProfile from "./routes/CreateProfile";
import Home from "./routes/Home";

// Unit Tests for the application
test("renders Header", () => {
  render(<App />);
  const linkElement = screen.getByText(/Address book/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders contact list", () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
  expect(screen.getByText(/Orion Qin/i)).toBeInTheDocument();
  expect(screen.getByText(/John Doe/i)).toBeInTheDocument();
});

test("renders contact in detail before click", () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
  expect(
    screen.queryByText(/xiaolei_qin@outlook.com/i)
  ).not.toBeInTheDocument();
});

test("renders contact in detail after click", () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
  userEvent.click(screen.getByText("Orion Qin"));
  expect(screen.getByText(/xiaolei_qin@outlook.com/i)).toBeInTheDocument();
});

test("the Save button is disabled by default", async () => {
  render(
    <BrowserRouter>
      <CreateProfile />
    </BrowserRouter>
  );
  expect(await screen.findByRole("button", { name: /Save/i })).toBeDisabled();
});

test("the Save button is enabled after filling in data on the first name field", async () => {
  render(
    <BrowserRouter>
      <CreateProfile />
    </BrowserRouter>
  );
  userEvent.type(screen.getByPlaceholderText("First Name"), "Xiaolei");
  expect(await screen.findByRole("button", { name: /Save/i })).toBeEnabled();
});

test("the Save button is enabled after filling in data on the last name field", async () => {
  render(
    <BrowserRouter>
      <CreateProfile />
    </BrowserRouter>
  );
  userEvent.type(screen.getByPlaceholderText("Last Name"), "Qin");
  expect(await screen.findByRole("button", { name: /Save/i })).toBeEnabled();
});
