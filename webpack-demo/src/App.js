import React from 'react'
import './App.css';
import Button from '@material-ui/core/Button';
import Dashboard from './Dashboard';
const App = () => {
    return (
        <div className="App">
            <Button>Hello Button</Button>
            <Dashboard />
        </div>
    )
}
console.error('Error running app');
export default App;