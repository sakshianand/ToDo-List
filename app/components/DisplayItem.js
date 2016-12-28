var React = require('react');
var DisplayItem = React.createClass({
 getInitialState: function() {
   return  {
      editing:false
    };

},
propTypes: {
    todo: React.PropTypes.object.isRequired,
    handleDone:React.PropTypes.func.isRequired,
    handleDelete:React.PropTypes.func.isRequired
  },
  handleEditing:function(){
 this.setState({
 	editing:true,
 	changedText:this.props.todo.title
 })
  }, 
  handleEditingChange:function(e){
var _changedText = e.target.value;
this.setState({changedText:_changedText});
  },
  handleEditingDone:function(e){
  	console.log('editing is done');
  	if(e.keyCode === 13)
  	{
  		this.setState({editing:false})
  	}

  	  }, 
  	  componentDidMount:function(){
this.setState({
	changedText:this.props.todo.title
})
  	  },
render: function(){
	var todo = this.props.todo;
    var title = todo.title; 
   var viewStyle = {};
    var editStyle ={};
    if(this.state.editing)
    {
viewStyle.display ='none';
    }
    else
    {
editStyle.display = 'none';
    }
	return (
		<li className={ todo.done ? 'done' : '' }>
		<div style={viewStyle} onDoubleClick={this.handleEditing.bind(this)} >
		<input checked={todo.done} onChange={this.props.handleDone.bind(null,title)} type="checkbox" />
		<label>
		{this.state.changedText}
		</label>
		<a href="#"className="destroy" onClick={this.props.handleDelete.bind(null,title)}>[X]</a>
		</div>
		<input type="text" onChange={this.handleEditingChange.bind(this)} onKeyDown={this.handleEditingDone.bind(this)} style={editStyle} value={this.state.changedText} />
		</li>
		);
}
});
module.exports=DisplayItem;