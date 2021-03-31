import JsonPlaceHolder from '../apis/JsonPlaceHolder';

export const fetchPost= () =>
    //Bad approach!!!!  ->>>>> // const response = await JsonPlaceHolder.get('/posts');
    async dispatch=>{
        const response = await JsonPlaceHolder.get('/posts');
        dispatch({
            type:'FETCH_POSTS',
            payload:response
        });
    };