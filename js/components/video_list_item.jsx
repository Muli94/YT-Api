import React, { Component } from 'react';

class VideoListItem extends Component{
    constructor(props){
        super(props)

        this.state={

        }
    }
    render(){
        return(
            <li>
                <div>
                    <div>
                        <img src={this.props.video.snippet.thumbnails.default.url} alt=""/>
                    </div>
                    <div>
                        <div>{this.props.video.snippet.title}</div>
                    </div>
                </div>
            </li>
        ) 
    }
}

export default VideoListItem;