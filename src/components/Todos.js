/* Class based component */

import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

export class Todos extends Component {
  render() {
    return this.props.todos_props.map((item_todo) => (
        <TodoItem key={item_todo.id} todoitem_props={item_todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo} />
    ))
  }
}

Todos.propTypes = {
    todos_props: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

export default Todos;
