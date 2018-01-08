import React from 'react';
import {Route, Link} from 'react-router-dom';
import TrackPageContainer from './track_page_container';

export const EditAndDeleteButtons = ({track, deleteTrack}) => {
  const handleDeleteClick = (e) => {
    e.preventDefault();
    deleteTrack(track.id);
  }

  const editButton = <Link to={`/${track.artist}/${track.title}/edit`}>
                     <button className="edit-delete-button">Edit</button></Link>;

  const deleteButton = <button className="edit-delete-button"
                               onClick={handleDeleteClick.bind(this)}>
                       Delete</button>;

  return (<div className="edit-delete">{editButton}{deleteButton}</div>);
};


export const JustTheButtons = ({track, handleClick}) => {

    const editButton = <Link to={`/${track.artist}/${track.title}/edit`}>
                       <button className="edit-delete-button">Edit</button></Link>;

    const deleteButton = <button className="edit-delete-button"
                                 onClick={handleClick}>
                         Delete Track</button>;

   return (<div className="edit-delete">{editButton}{deleteButton}</div>);
}
