import React, { Component } from 'react';

class TodoForm extends Component {
	onClick(event){
		event.preventDefault();
		const txt = this.todoTitle.value;
		this.props.onNewTodo({
			title: txt,
			creatdAt: new Date()
		})
	}
	render(){
		return(
			<div className="form">
				<input type="text" ref={(input) => this.todoTitle = input}/>
				<button onClick={this.onClick.bind(this)}>Ajouter</button>
			</div>
		)
	}
}

export default TodoForm;