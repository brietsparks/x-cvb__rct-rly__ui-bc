import React from 'react';
import Relay from 'react-relay';

import Projects from './Projects';

class Profile extends React.Component {
  render() {

    console.log(this.props);

    return (
      <div>
        <h2>Profile</h2>
        <p>{this.props.uuid}</p>

        <Projects projects={this.props.profile.projects}/>

      </div>
    )
  }
}

export default Relay.createContainer(Profile, {
  fragments: {
    profile: variables => Relay.QL`
      fragment on Profile {
        uuid,
        projects(first: 10) {
          ${Projects.getFragment('projects')}
        } 
      }
    `
  }
});

// edges {
//   node {
//     uuid,
//       title
//   }
// }