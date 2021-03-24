import React from 'react';
import {connect} from 'react-redux';

const Counter = (props) => {
    return ( 
        <React.Fragment>
            <div className="column one wide">
                <i 
                    onClick={props.increment}
                    className="angle up icon"
                />
                <i 
                    onClick={props.decrement}
                    className="angle down icon"
                />
            </div>
            <div className="column two wide">
                <div className="ui label">
                  Counts
                  <div className="detail">{props.count}</div>
                </div>
            </div>
        </React.Fragment>
    );
}

//this should be into a separate reducers folder
//--Reducers ----> functions returns a single data object to be stored to redux vessle
//------ in this example we only need one reducer to increment and decrement  
export const countreducer=(count=0,action)=>{
    if(action.type==='increment'){
        return count+1;
    }
    else if(action.type==='decrement'){
        return count-1;
    }else{
        return count;
    }
}
//--actions then functions that takes data and return object to be passed into vessle (reducer) to be properly stored into vessle 
const increment =()=>({type:'increment'})
const decrement =()=>({type:'decrement'})

const mapStateToProp=(state)=>{
    console.log(state);
    return state
}

export default connect(mapStateToProp, {increment,decrement})(Counter);