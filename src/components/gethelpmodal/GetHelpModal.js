import React, { Component } from "react";
import { Icon, Button, Modal, Header, Table } from "semantic-ui-react";
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
          <Button onClick={() => this.trackGA("Get Help Now")} color="red">
            <Icon name="heart outline" />
            Get Help Now
          </Button>
        }
        closeIcon
      >
        <Modal.Header>Get Help Now</Modal.Header>
        <Modal.Content image>
          <div className="image">
            <Icon name="right arrow" />
          </div>
          <Modal.Description>
            <Header>Help is Available!</Header>
            <p>
              If you or someone else is in immediate requirment, or at risk of
              using our products <strong>access to Repair Center</strong>.
            </p>

            <Table definition>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>
                    Shen Jianqiang <Icon name="mail" /> Shen.Jianqiang@Honeywell.com
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    Li Matt 24/7{" "}
                    <Icon name="phone" />
                    (400-639-6841)
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    Kevin Zou 24/7 <Icon name="phone" />
                    (400-639-6841-5)
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}
