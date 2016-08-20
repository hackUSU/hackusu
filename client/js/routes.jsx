'use strict';

import React                          from 'react'; // if you use jsx, you have to have React imported
import { Router, Route, IndexRoute }  from 'react-router';

import appHistory                     from './history';
import Index                          from './components/layout/index';
import Home                           from './components/home';
import SignUp                         from './components/sign_up/sign_up';
import NotFound                       from './components/common/not_found';

export default (
  <Router history={appHistory}>
    <Route path='/' component={Index}>
      <IndexRoute component={Home} />
      <IndexRoute component={SignUp} />
    </Route>
    <Route path='/signup' component={Index}>
      <IndexRoute component={SignUp} />
    </Route>
    <Route path='*' component={NotFound} />
  </Router>
);
