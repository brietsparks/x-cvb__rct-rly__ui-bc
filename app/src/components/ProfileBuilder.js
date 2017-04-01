import React from 'react';
import Relay from 'react-relay';

class ProfileBuilder extends React.Component {
  render() {

  }
};

export default Relay.createContainer(ProfileBuilder, {
  fragments: {
    profile: () => Relay.QL`
        fragment on Profile {
            uuid
        }
    `
  }
});