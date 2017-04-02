import React from 'react';
import Relay from 'react-relay';

import ProjectList from './ProjectList';

const MAX_DEPTH = 10;

class Project extends React.Component {
  render() {
    console.log(this.props);

    this.props.relay.variables.includeChildProjects = this.props.depth <= MAX_DEPTH;

    let project = this.props.project;

    return (
      <div>
        <h4>Project: {project.title}</h4>
        <p>{project.uuid}</p>
        <p>{project.title}</p>
        <p>{project.summary}</p>

        {this.renderProjectList()}

      </div>
    );
  }

  renderProjectList() {
    const project = this.props.project;
    const hasChildProjects = project.childProjects !== null && project.length > 0;

    if (hasChildProjects) {
      return <ProjectList projects={project.childProjects} depth={this.props.depth + 1}/>;
    }
  }
}

export default Relay.createContainer(Project, {
  fragments: {
    initialVariables: {
      includeChildProjects: true
    },
    project: variables => Relay.QL`
        fragment on Project {
            uuid,
            title,
            summary,
            contributions,
            ${Project.getFragment('project').if(variables.includeChildProjects)}
        }
    `
  }
});
