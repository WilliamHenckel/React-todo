import React, { Component } from 'react';
import Todos from './components/Todos';
import './App.css';

class App extends Component {
  state = {
    todos_state: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Dinner with wife',
        completed: false
      },
      {
        id: 3,
        title: 'Meeting with boss',
        completed: false
      },
    ]
  }

  markComplete = (id) => {
    this.setState({todos_state: this.state.todos_state.map(todoItem => {
      if(todoItem.id === id) {
        todoItem.completed = !todoItem.completed;
      }
      return todoItem;
    }) }); 
  }

  render() {
    return (
      <div className="App">
        <h1>App</h1>
        <Todos todos_props={this.state.todos_state} markComplete={this.markComplete} />
      </div>
    );
  }
}

export default App;
