import React from 'react';
import Relay from 'react-relay';

import Project from './Project';

export default class ProjectList extends React.Component {
  render() {
    console.log(this.props);
    let projects = this.props.projects.map(project => {
      return <Project key={project.uuid} project={project} depth={this.props.depth}/>
    });

    return (
      <div>
        {projects}
      </div>
    );
  }
}