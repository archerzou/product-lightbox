import React from "react";
import {
  Container,
  Segment,
  Button,
  Grid,
  Header,
  Modal,
} from "semantic-ui-react";
import ReactGA from "react-ga";
import FeedbackModal from "components/feedbackModal/FeedbackModal";

ReactGA.initialize("UA-139413334-1");

const trackGA = (buttonName) => {
  ReactGA.event({
    category: "Footer",
    action: "Clicked " + buttonName + " Button",
  });
};


const FixedMenuLayout = () => (
  <div>
    <Segment
      inverted
      vertical
      style={{
        margin: "5em 0em 0em",
        padding: "3em 0em",
        background: "#40798C",
      }}
    >
      <Container textAlign="center">
        <Grid stackable>
          <Grid.Column width={5} alignitems="center">
            <Header inverted as="h4" content="Brought to you by:" />
            <Modal
              trigger={
                <Button onClick={() => trackGA("About Product Team")}>
                  © Product Team
                </Button>
              }
              closeIcon
              size="large"
            >
              <Modal.Header>
                <center>About Us</center>
              </Modal.Header>
              <Modal.Content image>
                <Modal.Description>
                  <center>
                    <p>
                      Product Lightbox was created by{" "}
                        <b>Jianqiang, Matt and Kevin.</b>
                    </p>
                    <p>
                      We aimed at improving the product experiences of <b>Honeywell</b> scanners, mobiles and printers <br /> by
                      providing resources guide, technical support, and quick action response.
                    </p>
                    <p>
                      We hope to continue the clients-­needed feedback about
                      product application <br />
                      to make our service and experience better.
                    </p>
                  </center>
                </Modal.Description>
              </Modal.Content>
            </Modal>
            {/* <Button onClick={() => trackGA("Email")} icon='mail' href='mailto:admin@projectaurora.ca' /> */}
            <br />
            <br />
            Email us:{" "}
            <a
              href="mailto:kevin.zou@honeywell.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "white", textDecoration: "none" }}
            >
              kevin.zou@honeywell.com
            </a>
          </Grid.Column>

          <Grid.Column width={4} alignitems="center">
            <Header inverted as="h4" content="Follow us:" />
            <FeedbackModal
              trigger={<Button color="orange">Give Us Feedback</Button>}
            />
          </Grid.Column>

          <Grid.Column width={7}>
            <Header
              inverted
              as="h4"
              content="Disclaimer:"
            />
            <h5>
              We are belong to Honeywell and all the products and services <br /> can be accessed on Honeywell official website. {" "}
            </h5>
          </Grid.Column>
        </Grid>
      </Container>
    </Segment>
  </div>
);

export default FixedMenuLayout;
