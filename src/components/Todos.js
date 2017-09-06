import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TodosInput from './TodosInput';
import TodosList from './TodosList';
import * as actions from '../actions/index';

class Todos extends React.Component {
  constructor() {
    super();
    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
    this.complete = this.complete.bind(this);
  }
  add(todo) {
    this.props.actions.addTodo(todo);
  }
  remove(id) {
    this.props.actions.removeTodo(id);
  }
  complete(id) {
    this.props.actions.completeTodo(id);
  }
    render() {
      return (
        <div className="container">
          <TodosInput addTodo={this.add} />
          <TodosList todos={this.props.todos} removeTodo={this.remove} completeTodo={this.complete} />
        </div>
      )
    }
}
const mapStateToProps = function(store) {
  return {
    todos: store.todos
  }
}
const mapDispatchToProps = function(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
