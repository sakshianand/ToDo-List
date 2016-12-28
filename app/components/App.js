var React = require('react');
var Todolist =require('./Todolist');
var App = React.createClass({
	render: function(){
		return (
			<Todolist />
			);
	}
	
});
module.exports = App;