var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      showCompleted: false,
      searchText: '',
      todos: [],
      itemCount: 1
    };
  },
  handleOnAdd: function (todoitem) {
    var {itemCount, todos} = this.state;
    this.setState({
      itemCount: itemCount + 1
    });
    var todo = {id: itemCount, text: todoitem};
    todos.push(todo);
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
          <TodoList todos={todos}/>
          <AddTodo onAdd={this.handleOnAdd}/>
        </div>
      </div>
    )
  }
});

module.exports = TodoApp
