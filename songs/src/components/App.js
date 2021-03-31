import React from 'react';

import SongList from './SongList';
import SongDetail from './SongDetail';

import Counter, {countreducer} from './Counter';

import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';

const App = () =>{
    return(
        <div className="ui container grid">
            <div className="ui row">
                <div className="column eight wide">
                    <SongList />
                </div>
                <div className="column eight wide">
                    <SongDetail />
                </div>
            </div>

            <Provider store = {createStore(combineReducers({count:countreducer}))}>
                <Counter/>
            </Provider>
            
            <Provider store = {createStore(combineReducers({count:countreducer}))}>
                <Counter/>
            </Provider>

        </div>
    ); 
};

export default App;