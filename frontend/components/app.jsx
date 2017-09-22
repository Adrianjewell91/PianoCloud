import React from 'react';
import {Route, Switch} from 'react-router-dom';

import NavBarContainer from "./nav_bar/nav_bar_container";
import GreetingContainer from "./greeting/greeting_container";
import UserPageContainer from './user_page/user_page_container';
import StreamPageContainer from "./tracks/stream_container";
import TrackFormContainer from "./upload_edit_track_form/track_form_container";


import {AuthRoute, ProtectedRoute} from "../util/route_util.jsx"

const App = () => (
  <div>
    <NavBarContainer/>


    <div className="main-page">
        <Route exact path="/stream" component={StreamPageContainer} />
        <Route exact path="/users/:username" component={UserPageContainer} />
        <ProtectedRoute path="/upload" component={TrackFormContainer} />
        <Route exact path="/" component={GreetingContainer} />
    </div>

    <div className="footer">Continuos Playback Goes Here (Soon to Come.)</div>

  </div>
);

export default App;



// <AuthRoute exact path="/signup" component={SessionFormContainer} />
// <AuthRoute exact path="/login" component={SessionFormContainer} />
