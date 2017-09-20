import React from 'react';
import {Route} from 'react-router-dom';

import NavBarContainer from "./nav_bar/nav_bar_container";
import GreetingContainer from "./greeting/greeting_container";
import UserPageContainer from './user_page/user_page_container';


import {AuthRoute, ProtectedRoute} from "../util/route_util.jsx"

const App = () => (
  <div>
    <NavBarContainer/>

    <Route exact path="/" component={GreetingContainer} />
    <Route exact path="/users/:username" component={UserPageContainer}/>

    <footer>Footer Goes here</footer>

  </div>
);

export default App;



// <AuthRoute exact path="/signup" component={SessionFormContainer} />
// <AuthRoute exact path="/login" component={SessionFormContainer} />
