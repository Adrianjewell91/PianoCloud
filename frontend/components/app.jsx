import React from 'react';
import {Route} from 'react-router-dom';

import GreetingContainer from "./greeting/greeting_container";
import SessionFormContainer from "./session/session_form_container";
import UserPageContainer from './user_page/user_page_container';
import {AuthRoute, ProtectedRoute} from "../util/route_util.jsx"

const App = () => (
  <div>
    <h1>NavBar Goes Here</h1>
    <AuthRoute exact path="/signup" component={SessionFormContainer} />
    <AuthRoute exact path="/login" component={SessionFormContainer} />

    <Route exact path="/" component={GreetingContainer}/>
    <Route exact path="/users/:username" component={UserPageContainer}/>
    <h3>Footer Goes here</h3>

  </div>
);

export default App;
