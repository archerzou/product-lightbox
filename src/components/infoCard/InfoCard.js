import React from "react";
import {
  Button,
  Card,
  Image,
  Icon,
  Label,
  Grid,
  Divider,
  Popup,
} from "semantic-ui-react";
import Tags from "static/Tags";
import MediaQuery from "react-responsive";
import _ from "underscore";
import moment from "moment";
import ReactGA from "react-ga";

import FeedbackModal from "components/feedbackModal/FeedbackModal";
import MediaQueryHelper from "static/MediaQueryHelper";

import "./InfoCard.css";
import background from "./mountains.jpg";

ReactGA.initialize("UA-139413334-1");

class InfoCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      side: "front",
    };
  }
  // below is original code don't modify

  onContactButtonClick = () => {
    ReactGA.event({
      category: "User",
      action: "Clicked View Details: " + this.props.name,
    });
    this.setState({ side: "back" });
  };

  onCloseButtonClick = () => {
    this.setState({ side: "front" });
  };

  renderFront = () => {
    return [
      <MediaQuery
        key="front-laptop-image"
        minDeviceWidth={MediaQueryHelper.MIN_WIDTH_TABLET}
      >
        <Image
          src={this.props.background || background}
          size="medium"
          key="front-image"
          style={styles.infoCardImageMobile}
        />
        {this.props.logo && (
          <img className="banner-logo" alt="logo" src={this.props.logo} />
        )}
      </MediaQuery>,
      <MediaQuery
        key="front-mobile-image"
        maxDeviceWidth={MediaQueryHelper.MIN_WIDTH_TABLET}
      >
        <Image
          src={this.props.background || background}
          size="medium"
          key="front-image"
          style={styles.infoCardImageMobile}
        />
        {this.props.logo && (
          <img className="banner-logo" alt="logo" src={this.props.logo} />
        )}
      </MediaQuery>,
      <Card.Content key="front-content" style={styles.infoCardFrontContent}>
        <Card.Header>{this.props.name}</Card.Header>
        <Card.Description>{this.props.description}</Card.Description>
      </Card.Content>,
      <Card.Content key="front-extra" style={styles.infoCardFrontContent} extra>
        <Card.Meta style={{ marginBottom: 8 }}>
          {_.map(this.props.tags, (tag) => this.renderTag(tag))}
        </Card.Meta>
        {this.renderTodayHours()}
      </Card.Content>,
    ];
  };

  renderTodayHours = () => {
    // Check if resource is 24/7
    if (this.props.tags.indexOf("open") > -1) {
      return (
        <Card.Meta>
          <Icon name="circle" color="red" />
          Open
        </Card.Meta>
      );
    } else {
        // Resource does not have alternative hours, so it is closed
        return (
          <Card.Meta>
            <Icon name="circle" color="green" />
            Closed
          </Card.Meta>
        );
    }
  };

  renderTag = (tag) => {
    const displayName = Tags.getDisplayNameForTag(tag);
    const color = Tags.getColorForTag(tag);
    const Top = Tags.getTopValue(tag);
    if (Top) {
      return (
        <Label
          as="a"
          key={displayName}
          style={_.extend(
            { backgroundColor: color, borderColor: color },
            styles.tag
          )}
        >
          {displayName}
        </Label>
      );
    }
  };

  renderNameBack = () => {
    return (
      <Card.Content
        key="back-header"
        style={_.extend(styles.backNameHeader, styles.infoCardSection)}
      >
        <Card.Header>
          {this.renderReportButton()}
          {this.props.name}
        </Card.Header>
      </Card.Content>
    );
  };

  renderReportButton = () => {
    return (
      <div id="report-button">
        <FeedbackModal
          trigger={
            <Button
              basic
              icon
              floated="right"
              size="small"
              onClick={() => {
                console.log("report");
              }}
            >
              <Popup
                size="tiny"
                content="Report incorrect information"
                trigger={<Icon name="flag" />}
              />
            </Button>
          }
          subject={'Inaccurate information regarding "' + this.props.name + '"'}
        />
      </div>
    );
  };

  renderPhoneNumber = () => {
    
    return (
      <Card.Content key="back-contact" style={styles.infoCardSection}>
        <Card.Description>
          <p>
            {this.props.client}
          </p>
        </Card.Description>
      </Card.Content>
    );
  };

  renderAddress = () => {

    return (
      <Card.Content style={styles.infoCardSection}>
          <Card.Description>
            <p>
              {this.props.action}
            </p>
          </Card.Description>
      </Card.Content>
    );
  };

  renderEmail = () => {
    return (
      <Card.Content style={styles.infoCardSection}>
        {this.props.email && (
          <a
            href={"mailto:" + this.props.email}
            target="_blank"
            rel="noopener noreferrer"
          >
            {this.props.email}
          </a>
        )}
      </Card.Content>
    );
  };

  renderLink = () => {
    return (
      <Card.Content key="back-link-email" style={styles.infoCardSection}>
        <Card.Description>
          {this.props.link && this.props.link.website && (
            <Button
              circular
              color="grey"
              icon="world"
              onClick={() => window.open(this.props.link.website)}
            />
          )}
          {this.props.link && this.props.link.facebook && (
            <Button
              circular
              color="facebook"
              icon="facebook"
              onClick={() => window.open(this.props.link.facebook)}
            />
          )}
          {this.props.link && this.props.link.instagram && (
            <Button
              circular
              color="instagram"
              icon="instagram"
              onClick={() => window.open(this.props.link.instagram)}
            />
          )}
          {this.props.link && this.props.link.twitter && (
            <Button
              circular
              color="twitter"
              icon="twitter"
              onClick={() => window.open(this.props.link.twitter)}
            />
          )}
        </Card.Description>
      </Card.Content>
    );
  };

  renderNotes = () => {
    if (!this.props.notes) {
      return;
    }

    return (
      <Grid.Row key="back-notes" style={styles.backRow}>
        <Divider style={styles.divider} />
        <Card.Content style={styles.infoCardSection}>
          {this.props.notes}
        </Card.Content>
      </Grid.Row>
    );
  };

  renderLastElement = () => {
    // Hack to make sure button sticks to the bottom of the card
    return <Card.Content key="back-last" style={styles.infoCardLast} />;
  };

  _capitalize = (text) => {
    if (!text || text.length < 1) {
      return;
    } else {
      return text.charAt(0).toUpperCase() + text.slice(1);
    }
  };

  renderBack = () => {
    const views = [];

    if (this.props.client) {
      views.push(
        <Grid.Row key="back-client" style={styles.backRow}>
          <Grid.Column width={4} style={styles.backLabel}>
            Client:
          </Grid.Column>
          <Grid.Column width={12}>{this.renderPhoneNumber()}</Grid.Column>
        </Grid.Row>
      );
    }

    if (this.props.action) {
      views.push(
        <Grid.Row key="back-address" style={styles.backRow}>
          <Grid.Column width={4} style={styles.backLabel}>
            Action:
          </Grid.Column>
          <Grid.Column width={12}>{this.renderAddress()}</Grid.Column>
        </Grid.Row>
      );
    }

    if (this.props.email) {
      views.push(
        <Grid.Row key="back-email" style={styles.backRow}>
          <Grid.Column width={4} style={styles.backLabel}>
            Email:
          </Grid.Column>
          <Grid.Column width={12}>{this.renderEmail()}</Grid.Column>
        </Grid.Row>
      );
    }

    if (this.props.link) {
      views.push(
        <Grid.Row key="back-link" style={styles.backRow}>
          <Grid.Column width={4} style={styles.backLabel}>
            link:
          </Grid.Column>
          <Grid.Column width={12}>{this.renderLink()}</Grid.Column>
        </Grid.Row>
      );
    }


    if (this.props.notes) {
      views.push(this.renderNotes());
    }

    views.push(this.renderLastElement());

    return [
      this.renderNameBack(),
      <Card.Content key="back-content" style={styles.backHeader}>
        <Grid>{views}</Grid>
      </Card.Content>,
    ];
  };

  _isOpen = () => {
    const todayDay = moment().format("dddd").toLowerCase();

    if (this.props.hours[todayDay]) {
      const hoursString = this.props.hours[todayDay];

      const openString = hoursString.split("-")[0];
      const closeString = hoursString.split("-")[1];

      const todayOpen = moment(openString, "h:mma");
      const todayClose = moment(closeString, "h:mma");
      return moment().isBetween(todayOpen, todayClose);
    } else {
      return false;
    }
  };

  render = () => (
    <Card style={styles.infoCard}>
      {this.state.side === "front" ? this.renderFront() : this.renderBack()}
      {this.state.side === "front" ? (
        <div className="bottom-button">
          <Button attached="bottom" basic onClick={this.onContactButtonClick}>
            <Icon name="angle right" /> View Details
          </Button>
        </div>
      ) : (
        <div className="bottom-button">
          <Button attached="bottom" basic onClick={this.onCloseButtonClick}>
            <Icon name="angle right" /> See Less
          </Button>
        </div>
      )}
    </Card>
  );
}

