import React from 'react';
import {Route, Link} from 'react-router-dom';
import TrackPageContainer from './track_page_container';

export const EditAndDeleteButtons = ({track, deleteTrack}) => {
  const handleDeleteClick = (e) => {
    e.preventDefault();
    console.log(this);
    deleteTrack(track.id);
  }

  const editButton = <Link to={`/${track.artist}/${track.title}/edit`}>
                     <button>Edit</button></Link>;

  const deleteButton = <button onClick={handleDeleteClick.bind(this)}>
                       Delete</button>;

  return (<div>
            {editButton}
            {deleteButton}
          </div>);
};
