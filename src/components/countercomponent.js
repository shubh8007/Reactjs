

import React from 'react';
import react, { Component } from 'react';
class CounterComponent extends React.Component{
    constructor(props){
        super(props);
        this.state=({count:0})


        
    }


    resetcomponent=()=>{
        this.setState({count:0})
    }
    decramentcomponent=()=>{
        if(this.state.count>0){
            this.setState({count:this.state.count-1})
        }
        else{
            this.setState({count:0})
        }
    }
    increamentcomponent=()=>{
        this.setState({count:this.state.count+1})
    }


    render(){
        return(<div>
            {this.state.count>0?<h3>component {this.state.count} times</h3>:""}

            <button type='button' id='btn' name='btn' value='btn' onClick={this.resetcomponent}>resetcomponent</button>
             <button type='button' id='btn' name='btn' value='btn' onClick={this.decramentcomponent}>decramentcomponent</button>
             <button type='button' id='btn' name='btn' value='btn' onClick={this.increamentcomponent}>increamentcomponent</button>
        </div>)
    }
 
}

export default CounterComponent;