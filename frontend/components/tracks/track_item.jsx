import React from 'react';
import {Route, Link} from 'react-router-dom';
import TrackPageContainer from './track_page_container';

export const TrackItem = ({track, currentUser, updateTrack, deleteTrack}) => {
    const handleClick = (e) => {
      e.preventDefault();
      e.target.value = e.target.value === "▶" ? "Pause" : "▶";
    }

    const handleEditClick = (e) => {
      e.preventDefault();
    }

    const handleDeleteClick = (e) => {
      e.preventDefault();
      deleteTrack(track.id);
    }

    const editButton = <button onClick={handleEditClick.bind(this)}>
                        Edit</button>;
    const deleteButton = <button onClick={handleDeleteClick.bind(this)}>
                        Delete</button>;

    return (<li>
              {track.artist}
              <br/>

              <Link to={{ pathname: `/${track.artist}/${track.title}`, query: {id: track.id}}}>
              {track.title}</Link>
              {editButton}
              {deleteButton}
            </li>);

};

export default TrackItem;



 //Deal with track Item later.

 // <audio src={"test"} type="audio/mp3"/>

 //  <button onClick={this.handleClick.bind(this)}>▶</button>
 //  {track.artist}
