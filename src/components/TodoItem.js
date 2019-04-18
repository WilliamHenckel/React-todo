import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class TodoItem extends Component {
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
      textDecoration: this.props.todoitem_props.completed ? 'line-through' : 'none'
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
      </div>
    );
  }
}

// TodoItem.propTypes = {
//     todoitem_proptype: PropTypes.object.isRequired
// }

export default TodoItem;
