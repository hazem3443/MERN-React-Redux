import React from 'react';
import ReactDom from 'react-dom';

import SeasonDisplay from "./SeasonDisplay";
import Spinner from './spinner';

class App extends React.Component {
    constructor(props){//this constructor overides the inherited class'(component) contructor
        super(props);//super is a reference to the parents' constructor function 
        //we call super inside our constructor means we construct the inherited class'(component which containes setup code) beside our constructor
        this.state = { lat: null ,errorMessage: ''};
    }
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude}),
            err =>this.setState({errorMessage: err.message})
        );
    }
    // componentDidUpdate(){
    //     console.log("component did update");
    // }

    renderContent(){
        if( this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>
        }else if(!this.state.errorMessage && this.state.lat){
            return <SeasonDisplay lat={this.state.lat} />
        }else{
            return(<Spinner message="please accept location request"/>)
        }
    }
    //React says we have to define render!!
    render() {
        // var x = ((this.state.errorMessage && !this.state.lat)&&(<div>Error: {this.state.errorMessage}</div>) )||((!this.state.errorMessage && this.state.lat)&&(<div>Lat: {this.state.lat}</div>))||((!this.state.errorMessage && !this.state.lat)&&'Loading!')
        // return x;
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        );
       
        // return ( 
        //     <div>Latitude: {this.state.lat}
        //          <br />
        //          Error: {this.state.errorMessage}
        //     </div> 
        // );
    }
}
 
export default App;

ReactDom.render(
    <App />,
    document.querySelector('#root')
);