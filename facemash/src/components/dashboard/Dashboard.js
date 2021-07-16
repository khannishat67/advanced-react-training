import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { Link, Route, Switch, useHistory, useLocation } from 'react-router-dom';
import AddPostComponent from '../../components/add-post/AddPost';
import ViewPosts from '../../components/view-posts/ViewPosts';
import InstantMessages from '../instant-messages/InstantMessages';
const Dashboad = ({ match, isLoggedIn, user }) => {
    const messages = useRef(null)
    const history = useHistory();
    const location = useLocation();
    useEffect(() => {
        if (!isLoggedIn) {
            history.push('/login');
        }
    }, [])
    return (
        <React.Fragment>
            <Switch>

                <Route path="/dashboard/messages">
                    <InstantMessages />
                </Route>
                <Route path="">
                    <AddPostComponent />
                    <ViewPosts />
                </Route>
            </Switch>
        </React.Fragment>
    )
}

const mapStateToProps = (state) => ({
    isLoggedIn: state.login.isLoggedIn,
    user: state.login.user
})
export default connect(mapStateToProps)(Dashboad);