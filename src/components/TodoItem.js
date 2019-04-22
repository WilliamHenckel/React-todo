/* Class based component */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
  getStyle = () => {
    // if (this.props.todoitem_props.completed) {
    //   return {
    //     textDecoration: 'line-through'
    //   }
    // } else {
    //   return {
    //     textDecoration: 'none'
    //   }
    // }
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todoitem_props.completed ? 'line-through' : 'none',
      display: 'flex',
      justifyContent: 'space-between'
    }
  }

  render() {
    const { id, title } = this.props.todoitem_props;

    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />
          {title}
        </p>
        <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>X</button>
      </div>
    );
  }
}

const btnStyle = {
  background: '#ff0000',
  color: 'white',
  border: 'none',
  width: '30px',
  height: '30px',
  borderRadius: '50%',
  cursor: 'pointer'
}

TodoItem.propTypes = {
  todoitem_props: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
}

export default TodoItem;