const styles = {
  infoCard: {
    borderRadius: 10,
  },
  infoCardSection: {
    // flexGrow: 0, this styling will cause TypeError
  },
  infoCardImage: {
    objectFit: "cover",
    height: 200,
    width: "100%",
  },
  infoCardImageMobile: {
    objectFit: "cover",
    height: 80,
    width: "100%",
    opacity: 0.5,
  },
  infoCardFrontContent: {
    border: "none",
  },
  infoCardLast: {
    flexGrow: 1,
    border: "none",
    padding: 0,
  },
  tag: {
    padding: "6px 8px 6px 8px",
    color: "white",
    borderRadius: 10,
    marginTop: 4,
  },
  backRow: {
    padding: "8px 8px 8px 10px",
    wordBreak: "break-word",
    color: "#666666",
    width: "100%",
  },
  backLabel: {
    padding: 0,
  },
  backHeader: {
    border: "none",
  },
  backNameHeader: {
    padding: "14px 10px 14px 10px",
  },
  reportButton: {
    backgroundColor: "blue",
  },
  hoursLabel: {
    width: 35,
    marginRight: 40,
    display: "inline-block",
    color: "#666666",
  },
  hours: {
    display: "inline-block",
    color: "#666666",
  },
  divider: {
    width: "100%",
    margin: "0px 0px 8px 0px",
  },
};

export default InfoCard;
