var React = require('react');

var AddTodo = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();

    var todoitem = this.refs.todoitem.value;

    if (todoitem.length > 0) {
      this.refs.todoitem.value = '';
      this.props.onAdd(todoitem);
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

module.exports = AddTodo;
