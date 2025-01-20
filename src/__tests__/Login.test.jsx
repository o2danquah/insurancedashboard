import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ContextAPI from "../Context/ContextAPI";
import Login from "../Pages/Login.jsx";
import * as ReactRouterDom from "react-router-dom";

describe("Login Component", () => {
  const mockSetGlobalUserName = jest.fn();
  const mockNavigate = jest.fn();

  
beforeEach(() => {
    jest.spyOn(ReactRouterDom, "useNavigate").mockImplementation(() => mockNavigate);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  const renderWithContext = () => {
    return render(
      <ContextAPI.Provider value={{ setGlobalUserName: mockSetGlobalUserName }}>
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      </ContextAPI.Provider>
    );
  };

  test("renders the login form with all fields", () => {
    renderWithContext();

    expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /submit login form/i })).toBeInTheDocument();
  });

  test("displays an error message for invalid username", () => {
    renderWithContext();

    const usernameInput = screen.getByLabelText(/username/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole("button", { name: /submit login form/i });

    fireEvent.change(usernameInput, { target: { value: "us" } }); // Invalid username
    fireEvent.change(passwordInput, { target: { value: "password123" } }); // Valid password
    fireEvent.click(submitButton);

    expect(screen.getByText(/invalid username or password/i)).toBeInTheDocument();
  });

  test("displays an error message for invalid password", () => {
    renderWithContext();

    const usernameInput = screen.getByLabelText(/username/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole("button", { name: /submit login form/i });

    fireEvent.change(usernameInput, { target: { value: "validUser" } }); // Valid username
    fireEvent.change(passwordInput, { target: { value: "pass" } }); // Invalid password
    fireEvent.click(submitButton);

    expect(screen.getByText(/invalid username or password/i)).toBeInTheDocument();
  });

  test("navigates to the dashboard on successful login", () => {
    renderWithContext();

    const usernameInput = screen.getByLabelText(/username/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole("button", { name: /submit login form/i });

    fireEvent.change(usernameInput, { target: { value: "testuser2511" } });
    fireEvent.change(passwordInput, { target: { value: "password@1234" } });
    fireEvent.click(submitButton);

    expect(mockSetGlobalUserName).toHaveBeenCalledWith("testuser2511");
    expect(mockNavigate).toHaveBeenCalledWith("/Dashboard");
  });

  test("shows an error message for incorrect login credentials", () => {
    renderWithContext();

    const usernameInput = screen.getByLabelText(/username/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole("button", { name: /submit login form/i });

    fireEvent.change(usernameInput, { target: { value: "wronguser" } });
    fireEvent.change(passwordInput, { target: { value: "wrongpassword" } });
    fireEvent.click(submitButton);

    expect(screen.getByText(/incorrect username or password/i)).toBeInTheDocument();
  });
});