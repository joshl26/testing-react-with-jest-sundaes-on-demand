import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

const SummaryForm = () => {
  const [checked, setChecked] = useState(false);

  console.log(checked);

  const popover = (
    <Popover id="popover-basic">
      <Popover.Body>no ice cream will actually be delivered</Popover.Body>
    </Popover>
  );

  const checkboxLabel = (
    <span>
      I agree to
      <OverlayTrigger placement="right" overlay={popover}>
        <span style={{ color: "blue" }}>Terms and conditions</span>
      </OverlayTrigger>
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
