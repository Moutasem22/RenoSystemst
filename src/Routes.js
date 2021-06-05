import React, { Component, Fragment } from 'react';
import { Route } from "react-router-dom";
import Users from './module/pages/grid/users/users'

class Router extends Component {
    render() {
        return (
            <Fragment>
                <Route exact path="/" render={() => <Users />} />
            </Fragment>
        );
    };
}
export default Router