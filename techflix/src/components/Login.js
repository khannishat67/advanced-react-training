import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { axiosClient } from '../constants';
import { login } from '../store/store';
const Login =  ({ onLogin, dispatch, isLoggedIn }) => {

    useEffect(() => {
        if (isLoggedIn) {
            history.push('/dashboard');
        }
    }, [])
    const history = useHistory();
    const [id, setId] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const loginUser = (e) => { 

        axiosClient.get(`/users/${id}`).then(res => {
            if (res && res.data) {
                dispatch(login(res.data))
                if (rememberMe) {
                    localStorage.setItem("user", JSON.stringify(res.data))
                }
                history.push("/dashboard");
            }
        })
    }

    return (<div>
        Login Page
            <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
            <input type="checkbox" checked={rememberMe} onClick={(e) => setRememberMe(!rememberMe)}/> Remember Me
            <button onClick={loginUser}>Login</button>
    </div>)
}

const mapStateProps = (state) => ({
    isLoggedIn: state.login.isLoggedIn
})

export default connect(mapStateProps)(Login);
/**
 * Higher order function = A function that takes a function as param or returns a function 
 * Array.map(() => {})
 * 
 */