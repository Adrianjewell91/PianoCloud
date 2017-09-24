import React from 'react';
import {Route, Switch} from 'react-router-dom';

import NavBarContainer from "./nav_bar/nav_bar_container";
import GreetingContainer from "./greeting/greeting_container";
import UserPageContainer from './user_page/user_page_container';
import StreamPageContainer from "./tracks/stream_container";
import TrackFormContainer from "./upload_edit_track_form/track_form_container";
import TrackPageContainer from "./tracks/track_page_container";
import EditFormContainer from './upload_edit_track_form/edit_form_container';


import {AuthRoute, ProtectedRoute} from "../util/route_util.jsx"

const App = () => (
  <div>
    <NavBarContainer/>

    <div className="main-page">
      <Switch>
        <Route exact path="/stream" component={StreamPageContainer} />
        <Route exact path="/users/:user_name" component={UserPageContainer} />
        <Route exact path="/upload" component={TrackFormContainer} />
        <Route exact path="/" component={GreetingContainer} />
        <Route path="/:user_name/:track_name/edit"
               component={EditFormContainer} />
        <Route exact path="/:user_name/:track_name"
               component={TrackPageContainer} />

      </Switch>
    </div>

    <div className="footer">Continuous Playback Goes Here (Soon to Come.)</div>

  </div>
);

export default App;



// <AuthRoute exact path="/signup" component={SessionFormContainer} />
// <AuthRoute exact path="/login" component={SessionFormContainer} />
