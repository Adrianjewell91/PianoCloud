import React from 'react';
import {connect} from 'react-redux';

import UserPage from './user_page';


const mapStateToProps = state => ({
  currentUser: state.session.currentUser
  //gonna need tracks soon
});

const mapDispatchToProps = dispatch => ({
    // gonna need other stuff, here like, add song, delete song. All that stuff.
    
});

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
