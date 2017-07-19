import React, { Component } from 'react';

class List extends Component {
	render(){
		return(
			<div className="liste">
				Todos : {this.props.todos.length}
				{this.showTodos(this.props.todos)}
			</div>
		);
	}

	showTodos(todos){
		return(
			todos.map((todo) => {
				return(
					<div className="todo">{todo.title}</div>
				);
			})
		);
	}
}

export default List;