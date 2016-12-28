var React = require('react');
var Todoitems =require('./Todoitems');
var Todolist = React.createClass({

 getInitialState: function() {
    return {
      title: '',
      todos: []
    };
},
handleDone:function(titletobemarkedasdone)
{
	var _todos = this.state.todos;
	var todo = _todos.filter((todo) =>{
			return todo.title === titletobemarkedasdone;
	})[0];
	 todo.done = !todo.done;
	 this.setState({todos:_todos});
console.log(titletobemarkedasdone+'wants to be marked as done');
},
handleSubmit: function(e){
e.preventDefault();
var _title = this.state.title;
var newTodos = this.state.todos.concat({title:_title, done: false} );
console.log('form submitted value',_title);
this.setState({
    title: '',
    todos: newTodos

  });
},
handleChange: function(event){
	 
	//console.log( );
	 this.setState({
    title: event.target.value
  });
	
},
handleDelete: function(titletobedeleted)
{
var newTodos = this.state.todos.filter((todo)=>{
return todo.title != titletobedeleted
});
 this.setState({
    todos: newTodos
  });	

},
handleClearCompleted: function(e)
{
var newTodos = this.state.todos.filter((todo) => {return !todo.done});
this.setState({todos:newTodos})
},
render: function(){
	return (
		<div>
		<h1>Todo List</h1>
		
         <form onSubmit={this.handleSubmit}>
              <input type="text" onChange={this.handleChange} value={this.state.title} />
              
            </form>
           <Todoitems handleDone={this.handleDone.bind(this)} handleDelete={this.handleDelete.bind(this)} todos={this.state.todos} />
           <footer>All: {this.state.todos.length}|
    Completed: {this.state.todos.filter((todo)=> { return todo.done}).length}|Pending: {this.state.todos.filter((todo)=> { return !todo.done}).length} | <a href="#" onClick={this.handleClearCompleted}>Clear Completed</a></footer>
         </div>
         );
}
});
module.exports = Todolist;