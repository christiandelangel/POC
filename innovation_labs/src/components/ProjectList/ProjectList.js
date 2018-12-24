import React from "react";
import { Image, Card, Divider } from "semantic-ui-react";
import PropTypes from "prop-types";

class ProjectList extends React.Component {
  strapiServer = "http://localhost:1337/";

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      projects: []
    };
  }

  handleShowProject = (e, Object) => {
    const project = Object.project;
    this.props.handleDisplayProject(project);
  };

  async componentDidMount() {
    let response = await fetch(this.strapiServer + "projects");
    if (!response.ok) {
      return;
    }
    let projects = await response.json();
    this.setState({ loading: false, projects: projects });
  }

  renderProjects = () => {
    return (
      <Card.Group itemsPerRow={3}>
        {Object.keys(this.state.projects).map(key => {
          const project = this.state.projects[key];
          return (
            <Card onClick={this.handleShowProject} project={project} key={key}>
              <Card.Content>
                <Image
                  centered
                  src={`https://source.unsplash.com/1600x900/?${project.Title}`}
                  size="large"
                />
                <Divider />
                <Card.Header>{project.Title}</Card.Header>
                <Card.Description> {project.Description} </Card.Description>
              </Card.Content>
            </Card>
          );
        })}
      </Card.Group>
    );
  };

  render() {
    if (this.state.loading) {
      return <div>Loading</div>;
    } else {
      return this.renderProjects();
    }
  }

  static propTypes = {
    handleDisplayProject: PropTypes.func.isRequired
  };
}

export default ProjectList;
