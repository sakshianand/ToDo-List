var React = require('react');
var DisplayItem =require('./DisplayItem');
var Todoitems = React.createClass({
propTypes: {
    todos: React.PropTypes.array.isRequired,
    handleDone:React.PropTypes.func.isRequired,
    handleDelete:React.PropTypes.func.isRequired
  },	
render: function(){
	return (
		<div>
		<ul id="todo-list">{this.props.todos.map((todo,i)=>{
		return <section id="main" key={todo.id}>
			<DisplayItem  handleDone={this.props.handleDone} handleDelete={this.props.handleDelete.bind(null,todo.title)} todo={todo} />
					</section>
					})}</ul>

		
		</div>
		);
}
});
module.exports=Todoitems; 