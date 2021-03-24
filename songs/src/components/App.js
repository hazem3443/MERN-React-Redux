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

            <div className="ui row">
                <Provider store = {createStore(combineReducers({count:countreducer}))}>
                    <Counter/>
                </Provider>
            </div>
            <div className="ui row">
                <Provider store = {createStore(combineReducers({count:countreducer}))}>
                    <Counter/>
                </Provider>
            </div>
        </div>
    ); 
};

export default App;