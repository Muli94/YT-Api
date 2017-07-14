import React, { Component } from 'react';

class Menu extends Component{
    constructor(props){
        super(props)

        this.state={
            term:'',
        }
    }
    handleInputChange = (event) =>{
        if(typeof this.props.onInputChange === 'function'){
            this.setState({
                term: event.target.value,
            })
            this.props.onInputChange(event.target.value);
        }
    }
    render(){
        return(
            <header>
                <h1>Logo</h1>
                <input type="text"
                onChange={this.handleInputChange}/>
            </header>
        ) 
    }
}

export default Menu;