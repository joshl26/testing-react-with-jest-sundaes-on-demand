import { render, screen } from "@testing-library/react";
import SummaryForm from "../SummaryForm";
import userEvent from "@testing-library/user-event";

test("Checkbox is unchecked by default", async () => {
  render(<SummaryForm />);

  //Check that checkbox is unchecked by default
  const checkbox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });

  expect(checkbox).not.toBeChecked();
});

test("Checking checkbox enables and disables button", async () => {
  const user = userEvent.setup();

  render(<SummaryForm />);

  //Check that checking checkbox enables button
  const checkbox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  const button = screen.getByRole("button", { name: /confirm order/i });

  expect(checkbox).not.toBeChecked();
  await user.click(checkbox);
  expect(checkbox).toBeChecked();
  expect(button).toBeEnabled();
  await user.click(checkbox);
  expect(button).toBeDisabled();
});
