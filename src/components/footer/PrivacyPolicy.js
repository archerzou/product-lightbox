import React from "react";
import { Button, Modal } from "semantic-ui-react";

import ReactGA from "react-ga";

ReactGA.initialize("UA-139413334-1");

class PrivacyPolicy extends React.Component {
  trackGA = (buttonName) => {
    ReactGA.event({
      category: "Footer",
      action: "Clicked " + buttonName + " Button",
    });
  };

  render = () => (
    <Modal
      trigger={
        <Button onClick={() => this.trackGA("Privacy Policy")}>
          Privacy Policy
        </Button>
      }
      closeIcon
      size="large"
    >
      <Modal.Header>
        <center>Privacy Policy</center>
      </Modal.Header>
      <Modal.Content>
        <h1>Privacy Policy</h1>
        <p>Last updated: May 14, 2021</p>
        <p>
          We use Honeywell's data to provide and improve the Service. By using
          the Service, You agree to the collection and use of information in
          accordance with this Privacy Policy. This Privacy Policy has been
          created with the help of the{" "}
          <a
            href="https://www.privacypolicies.com/privacy-policy-generator/"
          >
            Privacy Policy Generator
          </a>
          .
        </p>
        <h1>Contact Us</h1>
        <p>
          If you have any questions about this Privacy Policy, You can contact
          us:
        </p>
        <ul>
          <li>By email: kevin.zou@honeywell.com/</li>
        </ul>
      </Modal.Content>
    </Modal>
  );
}

export default PrivacyPolicy;