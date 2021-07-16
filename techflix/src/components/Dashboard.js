import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { Link, Switch, useHistory, useLocation, Route } from 'react-router-dom';
import AddMovie from './AddMovie';
import ViewMovies from './ViewMovies';
import Favourites from './Favourites';
const Dashboad = ({ match, isLoggedIn, user }) => {
    const messages = useRef(null)
    const history = useHistory();
    const location = useLocation();
    const showMessage = (message, type) => {
        messages.current.show({
            severity: type,
            detail: message
        });
    }
    useEffect(() => {
        if (!isLoggedIn) {
            history.push('/login');
        }
    }, [])
    return (
        <React.Fragment>
            <Switch>

                <Route path="/dashboard/add"><AddMovie /></Route>
                <Route path="/dashboard/favourites"><Favourites movies={[]} /></Route>
                <Route path=""><ViewMovies movies={[]} /></Route>
            </Switch>
        </React.Fragment>
    )
}

const mapStateToProps = (state) => ({
    isLoggedIn: state.login.isLoggedIn,
    user: state.login.user
})
export default connect(mapStateToProps)(Dashboad);