import React from 'react';
import {connect} from 'react-redux';
import UserPage from './user_page';

import {toArray} from "../../util/selectors";
import {requestUser} from "../../actions/users_actions";
//Will need to add ownProps to get history in order to search
const mapStateToProps = (state, ownProps) => ({
  artist: toArray(state.entities.users)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    // gonna need other stuff, here like, add song, delete song. All that stuff.
    requestUser: (username) => dispatch(requestUser(username))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
