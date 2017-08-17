import React, { Component } from 'react';

class VideoDetail extends Component{
    constructor(props){
        super(props)

    }
    render(){
        return <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe src={"https://www.youtube.com/embed/"+this.props.selectedVideo.id.videoId} 
                className="embed-responsive-item"/>
            </div>
            <div className="details">
                <h1>{this.props.selectedVideo.snippet.title}</h1>
                <p>{this.props.selectedVideo.snippet.description}</p>
            </div>
        </div>
    }
}

export default VideoDetail;