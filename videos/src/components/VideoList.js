import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos,onSelect}) => {
    // props.video
    const renderedList = videos.map((video)=>{
        return <VideoItem 
                    key={video.id.videoId}
                    onSelect={onSelect} 
                    video={video} 
                />;
    });
    return ( 
        <div className="ui relaxed divided list">
            {renderedList}
        </div> 
    );
}
 
export default VideoList;