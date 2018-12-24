import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
import ResponsiveContainer from "./ResponsiveContainer";
import ProjectDetail from "../ProjectDetail";
import ProjectList from "../ProjectList";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projectList: true,
      currentProject: {}
    };
  }

  showCompleteProject = project => {
    return (
      <ProjectDetail
        handleDisplayListProject={this.handleDisplayListProject}
        Title={project.Title}
        Id_video={project.Id_video}
        Description={project.Description}
      />
    );
  };

  handleDisplayProject = project => {
    if (project) {
      this.setState({ projectList: false, currentProject: project });
    }
  };

  handleDisplayListProject = () => {
    this.setState({ projectList: true, currentProject: {} });
  };

  render() {
    const projectList = this.state.projectList;
    const currentProject = this.state.currentProject;
    let renderComponent = {};
    if (projectList) {
      renderComponent = (
        <ProjectList handleDisplayProject={this.handleDisplayProject} />
      );
    } else {
      renderComponent = this.showCompleteProject(currentProject);
    }

    return (
      <ResponsiveContainer>
        <Segment padded vertical>
          {renderComponent}
        </Segment>
      </ResponsiveContainer>
    );
  }
}

export default Main;
