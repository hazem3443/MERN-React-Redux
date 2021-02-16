import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';

class App extends React.Component {
    state = {
        images: []
    };
    onSearchSubmit = async (term)=>{
        const response = await unsplash.get('/search/photos??client_id=',{
            params:{ query: term }
        });
        // console.log(this);
        this.setState({ images: response.data.results });
        // console.log(response.data.results);
    }
    render() { 
        return ( 
        <div className="ui container" style={{marginTop:'10px'}}>
            <SearchBar onSubmit={this.onSearchSubmit}/>
            Found: {this.state.images.length} images
        </div> );
    }
}
 
export default App;
