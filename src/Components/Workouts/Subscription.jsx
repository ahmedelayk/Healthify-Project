// Style
import "./workout.css";

// Components
import { Button, Form, InputGroup } from "react-bootstrap";

const Subscription = () => {
  return (
    <div className="p-5 newsletter-subscription">
      <h1 className="header1-size text-center">Newsletter Subscription</h1>
      <div className="p-3">
        <form className="d-flex flex-column flex-lg-row" action="POST">
          <InputGroup className="mb-2 mb-lg-0">
            <Form.Control placeholder="Enter Name" />
          </InputGroup>
          <InputGroup className="mb-2 mb-lg-0">
            <Form.Control placeholder="Enter Email" />
          </InputGroup>
          <Button variant="primary">Subscribe</Button>
        </form>
        <p className="text-center mt-3 mb-0 paragraph-size">
          Get to know the latest new and offers we provide on this site.
        </p>
      </div>
    </div>
  );
};

export default Subscription;