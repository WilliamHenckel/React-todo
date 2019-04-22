import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import axios from 'axios';
// import uuid from 'uuid';
import './App.css';

class App extends Component {
  state = {
    todos_state: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos/?_limit=10')
      .then(res => this.setState({ todos_state:res.data }))
  }

  markComplete = (id) => {
    this.setState({todos_state: this.state.todos_state.map(todoItem => {
      if(todoItem.id === id) {
        todoItem.completed = !todoItem.completed;
      }
      return todoItem;
    }) }); 
  }

  delTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({todos_state: [...this.state.todos_state.filter(todoItem => todoItem.id !== id)]}))
  }

  addTodo = (title) => {
    // const newTodo = {
    //   id: uuid.v4(),
    //   title: title,
    //   completed: false
    // }
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title, 
      completed: false
    })
      .then(res => this.setState({todos_state : [...this.state.todos_state, res.data]}));
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" render={ props => (
            <React.Fragment>
              <AddTodo addTodo={ this.addTodo } />
              <Todos todos_props={ this.state.todos_state } markComplete={ this.markComplete } delTodo={ this.delTodo } />
            </React.Fragment>
          ) } />

          <Route path="/about" component={ About } />
        </div>
      </Router>
    );
  }
}

export default App;
