import React from 'react';
import Relay from 'react-relay';

class Project extends React.Component {
  render() {
    console.log(this.props);

    let project = this.props.project;

    return (
      <div>
        <h4>Project: {project.title}</h4>
        <p>{project.uuid}</p>
      </div>
    );
  }
}

export default Relay.createContainer(Project, {
  fragments: {
    project: variables => Relay.QL`
        fragment on Project {
            uuid,
            title
        }
    `
  }
});
