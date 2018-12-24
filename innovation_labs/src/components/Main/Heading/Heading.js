import React from "react";
import { Header, Segment } from "semantic-ui-react";

const Heading = () => (
  <Segment inverted textAlign="center" vertical>
    <Header as="h1" inverted>
      Welcome to Digital Innovation Labs
    </Header>
    <Header as="h5" inverted>
      by Neoris
    </Header>
  </Segment>
);

export default Heading;
