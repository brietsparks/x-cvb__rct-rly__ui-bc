import React from 'react';
import Relay from 'react-relay';

import Project from './Project';

class Projects extends React.Component {
  render() {
    console.log(this.props);

    let projects = this.props.projects.edges.map(edge => {
      return (
        <Project
          key={edge.node.__dataID__}
          project={edge.node}
          depth={this.props.relay.variables.depth}
        />
      );
    });

    return (
      <div>
        <h3>Projects</h3>
        {projects}
      </div>
    );
  }
}

export default Relay.createContainer(Projects, {
  initialVariables: {
    depth: 0
  },
  fragments: {
    projects: variables => Relay.QL`
      fragment on ProjectConnection {
        edges {
          node {
            ${Project.getFragment('project', {depth: variables.depth})}
          }
        }
      }
    `
  }
});
