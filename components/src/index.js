import React from 'react';
import ReactDom from 'react-dom';

import faker, { fake } from 'faker';

import CommentDetail from './CommentDetial';
import ApprovalCard from "./ApprovalCard";

const App=()=>{
// Will display time in 10:30 format
const formattedTime=()=> {
    return (new Date((faker.time.recent()) * 1000)).getHours() + ':' + ("0" + (new Date((faker.time.recent()) * 1000)).getMinutes()).substr(-2) +' '+ (((new Date((faker.time.recent())* 1000)).getHours()) >= 12 ? 'PM' : 'AM');
}
// console.log(formattedTime);    
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure you want to do this?
                </div>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    author="sam"
                    content="hi there"
                    posttime={formattedTime}
                    weekday={faker.date.weekday()}
                    avatar={faker.image.image()} />
            </ApprovalCard>
            
            <ApprovalCard>
                <CommentDetail
                    author="jac"
                    content="fine"
                    posttime={formattedTime}
                    weekday={faker.date.weekday()}
                    avatar={faker.image.image()} />
            </ApprovalCard>
            
            <ApprovalCard>
                <CommentDetail 
                    author="mickey"
                    content="good"
                    posttime={formattedTime}
                    weekday={faker.date.weekday()}
                    avatar={faker.image.image()} />
            </ApprovalCard>
        </div>
    );
}

ReactDom.render(<App/>,document.querySelector('#root'))