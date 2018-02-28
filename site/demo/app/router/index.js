/**
 * Created by feichongzheng on 16/12/18.
 */
import React from 'react';
import {Switch, Route, Router} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Demo from '../index';

const history = createBrowserHistory();

const HomePage = () => {
    return (
        <div>首页</div>
    );
};

export default () => {
    return (
        <Router history={history}>
            <Switch>
                <Route exact strict path="/" component={HomePage}/>
                <Route path="/demo" component={Demo}/>
            </Switch>
        </Router>
    );
}
