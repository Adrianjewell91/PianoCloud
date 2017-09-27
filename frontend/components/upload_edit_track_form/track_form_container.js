import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createTrack, clearTrackErrors,
         receiveTrackErrors } from '../../actions/tracks_actions';
import TrackForm from './track_form';

const mapStateToProps = (state, ownProps) => {
  const errors = state.errors.tracks;
  const formType = "create"
  return {errors, formType};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const processForm = createTrack;

  return {
    processForm: (formTrack) => dispatch(processForm(formTrack)),
    receiveTrackErrors: (errors) => dispatch(receiveTrackErrors(errors)),
    clearTrackErrors: () => dispatch(clearTrackErrors())
  };
};

export default withRouter(connect(mapStateToProps,
                                  mapDispatchToProps)(TrackForm));
