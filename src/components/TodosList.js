import React from 'react';

class TodosList extends React.Component {
    render() {
        const todos = this.props.todos.map((todo) => {
          return (<div className="row" key={todo.id}>
            <div className="col"><button className="btn btn-success" disabled={todo.complete} onClick={() => this.props.completeTodo(todo.id)}>Complete</button>
              {todo.title}
            <button className="btn btn-danger" onClick={() => this.props.removeTodo(todo.id)}>Delete</button></div>
        </div>);
        });
        return (
          <div>{todos}</div>
        );
    }
}


export default TodosList;
