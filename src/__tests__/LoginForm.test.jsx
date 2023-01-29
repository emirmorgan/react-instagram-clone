import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { describe, expect, it } from "vitest";

import LoginForm from "../components/Login/LoginForm";
import { store } from "../redux/store";

const customRender = (components) =>
  render(<Provider store={store}>{components}</Provider>);

describe("Login form test", () => {
  it("Controlling form components", () => {
    customRender(<LoginForm />);

    const emailInput = screen.getByTestId("username");
    const passwordInput = screen.getByTestId("password");
    const loginButton = screen.getByTestId("loginButton");

    expect(emailInput && passwordInput && loginButton).toBeInTheDocument();
  });

  it("Checking login credentials of button", () => {
    customRender(<LoginForm />);

    const emailInput = screen.getByTestId("username");
    const passwordInput = screen.getByTestId("password");
    const loginButton = screen.getByTestId("loginButton");

    expect(loginButton).toBeDisabled();

    fireEvent.change(emailInput, { target: { value: "test@test.com" } });
    fireEvent.change(passwordInput, { target: { value: "123456" } });

    expect(loginButton).not.toBeDisabled();
  });
});
