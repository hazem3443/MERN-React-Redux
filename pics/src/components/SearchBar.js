import React from 'react';

class SearchBar extends React.Component {
    state = { term:'' }

    // constructor(){
    //     super();
    //     this.onFormSubmit = this.onFormSubmit.bind(this);
    // }

    onFormSubmit=(event)=>{
        event.preventDefault();
        this.props.onSubmit(this.state.term);
        // console.log(this.state.term);
    }
    // onInputChange(event){
    //     console.log(event);
    //     console.log(event.target.value);
    // }
    // onInputClick(event){
    //     console.log("input was click");
    // }
    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Image Search</label>
                        
                        <div className="ui icon input">
                            <i className="search icon"></i>
                            <input type="text" /*onClick={this.onInputClick}*/value={this.state.term} onChange={(e)=>{this.setState({term:e.target.value.toUpperCase()})}}/>
                        </div>

                    </div>
                </form>    
            </div> 
        );
    }
}
 
export default SearchBar;