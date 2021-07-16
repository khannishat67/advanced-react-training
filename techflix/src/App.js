import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { useEffect } from 'react';
import { login } from './store/actions/login';
import Header from './components/Header';
import Login from './components/Login';
import { useDispatch } from 'react-redux';
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      dispatch(login(JSON.parse(user)));
    }
  }, [])
  return (
    <div className="App">
    <Router>
      <Header appTitle={'TechFlix'} />
      <Switch>
        <Route path="/login" render={() => <Login key="something" />}>
        </Route>

        <Route path="/dashboard" render={() => <Dashboard />}>
        </Route>
      </Switch>
    </Router>
  </div>
  );
}

export default App;
