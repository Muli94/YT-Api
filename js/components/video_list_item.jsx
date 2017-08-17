import React, { Component } from 'react';

class VideoListItem extends Component{
    constructor(props){
        super(props)

        this.state={

        }
    }
    handleVideoSelect = () =>{
        if(typeof this.props.onVideoSelect === 'function'){
            this.props.onVideoSelect(this.props.video);
        }
    }
    render(){
        return(
            <li onClick={this.handleVideoSelect}
            className="list-group-item">
                <div className="video-list media">
                    <div className="media-left">
                        <img src={this.props.video.snippet.thumbnails.default.url} alt=""
                        className="media-object"/>
                    </div>
                    <div className="media-body">
                        <div className="media-heading">{this.props.video.snippet.title}</div>
                    </div>
                </div>
            </li>
        ) 
    }
}

export default VideoListItem;