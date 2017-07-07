var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      showCompleted: false,
      searchText: '',
      todos: [],
    };
  },
  handleOnAdd: function (todoitem) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: todoitem,
          completed: false
        }
      ]
    });
  },
  handleToggle: function (id) {
    var updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }

      return todo;
    });

    this.setState({todos: updatedTodos});
  },
  handleSearch: function (showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    })
  },
  render: function () {
    var {todos} = this.state;
    return (
      <div className="row">
        <TodoSearch onSearch={this.handleSearch}/>
        <div className="columns small-4">
          <TodoList todos={todos} onToggle={this.handleToggle}/>
          <AddTodo onAdd={this.handleOnAdd}/>
        </div>
      </div>
    )
  }
});

module.exports = TodoApp
