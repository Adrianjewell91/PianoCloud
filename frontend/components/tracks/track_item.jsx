import React from 'react';
import {Route, Link} from 'react-router-dom';
import TrackPageContainer from './track_page_container';

export const TrackItem = ({track, currentUser}) => {
    const source_url = track.track_recording.substring(0,4) + '-us-west-2' +
    track.track_recording.substring(4,track.track_recording.length);

    const handleClick = (e) => {
      e.preventDefault();
      e.target.value = e.target.value === "▶" ? "Pause" : "▶";
    }

    const editButton = <button>Edit</button>;
    const deleteButton = <button>Delete</button>;

    return (<li>
              {track.artist}
              <br/>
              <Link to={{ pathname: `/tracks/${track.title}`, query: {id: track.id}}}>
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
