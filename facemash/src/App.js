import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';

import { useEffect, useRef, useState } from 'react';
import Dashboard from './components/dashboard/Dashboard';
import Login from './components/login/Login';
import SignUp from './components/sign-up/SignUp';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import NotFound from './components/NotFound';
import { useDispatch } from 'react-redux';
import { login } from './store/actions/login';
import {Container} from '@material-ui/core'
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      dispatch(login(JSON.parse(user)));
    }
  }, [])
  const [someValue, setSomeValue] = useState(100)
  return (
    <div className="App">
      <Router>
        <Header appTitle={'Facemash'} />
        <Container style={{
          marginTop: '70px'
        }} maxWidth="lg">

          <Switch>
            <Route path="/login" render={() => <Login value={someValue} key="something" />}>
            </Route>
            <Route path="/signup" render={() => <SignUp />}>
            </Route>
            <Route path="/dashboard" render={() => <Dashboard />}>
            </Route>
            <Route path="**" render={() => <NotFound />}></Route>
          </Switch>
        </Container>
      </Router>
    </div>
  );
}
/**
 * Customer
 * Vendor ->> Access Denied
 * Admin
 * SU
 */
/**
 * Store - Contain the current state of the application
 * Action - Any change that needs to be done on the store
 * Reducer - How will the change occur
 * 
 * store = {
 *  username: "nishat"
 * }
 * action -> {type: CHANGE_USERNAME payload: 'khanagain'}
 * reducer -> (state, action) => return {
 *  username: action.payload
 * }
 */
export default App;
