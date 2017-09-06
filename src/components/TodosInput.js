import React from 'react';

class TodosInput extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: ''
    }
    this.submit = this.submit.bind(this);
  }
  submit(e) {
    e.preventDefault();
    if(this.state.todo) {
      this.props.addTodo(this.state.todo);
      this.setState({todo: ''});
    }
  }
    render() {
        return (
          <form className="form-inline" onSubmit={this.submit}>
          <div className="form-group">
            <input type="text" className="form-control" name="todo" value={this.state.todo} onChange={(e) => this.setState({[e.target.name]: e.target.value})} placeholder="Todo" />
          </div>
          <button type="submit" className="btn btn-default">Add Todo</button>
        </form>
        );
    }
}


export default TodosInput;
