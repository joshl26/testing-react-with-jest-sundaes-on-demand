import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const SummaryForm = () => {
  const [checked, setChecked] = useState(false);

  console.log(checked);

  const checkboxLabel = (
    <span>
      I agree to
      <span style={{ color: "blue" }}>Terms and conditions</span>
    </span>
  );

  return (
    <Form>
      <Form.Group controlId="terms-and-conditions">
        <Form.Check
          name="Terms and conditions"
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
          label={checkboxLabel}
        />
      </Form.Group>
      {checked === true ? (
        <button variant="primary" type="submit">
          Confirm order
        </button>
      ) : (
        <button disabled variant="primary" type="submit">
          Confirm order
        </button>
      )}
    </Form>
  );
};

export default SummaryForm;
