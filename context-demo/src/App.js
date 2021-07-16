import './App.css';
import Header from './components/Header';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
export const ThemeContext = React.createContext()
export const UserContext = React.createContext();


function App() {
  const [theme, setTheme] = useState('light')
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light")
  const [user, setUser] = useState({
    name: '',
    isLoggedIn: false
  })
  const login = (user) => setUser({
    name: user.userName,
    isLoggedIn: true
  })
  const logout = () => setUser({
    name: '',
    isLoggedIn: false
  })
  useEffect(() => {
    console.log(theme);
  }, [theme])
  return (
    <div className="App">
      <ThemeContext.Provider value={{
        theme, toggleTheme
      }}>
        <UserContext.Provider value={{
          user: user.name,
          isLoggedIn: user.isLoggedIn,
          login,logout
        }}>
          <Router>
            <Switch>
              <Route path="/login" component={Login}></Route>
              <Route path="/dashboard" component={Dashboard}></Route>
            </Switch>
          </Router>
        </UserContext.Provider>
      </ThemeContext.Provider>

    </div>
  );
}

export default App;