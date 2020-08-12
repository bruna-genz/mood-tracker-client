import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      user: {},
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogin(data) {
    this.setState({
      isLoggedIn: true,
      user: data.user,
    });
  }

  handleLogout() {
    this.setState({
      isLoggedIn: false,
      user: {},
    });
  }

  loginStatus() {
    axios.get('http://localhost:3001/logged_in',
      { withCredentials: true }).then(response => {
      if (response.data.logged_in) {
        this.handleLogin(response);
      } else {
        this.handleLogout();
      }
    })
      .catch(error => console.log('api errors:', error));
  }

  componentDidMount() {
    this.loginStatus();
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" />
            <Route exact path="/login" />
            <Route exact path="/signup" />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
