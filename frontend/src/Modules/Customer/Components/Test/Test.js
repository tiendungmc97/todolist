import React, { Component } from 'react';
import CustomerService from '../../Shared/CustomerService';

class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number1:  '',
            number2: '',
            total: '',
        }
    }
    onChangehandle = (e)=>{
        this.setState(state => ({
            [e.target.name]: e.target.value,
            // total: parseInt(state.number1) + parseInt(state.number2)
        }));
    }
    render() {
        return (
            <div>
                <h1>This is test component</h1>
                <input 
                    name="number1"
                    value={this.state.number1}
                    onChange={e => this.onChangehandle(e)}
                    placeholder="number1"
                ></input>
                <input 
                    name="number2"
                    value={this.state.number2}
                    onChange={e => this.onChangehandle(e)}
                    placeholder="number2"
                ></input>
                <h3>{this.state.total}</h3>
            </div>
        );
    }
}

export default Test;