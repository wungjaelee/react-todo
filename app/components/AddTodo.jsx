var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

var AddTodo = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();
    var {dispatch} = this.props;
    var todoitem = this.refs.todoitem.value;

    if (todoitem.length > 0) {
      this.refs.todoitem.value = '';
      dispatch(actions.addTodo(todoitem));
    } else {
      this.refs.todoitem.focus();
    }
  },
  render: function () {
    return (
      <div className="container__footer">
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref="todoitem" placeholder="What do you need to do?"/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    )
  }
});

module.exports = connect()(AddTodo);
