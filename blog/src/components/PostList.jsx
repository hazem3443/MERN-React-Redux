import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

const PostList = (props) => {

    useEffect( ()=>{
        props.fetchPost();
    });
    
    const [count, setCount] = useState(0);
    

    return ( <div>
                Post List 
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                Counts:{count}
                <br/>
                <button onClick={()=>{setCount(count+1)}}>
                    click Me
                </button>
            </div> );
}


 
export default connect(null,{fetchPost})(PostList);