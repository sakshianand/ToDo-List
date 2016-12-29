var React = require('react');
var ReactDOM =require('react-dom');
var App = require('./components/App');
app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
ReactDOM.render(<App />,document.getElementById('todoapp'));