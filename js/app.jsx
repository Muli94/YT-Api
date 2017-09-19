import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import Menu from './components/menu.jsx';
import Footer from './components/footer.jsx';
import VideoDetail from './components/video_detail.jsx';
import VideoList from './components/video_list.jsx';


const API_KEY = 'AIzaSyCEC1278wg8tL3i7QEVomBvzh438mAsuvM';

class App extends Component{
    constructor(props){
        super(props)

        this.state={
            videos: [],
            selectedVideo: null,
        }
        this.handleVideosTerm('');
    }
    handleVideosTerm = (term) =>{
        YTSearch({key:API_KEY, term: term}, videos=>{
            this.setState({
                videos,
                selectedVideo: videos[0],
            })
        })
    }
    onVideoSelect = (selectedVideo) =>{
        this.setState({
            selectedVideo,
        })
    }
        render(){
            return (
                <div>
                    <Menu onInputChange={this.handleVideosTerm} />
                    {!this.state.selectedVideo ? <div>Loading...</div> : <VideoDetail selectedVideo={this.state.selectedVideo} />}
                    <VideoList 
                    videos={this.state.videos}
                    onVideoSelect={this.onVideoSelect}
                    />
                    <Footer />
                </div>
            )
        }
    }
document.addEventListener("DOMContentLoaded",()=>{

    ReactDOM.render(
    <App />,
    document.querySelector('#app'));
})