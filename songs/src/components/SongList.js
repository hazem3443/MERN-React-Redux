import React ,{Component} from 'react';
import { connect } from 'react-redux';
import selectSong from '../actions';

class SongList extends Component{
    renderList(){
        return this.props.songs.map((song)=>{
            return (
                <div    
                    onClick={()=>this.props.selectSong(song)} 
                    className="item" key={song.title}
                >
                    <div className="right floated content">
                        <button 
                            onClick={()=>this.props.selectSong(song)}
                            className="ui button primary"
                        >
                            Select
                        </button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            );
        })
    }

    render(){
        // console.log(this.props);
        return <div className="ui divided list">{this.renderList()}</div>;
    }
}

//by convention this function is named 'mapStateToProps' which you can call it any thing 
const mapStateToProps = (state) =>{
    // console.log(state);
    return { songs: state.songs };
}

export default connect(mapStateToProps, {selectSong} )(SongList);