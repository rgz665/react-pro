import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
import Routes from './routes'
class App extends Component {
  render(){
    return (
      <div className="App">  
          <Routes/>
      </div>
    );  
  }
}
App.defaultProps = {
  
}
export default withRouter(App);
