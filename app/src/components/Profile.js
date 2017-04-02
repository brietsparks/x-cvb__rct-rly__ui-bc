import React from 'react';
import Relay from 'react-relay';

import Project from './Project';

class Profile extends React.Component {
  render() {

    let projects = this.props.profile.projects.map(project => {
      return <Project key={project.uuid} project={project}/>
    });

    console.log(this.props);

    return (
      <div>
        <h2>Profile</h2>
        <p>{this.props.uuid}</p>
        <div>
          <h3>Projects</h3>
          {projects}
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
        projects(first: 10) {
          edges {
            node {
              uuid,
              ${Project.getFragment('project')}
            }
          }

        }
      }
    `
  }
});