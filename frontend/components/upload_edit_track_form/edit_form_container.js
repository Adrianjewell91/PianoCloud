import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {toArray} from "../../util/selectors";
import { updateTrack } from '../../actions/tracks_actions';
import TrackForm from './track_form';

const mapStateToProps = (state, ownProps) => {
  const errors = state.errors.tracks;
  const formType = "update";
  const track = toArray(state.tracks)[0];
  return {track, errors, formType};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const processForm = updateTrack;

  return {
    processForm: (formTrack) => dispatch(processForm(formTrack))
  };
};

export default withRouter(connect(mapStateToProps,
                                  mapDispatchToProps)(TrackForm));
