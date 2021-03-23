//Action Creator
const selectSong = (song) =>{
    //return an action
    return{
        type: 'SONG_SELECTED', //is required to redux structure
        payload: song
    };
};

export default selectSong;