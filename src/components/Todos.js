import React, { Component } from 'react';
import TodoItem from './TodoItem';
// import PropTypes from 'prop-types';

class Todos extends Component {
  render() {
    return this.props.todos_props.map((item_todo) => (
        <TodoItem key={item_todo.id} todoitem_props={item_todo} markComplete={this.props.markComplete} />
    ))
  }
}

// Todos.propTypes = {
//     todos_proptype: PropTypes.array.isRequired
// }

export default Todos;
