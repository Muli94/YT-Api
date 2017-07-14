import React, { Component } from 'react';
import VideoListItem from './video_list_item.jsx';

class VideoList extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
        return <ul>
            {this.props.videos.map((video)=>{
                return <VideoListItem video={video}
                key={video.etag}/>
            })}
        </ul>
    }
}

export default VideoList;