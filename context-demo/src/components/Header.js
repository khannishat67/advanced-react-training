import React, { useContext, useEffect } from 'react'
import { ThemeContext, UserContext } from '../App'
import logo from '../logo.svg';

export default () => {
    const theme = useContext(ThemeContext)
    const user = useContext(UserContext)
    useEffect(() => {
        console.log(theme);
        console.log(user)
    }, [])
    return (
        <header className="App-header" style={{
            backgroundColor: theme.theme === 'light' ? 'white' : '#282c34',
            color: theme.theme === 'light' ? '#282c34' : 'white'
        }}>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
            <button onClick={theme.toggleTheme }>Toggle Theme</button>
        </header>
    )
}