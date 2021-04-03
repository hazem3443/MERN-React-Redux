import _ from 'lodash';
import JsonPlaceHolder from '../apis/JsonPlaceHolder';

export const fetchPostsAndUsers = () => async (dispatch, getState) =>{
    await dispatch(fetchPosts());    
    
    // const userIds = _.uniq(_.map(getState().posts, 'userId'));
    // userIds.forEach((id)=> dispatch(fetchUser(id)) )

    //code refactor
    _.chain(getState().posts)
        .map('userId')
        .uniq()
        .forEach( id=> dispatch(fetchUser(id)) )
        .value();

};

//Bad approach!!!!  ->>>>> // const response = await JsonPlaceHolder.get('/posts');
export const fetchPosts= () => async dispatch=>{
    const response = await JsonPlaceHolder.get('/posts');
    dispatch({
        type:'FETCH_POSTS',
        payload:response.data
    });
};

export const fetchUser= id =>async dispatch=>{
    const response = await JsonPlaceHolder.get(`/users/${id}`);
    dispatch({
        type:'FETCH_USER',
        payload:response.data
    });
};



// const _fetchUser = _.memoize(async (id, dispatch) =>{
//     const response = await JsonPlaceHolder.get(`/users/${id}`);
//     dispatch({
//         type:'FETCH_USER',
//         payload:response.data
//     });
// });