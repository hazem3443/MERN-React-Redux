import axios from 'axios';
import React, { Component } from 'react';

import SearchBar from './SearchBar';
import Youtube from '../api/Youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends Component {
    state = { 
        videos: [],
        selectedVideo: null
    };
    componentDidMount(){
        this.onTermSubmit('adele');
    }
    onVideoSelect=(video)=>{
        // console.log('clicked'+video);
        this.setState({selectedVideo:video})
    }
    onTermSubmit= async (term)=>{
        // console.log(term);
        const response = await Youtube.get('/search',{
            params:{
                q:term
            }
        });
        // console.log(response.data.items);

        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
    };

    render() { 
        return ( 
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                {/* i have {this.state.videos.length} videos. */}
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column">
                            <VideoList 
                                onSelect={this.onVideoSelect} 
                                videos={this.state.videos}
                            />
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default App;