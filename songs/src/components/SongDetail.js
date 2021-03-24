import React from 'react';
import {connect} from 'react-redux';

const SongDetail =({song})=>{
    console.log(song);
    return (
            <div>
                <h3>Details For:</h3>
                {(!song)?<p>Select a song Please</p>:(
                <p>
                    Title: {song.title}
                    <br/>
                    Duration: {song.duration}                    
                </p>
                )}
                
            </div> );
};

const mapStateToProps = (state) =>{
    return {song:state.selectedSong}
}

export default connect(mapStateToProps)(SongDetail);