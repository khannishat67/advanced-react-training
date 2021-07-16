import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { axiosClient } from '../../constants';
import { login } from '../../store/actions/login';
import { Paper, Typography, TextField, FormControlLabel, Checkbox, Button } from '@material-ui/core'
import './Login.css';
const Login = ({ onLogin, dispatch, isLoggedIn }) => {

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

    return (
        <Paper className="login-container">
            <Typography variant="h4" style={{
                textAlign: 'center'
            }}>
                Login
            </Typography>
            <TextField variant="outlined" label="User Id" placeholder={'UserId'} type="text" value={id} onChange={(e) => setId(e.target.value)} />
            <FormControlLabel
                control={<Checkbox checked={rememberMe} onClick={(e) => setRememberMe(!rememberMe)} />}
                label="Remember Me"
            />
            <Button color="primary" variant="contained" onClick={loginUser}>Login</Button>
        </Paper>
    )
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