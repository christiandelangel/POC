import PropTypes from "prop-types";
import React, { Component } from "react";
import { Responsive } from "semantic-ui-react";
import Heading from "../Heading";
import Footer from "../Footer";

class DesktopContainer extends Component {
  render() {
    const { children } = this.props;
    return (
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Heading />
        {children}
        <Footer />
      </Responsive>
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node
};

export default DesktopContainer;
