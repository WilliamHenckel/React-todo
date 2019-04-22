/* Class based component */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends Component {
    state = {
        title: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: '' });
    }

    onChange = (e) => this.setState(
        { [e.target.name]: e.target.value }
    );

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{ display: 'flex', padding: '10px' }}>
                <input 
                    type="text" 
                    name="title" 
                    placeholder="Add Todo..." 
                    style={{ flexGrow: '10', height: '30px' }} 
                    value={ this.state.value } 
                    onChange={ this.onChange }
                />
                <input 
                    type="submit" 
                    value="Add" 
                    style={{ flexGrow: '1', border: '0' }}
                />
            </form>
        )
    }
}

AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
}

export default AddTodo;