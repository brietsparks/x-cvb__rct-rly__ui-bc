import React from 'react';
import Relay from 'react-relay';

import Project from './Project';
import ProjectList from './ProjectList';

class Profile extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h2>Profile</h2>
        <p>{this.props.uuid}</p>
        <div>
          <h3>Projects</h3>
          <ProjectList projects={this.props.profile.projects} depth={1}/>
        </div>
      </div>
    )
  }
}

export default Relay.createContainer(Profile, {
  fragments: {
    profile: variables => Relay.QL`
      fragment on Profile {
        uuid,
        projects{
          uuid,
          ${Project.getFragment('project')}
        }
      }
    `
  }
});