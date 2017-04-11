import React from 'react';
import Relay from 'react-relay';

import Projects from './Projects';
import {PROJECT_MAX_NEST_DEPTH} from './constants';

class Project extends React.Component {
  render() {
    console.log(this.props);

    let project = this.props.project;

    return (
      <div>
        <h4>Project: {project.title}</h4>
        <p>{project.uuid}</p>

        {this.renderChildProjects()}

      </div>
    );
  }

  renderChildProjects() {
    if (this.props.project.childProjects) {
      return (
        <Projects
          projects={this.props.project.childProjects}
          depth={this.props.relay.variables.depth}
        />
      );
    }
  }
}

export default Relay.createContainer(Project, {
  initialVariables: {
    depth: 0,
    getChildProjects: false
  },
  prepareVariables: prevVariables => {
    const newDepth = prevVariables.depth + 1;
    return {
      ...prevVariables,
      depth: newDepth,
      getChildProjects: newDepth <= PROJECT_MAX_NEST_DEPTH
    }
  },
  fragments: {
    project: variables => Relay.QL`
      fragment on Project {
          uuid,
          title,
          childProjects(first: 10) @include(if: $getChildProjects) {
            ${Projects.getFragment('projects', {depth: variables.depth})}
          }
      }
    `
  }
});
