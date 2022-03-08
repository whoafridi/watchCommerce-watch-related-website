import { Accordion, Button, FormControl, InputGroup } from "react-bootstrap";
import './Faq.css';

const Faq = () => {
  return (
    <>
      <h2 className="fw-bold text-center mt-5">Frequently Asked Questions ?</h2>
      <div className="container mb-5 mt-5">
        <div className="row">
          <div className="col-md-5 col-sm-12">
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Why choose us?</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>How we works?</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>What do you get from us?</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <div className="col-md-7 col-sm-12">
            <img
              style={{ width: "100%" }}
              src="https://assets.materialup.com/uploads/d81111b5-b028-4c28-afc8-7d26df4cbdae/preview.jpg"
              alt="watch-service"
            />
          </div>
        </div>
        <div
          style={{ height: "250px" }}
          className="container faq mt-5 d-flex justify-content-center align-items-center rounded-3"
        >
          <div>
            <h1 className="mt-5 faq-text">LET'S STAY IN TOUCH</h1>
            <p className="faq-text text-center">
              Get updates on sales, specials and more
            </p>
            <InputGroup className="mb-5">
              <FormControl
                className="rounded-pill"
                placeholder="Your email address"
                aria-label="Your email"
                aria-describedby="basic-addon2"
              />
              <Button
                variant="secondary"
                id="button-addon2"
                className="rounded-pill ms-2"
              >
                Subscribe
              </Button>
            </InputGroup>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
