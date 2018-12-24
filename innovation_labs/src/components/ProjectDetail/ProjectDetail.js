import React from "react";
import YouTube from "react-youtube";
import { Segment, Container, Header, Divider, Button, Icon, Ref } from "semantic-ui-react";
import PropTypes from "prop-types";

class ProjectDetail extends React.Component {

    constructor(props) {
        super(props);
    }

    opts = {//configuracion del reproductor
        width: "650px",
        height: "330px",
        showinfo: "1",

        playerVars: { // https://developers.google.com/youtube/player_parameters
            autoplay: 1,   
            frameborder:"0" ,
            allow:"accelerometer",
            allownetworking: "internal",
            allowfullscreen:"true", 
            encrypted: "media",
            rel: "0",
            modestbranding: "1",
            controls: "0",
        }
        
        // picture-in-picture,
    };

    onReady = event => event.target.pauseVideo();//Cuando el reproductor esta reproduciendo se ejecuta

    backToMain = (e, object) => {
        this.props.handleDisplayListProject();
    }

    handleRef = (node) => { 
        console.log(node);
     };

    render() {
        return (
            <Segment textAlign="center">
                <Container textAlign="left">
                    <Icon  onClick={this.backToMain} name='chevron circle left' size='big'></Icon>
                </Container>
                <Divider />

                <Container textAlign="center">
                    <Header as="h1">{this.props.Title}</Header>
                </Container>
                <Ref innerRef={this.handleRef}>
                    <YouTube sta videoId={this.props.Id_video} opts={this.opts} onReady={this.onReady} 
                    />
                </Ref>
                
                <Divider />
                
                <Container textAlign="justified">
                    {this.props.Description}
                </Container>
            </Segment>
        );
    }

    static propTypes = {
        handleDisplayListProject: PropTypes.func.isRequired,
        Title: PropTypes.string.isRequired,
        Id_video: PropTypes.string.isRequired,
        Description: PropTypes.string.isRequired,
    }
}

export default ProjectDetail;
