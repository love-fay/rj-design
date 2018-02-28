/**
 * Created by feichongzheng on 16/12/18.
 */
import React from 'react';
import {Switch, Route, Router, Link} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Base from '../base';

const history = createBrowserHistory();

const HomePage = () => {
    return (
        <Link to='/base'>榕基组件库</Link>
    );
};

export default () => {
    return (
        <Router history={history}>
            <Switch>
                <Route exact strict path="/" component={HomePage}/>
                <Route path="/base" component={Base}/>
                {/*<Route path='/404' component={error.E404}/>*/}
                {/*<Route path='/401D3' component={error.E401D3}/>*/}
                {/*<Route path='/login' component={Login}/>*/}
                {/*<Route path={RouterPaths.UUMS} component={Uums}/>*/}
                {/*<Route path={RouterPaths.UC} component={Uc}/>*/}
                {/*<Route component={error.E404}/>*/}
            </Switch>
        </Router>
    );
}
