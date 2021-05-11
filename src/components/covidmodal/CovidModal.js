import React, { Component } from "react";
import { Icon, Button, Modal, Header } from "semantic-ui-react";
import ReactGA from "react-ga";

ReactGA.initialize("UA-139413334-1");

export default class MenuHeader extends Component {
  trackGA = (buttonName) => {
    ReactGA.event({
      category: "Header",
      action: "Clicked " + buttonName + " Button",
    });
  };

  render() {
    return (
      <Modal
        dimmer="blurring"
        trigger={
          <Button onClick={() => this.trackGA("Products")} color="yellow">
            <Icon name="stethoscope" />
            Products Updates
          </Button>
        }
        closeIcon
      >
        <Modal.Header>Products Updates</Modal.Header>
        <Modal.Content image>
          <div className="image">
            <Icon name="stethoscope" />
          </div>
          <Modal.Description>
            <Header>Here's the latest messages on the Products!</Header>
            <p>
              Our team understands that importance of customer experiences,
              which is why we have updated the website to include product application informations
              about how you might be able to reach your concerned resource in this
              trying time. Thanks for your feedback!
            </p>
            <a
              href="https://sps.honeywell.com/us/en/products/productivity"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button color="blue">Safety and Productivity Solutions</Button>
            </a>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}
