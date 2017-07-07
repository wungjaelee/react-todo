var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
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
  render: function () {
    var {todos} = this.state;
    return (
      <div className="row">
        <div className="columns small-4">
          <TodoList todos={todos}/>
          <AddTodo onAdd={this.handleOnAdd}/>
        </div>
      </div>
    )
  }
});

module.exports = TodoApp
