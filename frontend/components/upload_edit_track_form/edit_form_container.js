import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {toArray} from "../../util/selectors";
import { updateTrack, requestTrack, clearTrackErrors,
         receiveTrackErrors } from '../../actions/tracks_actions';
import TrackForm from './track_form';

const mapStateToProps = (state, ownProps) => {
  const errors = state.errors.tracks;
  const formType = "update";
  const track = toArray(state.entities.tracks)[0];
  return {track, errors, formType};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const processForm = updateTrack;

  return {
    processForm: (formTrack, id) => dispatch(processForm(formTrack, id)),
    requestTrack: (track) => dispatch(requestTrack(track)),
    receiveTrackErrors: (errors) => dispatch(receiveTrackErrors(errors)),
    clearTrackErrors: () => dispatch(clearTrackErrors())
  };
};

export default withRouter(connect(mapStateToProps,
                                  mapDispatchToProps)(TrackForm));
