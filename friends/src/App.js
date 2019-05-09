import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import axios from 'axios';
import FriendList from './components/FriendList'




class App extends React.Component {
  // add constructor and CDM
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    // fetch any initial data we need
    // axios.get(), axios.post(), .put(), .delete()
    axios
      .get('http://localhost:5000/friends')
      .then(res => {
        console.log(res);
        this.setState({ friends: res.data });
        
      })
      .then()
      .catch(err => {
        console.log(err);
        this.setState({ error: err.response.message });
      });
          console.log(this.state.friends)
  }

  render() {
    return (
      <div className="App">
        <h1 className="store-header">My Friends</h1>
      <Route 
        exact path="/" 
        render = {(props)=> ( 
            <FriendList
              {...props}
              friends={this.state.friends}
             />
             )}
        />
          </div>


    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  rootElement
);


export default App;
