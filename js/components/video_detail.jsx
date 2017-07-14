import React, { Component } from 'react';

class VideoDetail extends Component{
    constructor(props){
        super(props)

    }
    render(){
        return <div>
            <div>
                <iframe src={"https://www.youtube.com/embed/"+this.props.selectedVideo.id.videoId} />
            </div>
            <div>
                <h1>{this.props.selectedVideo.snippet.title}</h1>
                <p>{this.props.selectedVideo.snippet.description}</p>
            </div>
        </div>
    }
}

export default VideoDetail;