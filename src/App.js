import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils';


class App extends React.Component {

  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribefromAuth = null

  componentDidMount(){
    this.unsubscribefromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});
      console.log(user);
    })
  }

  componentWillUnmount(){
    this.unsubscribefromAuth();
  }
  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}></Header>
        <Switch>
          {/* <HomePage /> */}
          <Route exact path='/' component = {HomePage} />
          <Route exact path='/shop' component = {ShopPage} />
          <Route exact path='/signIn' component = {SignInAndSignUpPage} />
          {/* <Route exact path='/hats' component = {HatsPage} /> */}
        </Switch>   
      </div>
    );
  }
 
}

export default App;
