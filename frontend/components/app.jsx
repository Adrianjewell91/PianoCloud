import React from 'react';
import {Route, Switch} from 'react-router-dom';

import NavBarContainer from "./nav_bar/nav_bar_container";
import GreetingContainer from "./greeting/greeting_container";
import UserPageContainer from './user_page/user_page_container';
import StreamPageContainer from "./tracks/stream_container";

import {AuthRoute, ProtectedRoute} from "../util/route_util.jsx"

const App = () => (
  <div>
    <NavBarContainer/>


    <div className="main-page">

      <Switch>
        <Route path="/stream" component={StreamPageContainer} />
        <Route path="/users/:username" component={UserPageContainer} />
        <Route path="/" component={GreetingContainer} />
      </Switch>

    </div>

    <div className="footer">Footer Goes here</div>

  </div>
);

export default App;



// <AuthRoute exact path="/signup" component={SessionFormContainer} />
// <AuthRoute exact path="/login" component={SessionFormContainer} />
