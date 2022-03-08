import { render, screen, fireEvent } from "@testing-library/react";
import Form from "../index";
import { Provider } from "react-redux";
import store from "../../../store";

describe("Form section", () => {
  it("check for form submission", () => {
    render(
      <Provider store={store}>
        <Form />
      </Provider>
    );
    const titleElement = screen.getByLabelText("title");
    const descriptionElement = screen.getByLabelText("description");
    const submitButton = screen.getByText(/Submit/i);
    fireEvent.click(submitButton);
    expect(titleElement.textContent).toBe("");
    expect(descriptionElement.textContent).toBe("");
  });
});
