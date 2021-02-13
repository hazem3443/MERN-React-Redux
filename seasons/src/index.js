import React from 'react';
import ReactDom from 'react-dom';

import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
    render() { 
        window.navigator.geolocation.getCurrentPosition(
            (position) => console.log(position) ,
            (err) => console.log(err)
        );
        return ( <div>Latitude: </div> );
    }
}
 
export default App;


ReactDom.render(
    <App />,
    document.querySelector('#root')
);