import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { fetchPostsAndUsers } from '../actions';
import UserHeader from './UserHeader';


const PostList = (props) => {
    const callback=(func)=>{
        func();
    }
    const {fetchPostsAndUsers} =props;

    useEffect( ()=>{
        callback(fetchPostsAndUsers);
    },[fetchPostsAndUsers]);
    
    // console.log(props.posts);

    return (<div className="ui relaxed divided list">
                {renderList(props.posts)}
            </div>
            );
}

const renderList=(posts)=>{
    return posts.map(post=>{
        return (
            <div className="item" key={post.id}>
                <i className="large middle aligned icon user"/>
                <div className="content">
                    <div className="description">
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                    <UserHeader userId={post.userId}/>
                </div>
            </div>
        );
    });
};

const mapStateToProps=(state)=>{
    return {posts:state.posts};
}

export default connect(mapStateToProps,{fetchPostsAndUsers})(PostList);