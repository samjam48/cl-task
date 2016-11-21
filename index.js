import React            from 'react';
import { render }       from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// data
import InitDB               from './config/Db.js';

// components
import App              from './modules/App';
import Welcome          from './modules/Welcome';
import Search           from './modules/Search';
import Projects         from './modules/Projects';
import ProjectPage      from './modules/ProjectPage';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();


InitDB(() => render((
        <Router history={browserHistory}>
            <Route path='/' component={App} >
                <Route path='/welcome' component={Welcome}/>
                <Route path='/search' initialData={DB} component={Search} >
                    <Route path='/search/:input' initialData={DB} component={Projects} />
                </Route>
                <Route path='/project/:id' initialData={DB} component={ProjectPage} />
            </Route>
        </Router>
    ), document.getElementById('app'))
)
